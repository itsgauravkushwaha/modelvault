import test from "node:test";
import assert from "node:assert/strict";
import { CURATED_MODELS } from "../src/data/curated-models";
import { DEFAULT_REQUIREMENTS, recommend, estimateMonthlyCost } from "../src/lib/recommendations/engine";
import type { Requirements } from "../src/lib/recommendations/types";

const today = "2026-09-08T12:00:00Z";
const run = (patch: Partial<Requirements> = {}) => recommend(CURATED_MODELS, { ...DEFAULT_REQUIREMENTS, ...patch }, today);

test("cloud shortlist meets deployment, task and monthly budget without padding", () => {
  const result = run({ task: "coding", monthlyBudget: 2 });
  assert.equal(result.recommendations.length, 1);
  for (const item of result.recommendations) {
    assert.equal(item.model.deployment, "cloud");
    assert.ok(item.model.tasks.includes("coding"));
    assert.ok(item.estimatedMonthlyCost !== null && item.estimatedMonthlyCost <= 2);
  }
});
test("zero cloud budget does not silently recommend paid or local models", () => {
  const result = run({ monthlyBudget: 0 });
  assert.equal(result.recommendations.length, 0);
  assert.ok(result.excluded["Above your estimated API budget"]);
});
test("6 GB GPU and 16 GB RAM exclude oversized coding packages", () => {
  const result = run({ deployment: "local", task: "coding", ramGB: 16, vramGB: 6 });
  assert.equal(result.recommendations.length, 1);
  assert.equal(result.recommendations[0].model.id, "ollama/qwen3:4b");
  assert.equal(result.recommendations[0].estimatedMonthlyCost, null);
});
test("system RAM alone cannot make a dedicated GPU recommendation eligible", () => {
  const result = run({ deployment: "local", hardware: "gpu", ramGB: 128, vramGB: 2 });
  assert.equal(result.recommendations.length, 0);
});
test("unified memory is counted once with a system reserve", () => {
  const result = run({ deployment: "local", hardware: "unified", ramGB: 8, vramGB: 256 });
  assert.equal(result.recommendations.length, 0);
});
test("CPU choices ignore dedicated VRAM and explain speed uncertainty", () => {
  const result = run({ deployment: "local", hardware: "cpu", ramGB: 16, vramGB: 0 });
  assert.ok(result.recommendations.length > 0);
  assert.ok(result.recommendations.every((item) => item.caveats.some((text) => text.includes("CPU-only"))));
});
test("local context policy rejects excessive prompt plus output", () => {
  assert.equal(run({ deployment: "local", inputTokens: 4096, outputTokens: 500, ramGB: 128, vramGB: 80 }).recommendations.length, 0);
});
test("cost includes request volume and both input and output tokens", () => {
  const model = CURATED_MODELS.find((item) => item.id === "openai/gpt-5-mini");
  assert.ok(model);
  assert.equal(estimateMonthlyCost(model, DEFAULT_REQUIREMENTS), 1.5);
  assert.equal(estimateMonthlyCost(model, { ...DEFAULT_REQUIREMENTS, requestsPerMonth: 2000 }), 3);
});
test("cost priority changes ordering among eligible cloud models", () => {
  const editorial = run({ monthlyBudget: 100 });
  const cost = run({ monthlyBudget: 100, priority: "cost" });
  assert.equal(editorial.recommendations[0].model.id, "google/gemini-3.8-flash");
  assert.equal(cost.recommendations[0].model.id, "openai/gpt-5-mini");
});
test("stale cloud evidence is excluded while local evidence remains eligible", () => {
  assert.equal(recommend(CURATED_MODELS, DEFAULT_REQUIREMENTS, "2026-10-01").recommendations.length, 0);
  assert.ok(recommend(CURATED_MODELS, { ...DEFAULT_REQUIREMENTS, deployment: "local" }, "2026-10-01").recommendations.length > 0);
  assert.equal(recommend(CURATED_MODELS, { ...DEFAULT_REQUIREMENTS, deployment: "local" }, "2027-01-01").recommendations.length, 0);
});
test("malformed and negative requirements fail closed", () => {
  for (const patch of [{ monthlyBudget: -1 }, { inputTokens: NaN }, { requestsPerMonth: 1.5 }, { task: "audio" }]) {
    const result = recommend(CURATED_MODELS, { ...DEFAULT_REQUIREMENTS, ...patch }, today);
    assert.equal(result.recommendations.length, 0);
    assert.ok(result.error);
  }
});
test("structured extraction excludes models without documented schema support", () => {
  const modified = CURATED_MODELS.map((m) => m.cloud ? { ...m, cloud: { ...m.cloud, structuredOutput: false } } : m);
  assert.equal(recommend(modified, { ...DEFAULT_REQUIREMENTS, task: "extraction" }, today).recommendations.length, 0);
});
test("cloud output limits are enforced independently of total context", () => {
  const modified = CURATED_MODELS.map((m) => ({ ...m, maxOutputTokens: 100 }));
  assert.equal(recommend(modified, DEFAULT_REQUIREMENTS, today).recommendations.length, 0);
});
test("curated IDs are unique and links identify the exact package", () => {
  assert.equal(new Set(CURATED_MODELS.map((m) => m.id)).size, CURATED_MODELS.length);
  for (const model of CURATED_MODELS) {
    assert.ok(model.sourceUrl.startsWith("https://"));
    if (model.local) assert.ok(model.sourceUrl.endsWith(model.local.ollamaTag));
  }
});
test("invalid hidden values do not block switching deployment modes", () => {
  assert.ok(run({ deployment: "local", monthlyBudget: NaN }).recommendations.length > 0);
  assert.ok(run({ deployment: "cloud", ramGB: NaN, vramGB: -1 }).recommendations.length > 0);
});
