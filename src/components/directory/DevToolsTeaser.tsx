import Link from "next/link";
import { ArrowRightIcon, CodeIcon, CpuIcon, SparklesIcon } from "./icons";

interface Tool {
  title: string;
  description: string;
  icon: React.FC<{ className?: string }>;
  accent: string;
  isLive: boolean;
  href: string;
}

const tools: Tool[] = [
  {
    title: "AI API Cost Calculator",
    description:
      "Estimate monthly API expenditure based on projected input/output token volume across OpenAI, Anthropic, Google, DeepSeek, and Mistral.",
    icon: SparklesIcon,
    accent: "text-blue-500 bg-blue-500/10 border-blue-500/20",
    isLive: true,
    href: "/tools/cost-calculator",
  },
  {
    title: "Context Window Calculator",
    description:
      "Calculate document page capacity, RAG chunk limits, and context window fill ratios for long-context LLMs.",
    icon: CodeIcon,
    accent: "text-purple-500 bg-purple-500/10 border-purple-500/20",
    isLive: false,
    href: "/tools",
  },
  {
    title: "Token & Pricing Estimator",
    description:
      "Analyze raw prompt text to estimate exact token counts and compare generation costs across 20+ models.",
    icon: SparklesIcon,
    accent: "text-sky-500 bg-sky-500/10 border-sky-500/20",
    isLive: false,
    href: "/tools",
  },
  {
    title: "Local VRAM Hardware Estimator",
    description:
      "Determine exact GPU VRAM requirements for quantization levels (GGUF Q4, AWQ INT4, FP16) before downloading weights.",
    icon: CpuIcon,
    accent: "text-emerald-500 bg-emerald-500/10 border-emerald-500/20",
    isLive: false,
    href: "/tools",
  },
];

export const DevToolsTeaser = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {tools.map((tool) => {
        const IconComponent = tool.icon;

        const cardContent = (
          <div
            className={`group relative flex flex-col justify-between rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm transition-all duration-300 ${
              tool.isLive
                ? "hover:border-blue-300 hover:shadow-md cursor-pointer"
                : "hover:border-slate-300"
            }`}
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <div
                  className={`flex h-9 w-9 items-center justify-center rounded-xl ${tool.accent} border`}
                >
                  <IconComponent className="w-4 h-4" />
                </div>
                {tool.isLive ? (
                  <span className="rounded-full bg-emerald-100 px-2.5 py-0.5 text-[0.65rem] font-extrabold uppercase tracking-wider text-emerald-700 border border-emerald-200">
                    Live
                  </span>
                ) : (
                  <span className="rounded-full bg-slate-100 px-2.5 py-0.5 text-[0.65rem] font-extrabold uppercase tracking-wider text-slate-500">
                    Coming Soon
                  </span>
                )}
              </div>

              <h3 className="text-sm font-extrabold text-slate-900 tracking-tight mb-1.5 group-hover:text-blue-600 transition-colors">
                {tool.title}
              </h3>

              <p className="text-xs text-slate-600 leading-relaxed font-medium">
                {tool.description}
              </p>
            </div>

            <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[0.7rem] font-bold">
              {tool.isLive ? (
                <>
                  <span className="text-blue-600">Launch Tool</span>
                  <ArrowRightIcon className="w-3.5 h-3.5 text-blue-600 group-hover:translate-x-0.5 transition-transform" />
                </>
              ) : (
                <span className="text-slate-400">In Development</span>
              )}
            </div>
          </div>
        );

        return tool.isLive ? (
          <Link key={tool.title} href={tool.href} aria-label={`Open ${tool.title}`}>
            {cardContent}
          </Link>
        ) : (
          <div key={tool.title}>{cardContent}</div>
        );
      })}
    </div>
  );
};
