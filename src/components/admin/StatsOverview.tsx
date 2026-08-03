"use client";

import { useAdminStore } from "@/stores/use-admin-store";
import { CloudIcon, CpuIcon, SparklesIcon } from "../directory/icons";

export const StatsOverview = () => {
  const models = useAdminStore((s) => s.models);

  const total = models.length;
  const cloudCount = models.filter((m) => m.availability === "cloud" || m.availability === "both").length;
  const localCount = models.filter((m) => m.hasSelfHost || m.availability === "local" || m.availability === "both").length;
  const openWeightsCount = models.filter((m) => m.pricing === "open-weights").length;

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
      <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
        <div className="flex items-center justify-between text-slate-500 mb-1">
          <span className="text-[0.65rem] font-extrabold uppercase tracking-wider">Total Models</span>
          <SparklesIcon className="w-4 h-4 text-blue-600" />
        </div>
        <div className="text-2xl font-extrabold text-slate-900">{total}</div>
        <p className="text-[0.7rem] text-slate-500 mt-0.5">Active in database</p>
      </div>

      <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
        <div className="flex items-center justify-between text-slate-500 mb-1">
          <span className="text-[0.65rem] font-extrabold uppercase tracking-wider">Cloud APIs</span>
          <CloudIcon className="w-4 h-4 text-blue-500" />
        </div>
        <div className="text-2xl font-extrabold text-slate-900">{cloudCount}</div>
        <p className="text-[0.7rem] text-slate-500 mt-0.5">REST & SDK Endpoints</p>
      </div>

      <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
        <div className="flex items-center justify-between text-slate-500 mb-1">
          <span className="text-[0.65rem] font-extrabold uppercase tracking-wider">Local & Ollama</span>
          <CpuIcon className="w-4 h-4 text-emerald-600" />
        </div>
        <div className="text-2xl font-extrabold text-slate-900">{localCount}</div>
        <p className="text-[0.7rem] text-slate-500 mt-0.5">Self-hostable weights</p>
      </div>

      <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
        <div className="flex items-center justify-between text-slate-500 mb-1">
          <span className="text-[0.65rem] font-extrabold uppercase tracking-wider">Open Weights</span>
          <span className="rounded bg-purple-100 text-purple-700 text-[0.6rem] font-bold px-1.5 py-0.5">Free</span>
        </div>
        <div className="text-2xl font-extrabold text-slate-900">{openWeightsCount}</div>
        <p className="text-[0.7rem] text-slate-500 mt-0.5">Community & Enterprise</p>
      </div>
    </div>
  );
};
