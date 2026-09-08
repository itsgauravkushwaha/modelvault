import { readFile, writeFile, rename } from "node:fs/promises";

// Refresh evidence for admitted IDs only; never promote bulk-ingested models.
const file = new URL("../src/data/curated-cloud.json", import.meta.url);
const previous = JSON.parse(await readFile(file, "utf8"));
const response = await fetch("https://openrouter.ai/api/v1/models", { signal: AbortSignal.timeout(20000) });
if (!response.ok) throw new Error(`Catalog returned HTTP ${response.status}; snapshot unchanged.`);
const payload = await response.json();
if (!Array.isArray(payload.data)) throw new Error("Invalid catalog response; snapshot unchanged.");
const catalog = new Map(payload.data.map((model) => [model.id, model]));
const checkedAt = new Date().toISOString().slice(0, 10);
const next = previous.map((row) => {
  const model = catalog.get(row.id);
  if (!model || (model.expiration_date && Date.parse(model.expiration_date) <= Date.now())) {
    throw new Error(`${row.id} is unavailable or expired. Review it manually; snapshot unchanged.`);
  }
  const rate = (value) => {
    if (typeof value !== "string" || value.trim() === "" || !Number.isFinite(Number(value)) || Number(value) < 0) {
      throw new Error(`${row.id} has unknown pricing; snapshot unchanged.`);
    }
    return Number(value) * 1000000;
  };
  // The finder currently accepts at most 200,000 input tokens per request.
  if (model.pricing?.overrides?.some((tier) => tier.min_prompt_tokens <= 200000)) {
    throw new Error(`${row.id} needs tier-aware estimates before this snapshot can be refreshed.`);
  }
  const contextTokens = model.context_length;
  const maxOutputTokens = model.top_provider?.max_completion_tokens;
  if (!Number.isSafeInteger(contextTokens) || contextTokens <= 0 || !Number.isSafeInteger(maxOutputTokens) || maxOutputTokens <= 0) {
    throw new Error(`${row.id} has unknown context/output limits; snapshot unchanged.`);
  }
  if (!model.architecture?.input_modalities?.includes("text") || !model.architecture?.output_modalities?.includes("text")) {
    throw new Error(`${row.id} no longer supports text input/output; review its admission.`);
  }
  return { ...row, checkedAt, contextTokens, maxOutputTokens, cloud: {
    inputPerMillion: rate(model.pricing?.prompt), outputPerMillion: rate(model.pricing?.completion),
    structuredOutput: model.supported_parameters?.includes("structured_outputs") === true,
  } };
});
const temporary = new URL(`${file.href}.tmp`);
await writeFile(temporary, JSON.stringify(next, null, 2) + "\n");
await rename(temporary, file);
console.log(`Refreshed ${next.length} curated cloud models. Review and commit the snapshot before deployment.`);
