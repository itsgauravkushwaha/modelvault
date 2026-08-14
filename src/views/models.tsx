"use client";

import { useState, useEffect } from "react";
import { useDirectorySearch } from "@/hooks/use-directory-search";
import { useDirectoryStore } from "@/stores/use-directory-store";
import { Header } from "@/components/directory/Header";
import { FilterChips } from "@/components/directory/FilterChips";
import { FilterSidebar } from "@/components/directory/FilterSidebar";
import { ModelCard } from "@/components/directory/ModelCard";
import { SortDropdown } from "@/components/directory/SortDropdown";
import { Footer } from "@/components/directory/Footer";
import { FilterIcon, SearchIcon } from "@/components/directory/icons";

export const ModelsView = () => {
  const { searchQuery, handleSearchChange, clearSearch } = useDirectorySearch();
  const allModels = useDirectoryStore((s) => s.allModels);
  const debouncedSearchQuery = useDirectoryStore((s) => s.debouncedSearchQuery);
  const useCaseFilter = useDirectoryStore((s) => s.useCaseFilter);
  const availabilityFilter = useDirectoryStore((s) => s.availabilityFilter);
  const pricingFilter = useDirectoryStore((s) => s.pricingFilter);
  const providerFilter = useDirectoryStore((s) => s.providerFilter);
  const modalityFilter = useDirectoryStore((s) => s.modalityFilter);
  const hasApiOnly = useDirectoryStore((s) => s.hasApiOnly);
  const hasSelfHostOnly = useDirectoryStore((s) => s.hasSelfHostOnly);
  const sortBy = useDirectoryStore((s) => s.sortBy);
  const isFilterOpen = useDirectoryStore((s) => s.isFilterOpen);
  const toggleFilterOpen = useDirectoryStore((s) => s.toggleFilterOpen);
  const getFilteredModels = useDirectoryStore((s) => s.getFilteredModels);
  const resetFilters = useDirectoryStore((s) => s.resetFilters);
  const loadModelsFromDb = useDirectoryStore((s) => s.loadModelsFromDb);

  // Hydrate from database API on mount
  useEffect(() => {
    loadModelsFromDb();
  }, [loadModelsFromDb]);

  // Force dependency on all filter state so getFilteredModels is re-evaluated
  const filteredModels = getFilteredModels();

  // Track active filter count for UI hint
  const activeFilterCount = [
    useCaseFilter !== "all",
    availabilityFilter !== "all",
    pricingFilter !== "all",
    providerFilter !== "all",
    modalityFilter !== "all",
    hasApiOnly,
    hasSelfHostOnly,
    searchQuery.trim().length > 0,
  ].filter(Boolean).length;

  // Suppress unused-var lint — these subscriptions exist to trigger re-renders
  void sortBy;
  void debouncedSearchQuery;

  // Pagination for large dataset performance
  const [displayCount, setDisplayCount] = useState(36);
  const displayedModels = filteredModels.slice(0, displayCount);

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      <Header />

      <main className="flex-1 py-8">
        <div className="shell">
          {/* Header, Inline Search & Quick Filter Pills */}
          <div className="flex flex-col gap-4 mb-6">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3">
              <div>
                <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                  AI Models Directory
                </h1>
                <p className="text-xs sm:text-sm text-slate-600 font-medium mt-1">
                  Filter and search through {allModels.length.toLocaleString()}+ cloud API and local open-weight AI models.
                </p>
              </div>
              {activeFilterCount > 0 && (
                <button
                  onClick={resetFilters}
                  className="text-[0.7rem] font-bold text-blue-600 bg-blue-50 hover:bg-blue-100 rounded-full px-3 py-1 self-start sm:self-auto transition-colors"
                >
                  {activeFilterCount} filter{activeFilterCount > 1 ? "s" : ""} active • Reset
                </button>
              )}
            </div>

            {/* Inline search bar on models page */}
            <div className="relative w-full max-w-xl">
              <SearchIcon className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={handleSearchChange}
                placeholder="Search by model name, provider, tag, or description..."
                className="w-full pl-10 pr-4 py-2.5 text-xs font-semibold rounded-xl border border-slate-200 bg-white text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 shadow-sm transition-all"
              />
              {searchQuery && (
                <button
                  onClick={clearSearch}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-700 text-sm font-bold"
                  aria-label="Clear search"
                >
                  ✕
                </button>
              )}
            </div>

            {/* Quick Use Case Chips */}
            <FilterChips />
          </div>

          <div className="flex flex-col lg:flex-row items-start gap-6">
            {/* Filter Trigger (Mobile) */}
            <div className="w-full lg:hidden flex justify-between items-center mb-2">
              <button
                onClick={toggleFilterOpen}
                className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-xs font-bold text-slate-800 shadow-sm"
              >
                <FilterIcon className="w-4 h-4 text-blue-600" />
                <span>Filters {activeFilterCount > 0 ? `(${activeFilterCount})` : ""}</span>
              </button>

              <SortDropdown />
            </div>

            {/* Sidebar Filters */}
            <div className={`w-full lg:w-64 shrink-0 ${isFilterOpen ? "block" : "hidden lg:block"}`}>
              <FilterSidebar />
            </div>

            {/* Main Listing Area */}
            <div className="flex-1 w-full">
              {/* Controls bar (Hidden on desktop as it's redundant with Sidebar) */}
              <div className="hidden lg:flex items-center justify-between gap-4 mb-4 bg-white p-3.5 rounded-xl border border-slate-200 shadow-sm">
                <span className="text-xs font-bold text-slate-700">
                  Showing <span className="text-blue-600">{Math.min(displayCount, filteredModels.length)}</span> of{" "}
                  <span className="text-slate-900 font-extrabold">{filteredModels.length.toLocaleString()}</span> models
                </span>
                <SortDropdown />
              </div>

              {/* Grid or Empty state */}
              {filteredModels.length > 0 ? (
                <>
                  <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                    {displayedModels.map((model) => (
                      <ModelCard key={model.slug} model={model} />
                    ))}
                  </div>

                  {/* Load More Button */}
                  {displayCount < filteredModels.length && (
                    <div className="mt-10 text-center">
                      <button
                        onClick={() => setDisplayCount((prev) => prev + 36)}
                        className="rounded-xl bg-blue-600 hover:bg-blue-500 px-8 py-3 text-xs font-bold text-white transition-all shadow-md hover:shadow-blue-500/25"
                      >
                        Load More Models ({filteredModels.length - displayCount} remaining)
                      </button>
                    </div>
                  )}
                </>
              ) : (
                <div className="rounded-xl border border-slate-200 bg-white p-12 text-center">
                  <h3 className="text-lg font-bold text-slate-900">No models found</h3>
                  <p className="text-xs text-slate-500 mt-1 max-w-sm mx-auto mb-6">
                    No AI models match your current filter combination. Try clearing your filters or searching for another keyword.
                  </p>
                  <button
                    onClick={resetFilters}
                    className="inline-flex items-center gap-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 text-xs font-bold shadow-sm transition-all"
                  >
                    Reset All Filters
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};
