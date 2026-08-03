"use client";

import { useDirectoryStore } from "@/stores/use-directory-store";
import { CATEGORIES } from "@/data/categories";
import { PROVIDERS } from "@/data/providers";
import { Availability, PricingType, UseCase } from "@/types/model";
import { FilterIcon } from "./icons";

export const FilterSidebar = () => {
  const useCaseFilter = useDirectoryStore((s) => s.useCaseFilter);
  const availabilityFilter = useDirectoryStore((s) => s.availabilityFilter);
  const pricingFilter = useDirectoryStore((s) => s.pricingFilter);
  const providerFilter = useDirectoryStore((s) => s.providerFilter);
  const hasApiOnly = useDirectoryStore((s) => s.hasApiOnly);
  const hasSelfHostOnly = useDirectoryStore((s) => s.hasSelfHostOnly);

  const setUseCaseFilter = useDirectoryStore((s) => s.setUseCaseFilter);
  const setAvailabilityFilter = useDirectoryStore((s) => s.setAvailabilityFilter);
  const setPricingFilter = useDirectoryStore((s) => s.setPricingFilter);
  const setProviderFilter = useDirectoryStore((s) => s.setProviderFilter);
  const setHasApiOnly = useDirectoryStore((s) => s.setHasApiOnly);
  const setHasSelfHostOnly = useDirectoryStore((s) => s.setHasSelfHostOnly);
  const resetFilters = useDirectoryStore((s) => s.resetFilters);

  return (
    <aside className="w-full lg:w-64 flex-shrink-0 flex flex-col gap-6 rounded-xl border border-slate-200 bg-white p-5 shadow-sm text-xs text-slate-700">
      <div className="flex items-center justify-between border-b border-slate-100 pb-3">
        <div className="flex items-center gap-2 font-extrabold text-slate-900 text-sm">
          <FilterIcon className="w-4 h-4 text-blue-600" />
          <span>Filters</span>
        </div>
        <button
          onClick={resetFilters}
          className="text-[0.7rem] font-semibold text-blue-600 hover:underline"
        >
          Reset All
        </button>
      </div>

      {/* Deployment / Availability */}
      <div>
        <label className="font-extrabold text-slate-900 uppercase tracking-wider text-[0.65rem] block mb-2">
          Availability
        </label>
        <div className="flex flex-col gap-1.5">
          {[
            { id: "all", label: "All Setup Types" },
            { id: "cloud", label: "Cloud APIs Only" },
            { id: "local", label: "Local / Self-Hosted" },
          ].map((item) => (
            <label key={item.id} className="flex items-center gap-2 cursor-pointer hover:text-blue-600">
              <input
                type="radio"
                name="availability"
                checked={availabilityFilter === item.id}
                onChange={() => setAvailabilityFilter(item.id as Availability | "all")}
                className="text-blue-600 focus:ring-blue-500 rounded"
              />
              <span className="font-medium">{item.label}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Category / Use Case */}
      <div>
        <label className="font-extrabold text-slate-900 uppercase tracking-wider text-[0.65rem] block mb-2">
          Use Case / Category
        </label>
        <select
          value={useCaseFilter}
          onChange={(e) => setUseCaseFilter(e.target.value as UseCase | "all")}
          className="w-full rounded-lg border border-slate-200 bg-slate-50 p-2 text-xs font-semibold text-slate-800 focus:bg-white focus:outline-none focus:border-blue-500"
        >
          <option value="all">All Categories</option>
          {CATEGORIES.map((cat) => (
            <option key={cat.slug} value={cat.slug}>
              {cat.name} ({cat.modelCount})
            </option>
          ))}
        </select>
      </div>

      {/* Provider */}
      <div>
        <label className="font-extrabold text-slate-900 uppercase tracking-wider text-[0.65rem] block mb-2">
          Provider
        </label>
        <select
          value={providerFilter}
          onChange={(e) => setProviderFilter(e.target.value)}
          className="w-full rounded-lg border border-slate-200 bg-slate-50 p-2 text-xs font-semibold text-slate-800 focus:bg-white focus:outline-none focus:border-blue-500"
        >
          <option value="all">All Providers</option>
          {PROVIDERS.map((prov) => (
            <option key={prov.slug} value={prov.slug}>
              {prov.name} ({prov.modelCount})
            </option>
          ))}
        </select>
      </div>

      {/* Pricing Type */}
      <div>
        <label className="font-extrabold text-slate-900 uppercase tracking-wider text-[0.65rem] block mb-2">
          Pricing Model
        </label>
        <div className="flex flex-col gap-1.5">
          {[
            { id: "all", label: "All Pricing" },
            { id: "open-weights", label: "Open Weights (Free)" },
            { id: "freemium", label: "Freemium / Free Tier" },
            { id: "paid", label: "Commercial Paid API" },
          ].map((item) => (
            <label key={item.id} className="flex items-center gap-2 cursor-pointer hover:text-blue-600">
              <input
                type="radio"
                name="pricing"
                checked={pricingFilter === item.id}
                onChange={() => setPricingFilter(item.id as PricingType | "all")}
                className="text-blue-600 focus:ring-blue-500"
              />
              <span className="font-medium">{item.label}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Feature Toggles */}
      <div className="border-t border-slate-100 pt-4 flex flex-col gap-2">
        <label className="flex items-center justify-between cursor-pointer">
          <span className="font-semibold text-slate-800">Must have REST API</span>
          <input
            type="checkbox"
            checked={hasApiOnly}
            onChange={(e) => setHasApiOnly(e.target.checked)}
            className="rounded text-blue-600 focus:ring-blue-500"
          />
        </label>
        <label className="flex items-center justify-between cursor-pointer">
          <span className="font-semibold text-slate-800">Must be Self-Hostable</span>
          <input
            type="checkbox"
            checked={hasSelfHostOnly}
            onChange={(e) => setHasSelfHostOnly(e.target.checked)}
            className="rounded text-blue-600 focus:ring-blue-500"
          />
        </label>
      </div>
    </aside>
  );
};
