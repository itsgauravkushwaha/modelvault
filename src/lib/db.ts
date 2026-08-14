import fs from "fs";
import path from "path";
import { cache } from "react";
import { revalidatePath } from "next/cache";
import { AIModel } from "@/types/model";
import { MODELS as INITIAL_MODELS } from "@/data/models";
import { supabase } from "@/lib/supabase";
import { publicEnv } from "@/env";
import { resolveModelLinks } from "@/lib/utils/link-resolver";

const DB_PATH = path.join(process.cwd(), "src/data/models_db.json");

// In-memory fallback cache
let memoryCache: AIModel[] | null = null;

function invalidateCache(): void {
  memoryCache = null;
  try {
    revalidatePath("/models");
    revalidatePath("/");
  } catch {
    // Ignore outside request scope
  }
}

function ensureLocalDbFile(): AIModel[] {
  try {
    if (fs.existsSync(DB_PATH)) {
      const raw = fs.readFileSync(DB_PATH, "utf-8");
      return JSON.parse(raw) as AIModel[];
    }
  } catch (error) {
    console.error("Failed to read local database file, falling back to initial models:", error);
  }
  return INITIAL_MODELS;
}

function saveLocalDbFile(models: AIModel[]): void {
  try {
    const tempPath = `${DB_PATH}.tmp`;
    fs.writeFileSync(tempPath, JSON.stringify(models, null, 2), "utf-8");
    fs.renameSync(tempPath, DB_PATH);
  } catch (error) {
    console.error("Error saving local database file:", error);
  }
}

/**
 * Fetch all models using fast module-scoped memory cache and local JSON file fallback.
 */
function fetchAllModelsInternal(): AIModel[] {
  if (memoryCache && memoryCache.length > 0) {
    return memoryCache;
  }
  memoryCache = ensureLocalDbFile();
  return memoryCache;
}

/**
 * Single-model fetching logic with direct SQL query by slug.
 */
async function fetchModelBySlugInternal(slug: string): Promise<AIModel | undefined> {
  if (!slug) return undefined;
  const isPlaceholder = publicEnv.NEXT_PUBLIC_SUPABASE_URL?.includes("placeholder");

  if (!isPlaceholder) {
    try {
      const { data, error } = await supabase
        .from("models")
        .select("*")
        .eq("slug", slug)
        .maybeSingle();

      if (!error && data) {
        return data as AIModel;
      }
    } catch (err) {
      console.warn(`Failed to fetch model by slug "${slug}" from Supabase:`, err);
    }
  }

  // Fast fallback to local dataset file
  const localModels = fetchAllModelsInternal();
  return localModels.find((m) => m.slug === slug);
}

/**
 * React-cached per-request single model fetch.
 * Sharing the same promise across generateMetadata and Page in the same render tree.
 */
const getModelBySlugCached = cache(async (slug: string): Promise<AIModel | undefined> => {
  return fetchModelBySlugInternal(slug);
});

export const db = {
  /**
   * Reads all models instantly.
   */
  async getModels(): Promise<AIModel[]> {
    return fetchAllModelsInternal();
  },

  /**
   * Get single model by slug (Deduplicated per request via React.cache, direct SQL query).
   */
  async getModelBySlug(slug: string): Promise<AIModel | undefined> {
    return getModelBySlugCached(slug);
  },

  /**
   * Create new model.
   */
  async createModel(newModel: AIModel): Promise<{ success: boolean; model?: AIModel; error?: string }> {
    const existing = await this.getModelBySlug(newModel.slug);
    if (existing) {
      return { success: false, error: `Model with slug "${newModel.slug}" already exists.` };
    }

    const resolved = resolveModelLinks(newModel);
    const enrichedModel: AIModel = {
      ...newModel,
      docUrl: resolved.docUrl || newModel.docUrl,
      modelCardUrl: resolved.modelCardUrl || newModel.modelCardUrl,
      playgroundUrl: resolved.playgroundUrl || newModel.playgroundUrl,
    };

    const isPlaceholder = publicEnv.NEXT_PUBLIC_SUPABASE_URL?.includes("placeholder");
    if (!isPlaceholder) {
      try {
        const { error } = await supabase.from("models").insert([enrichedModel]);
        if (error) {
          console.error("Supabase createModel error:", error.message);
        }
      } catch (err) {
        console.error("Supabase createModel connection error:", err);
      }
    }

    const updated = [enrichedModel, ...ensureLocalDbFile()];
    saveLocalDbFile(updated);
    invalidateCache();

    return { success: true, model: enrichedModel };
  },

  /**
   * Update existing model.
   */
  async updateModel(slug: string, updates: Partial<AIModel>): Promise<{ success: boolean; model?: AIModel; error?: string }> {
    const existing = await this.getModelBySlug(slug);
    if (!existing) {
      return { success: false, error: `Model with slug "${slug}" not found.` };
    }

    const merged = { ...existing, ...updates };
    const resolved = resolveModelLinks(merged);

    const updatedModel: AIModel = {
      ...merged,
      docUrl: resolved.docUrl || merged.docUrl,
      modelCardUrl: resolved.modelCardUrl || merged.modelCardUrl,
      playgroundUrl: resolved.playgroundUrl || merged.playgroundUrl,
      lastUpdated: new Date().toISOString().split("T")[0],
    };

    const isPlaceholder = publicEnv.NEXT_PUBLIC_SUPABASE_URL?.includes("placeholder");
    if (!isPlaceholder) {
      try {
        const { error } = await supabase.from("models").update(updatedModel).eq("slug", slug);
        if (error) {
          console.error("Supabase updateModel error:", error.message);
        }
      } catch (err) {
        console.error("Supabase updateModel connection error:", err);
      }
    }

    const localModels = ensureLocalDbFile();
    const index = localModels.findIndex((m) => m.slug === slug);
    if (index !== -1) {
      localModels[index] = updatedModel;
      saveLocalDbFile(localModels);
    }
    invalidateCache();

    return { success: true, model: updatedModel };
  },

  /**
   * Delete model by slug.
   */
  async deleteModel(slug: string): Promise<{ success: boolean; error?: string }> {
    const existing = await this.getModelBySlug(slug);
    if (!existing) {
      return { success: false, error: `Model with slug "${slug}" not found.` };
    }

    const isPlaceholder = publicEnv.NEXT_PUBLIC_SUPABASE_URL?.includes("placeholder");
    if (!isPlaceholder) {
      try {
        const { error } = await supabase.from("models").delete().eq("slug", slug);
        if (error) {
          console.error("Supabase deleteModel error:", error.message);
        }
      } catch (err) {
        console.error("Supabase deleteModel connection error:", err);
      }
    }

    const localModels = ensureLocalDbFile();
    const filtered = localModels.filter((m) => m.slug !== slug);
    saveLocalDbFile(filtered);
    invalidateCache();

    return { success: true };
  },

  /**
   * Import batch models (replaces or merges).
   */
  async importModels(newModels: AIModel[], overwrite = false): Promise<{ success: boolean; count: number }> {
    const existing = await this.getModels();

    const enrichedNew = newModels.map((m) => {
      const resolved = resolveModelLinks(m);
      return {
        ...m,
        docUrl: resolved.docUrl || m.docUrl,
        modelCardUrl: resolved.modelCardUrl || m.modelCardUrl,
        playgroundUrl: resolved.playgroundUrl || m.playgroundUrl,
      };
    });

    let result: AIModel[];

    if (overwrite) {
      result = enrichedNew;
    } else {
      const existingMap = new Map(existing.map((m) => [m.slug, m]));
      enrichedNew.forEach((m) => existingMap.set(m.slug, m));
      result = Array.from(existingMap.values());
    }

    const isPlaceholder = publicEnv.NEXT_PUBLIC_SUPABASE_URL?.includes("placeholder");
    if (!isPlaceholder) {
      try {
        const { error } = await supabase.from("models").upsert(enrichedNew, { onConflict: "slug" });
        if (error) {
          console.error("Supabase importModels error:", error.message);
        }
      } catch (err) {
        console.error("Supabase importModels connection error:", err);
      }
    }

    saveLocalDbFile(result);
    invalidateCache();
    return { success: true, count: result.length };
  },
};

