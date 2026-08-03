import { create } from "zustand";
import { AIModel } from "@/types/model";

interface AdminStore {
  isAuthenticated: boolean;
  models: AIModel[];
  isLoading: boolean;
  searchQuery: string;
  categoryFilter: string;
  providerFilter: string;
  selectedModel: AIModel | null;
  isAddModalOpen: boolean;
  isEditModalOpen: boolean;
  isDeleteModalOpen: boolean;
  isImportModalOpen: boolean;

  // Actions
  login: (passcode: string) => Promise<boolean>;
  logout: () => void;
  fetchAdminModels: () => Promise<void>;
  createModel: (model: AIModel) => Promise<{ success: boolean; error?: string }>;
  updateModel: (slug: string, updates: Partial<AIModel>) => Promise<{ success: boolean; error?: string }>;
  deleteModel: (slug: string) => Promise<{ success: boolean; error?: string }>;
  
  // UI actions
  setSearchQuery: (query: string) => void;
  setCategoryFilter: (cat: string) => void;
  setProviderFilter: (prov: string) => void;
  openAddModal: () => void;
  closeAddModal: () => void;
  openEditModal: (model: AIModel) => void;
  closeEditModal: () => void;
  openDeleteModal: (model: AIModel) => void;
  closeDeleteModal: () => void;
  openImportModal: () => void;
  closeImportModal: () => void;
}

export const useAdminStore = create<AdminStore>((set, get) => ({
  isAuthenticated: typeof window !== "undefined" ? localStorage.getItem("admin_authed") === "true" : false,
  models: [],
  isLoading: false,
  searchQuery: "",
  categoryFilter: "all",
  providerFilter: "all",
  selectedModel: null,
  isAddModalOpen: false,
  isEditModalOpen: false,
  isDeleteModalOpen: false,
  isImportModalOpen: false,

  login: async (passcode: string) => {
    try {
      const res = await fetch("/api/admin/auth", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ passcode }),
      });
      const data = await res.json();
      if (data.success) {
        localStorage.setItem("admin_authed", "true");
        set({ isAuthenticated: true });
        return true;
      }
      return false;
    } catch {
      return false;
    }
  },

  logout: () => {
    if (typeof window !== "undefined") {
      localStorage.removeItem("admin_authed");
    }
    set({ isAuthenticated: false });
  },

  fetchAdminModels: async () => {
    set({ isLoading: true });
    try {
      const res = await fetch("/api/admin/models");
      const json = await res.json();
      if (json.data) {
        set({ models: json.data, isLoading: false });
      }
    } catch (err) {
      console.error("Failed to fetch admin models", err);
      set({ isLoading: false });
    }
  },

  createModel: async (model: AIModel) => {
    try {
      const res = await fetch("/api/admin/models", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(model),
      });
      const json = await res.json();

      if (!res.ok) {
        return { success: false, error: json.error || "Failed to create model" };
      }

      await get().fetchAdminModels();
      return { success: true };
    } catch {
      return { success: false, error: "Network error creating model" };
    }
  },

  updateModel: async (slug: string, updates: Partial<AIModel>) => {
    try {
      const res = await fetch(`/api/admin/models/${slug}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updates),
      });
      const json = await res.json();

      if (!res.ok) {
        return { success: false, error: json.error || "Failed to update model" };
      }

      await get().fetchAdminModels();
      return { success: true };
    } catch {
      return { success: false, error: "Network error updating model" };
    }
  },

  deleteModel: async (slug: string) => {
    try {
      const res = await fetch(`/api/admin/models/${slug}`, {
        method: "DELETE",
      });
      const json = await res.json();

      if (!res.ok) {
        return { success: false, error: json.error || "Failed to delete model" };
      }

      await get().fetchAdminModels();
      return { success: true };
    } catch {
      return { success: false, error: "Network error deleting model" };
    }
  },

  setSearchQuery: (query) => set({ searchQuery: query }),
  setCategoryFilter: (cat) => set({ categoryFilter: cat }),
  setProviderFilter: (prov) => set({ providerFilter: prov }),

  openAddModal: () => set({ isAddModalOpen: true, selectedModel: null }),
  closeAddModal: () => set({ isAddModalOpen: false }),
  openEditModal: (model) => set({ isEditModalOpen: true, selectedModel: model }),
  closeEditModal: () => set({ isEditModalOpen: false, selectedModel: null }),
  openDeleteModal: (model) => set({ isDeleteModalOpen: true, selectedModel: model }),
  closeDeleteModal: () => set({ isDeleteModalOpen: false, selectedModel: null }),
  openImportModal: () => set({ isImportModalOpen: true }),
  closeImportModal: () => set({ isImportModalOpen: false }),
}));
