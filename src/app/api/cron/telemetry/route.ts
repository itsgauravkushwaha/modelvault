import { NextResponse } from "next/server";

export interface ProviderTelemetry {
  provider: string;
  slug: string;
  region: string;
  status: "operational" | "degraded" | "outage";
  latencyMs: number;
  ttftMs: number;
  tokensPerSec: number;
  uptime24h: number;
  lastChecked: string;
}

export const TELEMETRY_DATA: ProviderTelemetry[] = [
  {
    provider: "OpenAI",
    slug: "openai",
    region: "US-East (N. Virginia)",
    status: "operational",
    latencyMs: 142,
    ttftMs: 280,
    tokensPerSec: 84.5,
    uptime24h: 99.98,
    lastChecked: "Just now",
  },
  {
    provider: "Anthropic",
    slug: "anthropic",
    region: "US-East (AWS us-east-1)",
    status: "operational",
    latencyMs: 165,
    ttftMs: 310,
    tokensPerSec: 78.2,
    uptime24h: 99.95,
    lastChecked: "Just now",
  },
  {
    provider: "DeepSeek API",
    slug: "deepseek",
    region: "Asia-East & US-West",
    status: "operational",
    latencyMs: 195,
    ttftMs: 340,
    tokensPerSec: 92.4,
    uptime24h: 99.90,
    lastChecked: "Just now",
  },
  {
    provider: "Google Gemini API",
    slug: "google",
    region: "Global (Google Cloud)",
    status: "operational",
    latencyMs: 110,
    ttftMs: 220,
    tokensPerSec: 115.0,
    uptime24h: 99.99,
    lastChecked: "Just now",
  },
  {
    provider: "Groq LPU",
    slug: "groq",
    region: "US-West (Oregon)",
    status: "operational",
    latencyMs: 35,
    ttftMs: 65,
    tokensPerSec: 485.0,
    uptime24h: 99.92,
    lastChecked: "Just now",
  },
  {
    provider: "Mistral AI",
    slug: "mistral",
    region: "EU-West (Paris)",
    status: "operational",
    latencyMs: 155,
    ttftMs: 295,
    tokensPerSec: 72.8,
    uptime24h: 99.96,
    lastChecked: "Just now",
  },
  {
    provider: "Together AI",
    slug: "together",
    region: "US-East & EU-Central",
    status: "operational",
    latencyMs: 125,
    ttftMs: 240,
    tokensPerSec: 135.2,
    uptime24h: 99.89,
    lastChecked: "Just now",
  },
];

export async function GET() {
  return NextResponse.json({
    success: true,
    timestamp: new Date().toISOString(),
    telemetry: TELEMETRY_DATA,
  });
}
