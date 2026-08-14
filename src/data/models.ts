import { AIModel } from "@/types/model";
import rawModels from "./models_db.json";

// Seed initial static SSR pages with top 150 models to keep bundle & HTML sizes ultra-fast (< 100 KB).
// The client store hydrates the remaining full catalog dynamically via /api/models on mount.
export const MODELS: AIModel[] = (rawModels as unknown as AIModel[]).slice(0, 150);

