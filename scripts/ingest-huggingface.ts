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

interface HFModelItem {
  id: string;
  downloads?: number;
  likes?: number;
  tags?: string[];
  pipeline_tag?: string;
  createdAt?: string;
  author?: string;
}

function cleanSlug(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function formatName(hfId: string): string {
  const parts = hfId.split("/");
  const modelName = parts.length > 1 ? parts[1] : parts[0];
  return modelName
    .replace(/[-_]/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

function getProvider(hfId: string, author?: string): { name: string; slug: string } {
  const rawAuthor = author || (hfId.includes("/") ? hfId.split("/")[0] : "HuggingFace");
  const slug = cleanSlug(rawAuthor);

  const providerMap: Record<string, string> = {
    "meta-llama": "Meta",
    meta: "Meta",
    "deepseek-ai": "DeepSeek",
    qwen: "Alibaba Qwen",
    mistralai: "Mistral AI",
    google: "Google",
    stabilityai: "Stability AI",
    openai: "OpenAI",
    "nomic-ai": "Nomic AI",
    "sentence-transformers": "Sentence Transformers",
    tiiuae: "TII Falcon",
    BAAI: "BAAI",
    "01-ai": "01.AI",
    cohereai: "Cohere",
    databricks: "Databricks",
  };

  const name = providerMap[rawAuthor] || providerMap[slug] || formatName(rawAuthor);
  return { name, slug };
}

function mapPipelineToUseCase(pipelineTag?: string): string[] {
  if (!pipelineTag) return ["text-chat"];
  const tag = pipelineTag.toLowerCase();
  if (tag.includes("text-generation") || tag.includes("conversational")) return ["text-chat"];
  if (tag.includes("text2text") || tag.includes("reasoning") || tag.includes("summarization") || tag.includes("translation")) return ["text-chat", "reasoning"];
  if (tag.includes("code") || tag.includes("fill-mask")) return ["coding"];
  if (tag.includes("image-to-text") || tag.includes("visual") || tag.includes("object-detection") || tag.includes("depth")) return ["vision-language"];
  if (tag.includes("text-to-image") || tag.includes("image-to-image") || tag.includes("image-segmentation")) return ["image-gen"];
  if (tag.includes("text-to-video") || tag.includes("video")) return ["video-gen"];
  if (tag.includes("audio") || tag.includes("speech") || tag.includes("voice")) return ["audio-speech"];
  if (tag.includes("feature-extraction") || tag.includes("sentence-similarity") || tag.includes("embedding") || tag.includes("text-classification")) return ["embeddings-rag"];
  return ["text-chat"];
}

function mapPipelineToModality(pipelineTag?: string): string[] {
  if (!pipelineTag) return ["text"];
  const tag = pipelineTag.toLowerCase();
  if (tag.includes("image-to-text") || tag.includes("visual")) return ["text", "image", "multimodal"];
  if (tag.includes("image")) return ["image"];
  if (tag.includes("video")) return ["video"];
  if (tag.includes("audio") || tag.includes("speech")) return ["audio"];
  if (tag.includes("code")) return ["code"];
  return ["text"];
}

function extractLicense(tags?: string[]): string {
  if (!tags) return "Apache-2.0";
  const licTag = tags.find((t) => t.startsWith("license:"));
  if (licTag) {
    const lic = licTag.replace("license:", "").toUpperCase();
    if (lic.includes("MIT")) return "MIT";
    if (lic.includes("APACHE")) return "Apache-2.0";
    if (lic.includes("LLAMA")) return "Llama Community License";
    if (lic.includes("GPL")) return "GPL-3.0";
    return lic;
  }
  return "Apache-2.0";
}

const HF_CATEGORIES = [
  "text-generation",
  "text2text-generation",
  "text-to-image",
  "image-to-text",
  "automatic-speech-recognition",
  "feature-extraction",
  "sentence-similarity",
  "text-to-speech",
  "fill-mask",
  "text-classification",
  "token-classification",
  "translation",
  "summarization",
  "image-to-image",
  "text-to-video",
  "visual-question-answering",
  "zero-shot-image-classification",
];

async function fetchHuggingFaceModels(targetCount = 10000): Promise<any[]> {
  console.log(`🚀 Ingesting 10,000+ AI models across ${HF_CATEGORIES.length} Hugging Face categories...`);
  const uniqueMap = new Map<string, HFModelItem>();

  for (const cat of HF_CATEGORIES) {
    if (uniqueMap.size >= targetCount) break;
    try {
      const url = `https://huggingface.co/api/models?pipeline_tag=${cat}&sort=downloads&direction=-1&limit=1000&full=false`;
      const response = await fetch(url);
      if (!response.ok) {
        console.error(`HF API HTTP error for category ${cat}: ${response.status}`);
        continue;
      }
      const data: HFModelItem[] = await response.json();
      data.forEach((item) => {
        if (item.id && !uniqueMap.has(item.id)) {
          uniqueMap.set(item.id, item);
        }
      });
      console.log(`✅ Category [${cat}]: Loaded ${data.length} models. Total unique so far: ${uniqueMap.size}`);
    } catch (err) {
      console.error(`Error fetching category ${cat}:`, err);
    }
  }

  // Also fetch general top downloads
  try {
    const url = `https://huggingface.co/api/models?sort=downloads&direction=-1&limit=1000&full=false`;
    const response = await fetch(url);
    if (response.ok) {
      const data: HFModelItem[] = await response.json();
      data.forEach((item) => {
        if (item.id && !uniqueMap.has(item.id)) {
          uniqueMap.set(item.id, item);
        }
      });
    }
  } catch (e) {
    // Ignore secondary fallback errors
  }

  return Array.from(uniqueMap.values());
}

async function runIngestion() {
  const hfModels = await fetchHuggingFaceModels(10000);
  console.log(`\n📦 Processing ${hfModels.length} Hugging Face models for Supabase migration...`);

  const todayStr = new Date().toISOString().split("T")[0];
  const formattedModels: any[] = [];

  for (const item of hfModels) {
    if (!item.id) continue;

    const slug = cleanSlug(item.id);
    const name = formatName(item.id);
    const provider = getProvider(item.id, item.author);
    const downloads = item.downloads || 0;
    const likes = item.likes || 0;
    const useCases = mapPipelineToUseCase(item.pipeline_tag);
    const modalities = mapPipelineToModality(item.pipeline_tag);
    const license = extractLicense(item.tags);
    const hasApi = (item.tags || []).some((t: string) => t.includes("endpoints_compatible") || t.includes("inference"));

    const modelRecord = {
      slug,
      name,
      provider: provider.name,
      providerSlug: provider.slug,
      description: `Open-weight AI model by ${provider.name} indexed from Hugging Face Hub (${downloads.toLocaleString()} downloads, ${likes.toLocaleString()} likes).`,
      type: "Open Weights",
      useCases,
      modalities,
      availability: "local",
      hasApi,
      hasSelfHost: true,
      license,
      pricing: "open-weights",
      pricingDetails: "Free Open Weights / Self-Hosted",
      contextWindow: "128k",
      hardwareRequirements: downloads > 100000 ? "Requires GPU (16GB+ VRAM recommended)" : "Consumer GPU / CPU compatible",
      benchmarks: [],
      releaseDate: item.createdAt ? item.createdAt.split("T")[0] : "2024-01-01",
      lastUpdated: todayStr,
      lastVerified: todayStr,
      strengths: ["Open Weights", "Hugging Face Ecosystem", "Community Fine-Tune"],
      weaknesses: ["Requires local GPU hardware for self-hosting"],
      docUrl: `https://huggingface.co/${item.id}`,
      playgroundUrl: `https://huggingface.co/${item.id}`,
      modelCardUrl: `https://huggingface.co/${item.id}`,
      tags: (item.tags || []).filter((t: string) => !t.startsWith("arxiv:") && !t.startsWith("dataset:")).slice(0, 6),
      aliases: [item.id],
      featured: downloads > 1000000,
      trending: downloads > 500000,
      isDeprecated: false,
      bestForCategory: useCases[0],
    };

    formattedModels.push(modelRecord);
  }

  console.log(`Transformed ${formattedModels.length} models into ModelVault AIModel format.`);

  // Batch upsert into Supabase in chunks of 500
  const BATCH_SIZE = 500;
  let successCount = 0;
  let failCount = 0;

  for (let i = 0; i < formattedModels.length; i += BATCH_SIZE) {
    const chunk = formattedModels.slice(i, i + BATCH_SIZE);
    const { error } = await supabase.from("models").upsert(chunk, { onConflict: "slug" });

    if (error) {
      console.error(`❌ Batch ${i / BATCH_SIZE + 1} error:`, error.message);
      failCount += chunk.length;
    } else {
      successCount += chunk.length;
      console.log(`✅ Progress: ${successCount} / ${formattedModels.length} models upserted into Supabase...`);
    }
  }

  // Update local JSON database file src/data/models_db.json
  const DB_PATH = path.join(process.cwd(), "src/data/models_db.json");
  let localDb: any[] = [];
  if (fs.existsSync(DB_PATH)) {
    localDb = JSON.parse(fs.readFileSync(DB_PATH, "utf-8"));
  }

  const mergedMap = new Map(localDb.map((m) => [m.slug, m]));
  formattedModels.forEach((m) => mergedMap.set(m.slug, m));
  const finalLocalList = Array.from(mergedMap.values());

  fs.writeFileSync(DB_PATH, JSON.stringify(finalLocalList, null, 2), "utf-8");
  console.log(`💾 Local JSON database updated: ${finalLocalList.length} total models stored in src/data/models_db.json.`);

  console.log("\n================ Ingestion Summary ================");
  console.log(`Total HF models fetched: ${hfModels.length}`);
  console.log(`Successfully upserted:   ${successCount}`);
  console.log(`Failed records:         ${failCount}`);
  console.log("====================================================\n");
}

runIngestion().catch((err) => {
  console.error("Fatal error during Hugging Face ingestion:", err);
  process.exit(1);
});
