"use client";

import { useEffect, useRef, useState } from "react";
import type { CuratedModel, RecommendationResult, Requirements } from "@/lib/recommendations/types";
import { DEFAULT_REQUIREMENTS, recommend, requirementsSchema } from "@/lib/recommendations/engine";
import { TASK_OPTIONS } from "@/data/finder-options";
import { Choice, primaryClass, secondaryClass } from "./Controls";
import { Constraints } from "./Constraints";
import { RecommendationCard } from "./RecommendationCard";
import { trackFinderEvent } from "@/lib/recommendations/analytics";

export function Finder({ models }: { models: readonly CuratedModel[] }) {
  const [step, setStep] = useState(0);
  const [requirements, setRequirements] = useState<Requirements>(DEFAULT_REQUIREMENTS);
  const [result, setResult] = useState<RecommendationResult | null>(null);
  const [error, setError] = useState("");
  const heading = useRef<HTMLHeadingElement>(null);
  const previousStep = useRef(step);
  const selectedTask = TASK_OPTIONS.find((task) => task.value === requirements.task);
  useEffect(() => {
    if (previousStep.current !== step) heading.current?.focus();
    previousStep.current = step;
  }, [step]);
  function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (step === 0) { trackFinderEvent("finder_started", { task: requirements.task }); setStep(1); return; }
    const parsed = requirementsSchema.safeParse(requirements);
    if (!parsed.success) { setError(parsed.error.issues[0]?.message ?? "Please check your inputs."); return; }
    const next = recommend(models, parsed.data, new Date().toISOString());
    trackFinderEvent(next.recommendations.length ? "finder_results" : "finder_no_match", {
      task: requirements.task, deployment: requirements.deployment, result_count: next.recommendations.length,
    });
    setError(""); setResult(next); setStep(2);
  }
  function reset() { setRequirements(DEFAULT_REQUIREMENTS); setResult(null); setError(""); setStep(0); }
  return <section aria-label="Model finder" className="space-y-6">
    <ol aria-label="Your progress" className="flex flex-wrap gap-3 text-sm">
      {["Your task", "Your requirements", "Your shortlist"].map((label, index) => <li key={label} aria-current={step === index ? "step" : undefined}
        className={`rounded-pill px-4 py-2 ${step === index ? "bg-accent text-background font-semibold" : "bg-surface-2 text-muted"}`}>
        {index + 1}. {label}
      </li>)}
    </ol>
    <h2 ref={heading} tabIndex={-1} className="text-2xl font-bold tracking-tight focus:outline-none">
      {step === 0 ? "What are you building?" : step === 1 ? "What does your model need to fit?" : "Your model shortlist"}
    </h2>
    {step < 2 ? <form onSubmit={submit} className="rounded-card border border-line bg-background p-5 sm:p-7">
      {step === 0 ? <fieldset>
        <legend className="mb-5 text-base text-muted">Choose the task closest to your project.</legend>
        <div className="grid gap-4 sm:grid-cols-2">
          {TASK_OPTIONS.map((task) => <Choice key={task.value} name="task" value={task.value}
            checked={requirements.task === task.value} onChange={() => setRequirements({ ...requirements, task: task.value })}>
            <strong className="block">{task.label}</strong>
            <span className="mt-2 block text-sm leading-relaxed text-muted">{task.description}</span>
            <span className="mt-3 block text-sm leading-relaxed">For example: {task.example}</span>
          </Choice>)}
        </div>
      </fieldset> : <Constraints value={requirements} onChange={setRequirements} />}
      {error && <p role="alert" className="mt-4 font-semibold">{error}</p>}
      <div className="mt-7 flex flex-wrap items-center gap-3 border-t border-line pt-5">
        {step > 0 && <button type="button" onClick={() => { setError(""); setStep(0); }} className={secondaryClass}>Back</button>}
        <button type="submit" className={primaryClass}>{step === 0 ? "Set my requirements" : "Find suitable models"}</button>
        <p className="text-sm text-muted">No sign-in or API key needed to get recommendations.</p>
      </div>
    </form> : <div className="space-y-5">
      <div className="flex flex-wrap items-start justify-between gap-4 rounded-card-sm bg-surface-2 p-5">
        <div className="space-y-1 text-base">
          <p className="font-semibold">{selectedTask?.label} · {requirements.deployment === "cloud" ? "Cloud API" : "Local device"}</p>
          <p className="text-sm text-muted">{requirements.deployment === "cloud"
            ? `$${requirements.monthlyBudget}/month API budget · ${requirements.requestsPerMonth.toLocaleString()} requests/month`
            : `${requirements.ramGB} GB ${requirements.hardware === "unified" ? "unified memory" : "RAM"}${requirements.hardware === "gpu" ? ` · ${requirements.vramGB} GB VRAM` : ""}`}</p>
          <p className="text-sm text-muted">{requirements.inputTokens.toLocaleString()} input + {requirements.outputTokens.toLocaleString()} output tokens/request.</p>
        </div>
        <button type="button" onClick={() => setStep(1)} className={secondaryClass}>Edit requirements</button>
      </div>
      {result?.recommendations.length ? <>
        <p role="status" className="text-base text-muted">Showing {result.recommendations.length} of {result.eligibleCount} eligible options in this curated collection. {requirements.priority === "cost" ? "Ordered by estimated API cost or local memory footprint." : "Ordered by ModelVault’s editorial task shortlist."} Try your own examples before committing.</p>
        {result.recommendations.map((recommendation, index) => <RecommendationCard key={recommendation.model.id}
          result={recommendation} index={index} requirements={requirements} />)}
      </> : <div role="status" className="rounded-card border border-line bg-background p-6">
        <h3 className="text-xl font-bold">No suitable model in this collection yet.</h3>
        <p className="mt-3 text-base text-muted">{result?.error ?? "None of our curated models meet all your current requirements. We have not relaxed your budget, privacy choice or hardware limits."}</p>
        <p className="mt-3 text-base">Review the reasons below, edit a requirement if it is flexible, or return when the collection expands.</p>
      </div>}
      {!!result && Object.keys(result.excluded).length > 0 && <details className="rounded-control border border-line p-4">
        <summary className="cursor-pointer font-semibold">Why other models were excluded</summary>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-muted">
          {Object.entries(result.excluded).map(([reason, count]) => <li key={reason}>{reason}: {count}</li>)}
        </ul>
        <p className="mt-3 text-sm text-muted">Only the first exclusion reason is counted per model. Models in the other deployment category are not considered.</p>
      </details>}
      <button type="button" onClick={reset} className={secondaryClass}>Start a new search</button>
    </div>}
  </section>;
}
