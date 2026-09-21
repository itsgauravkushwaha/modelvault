"use client";

import { useState, useMemo, useEffect } from "react";
import Link from "next/link";
import { useDirectoryStore } from "@/stores/use-directory-store";
import { Header } from "@/components/directory/Header";
import { Footer } from "@/components/directory/Footer";
import { ArrowRightIcon, SparklesIcon, CheckIcon } from "@/components/directory/icons";
import type { AIModel, UseCase, PricingType, Availability } from "@/types/model";

/* ------------------------------------------------------------------ */
/*  Step definitions                                                    */
/* ------------------------------------------------------------------ */
interface StepOption<T extends string> {
  value: T;
  label: string;
  description: string;
  emoji: string;
}

const USE_CASE_OPTIONS: StepOption<UseCase>[] = [
  { value: "text-chat", label: "Text / Chat", description: "Conversations, writing, translation", emoji: "💬" },
  { value: "reasoning", label: "Reasoning", description: "Complex logic, math, analysis", emoji: "🧠" },
  { value: "coding", label: "Coding", description: "Code generation, debugging, agents", emoji: "💻" },
  { value: "image-gen", label: "Image Generation", description: "Text-to-image, art, graphics", emoji: "🎨" },
  { value: "video-gen", label: "Video Generation", description: "Text-to-video, motion synthesis", emoji: "🎬" },
  { value: "audio-speech", label: "Audio & Speech", description: "Speech-to-text, voice synthesis", emoji: "🎤" },
  { value: "vision-language", label: "Vision / Multimodal", description: "Image understanding, documents", emoji: "👁️" },
  { value: "embeddings-rag", label: "Embeddings / RAG", description: "Vector search, knowledge retrieval", emoji: "🔗" },
  { value: "local", label: "Local / On-Device", description: "Run on your own hardware", emoji: "🖥️" },
  { value: "enterprise", label: "Enterprise", description: "SOC2, compliance, private deploy", emoji: "🏢" },
];

type BudgetTier = "free" | "startup" | "enterprise";
const BUDGET_OPTIONS: StepOption<BudgetTier>[] = [
  { value: "free", label: "Free / Open Weights", description: "$0 — open-source or free tiers only", emoji: "🆓" },
  { value: "startup", label: "Startup Budget", description: "$0 – $50/month API spend", emoji: "🚀" },
  { value: "enterprise", label: "Enterprise / Unlimited", description: "$50+ / month, best quality first", emoji: "💎" },
];

type DeployPref = "cloud" | "local" | "either";
const DEPLOY_OPTIONS: StepOption<DeployPref>[] = [
  { value: "cloud", label: "Cloud API Only", description: "Use hosted APIs (OpenAI, Anthropic, etc.)", emoji: "☁️" },
  { value: "local", label: "Self-Hosted / Local", description: "Run on my own GPUs or Ollama", emoji: "🖥️" },
  { value: "either", label: "Either Works", description: "Show me the best option regardless", emoji: "🔄" },
];

/* ------------------------------------------------------------------ */
/*  Scoring algorithm                                                   */
/* ------------------------------------------------------------------ */
function scoreModel(
  model: AIModel,
  useCase: UseCase,
  budget: BudgetTier,
  deploy: DeployPref
): number {
  let score = 0;

  // Use case match (highest weight)
  if (model.useCases.includes(useCase)) score += 50;

  // Budget match
  if (budget === "free") {
    if (model.pricing === "free" || model.pricing === "open-weights") score += 30;
    else if (model.pricing === "freemium") score += 15;
  } else if (budget === "startup") {
    if (model.pricing === "free" || model.pricing === "open-weights") score += 25;
    else if (model.pricing === "freemium") score += 30;
    else if (model.pricing === "paid") score += 20;
  } else {
    // enterprise — quality first
    score += 20;
    if (model.pricing === "paid") score += 10;
  }

  // Deploy preference
  if (deploy === "cloud") {
    if (model.availability === "cloud" || model.availability === "both") score += 20;
    if (model.hasApi) score += 5;
  } else if (deploy === "local") {
    if (model.availability === "local" || model.availability === "both") score += 20;
    if (model.hasSelfHost) score += 5;
  } else {
    score += 15; // either works — slight bonus for flexibility
    if (model.availability === "both") score += 5;
  }

  // Bonus for featured/trending
  if (model.featured) score += 8;
  if (model.trending) score += 5;

  // Bonus for having benchmarks
  if (model.benchmarks && model.benchmarks.length > 0) score += 3;

  return score;
}

/* ------------------------------------------------------------------ */
/*  View                                                                */
/* ------------------------------------------------------------------ */
export const ModelFinderView = () => {
  const allModels = useDirectoryStore((s) => s.allModels);
  const loadModelsFromDb = useDirectoryStore((s) => s.loadModelsFromDb);

  useEffect(() => {
    loadModelsFromDb();
  }, [loadModelsFromDb]);

  const [step, setStep] = useState(0); // 0 = use case, 1 = budget, 2 = deploy, 3 = results
  const [selectedUseCase, setSelectedUseCase] = useState<UseCase | null>(null);
  const [selectedBudget, setSelectedBudget] = useState<BudgetTier | null>(null);
  const [selectedDeploy, setSelectedDeploy] = useState<DeployPref | null>(null);

  const recommendations = useMemo(() => {
    if (!selectedUseCase || !selectedBudget || !selectedDeploy) return [];

    return allModels
      .map((model) => ({
        model,
        score: scoreModel(model, selectedUseCase, selectedBudget, selectedDeploy),
      }))
      .filter((r) => r.score > 40)
      .sort((a, b) => b.score - a.score)
      .slice(0, 5);
  }, [allModels, selectedUseCase, selectedBudget, selectedDeploy]);

  const maxScore = recommendations.length > 0 ? recommendations[0].score : 100;

  function handleSelectUseCase(val: UseCase) {
    setSelectedUseCase(val);
    setStep(1);
  }

  function handleSelectBudget(val: BudgetTier) {
    setSelectedBudget(val);
    setStep(2);
  }

  function handleSelectDeploy(val: DeployPref) {
    setSelectedDeploy(val);
    setStep(3);
  }

  function handleReset() {
    setStep(0);
    setSelectedUseCase(null);
    setSelectedBudget(null);
    setSelectedDeploy(null);
  }

  const stepLabels = ["Use Case", "Budget", "Deployment", "Results"];

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      <Header />

      <main className="flex-1 py-12">
        <div className="shell max-w-3xl">
          {/* Header */}
          <div className="mb-10 text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-500/10 px-3.5 py-1 text-xs font-semibold text-purple-600 mb-3">
              <SparklesIcon className="w-3.5 h-3.5" />
              <span>AI Model Recommendation Engine</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Find Your{" "}
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Perfect AI Model
              </span>
            </h1>

            <p className="text-xs sm:text-sm text-slate-600 font-medium mt-3 leading-relaxed max-w-xl mx-auto">
              Answer 3 quick questions and get personalized recommendations from our database of {allModels.length}+ AI models.
            </p>
          </div>

          {/* Progress Bar */}
          <div className="mb-10">
            <div className="flex items-center justify-between mb-2">
              {stepLabels.map((label, i) => (
                <button
                  key={label}
                  onClick={() => { if (i < step) setStep(i); }}
                  className={`text-[0.65rem] font-extrabold uppercase tracking-wider transition-colors ${
                    i <= step ? "text-purple-600" : "text-slate-400"
                  } ${i < step ? "cursor-pointer hover:text-purple-700" : "cursor-default"}`}
                >
                  {label}
                </button>
              ))}
            </div>
            <div className="h-1.5 bg-slate-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-purple-500 to-blue-500 rounded-full transition-all duration-500 ease-out"
                style={{ width: `${((step + 1) / 4) * 100}%` }}
              />
            </div>
          </div>

          {/* Step 0: Use Case */}
          {step === 0 && (
            <div className="space-y-3">
              <h2 className="text-lg font-extrabold text-slate-900 mb-4">
                What are you building?
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {USE_CASE_OPTIONS.map((opt) => (
                  <button
                    key={opt.value}
                    onClick={() => handleSelectUseCase(opt.value)}
                    className={`flex items-start gap-3 rounded-2xl border p-4 text-left transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md ${
                      selectedUseCase === opt.value
                        ? "border-purple-500 bg-purple-50 shadow-md"
                        : "border-slate-200 bg-white hover:border-purple-300"
                    }`}
                  >
                    <span className="text-xl mt-0.5">{opt.emoji}</span>
                    <div>
                      <span className="block text-sm font-extrabold text-slate-900">{opt.label}</span>
                      <span className="block text-[0.7rem] text-slate-500 font-medium mt-0.5">{opt.description}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 1: Budget */}
          {step === 1 && (
            <div className="space-y-3">
              <h2 className="text-lg font-extrabold text-slate-900 mb-4">
                What&apos;s your budget?
              </h2>
              <div className="grid grid-cols-1 gap-3">
                {BUDGET_OPTIONS.map((opt) => (
                  <button
                    key={opt.value}
                    onClick={() => handleSelectBudget(opt.value)}
                    className={`flex items-start gap-3 rounded-2xl border p-5 text-left transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md ${
                      selectedBudget === opt.value
                        ? "border-purple-500 bg-purple-50 shadow-md"
                        : "border-slate-200 bg-white hover:border-purple-300"
                    }`}
                  >
                    <span className="text-2xl">{opt.emoji}</span>
                    <div>
                      <span className="block text-sm font-extrabold text-slate-900">{opt.label}</span>
                      <span className="block text-[0.7rem] text-slate-500 font-medium mt-0.5">{opt.description}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 2: Deployment */}
          {step === 2 && (
            <div className="space-y-3">
              <h2 className="text-lg font-extrabold text-slate-900 mb-4">
                How do you want to deploy?
              </h2>
              <div className="grid grid-cols-1 gap-3">
                {DEPLOY_OPTIONS.map((opt) => (
                  <button
                    key={opt.value}
                    onClick={() => handleSelectDeploy(opt.value)}
                    className={`flex items-start gap-3 rounded-2xl border p-5 text-left transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md ${
                      selectedDeploy === opt.value
                        ? "border-purple-500 bg-purple-50 shadow-md"
                        : "border-slate-200 bg-white hover:border-purple-300"
                    }`}
                  >
                    <span className="text-2xl">{opt.emoji}</span>
                    <div>
                      <span className="block text-sm font-extrabold text-slate-900">{opt.label}</span>
                      <span className="block text-[0.7rem] text-slate-500 font-medium mt-0.5">{opt.description}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 3: Results */}
          {step === 3 && (
            <div>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-extrabold text-slate-900">
                  🎯 Your Top Recommendations
                </h2>
                <button
                  onClick={handleReset}
                  className="text-xs font-bold text-purple-600 hover:text-purple-700 transition-colors"
                >
                  Start Over →
                </button>
              </div>

              {/* Selection Summary */}
              <div className="flex flex-wrap gap-2 mb-6">
                {selectedUseCase && (
                  <span className="inline-flex items-center gap-1 rounded-full bg-purple-100 px-3 py-1 text-[0.65rem] font-bold text-purple-700">
                    <CheckIcon className="w-3 h-3" />
                    {USE_CASE_OPTIONS.find((o) => o.value === selectedUseCase)?.label}
                  </span>
                )}
                {selectedBudget && (
                  <span className="inline-flex items-center gap-1 rounded-full bg-blue-100 px-3 py-1 text-[0.65rem] font-bold text-blue-700">
                    <CheckIcon className="w-3 h-3" />
                    {BUDGET_OPTIONS.find((o) => o.value === selectedBudget)?.label}
                  </span>
                )}
                {selectedDeploy && (
                  <span className="inline-flex items-center gap-1 rounded-full bg-emerald-100 px-3 py-1 text-[0.65rem] font-bold text-emerald-700">
                    <CheckIcon className="w-3 h-3" />
                    {DEPLOY_OPTIONS.find((o) => o.value === selectedDeploy)?.label}
                  </span>
                )}
              </div>

              {recommendations.length === 0 ? (
                <div className="rounded-2xl border border-slate-200 bg-white p-8 text-center">
                  <p className="text-sm font-bold text-slate-600">
                    No strong matches found. Try broadening your criteria.
                  </p>
                  <button
                    onClick={handleReset}
                    className="mt-4 rounded-xl bg-purple-600 px-6 py-2.5 text-xs font-bold text-white hover:bg-purple-500 transition-colors"
                  >
                    Try Again
                  </button>
                </div>
              ) : (
                <div className="space-y-4">
                  {recommendations.map(({ model, score }, idx) => {
                    const matchPct = Math.round((score / maxScore) * 100);
                    return (
                      <Link
                        key={model.slug}
                        href={`/models/${model.slug}`}
                        className="group flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-5 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:border-purple-300"
                      >
                        {/* Rank */}
                        <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl font-extrabold text-sm text-white shadow-md ${
                          idx === 0
                            ? "bg-gradient-to-br from-amber-400 to-orange-500"
                            : idx === 1
                            ? "bg-gradient-to-br from-slate-400 to-slate-500"
                            : idx === 2
                            ? "bg-gradient-to-br from-amber-600 to-amber-700"
                            : "bg-gradient-to-br from-slate-300 to-slate-400"
                        }`}>
                          #{idx + 1}
                        </div>

                        {/* Details */}
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 flex-wrap">
                            <h3 className="text-sm font-extrabold text-slate-900 group-hover:text-purple-600 transition-colors">
                              {model.name}
                            </h3>
                            <span className="text-[0.6rem] font-bold text-slate-500 bg-slate-100 rounded-full px-2 py-0.5">
                              {model.provider}
                            </span>
                            {model.trending && (
                              <span className="text-[0.6rem] font-bold text-amber-700 bg-amber-100 rounded-full px-2 py-0.5">
                                🔥 Trending
                              </span>
                            )}
                          </div>

                          <p className="text-[0.7rem] text-slate-500 font-medium mt-1 line-clamp-2">
                            {model.description}
                          </p>

                          {/* Tags */}
                          <div className="flex items-center gap-2 mt-2 flex-wrap">
                            <span className="text-[0.6rem] font-bold text-slate-600 bg-slate-100 rounded px-1.5 py-0.5">
                              {model.availability}
                            </span>
                            <span className="text-[0.6rem] font-bold text-slate-600 bg-slate-100 rounded px-1.5 py-0.5">
                              {model.pricing}
                            </span>
                            {model.contextWindow && (
                              <span className="text-[0.6rem] font-bold text-slate-600 bg-slate-100 rounded px-1.5 py-0.5">
                                ctx: {model.contextWindow}
                              </span>
                            )}
                          </div>
                        </div>

                        {/* Match Score */}
                        <div className="shrink-0 text-right">
                          <div className="text-lg font-extrabold text-purple-600">{matchPct}%</div>
                          <div className="text-[0.6rem] font-bold text-slate-400">match</div>
                          <div className="mt-1.5 h-1.5 w-16 bg-slate-200 rounded-full overflow-hidden">
                            <div
                              className="h-full bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"
                              style={{ width: `${matchPct}%` }}
                            />
                          </div>
                        </div>

                        <ArrowRightIcon className="w-4 h-4 text-slate-400 group-hover:text-purple-500 group-hover:translate-x-0.5 transition-all shrink-0 mt-3" />
                      </Link>
                    );
                  })}
                </div>
              )}

              {/* Share CTA */}
              {recommendations.length > 0 && (
                <div className="mt-8 text-center">
                  <p className="text-[0.7rem] text-slate-500 font-medium mb-3">
                    Found the right model? Share your results!
                  </p>
                  <a
                    href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
                      `I used ModelVault's AI Model Finder and found ${recommendations[0].model.name} as my top pick! 🎯\n\nFind your perfect AI model → modelvault.com/tools/model-finder`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl bg-slate-900 px-5 py-2.5 text-xs font-bold text-white hover:bg-slate-800 transition-colors shadow-md"
                  >
                    Share on 𝕏 / Twitter
                  </a>
                </div>
              )}
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};
