import fs from "fs";
import path from "path";
import { AIModel } from "@/types/model";
import { MODELS as INITIAL_MODELS } from "@/data/models";
import { supabase } from "@/lib/supabase";
import { publicEnv } from "@/env";
import { resolveModelLinks } from "@/lib/utils/link-resolver";

const DB_PATH = path.join(process.cwd(), "src/data/models_db.json");

// In-memory server-side cache with TTL for ultra fast reads
let memoryCache: AIModel[] | null = null;
let cacheExpiry: number = 0;
const CACHE_TTL_MS = 60 * 1000; // 60 seconds TTL

function invalidateCache(): void {
  memoryCache = null;
  cacheExpiry = 0;
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

export const db = {
  /**
   * Reads all models from Supabase with TTL caching and local JSON fallback.
   */
  async getModels(): Promise<AIModel[]> {
    const now = Date.now();
    if (memoryCache && now < cacheExpiry) {
      return memoryCache;
    }

    const isPlaceholder = publicEnv.NEXT_PUBLIC_SUPABASE_URL?.includes("placeholder");

    if (!isPlaceholder) {
      try {
        let allSupabaseModels: AIModel[] = [];
        let page = 0;
        const pageSize = 1000;

        while (page < 20) {
          const { data, error } = await supabase
            .from("models")
            .select("*")
            .range(page * pageSize, (page + 1) * pageSize - 1);

          if (error || !data || data.length === 0) break;
          allSupabaseModels.push(...(data as AIModel[]));
          page++;
          if (data.length < pageSize) break;
        }

        if (allSupabaseModels.length > 0) {
          memoryCache = allSupabaseModels;
          cacheExpiry = now + CACHE_TTL_MS;
          return memoryCache;
        }
      } catch (err) {
        console.warn("Failed to connect to Supabase, using local JSON fallback:", err);
      }
    }

    // Fallback to local JSON file
    memoryCache = ensureLocalDbFile();
    cacheExpiry = now + CACHE_TTL_MS;
    return memoryCache;
  },

  /**
   * Get single model by slug.
   */
  async getModelBySlug(slug: string): Promise<AIModel | undefined> {
    const models = await this.getModels();
    return models.find((m) => m.slug === slug);
  },

  /**
   * Create new model.
   */
  async createModel(newModel: AIModel): Promise<{ success: boolean; model?: AIModel; error?: string }> {
    const models = await this.getModels();
    const existing = models.find((m) => m.slug === newModel.slug);
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
    const models = await this.getModels();
    const existing = models.find((m) => m.slug === slug);
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
    const models = await this.getModels();
    const existing = models.find((m) => m.slug === slug);
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

