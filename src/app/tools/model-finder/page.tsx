import type { Metadata } from "next";
import { ModelFinderView } from "@/views/model-finder";

export const metadata: Metadata = {
  title: "AI Model Finder — Find the Best AI Model for Your Use Case | ModelVault",
  description:
    "Answer 3 quick questions and get personalized AI model recommendations based on your use case, budget, and deployment needs. Compare GPT-4o, Claude, DeepSeek, Llama, and 500+ models instantly.",
  openGraph: {
    title: "AI Model Finder — Find the Best AI Model for Your Use Case",
    description:
      "Answer 3 quick questions and get personalized AI model recommendations. Compare 500+ models instantly.",
  },
};

export default function ModelFinderPage() {
  return <ModelFinderView />;
}
