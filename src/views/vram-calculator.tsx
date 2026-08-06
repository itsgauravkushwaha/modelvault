"use client";

import { useState, useMemo } from "react";
import { Header } from "@/components/directory/Header";
import { Footer } from "@/components/directory/Footer";
import { CpuIcon, CheckIcon } from "@/components/directory/icons";

/* ------------------------------------------------------------------ */
/*  Model size presets                                                  */
/* ------------------------------------------------------------------ */
interface ModelSizePreset {
  label: string;
  params: number; // billions
  description: string;
}

const MODEL_SIZES: ModelSizePreset[] = [
  { label: "1B", params: 1, description: "Phi-3 Mini, TinyLlama" },
  { label: "3B", params: 3, description: "Phi-3.5 Mini, StableLM" },
  { label: "7B", params: 7, description: "Mistral 7B, Llama 3.1 8B" },
  { label: "13B", params: 13, description: "Llama 2 13B, CodeLlama 13B" },
  { label: "34B", params: 34, description: "CodeLlama 34B, Yi 34B" },
  { label: "70B", params: 70, description: "Llama 3.1 70B, Qwen 2.5 72B" },
  { label: "140B", params: 140, description: "Falcon 180B, large MOE models" },
  { label: "405B", params: 405, description: "Llama 3.1 405B" },
  { label: "671B", params: 671, description: "DeepSeek V3 (MOE)" },
];

/* ------------------------------------------------------------------ */
/*  Quantization formats                                                */
/* ------------------------------------------------------------------ */
interface QuantFormat {
  label: string;
  bitsPerParam: number;
  description: string;
  overhead: number; // multiplier for KV cache / framework overhead
}

const QUANT_FORMATS: QuantFormat[] = [
  { label: "GGUF Q2_K", bitsPerParam: 2.5, description: "Extreme compression, noticeable quality loss", overhead: 1.1 },
  { label: "GGUF Q4_K_M", bitsPerParam: 4.5, description: "Best balance of quality and size (recommended)", overhead: 1.1 },
  { label: "GGUF Q5_K_M", bitsPerParam: 5.5, description: "High quality, moderate compression", overhead: 1.1 },
  { label: "GGUF Q6_K", bitsPerParam: 6.5, description: "Near-lossless quality", overhead: 1.1 },
  { label: "GGUF Q8_0", bitsPerParam: 8, description: "Virtually lossless, large files", overhead: 1.1 },
  { label: "AWQ INT4", bitsPerParam: 4, description: "Activation-aware 4-bit (GPU only)", overhead: 1.2 },
  { label: "GPTQ INT4", bitsPerParam: 4, description: "Post-training 4-bit quantization (GPU only)", overhead: 1.2 },
  { label: "FP16 (Half)", bitsPerParam: 16, description: "Full precision half-float, highest quality", overhead: 1.2 },
  { label: "FP32 (Full)", bitsPerParam: 32, description: "Full 32-bit precision (training only)", overhead: 1.2 },
];

/* ------------------------------------------------------------------ */
/*  GPU database                                                        */
/* ------------------------------------------------------------------ */
interface GPU {
  name: string;
  vramGB: number;
  tier: "consumer" | "prosumer" | "datacenter";
  price: string;
}

const GPUS: GPU[] = [
  // Consumer
  { name: "RTX 3060", vramGB: 12, tier: "consumer", price: "~$300" },
  { name: "RTX 3070 Ti", vramGB: 8, tier: "consumer", price: "~$400" },
  { name: "RTX 3090", vramGB: 24, tier: "consumer", price: "~$800" },
  { name: "RTX 4060 Ti 16GB", vramGB: 16, tier: "consumer", price: "~$450" },
  { name: "RTX 4070 Ti Super", vramGB: 16, tier: "consumer", price: "~$800" },
  { name: "RTX 4080 Super", vramGB: 16, tier: "consumer", price: "~$1,000" },
  { name: "RTX 4090", vramGB: 24, tier: "consumer", price: "~$1,600" },
  { name: "RTX 5090", vramGB: 32, tier: "consumer", price: "~$2,000" },
  // Prosumer
  { name: "RTX A5000", vramGB: 24, tier: "prosumer", price: "~$2,500" },
  { name: "RTX A6000", vramGB: 48, tier: "prosumer", price: "~$4,500" },
  // Datacenter
  { name: "A100 40GB", vramGB: 40, tier: "datacenter", price: "~$10,000" },
  { name: "A100 80GB", vramGB: 80, tier: "datacenter", price: "~$15,000" },
  { name: "H100 80GB", vramGB: 80, tier: "datacenter", price: "~$25,000" },
  { name: "H200 141GB", vramGB: 141, tier: "datacenter", price: "~$35,000" },
];

/* ------------------------------------------------------------------ */
/*  VRAM calculation                                                    */
/* ------------------------------------------------------------------ */
function calculateVRAM(params: number, bitsPerParam: number, overhead: number): number {
  // params in billions, result in GB
  const baseGB = (params * bitsPerParam) / 8;
  return baseGB * overhead;
}

/* ------------------------------------------------------------------ */
/*  View                                                                */
/* ------------------------------------------------------------------ */
export const VramCalculatorView = () => {
  const [selectedSize, setSelectedSize] = useState(7);
  const [customSize, setCustomSize] = useState("");
  const [selectedQuantIdx, setSelectedQuantIdx] = useState(1); // Q4_K_M default

  const effectiveParams = customSize ? parseFloat(customSize) || selectedSize : selectedSize;
  const quant = QUANT_FORMATS[selectedQuantIdx];
  const vramRequired = useMemo(
    () => calculateVRAM(effectiveParams, quant.bitsPerParam, quant.overhead),
    [effectiveParams, quant]
  );

  const gpuResults = useMemo(() => {
    return GPUS.map((gpu) => ({
      ...gpu,
      canRun: gpu.vramGB >= vramRequired,
      utilizationPct: Math.min(100, (vramRequired / gpu.vramGB) * 100),
    }));
  }, [vramRequired]);

  const compatibleCount = gpuResults.filter((g) => g.canRun).length;

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      <Header />

      <main className="flex-1 py-12">
        <div className="shell max-w-5xl">
          {/* Header */}
          <div className="mb-10 text-center max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1 text-xs font-semibold text-emerald-600 mb-3">
              <CpuIcon className="w-3.5 h-3.5" />
              <span>Local VRAM Hardware Estimator</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Will Your{" "}
              <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                GPU Run It
              </span>
              ?
            </h1>

            <p className="text-xs sm:text-sm text-slate-600 font-medium mt-3 leading-relaxed">
              Calculate exact GPU VRAM requirements for any local LLM based on parameter count and quantization format.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Left Column: Inputs */}
            <div className="lg:col-span-1 space-y-6">
              {/* Model Size */}
              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <h2 className="text-sm font-extrabold text-slate-900 mb-3">Model Size</h2>
                <div className="grid grid-cols-3 gap-2 mb-3">
                  {MODEL_SIZES.map((size) => (
                    <button
                      key={size.label}
                      onClick={() => { setSelectedSize(size.params); setCustomSize(""); }}
                      className={`rounded-xl px-2 py-2 text-xs font-extrabold transition-all ${
                        selectedSize === size.params && !customSize
                          ? "bg-emerald-600 text-white shadow-md"
                          : "bg-slate-100 text-slate-700 hover:bg-emerald-50 hover:text-emerald-700"
                      }`}
                    >
                      {size.label}
                    </button>
                  ))}
                </div>

                <div>
                  <label htmlFor="custom-params" className="block text-[0.65rem] font-bold text-slate-500 uppercase tracking-wider mb-1">
                    Or enter custom (billions)
                  </label>
                  <input
                    id="custom-params"
                    type="number"
                    value={customSize}
                    onChange={(e) => setCustomSize(e.target.value)}
                    placeholder="e.g. 14"
                    className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm font-bold text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20"
                  />
                </div>
              </div>

              {/* Quantization */}
              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <h2 className="text-sm font-extrabold text-slate-900 mb-3">Quantization Format</h2>
                <div className="space-y-2">
                  {QUANT_FORMATS.map((q, idx) => (
                    <button
                      key={q.label}
                      onClick={() => setSelectedQuantIdx(idx)}
                      className={`w-full flex items-start gap-2 rounded-xl px-3 py-2.5 text-left transition-all ${
                        selectedQuantIdx === idx
                          ? "bg-emerald-50 border border-emerald-300"
                          : "border border-transparent hover:bg-slate-50"
                      }`}
                    >
                      <div className={`mt-0.5 h-4 w-4 rounded-full border-2 flex items-center justify-center shrink-0 ${
                        selectedQuantIdx === idx ? "border-emerald-600 bg-emerald-600" : "border-slate-300"
                      }`}>
                        {selectedQuantIdx === idx && <CheckIcon className="w-2.5 h-2.5 text-white" />}
                      </div>
                      <div>
                        <span className="block text-xs font-extrabold text-slate-900">{q.label}</span>
                        <span className="block text-[0.6rem] font-medium text-slate-500">{q.description}</span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Results */}
            <div className="lg:col-span-2 space-y-6">
              {/* VRAM Result */}
              <div className="rounded-2xl border border-emerald-200 bg-gradient-to-br from-emerald-50 to-teal-50 p-6 shadow-sm">
                <div className="text-center">
                  <span className="text-[0.65rem] font-extrabold text-emerald-600 uppercase tracking-widest">
                    Estimated VRAM Required
                  </span>
                  <div className="text-4xl sm:text-5xl font-extrabold text-emerald-700 mt-1">
                    {vramRequired.toFixed(1)} GB
                  </div>
                  <p className="text-xs font-bold text-emerald-600/70 mt-1">
                    {effectiveParams}B parameters × {quant.bitsPerParam}-bit × {quant.overhead}x overhead
                  </p>
                </div>

                <div className="mt-4 flex items-center justify-center gap-4 text-xs font-bold">
                  <span className={`${compatibleCount > 0 ? "text-emerald-700" : "text-red-600"}`}>
                    {compatibleCount} of {GPUS.length} GPUs compatible
                  </span>
                </div>
              </div>

              {/* GPU Compatibility Table */}
              <div className="rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden">
                <div className="px-6 py-4 border-b border-slate-100">
                  <h2 className="text-sm font-extrabold text-slate-900">GPU Compatibility</h2>
                </div>

                <div className="divide-y divide-slate-100">
                  {gpuResults.map((gpu) => (
                    <div
                      key={gpu.name}
                      className={`flex items-center gap-4 px-6 py-3.5 transition-colors ${
                        gpu.canRun ? "hover:bg-emerald-50/50" : "opacity-50"
                      }`}
                    >
                      {/* Status */}
                      <div className={`h-6 w-6 rounded-full flex items-center justify-center shrink-0 ${
                        gpu.canRun
                          ? "bg-emerald-100 text-emerald-600"
                          : "bg-red-100 text-red-500"
                      }`}>
                        {gpu.canRun ? (
                          <CheckIcon className="w-3.5 h-3.5" />
                        ) : (
                          <span className="text-[0.6rem] font-extrabold">✗</span>
                        )}
                      </div>

                      {/* GPU Info */}
                      <div className="flex-1 min-w-0">
                        <span className="block text-xs font-extrabold text-slate-900">{gpu.name}</span>
                        <span className="block text-[0.6rem] font-bold text-slate-500">
                          {gpu.vramGB} GB VRAM • {gpu.tier} • {gpu.price}
                        </span>
                      </div>

                      {/* Utilization Bar */}
                      <div className="w-32 shrink-0">
                        <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                          <div
                            className={`h-full rounded-full transition-all duration-500 ${
                              gpu.utilizationPct > 95
                                ? "bg-red-500"
                                : gpu.utilizationPct > 75
                                ? "bg-amber-500"
                                : "bg-emerald-500"
                            }`}
                            style={{ width: `${gpu.utilizationPct}%` }}
                          />
                        </div>
                        <span className="text-[0.55rem] font-bold text-slate-400 mt-0.5 block text-right">
                          {gpu.utilizationPct.toFixed(0)}% used
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};
