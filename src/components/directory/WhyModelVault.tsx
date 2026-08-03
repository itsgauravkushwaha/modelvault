import { CheckIcon, CodeIcon, CompareIcon, CpuIcon, SearchIcon, SparklesIcon } from "./icons";

export const WhyModelVault = () => {
  const features = [
    {
      title: "520+ AI Models Index",
      description: "Comprehensive dataset indexing frontier and open-weight models with hardware, benchmark, and context specifications.",
      icon: SparklesIcon,
      accent: "from-blue-500 to-indigo-600",
    },
    {
      title: "Side-by-Side Comparison",
      description: "Compare up to 4 models simultaneously across context length, benchmark scores, licensing terms, and pricing rates.",
      icon: CompareIcon,
      accent: "from-purple-500 to-pink-600",
    },
    {
      title: "Advanced Search & Filtering",
      description: "Instant real-time search across modalities, providers, tasks, VRAM requirements, and deployment setups.",
      icon: SearchIcon,
      accent: "from-sky-500 to-cyan-600",
    },
    {
      title: "Verified Benchmark Data",
      description: "Standardized performance scores including MMLU, HumanEval, SWE-bench, and MATH across all leading architectures.",
      icon: CodeIcon,
      accent: "from-emerald-500 to-teal-600",
    },
    {
      title: "Transparent API & Hardware Rates",
      description: "Clear token cost breakdown for commercial APIs and VRAM hardware requirements for local deployments.",
      icon: SparklesIcon,
      accent: "from-amber-500 to-orange-600",
    },
    {
      title: "Native Local & Ollama Support",
      description: "Dedicated index of self-hostable open weights optimized for Ollama, vLLM, LM Studio, and local consumer GPUs.",
      icon: CpuIcon,
      accent: "from-blue-600 to-emerald-600",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {features.map((item) => {
        const IconComponent = item.icon;
        return (
          <div
            key={item.title}
            className="group relative flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-lg"
          >
            <div>
              <div className={`mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br ${item.accent} text-white shadow-md transition-transform duration-300 group-hover:scale-110`}>
                <IconComponent className="w-5 h-5" />
              </div>

              <h3 className="text-base font-extrabold text-slate-900 tracking-tight mb-2">
                {item.title}
              </h3>

              <p className="text-xs text-slate-600 leading-relaxed font-medium">
                {item.description}
              </p>
            </div>

            <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-[0.7rem] font-bold text-slate-400 group-hover:text-blue-600 transition-colors">
              <CheckIcon className="w-3.5 h-3.5 text-blue-600" />
              <span>Production Verified Specs</span>
            </div>
          </div>
        );
      })}
    </div>
  );
};
