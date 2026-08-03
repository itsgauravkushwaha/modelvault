"use client";

import { useEffect } from "react";
import { useDirectoryStore } from "@/stores/use-directory-store";
import { Header } from "@/components/directory/Header";
import { ModelCard } from "@/components/directory/ModelCard";
import { Footer } from "@/components/directory/Footer";
import { CloudIcon } from "@/components/directory/icons";

export const CloudModelsView = () => {
  const allModels = useDirectoryStore((s) => s.allModels);
  const loadModelsFromDb = useDirectoryStore((s) => s.loadModelsFromDb);

  useEffect(() => {
    loadModelsFromDb();
  }, [loadModelsFromDb]);

  const cloudModels = allModels.filter((m) => m.hasApi);

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
              Commercial and open models accessible via REST APIs and SDKs (OpenAI, Anthropic, Gemini, DeepSeek, Mistral).
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cloudModels.map((model) => (
              <ModelCard key={model.slug} model={model} />
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};
