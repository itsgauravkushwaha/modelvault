import { z } from "zod";
import type { CuratedModel, Recommendation, RecommendationResult, Requirements } from "./types";

const requirementFields = z.object({
  task: z.enum(["coding", "documents", "extraction", "chat"]),
  deployment: z.enum(["cloud", "local"]),
  priority: z.enum(["fit", "cost"]),
  monthlyBudget: z.number().finite().min(0).max(1_000_000),
  requestsPerMonth: z.number().int().min(1).max(1_000_000),
  inputTokens: z.number().int().min(1).max(200_000),
  outputTokens: z.number().int().min(1).max(16_000),
  hardware: z.enum(["gpu", "cpu", "unified"]),
  ramGB: z.number().finite().min(2).max(512),
  vramGB: z.number().finite().min(0).max(256),
});

export const DEFAULT_REQUIREMENTS: Requirements = {
  task: "documents", deployment: "cloud", priority: "fit", monthlyBudget: 20,
  requestsPerMonth: 1000, inputTokens: 2000, outputTokens: 500,
  hardware: "gpu", ramGB: 16, vramGB: 6,
};

// Hidden fields from the other deployment mode cannot block the active form.
export const requirementsSchema = z.preprocess((input) => {
  if (!input || typeof input !== "object") return input;
  const fields = input as Record<string, unknown>;
  if (fields.deployment === "cloud") return { ...fields,
    hardware: DEFAULT_REQUIREMENTS.hardware, ramGB: DEFAULT_REQUIREMENTS.ramGB, vramGB: DEFAULT_REQUIREMENTS.vramGB,
  };
  if (fields.deployment === "local") return { ...fields,
    monthlyBudget: DEFAULT_REQUIREMENTS.monthlyBudget, requestsPerMonth: DEFAULT_REQUIREMENTS.requestsPerMonth,
  };
  return input;
}, requirementFields);

export function estimateMonthlyCost(model: CuratedModel, r: Requirements): number | null {
  if (!model.cloud) return null;
  return r.requestsPerMonth * (r.inputTokens * model.cloud.inputPerMillion +
    r.outputTokens * model.cloud.outputPerMillion) / 1_000_000;
}

/** Hard requirements always precede editorial ranking. No fallback can relax them. */
export function recommend(models: readonly CuratedModel[], input: unknown, asOf: string): RecommendationResult {
  const parsed = requirementsSchema.safeParse(input);
  if (!parsed.success || !Number.isFinite(Date.parse(asOf))) {
    return { recommendations: [], eligibleCount: 0, excluded: {}, error: "Check your requirements: enter valid, positive usage and hardware values." };
  }
  const r = parsed.data;
  const excluded: Record<string, number> = {};
  const eligible: Recommendation[] = [];
  const reject = (reason: string) => { excluded[reason] = (excluded[reason] ?? 0) + 1; };
  for (const model of models) {
    if (model.deployment !== r.deployment) continue;
    if (!model.tasks.includes(r.task)) { reject("Not curated for this task"); continue; }
    const ageDays = (Date.parse(asOf) - Date.parse(model.checkedAt)) / 86_400_000;
    if (!Number.isFinite(ageDays) || ageDays < 0 || ageDays > (model.cloud ? 14 : 90)) {
      reject("Source information needs refreshing"); continue;
    }
    if (r.inputTokens + r.outputTokens > model.contextTokens || r.outputTokens > model.maxOutputTokens) {
      reject("Insufficient context or output allowance"); continue;
    }
    const monthly = estimateMonthlyCost(model, r);
    const reasons = [model.rationale];
    const caveats = [...model.limitations];
    if (r.deployment === "cloud") {
      if (!model.cloud || monthly === null || !Number.isFinite(monthly) || monthly < 0) {
        reject("Pricing is not verified"); continue;
      }
      if (monthly > r.monthlyBudget) { reject("Above your estimated API budget"); continue; }
      if (r.task === "extraction" && !model.cloud.structuredOutput) {
        reject("Structured output is not documented"); continue;
      }
      reasons.push("Available through a hosted API; no local GPU required.");
      reasons.push("Estimated text-token cost fits your monthly API budget.");
      caveats.push("Estimate excludes taxes, credit fees, tools, retries and extra reasoning tokens; actual bills can exceed it. A ChatGPT or other chat subscription does not cover this API usage.");
    } else {
      if (!model.local) { reject("Local setup is not documented"); continue; }
      const memory = model.local.estimatedMemoryGB;
      if (r.ramGB < memory + 4 || (r.hardware === "gpu" && r.vramGB < memory)) {
        reject("Above the conservative memory budget"); continue;
      }
      reasons.push(r.hardware === "gpu"
        ? `Estimated ${memory} GB model/runtime budget fits your ${r.vramGB} GB VRAM, with 4 GB reserved in system RAM.`
        : `Estimated ${memory} GB model/runtime budget fits your memory, with 4 GB reserved for the system.`);
      reasons.push("Runs locally after downloading the model; no hosted inference API charge.");
      caveats.push("Memory fit is an estimate for one request, Q4 weights and at most 4,096 total tokens. Speed and fit have not been measured on your device. Electricity and hardware still cost money.");
      if (r.hardware === "cpu") caveats.push("CPU-only generation can be slow. This finder does not predict tokens per second.");
    }
    if (r.task === "documents") caveats.push("This is the answer-generation model. Document parsing, retrieval, embeddings and source citations still need to be built separately.");
    if (r.task === "extraction") caveats.push("Validate extracted fields against your schema and examples; structured output does not guarantee correct values.");
    eligible.push({ model, estimatedMonthlyCost: monthly, reasons, caveats });
  }
  eligible.sort((a, b) => {
    const costA = a.estimatedMonthlyCost ?? a.model.local?.estimatedMemoryGB ?? Infinity;
    const costB = b.estimatedMonthlyCost ?? b.model.local?.estimatedMemoryGB ?? Infinity;
    const fit = (a.model.taskOrder[r.task] ?? 99) - (b.model.taskOrder[r.task] ?? 99);
    return (r.priority === "cost" ? costA - costB || fit : fit || costA - costB) || a.model.id.localeCompare(b.model.id);
  });
  return { recommendations: eligible.slice(0, 3), eligibleCount: eligible.length, excluded };
}
