import { generateMetadata as baseGenerateMetadata } from "@/utils/seo/generate-page-metadata";
import { PlaygroundView } from "@/views/playground";

export const metadata = baseGenerateMetadata({
  title: "100% Private WebGPU In-Browser AI Playground | ModelVault",
  description:
    "Run small open-weights AI models (SmolLM2, Qwen 2.5 0.5B, LaMini) live directly inside your web browser using WebGPU. 100% private, zero server cost, zero API keys required.",
  url: "/playground",
});

export default function PlaygroundPage() {
  return <PlaygroundView />;
}
