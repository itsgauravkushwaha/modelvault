import { create } from "zustand";
import { AIModel, Availability, Modality, PricingType, UseCase } from "@/types/model";
import { MODELS } from "@/data/models";

function parseContextWindow(ctx: string): number {
  if (!ctx || ctx === "N/A") return 0;
  const lower = ctx.toLowerCase().trim();
  if (lower.endsWith("m")) return parseFloat(lower) * 1_000_000;
  if (lower.endsWith("k")) return parseFloat(lower) * 1_000;
  return parseFloat(lower) || 0;
}

function getBenchmarkScore(m: AIModel): number {
  if (!m.benchmarks || m.benchmarks.length === 0) return 0;
  const score = m.benchmarks[0].score;
  return typeof score === "number" ? score : parseFloat(String(score)) || 0;
}

let debounceTimer: ReturnType<typeof setTimeout> | null = null;

interface DirectoryStore {
  // State
  allModels: AIModel[];
  isDbLoaded: boolean;
  searchQuery: string;
  debouncedSearchQuery: string;
  useCaseFilter: UseCase | "all";
  availabilityFilter: Availability | "all";
  pricingFilter: PricingType | "all";
  providerFilter: string | "all";
  modalityFilter: Modality | "all";
  hasApiOnly: boolean;
  hasSelfHostOnly: boolean;
  sortBy: "popularity" | "newest" | "context" | "benchmark" | "name";
  compareList: string[]; // model slugs (max 4)
  isFilterOpen: boolean;

  // Actions
  loadModelsFromDb: () => Promise<void>;
  setSearchQuery: (query: string, immediate?: boolean) => void;
  setUseCaseFilter: (useCase: UseCase | "all") => void;
  setAvailabilityFilter: (availability: Availability | "all") => void;
  setPricingFilter: (pricing: PricingType | "all") => void;
  setProviderFilter: (provider: string | "all") => void;
  setModalityFilter: (modality: Modality | "all") => void;
  setHasApiOnly: (val: boolean) => void;
  setHasSelfHostOnly: (val: boolean) => void;
  setSortBy: (sort: "popularity" | "newest" | "context" | "benchmark" | "name") => void;
  toggleCompare: (slug: string) => void;
  removeFromCompare: (slug: string) => void;
  clearCompare: () => void;
  resetFilters: () => void;
  toggleFilterOpen: () => void;

  // Helpers
  getFilteredModels: () => AIModel[];
}

export const useDirectoryStore = create<DirectoryStore>((set, get) => ({
  allModels: MODELS, // pre-seed with static data for SSR / instant render
  isDbLoaded: false,
  searchQuery: "",
  debouncedSearchQuery: "",
  useCaseFilter: "all",
  availabilityFilter: "all",
  pricingFilter: "all",
  providerFilter: "all",
  modalityFilter: "all",
  hasApiOnly: false,
  hasSelfHostOnly: false,
  sortBy: "popularity",
  compareList: [],
  isFilterOpen: false,

  loadModelsFromDb: async () => {
    if (get().isDbLoaded) return;
    try {
      const res = await fetch("/api/models");
      const json = await res.json();
      if (json.data && Array.isArray(json.data)) {
        set({ allModels: json.data, isDbLoaded: true });
      }
    } catch {
      // Fallback: keep static MODELS data
      set({ isDbLoaded: true });
    }
  },

  setSearchQuery: (query, immediate = false) => {
    set({ searchQuery: query });
    if (debounceTimer) {
      clearTimeout(debounceTimer);
      debounceTimer = null;
    }

    if (immediate || !query.trim()) {
      set({ debouncedSearchQuery: query });
    } else {
      debounceTimer = setTimeout(() => {
        set({ debouncedSearchQuery: query });
      }, 250);
    }
  },

  setUseCaseFilter: (useCase) => set({ useCaseFilter: useCase }),
  setAvailabilityFilter: (availability) => set({ availabilityFilter: availability }),
  setPricingFilter: (pricing) => set({ pricingFilter: pricing }),
  setProviderFilter: (provider) => set({ providerFilter: provider }),
  setModalityFilter: (modality) => set({ modalityFilter: modality }),
  setHasApiOnly: (val) => set({ hasApiOnly: val }),
  setHasSelfHostOnly: (val) => set({ hasSelfHostOnly: val }),
  setSortBy: (sort) => set({ sortBy: sort }),

  toggleCompare: (slug) => {
    const current = get().compareList;
    if (current.includes(slug)) {
      set({ compareList: current.filter((s) => s !== slug) });
    } else {
      if (current.length < 4) {
        set({ compareList: [...current, slug] });
      }
    }
  },

  removeFromCompare: (slug) => {
    set({ compareList: get().compareList.filter((s) => s !== slug) });
  },

  clearCompare: () => set({ compareList: [] }),

  resetFilters: () => {
    if (debounceTimer) {
      clearTimeout(debounceTimer);
      debounceTimer = null;
    }
    set({
      searchQuery: "",
      debouncedSearchQuery: "",
      useCaseFilter: "all",
      availabilityFilter: "all",
      pricingFilter: "all",
      providerFilter: "all",
      modalityFilter: "all",
      hasApiOnly: false,
      hasSelfHostOnly: false,
      sortBy: "popularity",
    });
  },

  toggleFilterOpen: () => set((state) => ({ isFilterOpen: !state.isFilterOpen })),

  getFilteredModels: () => {
    const {
      allModels,
      searchQuery,
      debouncedSearchQuery,
      useCaseFilter,
      availabilityFilter,
      pricingFilter,
      providerFilter,
      modalityFilter,
      hasApiOnly,
      hasSelfHostOnly,
      sortBy,
    } = get();

    const activeQuery = (debouncedSearchQuery !== undefined ? debouncedSearchQuery : searchQuery).trim();

    return allModels.filter((model) => {
      // Search
      if (activeQuery) {
        const q = activeQuery.toLowerCase();
        const matchName = model.name.toLowerCase().includes(q);
        const matchProvider = model.provider.toLowerCase().includes(q);
        const matchDesc = model.description.toLowerCase().includes(q);
        const matchTags = model.tags.some((t) => t.toLowerCase().includes(q));
        const matchAliases = model.aliases?.some((a) => a.toLowerCase().includes(q)) ?? false;
        if (!matchName && !matchProvider && !matchDesc && !matchTags && !matchAliases) {
          return false;
        }
      }

      // Category / Use case
      if (useCaseFilter !== "all" && !model.useCases.includes(useCaseFilter)) {
        return false;
      }

      // Availability
      if (availabilityFilter !== "all") {
        if (availabilityFilter === "cloud" && model.availability === "local") return false;
        if (availabilityFilter === "local" && model.availability === "cloud") return false;
      }

      // Pricing
      if (pricingFilter !== "all" && model.pricing !== pricingFilter) {
        return false;
      }

      // Provider
      if (providerFilter !== "all" && model.providerSlug !== providerFilter) {
        return false;
      }

      // Modality
      if (modalityFilter !== "all" && !model.modalities.includes(modalityFilter)) {
        return false;
      }

      // Switches
      if (hasApiOnly && !model.hasApi) return false;
      if (hasSelfHostOnly && !model.hasSelfHost) return false;

      return true;
    }).sort((a, b) => {
      if (sortBy === "newest") {
        return new Date(b.releaseDate).getTime() - new Date(a.releaseDate).getTime();
      }
      if (sortBy === "name") {
        return a.name.localeCompare(b.name);
      }
      if (sortBy === "context") {
        return parseContextWindow(b.contextWindow) - parseContextWindow(a.contextWindow);
      }
      if (sortBy === "benchmark") {
        return getBenchmarkScore(b) - getBenchmarkScore(a);
      }
      if (sortBy === "popularity") {
        return (b.featured ? 2 : 0) + (b.trending ? 1 : 0) - ((a.featured ? 2 : 0) + (a.trending ? 1 : 0));
      }
      return 0;
    });
  },
}));
