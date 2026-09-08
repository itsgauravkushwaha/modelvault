import type { ReactNode } from "react";

export const controlClass = "w-full rounded-control border border-line bg-background px-4 py-3 text-base text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";
export const primaryClass = "rounded-control bg-accent px-5 py-3 text-base font-semibold text-background hover:bg-accent-to focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";
export const secondaryClass = "rounded-control border border-line bg-background px-5 py-3 text-base font-semibold text-foreground hover:bg-surface focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";

export function NumberField({ label, value, onChange, min, max, hint }: {
  label: string; value: number; onChange: (value: number) => void;
  min: number; max: number; hint?: string;
}) {
  return <label className="flex flex-col gap-2 text-sm font-medium text-foreground">
    {label}
    <input className={controlClass} type="number" min={min} max={max} step="any"
      value={Number.isFinite(value) ? value : ""} required
      onChange={(event) => onChange(event.target.valueAsNumber)} />
    {hint && <span className="text-sm font-normal text-muted">{hint}</span>}
  </label>;
}

export function Choice({ name, value, checked, onChange, children }: {
  name: string; value: string; checked: boolean; onChange: () => void; children: ReactNode;
}) {
  return <label className={`flex cursor-pointer items-start gap-3 rounded-card-sm border p-4 ${checked ? "border-accent bg-accent/5" : "border-line bg-background hover:bg-surface"}`}>
    <input type="radio" name={name} value={value} checked={checked} onChange={onChange}
      className="mt-1 h-4 w-4 shrink-0 accent-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent" />
    <span className="min-w-0 text-base">{children}</span>
  </label>;
}
