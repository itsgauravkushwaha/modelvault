"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Header } from "@/components/directory/Header";
import { Footer } from "@/components/directory/Footer";
import { ModelCard } from "@/components/directory/ModelCard";
import { useDirectoryStore } from "@/stores/use-directory-store";
import { useDashboardStore } from "@/stores/use-dashboard-store";
import {
  ArrowRightIcon,
  BookmarkIcon,
  ClockIcon,
  CloudIcon,
  CodeIcon,
  CompareIcon,
  CpuIcon,
  HeartFillIcon,
  HeartIcon,
  LayoutDashboardIcon,
  RocketIcon,
  SearchIcon,
  SettingsIcon,
  SparklesIcon,
  WrenchIcon,
} from "@/components/directory/icons";

/* ------------------------------------------------------------------ */
/*  Sidebar Navigation Items                                          */
/* ------------------------------------------------------------------ */
interface SidebarItem {
  id: string;
  label: string;
  icon: React.FC<{ className?: string }>;
  comingSoon?: boolean;
}

const SIDEBAR_ITEMS: SidebarItem[] = [
  { id: "overview", label: "Overview", icon: LayoutDashboardIcon },
  { id: "favorites", label: "Favorites", icon: HeartIcon },
  { id: "recent", label: "Recently Viewed", icon: ClockIcon, comingSoon: true },
  { id: "comparisons", label: "Saved Comparisons", icon: BookmarkIcon, comingSoon: true },
  { id: "tools", label: "Developer Tools", icon: WrenchIcon, comingSoon: true },
  { id: "settings", label: "Settings", icon: SettingsIcon, comingSoon: true },
];

/* ------------------------------------------------------------------ */
/*  Roadmap "Coming Soon" Cards                                       */
/* ------------------------------------------------------------------ */
const ROADMAP = [
  { title: "Favorites", description: "Save and organise your most-used AI models.", icon: HeartIcon, accent: "from-rose-500 to-pink-600" },
  { title: "Recently Viewed", description: "Pick up where you left off with instant model history.", icon: ClockIcon, accent: "from-sky-500 to-cyan-600" },
  { title: "Search History", description: "Revisit past queries and filter combinations.", icon: SearchIcon, accent: "from-amber-500 to-orange-600" },
  { title: "AI Playground", description: "Test model prompts side-by-side in real-time.", icon: RocketIcon, accent: "from-purple-500 to-indigo-600" },
  { title: "Bring Your Own API Keys", description: "Connect your OpenAI, Anthropic, and Google API keys.", icon: CodeIcon, accent: "from-emerald-500 to-teal-600" },
  { title: "Collections", description: "Group models into custom collections for projects.", icon: BookmarkIcon, accent: "from-blue-500 to-indigo-600" },
  { title: "Reviews & Ratings", description: "Rate models and read community reviews.", icon: SparklesIcon, accent: "from-amber-500 to-yellow-600" },
  { title: "Developer Utilities", description: "Cost estimators, token counters, and VRAM calculators.", icon: WrenchIcon, accent: "from-slate-500 to-slate-700" },
];

export const DashboardView = () => {
  const [activeSection, setActiveSection] = useState("overview");

  const allModels = useDirectoryStore((s) => s.allModels);
  const loadModelsFromDb = useDirectoryStore((s) => s.loadModelsFromDb);

  const favorites = useDashboardStore((s) => s.favorites);
  const initializeDashboard = useDashboardStore((s) => s.initialize);
  const clearAllFavorites = useDashboardStore((s) => s.clearAllFavorites);

  useEffect(() => {
    loadModelsFromDb();
    initializeDashboard();
  }, [loadModelsFromDb, initializeDashboard]);

  // Resolve favorited model objects dynamically from dataset
  const favoriteModels = favorites
    .map((slug) => allModels.find((m) => m.slug === slug))
    .filter((m): m is NonNullable<typeof m> => Boolean(m));

  const stats = [
    { label: "Favorite Models", value: favorites.length, icon: HeartIcon, color: "text-rose-500", bg: "bg-rose-500/10", border: "border-rose-500/20" },
    { label: "Recently Viewed", value: 0, icon: ClockIcon, color: "text-sky-500", bg: "bg-sky-500/10", border: "border-sky-500/20" },
    { label: "Saved Comparisons", value: 0, icon: BookmarkIcon, color: "text-purple-500", bg: "bg-purple-500/10", border: "border-purple-500/20" },
    { label: "Dev Tools Used", value: 0, icon: WrenchIcon, color: "text-emerald-500", bg: "bg-emerald-500/10", border: "border-emerald-500/20" },
  ];

  const quickActions = [
    { title: "Explore Models", description: "Browse the full 520+ AI model directory.", href: "/models", icon: SearchIcon, accent: "from-blue-500 to-indigo-600" },
    { title: "Compare Models", description: "Open the side-by-side comparison matrix.", href: "/compare", icon: CompareIcon, accent: "from-purple-500 to-pink-600" },
    { title: "Browse Local Models", description: "Self-hostable models for Ollama & vLLM.", href: "/local", icon: CpuIcon, accent: "from-emerald-500 to-teal-600" },
    { title: "Cloud APIs", description: "Commercial hosted API model endpoints.", href: "/cloud", icon: CloudIcon, accent: "from-sky-500 to-cyan-600" },
  ];

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      <Header />

      <div className="flex-1 flex flex-col lg:flex-row">
        {/* ---- Left Sidebar ---- */}
        <aside className="w-full lg:w-64 flex-shrink-0 border-b lg:border-b-0 lg:border-r border-slate-200 bg-white lg:min-h-[calc(100vh-57px)]">
          <nav className="flex lg:flex-col gap-1 p-3 lg:p-4 overflow-x-auto lg:overflow-visible">
            {SIDEBAR_ITEMS.map((item) => {
              const IconComp = item.icon;
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => !item.comingSoon && setActiveSection(item.id)}
                  disabled={item.comingSoon}
                  className={`flex items-center gap-2.5 whitespace-nowrap rounded-xl px-3.5 py-2.5 text-xs font-semibold transition-all w-full text-left ${
                    isActive
                      ? "bg-blue-50 text-blue-700 font-bold"
                      : item.comingSoon
                      ? "text-slate-400 cursor-not-allowed"
                      : "text-slate-700 hover:bg-slate-100 hover:text-slate-900"
                  }`}
                >
                  <IconComp className={`w-4 h-4 flex-shrink-0 ${isActive ? "text-blue-600" : ""}`} />
                  <span>{item.label}</span>
                  {item.id === "favorites" && favorites.length > 0 && (
                    <span className="ml-auto rounded-full bg-rose-500 px-2 py-0.5 text-[0.65rem] font-bold text-white shadow-xs">
                      {favorites.length}
                    </span>
                  )}
                  {item.comingSoon && (
                    <span className="ml-auto rounded-full bg-slate-100 px-2 py-0.5 text-[0.6rem] font-extrabold uppercase tracking-wider text-slate-400">
                      Soon
                    </span>
                  )}
                </button>
              );
            })}
          </nav>
        </aside>

        {/* ---- Right Content Area ---- */}
        <main className="flex-1 p-5 sm:p-8 lg:p-10 overflow-y-auto">
          {/* SECTION: OVERVIEW */}
          {activeSection === "overview" && (
            <div className="max-w-5xl mx-auto flex flex-col gap-10">
              {/* Greeting */}
              <section>
                <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                  Welcome to <span className="bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-500 bg-clip-text text-transparent">ModelVault</span>
                </h1>
                <p className="text-sm text-slate-600 font-medium mt-2 max-w-xl leading-relaxed">
                  Manage your favorite models, comparisons, developer tools, and future API integrations from one place.
                </p>
              </section>

              {/* Quick Stats */}
              <section>
                <h2 className="text-xs font-extrabold text-slate-400 uppercase tracking-widest mb-4">
                  Your Activity
                </h2>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                  {stats.map((stat) => {
                    const IconComp = stat.icon;
                    return (
                      <div
                        key={stat.label}
                        className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
                      >
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-[0.65rem] font-extrabold uppercase tracking-wider text-slate-400">
                            {stat.label}
                          </span>
                          <div className={`flex h-8 w-8 items-center justify-center rounded-xl ${stat.bg} ${stat.color} border ${stat.border}`}>
                            <IconComp className="w-4 h-4" />
                          </div>
                        </div>
                        <span className="text-3xl font-extrabold text-slate-900 tracking-tight">{stat.value}</span>
                      </div>
                    );
                  })}
                </div>
              </section>

              {/* Quick Actions */}
              <section>
                <h2 className="text-xs font-extrabold text-slate-400 uppercase tracking-widest mb-4">
                  Quick Actions
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {quickActions.map((action) => {
                    const IconComp = action.icon;
                    return (
                      <Link
                        key={action.title}
                        href={action.href}
                        className="group flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-lg"
                      >
                        <div>
                          <div className={`mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br ${action.accent} text-white shadow-md transition-transform duration-300 group-hover:scale-110`}>
                            <IconComp className="w-4.5 h-4.5" />
                          </div>
                          <h3 className="text-sm font-extrabold text-slate-900 tracking-tight mb-1">
                            {action.title}
                          </h3>
                          <p className="text-[0.7rem] text-slate-500 font-medium leading-relaxed">
                            {action.description}
                          </p>
                        </div>
                        <div className="mt-3 pt-2.5 border-t border-slate-100 flex items-center gap-1 text-[0.7rem] font-bold text-blue-600 group-hover:gap-2 transition-all">
                          <span>Go</span>
                          <ArrowRightIcon className="w-3 h-3" />
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </section>

              {/* Empty State / Personal Workspace Teaser */}
              <section className="relative overflow-hidden rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 p-8 sm:p-10 text-white shadow-2xl">
                <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-blue-600/15 blur-3xl pointer-events-none" />
                <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-purple-600/15 blur-3xl pointer-events-none" />

                <div className="relative z-10 text-center max-w-lg mx-auto flex flex-col items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-500/20 text-blue-400 border border-blue-500/30 backdrop-blur-md shadow-lg">
                    <RocketIcon className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-extrabold tracking-tight text-white">
                    Your Personal Workspace
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 font-medium leading-relaxed">
                    Your personal workspace will appear here as you start using ModelVault. Favorite models, save comparisons, and configure your developer tools — all in one place.
                  </p>
                  <Link
                    href="/models"
                    className="mt-2 inline-flex items-center gap-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 text-xs font-bold transition-all shadow-lg hover:shadow-blue-500/25"
                  >
                    <span>Start Exploring Models</span>
                    <ArrowRightIcon className="w-4 h-4" />
                  </Link>
                </div>
              </section>

              {/* Coming Soon / Roadmap */}
              <section>
                <h2 className="text-xs font-extrabold text-purple-600 uppercase tracking-widest mb-1">
                  Roadmap
                </h2>
                <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight mb-6">
                  Coming Soon to Your Dashboard
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {ROADMAP.map((item) => {
                    const IconComp = item.icon;
                    return (
                      <div
                        key={item.title}
                        className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
                      >
                        <div>
                          <div className="flex items-center justify-between mb-3">
                            <div className={`flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br ${item.accent} text-white shadow-sm`}>
                              <IconComp className="w-4 h-4" />
                            </div>
                            <span className="rounded-full bg-slate-100 px-2.5 py-0.5 text-[0.6rem] font-extrabold uppercase tracking-wider text-slate-500">
                              Coming Soon
                            </span>
                          </div>
                          <h4 className="text-sm font-extrabold text-slate-900 tracking-tight mb-1">
                            {item.title}
                          </h4>
                          <p className="text-[0.7rem] text-slate-500 font-medium leading-relaxed">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </section>
            </div>
          )}

          {/* SECTION: FAVORITES */}
          {activeSection === "favorites" && (
            <div className="max-w-5xl mx-auto flex flex-col gap-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-5">
                <div>
                  <div className="inline-flex items-center gap-1.5 text-xs font-extrabold text-rose-600 uppercase tracking-wider mb-1">
                    <HeartFillIcon className="w-3.5 h-3.5 text-rose-500" />
                    <span>Personal Workspace</span>
                  </div>
                  <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                    Favorite Models ({favoriteModels.length})
                  </h1>
                </div>

                {favoriteModels.length > 0 && (
                  <button
                    onClick={clearAllFavorites}
                    className="text-xs font-semibold text-rose-600 hover:text-rose-700 bg-rose-50 border border-rose-200 px-3 py-1.5 rounded-xl transition-all self-start sm:self-auto"
                  >
                    Clear All Favorites
                  </button>
                )}
              </div>

              {/* Grid or Empty State */}
              {favoriteModels.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {favoriteModels.map((model) => (
                    <ModelCard key={model.slug} model={model} />
                  ))}
                </div>
              ) : (
                <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-12 text-center shadow-sm max-w-lg mx-auto w-full my-8">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-rose-50 text-rose-500 border border-rose-100 mx-auto mb-4">
                    <HeartIcon className="w-7 h-7" />
                  </div>

                  <h3 className="text-lg font-extrabold text-slate-900 tracking-tight">
                    No favorite models yet
                  </h3>

                  <p className="text-xs text-slate-500 mt-2 leading-relaxed max-w-sm mx-auto font-medium">
                    Browse ModelVault and click the heart icon on any model card to save models to your personal workspace.
                  </p>

                  <Link
                    href="/models"
                    className="mt-6 inline-flex items-center gap-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 text-xs font-bold transition-all shadow-md hover:shadow-blue-500/20"
                  >
                    <span>Explore Models</span>
                    <ArrowRightIcon className="w-4 h-4" />
                  </Link>
                </div>
              )}
            </div>
          )}
        </main>
      </div>

      <Footer />
    </div>
  );
};
