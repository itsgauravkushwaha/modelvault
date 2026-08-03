import Link from "next/link";
import { MODELS } from "@/data/models";
import { ModelCard } from "./ModelCard";
import { ArrowRightIcon } from "./icons";

interface RecommendationGroup {
  categoryName: string;
  categorySlug: string;
  description: string;
  topModelSlugs: string[];
}

const RECOMMENDATIONS: RecommendationGroup[] = [
  {
    categoryName: "Best for Coding & Software Engineering",
    categorySlug: "coding",
    description: "Top-ranked models for repo-level refactoring, debugging, and terminal automation.",
    topModelSlugs: ["claude-3-5-sonnet", "deepseek-v3", "codestral"],
  },
  {
    categoryName: "Best for Reasoning & Complex Math",
    categorySlug: "reasoning",
    description: "Models with deep chain-of-thought verification for scientific and mathematical proofs.",
    topModelSlugs: ["openai-o3", "deepseek-r1", "grok-3"],
  },
  {
    categoryName: "Best for Local Deployment (Ollama)",
    categorySlug: "local",
    description: "High-performing open weights models optimized to run on consumer hardware.",
    topModelSlugs: ["llama-3-3-70b", "qwen-2-5-72b", "phi-4"],
  },
];

export const BestForBlock = () => {
  return (
    <div className="flex flex-col gap-12 py-8">
      {RECOMMENDATIONS.map((group) => {
        const models = group.topModelSlugs
          .map((slug) => MODELS.find((m) => m.slug === slug))
          .filter(Boolean);

        return (
          <div key={group.categorySlug} className="flex flex-col gap-4">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 border-b border-slate-200 pb-3">
              <div>
                <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  {group.categoryName}
                </h3>
                <p className="text-xs text-slate-600 font-medium mt-0.5">
                  {group.description}
                </p>
              </div>
              <Link
                href={`/category/${group.categorySlug}`}
                className="inline-flex items-center gap-1 text-xs font-bold text-blue-600 hover:text-blue-700"
              >
                <span>View all {group.categoryName.split(" ")[2]} models</span>
                <ArrowRightIcon className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {models.map((model) => (
                <ModelCard key={model!.slug} model={model!} />
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};
