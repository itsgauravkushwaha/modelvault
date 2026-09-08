import cloudSnapshot from "./curated-cloud.json";
import type { CuratedModel, Task } from "@/lib/recommendations/types";

const GENERAL_TASKS: Task[] = ["documents", "extraction", "chat", "coding"];
const localModels: CuratedModel[] = [
  {
    id: "ollama/qwen3:4b", name: "Qwen3 4B", provider: "Qwen", deployment: "local",
    tasks: GENERAL_TASKS, taskOrder: { chat: 2, documents: 2, extraction: 2, coding: 4 },
    rationale: "A compact general text model for a modest local memory budget.",
    limitations: ["The compact model can struggle with difficult reasoning and long documents. Disable thinking for simple tasks if latency matters."],
    sourceUrl: "https://ollama.com/library/qwen3:4b", setupUrl: "https://docs.ollama.com/quickstart",
    checkedAt: "2026-09-08", contextTokens: 4096, maxOutputTokens: 2048,
    local: { ollamaTag: "qwen3:4b", downloadGB: 2.5, estimatedMemoryGB: 5 },
  },
  {
    id: "ollama/qwen3:8b", name: "Qwen3 8B", provider: "Qwen", deployment: "local",
    tasks: GENERAL_TASKS, taskOrder: { chat: 1, documents: 1, extraction: 1, coding: 3 },
    rationale: "A general text candidate when your device has more room for model weights and runtime memory.",
    limitations: ["Needs more memory than the 4B option; output speed is device-dependent."],
    sourceUrl: "https://ollama.com/library/qwen3:8b", setupUrl: "https://docs.ollama.com/quickstart",
    checkedAt: "2026-09-08", contextTokens: 4096, maxOutputTokens: 2048,
    local: { ollamaTag: "qwen3:8b", downloadGB: 5.2, estimatedMemoryGB: 8 },
  },
  {
    id: "ollama/qwen2.5-coder:7b", name: "Qwen2.5 Coder 7B", provider: "Qwen", deployment: "local",
    tasks: ["coding"], taskOrder: { coding: 2 },
    rationale: "A coding-focused model with a documented Ollama package for local development tasks.",
    limitations: ["This older coding specialist is included for its accessible package size, not as a frontier coding leader."],
    sourceUrl: "https://ollama.com/library/qwen2.5-coder:7b", setupUrl: "https://docs.ollama.com/quickstart",
    checkedAt: "2026-09-08", contextTokens: 4096, maxOutputTokens: 2048,
    local: { ollamaTag: "qwen2.5-coder:7b", downloadGB: 4.7, estimatedMemoryGB: 7 },
  },
  {
    id: "ollama/qwen2.5-coder:14b", name: "Qwen2.5 Coder 14B", provider: "Qwen", deployment: "local",
    tasks: ["coding"], taskOrder: { coding: 1 },
    rationale: "A larger local coding candidate for devices with enough dedicated or unified memory.",
    limitations: ["This package will not fit entirely into a 6 GB GPU. CPU offloading is outside this finder's GPU-fit policy."],
    sourceUrl: "https://ollama.com/library/qwen2.5-coder:14b", setupUrl: "https://docs.ollama.com/quickstart",
    checkedAt: "2026-09-08", contextTokens: 4096, maxOutputTokens: 2048,
    local: { ollamaTag: "qwen2.5-coder:14b", downloadGB: 9, estimatedMemoryGB: 13 },
  },
];

// Explicitly reviewed IDs only. Bulk catalog sync cannot admit a model here.
// JSON widens literal strings, so validate the fixed discriminants when importing.
const cloudModels: CuratedModel[] = cloudSnapshot.map((row) => ({
  ...row, deployment: "cloud", tasks: GENERAL_TASKS,
}));
export const CURATED_MODELS: readonly CuratedModel[] = [...cloudModels, ...localModels];
