"use client";

import { useState, useMemo, useCallback } from "react";
import Link from "next/link";
import { Header } from "@/components/directory/Header";
import { Footer } from "@/components/directory/Footer";
import {
  ArrowRightIcon,
  SparklesIcon,
  WrenchIcon,
  CodeIcon,
  CpuIcon,
} from "@/components/directory/icons";
import {
  MODEL_PRICING_RATES,
  ModelPricingRate,
  CalculationInput,
  CostCalculationResult,
  calculateCost,
} from "@/data/model-pricing";

/* ------------------------------------------------------------------ */
/*  Formatting utilities                                               */
/* ------------------------------------------------------------------ */
function formatUSD(value: number): string {
  if (value < 0.01 && value > 0) return `$${value.toFixed(4)}`;
  if (value < 1) return `$${value.toFixed(3)}`;
  return `$${value.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
}

function formatUSDShort(value: number): string {
  if (value >= 1_000_000) return `$${(value / 1_000_000).toFixed(1)}M`;
  if (value >= 1_000) return `$${(value / 1_000).toFixed(1)}K`;
  return formatUSD(value);
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
  if (slug.startsWith("qwen")) return "Qwen";
  return "Provider";
}

/* ------------------------------------------------------------------ */
/*  Model entries for select dropdown and comparison                   */
/* ------------------------------------------------------------------ */
interface ModelEntry {
  slug: string;
  name: string;
  provider: string;
  rate: ModelPricingRate;
}

const ALL_MODELS: ModelEntry[] = Object.entries(MODEL_PRICING_RATES).map(
  ([slug, rate]) => ({
    slug,
    name: slugToDisplayName(slug),
    provider: getProviderFromSlug(slug),
    rate,
  })
);

/* ------------------------------------------------------------------ */
/*  FAQ Data                                                           */
/* ------------------------------------------------------------------ */
const FAQ_ITEMS = [
  {
    q: "How are AI API costs calculated?",
    a: "AI providers charge per token processed. Tokens are sub-word units — roughly ¾ of a word. Costs are typically expressed per million tokens, with separate rates for input (prompt) and output (completion) tokens. Our calculator multiplies your per-request token counts by your monthly request volume and each model's published rate.",
  },
  {
    q: "What are input tokens?",
    a: "Input tokens represent the text you send to the model — your system prompt, user message, and any context. The more detailed your prompt, the more input tokens you consume. Most models price input tokens lower than output tokens.",
  },
  {
    q: "What are output tokens?",
    a: "Output tokens are the tokens the model generates in its response. Because generation requires more compute than reading, output tokens are usually 2–5× more expensive than input tokens.",
  },
  {
    q: "Why do different providers charge different prices?",
    a: "Pricing reflects model size, training cost, inference hardware, and business strategy. Frontier models (GPT-4o, Claude 3 Opus) are expensive because they run on large GPU clusters. Smaller or distilled models (GPT-4o mini, DeepSeek V3) offer aggressive pricing for cost-sensitive workloads.",
  },
  {
    q: "What is cached input pricing?",
    a: "Some providers (OpenAI, Anthropic, DeepSeek, Google) cache frequently repeated prompt prefixes — such as a long system prompt — and charge a reduced rate for subsequent requests that reuse the same prefix. This can reduce input costs by 50–90%.",
  },
  {
    q: "How accurate is this calculator?",
    a: "We use published list prices from each provider's official pricing page. Actual costs may vary due to volume discounts, committed-use agreements, or regional pricing. Always confirm with your provider's billing dashboard.",
  },
];

/* ------------------------------------------------------------------ */
/*  Insight generator                                                  */
/* ------------------------------------------------------------------ */
function generateInsights(
  selectedSlug: string,
  params: CalculationInput,
  selectedResult: CostCalculationResult
): string[] {
  const insights: string[] = [];
  if (params.monthlyRequests === 0) return insights;

  const allResults = ALL_MODELS
    .filter((m) => m.slug !== selectedSlug)
    .map((m) => ({
      ...m,
      result: calculateCost(m.rate, params),
    }))
    .sort((a, b) => a.result.totalMonthlyCost - b.result.totalMonthlyCost);

  const cheapest = allResults[0];
  if (cheapest && cheapest.result.totalMonthlyCost < selectedResult.totalMonthlyCost) {
    const savingPct = (
      ((selectedResult.totalMonthlyCost - cheapest.result.totalMonthlyCost) /
        selectedResult.totalMonthlyCost) *
      100
    ).toFixed(0);
    insights.push(
      `You could save approximately ${savingPct}% by switching to ${cheapest.name} (${cheapest.provider}), reducing monthly costs from ${formatUSD(selectedResult.totalMonthlyCost)} to ${formatUSD(cheapest.result.totalMonthlyCost)}.`
    );
  }

  if (params.cachedTokensPerReq > 0 && selectedResult.cachedSavingsMonthly > 0) {
    insights.push(
      `Prompt caching saves you ${formatUSD(selectedResult.cachedSavingsMonthly)}/month on this workload. Maximise your system prompt overlap to increase these savings.`
    );
  } else if (params.cachedTokensPerReq === 0) {
    const selectedRate = MODEL_PRICING_RATES[selectedSlug];
    if (selectedRate?.cachedInputPer1M !== undefined) {
      insights.push(
        `This model supports cached input pricing. Adding cached tokens could reduce your input costs by up to ${((1 - (selectedRate.cachedInputPer1M / selectedRate.inputPer1M)) * 100).toFixed(0)}%.`
      );
    }
  }

  const annualCost = selectedResult.estimatedAnnualCost;
  if (annualCost > 10_000) {
    insights.push(
      `At ${formatUSDShort(annualCost)}/year, consider negotiating a committed-use agreement with your provider for potential volume discounts.`
    );
  }

  return insights;
}

/* ------------------------------------------------------------------ */
/*  Related Tools                                                      */
/* ------------------------------------------------------------------ */
const RELATED_TOOLS = [
  { title: "Token Calculator", description: "Compute BPE token counts from raw text.", href: "/tools", icon: CodeIcon, accent: "from-purple-500 to-pink-600", soon: true },
  { title: "Context Calculator", description: "Calculate context fill ratios for long-context models.", href: "/tools", icon: SparklesIcon, accent: "from-sky-500 to-cyan-600", soon: true },
  { title: "VRAM Calculator", description: "GPU requirements for local model inference.", href: "/tools", icon: CpuIcon, accent: "from-emerald-500 to-teal-600", soon: true },
];

/* ================================================================== */
/*  VIEW COMPONENT                                                     */
/* ================================================================== */
export const CostCalculatorView = () => {
  const [selectedSlug, setSelectedSlug] = useState(ALL_MODELS[0].slug);
  const [inputTokens, setInputTokens] = useState(1000);
  const [outputTokens, setOutputTokens] = useState(500);
  const [cachedTokens, setCachedTokens] = useState(0);
  const [monthlyRequests, setMonthlyRequests] = useState(10000);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const params: CalculationInput = useMemo(
    () => ({
      inputTokensPerReq: inputTokens,
      outputTokensPerReq: outputTokens,
      cachedTokensPerReq: cachedTokens,
      monthlyRequests,
    }),
    [inputTokens, outputTokens, cachedTokens, monthlyRequests]
  );

  const selectedRate = MODEL_PRICING_RATES[selectedSlug];
  const result: CostCalculationResult | null = useMemo(
    () => (selectedRate ? calculateCost(selectedRate, params) : null),
    [selectedRate, params]
  );

  const comparisonRows = useMemo(() => {
    return ALL_MODELS.map((m) => ({
      ...m,
      result: calculateCost(m.rate, params),
    })).sort((a, b) => a.result.totalMonthlyCost - b.result.totalMonthlyCost);
  }, [params]);

  const cheapestCost = comparisonRows.length > 0 ? comparisonRows[0].result.totalMonthlyCost : 0;

  const insights = useMemo(
    () => (result ? generateInsights(selectedSlug, params, result) : []),
    [selectedSlug, params, result]
  );

  const handleNumInput = useCallback(
    (setter: (v: number) => void) => (e: React.ChangeEvent<HTMLInputElement>) => {
      const val = parseInt(e.target.value, 10);
      setter(isNaN(val) || val < 0 ? 0 : val);
    },
    []
  );

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      <Header />

      <main className="flex-1">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              name: "ModelVault AI API Cost Calculator",
              url: "https://modelvault.space/tools/cost-calculator",
              applicationCategory: "DeveloperApplication",
              operatingSystem: "All",
              description:
                "Calculate and compare monthly LLM API costs across OpenAI, Anthropic, DeepSeek, Google Gemini, and Llama 3 models based on input, output, and cached tokens.",
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "USD",
              },
            }),
          }}
        />
        {/* ---- HERO ---- */}
        <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white py-16 sm:py-20">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-blue-600/10 blur-3xl" />
            <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-purple-600/10 blur-3xl" />
          </div>

          <div className="shell max-w-4xl text-center relative z-10">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-3.5 py-1 text-xs font-semibold text-blue-400 mb-4 backdrop-blur-sm">
              <WrenchIcon className="w-3.5 h-3.5" />
              <span>Developer Tools</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
              AI API <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Cost Calculator</span>
            </h1>

            <p className="mt-4 text-sm sm:text-base text-slate-300 font-medium max-w-2xl mx-auto leading-relaxed">
              Estimate and compare API costs across OpenAI, Anthropic, Google, DeepSeek, Mistral, Qwen, and more. No sign-up required.
            </p>

            <a
              href="#calculator"
              className="mt-6 inline-flex items-center gap-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white px-7 py-3 text-sm font-bold transition-all shadow-lg hover:shadow-blue-500/25"
            >
              <span>Start Calculating</span>
              <ArrowRightIcon className="w-4 h-4" />
            </a>
          </div>
        </section>

        {/* ---- CALCULATOR INPUT ---- */}
        <section id="calculator" className="py-12 sm:py-16">
          <div className="shell max-w-5xl">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm">
              <h2 className="text-xl font-extrabold text-slate-900 tracking-tight mb-6">
                Configure Your Workload
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
                {/* Select Model */}
                <div className="lg:col-span-1">
                  <label htmlFor="model-select" className="block text-[0.65rem] font-extrabold uppercase tracking-wider text-slate-400 mb-1.5">
                    Select Model
                  </label>
                  <select
                    id="model-select"
                    value={selectedSlug}
                    onChange={(e) => setSelectedSlug(e.target.value)}
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-xs font-semibold text-slate-900 focus:outline-none focus:border-blue-500 focus:bg-white transition-all"
                  >
                    {ALL_MODELS.map((m) => (
                      <option key={m.slug} value={m.slug}>
                        {m.name} ({m.provider})
                      </option>
                    ))}
                  </select>
                </div>

                {/* Input Tokens */}
                <div>
                  <label htmlFor="input-tokens" className="block text-[0.65rem] font-extrabold uppercase tracking-wider text-slate-400 mb-1.5">
                    Input Tokens / Request
                  </label>
                  <input
                    id="input-tokens"
                    type="number"
                    min={0}
                    value={inputTokens}
                    onChange={handleNumInput(setInputTokens)}
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-xs font-semibold text-slate-900 focus:outline-none focus:border-blue-500 focus:bg-white transition-all"
                  />
                </div>

                {/* Output Tokens */}
                <div>
                  <label htmlFor="output-tokens" className="block text-[0.65rem] font-extrabold uppercase tracking-wider text-slate-400 mb-1.5">
                    Output Tokens / Request
                  </label>
                  <input
                    id="output-tokens"
                    type="number"
                    min={0}
                    value={outputTokens}
                    onChange={handleNumInput(setOutputTokens)}
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-xs font-semibold text-slate-900 focus:outline-none focus:border-blue-500 focus:bg-white transition-all"
                  />
                </div>

                {/* Cached Input Tokens */}
                <div>
                  <label htmlFor="cached-tokens" className="block text-[0.65rem] font-extrabold uppercase tracking-wider text-slate-400 mb-1.5">
                    Cached Tokens <span className="text-slate-300">(optional)</span>
                  </label>
                  <input
                    id="cached-tokens"
                    type="number"
                    min={0}
                    value={cachedTokens}
                    onChange={handleNumInput(setCachedTokens)}
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-xs font-semibold text-slate-900 focus:outline-none focus:border-blue-500 focus:bg-white transition-all"
                  />
                </div>

                {/* Monthly Requests */}
                <div>
                  <label htmlFor="monthly-requests" className="block text-[0.65rem] font-extrabold uppercase tracking-wider text-slate-400 mb-1.5">
                    Monthly Requests
                  </label>
                  <input
                    id="monthly-requests"
                    type="number"
                    min={0}
                    value={monthlyRequests}
                    onChange={handleNumInput(setMonthlyRequests)}
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-xs font-semibold text-slate-900 focus:outline-none focus:border-blue-500 focus:bg-white transition-all"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ---- RESULTS CARDS ---- */}
        {result && (
          <section className="pb-12 sm:pb-16">
            <div className="shell max-w-5xl">
              <h2 className="text-xs font-extrabold uppercase tracking-widest text-slate-400 mb-4">
                Cost Breakdown — {slugToDisplayName(selectedSlug)}
              </h2>

              <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  { label: "Input Cost", value: formatUSD(result.inputCostMonthly), color: "text-blue-600", bg: "bg-blue-500/10", border: "border-blue-500/20" },
                  { label: "Output Cost", value: formatUSD(result.outputCostMonthly), color: "text-purple-600", bg: "bg-purple-500/10", border: "border-purple-500/20" },
                  { label: "Cached Savings", value: `-${formatUSD(result.cachedSavingsMonthly)}`, color: "text-emerald-600", bg: "bg-emerald-500/10", border: "border-emerald-500/20" },
                  { label: "Total Monthly Cost", value: formatUSD(result.totalMonthlyCost), color: "text-slate-900", bg: "bg-slate-100", border: "border-slate-200" },
                  { label: "Avg Cost / Request", value: formatUSD(result.avgCostPerRequest), color: "text-amber-600", bg: "bg-amber-500/10", border: "border-amber-500/20" },
                  { label: "Estimated Annual", value: formatUSDShort(result.estimatedAnnualCost), color: "text-rose-600", bg: "bg-rose-500/10", border: "border-rose-500/20" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className={`rounded-2xl border ${stat.border} bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md`}
                  >
                    <span className="block text-[0.65rem] font-extrabold uppercase tracking-wider text-slate-400 mb-2">
                      {stat.label}
                    </span>
                    <span className={`text-2xl sm:text-3xl font-extrabold tracking-tight ${stat.color}`}>
                      {stat.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ---- SMART INSIGHTS ---- */}
        {insights.length > 0 && (
          <section className="pb-12 sm:pb-16">
            <div className="shell max-w-5xl">
              <h2 className="text-xs font-extrabold uppercase tracking-widest text-blue-600 mb-4">
                Smart Insights
              </h2>

              <div className="flex flex-col gap-3">
                {insights.map((insight, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 rounded-2xl border border-blue-100 bg-blue-50/50 p-5 text-xs text-slate-800 font-medium leading-relaxed"
                  >
                    <div className="flex h-6 w-6 items-center justify-center rounded-lg bg-blue-600 text-white text-[0.6rem] font-extrabold flex-shrink-0 mt-0.5">
                      {i + 1}
                    </div>
                    <p>{insight}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ---- COMPARISON TABLE ---- */}
        <section className="pb-12 sm:pb-16">
          <div className="shell max-w-5xl">
            <h2 className="text-xs font-extrabold uppercase tracking-widest text-slate-400 mb-1">
              Cross-Model Comparison
            </h2>
            <p className="text-sm text-slate-600 font-medium mb-6">
              Same workload ({inputTokens.toLocaleString()} in / {outputTokens.toLocaleString()} out × {monthlyRequests.toLocaleString()} req/mo) across all supported models.
            </p>

            {/* Desktop Table */}
            <div className="hidden md:block rounded-2xl border border-slate-200 bg-white overflow-x-auto shadow-sm">
              <table className="w-full text-xs">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200">
                    <th className="text-left px-5 py-3 font-extrabold text-slate-500 uppercase tracking-wider text-[0.6rem]">Model</th>
                    <th className="text-left px-5 py-3 font-extrabold text-slate-500 uppercase tracking-wider text-[0.6rem]">Provider</th>
                    <th className="text-right px-5 py-3 font-extrabold text-slate-500 uppercase tracking-wider text-[0.6rem]">Input Cost</th>
                    <th className="text-right px-5 py-3 font-extrabold text-slate-500 uppercase tracking-wider text-[0.6rem]">Output Cost</th>
                    <th className="text-right px-5 py-3 font-extrabold text-slate-500 uppercase tracking-wider text-[0.6rem]">Monthly Total</th>
                    <th className="text-right px-5 py-3 font-extrabold text-slate-500 uppercase tracking-wider text-[0.6rem]">vs Selected</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonRows.map((row, idx) => {
                    const isSelected = row.slug === selectedSlug;
                    const isCheapest = idx === 0;
                    const diff = result
                      ? ((row.result.totalMonthlyCost - result.totalMonthlyCost) / result.totalMonthlyCost) * 100
                      : 0;

                    return (
                      <tr
                        key={row.slug}
                        className={`border-b border-slate-100 transition-colors ${
                          isSelected ? "bg-blue-50/60" : "hover:bg-slate-50/50"
                        }`}
                      >
                        <td className="px-5 py-3 font-extrabold text-slate-900">
                          <div className="flex items-center gap-2">
                            {row.name}
                            {isSelected && (
                              <span className="rounded-full bg-blue-600 px-2 py-0.5 text-[0.55rem] font-bold text-white">
                                Selected
                              </span>
                            )}
                            {isCheapest && !isSelected && (
                              <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-[0.55rem] font-bold text-emerald-700">
                                Cheapest
                              </span>
                            )}
                          </div>
                        </td>
                        <td className="px-5 py-3 text-slate-600 font-semibold">{row.provider}</td>
                        <td className="px-5 py-3 text-right font-semibold text-slate-700">{formatUSD(row.result.inputCostMonthly)}</td>
                        <td className="px-5 py-3 text-right font-semibold text-slate-700">{formatUSD(row.result.outputCostMonthly)}</td>
                        <td className="px-5 py-3 text-right font-extrabold text-slate-900">{formatUSD(row.result.totalMonthlyCost)}</td>
                        <td className="px-5 py-3 text-right font-bold">
                          {isSelected ? (
                            <span className="text-slate-400">—</span>
                          ) : diff < 0 ? (
                            <span className="text-emerald-600">{diff.toFixed(0)}%</span>
                          ) : (
                            <span className="text-rose-600">+{diff.toFixed(0)}%</span>
                          )}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            {/* Mobile Cards */}
            <div className="md:hidden flex flex-col gap-3">
              {comparisonRows.map((row, idx) => {
                const isSelected = row.slug === selectedSlug;
                const isCheapest = idx === 0;
                return (
                  <div
                    key={row.slug}
                    className={`rounded-2xl border p-4 shadow-sm ${
                      isSelected ? "border-blue-300 bg-blue-50/60" : "border-slate-200 bg-white"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <span className="font-extrabold text-sm text-slate-900">{row.name}</span>
                        {isSelected && (
                          <span className="rounded-full bg-blue-600 px-2 py-0.5 text-[0.55rem] font-bold text-white">Selected</span>
                        )}
                        {isCheapest && !isSelected && (
                          <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-[0.55rem] font-bold text-emerald-700">Cheapest</span>
                        )}
                      </div>
                      <span className="text-[0.65rem] font-bold text-slate-500">{row.provider}</span>
                    </div>
                    <div className="grid grid-cols-3 gap-2 text-xs">
                      <div>
                        <span className="block text-[0.6rem] uppercase font-bold text-slate-400">Input</span>
                        <span className="font-bold text-slate-700">{formatUSD(row.result.inputCostMonthly)}</span>
                      </div>
                      <div>
                        <span className="block text-[0.6rem] uppercase font-bold text-slate-400">Output</span>
                        <span className="font-bold text-slate-700">{formatUSD(row.result.outputCostMonthly)}</span>
                      </div>
                      <div>
                        <span className="block text-[0.6rem] uppercase font-bold text-slate-400">Monthly</span>
                        <span className="font-extrabold text-slate-900">{formatUSD(row.result.totalMonthlyCost)}</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ---- COST BAR VISUALIZATION ---- */}
        <section className="pb-12 sm:pb-16">
          <div className="shell max-w-5xl">
            <h2 className="text-xs font-extrabold uppercase tracking-widest text-slate-400 mb-4">
              Relative Cost Comparison
            </h2>
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex flex-col gap-3">
                {comparisonRows.slice(0, 12).map((row) => {
                  const maxCost = comparisonRows[comparisonRows.length - 1]?.result.totalMonthlyCost || 1;
                  const pct = maxCost > 0 ? (row.result.totalMonthlyCost / maxCost) * 100 : 0;
                  const isSelected = row.slug === selectedSlug;

                  return (
                    <div key={row.slug} className="flex items-center gap-2 sm:gap-3">
                      <span className={`w-24 sm:w-36 truncate text-xs font-semibold ${isSelected ? "text-blue-700 font-extrabold" : "text-slate-700"}`}>
                        {row.name}
                      </span>
                      <div className="flex-1 h-6 rounded-lg bg-slate-100 overflow-hidden relative">
                        <div
                          className={`h-full rounded-lg transition-all duration-700 ease-out ${
                            isSelected
                              ? "bg-gradient-to-r from-blue-500 to-indigo-600"
                              : "bg-gradient-to-r from-slate-300 to-slate-400"
                          }`}
                          style={{ width: `${Math.max(pct, 2)}%` }}
                        />
                      </div>
                      <span className={`w-16 sm:w-24 text-right text-xs font-bold ${isSelected ? "text-blue-700" : "text-slate-600"}`}>
                        {formatUSD(row.result.totalMonthlyCost)}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* ---- FAQ ---- */}
        <section className="pb-12 sm:pb-16">
          <div className="shell max-w-3xl">
            <div className="text-center mb-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Frequently Asked Questions
              </h2>
              <p className="text-xs text-slate-500 font-medium mt-2">
                Common questions about AI API pricing and how this calculator works.
              </p>
            </div>

            <div className="flex flex-col gap-3">
              {FAQ_ITEMS.map((item, i) => (
                <div key={i} className="rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    aria-expanded={openFaq === i}
                    className="flex w-full items-center justify-between px-5 py-4 text-left text-sm font-extrabold text-slate-900 hover:bg-slate-50 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500/30 rounded-2xl"
                  >
                    <span>{item.q}</span>
                    <span className={`ml-4 text-slate-400 transition-transform duration-200 ${openFaq === i ? "rotate-180" : ""}`}>
                      ▾
                    </span>
                  </button>
                  {openFaq === i && (
                    <div className="px-5 pb-5 text-xs text-slate-600 font-medium leading-relaxed border-t border-slate-100 pt-3">
                      {item.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ---- RELATED TOOLS ---- */}
        <section className="pb-12 sm:pb-16">
          <div className="shell max-w-5xl">
            <h2 className="text-xs font-extrabold uppercase tracking-widest text-purple-600 mb-1">
              Explore More
            </h2>
            <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight mb-6">
              Related Developer Tools
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {RELATED_TOOLS.map((tool) => {
                const IconComp = tool.icon;
                return (
                  <div
                    key={tool.title}
                    className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className={`flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br ${tool.accent} text-white shadow-sm`}>
                        <IconComp className="w-4.5 h-4.5" />
                      </div>
                      <span className="rounded-full bg-slate-100 px-2.5 py-0.5 text-[0.6rem] font-extrabold uppercase tracking-wider text-slate-500">
                        Coming Soon
                      </span>
                    </div>
                    <h4 className="text-sm font-extrabold text-slate-900 tracking-tight mb-1">
                      {tool.title}
                    </h4>
                    <p className="text-[0.7rem] text-slate-500 font-medium leading-relaxed">
                      {tool.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};
