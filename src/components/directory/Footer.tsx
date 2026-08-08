import Link from "next/link";
import { SparklesIcon } from "./icons";

export const Footer = () => {
  return (
    <footer className="w-full border-t border-slate-800 bg-slate-950 text-slate-400 py-16">
      <div className="shell grid grid-cols-1 md:grid-cols-5 gap-8 mb-12">
        {/* Brand Column */}
        <div className="md:col-span-2 flex flex-col gap-4">
          <div className="flex items-center gap-2.5 text-white font-extrabold text-lg tracking-tight">
            <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-blue-600 text-white shadow-md">
              <SparklesIcon className="h-4 w-4" />
            </div>
            <span>ModelVault</span>
          </div>

          <p className="text-xs text-slate-400 leading-relaxed max-w-sm font-medium">
            The open directory for discovering, comparing, and benchmarking cloud and local AI models. Built for engineers, researchers, and technical leaders.
          </p>

          <div className="flex items-center gap-2 pt-1">
            <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-[0.7rem] font-bold text-slate-400">All 11,000+ Model Specifications Active</span>
          </div>
        </div>

        {/* Column 1: Product */}
        <div className="flex flex-col gap-2.5 text-xs font-semibold">
          <span className="font-extrabold text-white uppercase tracking-wider text-[0.65rem]">
            Product
          </span>
          <Link href="/models" className="hover:text-white transition-colors">
            All AI Models Index
          </Link>
          <Link href="/compare" className="hover:text-white transition-colors">
            Comparison Matrix
          </Link>
          <Link href="/local" className="hover:text-white transition-colors">
            Local Models (Ollama)
          </Link>
          <Link href="/cloud" className="hover:text-white transition-colors">
            Cloud API Models
          </Link>
          <Link href="/solve" className="hover:text-white transition-colors font-bold text-blue-400">
            Real-World Solution Wizard 🪄
          </Link>
          <Link href="/tools/cost-calculator" className="hover:text-white transition-colors">
            AI Cost Calculator
          </Link>
        </div>

        {/* Column 2: Resources */}
        <div className="flex flex-col gap-2.5 text-xs font-semibold">
          <span className="font-extrabold text-white uppercase tracking-wider text-[0.65rem]">
            Resources
          </span>
          <Link href="/category/reasoning" className="hover:text-white transition-colors">
            Reasoning Models
          </Link>
          <Link href="/category/coding" className="hover:text-white transition-colors">
            Coding Agents
          </Link>
          <Link href="/category/vision-language" className="hover:text-white transition-colors">
            Vision-Language
          </Link>
          <Link href="/category/embeddings-rag" className="hover:text-white transition-colors">
            Embeddings & RAG
          </Link>
        </div>

        {/* Column 3: Community & Legal */}
        <div className="flex flex-col gap-2.5 text-xs font-semibold">
          <span className="font-extrabold text-white uppercase tracking-wider text-[0.65rem]">
            Management & Legal
          </span>
          <Link href="/admin/login" className="hover:text-white transition-colors font-bold text-blue-400">
            Admin Console ↗
          </Link>
          <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
          <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          <Link href="/disclaimer" className="hover:text-white transition-colors">Disclaimer</Link>
          <Link href="/about" className="hover:text-white transition-colors">About ModelVault</Link>
          <Link href="/contact" className="hover:text-white transition-colors">Contact Us</Link>
        </div>
      </div>

      <div className="shell border-t border-slate-800/80 pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 font-medium">
        <div>© 2026 ModelVault AI Directory. All model specifications verified.</div>

        <div className="mt-2 sm:mt-0 font-semibold">Built for high-performance AI workflows</div>
      </div>
    </footer>
  );
};
