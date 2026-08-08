import { generateMetadata as baseGenerateMetadata } from "@/utils/seo/generate-page-metadata";
import { TelemetryView } from "@/views/telemetry";

export const metadata = baseGenerateMetadata({
  title: "Live Provider API Latency & Telemetry Dashboard | ModelVault",
  description:
    "Track real-time API latency, Tokens/Sec throughput, Time-To-First-Token (TTFT), and 24-hour uptime SLAs across OpenAI, Anthropic, DeepSeek, Google Gemini, Groq, and Mistral endpoints.",
  url: "/telemetry",
});

export default function TelemetryPage() {
  return <TelemetryView />;
}
