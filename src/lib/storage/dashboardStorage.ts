/**
 * Production-ready LocalStorage Persistence Layer for ModelVault User Workspace.
 * Single storage object key with versioning and validation for future compatibility.
 */

export const WORKSPACE_STORAGE_KEY = "modelvault_user_workspace";
export const WORKSPACE_SCHEMA_VERSION = 1;

export interface UserWorkspaceSchema {
  version: number;
  favorites: string[];          // Array of favorited model slugs
  recentlyViewed: string[];     // Array of recently viewed model slugs
  savedComparisons: string[][]; // Array of saved model comparison slug sets
  searchHistory: string[];      // Array of recent search query strings
  settings: {
    theme?: "system" | "light" | "dark";
    gridDensity?: "comfortable" | "compact";
    notificationsEnabled?: boolean;
  };
}

const DEFAULT_WORKSPACE: UserWorkspaceSchema = {
  version: WORKSPACE_SCHEMA_VERSION,
  favorites: [],
  recentlyViewed: [],
  savedComparisons: [],
  searchHistory: [],
  settings: {
    theme: "system",
    gridDensity: "comfortable",
    notificationsEnabled: true,
  },
};

/**
 * Validates and ensures the workspace object matches the expected schema shape.
 */
function validateSchema(data: unknown): UserWorkspaceSchema {
  if (!data || typeof data !== "object") {
    return { ...DEFAULT_WORKSPACE };
  }

  const obj = data as Record<string, unknown>;

  return {
    version: typeof obj.version === "number" ? obj.version : WORKSPACE_SCHEMA_VERSION,
    favorites: Array.isArray(obj.favorites) ? obj.favorites.filter((x): x is string => typeof x === "string") : [],
    recentlyViewed: Array.isArray(obj.recentlyViewed) ? obj.recentlyViewed.filter((x): x is string => typeof x === "string") : [],
    savedComparisons: Array.isArray(obj.savedComparisons) ? obj.savedComparisons.filter(Array.isArray) as string[][] : [],
    searchHistory: Array.isArray(obj.searchHistory) ? obj.searchHistory.filter((x): x is string => typeof x === "string") : [],
    settings: (obj.settings && typeof obj.settings === "object") ? (obj.settings as UserWorkspaceSchema["settings"]) : { ...DEFAULT_WORKSPACE.settings },
  };
}

export const dashboardStorage = {
  /**
   * Initializes and reads the current workspace state from LocalStorage.
   */
  getWorkspace(): UserWorkspaceSchema {
    if (typeof window === "undefined") return { ...DEFAULT_WORKSPACE };

    try {
      const raw = localStorage.getItem(WORKSPACE_STORAGE_KEY);
      if (!raw) {
        localStorage.setItem(WORKSPACE_STORAGE_KEY, JSON.stringify(DEFAULT_WORKSPACE));
        return { ...DEFAULT_WORKSPACE };
      }
      const parsed = JSON.parse(raw);
      const validated = validateSchema(parsed);
      return validated;
    } catch (err) {
      console.warn("Error reading workspace from storage:", err);
      return { ...DEFAULT_WORKSPACE };
    }
  },

  /**
   * Writes the full workspace object to LocalStorage.
   */
  saveWorkspace(workspace: UserWorkspaceSchema): boolean {
    if (typeof window === "undefined") return false;

    try {
      localStorage.setItem(WORKSPACE_STORAGE_KEY, JSON.stringify(workspace));
      return true;
    } catch (err) {
      console.error("Error saving workspace to storage:", err);
      return false;
    }
  },

  /**
   * Returns array of favorite model slugs.
   */
  getFavorites(): string[] {
    return this.getWorkspace().favorites;
  },

  /**
   * Toggles a favorite model slug and returns the updated array.
   */
  toggleFavorite(slug: string): string[] {
    const workspace = this.getWorkspace();
    const current = workspace.favorites;
    const exists = current.includes(slug);

    const updatedFavorites = exists
      ? current.filter((id) => id !== slug)
      : [...current, slug];

    workspace.favorites = updatedFavorites;
    this.saveWorkspace(workspace);
    return updatedFavorites;
  },

  /**
   * Clears all favorites from storage.
   */
  clearFavorites(): string[] {
    const workspace = this.getWorkspace();
    workspace.favorites = [];
    this.saveWorkspace(workspace);
    return [];
  },
};
