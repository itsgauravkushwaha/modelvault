import type { Metadata } from "next";
import { VramCalculatorView } from "@/views/vram-calculator";

export const metadata: Metadata = {
  title: "VRAM Calculator — GPU Memory Requirements for Local LLMs | ModelVault",
  description:
    "Calculate exact GPU VRAM requirements for running local LLMs. Supports GGUF Q4_K_M, AWQ INT4, GPTQ INT4, and FP16 quantization. See which GPUs can run your model.",
  openGraph: {
    title: "VRAM Calculator — GPU Memory Requirements for Local LLMs",
    description:
      "Calculate GPU VRAM requirements for any local LLM. Supports Q4, AWQ, GPTQ, and FP16 quantization formats.",
  },
};

export default function VramCalculatorPage() {
  return <VramCalculatorView />;
}
