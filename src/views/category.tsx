"use client";

import { useEffect } from "react";
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
              {category.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categoryModels.map((model) => (
              <ModelCard key={model.slug} model={model} />
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};
