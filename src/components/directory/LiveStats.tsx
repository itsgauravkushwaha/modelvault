"use client";

import { useDirectoryStore } from "@/stores/use-directory-store";
import { PROVIDERS } from "@/data/providers";
import { CloudIcon, CpuIcon, SparklesIcon } from "./icons";

export const LiveStats = () => {
  const allModels = useDirectoryStore((s) => s.allModels);

  const totalModels = allModels.length;
  const totalProviders = PROVIDERS.length;
  const cloudCount = allModels.filter(
    (m) => m.hasApi || m.availability === "cloud" || m.availability === "both"
  ).length;
  const localCount = allModels.filter(
    (m) => m.hasSelfHost || m.availability === "local" || m.availability === "both"
  ).length;
  const openWeightsCount = allModels.filter((m) => m.pricing === "open-weights").length;

  const stats = [
    {
      label: "Indexed AI Models",
      value: totalModels,
      unit: "Models",
      description: "Frontier & open-weight index",
      icon: SparklesIcon,
      color: "text-blue-500",
      bg: "bg-blue-500/10",
      border: "border-blue-500/20",
    },
    {
      label: "AI Labs & Providers",
      value: totalProviders,
      unit: "Labs",
      description: "OpenAI, Anthropic, Google, etc.",
      icon: SparklesIcon,
      color: "text-purple-500",
      bg: "bg-purple-500/10",
      border: "border-purple-500/20",
    },
    {
      label: "Cloud Endpoints",
      value: cloudCount,
      unit: "APIs",
      description: "REST APIs & SDK integrations",
      icon: CloudIcon,
      color: "text-sky-500",
      bg: "bg-sky-500/10",
      border: "border-sky-500/20",
    },
    {
      label: "Local & Ollama",
      value: localCount,
      unit: "Models",
      description: "Self-hostable weights",
      icon: CpuIcon,
      color: "text-emerald-500",
      bg: "bg-emerald-500/10",
      border: "border-emerald-500/20",
    },
    {
      label: "Open Weights",
      value: openWeightsCount,
      unit: "Free",
      description: "Community & commercial open",
      icon: SparklesIcon,
      color: "text-amber-500",
      bg: "bg-amber-500/10",
      border: "border-amber-500/20",
    },
  ];

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5">
      {stats.map((stat) => {
        const IconComponent = stat.icon;
        return (
          <div
            key={stat.label}
            className="group relative flex flex-col justify-between rounded-2xl border border-slate-200/80 bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-md"
          >
            <div className="flex items-center justify-between mb-3">
              <span className="text-[0.65rem] font-extrabold uppercase tracking-wider text-slate-400">
                {stat.label}
              </span>
              <div className={`flex h-7 w-7 items-center justify-center rounded-lg ${stat.bg} ${stat.color} border ${stat.border}`}>
                <IconComponent className="w-3.5 h-3.5" />
              </div>
            </div>

            <div>
              <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight flex items-baseline gap-1">
                <span>{stat.value}</span>
                <span className="text-xs font-bold text-slate-400">{stat.unit}</span>
              </div>
              <p className="text-[0.7rem] font-medium text-slate-500 mt-1 line-clamp-1">
                {stat.description}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};
