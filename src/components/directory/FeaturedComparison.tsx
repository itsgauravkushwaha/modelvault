import Link from "next/link";
import { ArrowRightIcon, CompareIcon, SparklesIcon } from "./icons";

export const FeaturedComparison = () => {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-slate-800 bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 p-8 sm:p-12 text-white shadow-2xl">
      {/* Background Glow Effect */}
      <div className="absolute -top-24 -right-24 h-80 w-80 rounded-full bg-blue-600/20 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-purple-600/20 blur-3xl pointer-events-none" />

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Text Details */}
        <div className="lg:col-span-7 flex flex-col gap-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-3.5 py-1 text-xs font-semibold text-blue-400 backdrop-blur-sm self-start">
            <SparklesIcon className="w-3.5 h-3.5" />
            <span>Side-by-Side Matrix Engine</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
            Compare AI Models Side-by-Side Before You Build
          </h2>

          <p className="text-xs sm:text-sm text-slate-300 font-medium leading-relaxed max-w-xl">
            Evaluate context windows, benchmark scores (MMLU, HumanEval), pricing rates, and licensing terms across up to 4 models simultaneously.
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-3">
            <Link
              href="/compare"
              className="inline-flex items-center gap-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 text-xs font-bold transition-all shadow-lg hover:shadow-blue-500/25"
            >
              <CompareIcon className="w-4 h-4" />
              <span>Launch Comparison Matrix</span>
              <ArrowRightIcon className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* Visual Matrix Teaser Graphic */}
        <div className="lg:col-span-5 rounded-2xl border border-slate-800 bg-slate-900/90 p-5 backdrop-blur-md shadow-xl">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-3 text-xs font-bold text-slate-400">
            <span>Matrix Preview</span>
            <span className="text-[0.65rem] text-blue-400 uppercase tracking-widest font-mono">4 Models Max</span>
          </div>

          <div className="space-y-2.5 text-xs font-semibold">
            <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-950/80 border border-slate-800">
              <span className="text-white font-extrabold">GPT-4o</span>
              <span className="text-blue-400">128k ctx • 88.7 MMLU</span>
            </div>
            <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-950/80 border border-slate-800">
              <span className="text-white font-extrabold">Claude 3.5 Sonnet</span>
              <span className="text-purple-400">200k ctx • 93.7 Code</span>
            </div>
            <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-950/80 border border-slate-800">
              <span className="text-white font-extrabold">DeepSeek-R1</span>
              <span className="text-emerald-400">128k ctx • Open Weights</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
