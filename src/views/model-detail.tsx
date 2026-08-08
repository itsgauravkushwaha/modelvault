"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { useDirectoryStore } from "@/stores/use-directory-store";
import { useDashboardStore } from "@/stores/use-dashboard-store";
import { Header } from "@/components/directory/Header";
import { Footer } from "@/components/directory/Footer";
import { AvailabilityBadge, PricingBadge } from "@/components/directory/Badges";
import { ModelCard } from "@/components/directory/ModelCard";
import { ArrowUpRightIcon, CheckIcon, CodeIcon, CpuIcon, ExternalLinkIcon, HeartFillIcon, HeartIcon } from "@/components/directory/icons";
import { ModelFeedback } from "@/components/directory/ModelFeedback";
import { enrichModelData, getModalityCodeSnippet } from "@/lib/utils/model-enricher";

interface ModelDetailProps {
  slug: string;
}

export const ModelDetailView: React.FC<ModelDetailProps> = ({ slug }) => {
  const allModels = useDirectoryStore((s) => s.allModels);
  const loadModelsFromDb = useDirectoryStore((s) => s.loadModelsFromDb);

  const isFav = useDashboardStore((s) => s.favorites.includes(slug));
  const toggleFavorite = useDashboardStore((s) => s.toggleFavorite);
  const [activeTab, setActiveTab] = useState<"python" | "rest">("python");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    loadModelsFromDb();
  }, [loadModelsFromDb]);

  const rawModel = allModels.find((m) => m.slug === slug);

  if (!rawModel) {
    return notFound();
  }

  const model = enrichModelData(rawModel);
  const codeSnippet = getModalityCodeSnippet(model);

  const copyCode = () => {
    const text = activeTab === "python" ? codeSnippet.python : codeSnippet.rest;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };


  const similarModels = allModels.filter(
    (m) => m.slug !== model.slug && m.providerSlug === model.providerSlug
  ).slice(0, 3);

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      <Header />

      <main className="flex-1 py-8">
        <div className="shell max-w-5xl">
          {/* Breadcrumbs */}
          <div className="flex items-center gap-2 text-xs text-slate-500 font-semibold mb-4">
            <Link href="/models" className="hover:text-blue-600">Models</Link>
            <span>/</span>
            <span className="text-slate-900">{model.name}</span>
          </div>

          {/* Model Main Card Header */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm mb-8">
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-extrabold uppercase tracking-wider text-blue-600">
                    {model.provider}
                  </span>
                  <PricingBadge pricing={model.pricing} />
                </div>

                <div className="flex items-center gap-3">
                  <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                    {model.name}
                  </h1>
                  <button
                    onClick={() => toggleFavorite(model.slug)}
                    aria-label={isFav ? `Remove ${model.name} from favorites` : `Add ${model.name} to favorites`}
                    className={`flex h-9 w-9 items-center justify-center rounded-xl border transition-all duration-200 active:scale-125 focus:outline-none focus:ring-2 focus:ring-rose-500/40 ${
                      isFav
                        ? "border-rose-200 bg-rose-50 text-rose-600 shadow-sm"
                        : "border-slate-200 bg-white text-slate-400 hover:border-rose-200 hover:bg-rose-50/50 hover:text-rose-500"
                    }`}
                  >
                    {isFav ? <HeartFillIcon className="w-4 h-4" /> : <HeartIcon className="w-4 h-4" />}
                  </button>
                </div>

                <p className="text-xs font-semibold text-slate-500 mt-1">
                  {model.type} • Released {model.releaseDate} • Last Verified {model.lastVerified}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-2">
                {model.playgroundUrl && (
                  <a
                    href={model.playgroundUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 text-xs font-bold transition-all shadow-sm"
                  >
                    <span>Try Playground</span>
                    <ArrowUpRightIcon className="w-3.5 h-3.5" />
                  </a>
                )}
                {model.docUrl && (
                  <a
                    href={model.docUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200 bg-slate-50 hover:bg-slate-100 text-slate-800 px-4 py-2 text-xs font-bold transition-all"
                  >
                    <span>Docs</span>
                    <ExternalLinkIcon className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </div>

            <p className="mt-4 text-sm text-slate-700 leading-relaxed font-medium">
              {model.description}
            </p>

            {/* Quick Specs Strip */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6 pt-6 border-t border-slate-100 text-xs">
              <div>
                <span className="text-[0.65rem] uppercase font-bold text-slate-400 block">Context Window</span>
                <span className="text-sm font-extrabold text-slate-900">{model.contextWindow}</span>
              </div>
              <div>
                <span className="text-[0.65rem] uppercase font-bold text-slate-400 block">License</span>
                <span className="text-sm font-extrabold text-slate-900">{model.license}</span>
              </div>
              <div>
                <span className="text-[0.65rem] uppercase font-bold text-slate-400 block">Deployment</span>
                <div className="mt-0.5"><AvailabilityBadge availability={model.availability} /></div>
              </div>
              <div>
                <span className="text-[0.65rem] uppercase font-bold text-slate-400 block">API Available</span>
                <span className="text-sm font-extrabold text-slate-900">{model.hasApi ? "Yes (REST/SDK)" : "No"}</span>
              </div>
            </div>
          </div>

          {/* Plain English Summary (Everyday User Friendly) */}
          {model.plainEnglishSummary && (
            <div className="rounded-2xl border border-blue-200/80 bg-gradient-to-r from-blue-50/90 to-indigo-50/90 p-6 sm:p-7 shadow-sm mb-8">
              <div className="flex items-center gap-2.5 mb-2">
                <span className="flex h-7 w-7 items-center justify-center rounded-xl bg-blue-600 text-white text-xs font-black shadow-sm">
                  💡
                </span>
                <h2 className="text-xs font-extrabold uppercase tracking-wider text-blue-950">
                  Plain English Summary (What is this model & who is it for?)
                </h2>
              </div>
              <p className="text-sm font-semibold text-slate-800 leading-relaxed pl-9">
                {model.plainEnglishSummary}
              </p>
            </div>
          )}

          {/* Details Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            {/* Left 2 Cols: Main Info */}
            <div className="lg:col-span-2 flex flex-col gap-8">
              {/* Real-World Use Cases & Examples */}
              {model.realWorldExamples && model.realWorldExamples.length > 0 && (
                <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                  <h2 className="text-lg font-extrabold text-slate-900 mb-4">
                    💡 Real-World Use Cases & Practical Examples
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {model.realWorldExamples.map((ex, i) => (
                      <div key={i} className="rounded-xl border border-slate-100 bg-slate-50/80 p-3.5 text-xs font-semibold text-slate-800 leading-snug">
                        {ex}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Step-by-Step Guide: How to Run & Use */}
              {model.howToUseSteps && model.howToUseSteps.length > 0 && (
                <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                  <h2 className="text-lg font-extrabold text-slate-900 mb-1">
                    🚀 How to Run & Use This Model (Step-by-Step Guide)
                  </h2>
                  <p className="text-xs font-medium text-slate-500 mb-6">
                    Simple setup instructions for everyday users and developers.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {model.howToUseSteps.map((step) => (
                      <div key={step.step} className="rounded-xl border border-slate-200 bg-slate-50/70 p-4">
                        <div className="flex items-center gap-2.5 mb-2">
                          <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-blue-600 text-white text-xs font-extrabold shadow-sm">
                            {step.step}
                          </span>
                          <h3 className="text-xs font-extrabold text-slate-900 leading-tight">
                            {step.title}
                          </h3>
                        </div>
                        <p className="text-xs font-medium text-slate-600 leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Benchmarks Section */}

              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <h2 className="text-lg font-extrabold text-slate-900 mb-4">
                  Benchmark Performance
                </h2>
                <div className="flex flex-col gap-4">
                  {model.benchmarks.map((bench) => {
                    const scoreNum = typeof bench.score === "number" ? bench.score : parseFloat(String(bench.score));
                    const maxScore = bench.maxScore || 100;
                    const percent = (scoreNum / maxScore) * 100;

                    return (
                      <div key={bench.name} className="flex flex-col gap-1.5">
                        <div className="flex justify-between text-xs font-bold text-slate-800">
                          <span>{bench.name}</span>
                          <span className="text-blue-600">{bench.score}</span>
                        </div>
                        <div className="h-2 w-full rounded-full bg-slate-100 overflow-hidden">
                          <div
                            className="h-full rounded-full bg-blue-600 transition-all"
                            style={{ width: `${Math.min(percent, 100)}%` }}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Hardware Requirements (If Local) */}
              {model.hardwareRequirements && (
                <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                  <h2 className="text-lg font-extrabold text-slate-900 mb-2 flex items-center gap-2">
                    <CpuIcon className="w-5 h-5 text-emerald-600" />
                    <span>Hardware Requirements for Local Running</span>
                  </h2>
                  <p className="text-xs text-slate-700 font-medium bg-emerald-50 border border-emerald-200 rounded-xl p-4">
                    {model.hardwareRequirements}
                  </p>
                </div>
              )}

              {/* Strengths & Weaknesses */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                  <h3 className="text-sm font-extrabold text-slate-900 mb-3 text-emerald-600 flex items-center gap-1.5">
                    <CheckIcon className="w-4 h-4" />
                    <span>Strengths</span>
                  </h3>
                  <ul className="flex flex-col gap-2 text-xs text-slate-700 font-medium">
                    {model.strengths.map((str, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-emerald-500 font-bold">•</span>
                        <span>{str}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                  <h3 className="text-sm font-extrabold text-slate-900 mb-3 text-amber-600">
                    Limitations & Weaknesses
                  </h3>
                  <ul className="flex flex-col gap-2 text-xs text-slate-700 font-medium">
                    {model.weaknesses.map((weak, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-amber-500 font-bold">•</span>
                        <span>{weak}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Modality-Aware API Code Snippet */}
              <div className="rounded-2xl border border-slate-800 bg-slate-950 p-6 text-white shadow-md">
                <div className="flex flex-wrap items-center justify-between gap-3 mb-4 pb-3 border-b border-slate-800">
                  <div className="flex items-center gap-2">
                    <CodeIcon className="w-4 h-4 text-blue-400" />
                    <span className="text-xs font-extrabold text-slate-200 uppercase tracking-wider">
                      Integration Code ({model.useCases[0] || "API"})
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex items-center rounded-lg bg-slate-900 p-0.5 border border-slate-800">
                      <button
                        onClick={() => setActiveTab("python")}
                        className={`px-3 py-1 text-[0.7rem] font-bold rounded-md transition-all ${
                          activeTab === "python" ? "bg-blue-600 text-white shadow-sm" : "text-slate-400 hover:text-white"
                        }`}
                      >
                        Python
                      </button>
                      <button
                        onClick={() => setActiveTab("rest")}
                        className={`px-3 py-1 text-[0.7rem] font-bold rounded-md transition-all ${
                          activeTab === "rest" ? "bg-blue-600 text-white shadow-sm" : "text-slate-400 hover:text-white"
                        }`}
                      >
                        cURL / REST
                      </button>
                    </div>
                    <button
                      onClick={copyCode}
                      className="px-2.5 py-1 text-[0.7rem] font-bold rounded-lg border border-slate-800 bg-slate-900 text-slate-300 hover:text-white hover:border-slate-700 transition-all"
                    >
                      {copied ? "Copied! ✓" : "Copy"}
                    </button>
                  </div>
                </div>
                <pre className="text-xs font-mono text-slate-200 overflow-x-auto bg-slate-900/90 p-4 rounded-xl leading-relaxed whitespace-pre-wrap">
                  {activeTab === "python" ? codeSnippet.python : codeSnippet.rest}
                </pre>
              </div>

            </div>

            {/* Right Col: Pricing & Meta */}
            <div className="flex flex-col gap-6">
              {/* Pricing Card */}
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="text-xs uppercase font-extrabold tracking-wider text-slate-400 mb-1">
                  Pricing Overview
                </h3>
                <div className="text-base font-extrabold text-slate-900 mb-2">
                  {model.pricingDetails}
                </div>
                <p className="text-xs text-slate-600 leading-relaxed font-medium">
                  Prices subject to provider tiers and volume discounts. Check documentation for current token rates.
                </p>
              </div>

              {/* Tags Card */}
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="text-xs uppercase font-extrabold tracking-wider text-slate-400 mb-3">
                  Model Tags
                </h3>
                <div className="flex flex-wrap gap-1.5">
                  {model.tags.map((tag) => (
                    <span key={tag} className="rounded-md bg-slate-100 px-2.5 py-1 text-xs font-semibold text-slate-700">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Community Feedback */}
          <div className="mt-8">
            <ModelFeedback slug={model.slug} />
          </div>

          {/* Similar Models */}
          {similarModels.length > 0 && (
            <div className="mt-12 pt-8 border-t border-slate-200">
              <h2 className="text-xl font-extrabold text-slate-900 mb-6">
                Similar Models from {model.provider}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {similarModels.map((sim) => (
                  <ModelCard key={sim.slug} model={sim} />
                ))}
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};
