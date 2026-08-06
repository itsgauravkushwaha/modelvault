import { createClient } from "@supabase/supabase-js";
import path from "path";
import fs from "fs";
import { loadEnvConfig } from "@next/env";

// Load environment variables from .env.local
loadEnvConfig(process.cwd());

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!SUPABASE_URL || !SUPABASE_ANON_KEY || SUPABASE_URL.includes("placeholder")) {
  console.error("❌ Valid NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY are required in .env.local.");
  process.exit(1);
}

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

function cleanSlug(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function formatName(text: string): string {
  const parts = text.split("/");
  const modelName = parts.length > 1 ? parts[1] : parts[0];
  return modelName
    .replace(/[-_]/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

/* ------------------------------------------------------------------ */
/*  1. OpenRouter API Ingestion                                       */
/* ------------------------------------------------------------------ */
async function fetchOpenRouterModels(): Promise<any[]> {
  console.log("🌐 Fetching commercial & hosted API models from OpenRouter API...");
  try {
    const response = await fetch("https://openrouter.ai/api/v1/models");
    if (!response.ok) return [];
    const json = await response.json();
    const data = json.data || [];

    console.log(`✅ OpenRouter API returned ${data.length} models.`);

    return data.map((item: any) => {
      const slug = cleanSlug(`openrouter-${item.id}`);
      const rawName = item.name || item.id;
      const name = rawName.includes(":") ? rawName.split(":")[1].trim() : rawName;
      const providerName = item.id.split("/")[0] || "Cloud API";
      const promptPrice = item.pricing?.prompt ? (parseFloat(item.pricing.prompt) * 1_000_000).toFixed(2) : "N/A";
      const completionPrice = item.pricing?.completion ? (parseFloat(item.pricing.completion) * 1_000_000).toFixed(2) : "N/A";
      const contextWindow = item.context_length ? `${Math.round(item.context_length / 1000)}k` : "128k";

      return {
        slug,
        name,
        provider: providerName.charAt(0).toUpperCase() + providerName.slice(1),
        providerSlug: cleanSlug(providerName),
        description: item.description || `${name} hosted commercial API model indexed from OpenRouter. Context length: ${contextWindow}.`,
        type: "Cloud API",
        useCases: ["text-chat", "reasoning"],
        modalities: ["text"],
        availability: "cloud",
        hasApi: true,
        hasSelfHost: false,
        license: "Commercial API",
        pricing: "paid",
        pricingDetails: `$${promptPrice}/1M in, $${completionPrice}/1M out`,
        contextWindow,
        benchmarks: [],
        releaseDate: "2024-01-01",
        lastUpdated: new Date().toISOString().split("T")[0],
        lastVerified: new Date().toISOString().split("T")[0],
        strengths: ["Cloud API Endpoint", "Instant Inference", "Zero Hardware Setup"],
        weaknesses: ["Requires API Key & Per-Token Pricing"],
        docUrl: `https://openrouter.ai/models/${item.id}`,
        playgroundUrl: `https://openrouter.ai/models/${item.id}`,
        modelCardUrl: `https://openrouter.ai/models/${item.id}`,
        tags: ["cloud-api", "openrouter", providerName],
        aliases: [item.id],
        featured: true,
        trending: true,
        isDeprecated: false,
        bestForCategory: "text-chat",
      };
    });
  } catch (err) {
    console.error("Error fetching OpenRouter models:", err);
    return [];
  }
}

/* ------------------------------------------------------------------ */
/*  2. CivitAI API Ingestion (Image Gen & FLUX Models)                */
/* ------------------------------------------------------------------ */
async function fetchCivitAIModels(): Promise<any[]> {
  console.log("🎨 Fetching top Image & Vision models from CivitAI API...");
  try {
    const response = await fetch("https://civitai.com/api/v1/models?limit=100&types=Checkpoint&sort=Most%20Downloaded");
    if (!response.ok) return [];
    const json = await response.json();
    const items = json.items || [];

    console.log(`✅ CivitAI API returned ${items.length} top checkpoint models.`);

    return items.map((item: any) => {
      const slug = cleanSlug(`civitai-${item.id}-${item.name}`);
      const downloads = item.stats?.downloadCount || 0;
      const rating = item.stats?.rating ? item.stats.rating.toFixed(1) : "4.8";

      return {
        slug,
        name: item.name,
        provider: item.creator?.username || "CivitAI Community",
        providerSlug: cleanSlug(item.creator?.username || "civitai"),
        description: `High-fidelity image generation checkpoint model on CivitAI (${downloads.toLocaleString()} downloads, ${rating}★ rating). Type: ${item.type || "Checkpoint"}.`,
        type: "Image Generation",
        useCases: ["image-gen"],
        modalities: ["image"],
        availability: "local",
        hasApi: false,
        hasSelfHost: true,
        license: item.allowNoCredit ? "Open Model" : "Creative Commons",
        pricing: "open-weights",
        pricingDetails: "Free Download Checkpoint / LoRA",
        contextWindow: "N/A",
        hardwareRequirements: "NVIDIA GPU (8GB+ VRAM recommended for SDXL / FLUX)",
        benchmarks: [{ name: "Community Rating", score: rating, maxScore: 5 }],
        releaseDate: item.createdAt ? item.createdAt.split("T")[0] : "2024-01-01",
        lastUpdated: new Date().toISOString().split("T")[0],
        lastVerified: new Date().toISOString().split("T")[0],
        strengths: ["Photorealistic Image Generation", "Stable Diffusion / FLUX Architecture", "Free Download"],
        weaknesses: ["Requires local GPU or WebUI (ComfyUI / Automatic1111)"],
        docUrl: `https://civitai.com/models/${item.id}`,
        playgroundUrl: `https://civitai.com/models/${item.id}`,
        modelCardUrl: `https://civitai.com/models/${item.id}`,
        tags: ["image-gen", "stable-diffusion", "civitai", item.type?.toLowerCase() || "checkpoint"],
        aliases: [`civitai-${item.id}`],
        featured: downloads > 50000,
        trending: downloads > 20000,
        isDeprecated: false,
        bestForCategory: "image-gen",
      };
    });
  } catch (err) {
    console.error("Error fetching CivitAI models:", err);
    return [];
  }
}

/* ------------------------------------------------------------------ */
/*  Main Multi-Source Ingestion Task                                  */
/* ------------------------------------------------------------------ */
async function runMultiSourceIngestion() {
  const openRouterModels = await fetchOpenRouterModels();
  const civitaiModels = await fetchCivitAIModels();

  const allNewModels = [...openRouterModels, ...civitaiModels];
  console.log(`\n📦 Total new multi-source models to upsert: ${allNewModels.length}`);

  if (allNewModels.length === 0) return;

  // Batch upsert into Supabase
  const BATCH_SIZE = 250;
  let successCount = 0;
  let failCount = 0;

  for (let i = 0; i < allNewModels.length; i += BATCH_SIZE) {
    const chunk = allNewModels.slice(i, i + BATCH_SIZE);
    const { error } = await supabase.from("models").upsert(chunk, { onConflict: "slug" });

    if (error) {
      console.error(`❌ Batch ${i / BATCH_SIZE + 1} error:`, error.message);
      failCount += chunk.length;
    } else {
      successCount += chunk.length;
      console.log(`✅ Progress: ${successCount} / ${allNewModels.length} multi-source models upserted into Supabase...`);
    }
  }

  // Update local JSON database file src/data/models_db.json
  const DB_PATH = path.join(process.cwd(), "src/data/models_db.json");
  let localDb: any[] = [];
  if (fs.existsSync(DB_PATH)) {
    localDb = JSON.parse(fs.readFileSync(DB_PATH, "utf-8"));
  }

  const mergedMap = new Map(localDb.map((m) => [m.slug, m]));
  allNewModels.forEach((m) => mergedMap.set(m.slug, m));
  const finalLocalList = Array.from(mergedMap.values());

  fs.writeFileSync(DB_PATH, JSON.stringify(finalLocalList, null, 2), "utf-8");
  console.log(`💾 Local JSON database updated: ${finalLocalList.length} total models stored across HuggingFace, OpenRouter, and CivitAI!`);
}

runMultiSourceIngestion().catch((err) => {
  console.error("Fatal error during multi-source ingestion:", err);
  process.exit(1);
});
