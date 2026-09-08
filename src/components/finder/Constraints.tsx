import type { Requirements } from "@/lib/recommendations/types";
import { Choice, controlClass, NumberField } from "./Controls";

export function Constraints({ value: r, onChange }: { value: Requirements; onChange: (value: Requirements) => void }) {
  const set = <K extends keyof Requirements>(key: K, value: Requirements[K]) => onChange({ ...r, [key]: value });
  return <div className="space-y-8">
    <fieldset className="space-y-3">
      <legend className="mb-3 text-lg font-semibold">Where should your model run?</legend>
      <div className="grid gap-3 sm:grid-cols-2">
        <Choice name="deployment" value="cloud" checked={r.deployment === "cloud"} onChange={() => set("deployment", "cloud")}>
          <strong className="block">Cloud API</strong><span className="text-sm text-muted">A provider processes your prompts. No local GPU needed.</span>
        </Choice>
        <Choice name="deployment" value="local" checked={r.deployment === "local"} onChange={() => set("deployment", "local")}>
          <strong className="block">On my own device</strong><span className="text-sm text-muted">Download first, then run locally. Cloud models are excluded.</span>
        </Choice>
      </div>
    </fieldset>
    {r.deployment === "cloud" ? <fieldset className="space-y-4">
      <legend className="mb-3 text-lg font-semibold">Your API budget and usage</legend>
      <div className="grid gap-4 sm:grid-cols-2">
        <NumberField label="Monthly API budget (USD)" value={r.monthlyBudget} min={0} max={1000000} onChange={(v) => set("monthlyBudget", v)} hint="USD pricing; a budget estimate, not a spending cap." />
        <NumberField label="Requests per month" value={r.requestsPerMonth} min={1} max={1000000} onChange={(v) => set("requestsPerMonth", v)} />
      </div>
      <p className="text-sm text-muted">Start with the example usage, then adjust it for your application. API usage is billed separately from chat subscriptions.</p>
    </fieldset> : <fieldset className="space-y-4">
      <legend className="mb-3 text-lg font-semibold">Your available hardware</legend>
      <label className="flex flex-col gap-2 text-sm font-medium">Memory setup
        <select className={controlClass} value={r.hardware} onChange={(e) => set("hardware", e.target.value as Requirements["hardware"])}>
          <option value="gpu">Dedicated GPU — fit entirely in VRAM</option>
          <option value="unified">Unified memory — for example, Apple silicon</option>
          <option value="cpu">CPU only — system RAM</option>
        </select>
      </label>
      <div className="grid gap-4 sm:grid-cols-2">
        <NumberField label={r.hardware === "unified" ? "Total unified memory (GB)" : "Total system RAM (GB)"} value={r.ramGB} min={2} max={512} onChange={(v) => set("ramGB", v)} />
        {r.hardware === "gpu" && <NumberField label="Available GPU VRAM (GB)" value={r.vramGB} min={0} max={256} onChange={(v) => set("vramGB", v)} />}
      </div>
      <p className="text-sm text-muted">We reserve 4 GB of system memory and use a conservative model/runtime estimate. Local recommendations cover one request at a time with up to 4,096 total tokens.</p>
    </fieldset>}
    <fieldset className="space-y-4">
      <legend className="mb-3 text-lg font-semibold">How much text per request?</legend>
      <div className="grid gap-4 sm:grid-cols-2">
        <NumberField label="Input tokens per request" value={r.inputTokens} min={1} max={200000} onChange={(v) => set("inputTokens", v)} hint="Include instructions, conversation history and retrieved document passages." />
        <NumberField label="Output tokens per request" value={r.outputTokens} min={1} max={16000} onChange={(v) => set("outputTokens", v)} hint="Include your allowance for reasoning as well as the visible answer." />
      </div>
    </fieldset>
    <fieldset className="space-y-3">
      <legend className="mb-3 text-lg font-semibold">How should we order suitable options?</legend>
      <div className="grid gap-3 sm:grid-cols-2">
        <Choice name="priority" value="fit" checked={r.priority === "fit"} onChange={() => set("priority", "fit")}>
          <strong className="block">Task shortlist</strong><span className="text-sm text-muted">ModelVault’s editorial starting order for this task.</span>
        </Choice>
        <Choice name="priority" value="cost" checked={r.priority === "cost"} onChange={() => set("priority", "cost")}>
          <strong className="block">{r.deployment === "cloud" ? "Lowest estimated API cost" : "Smallest memory footprint"}</strong><span className="text-sm text-muted">Among models that meet every requirement.</span>
        </Choice>
      </div>
    </fieldset>
  </div>;
}
