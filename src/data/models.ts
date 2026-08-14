import { AIModel } from "@/types/model";
import rawModels from "./models_db.json";

export const MODELS: AIModel[] = rawModels as unknown as AIModel[];
