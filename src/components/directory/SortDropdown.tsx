"use client";

import { useDirectoryStore } from "@/stores/use-directory-store";

export const SortDropdown = () => {
  const sortBy = useDirectoryStore((s) => s.sortBy);
  const setSortBy = useDirectoryStore((s) => s.setSortBy);

  return (
    <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
      <span className="text-slate-500 hidden sm:inline">Sort by:</span>
      <select
        value={sortBy}
        onChange={(e) =>
          setSortBy(
            e.target.value as "popularity" | "newest" | "context" | "benchmark" | "name"
          )
        }
        className="rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-slate-900 shadow-sm focus:border-blue-500 focus:outline-none"
      >
        <option value="popularity">Trending & Popular</option>
        <option value="newest">Recently Released</option>
        <option value="context">Largest Context Window</option>
        <option value="benchmark">Highest Benchmark Score</option>
        <option value="name">Alphabetical (A-Z)</option>
      </select>
    </div>
  );
};
