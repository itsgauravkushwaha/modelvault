"use client";

import Link from "next/link";
import { AIModel } from "@/types/model";
import { Header } from "@/components/directory/Header";
import { Footer } from "@/components/directory/Footer";
import { CompareIcon, ArrowRightIcon, SparklesIcon, CheckIcon, CpuIcon } from "@/components/directory/icons";

interface ComparePairwiseViewProps {
  modelA: AIModel;
  modelB: AIModel;
}

export const ComparePairwiseView = ({ modelA, modelB }: ComparePairwiseViewProps) => {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      <Header />

      <main className="flex-1 py-10">
        <div className="shell max-w-5xl">
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-xs font-semibold text-slate-500 mb-6">
            <Link href="/" className="hover:text-blue-600">Home</Link>
            <span>/</span>
            <Link href="/compare" className="hover:text-blue-600">Comparison Matrix</Link>
            <span>/</span>
            <span className="text-slate-900 font-extrabold">{modelA.name} vs {modelB.name}</span>
          </nav>

          {/* Hero Banner */}
          <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-10 shadow-xl mb-10 text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-50 px-3.5 py-1 text-xs font-bold text-purple-700 mb-4">
              <CompareIcon className="w-3.5 h-3.5 text-purple-600" />
              <span>Head-to-Head Model Comparison</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
              {modelA.name} <span className="text-purple-600">vs</span> {modelB.name}
            </h1>

            <p className="text-xs sm:text-sm text-slate-600 font-medium max-w-2xl mx-auto leading-relaxed mb-6">
              Compare parameter specifications, context windows, hardware requirements, licenses, and benchmark performance between {modelA.name} and {modelB.name}.
            </p>

            <div className="flex justify-center gap-4">
              <Link
                href="/playground"
                className="inline-flex items-center gap-2 rounded-xl bg-purple-600 hover:bg-purple-500 text-white px-6 py-3 text-xs font-extrabold shadow-md transition-all"
              >
                <SparklesIcon className="w-4 h-4" />
                <span>Run Live Battle in ModelVault Arena ⚔️</span>
              </Link>
            </div>
          </div>

          {/* Pairwise Comparison Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {/* Model A */}
            <div className="rounded-3xl border border-blue-200 bg-white p-6 sm:p-8 shadow-md space-y-6">
              <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                <div>
                  <span className="text-[0.65rem] font-extrabold uppercase tracking-wider text-blue-600 block">
                    {modelA.provider}
                  </span>
                  <h2 className="text-xl font-extrabold text-slate-900">{modelA.name}</h2>
                </div>
                <span className="rounded-full bg-blue-50 border border-blue-200 px-3 py-1 text-xs font-extrabold text-blue-700">
                  {modelA.license}
                </span>
              </div>

              <div className="space-y-3 text-xs font-medium text-slate-700">
                <div className="flex justify-between py-2 border-b border-slate-100">
                  <span className="text-slate-500 font-bold">Primary Use Case</span>
                  <span className="font-extrabold text-slate-900">{modelA.useCases?.[0] || modelA.type}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-slate-100">
                  <span className="text-slate-500 font-bold">Availability</span>
                  <span className="font-extrabold text-slate-900 capitalize">{modelA.availability}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-slate-100">
                  <span className="text-slate-500 font-bold">Hardware Footprint</span>
                  <span className="font-extrabold text-blue-600">{modelA.hardwareRequirements || "Cloud API Hosted"}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-slate-100">
                  <span className="text-slate-500 font-bold">Context Window</span>
                  <span className="font-extrabold text-slate-900">{modelA.contextWindow}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-slate-100">
                  <span className="text-slate-500 font-bold">License / Pricing</span>
                  <span className="font-extrabold text-slate-900 capitalize">{modelA.pricing}</span>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  href={`/models/${modelA.slug}`}
                  className="w-full py-2.5 rounded-xl border border-slate-200 bg-slate-50 hover:bg-slate-100 text-slate-700 text-xs font-bold transition-all text-center block"
                >
                  View Full {modelA.name} Specs →
                </Link>
              </div>
            </div>

            {/* Model B */}
            <div className="rounded-3xl border border-indigo-200 bg-white p-6 sm:p-8 shadow-md space-y-6">
              <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                <div>
                  <span className="text-[0.65rem] font-extrabold uppercase tracking-wider text-indigo-600 block">
                    {modelB.provider}
                  </span>
                  <h2 className="text-xl font-extrabold text-slate-900">{modelB.name}</h2>
                </div>
                <span className="rounded-full bg-indigo-50 border border-indigo-200 px-3 py-1 text-xs font-extrabold text-indigo-700">
                  {modelB.license}
                </span>
              </div>

              <div className="space-y-3 text-xs font-medium text-slate-700">
                <div className="flex justify-between py-2 border-b border-slate-100">
                  <span className="text-slate-500 font-bold">Primary Use Case</span>
                  <span className="font-extrabold text-slate-900">{modelB.useCases?.[0] || modelB.type}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-slate-100">
                  <span className="text-slate-500 font-bold">Availability</span>
                  <span className="font-extrabold text-slate-900 capitalize">{modelB.availability}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-slate-100">
                  <span className="text-slate-500 font-bold">Hardware Footprint</span>
                  <span className="font-extrabold text-indigo-600">{modelB.hardwareRequirements || "Cloud API Hosted"}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-slate-100">
                  <span className="text-slate-500 font-bold">Context Window</span>
                  <span className="font-extrabold text-slate-900">{modelB.contextWindow}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-slate-100">
                  <span className="text-slate-500 font-bold">License / Pricing</span>
                  <span className="font-extrabold text-slate-900 capitalize">{modelB.pricing}</span>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  href={`/models/${modelB.slug}`}
                  className="w-full py-2.5 rounded-xl border border-slate-200 bg-slate-50 hover:bg-slate-100 text-slate-700 text-xs font-bold transition-all text-center block"
                >
                  View Full {modelB.name} Specs →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};
