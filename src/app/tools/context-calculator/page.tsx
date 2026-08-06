import type { Metadata } from "next";
import { ContextCalculatorView } from "@/views/context-calculator";

export const metadata: Metadata = {
  title: "Context Window Calculator — How Much Fits in Your LLM? | ModelVault",
  description:
    "Calculate how many pages, RAG chunks, and code files fit inside any AI model's context window. Compare capacity across GPT-4o, Claude, Gemini, and 500+ models.",
  openGraph: {
    title: "Context Window Calculator — How Much Fits in Your LLM?",
    description:
      "Calculate document capacity, RAG chunk limits, and context fill ratios for any AI model.",
  },
};

export default function ContextCalculatorPage() {
  return <ContextCalculatorView />;
}
