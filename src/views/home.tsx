"use client";

import { useEffect } from "react";
import Link from "next/link";
import { useDirectoryStore } from "@/stores/use-directory-store";
import { Header } from "@/components/directory/Header";
import { SearchHero } from "@/components/directory/SearchHero";
import { LiveStats } from "@/components/directory/LiveStats";
import { CategoryCard } from "@/components/directory/CategoryCard";
import { ModelCard } from "@/components/directory/ModelCard";
import { BestForBlock } from "@/components/directory/BestForBlock";
import { WhyModelVault } from "@/components/directory/WhyModelVault";
import { FeaturedComparison } from "@/components/directory/FeaturedComparison";
import { DevToolsTeaser } from "@/components/directory/DevToolsTeaser";
import { Newsletter } from "@/components/directory/Newsletter";
import { Footer } from "@/components/directory/Footer";
import { CATEGORIES } from "@/data/categories";
import { PROVIDERS } from "@/data/providers";
import { ArrowRightIcon } from "@/components/directory/icons";

export const HomeView = () => {
  const allModels = useDirectoryStore((s) => s.allModels);
  const loadModelsFromDb = useDirectoryStore((s) => s.loadModelsFromDb);

  useEffect(() => {
    loadModelsFromDb();
  }, [loadModelsFromDb]);

  const trendingModels = allModels.filter((m) => m.trending).slice(0, 6);
  const featuredCategories = CATEGORIES.slice(0, 6);
  const recentlyAdded = [...allModels]
    .sort((a, b) => new Date(b.releaseDate).getTime() - new Date(a.releaseDate).getTime())
    .slice(0, 4);

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      <Header />

      <main className="flex-1">
        {/* 1. Hero Section */}
        <SearchHero />

        {/* 2. Live Statistics Section */}
        <section className="py-10 bg-white border-b border-slate-200/80">
          <div className="shell">
            <LiveStats />
          </div>
        </section>

        {/* 3. Popular Categories */}
        <section className="py-14 bg-white border-b border-slate-200/80">
          <div className="shell">
            <div className="flex items-end justify-between mb-8">
              <div>
                <span className="text-xs font-extrabold text-blue-600 uppercase tracking-widest block mb-1">
                  Taxonomy & Modality
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                  Popular Model Categories
                </h2>
              </div>
              <Link
                href="/models"
                className="hidden sm:inline-flex items-center gap-1.5 text-xs font-extrabold text-blue-600 hover:text-blue-700 transition-colors"
              >
                <span>View all categories</span>
                <ArrowRightIcon className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {featuredCategories.map((cat) => (
                <CategoryCard key={cat.slug} category={cat} />
              ))}
            </div>
          </div>
        </section>

        {/* 4. Trending Models */}
        <section className="py-14">
          <div className="shell">
            <div className="flex items-end justify-between mb-8">
              <div>
                <div className="inline-flex items-center gap-1.5 rounded-full bg-amber-100 px-3 py-0.5 text-[0.7rem] font-extrabold text-amber-800 mb-2">
                  🔥 High Demand
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                  Trending & Popular AI Models
                </h2>
              </div>
              <Link
                href="/models"
                className="inline-flex items-center gap-1.5 text-xs font-extrabold text-blue-600 hover:text-blue-700 transition-colors"
              >
                <span>Browse all {allModels.length} models</span>
                <ArrowRightIcon className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {trendingModels.map((model) => (
                <ModelCard key={model.slug} model={model} />
              ))}
            </div>
          </div>
        </section>

        {/* "Best For" Recommendations Block */}
        <section className="py-14 bg-white border-y border-slate-200/80">
          <div className="shell">
            <div className="mb-6">
              <span className="text-xs font-extrabold text-blue-600 uppercase tracking-widest block mb-1">
                Curated Recommendations
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Best Models for Specific Roles
              </h2>
            </div>

            <BestForBlock />
          </div>
        </section>

        {/* Recently Released Models */}
        <section className="py-14">
          <div className="shell">
            <div className="flex items-end justify-between mb-8">
              <div>
                <span className="text-xs font-extrabold text-emerald-600 uppercase tracking-widest block mb-1">
                  Latest Indexing
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                  Recently Added Models
                </h2>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {recentlyAdded.map((model) => (
                <ModelCard key={model.slug} model={model} />
              ))}
            </div>
          </div>
        </section>

        {/* 5. Why ModelVault */}
        <section className="py-16 bg-white border-y border-slate-200/80">
          <div className="shell">
            <div className="text-center max-w-xl mx-auto mb-10">
              <span className="text-xs font-extrabold text-blue-600 uppercase tracking-widest block mb-1">
                Platform Architecture
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Why Developers Choose ModelVault
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 font-medium mt-2 leading-relaxed">
                Standardized metadata, hardware requirements, and benchmark transparency built for high-performance AI deployment.
              </p>
            </div>

            <WhyModelVault />
          </div>
        </section>

        {/* 6. Featured Comparison */}
        <section className="py-16">
          <div className="shell">
            <FeaturedComparison />
          </div>
        </section>

        {/* 7. Developer Tools Preview */}
        <section className="py-16 bg-white border-t border-slate-200/80">
          <div className="shell">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-2">
              <div>
                <span className="text-xs font-extrabold text-purple-600 uppercase tracking-widest block mb-1">
                  Ecosystem Roadmap
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                  Upcoming Developer Utilities
                </h2>
              </div>
              <span className="text-xs font-bold text-slate-400">
                In Active Development
              </span>
            </div>

            <DevToolsTeaser />
          </div>
        </section>

        {/* Top Providers Section */}
        <section className="py-14 bg-slate-50 border-t border-slate-200/80">
          <div className="shell">
            <div className="text-center max-w-xl mx-auto mb-8">
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                Indexed AI Research Labs
              </h2>
              <p className="text-xs text-slate-600 font-medium mt-1">
                Leading creators of frontier models, open weights, and API infrastructure.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
              {PROVIDERS.map((prov) => (
                <Link
                  key={prov.slug}
                  href={`/models?provider=${prov.slug}`}
                  className="flex flex-col items-center justify-center p-4 rounded-2xl border border-slate-200 bg-white hover:border-blue-300 hover:shadow-md transition-all text-center"
                >
                  <span className="font-extrabold text-sm text-slate-900">{prov.name}</span>
                  <span className="text-[0.7rem] font-bold text-slate-500 mt-1">
                    {prov.modelCount} Models Index
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* 8. Newsletter Section */}
        <section className="py-16">
          <div className="shell">
            <Newsletter />
          </div>
        </section>
      </main>

      {/* 9. Footer */}
      <Footer />
    </div>
  );
};
