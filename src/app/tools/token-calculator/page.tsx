import type { Metadata } from "next";
import { TokenCalculatorView } from "@/views/token-calculator";

export const metadata: Metadata = {
  title: "Token & Pricing Estimator — Calculate AI API Costs per Prompt | ModelVault",
  description:
    "Paste your prompt text, get exact token counts, and compare costs across GPT-4o, Claude 3.5, DeepSeek, Gemini, and 20+ AI models. Free AI token calculator.",
  openGraph: {
    title: "Token & Pricing Estimator — Calculate AI API Costs per Prompt",
    description:
      "Paste text, get token counts, and compare costs across 20+ AI models instantly.",
  },
};

export default function TokenCalculatorPage() {
  return <TokenCalculatorView />;
}
