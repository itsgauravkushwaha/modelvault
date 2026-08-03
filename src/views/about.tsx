"use client";

import { Header } from "@/components/directory/Header";
import { Footer } from "@/components/directory/Footer";
import { SparklesIcon, CpuIcon, ShieldCheckIcon, CodeIcon } from "@/components/directory/icons";

export const AboutView = () => {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      <Header />

      <main className="flex-1 py-12 sm:py-16">
        <div className="shell max-w-4xl">
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-3.5 py-1 text-xs font-semibold text-blue-600 mb-3">
              <SparklesIcon className="w-3.5 h-3.5" />
              <span>About ModelVault</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              The Open Intelligence <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Model Directory</span>
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 font-medium mt-3 leading-relaxed">
              ModelVault provides verified specifications, benchmark results, pricing structures, and hardware requirements for cloud API and open-weight AI models.
            </p>
          </div>

          {/* Mission Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600 font-bold mb-4">
                <CpuIcon className="w-5 h-5" />
              </div>
              <h2 className="text-base font-extrabold text-slate-900 mb-2">Comprehensive Specs</h2>
              <p className="text-xs text-slate-600 leading-relaxed font-medium">
                Detailed architecture metrics, context windows, quantization options, and memory requirements for every model index.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-50 text-purple-600 font-bold mb-4">
                <ShieldCheckIcon className="w-5 h-5" />
              </div>
              <h2 className="text-base font-extrabold text-slate-900 mb-2">Verified Benchmarks</h2>
              <p className="text-xs text-slate-600 leading-relaxed font-medium">
                Standardized testing scores across MMLU, HumanEval, MATH, and GSM8K to compare real-world performance accurately.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 font-bold mb-4">
                <CodeIcon className="w-5 h-5" />
              </div>
              <h2 className="text-base font-extrabold text-slate-900 mb-2">Developer First</h2>
              <p className="text-xs text-slate-600 leading-relaxed font-medium">
                Built-in token calculators, cost estimators, hardware recommendations, and seamless API comparison tools.
              </p>
            </div>
          </div>

          {/* Details */}
          <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm space-y-6 text-xs text-slate-700 font-medium leading-relaxed">
            <h2 className="text-xl font-extrabold text-slate-900">Our Objective</h2>
            <p>
              As artificial intelligence models evolve rapidly, technical teams need a single, reliable source of truth to evaluate model trade-offs. ModelVault bridges the gap between raw model announcements and production integration decisions by providing standardized specifications, cost breakdown tools, and hardware requirements.
            </p>
            <p>
              Whether you are selecting a proprietary cloud API like GPT-4o or Claude 3.5 Sonnet, or deploying open-weights locally with Ollama and vLLM, ModelVault gives you the data required to build high-performance AI systems efficiently.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};
