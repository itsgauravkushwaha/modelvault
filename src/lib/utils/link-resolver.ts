import { AIModel } from "@/types/model";

export interface ResolvedLinks {
  docUrl: string;
  modelCardUrl: string;
  playgroundUrl: string;
  isHighQuality: boolean;
  requiresManualReview: boolean;
}

/**
 * Resolves high-quality official documentation, model card, and playground links
 * for any given AI model, enforcing official provider priority over generic search URLs.
 */
export function resolveModelLinks(model: Partial<AIModel>): ResolvedLinks {
  const provider = (model.providerSlug || "").toLowerCase();
  const slug = (model.slug || "").toLowerCase();

  let docUrl = model.docUrl || "";
  let modelCardUrl = model.modelCardUrl || "";
  let playgroundUrl = model.playgroundUrl || "";
  let isHighQuality = false;
  let requiresManualReview = false;

  // Clear generic search URLs
  if (docUrl.includes("huggingface.co/models?search=")) {
    docUrl = "";
  }
  if (modelCardUrl.includes("huggingface.co/models?search=")) {
    modelCardUrl = "";
  }

  // 1. OpenAI
  if (provider === "openai") {
    if (slug.includes("gpt-4o")) {
      docUrl = "https://platform.openai.com/docs/models/gpt-4o";
      modelCardUrl = "https://openai.com/index/hello-gpt-4o/";
    } else if (slug.includes("o1") || slug.includes("o3")) {
      docUrl = "https://platform.openai.com/docs/guides/reasoning";
      modelCardUrl = slug.includes("o3")
        ? "https://openai.com/index/openai-o3-mini/"
        : "https://openai.com/index/introducing-openai-o1/";
    } else if (slug.includes("gpt-4")) {
      docUrl = "https://platform.openai.com/docs/models/gpt-4-turbo";
      modelCardUrl = "https://openai.com/index/gpt-4-research/";
    } else if (slug.includes("dall-e")) {
      docUrl = "https://platform.openai.com/docs/guides/images";
      modelCardUrl = "https://openai.com/index/dall-e-3/";
    } else if (slug.includes("whisper")) {
      docUrl = "https://platform.openai.com/docs/guides/speech-to-text";
      modelCardUrl = "https://github.com/openai/whisper";
    } else if (slug.includes("sora")) {
      docUrl = "https://platform.openai.com/docs/models";
      modelCardUrl = "https://openai.com/index/sora/";
    } else {
      docUrl = "https://platform.openai.com/docs/models";
      modelCardUrl = "https://openai.com/research";
    }
    playgroundUrl = "https://platform.openai.com/playground";
    isHighQuality = true;

  // 2. Anthropic
  } else if (provider === "anthropic") {
    docUrl = "https://docs.anthropic.com/en/docs/models-overview";
    if (slug.includes("3-5-sonnet") || slug.includes("3.5-sonnet")) {
      modelCardUrl = "https://www.anthropic.com/news/claude-3-5-sonnet";
    } else if (slug.includes("3-5-haiku") || slug.includes("3.5-haiku")) {
      modelCardUrl = "https://www.anthropic.com/news/claude-3-5-haiku";
    } else if (slug.includes("3-opus") || slug.includes("3-sonnet") || slug.includes("3-haiku")) {
      modelCardUrl = "https://www.anthropic.com/news/claude-3-family";
    } else {
      modelCardUrl = "https://www.anthropic.com/research";
    }
    playgroundUrl = "https://console.anthropic.com/dashboard";
    isHighQuality = true;

  // 3. Google
  } else if (provider === "google") {
    if (slug.includes("gemma")) {
      docUrl = "https://ai.google.dev/gemma/docs";
      modelCardUrl = "https://huggingface.co/google/gemma-2-27b-it";
    } else if (slug.includes("imagen")) {
      docUrl = "https://ai.google.dev/gemini-api/docs/imagen";
      modelCardUrl = "https://deepmind.google/technologies/imagen-3/";
    } else if (slug.includes("gemini-2")) {
      docUrl = "https://ai.google.dev/gemini-api/docs/models/gemini#gemini-2.0";
      modelCardUrl = "https://blog.google/technology/developers/gemini-2-flash/";
    } else {
      docUrl = "https://ai.google.dev/gemini-api/docs/models/gemini";
      modelCardUrl = "https://blog.google/technology/ai/google-gemini-next-generation-model-february-2024/";
    }
    playgroundUrl = "https://aistudio.google.com/";
    isHighQuality = true;

  // 4. Meta Llama
  } else if (provider === "meta") {
    if (slug.includes("llama-3-3") || slug.includes("llama-3.3")) {
      docUrl = "https://www.llama.com/docs/model-cards-and-prompt-formats/llama-3-3";
      modelCardUrl = "https://huggingface.co/meta-llama/Llama-3.3-70B-Instruct";
    } else if (slug.includes("llama-3-2") || slug.includes("llama-3.2")) {
      docUrl = "https://www.llama.com/docs/model-cards-and-prompt-formats/llama-3-2";
      modelCardUrl = "https://huggingface.co/meta-llama/Llama-3.2-11B-Vision-Instruct";
    } else if (slug.includes("llama-3-1") || slug.includes("llama-3.1")) {
      docUrl = "https://www.llama.com/docs/model-cards-and-prompt-formats/llama-3-1";
      modelCardUrl = "https://huggingface.co/meta-llama/Meta-Llama-3.1-70B-Instruct";
    } else if (slug.includes("llama-3")) {
      docUrl = "https://www.llama.com/docs/model-cards-and-prompt-formats/llama-3";
      modelCardUrl = "https://huggingface.co/meta-llama/Meta-Llama-3-8B-Instruct";
    } else if (slug.includes("codellama")) {
      docUrl = "https://github.com/facebookresearch/codellama";
      modelCardUrl = "https://huggingface.co/codellama/CodeLlama-70b-Instruct-hf";
    } else if (slug.includes("llama-2")) {
      docUrl = "https://www.llama.com/docs/model-cards-and-prompt-formats/llama-2";
      modelCardUrl = "https://huggingface.co/meta-llama/Llama-2-70b-chat-hf";
    } else {
      docUrl = "https://www.llama.com/docs/";
      modelCardUrl = "https://github.com/meta-llama/llama-models";
    }
    playgroundUrl = "https://www.llama.com/";
    isHighQuality = true;

  // 5. DeepSeek
  } else if (provider === "deepseek") {
    if (slug.includes("r1")) {
      docUrl = "https://github.com/deepseek-ai/DeepSeek-R1";
      modelCardUrl = "https://huggingface.co/deepseek-ai/DeepSeek-R1";
    } else if (slug.includes("v3")) {
      docUrl = "https://github.com/deepseek-ai/DeepSeek-V3";
      modelCardUrl = "https://huggingface.co/deepseek-ai/DeepSeek-V3";
    } else if (slug.includes("coder")) {
      docUrl = "https://github.com/deepseek-ai/DeepSeek-Coder";
      modelCardUrl = "https://huggingface.co/deepseek-ai/DeepSeek-Coder-V2-Instruct";
    } else if (slug.includes("math")) {
      docUrl = "https://github.com/deepseek-ai/DeepSeek-Math";
      modelCardUrl = "https://huggingface.co/deepseek-ai/deepseek-math-7b-instruct";
    } else {
      docUrl = "https://github.com/deepseek-ai";
      modelCardUrl = "https://huggingface.co/deepseek-ai";
    }
    playgroundUrl = "https://chat.deepseek.com/";
    isHighQuality = true;

  // 6. Alibaba / Qwen
  } else if (provider === "alibaba") {
    docUrl = "https://qwen.readthedocs.io/en/latest/";
    if (slug.includes("2.5") || slug.includes("2-5")) {
      modelCardUrl = "https://huggingface.co/Qwen/Qwen2.5-72B-Instruct";
    } else if (slug.includes("qwq")) {
      docUrl = "https://qwenlm.github.io/blog/qwq-32b-preview/";
      modelCardUrl = "https://huggingface.co/Qwen/QwQ-32B-Preview";
    } else {
      modelCardUrl = "https://huggingface.co/Qwen";
    }
    playgroundUrl = "https://chat.qwenlm.ai/";
    isHighQuality = true;

  // 7. Mistral AI
  } else if (provider === "mistral") {
    docUrl = "https://docs.mistral.ai/getting-started/models/models_overview/";
    if (slug.includes("large")) {
      modelCardUrl = "https://huggingface.co/mistralai/Mistral-Large-Instruct-2411";
    } else if (slug.includes("7b")) {
      modelCardUrl = "https://huggingface.co/mistralai/Mistral-7B-Instruct-v0.3";
    } else if (slug.includes("mixtral-8x7b")) {
      modelCardUrl = "https://huggingface.co/mistralai/Mixtral-8x7B-Instruct-v0.1";
    } else if (slug.includes("mixtral-8x22b")) {
      modelCardUrl = "https://huggingface.co/mistralai/Mixtral-8x22B-Instruct-v0.1";
    } else {
      modelCardUrl = "https://huggingface.co/mistralai";
    }
    playgroundUrl = "https://chat.mistral.ai/";
    isHighQuality = true;

  // 8. Stability AI
  } else if (provider === "stability") {
    docUrl = "https://platform.stability.ai/docs/getting-started";
    if (slug.includes("sd3") || slug.includes("3-5") || slug.includes("3.5")) {
      modelCardUrl = "https://huggingface.co/stabilityai/stable-diffusion-3.5-large";
    } else if (slug.includes("sdxl") || slug.includes("xl")) {
      modelCardUrl = "https://huggingface.co/stabilityai/stable-diffusion-xl-base-1.0";
    } else {
      modelCardUrl = "https://huggingface.co/stabilityai";
    }
    playgroundUrl = "https://platform.stability.ai/";
    isHighQuality = true;

  // 9. Cohere
  } else if (provider === "cohere") {
    docUrl = "https://docs.cohere.com/docs/models";
    modelCardUrl = "https://huggingface.co/CohereForAI/c4ai-command-r-plus";
    playgroundUrl = "https://dashboard.cohere.com/playground/chat";
    isHighQuality = true;

  // 10. Kimi / Moonshot
  } else if (provider === "kimi") {
    docUrl = "https://platform.moonshot.cn/docs/intro";
    modelCardUrl = "https://github.com/MoonshotAI/Kimi-k1.5";
    playgroundUrl = "https://kimi.moonshot.cn/";
    isHighQuality = true;
  }

  // Fallback check
  if (!docUrl || docUrl.includes("huggingface.co/models?search=")) {
    requiresManualReview = true;
  }

  return {
    docUrl,
    modelCardUrl,
    playgroundUrl,
    isHighQuality,
    requiresManualReview,
  };
}
