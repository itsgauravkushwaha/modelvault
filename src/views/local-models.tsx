"use client";

import { useState, useEffect } from "react";
import { useDirectoryStore } from "@/stores/use-directory-store";
import { Header } from "@/components/directory/Header";
import { ModelCard } from "@/components/directory/ModelCard";
import { Footer } from "@/components/directory/Footer";
import { CpuIcon } from "@/components/directory/icons";

export const LocalModelsView = () => {
  const allModels = useDirectoryStore((s) => s.allModels);
  const loadModelsFromDb = useDirectoryStore((s) => s.loadModelsFromDb);
  const [displayCount, setDisplayCount] = useState(36);

  useEffect(() => {
    loadModelsFromDb();
  }, [loadModelsFromDb]);

  const localModels = allModels.filter((m) => m.hasSelfHost || m.availability === "local" || m.availability === "both");
  const displayedModels = localModels.slice(0, displayCount);

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      <Header />

      <main className="flex-1 py-8">
        <div className="shell">
          <div className="mb-8 bg-emerald-950 text-white p-8 rounded-2xl shadow-md border border-emerald-800">
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-500/20 px-3 py-1 text-xs font-bold text-emerald-300 mb-2">
              <CpuIcon className="w-4 h-4" /> Self-Hostable & Offline AI
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              Local AI Models Catalog
            </h1>
            <p className="text-xs sm:text-sm text-emerald-200 font-medium mt-2 max-w-xl leading-relaxed">
              Open-weight models optimized for local execution via Ollama, LM Studio, vLLM, and llama.cpp. Complete with hardware VRAM requirements. Showing {Math.min(displayCount, localModels.length)} of {localModels.length.toLocaleString()} models.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayedModels.map((model) => (
              <ModelCard key={model.slug} model={model} />
            ))}
          </div>

          {displayCount < localModels.length && (
            <div className="mt-10 text-center">
              <button
                onClick={() => setDisplayCount((prev) => prev + 36)}
                className="rounded-xl bg-emerald-600 hover:bg-emerald-500 px-8 py-3 text-xs font-bold text-white transition-all shadow-md hover:shadow-emerald-500/25"
              >
                Load More Local Models ({localModels.length - displayCount} remaining)
              </button>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};
