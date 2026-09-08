import Link from "next/link";
import { Finder } from "@/components/finder/Finder";
import { Footer } from "@/components/directory/Footer";
import { CURATED_MODELS } from "@/data/curated-models";
import { FINDER_COPY } from "@/data/finder-options";
import { generateMetadata } from "@/utils/seo/generate-page-metadata";

export const finderMetadata = generateMetadata({
  title: "ModelVault — Find an AI Model That Fits Your Requirements",
  description: FINDER_COPY.description, url: "/",
});
export const solveMetadata = generateMetadata({
  title: "AI Model Finder — Task, Budget and Hardware | ModelVault",
  description: FINDER_COPY.description, url: "/solve",
});

export function RequirementsFinderView() {
  return <div className="min-h-screen bg-surface text-foreground">
    <a href="#finder-main" className="sr-only focus:not-sr-only focus:block focus:p-4">Skip to model finder</a>
    <header className="border-b border-line bg-background">
      <div className="shell flex flex-wrap items-center justify-between gap-4 py-5">
        <Link href="/" className="text-xl font-extrabold tracking-tight">Model<span className="text-accent">Vault</span></Link>
        <nav aria-label="Main navigation" className="flex flex-wrap gap-5 text-sm font-semibold">
          <Link href="/solve" className="text-accent">Find a model</Link>
          <Link href="/models" className="hover:text-accent">Full catalog</Link>
          <Link href="/tools/cost-calculator" className="hover:text-accent">Cost calculator</Link>
          <Link href="/dashboard" className="hover:text-accent">Saved models</Link>
        </nav>
      </div>
    </header>
    <main id="finder-main" className="shell max-w-6xl py-8 sm:py-12">
      <div className="mb-8 max-w-3xl">
        <p className="mb-3 text-sm font-semibold text-accent">Your requirements come first</p>
        <h1 className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl">{FINDER_COPY.title}</h1>
        <p className="mt-4 text-lg leading-relaxed text-muted">{FINDER_COPY.description}</p>
      </div>
      <Finder models={CURATED_MODELS} />
      <aside aria-label="Recommendation methodology" className="mt-10 space-y-3 border-t border-line pt-6 text-sm leading-relaxed text-muted">
        <h2 className="text-base font-semibold text-foreground">A shortlist you can inspect</h2>
        <p>{CURATED_MODELS.length} curated model packages. We exclude unsuitable options before ranking and show fewer than three when necessary. Task order is editorial; it is not an independent benchmark or a guarantee that a model is the best available.</p>
        <p>{FINDER_COPY.scope}</p>
        <p>Cloud sources are eligible for 14 days after checking; local packages for 90 days. Stale entries are excluded until refreshed. Matching runs in your browser. With analytics consent, we record task and action events to improve recommendations; budget and hardware values are not included.</p>
        <Link href="/contact" className="inline-block font-semibold text-accent underline">Tell us what the shortlist missed</Link>
      </aside>
    </main>
    <Footer />
  </div>;
}
