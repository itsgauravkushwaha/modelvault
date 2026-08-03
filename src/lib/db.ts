import fs from "fs";
import path from "path";
import { AIModel } from "@/types/model";
import { MODELS as INITIAL_MODELS } from "@/data/models";

const DB_PATH = path.join(process.cwd(), "src/data/models_db.json");

// In-memory cache for ultra fast reads
let memoryCache: AIModel[] | null = null;

function ensureDbFile(): AIModel[] {
  if (memoryCache) {
    return memoryCache;
  }

  try {
    if (fs.existsSync(DB_PATH)) {
      const raw = fs.readFileSync(DB_PATH, "utf-8");
      memoryCache = JSON.parse(raw) as AIModel[];
      return memoryCache;
    }
  } catch (error) {
    console.error("Failed to read database file, falling back to initial models:", error);
  }

  // Fallback / initialization
  memoryCache = INITIAL_MODELS;
  saveDbFile(memoryCache);
  return memoryCache;
}

function saveDbFile(models: AIModel[]): void {
  try {
    memoryCache = models;
    const tempPath = `${DB_PATH}.tmp`;
    fs.writeFileSync(tempPath, JSON.stringify(models, null, 2), "utf-8");
    fs.renameSync(tempPath, DB_PATH);
  } catch (error) {
    console.error("Error saving database file:", error);
  }
}

export const db = {
  // Read all models
  getModels(): AIModel[] {
    return ensureDbFile();
  },

  // Get single model by slug
  getModelBySlug(slug: string): AIModel | undefined {
    const models = ensureDbFile();
    return models.find((m) => m.slug === slug);
  },

  // Create new model
  createModel(newModel: AIModel): { success: boolean; model?: AIModel; error?: string } {
    const models = ensureDbFile();
    const existing = models.find((m) => m.slug === newModel.slug);
    if (existing) {
      return { success: false, error: `Model with slug "${newModel.slug}" already exists.` };
    }

    const updated = [newModel, ...models];
    saveDbFile(updated);
    return { success: true, model: newModel };
  },

  // Update existing model
  updateModel(slug: string, updates: Partial<AIModel>): { success: boolean; model?: AIModel; error?: string } {
    const models = ensureDbFile();
    const index = models.findIndex((m) => m.slug === slug);
    if (index === -1) {
      return { success: false, error: `Model with slug "${slug}" not found.` };
    }

    const updatedModel: AIModel = {
      ...models[index],
      ...updates,
      lastUpdated: new Date().toISOString().split("T")[0],
    };

    models[index] = updatedModel;
    saveDbFile([...models]);
    return { success: true, model: updatedModel };
  },

  // Delete model by slug
  deleteModel(slug: string): { success: boolean; error?: string } {
    const models = ensureDbFile();
    const filtered = models.filter((m) => m.slug !== slug);
    if (filtered.length === models.length) {
      return { success: false, error: `Model with slug "${slug}" not found.` };
    }

    saveDbFile(filtered);
    return { success: true };
  },

  // Import batch models (replaces or merges)
  importModels(newModels: AIModel[], overwrite = false): { success: boolean; count: number } {
    const existing = ensureDbFile();
    let result: AIModel[];

    if (overwrite) {
      result = newModels;
    } else {
      const existingMap = new Map(existing.map((m) => [m.slug, m]));
      newModels.forEach((m) => existingMap.set(m.slug, m));
      result = Array.from(existingMap.values());
    }

    saveDbFile(result);
    return { success: true, count: result.length };
  },
};
