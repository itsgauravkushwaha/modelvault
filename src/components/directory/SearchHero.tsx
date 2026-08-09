"use client";

import Link from "next/link";
import { useDirectorySearch } from "@/hooks/use-directory-search";
import { FilterChips } from "./FilterChips";
import { ArrowRightIcon, CompareIcon, SearchIcon, SparklesIcon } from "./icons";

export const SearchHero = () => {
  const { searchQuery, handleSearchChange, handleSearchSubmit } = useDirectorySearch();

  return (
    <section className="w-full bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 py-20 text-white text-center relative overflow-hidden border-b border-slate-800">
      {/* Background Subtle CSS Ambient Glows */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 h-96 w-96 rounded-full bg-blue-600/20 blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 -left-20 h-72 w-72 rounded-full bg-purple-600/15 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -right-20 h-72 w-72 rounded-full bg-sky-500/15 blur-3xl pointer-events-none" />

      <div className="shell relative z-10 max-w-4xl flex flex-col items-center gap-6">
        {/* Glassmorphic Badge */}
        <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1.5 text-xs font-semibold text-blue-400 backdrop-blur-md shadow-sm">
          <SparklesIcon className="w-3.5 h-3.5" />
          <span>Searchable Directory of 11,000+ Cloud & Local AI Models</span>
        </div>

        {/* Headline */}
        <h1 className="text-3xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.1]">
          Find the Perfect <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">AI Model</span> in Seconds
        </h1>

        {/* Supporting Copy */}
        <p className="text-xs sm:text-base text-slate-300 max-w-2xl font-medium leading-relaxed">
          Discover, compare, and benchmark 11,000+ cloud APIs and open-weight local models. Filter by modality, context window, VRAM requirements, and pricing.
        </p>

        {/* Primary & Secondary CTA Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 pt-1">
          <Link
            href="/tools/model-finder"
            className="inline-flex items-center gap-2 rounded-xl bg-purple-600 hover:bg-purple-500 text-white px-5 sm:px-6 py-3 text-xs font-bold transition-all shadow-lg hover:shadow-purple-500/25"
          >
            <SparklesIcon className="w-4 h-4 text-purple-200" />
            <span>Smart Model Finder 🔍</span>
          </Link>
          <Link
            href="/models"
            className="inline-flex items-center gap-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white px-5 sm:px-6 py-3 text-xs font-bold transition-all shadow-lg hover:shadow-blue-500/25"
          >
            <span>Explore Models</span>
            <ArrowRightIcon className="w-4 h-4" />
          </Link>
          <Link
            href="/compare"
            className="inline-flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-800/80 hover:bg-slate-800 text-slate-200 hover:text-white px-5 sm:px-6 py-3 text-xs font-bold backdrop-blur-md transition-all shadow-md"
          >
            <CompareIcon className="w-4 h-4 text-blue-400" />
            <span>Compare Models</span>
          </Link>
        </div>

        {/* Large Centered Search Input Form */}
        <form onSubmit={handleSearchSubmit} className="w-full relative mt-4 max-w-2xl">
          <SearchIcon className="absolute left-3.5 sm:left-4 top-1/2 -translate-y-1/2 w-4 sm:w-5 h-4 sm:h-5 text-slate-400 pointer-events-none" />
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearchChange}
            placeholder="Search 11,000+ models (e.g. 'coding', 'GPT-4o', 'local')..."
            aria-label="Search models"
            className="w-full rounded-2xl bg-white text-slate-900 pl-10 sm:pl-12 pr-20 sm:pr-28 py-3.5 sm:py-4 text-xs sm:text-sm font-semibold shadow-2xl placeholder:text-slate-400 focus:outline-none focus:ring-4 focus:ring-blue-500/40 transition-all"
          />
          <button
            type="submit"
            className="absolute right-2 top-1/2 -translate-y-1/2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white px-3 sm:px-5 py-2 sm:py-2.5 text-xs font-bold transition-all shadow-md"
          >
            Search
          </button>
        </form>

        {/* Quick Filter Chips */}
        <div className="w-full mt-2">
          <FilterChips />
        </div>
      </div>
    </section>
  );
};
