"use client";

import { useState, useEffect } from "react";
import { useDirectoryStore } from "@/stores/use-directory-store";
import { Header } from "@/components/directory/Header";
import { ModelCard } from "@/components/directory/ModelCard";
import { Footer } from "@/components/directory/Footer";
import { CloudIcon } from "@/components/directory/icons";

export const CloudModelsView = () => {
  const allModels = useDirectoryStore((s) => s.allModels);
  const loadModelsFromDb = useDirectoryStore((s) => s.loadModelsFromDb);
  const [displayCount, setDisplayCount] = useState(36);

  useEffect(() => {
    loadModelsFromDb();
  }, [loadModelsFromDb]);

  const cloudModels = allModels.filter((m) => m.hasApi);
  const displayedModels = cloudModels.slice(0, displayCount);

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      <Header />

      <main className="flex-1 py-8">
        <div className="shell">
          <div className="mb-8 bg-blue-950 text-white p-8 rounded-2xl shadow-md border border-blue-800">
            <div className="inline-flex items-center gap-2 rounded-full bg-blue-500/20 px-3 py-1 text-xs font-bold text-blue-300 mb-2">
              <CloudIcon className="w-4 h-4" /> Hosted APIs & Cloud Endpoints
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              Cloud API Models Catalog
            </h1>
            <p className="text-xs sm:text-sm text-blue-200 font-medium mt-2 max-w-xl leading-relaxed">
              Commercial and open models accessible via REST APIs and SDKs (OpenAI, Anthropic, Gemini, DeepSeek, Mistral). Showing {Math.min(displayCount, cloudModels.length)} of {cloudModels.length.toLocaleString()} models.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayedModels.map((model) => (
              <ModelCard key={model.slug} model={model} />
            ))}
          </div>

          {displayCount < cloudModels.length && (
            <div className="mt-10 text-center">
              <button
                onClick={() => setDisplayCount((prev) => prev + 36)}
                className="rounded-xl bg-blue-600 hover:bg-blue-500 px-8 py-3 text-xs font-bold text-white transition-all shadow-md hover:shadow-blue-500/25"
              >
                Load More Cloud Models ({cloudModels.length - displayCount} remaining)
              </button>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};
