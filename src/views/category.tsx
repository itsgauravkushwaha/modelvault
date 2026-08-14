"use client";

import { useState, useEffect } from "react";
import { notFound } from "next/navigation";
import { CATEGORIES } from "@/data/categories";
import { useDirectoryStore } from "@/stores/use-directory-store";
import { Header } from "@/components/directory/Header";
import { ModelCard } from "@/components/directory/ModelCard";
import { Footer } from "@/components/directory/Footer";
import { UseCase } from "@/types/model";

export const CategoryView: React.FC<{ slug: string }> = ({ slug }) => {
  const allModels = useDirectoryStore((s) => s.allModels);
  const loadModelsFromDb = useDirectoryStore((s) => s.loadModelsFromDb);
  const [displayCount, setDisplayCount] = useState(36);

  useEffect(() => {
    loadModelsFromDb();
  }, [loadModelsFromDb]);

  const category = CATEGORIES.find((c) => c.slug === slug);

  if (!category) {
    return notFound();
  }

  const categoryModels = allModels.filter((m) =>
    m.useCases.includes(slug as UseCase)
  );
  const displayedModels = categoryModels.slice(0, displayCount);

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      <Header />

      <main className="flex-1 py-8">
        <div className="shell">
          <div className="mb-8">
            <span className="text-xs font-extrabold uppercase tracking-wider text-blue-600">
              Category Catalog
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-1">
              {category.name} AI Models
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 font-medium mt-1 max-w-xl">
              {category.description} Showing {Math.min(displayCount, categoryModels.length)} of {categoryModels.length.toLocaleString()} models.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayedModels.map((model) => (
              <ModelCard key={model.slug} model={model} />
            ))}
          </div>

          {displayCount < categoryModels.length && (
            <div className="mt-10 text-center">
              <button
                onClick={() => setDisplayCount((prev) => prev + 36)}
                className="rounded-xl bg-blue-600 hover:bg-blue-500 px-8 py-3 text-xs font-bold text-white transition-all shadow-md hover:shadow-blue-500/25"
              >
                Load More Models ({categoryModels.length - displayCount} remaining)
              </button>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};
