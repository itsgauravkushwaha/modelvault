"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useDirectoryStore } from "@/stores/use-directory-store";
import { useDashboardStore } from "@/stores/use-dashboard-store";
import { useDirectorySearch } from "@/hooks/use-directory-search";
import {
  CompareIcon,
  LayoutDashboardIcon,
  SearchIcon,
  SparklesIcon,
  ChevronDownIcon,
  MenuIcon,
  CloseIcon,
} from "./icons";

export const Header = () => {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [modelsOpen, setModelsOpen] = useState(false);
  const [toolsOpen, setToolsOpen] = useState(false);

  const compareList = useDirectoryStore((s) => s.compareList);
  const { searchQuery, handleSearchChange, handleSearchSubmit } = useDirectorySearch();

  const favorites = useDashboardStore((s) => s.favorites);
  const initializeDashboard = useDashboardStore((s) => s.initialize);

  useEffect(() => {
    initializeDashboard();
  }, [initializeDashboard]);

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setModelsOpen(false);
    setToolsOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/95 backdrop-blur-md">
      <div className="shell flex items-center justify-between gap-3 py-3">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-2 text-base sm:text-lg font-extrabold tracking-tight text-neutral-900 shrink-0">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 text-white shadow-sm shrink-0">
            <SparklesIcon className="h-4 w-4" />
          </div>
          <span className="truncate">ModelVault</span>
          <span className="hidden sm:inline-block rounded-full bg-blue-50 px-2 py-0.5 text-[0.65rem] font-bold uppercase tracking-wider text-blue-600">
            AI Index
          </span>
        </Link>

        {/* Global Search Input */}
        <form onSubmit={handleSearchSubmit} className="relative hidden md:block max-w-xs flex-1">
          <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-neutral-400 pointer-events-none" />
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearchChange}
            placeholder="Search 11,000+ models, benchmarks..."
            aria-label="Search models"
            className="w-full pl-9 pr-4 py-1.5 text-xs bg-slate-100/70 border border-slate-200 rounded-lg text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:border-blue-500 focus:bg-white transition-all"
          />
        </form>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1.5 text-xs font-semibold text-neutral-700">
          {/* Models Catalog Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setModelsOpen(true)}
            onMouseLeave={() => setModelsOpen(false)}
          >
            <button
              onClick={() => setModelsOpen((prev) => !prev)}
              aria-haspopup="true"
              aria-expanded={modelsOpen}
              className={`flex items-center gap-1 px-3 py-1.5 rounded-md transition-colors text-xs font-bold ${
                pathname === "/models" || pathname === "/cloud" || pathname === "/local"
                  ? "bg-slate-100 text-blue-600 font-extrabold"
                  : "text-neutral-700 hover:text-blue-600"
              }`}
            >
              <span>Catalog</span>
              <ChevronDownIcon className={`w-3 h-3 transition-transform duration-150 ${modelsOpen ? "rotate-180" : ""}`} />
            </button>

            {/* Models Dropdown Panel */}
            <div
              className={`absolute left-0 top-full pt-1.5 w-52 origin-top-left transition-all duration-150 ease-out z-50 ${
                modelsOpen
                  ? "opacity-100 scale-100 pointer-events-auto"
                  : "opacity-0 scale-95 pointer-events-none"
              }`}
            >
              <div className="rounded-xl border border-slate-200 bg-white shadow-xl p-1.5 flex flex-col gap-0.5">
                <Link
                  href="/models"
                  className="flex items-center justify-between rounded-lg px-3 py-2 text-xs font-semibold text-slate-800 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                >
                  <span>All Models Index</span>
                  <span className="text-[0.6rem] font-bold text-slate-400">11k+</span>
                </Link>
                <Link
                  href="/cloud"
                  className="flex items-center justify-between rounded-lg px-3 py-2 text-xs font-semibold text-slate-800 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                >
                  <span>Cloud API Models</span>
                  <span className="text-[0.6rem] font-bold text-slate-400">APIs</span>
                </Link>
                <Link
                  href="/local"
                  className="flex items-center justify-between rounded-lg px-3 py-2 text-xs font-semibold text-slate-800 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                >
                  <span>Local Models (Ollama)</span>
                  <span className="text-[0.6rem] font-bold text-emerald-600">Free</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Solution Wizard Link */}
          <Link
            href="/solve"
            className={`px-3 py-1.5 rounded-md transition-colors flex items-center gap-1 ${
              pathname === "/solve" ? "bg-blue-50 text-blue-600 font-extrabold" : "text-blue-600 hover:text-blue-700 font-bold"
            }`}
          >
            <span>Solution Wizard</span>
            <span className="text-[0.55rem] bg-blue-100 text-blue-700 px-1.5 py-0.5 rounded-full font-black uppercase">
              New
            </span>
          </Link>

          {/* WebGPU Playground Link */}
          <Link
            href="/playground"
            className={`px-3 py-1.5 rounded-md transition-colors font-extrabold flex items-center gap-1 ${
              pathname === "/playground" ? "bg-purple-100 text-purple-700" : "text-purple-600 hover:text-purple-800"
            }`}
          >
            <span>Playground</span>
            <span className="text-[0.55rem] bg-purple-200 text-purple-800 px-1.5 py-0.5 rounded-full font-black uppercase">
              WebGPU
            </span>
          </Link>

          {/* Telemetry Link */}
          <Link
            href="/telemetry"
            className={`px-3 py-1.5 rounded-md transition-colors font-semibold ${
              pathname === "/telemetry" ? "bg-slate-100 text-blue-600 font-bold" : "hover:text-blue-600"
            }`}
          >
            Telemetry ⚡
          </Link>

          {/* Developer Tools Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setToolsOpen(true)}
            onMouseLeave={() => setToolsOpen(false)}
          >
            <button
              onClick={() => setToolsOpen((prev) => !prev)}
              aria-haspopup="true"
              aria-expanded={toolsOpen}
              className={`flex items-center gap-1 px-3 py-1.5 rounded-md transition-colors text-xs font-semibold ${
                pathname.startsWith("/tools")
                  ? "bg-slate-100 text-blue-600 font-bold"
                  : "text-neutral-700 hover:text-blue-600"
              }`}
            >
              <span>Dev Tools</span>
              <ChevronDownIcon className={`w-3 h-3 transition-transform duration-150 ${toolsOpen ? "rotate-180" : ""}`} />
            </button>

            {/* Dropdown Panel */}
            <div
              className={`absolute right-0 top-full pt-1.5 w-56 origin-top-right transition-all duration-150 ease-out z-50 ${
                toolsOpen
                  ? "opacity-100 scale-100 pointer-events-auto"
                  : "opacity-0 scale-95 pointer-events-none"
              }`}
            >
              <div className="rounded-xl border border-slate-200 bg-white shadow-xl p-1.5 flex flex-col gap-0.5">
                <Link
                  href="/tools/cost-calculator"
                  className="flex items-center justify-between rounded-lg px-3 py-2 text-xs font-semibold text-slate-800 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                >
                  <span>AI Cost Calculator</span>
                  <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-[0.55rem] font-extrabold uppercase text-emerald-700">
                    Calculator
                  </span>
                </Link>
                <Link
                  href="/tools/vram-calculator"
                  className="flex items-center justify-between rounded-lg px-3 py-2 text-xs font-semibold text-slate-800 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                >
                  <span>VRAM Hardware Estimator</span>
                  <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-[0.55rem] font-extrabold uppercase text-emerald-700">
                    GPU
                  </span>
                </Link>
                <Link
                  href="/tools/token-calculator"
                  className="flex items-center justify-between rounded-lg px-3 py-2 text-xs font-semibold text-slate-800 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                >
                  <span>Token Counter</span>
                  <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-[0.55rem] font-extrabold uppercase text-emerald-700">
                    Tokens
                  </span>
                </Link>
                <Link
                  href="/tools/context-calculator"
                  className="flex items-center justify-between rounded-lg px-3 py-2 text-xs font-semibold text-slate-800 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                >
                  <span>Context Capacity</span>
                  <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-[0.55rem] font-extrabold uppercase text-emerald-700">
                    Context
                  </span>
                </Link>
                <Link
                  href="/tools/model-finder"
                  className="flex items-center justify-between rounded-lg px-3 py-2 text-xs font-semibold text-slate-800 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                >
                  <span>Smart Model Finder</span>
                  <span className="rounded-full bg-blue-100 px-2 py-0.5 text-[0.55rem] font-extrabold uppercase text-blue-700">
                    Finder
                  </span>
                </Link>
              </div>
            </div>
          </div>

          <Link
            href="/dashboard"
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md transition-colors text-xs font-semibold ${
              pathname === "/dashboard" ? "bg-slate-100 text-blue-600 font-bold" : "text-slate-700 hover:text-blue-600"
            }`}
          >
            <LayoutDashboardIcon className="w-3.5 h-3.5" />
            <span>Saved</span>
            {favorites.length > 0 && (
              <span className="flex h-4 w-4 items-center justify-center rounded-full bg-rose-500 text-[0.65rem] font-bold text-white">
                {favorites.length}
              </span>
            )}
          </Link>

          {/* Compare Link */}
          <Link
            href="/compare"
            className="relative flex items-center gap-1.5 rounded-lg bg-neutral-900 hover:bg-black text-white px-3 py-1.5 text-xs font-semibold transition-all shadow-sm ml-1"
          >
            <CompareIcon className="w-3.5 h-3.5" />
            <span>Compare</span>
            {compareList.length > 0 && (
              <span className="flex h-4 w-4 items-center justify-center rounded-full bg-blue-500 text-[0.65rem] font-bold text-white">
                {compareList.length}
              </span>
            )}
          </Link>
        </nav>

        {/* Mobile Controls (Compare link + Hamburger button) */}
        <div className="flex lg:hidden items-center gap-2">
          <Link
            href="/compare"
            className="flex items-center gap-1 rounded-lg bg-neutral-900 text-white px-2.5 py-1.5 text-xs font-semibold"
          >
            <CompareIcon className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Compare</span>
            {compareList.length > 0 && (
              <span className="flex h-4 w-4 items-center justify-center rounded-full bg-blue-500 text-[0.65rem] font-bold text-white">
                {compareList.length}
              </span>
            )}
          </Link>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-700 hover:bg-slate-100 transition-colors"
          >
            {mobileMenuOpen ? <CloseIcon className="w-5 h-5" /> : <MenuIcon className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-4 py-4 space-y-4 shadow-xl max-h-[85vh] overflow-y-auto">
          {/* Mobile Search Input */}
          <form onSubmit={handleSearchSubmit} className="relative w-full">
            <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearchChange}
              placeholder="Search 11,000+ AI models..."
              aria-label="Search models"
              className="w-full pl-9 pr-4 py-2 text-xs bg-slate-100 border border-slate-200 rounded-xl text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:border-blue-500 focus:bg-white"
            />
          </form>

          {/* Primary Quick Links */}
          <div className="grid grid-cols-2 gap-2 text-xs font-bold">
            <Link
              href="/solve"
              className="flex items-center justify-between p-3 rounded-xl bg-blue-50 text-blue-700 min-h-[44px]"
            >
              <span>Solution Wizard 🪄</span>
              <span className="text-[0.55rem] bg-blue-200 text-blue-800 px-1.5 py-0.5 rounded-full font-black uppercase">
                New
              </span>
            </Link>

            <Link
              href="/playground"
              className="flex items-center justify-between p-3 rounded-xl bg-purple-50 text-purple-700 min-h-[44px]"
            >
              <span>WebGPU Playground 🎮</span>
              <span className="text-[0.55rem] bg-purple-200 text-purple-800 px-1.5 py-0.5 rounded-full font-black uppercase">
                WebGPU
              </span>
            </Link>
          </div>

          {/* Catalog Group */}
          <div>
            <span className="text-[0.65rem] font-extrabold uppercase tracking-wider text-slate-400 block mb-2 px-1">
              Model Catalog & Directories
            </span>
            <div className="grid grid-cols-2 gap-2 text-xs font-semibold text-slate-800">
              <Link href="/models" className="p-3 rounded-xl bg-slate-50 hover:bg-blue-50 hover:text-blue-600 transition-colors">
                All Models (11k+)
              </Link>
              <Link href="/cloud" className="p-3 rounded-xl bg-slate-50 hover:bg-blue-50 hover:text-blue-600 transition-colors">
                Cloud API Models
              </Link>
              <Link href="/local" className="p-3 rounded-xl bg-slate-50 hover:bg-blue-50 hover:text-blue-600 transition-colors">
                Local Models (Ollama)
              </Link>
              <Link href="/telemetry" className="p-3 rounded-xl bg-slate-50 hover:bg-blue-50 hover:text-blue-600 transition-colors">
                Live Telemetry ⚡
              </Link>
            </div>
          </div>

          {/* Developer Tools Group */}
          <div>
            <span className="text-[0.65rem] font-extrabold uppercase tracking-wider text-slate-400 block mb-2 px-1">
              Developer Tools
            </span>
            <div className="grid grid-cols-2 gap-2 text-xs font-semibold text-slate-800">
              <Link href="/tools/model-finder" className="p-3 rounded-xl bg-blue-50 text-blue-700 font-extrabold hover:bg-blue-100 transition-colors flex items-center justify-between col-span-2 sm:col-span-1">
                <span>Smart Model Finder 🔍</span>
                <span className="text-[0.55rem] bg-blue-200 text-blue-800 px-1.5 py-0.5 rounded-full font-black uppercase">
                  Finder
                </span>
              </Link>
              <Link href="/tools/cost-calculator" className="p-3 rounded-xl bg-slate-50 hover:bg-blue-50 hover:text-blue-600 transition-colors">
                AI Cost Calculator
              </Link>
              <Link href="/tools/vram-calculator" className="p-3 rounded-xl bg-slate-50 hover:bg-blue-50 hover:text-blue-600 transition-colors">
                VRAM Estimator
              </Link>
              <Link href="/tools/token-calculator" className="p-3 rounded-xl bg-slate-50 hover:bg-blue-50 hover:text-blue-600 transition-colors">
                Token Counter
              </Link>
              <Link href="/tools/context-calculator" className="p-3 rounded-xl bg-slate-50 hover:bg-blue-50 hover:text-blue-600 transition-colors">
                Context Capacity
              </Link>
            </div>
          </div>

          {/* Workspace Links */}
          <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-slate-700">
            <Link href="/dashboard" className="flex items-center gap-1.5 p-2 hover:text-blue-600">
              <LayoutDashboardIcon className="w-4 h-4" />
              <span>Saved Items ({favorites.length})</span>
            </Link>
            <Link href="/admin" className="p-2 text-slate-500 hover:text-slate-800">
              Admin Panel
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
