"use client";

import Link from "next/link";
import { Header } from "@/components/directory/Header";
import { Footer } from "@/components/directory/Footer";
import { ArrowRightIcon, CodeIcon, CpuIcon, SparklesIcon, WrenchIcon } from "@/components/directory/icons";

export const ToolsLandingView = () => {
  const tools = [
    {
      title: "AI API Cost Calculator",
      slug: "cost-calculator",
      description: "Estimate, compare, and optimize monthly API expenditure across OpenAI, Anthropic, Gemini, DeepSeek, and Mistral.",
      icon: SparklesIcon,
      accent: "from-blue-500 to-indigo-600",
      status: "Active",
      isLive: true,
    },
    {
      title: "AI Model Finder",
      slug: "model-finder",
      description: "Answer 3 quick questions and get personalized AI model recommendations based on your use case, budget, and deployment needs.",
      icon: SparklesIcon,
      accent: "from-purple-500 to-pink-600",
      status: "Active",
      isLive: true,
    },
    {
      title: "Token & Pricing Estimator",
      slug: "token-calculator",
      description: "Paste your prompt text to compute exact BPE token counts and compare generation costs across 20+ models.",
      icon: CodeIcon,
      accent: "from-violet-500 to-fuchsia-600",
      status: "Active",
      isLive: true,
    },
    {
      title: "Context Window Capacity Calculator",
      slug: "context-calculator",
      description: "Calculate document page capacity, RAG chunk limits, and context fill ratios for long-context LLMs. Compare two models side-by-side.",
      icon: SparklesIcon,
      accent: "from-sky-500 to-cyan-600",
      status: "Active",
      isLive: true,
    },
    {
      title: "Local VRAM Hardware Estimator",
      slug: "vram-calculator",
      description: "Determine exact GPU VRAM requirements for GGUF Q4, AWQ INT4, and FP16 quantization before downloading weights.",
      icon: CpuIcon,
      accent: "from-emerald-500 to-teal-600",
      status: "Active",
      isLive: true,
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      <Header />

      <main className="flex-1 py-12">
        <div className="shell max-w-5xl">
          {/* Header */}
          <div className="mb-10 text-center max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-3.5 py-1 text-xs font-semibold text-blue-600 mb-3">
              <WrenchIcon className="w-3.5 h-3.5" />
              <span>Developer Utilities & Calculators</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Developer Tools for <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">AI Engineers</span>
            </h1>

            <p className="text-xs sm:text-sm text-slate-600 font-medium mt-3 leading-relaxed">
              Production-ready calculators and utilities built to optimize LLM API costs, token usage, context windows, and local hardware requirements.
            </p>
          </div>

          {/* Grid of Tools */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {tools.map((tool) => {
              const IconComp = tool.icon;
              const CardContent = (
                <div className="group relative flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/40 hover:shadow-lg cursor-pointer">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className={`flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br ${tool.accent} text-white shadow-md transition-transform duration-300 group-hover:scale-110`}>
                        <IconComp className="w-5.5 h-5.5" />
                      </div>
                      <span className="rounded-full px-3 py-1 text-[0.65rem] font-extrabold uppercase tracking-wider bg-emerald-50 text-emerald-700 border border-emerald-200">
                        {tool.status}
                      </span>
                    </div>

                    <h2 className="text-lg font-extrabold text-slate-900 tracking-tight group-hover:text-blue-600 transition-colors">
                      {tool.title}
                    </h2>

                    <p className="mt-2 text-xs text-slate-600 font-medium leading-relaxed">
                      {tool.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-blue-600">
                    <span>Launch Tool</span>
                    <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              );

              return (
                <Link key={tool.slug} href={`/tools/${tool.slug}`}>
                  {CardContent}
                </Link>
              );
            })}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};
