"use client";

import { useAdminStore } from "@/stores/use-admin-store";
import { AvailabilityBadge, PricingBadge } from "../directory/Badges";
import { SearchIcon } from "../directory/icons";

export const ModelTable = () => {
  const models = useAdminStore((s) => s.models);
  const searchQuery = useAdminStore((s) => s.searchQuery);
  const setSearchQuery = useAdminStore((s) => s.setSearchQuery);
  const openEditModal = useAdminStore((s) => s.openEditModal);
  const openDeleteModal = useAdminStore((s) => s.openDeleteModal);

  const filteredModels = models.filter((m) => {
    if (!searchQuery.trim()) return true;
    const q = searchQuery.toLowerCase();
    return (
      m.name.toLowerCase().includes(q) ||
      m.provider.toLowerCase().includes(q) ||
      m.slug.toLowerCase().includes(q) ||
      m.type.toLowerCase().includes(q)
    );
  });

  return (
    <div className="rounded-xl border border-slate-200 bg-white shadow-sm overflow-hidden">
      {/* Search Header */}
      <div className="p-4 border-b border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3 bg-slate-50/50">
        <div className="relative w-full sm:w-72">
          <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search models by name or provider..."
            className="w-full pl-9 pr-3 py-1.5 text-xs rounded-lg border border-slate-200 bg-white text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="text-xs font-bold text-slate-500">
          Showing {filteredModels.length} of {models.length} models
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-left text-xs border-collapse">
          <thead>
            <tr className="border-b border-slate-200 bg-slate-100/70 text-slate-500 font-extrabold uppercase tracking-wider text-[0.65rem]">
              <th className="p-3.5">Model Name & Slug</th>
              <th className="p-3.5">Provider</th>
              <th className="p-3.5">Type</th>
              <th className="p-3.5">Pricing</th>
              <th className="p-3.5">Context</th>
              <th className="p-3.5">Availability</th>
              <th className="p-3.5 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 font-medium text-slate-800">
            {filteredModels.slice(0, 100).map((model) => (
              <tr key={model.slug} className="hover:bg-slate-50/80 transition-colors">
                <td className="p-3.5">
                  <div className="font-extrabold text-slate-900">{model.name}</div>
                  <div className="text-[0.65rem] font-mono text-slate-400">{model.slug}</div>
                </td>
                <td className="p-3.5 font-bold text-slate-700">{model.provider}</td>
                <td className="p-3.5 text-slate-600">{model.type}</td>
                <td className="p-3.5">
                  <PricingBadge pricing={model.pricing} />
                </td>
                <td className="p-3.5 font-bold">{model.contextWindow}</td>
                <td className="p-3.5">
                  <AvailabilityBadge availability={model.availability} />
                </td>
                <td className="p-3.5 text-right">
                  <div className="flex items-center justify-end gap-2">
                    <button
                      onClick={() => openEditModal(model)}
                      className="rounded-md bg-blue-50 hover:bg-blue-100 text-blue-700 px-2.5 py-1 font-bold text-[0.7rem] transition-colors"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => openDeleteModal(model)}
                      className="rounded-md bg-red-50 hover:bg-red-100 text-red-700 px-2.5 py-1 font-bold text-[0.7rem] transition-colors"
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
