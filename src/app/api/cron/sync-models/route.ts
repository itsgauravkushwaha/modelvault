import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";
import { publicEnv, getServerEnv } from "@/env";
import { AIModel, Modality, UseCase, PricingType, Availability } from "@/types/model";
import { checkRateLimit } from "@/lib/rate-limit";
import { verifyAdminAuth } from "@/lib/auth";
import fs from "fs";
import path from "path";

// File fallback path
const DB_PATH = path.join(process.cwd(), "src/data/models_db.json");

function loadLocalModels(): AIModel[] {
  try {
    if (fs.existsSync(DB_PATH)) {
      const raw = fs.readFileSync(DB_PATH, "utf-8");
      return JSON.parse(raw);
    }
  } catch (e) {
    console.error("Failed to load local models file:", e);
  }
  return [];
}

function saveLocalModels(models: AIModel[]): void {
  try {
    const tempPath = `${DB_PATH}.tmp`;
    fs.writeFileSync(tempPath, JSON.stringify(models, null, 2), "utf-8");
    fs.renameSync(tempPath, DB_PATH);
  } catch (e) {
    console.error("Failed to save local models file:", e);
  }
}

/**
 * Deterministic canonical slug normalization across all platforms.
 */
function normalizeSlug(raw: string): string {
  if (!raw) return "";
  return raw
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

/**
 * Intelligent link resolution for a model.
 */
function resolveOfficialLinks(model: { slug: string; name: string; provider: string; providerSlug: string; docUrl?: string; playgroundUrl?: string; modelCardUrl?: string }): {
  docUrl: string;
  playgroundUrl: string;
  modelCardUrl: string;
} {
  const pSlug = (model.providerSlug || "").toLowerCase();
  const pName = (model.provider || "").toLowerCase();
  const mSlug = (model.slug || "").toLowerCase();
  const mName = (model.name || "").toLowerCase();

  let docUrl = model.docUrl || "";
  let playgroundUrl = model.playgroundUrl || "";
  let modelCardUrl = model.modelCardUrl || "";

  // 1. OpenAI
  if (pSlug === "openai" || pName.includes("openai")) {
    docUrl = "https://platform.openai.com/docs/models";
    modelCardUrl = "https://platform.openai.com/docs/models";
    playgroundUrl = "https://platform.openai.com/playground";

    if (mSlug.includes("gpt-4o-mini") || mName.includes("gpt-4o mini")) {
      docUrl = "https://platform.openai.com/docs/models/gpt-4o-mini";
      modelCardUrl = "https://openai.com/index/gpt-4o-mini-advancing-cost-efficient-intelligence/";
    } else if (mSlug.includes("gpt-4o") || mName.includes("gpt-4o")) {
      docUrl = "https://platform.openai.com/docs/models/gpt-4o";
      modelCardUrl = "https://openai.com/index/hello-gpt-4o/";
    } else if (mSlug.includes("o1") || mSlug.includes("o3") || mName.includes("o1") || mName.includes("o3")) {
      docUrl = "https://platform.openai.com/docs/guides/reasoning";
      modelCardUrl = "https://openai.com/index/learning-to-reason-with-llms/";
    } else if (mSlug.includes("dall-e")) {
      docUrl = "https://platform.openai.com/docs/guides/images";
      modelCardUrl = "https://openai.com/index/dall-e-3/";
    }
  }
  // 2. Anthropic
  else if (pSlug === "anthropic" || pName.includes("anthropic")) {
    docUrl = "https://docs.anthropic.com/en/docs/about-claude/models";
    modelCardUrl = "https://docs.anthropic.com/en/docs/about-claude/models";
    playgroundUrl = "https://console.anthropic.com/workbench";

    if (mSlug.includes("claude-3-5-sonnet")) {
      docUrl = "https://docs.anthropic.com/en/docs/about-claude/models/claude-3-5-sonnet";
      modelCardUrl = "https://www.anthropic.com/news/claude-3-5-sonnet";
    } else if (mSlug.includes("claude-3-5-haiku")) {
      docUrl = "https://docs.anthropic.com/en/docs/about-claude/models/claude-3-5-haiku";
      modelCardUrl = "https://www.anthropic.com/news/claude-3-5-haiku";
    }
  }
  // 3. Google AI
  else if (pSlug === "google" || pName.includes("google") || mSlug.includes("gemini") || mSlug.includes("gemma")) {
    docUrl = "https://ai.google.dev/gemini-api/docs/models/gemini";
    modelCardUrl = "https://ai.google.dev/gemini-api/docs/models/gemini";
    playgroundUrl = "https://aistudio.google.com/app/prompts/new_chat";

    if (mSlug.includes("gemma")) {
      docUrl = "https://ai.google.dev/gemma/docs";
      modelCardUrl = "https://ai.google.dev/gemma";
    } else if (mSlug.includes("imagen")) {
      docUrl = "https://ai.google.dev/gemini-api/docs/imagen";
      modelCardUrl = "https://deepmind.google/technologies/imagen-3/";
    }
  }
  // 4. Meta AI / Llama
  else if (pSlug === "meta" || pName.includes("meta") || mSlug.includes("llama")) {
    docUrl = "https://www.llama.com/docs/overview/";
    modelCardUrl = "https://www.llama.com/docs/model-cards-and-prompt-formats/";
    playgroundUrl = `https://openrouter.ai/chat?models=meta-llama/${mSlug}`;

    if (mSlug.includes("llama-3-3")) {
      docUrl = "https://www.llama.com/docs/model-cards-and-prompt-formats/llama3_3/";
      modelCardUrl = "https://huggingface.co/meta-llama/Llama-3.3-70B-Instruct";
    } else if (mSlug.includes("llama-3-2")) {
      docUrl = "https://www.llama.com/docs/model-cards-and-prompt-formats/llama3_2/";
      modelCardUrl = "https://huggingface.co/meta-llama/Llama-3.2-11B-Vision-Instruct";
    }
  }
  // 5. DeepSeek
  else if (pSlug === "deepseek" || pName.includes("deepseek") || mSlug.includes("deepseek")) {
    docUrl = "https://api-docs.deepseek.com/";
    modelCardUrl = "https://github.com/deepseek-ai";
    playgroundUrl = "https://chat.deepseek.com/";

    if (mSlug.includes("r1")) {
      docUrl = "https://github.com/deepseek-ai/DeepSeek-R1";
      modelCardUrl = "https://huggingface.co/deepseek-ai/DeepSeek-R1";
    } else if (mSlug.includes("v3")) {
      docUrl = "https://github.com/deepseek-ai/DeepSeek-V3";
      modelCardUrl = "https://huggingface.co/deepseek-ai/DeepSeek-V3";
    }
  }
  // 6. Mistral AI
  else if (pSlug === "mistral" || pName.includes("mistral") || mSlug.includes("mistral")) {
    docUrl = "https://docs.mistral.ai/getting-started/models/";
    modelCardUrl = "https://docs.mistral.ai/getting-started/models/";
    playgroundUrl = "https://chat.mistral.ai/";
  }
  // 7. Alibaba Qwen
  else if (pSlug === "alibaba" || pName.includes("alibaba") || mSlug.includes("qwen")) {
    docUrl = "https://qwen.readthedocs.io/";
    modelCardUrl = "https://github.com/QwenLM";
    playgroundUrl = "https://huggingface.co/spaces/Qwen/Qwen2.5-72B-Instruct";

    if (mSlug.includes("qwen-2-5") || mSlug.includes("qwen2.5")) {
      docUrl = "https://qwenlm.github.io/blog/qwen2.5/";
      modelCardUrl = "https://huggingface.co/Qwen/Qwen2.5-72B-Instruct";
    }
  }
  // 8. General HF / OpenRouter fallback
  else {
    if (!docUrl || docUrl.includes("huggingface.co/models?search=")) {
      docUrl = `https://huggingface.co/${model.providerSlug || "models"}/${mSlug}`;
    }
    if (!modelCardUrl || modelCardUrl.includes("huggingface.co/models?search=")) {
      modelCardUrl = docUrl;
    }
    if (!playgroundUrl) {
      playgroundUrl = "https://openrouter.ai/models";
    }
  }

  return { docUrl, playgroundUrl, modelCardUrl };
}

// Helper to format context window
function formatContextWindow(num: number): string {
  if (!num || num <= 0) return "128k";
  if (num >= 1000000) return `${(num / 1000000).toFixed(1)}M`;
  return `${Math.round(num / 1000)}k`;
}

// 1. Fetch OpenRouter Models
async function fetchOpenRouterModels(): Promise<Partial<AIModel>[]> {
  try {
    const res = await fetch("https://openrouter.ai/api/v1/models", {
      headers: { "Content-Type": "application/json" },
      next: { revalidate: 3600 },
    });
    if (!res.ok) return [];
    const json = await res.json();
    if (!json.data || !Array.isArray(json.data)) return [];

    return json.data.map((item: any) => {
      const slug = normalizeSlug(item.id);
      const providerName = item.id.split("/")[0] || "OpenRouter";
      const promptCost = parseFloat(item.pricing?.prompt || "0") * 1000000;
      const completionCost = parseFloat(item.pricing?.completion || "0") * 1000000;

      const pricingType: PricingType = promptCost > 0 ? "paid" : "free";
      const pricingDetails = promptCost > 0
        ? `$${promptCost.toFixed(2)}/1M in | $${completionCost.toFixed(2)}/1M out`
        : "Free Cloud API";

      const links = resolveOfficialLinks({
        slug,
        name: item.name || item.id,
        provider: providerName,
        providerSlug: normalizeSlug(providerName),
      });

      return {
        slug,
        name: item.name || item.id,
        provider: providerName,
        providerSlug: normalizeSlug(providerName),
        description: item.description || `High-performance cloud AI model indexed from OpenRouter API.`,
        type: "Large Language Model",
        contextWindow: formatContextWindow(item.context_length),
        modalities: (item.architecture?.modality === "multimodal" ? ["text", "image"] : ["text"]) as Modality[],
        useCases: ["text-chat", "reasoning"] as UseCase[],
        availability: "cloud" as Availability,
        hasApi: true,
        hasSelfHost: false,
        pricing: pricingType,
        pricingDetails,
        license: "Proprietary / API",
        trending: true,
        ...links,
      };
    });
  } catch (err) {
    console.warn("Failed to fetch OpenRouter models:", err);
    return [];
  }
}

// 2. Fetch Hugging Face Models
async function fetchHuggingFaceModels(): Promise<Partial<AIModel>[]> {
  try {
    const res = await fetch("https://huggingface.co/api/models?sort=downloads&direction=-1&limit=100", {
      headers: { "Content-Type": "application/json" },
      next: { revalidate: 3600 },
    });
    if (!res.ok) return [];
    const data = await res.json();
    if (!Array.isArray(data)) return [];

    return data.map((item: any) => {
      const nameParts = item.id.split("/");
      const repoName = nameParts[1] || nameParts[0];
      const providerName = nameParts[0] || "HuggingFace";
      const slug = normalizeSlug(item.id);

      const isVision = item.pipeline_tag?.includes("vision") || item.pipeline_tag?.includes("image");
      const isAudio = item.pipeline_tag?.includes("audio") || item.pipeline_tag?.includes("speech");

      const links = resolveOfficialLinks({
        slug,
        name: repoName,
        provider: providerName,
        providerSlug: normalizeSlug(providerName),
        docUrl: `https://huggingface.co/${item.id}`,
        modelCardUrl: `https://huggingface.co/${item.id}`,
      });

      return {
        slug,
        name: repoName,
        provider: providerName,
        providerSlug: normalizeSlug(providerName),
        description: `Open-weight AI model from Hugging Face Hub (${item.downloads?.toLocaleString() || "10,000+"} downloads).`,
        type: isVision ? "Multimodal Vision Model" : isAudio ? "Audio Model" : "Open Weights LLM",
        contextWindow: "32k",
        modalities: (isVision ? ["text", "image"] : isAudio ? ["text", "audio"] : ["text"]) as Modality[],
        useCases: (isVision ? ["vision-language"] : isAudio ? ["audio-speech"] : ["text-chat", "local"]) as UseCase[],
        availability: "local" as Availability,
        hasApi: false,
        hasSelfHost: true,
        pricing: "open-weights" as PricingType,
        pricingDetails: "Free Open Weights",
        license: "Apache-2.0 / Open Source",
        trending: item.downloads > 50000,
        ...links,
      };
    });
  } catch (err) {
    console.warn("Failed to fetch Hugging Face models:", err);
    return [];
  }
}

// 3. Fetch CivitAI Models
async function fetchCivitAIModels(): Promise<Partial<AIModel>[]> {
  try {
    const res = await fetch("https://civitai.com/api/v1/models?limit=50&types=Checkpoint", {
      headers: { "Content-Type": "application/json" },
      next: { revalidate: 3600 },
    });
    if (!res.ok) return [];
    const json = await res.json();
    if (!json.items || !Array.isArray(json.items)) return [];

    return json.items.map((item: any) => {
      const slug = normalizeSlug(`civitai-${item.name}`);
      return {
        slug,
        name: item.name,
        provider: "CivitAI",
        providerSlug: "civitai",
        description: `Generative diffusion AI model for high-resolution synthesis and image generation.`,
        type: "Diffusion Model",
        contextWindow: "N/A",
        modalities: ["image"] as Modality[],
        useCases: ["image-gen"] as UseCase[],
        availability: "local" as Availability,
        hasApi: false,
        hasSelfHost: true,
        pricing: "open-weights" as PricingType,
        pricingDetails: "Free Download",
        license: "Creative Commons",
        trending: true,
        docUrl: `https://civitai.com/models/${item.id}`,
        modelCardUrl: `https://civitai.com/models/${item.id}`,
        playgroundUrl: `https://civitai.com/models/${item.id}`,
      };
    });
  } catch (err) {
    console.warn("Failed to fetch CivitAI models:", err);
    return [];
  }
}

export async function GET(req: Request) {
  const startTime = Date.now();

  try {
    // 1. Rate Limiting
    const rateLimit = checkRateLimit(req, "cron:sync", 5, 60 * 1000);
    if (!rateLimit.allowed) {
      return NextResponse.json(
        { error: "Too many cron sync requests. Please wait a minute." },
        { status: 429 }
      );
    }

    // 2. Strict Authentication check for Cron Secret or Admin Session
    const serverEnv = getServerEnv();
    const cronSecret = serverEnv.CRON_SECRET || process.env.CRON_SECRET;
    const authHeader = req.headers.get("authorization");
    const cronHeader = req.headers.get("x-cron-secret");
    const url = new URL(req.url);
    const secretQuery = url.searchParams.get("secret");

    const isCronAuthorized = Boolean(
      cronSecret &&
        (authHeader === `Bearer ${cronSecret}` ||
          cronHeader === cronSecret ||
          secretQuery === cronSecret)
    );

    const isAdminAuthorized = verifyAdminAuth(req);

    if (cronSecret && !isCronAuthorized && !isAdminAuthorized) {
      console.warn("[cron/sync-models] Rejected unauthorized sync attempt.");
      return NextResponse.json(
        { error: "Unauthorized. Valid CRON_SECRET or Admin authentication required." },
        { status: 401 }
      );
    }

    console.log("[cron/sync-models] Starting multi-platform automated model sync...");

    // Fetch from all sources in parallel
    const [openrouter, huggingface, civitai] = await Promise.all([
      fetchOpenRouterModels(),
      fetchHuggingFaceModels(),
      fetchCivitAIModels(),
    ]);

    const incomingModels = [...openrouter, ...huggingface, ...civitai];
    const totalChecked = incomingModels.length;

    // Load existing database models
    let existingModels: AIModel[] = [];
    const isPlaceholder = publicEnv.NEXT_PUBLIC_SUPABASE_URL?.includes("placeholder");

    if (!isPlaceholder) {
      try {
        let page = 0;
        const pageSize = 1000;
        while (page < 20) {
          const { data, error } = await supabase
            .from("models")
            .select("*")
            .range(page * pageSize, (page + 1) * pageSize - 1);

          if (error || !data || data.length === 0) break;
          existingModels.push(...(data as AIModel[]));
          page++;
          if (data.length < pageSize) break;
        }
      } catch (err) {
        console.warn("Supabase fetch error during sync, falling back to local JSON:", err);
      }
    }

    if (existingModels.length === 0) {
      existingModels = loadLocalModels();
    }

    const existingMap = new Map<string, AIModel>(existingModels.map((m) => [m.slug, m]));

    let insertedCount = 0;
    let updatedCount = 0;
    let skippedCount = 0;
    let duplicatesMergedCount = 0;

    const upsertPayload: AIModel[] = [];
    const processedSlugsInBatch = new Set<string>();

    const todayStr = new Date().toISOString().split("T")[0];

    for (const item of incomingModels) {
      if (!item.slug || !item.name) {
        skippedCount++;
        continue;
      }

      // Deduplicate duplicates within the same incoming batch
      if (processedSlugsInBatch.has(item.slug)) {
        duplicatesMergedCount++;
        continue;
      }
      processedSlugsInBatch.add(item.slug);

      const existing = existingMap.get(item.slug);

      if (existing) {
        // UPDATE-FIRST logic: update dynamic metadata while preserving curated fields
        const updated: AIModel = {
          ...existing,
          pricing: item.pricing || existing.pricing,
          pricingDetails: item.pricingDetails || existing.pricingDetails,
          contextWindow: item.contextWindow || existing.contextWindow,
          modalities: item.modalities || existing.modalities,
          availability: item.availability || existing.availability,
          trending: item.trending !== undefined ? item.trending : existing.trending,
          docUrl: existing.docUrl && !existing.docUrl.includes("search=") ? existing.docUrl : (item.docUrl || existing.docUrl),
          playgroundUrl: existing.playgroundUrl || item.playgroundUrl,
          modelCardUrl: existing.modelCardUrl && !existing.modelCardUrl.includes("search=") ? existing.modelCardUrl : (item.modelCardUrl || existing.modelCardUrl),
          lastVerified: todayStr,
        };

        existingMap.set(item.slug, updated);
        upsertPayload.push(updated);
        updatedCount++;
      } else {
        // INSERT-NEW logic: insert new model with resolved official URLs
        const newModel: AIModel = {
          slug: item.slug,
          name: item.name,
          provider: item.provider || "Community",
          providerSlug: item.providerSlug || "community",
          description: item.description || `Indexed AI model from ${item.provider || "community"}.`,
          type: item.type || "Large Language Model",
          useCases: item.useCases || ["text-chat"],
          modalities: item.modalities || ["text"],
          availability: item.availability || "cloud",
          hasApi: item.hasApi ?? true,
          hasSelfHost: item.hasSelfHost ?? false,
          license: item.license || "Open Weights",
          pricing: item.pricing || "free",
          pricingDetails: item.pricingDetails || "Free Access",
          contextWindow: item.contextWindow || "128k",
          hardwareRequirements: item.availability === "local" ? "Recommended 16GB VRAM GPU" : undefined,
          benchmarks: [],
          releaseDate: todayStr,
          lastUpdated: todayStr,
          lastVerified: todayStr,
          strengths: ["High throughput execution"],
          weaknesses: ["Context boundary evaluation required"],
          docUrl: item.docUrl || `https://modelvault.space/models/${item.slug}`,
          playgroundUrl: item.playgroundUrl,
          modelCardUrl: item.modelCardUrl,
          tags: [item.provider || "AI", item.type || "LLM"],
          trending: item.trending ?? false,
          featured: false,
        };

        existingMap.set(item.slug, newModel);
        upsertPayload.push(newModel);
        insertedCount++;
      }
    }

    const finalModelsList = Array.from(existingMap.values());

    // Save to Supabase if accessible
    if (!isPlaceholder && upsertPayload.length > 0) {
      try {
        // Upsert in batches of 200
        for (let i = 0; i < upsertPayload.length; i += 200) {
          const batch = upsertPayload.slice(i, i + 200);
          const { error } = await supabase.from("models").upsert(batch, { onConflict: "slug" });
          if (error) {
            console.warn(`Supabase upsert batch error [${i}]:`, error.message);
          }
        }
      } catch (err) {
        console.warn("Supabase upsert failed, saving to local storage:", err);
      }
    }

    // Always persist to local models_db.json
    saveLocalModels(finalModelsList);

    // Invalidate Next.js path cache so fresh model data is served
    try {
      const { revalidatePath } = await import("next/cache");
      revalidatePath("/models");
      revalidatePath("/");
    } catch {
      // Ignore outside request context
    }

    const executionTimeMs = Date.now() - startTime;

    return NextResponse.json({
      success: true,
      timestamp: new Date().toISOString(),
      executionTimeMs,
      totalChecked,
      insertedCount,
      updatedCount,
      skippedCount,
      duplicatesMergedCount,
      newlyAddedCount: insertedCount,
      totalModelsInDb: finalModelsList.length,
      platformBreakdown: {
        openrouter: openrouter.length,
        huggingface: huggingface.length,
        civitai: civitai.length,
      },
    });
  } catch (error) {
    console.error("Cron model sync error:", error);
    return NextResponse.json(
      { error: "Failed to run automated model sync" },
      { status: 500 }
    );
  }
}
