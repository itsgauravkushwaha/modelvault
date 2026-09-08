export type Task = "coding" | "documents" | "extraction" | "chat";
export type Deployment = "cloud" | "local";
export type Hardware = "gpu" | "cpu" | "unified";
export type Priority = "fit" | "cost";

export interface Requirements {
  task: Task;
  deployment: Deployment;
  priority: Priority;
  monthlyBudget: number;
  requestsPerMonth: number;
  inputTokens: number;
  outputTokens: number;
  hardware: Hardware;
  ramGB: number;
  vramGB: number;
}

export interface CuratedModel {
  id: string;
  name: string;
  provider: string;
  deployment: Deployment;
  tasks: Task[];
  taskOrder: Partial<Record<Task, number>>;
  rationale: string;
  limitations: string[];
  sourceUrl: string;
  setupUrl: string;
  checkedAt: string;
  contextTokens: number;
  maxOutputTokens: number;
  // Provider metadata, not an independently measured performance score.
  cloud?: {
    inputPerMillion: number;
    outputPerMillion: number;
    structuredOutput: boolean;
  };
  local?: {
    ollamaTag: string;
    downloadGB: number;
    // Conservative editorial budget for one request up to 4,096 total tokens.
    estimatedMemoryGB: number;
  };
}

export interface Recommendation {
  model: CuratedModel;
  estimatedMonthlyCost: number | null;
  reasons: string[];
  caveats: string[];
}

export interface RecommendationResult {
  recommendations: Recommendation[];
  eligibleCount: number;
  excluded: Record<string, number>;
  error?: string;
}
