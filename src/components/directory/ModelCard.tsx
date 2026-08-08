"use client";

import Link from "next/link";
import { AIModel } from "@/types/model";
import { useDirectoryStore } from "@/stores/use-directory-store";
import { useDashboardStore } from "@/stores/use-dashboard-store";
import { AvailabilityBadge, PricingBadge } from "./Badges";
import { ArrowUpRightIcon, CompareIcon, HeartFillIcon, HeartIcon } from "./icons";

interface ModelCardProps {
  model: AIModel;
}

export const ModelCard: React.FC<ModelCardProps> = ({ model }) => {
  const compareList = useDirectoryStore((s) => s.compareList);
  const toggleCompare = useDirectoryStore((s) => s.toggleCompare);
  const isCompared = compareList.includes(model.slug);

  const isFav = useDashboardStore((s) => s.favorites.includes(model.slug));
  const toggleFavorite = useDashboardStore((s) => s.toggleFavorite);

  const primaryBenchmark = model.benchmarks[0];

  return (
    <div className="group relative flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-lg">
      <div>
        {/* Header: Provider, Badges & Favorite Heart Button */}
        <div className="flex items-center justify-between gap-2 mb-3">
          <span className="text-[0.65rem] font-extrabold text-slate-500 uppercase tracking-widest truncate">
            {model.provider}
          </span>
          <div className="flex items-center gap-1.5 shrink-0">
            {model.isVerified && (
              <span className="inline-flex items-center rounded-full bg-emerald-50 px-1.5 py-0.5 text-[0.6rem] font-extrabold text-emerald-700 border border-emerald-200">
                ✓ Verified
              </span>
            )}
            <PricingBadge pricing={model.pricing} />
            <button
              onClick={() => toggleFavorite(model.slug)}
              aria-label={isFav ? `Remove ${model.name} from favorites` : `Add ${model.name} to favorites`}
              className={`flex h-7 w-7 items-center justify-center rounded-lg border transition-all duration-200 active:scale-125 focus:outline-none focus:ring-2 focus:ring-rose-500/40 ${
                isFav
                  ? "border-rose-200 bg-rose-50 text-rose-600 shadow-sm"
                  : "border-slate-200 bg-white text-slate-400 hover:border-rose-200 hover:bg-rose-50/50 hover:text-rose-500"
              }`}
            >
              {isFav ? <HeartFillIcon className="w-3.5 h-3.5" /> : <HeartIcon className="w-3.5 h-3.5" />}
            </button>
          </div>
        </div>

        {/* Title */}
        <Link href={`/models/${model.slug}`} className="group-hover:text-blue-600 transition-colors">
          <h3 className="text-base sm:text-lg font-extrabold text-slate-900 tracking-tight flex items-center justify-between gap-1 break-words">
            <span className="truncate pr-1">{model.name}</span>
            <ArrowUpRightIcon className="w-4 h-4 shrink-0 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-blue-600" />
          </h3>
        </Link>

        {/* Subtitle / Type */}
        <p className="text-[0.75rem] font-bold text-blue-600 mt-0.5 mb-2.5">
          {model.type}
        </p>

        {/* Description */}
        <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed font-medium mb-4">
          {model.description}
        </p>

        {/* Key Metadata Row */}
        <div className="grid grid-cols-2 gap-2 py-2.5 px-3 rounded-xl bg-slate-50 border border-slate-100 text-xs mb-4">
          <div>
            <span className="text-[0.65rem] uppercase font-bold text-slate-500 block">Context Window</span>
            <span className="font-extrabold text-slate-800">{model.contextWindow}</span>
          </div>
          <div>
            <span className="text-[0.65rem] uppercase font-bold text-slate-500 block">
              {primaryBenchmark ? primaryBenchmark.name : "License"}
            </span>
            <span className="font-extrabold text-slate-800">
              {primaryBenchmark ? `${primaryBenchmark.score}${primaryBenchmark.maxScore === 100 ? "%" : ""}` : model.license}
            </span>
          </div>
        </div>


        {/* Availability */}
        <div className="mb-4">
          <AvailabilityBadge availability={model.availability} />
        </div>
      </div>

      {/* Footer: Tags & Compare toggle */}
      <div className="flex items-center justify-between pt-3 border-t border-slate-100 text-xs">
        <div className="flex flex-wrap gap-1">
          {model.tags.slice(0, 2).map((tag) => (
            <span key={tag} className="rounded-md bg-slate-100 px-2 py-0.5 text-[0.65rem] font-bold text-slate-600">
              #{tag}
            </span>
          ))}
        </div>

        {/* Compare Toggle Button */}
        <button
          onClick={() => toggleCompare(model.slug)}
          className={`flex items-center gap-1 rounded-lg px-3 py-1.5 text-[0.7rem] font-bold transition-all ${
            isCompared
              ? "bg-blue-600 text-white shadow-sm"
              : "bg-slate-100 text-slate-700 hover:bg-slate-200"
          }`}
        >
          <CompareIcon className="w-3 h-3" />
          {isCompared ? "Added" : "Compare"}
        </button>
      </div>
    </div>
  );
};
