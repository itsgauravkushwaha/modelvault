"use client";

import { useState, useMemo } from "react";
import { Header } from "@/components/directory/Header";
import { Footer } from "@/components/directory/Footer";
import { SparklesIcon, CodeIcon } from "@/components/directory/icons";
import { MODEL_PRICING_RATES, ModelPricingRate } from "@/data/model-pricing";

/* ------------------------------------------------------------------ */
/*  Token estimation heuristic                                          */
/* ------------------------------------------------------------------ */
function estimateTokenCount(text: string): number {
  if (!text.trim()) return 0;
  // GPT-style BPE approximation: ~4 characters per token for English
  // Adjusted for whitespace, punctuation, and code
  const charCount = text.length;
  const wordCount = text.split(/\s+/).filter(Boolean).length;
  // Blend character-based and word-based estimates
  const charEstimate = charCount / 4;
  const wordEstimate = wordCount * 1.33;
  return Math.round((charEstimate + wordEstimate) / 2);
}

/* ------------------------------------------------------------------ */
/*  Formatting                                                          */
/* ------------------------------------------------------------------ */
function formatUSD(value: number): string {
  if (value === 0) return "$0.00";
  if (value < 0.0001) return `$${value.toFixed(6)}`;
  if (value < 0.01) return `$${value.toFixed(4)}`;
  if (value < 1) return `$${value.toFixed(3)}`;
  return `$${value.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
}

function slugToDisplayName(slug: string): string {
  return slug
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

function getProviderFromSlug(slug: string): string {
  if (slug.startsWith("gpt") || slug.startsWith("o1")) return "OpenAI";
  if (slug.startsWith("claude")) return "Anthropic";
  if (slug.startsWith("deepseek")) return "DeepSeek";
  if (slug.startsWith("gemini")) return "Google";
  if (slug.startsWith("mistral") || slug === "codestral") return "Mistral";
  if (slug.startsWith("llama")) return "Meta";
  if (slug.startsWith("qwen")) return "Alibaba";
  return "Other";
}

/* ------------------------------------------------------------------ */
/*  View                                                                */
/* ------------------------------------------------------------------ */
export const TokenCalculatorView = () => {
  const [inputText, setInputText] = useState("");
  const [outputMultiplier, setOutputMultiplier] = useState(1.0);

  const tokenCount = useMemo(() => estimateTokenCount(inputText), [inputText]);

  const costComparisons = useMemo(() => {
    if (tokenCount === 0) return [];

    const outputTokens = Math.round(tokenCount * outputMultiplier);

    return Object.entries(MODEL_PRICING_RATES)
      .map(([slug, rate]: [string, ModelPricingRate]) => {
        const inputCost = (tokenCount / 1_000_000) * rate.inputPer1M;
        const outputCost = (outputTokens / 1_000_000) * rate.outputPer1M;
        const totalCost = inputCost + outputCost;

        return {
          slug,
          name: slugToDisplayName(slug),
          provider: getProviderFromSlug(slug),
          inputCost,
          outputCost,
          totalCost,
          inputPer1M: rate.inputPer1M,
          outputPer1M: rate.outputPer1M,
        };
      })
      .sort((a, b) => a.totalCost - b.totalCost);
  }, [tokenCount, outputMultiplier]);

  const maxCost = costComparisons.length > 0 ? costComparisons[costComparisons.length - 1].totalCost : 1;
  const charCount = inputText.length;
  const wordCount = inputText.split(/\s+/).filter(Boolean).length;

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      <Header />

      <main className="flex-1 py-12">
        <div className="shell max-w-5xl">
          {/* Header */}
          <div className="mb-10 text-center max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-3.5 py-1 text-xs font-semibold text-blue-600 mb-3">
              <CodeIcon className="w-3.5 h-3.5" />
              <span>Token Counter & Cost Estimator</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Token &{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Pricing Estimator
              </span>
            </h1>

            <p className="text-xs sm:text-sm text-slate-600 font-medium mt-3 leading-relaxed">
              Paste your prompt text below to see estimated token count and cost comparisons across 20+ AI models.
            </p>
          </div>

          {/* Text Input */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm mb-6">
            <div className="flex items-center justify-between mb-3">
              <label htmlFor="prompt-input" className="text-sm font-extrabold text-slate-900">
                Paste Your Prompt
              </label>
              <button
                onClick={() => setInputText("")}
                className="text-[0.65rem] font-bold text-slate-400 hover:text-slate-600 transition-colors"
              >
                Clear
              </button>
            </div>
            <textarea
              id="prompt-input"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Type or paste your prompt here to calculate tokens and costs..."
              rows={6}
              className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 font-medium placeholder:text-slate-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 resize-y"
            />

            {/* Stats Row */}
            <div className="flex flex-wrap items-center gap-4 mt-3">
              <div className="flex items-center gap-2">
                <span className="text-[0.65rem] font-bold text-slate-500 uppercase tracking-wider">Characters</span>
                <span className="text-sm font-extrabold text-slate-900">{charCount.toLocaleString()}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[0.65rem] font-bold text-slate-500 uppercase tracking-wider">Words</span>
                <span className="text-sm font-extrabold text-slate-900">{wordCount.toLocaleString()}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[0.65rem] font-bold text-slate-500 uppercase tracking-wider">Est. Tokens</span>
                <span className="text-sm font-extrabold text-blue-600">{tokenCount.toLocaleString()}</span>
              </div>
            </div>
          </div>

          {/* Output Multiplier */}
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm mb-8">
            <div className="flex items-center justify-between mb-2">
              <label htmlFor="output-ratio" className="text-xs font-extrabold text-slate-900">
                Expected Output-to-Input Ratio
              </label>
              <span className="text-xs font-bold text-blue-600">{outputMultiplier.toFixed(1)}x</span>
            </div>
            <input
              id="output-ratio"
              type="range"
              min="0.1"
              max="5"
              step="0.1"
              value={outputMultiplier}
              onChange={(e) => setOutputMultiplier(parseFloat(e.target.value))}
              className="w-full accent-blue-600"
            />
            <div className="flex justify-between text-[0.6rem] font-bold text-slate-400 mt-1">
              <span>0.1x (Short reply)</span>
              <span>1x (Equal)</span>
              <span>5x (Long generation)</span>
            </div>
          </div>

          {/* Cost Comparison Table */}
          {tokenCount > 0 && costComparisons.length > 0 && (
            <div className="rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden">
              <div className="px-6 py-4 border-b border-slate-100">
                <h2 className="text-sm font-extrabold text-slate-900">
                  Cost Comparison — {tokenCount.toLocaleString()} input tokens + {Math.round(tokenCount * outputMultiplier).toLocaleString()} output tokens
                </h2>
              </div>

              <div className="divide-y divide-slate-100">
                {costComparisons.map((item, idx) => {
                  const barWidth = maxCost > 0 ? (item.totalCost / maxCost) * 100 : 0;

                  return (
                    <div
                      key={item.slug}
                      className="flex items-center gap-4 px-6 py-3.5 hover:bg-slate-50 transition-colors"
                    >
                      {/* Rank */}
                      <span className={`text-[0.65rem] font-extrabold w-5 text-right ${
                        idx === 0 ? "text-emerald-600" : "text-slate-400"
                      }`}>
                        {idx + 1}
                      </span>

                      {/* Model Info */}
                      <div className="w-44 shrink-0">
                        <span className="block text-xs font-extrabold text-slate-900 truncate">{item.name}</span>
                        <span className="block text-[0.6rem] font-bold text-slate-500">{item.provider}</span>
                      </div>

                      {/* Cost Bar */}
                      <div className="flex-1 min-w-0">
                        <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                          <div
                            className={`h-full rounded-full transition-all duration-500 ${
                              idx === 0
                                ? "bg-gradient-to-r from-emerald-400 to-emerald-500"
                                : "bg-gradient-to-r from-blue-400 to-blue-500"
                            }`}
                            style={{ width: `${Math.max(barWidth, 2)}%` }}
                          />
                        </div>
                      </div>

                      {/* Cost */}
                      <div className="w-24 text-right shrink-0">
                        <span className={`text-xs font-extrabold ${
                          idx === 0 ? "text-emerald-600" : "text-slate-900"
                        }`}>
                          {formatUSD(item.totalCost)}
                        </span>
                      </div>

                      {/* Savings Badge */}
                      {idx === 0 && (
                        <span className="shrink-0 rounded-full bg-emerald-100 px-2 py-0.5 text-[0.55rem] font-extrabold text-emerald-700">
                          Cheapest
                        </span>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Savings Highlight */}
              {costComparisons.length >= 2 && (
                <div className="px-6 py-4 bg-emerald-50 border-t border-emerald-100">
                  <p className="text-xs font-bold text-emerald-800">
                    💡 Using <span className="font-extrabold">{costComparisons[0].name}</span> instead of{" "}
                    <span className="font-extrabold">{costComparisons[costComparisons.length - 1].name}</span>{" "}
                    saves you{" "}
                    <span className="font-extrabold text-emerald-600">
                      {formatUSD(costComparisons[costComparisons.length - 1].totalCost - costComparisons[0].totalCost)}
                    </span>{" "}
                    per request ({Math.round(((costComparisons[costComparisons.length - 1].totalCost - costComparisons[0].totalCost) / costComparisons[costComparisons.length - 1].totalCost) * 100)}% savings)
                  </p>
                </div>
              )}
            </div>
          )}

          {/* Empty State */}
          {tokenCount === 0 && (
            <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-10 text-center">
              <SparklesIcon className="w-8 h-8 text-slate-300 mx-auto mb-3" />
              <p className="text-sm font-bold text-slate-500">
                Paste some text above to see token counts and cost comparisons
              </p>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};
