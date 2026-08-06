"use client";

import { useState, useMemo, useEffect } from "react";
import { useDirectoryStore } from "@/stores/use-directory-store";
import { Header } from "@/components/directory/Header";
import { Footer } from "@/components/directory/Footer";
import { SparklesIcon } from "@/components/directory/icons";
import type { AIModel } from "@/types/model";

/* ------------------------------------------------------------------ */
/*  Context window parsing                                              */
/* ------------------------------------------------------------------ */
function parseContextWindow(ctx: string): number {
  if (!ctx || ctx === "N/A") return 0;
  const lower = ctx.toLowerCase().trim();
  if (lower.endsWith("m")) return parseFloat(lower) * 1_000_000;
  if (lower.endsWith("k")) return parseFloat(lower) * 1_000;
  return parseFloat(lower) || 0;
}

/* ------------------------------------------------------------------ */
/*  Capacity constants                                                  */
/* ------------------------------------------------------------------ */
const TOKENS_PER_PAGE = 500;          // ~500 tokens per A4 page of text
const TOKENS_PER_RAG_CHUNK = 256;     // Standard RAG chunk size
const TOKENS_PER_CODE_FUNCTION = 100; // Avg lines per function * tokens
const TOKENS_PER_EMAIL = 150;         // Average email
const TOKENS_PER_TWEET = 40;          // Average tweet

interface CapacityMetric {
  label: string;
  emoji: string;
  tokensPerUnit: number;
  unit: string;
}

const CAPACITY_METRICS: CapacityMetric[] = [
  { label: "A4 Pages", emoji: "📄", tokensPerUnit: TOKENS_PER_PAGE, unit: "pages" },
  { label: "RAG Chunks", emoji: "🔗", tokensPerUnit: TOKENS_PER_RAG_CHUNK, unit: "chunks" },
  { label: "Code Functions", emoji: "💻", tokensPerUnit: TOKENS_PER_CODE_FUNCTION, unit: "functions" },
  { label: "Emails", emoji: "📧", tokensPerUnit: TOKENS_PER_EMAIL, unit: "emails" },
  { label: "Tweets", emoji: "🐦", tokensPerUnit: TOKENS_PER_TWEET, unit: "tweets" },
];

/* ------------------------------------------------------------------ */
/*  View                                                                */
/* ------------------------------------------------------------------ */
export const ContextCalculatorView = () => {
  const allModels = useDirectoryStore((s) => s.allModels);
  const loadModelsFromDb = useDirectoryStore((s) => s.loadModelsFromDb);

  useEffect(() => {
    loadModelsFromDb();
  }, [loadModelsFromDb]);

  const [selectedSlugA, setSelectedSlugA] = useState("");
  const [selectedSlugB, setSelectedSlugB] = useState("");
  const [reservedTokens, setReservedTokens] = useState(500); // tokens for system prompt + output

  // Models with valid context windows, sorted by size
  const contextModels = useMemo(() => {
    return allModels
      .filter((m) => parseContextWindow(m.contextWindow) > 0)
      .sort((a, b) => parseContextWindow(b.contextWindow) - parseContextWindow(a.contextWindow));
  }, [allModels]);

  // Pre-select top 2 models
  useEffect(() => {
    if (contextModels.length >= 2 && !selectedSlugA && !selectedSlugB) {
      // Pick GPT-4o and Claude 3.5 Sonnet if available, otherwise top 2
      const gpt4o = contextModels.find((m) => m.slug === "gpt-4o");
      const claude = contextModels.find((m) => m.slug === "claude-3-5-sonnet");
      setSelectedSlugA(gpt4o?.slug ?? contextModels[0].slug);
      setSelectedSlugB(claude?.slug ?? contextModels[1].slug);
    }
  }, [contextModels, selectedSlugA, selectedSlugB]);

  const modelA = contextModels.find((m) => m.slug === selectedSlugA);
  const modelB = contextModels.find((m) => m.slug === selectedSlugB);

  function renderModelCard(model: AIModel | undefined, label: string) {
    if (!model) return null;

    const ctxTokens = parseContextWindow(model.contextWindow);
    const usableTokens = Math.max(0, ctxTokens - reservedTokens);
    const fillPct = ctxTokens > 0 ? (usableTokens / ctxTokens) * 100 : 0;

    return (
      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="flex items-center gap-2 mb-1">
          <span className="text-[0.65rem] font-extrabold text-blue-600 uppercase tracking-wider">{label}</span>
        </div>
        <h3 className="text-lg font-extrabold text-slate-900">{model.name}</h3>
        <p className="text-[0.65rem] font-bold text-slate-500 mb-4">{model.provider}</p>

        {/* Context Window Gauge */}
        <div className="mb-5">
          <div className="flex items-end justify-between mb-1.5">
            <span className="text-[0.65rem] font-bold text-slate-500 uppercase tracking-wider">Context Window</span>
            <span className="text-sm font-extrabold text-slate-900">{model.contextWindow} tokens</span>
          </div>
          <div className="h-4 bg-slate-100 rounded-full overflow-hidden relative">
            <div
              className="h-full bg-gradient-to-r from-blue-400 to-blue-600 rounded-full transition-all duration-500"
              style={{ width: `${fillPct}%` }}
            />
            {/* Reserved area */}
            <div
              className="absolute top-0 right-0 h-full bg-slate-300/50 rounded-r-full"
              style={{ width: `${100 - fillPct}%` }}
            />
          </div>
          <div className="flex justify-between mt-1 text-[0.55rem] font-bold text-slate-400">
            <span>Usable: {usableTokens.toLocaleString()} tokens</span>
            <span>Reserved: {reservedTokens.toLocaleString()}</span>
          </div>
        </div>

        {/* Capacity Breakdown */}
        <div className="space-y-3">
          {CAPACITY_METRICS.map((metric) => {
            const capacity = Math.floor(usableTokens / metric.tokensPerUnit);
            return (
              <div key={metric.label} className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-sm">{metric.emoji}</span>
                  <span className="text-xs font-bold text-slate-700">{metric.label}</span>
                </div>
                <div className="text-right">
                  <span className="text-sm font-extrabold text-slate-900">{capacity.toLocaleString()}</span>
                  <span className="text-[0.6rem] font-bold text-slate-500 ml-1">{metric.unit}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      <Header />

      <main className="flex-1 py-12">
        <div className="shell max-w-5xl">
          {/* Header */}
          <div className="mb-10 text-center max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 rounded-full border border-sky-500/30 bg-sky-500/10 px-3.5 py-1 text-xs font-semibold text-sky-600 mb-3">
              <SparklesIcon className="w-3.5 h-3.5" />
              <span>Context Window Capacity Calculator</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              How Much Fits in{" "}
              <span className="bg-gradient-to-r from-sky-600 to-cyan-600 bg-clip-text text-transparent">
                Your Context Window
              </span>
              ?
            </h1>

            <p className="text-xs sm:text-sm text-slate-600 font-medium mt-3 leading-relaxed">
              Select two models to compare how many pages, RAG chunks, code functions, and documents fit inside their context windows.
            </p>
          </div>

          {/* Model Selectors */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div>
              <label htmlFor="model-a" className="block text-xs font-extrabold text-slate-900 mb-2">
                Model A
              </label>
              <select
                id="model-a"
                value={selectedSlugA}
                onChange={(e) => setSelectedSlugA(e.target.value)}
                className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-bold text-slate-900 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
              >
                <option value="">Select a model...</option>
                {contextModels.map((m) => (
                  <option key={m.slug} value={m.slug}>
                    {m.name} — {m.contextWindow} ({m.provider})
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="model-b" className="block text-xs font-extrabold text-slate-900 mb-2">
                Model B
              </label>
              <select
                id="model-b"
                value={selectedSlugB}
                onChange={(e) => setSelectedSlugB(e.target.value)}
                className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-bold text-slate-900 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
              >
                <option value="">Select a model...</option>
                {contextModels.map((m) => (
                  <option key={m.slug} value={m.slug}>
                    {m.name} — {m.contextWindow} ({m.provider})
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Reserved Tokens Slider */}
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm mb-8">
            <div className="flex items-center justify-between mb-2">
              <label htmlFor="reserved-tokens" className="text-xs font-extrabold text-slate-900">
                Reserved Tokens (System Prompt + Output Buffer)
              </label>
              <span className="text-xs font-bold text-sky-600">{reservedTokens.toLocaleString()}</span>
            </div>
            <input
              id="reserved-tokens"
              type="range"
              min="0"
              max="10000"
              step="100"
              value={reservedTokens}
              onChange={(e) => setReservedTokens(parseInt(e.target.value))}
              className="w-full accent-sky-600"
            />
            <div className="flex justify-between text-[0.6rem] font-bold text-slate-400 mt-1">
              <span>0 (None)</span>
              <span>5,000</span>
              <span>10,000 (Large system prompt)</span>
            </div>
          </div>

          {/* Comparison Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {renderModelCard(modelA, "Model A")}
            {renderModelCard(modelB, "Model B")}
          </div>

          {/* Winner Highlight */}
          {modelA && modelB && (
            <div className="mt-6 rounded-2xl bg-sky-50 border border-sky-200 p-5 text-center">
              {(() => {
                const ctxA = parseContextWindow(modelA.contextWindow);
                const ctxB = parseContextWindow(modelB.contextWindow);
                const winner = ctxA >= ctxB ? modelA : modelB;
                const ratio = ctxA >= ctxB ? (ctxA / ctxB).toFixed(1) : (ctxB / ctxA).toFixed(1);
                return (
                  <p className="text-xs font-bold text-sky-800">
                    📊 <span className="font-extrabold">{winner.name}</span> has{" "}
                    <span className="font-extrabold text-sky-600">{ratio}x</span> more context capacity than{" "}
                    <span className="font-extrabold">{winner === modelA ? modelB.name : modelA.name}</span>
                  </p>
                );
              })()}
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};
