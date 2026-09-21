import { Metadata } from "next";
import { HomeView } from "@/views/home";
import { generateMetadata as generatePageMetadata } from "@/utils/seo/generate-page-metadata";
import { db } from "@/lib/db";
import { UseCase } from "@/types/model";
import { CATEGORIES } from "@/data/categories";

export const revalidate = 3600; // ISR: re-render at most once per hour

export const metadata: Metadata = generatePageMetadata({
  title: "ModelVault — The Open AI Model Directory & Benchmark Matrix",
  description:
    "Discover, compare, and benchmark 11,000+ cloud and local AI models. Filter by modalities, context windows, pricing, providers, and performance benchmarks.",
  url: "/",
});

export default async function Home() {
  const allModels = await db.getModels();

  const trendingModels = allModels.filter((m) => m.trending).slice(0, 6);
  const recentlyAdded = [...allModels]
    .sort((a, b) => new Date(b.releaseDate).getTime() - new Date(a.releaseDate).getTime())
    .slice(0, 4);

  const featuredSlugs = CATEGORIES.slice(0, 6).map((c) => c.slug);
  const categoryCounts: Record<string, number> = {};
  for (const slug of featuredSlugs) {
    categoryCounts[slug] = allModels.filter(
      (m) => m.useCases && m.useCases.includes(slug as UseCase)
    ).length;
  }

  return (
    <HomeView
      trendingModels={trendingModels}
      recentlyAdded={recentlyAdded}
      totalModelCount={allModels.length}
      categoryCounts={categoryCounts}
    />
  );
}
