import { create } from "zustand";
import { dashboardStorage } from "@/lib/storage/dashboardStorage";

interface DashboardStore {
  // State
  favorites: string[]; // Model slugs
  isInitialized: boolean;

  // Actions
  initialize: () => void;
  toggleFavorite: (slug: string) => void;
  isFavorite: (slug: string) => boolean;
  clearAllFavorites: () => void;
  getFavoritesCount: () => number;
}

export const useDashboardStore = create<DashboardStore>((set, get) => ({
  favorites: [],
  isInitialized: false,

  initialize: () => {
    if (get().isInitialized) return;
    const initialFavorites = dashboardStorage.getFavorites();
    set({ favorites: initialFavorites, isInitialized: true });
  },

  toggleFavorite: (slug: string) => {
    const updated = dashboardStorage.toggleFavorite(slug);
    set({ favorites: updated });
  },

  isFavorite: (slug: string) => {
    return get().favorites.includes(slug);
  },

  clearAllFavorites: () => {
    const updated = dashboardStorage.clearFavorites();
    set({ favorites: updated });
  },

  getFavoritesCount: () => {
    return get().favorites.length;
  },
}));
