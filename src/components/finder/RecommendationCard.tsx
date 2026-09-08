"use client";

import { useState } from "react";
import type { Recommendation, Requirements } from "@/lib/recommendations/types";
import { secondaryClass } from "./Controls";
import { trackFinderEvent } from "@/lib/recommendations/analytics";

export function RecommendationCard({ result, index, requirements }: {
  result: Recommendation; index: number; requirements: Requirements;
}) {
  const [copyStatus, setCopyStatus] = useState("");
  const { model, estimatedMonthlyCost, reasons, caveats } = result;
  const command = model.local ? `ollama run ${model.local.ollamaTag}` : null;
  async function copyCommand() {
    if (!command) return;
    try { await navigator.clipboard.writeText(command); setCopyStatus("Command copied."); trackFinderEvent("finder_command_copied", { model_id: model.id }); }
    catch { setCopyStatus("Could not copy. Select the command below and copy it manually."); }
  }
  return <article className={`min-w-0 rounded-card border bg-background p-5 sm:p-7 ${index === 0 ? "border-accent" : "border-line"}`}>
    <div className="flex flex-wrap items-start justify-between gap-4">
      <div>
        <p className="mb-2 text-sm font-semibold text-accent">{index === 0 ? "First to try" : `Alternative ${index}`}</p>
        <h3 className="text-2xl font-bold tracking-tight">{model.name}</h3>
        <p className="mt-1 text-sm text-muted">{model.provider} · {model.deployment === "cloud" ? "Cloud API via OpenRouter" : "Local · Ollama Q4 package"}</p>
      </div>
      <div className="rounded-control bg-surface px-4 py-3">
        <p className="text-lg font-bold">{estimatedMonthlyCost !== null
          ? `${new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 2 }).format(estimatedMonthlyCost)}/month`
          : "No hosted API charge"}</p>
        <p className="text-sm text-muted">{model.local ? `About ${model.local.downloadGB} GB to download` : "Estimated text-token usage"}</p>
      </div>
    </div>
    <div className="mt-6 grid gap-6 md:grid-cols-2">
      <section aria-label={`Why ${model.name} fits`}>
        <h4 className="font-semibold">Why it fits</h4>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-base leading-relaxed">{reasons.map((reason) => <li key={reason}>{reason}</li>)}</ul>
      </section>
      <section aria-label={`${model.name} trade-offs`}>
        <h4 className="font-semibold">Before you choose</h4>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-muted">{caveats.map((caveat) => <li key={caveat}>{caveat}</li>)}</ul>
      </section>
    </div>
    <details className="mt-6 rounded-control border border-line p-4">
      <summary className="cursor-pointer text-base font-semibold focus-visible:outline-2 focus-visible:outline-accent">Sources and calculation</summary>
      <div className="mt-4 space-y-3 text-sm leading-relaxed">
        <p>Source checked {model.checkedAt}. Specifications come from the linked catalog; ModelVault has not independently benchmarked this model. The order is editorial, not a measured quality score.</p>
        {model.cloud ? <>
          <p>OpenRouter listed rates: ${model.cloud.inputPerMillion} per million input tokens; ${model.cloud.outputPerMillion} per million output tokens.</p>
          <p>{requirements.requestsPerMonth.toLocaleString()} requests × ({requirements.inputTokens.toLocaleString()} input tokens × ${model.cloud.inputPerMillion} + {requirements.outputTokens.toLocaleString()} output tokens × ${model.cloud.outputPerMillion}) ÷ 1,000,000.</p>
          <p>Advertised context: {model.contextTokens.toLocaleString()} tokens. Provider availability and pricing can change; confirm before use.</p>
        </> : <p>The {model.local?.estimatedMemoryGB} GB runtime allowance is a ModelVault estimate for the linked Q4 package at up to 4,096 total tokens, plus 4 GB system reserve. It is not a hardware benchmark or the model’s maximum supported context.</p>}
        <a href={model.sourceUrl} target="_blank" rel="noopener noreferrer" className="font-semibold text-accent underline">Read the model source ↗</a>
      </div>
    </details>
    <div className="mt-6 space-y-3 border-t border-line pt-5">
      <h4 className="font-semibold">Start with this model</h4>
      {command ? <>
        <p className="text-sm text-muted">Install Ollama, then run the command. The first run downloads the weights. Use a 4,096-token context or smaller to stay within this estimate.</p>
        <pre className="overflow-x-auto rounded-control bg-ink p-4 text-sm text-background"><code>{command}</code></pre>
        <div className="flex flex-wrap items-center gap-3">
          <button type="button" onClick={copyCommand} className={secondaryClass}>Copy command</button>
          <a href={model.setupUrl} target="_blank" rel="noopener noreferrer" onClick={() => trackFinderEvent("finder_setup_opened", { model_id: model.id })} className="text-base font-semibold text-accent underline">Ollama setup guide ↗</a>
        </div>
        <p role="status" className="text-sm text-muted">{copyStatus}</p>
      </> : <>
        <p className="text-sm text-muted">Create an OpenRouter account, configure billing and keep your API key on your server. Use this exact model ID:</p>
        <code className="block break-all rounded-control bg-surface p-3 text-sm">{model.id}</code>
        <div className="flex flex-wrap gap-4">
          <a href={model.sourceUrl} target="_blank" rel="noopener noreferrer" onClick={() => trackFinderEvent("finder_setup_opened", { model_id: model.id })} className="text-base font-semibold text-accent underline">Open model provider page ↗</a>
          <a href={model.setupUrl} target="_blank" rel="noopener noreferrer" onClick={() => trackFinderEvent("finder_setup_opened", { model_id: model.id })} className="text-base font-semibold text-accent underline">API quickstart ↗</a>
        </div>
      </>}
    </div>
  </article>;
}
