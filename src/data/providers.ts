import { Provider } from "@/types/model";
import { MODELS } from "./models";

const BASE_PROVIDERS: Omit<Provider, "modelCount">[] = [
  {
    slug: "openai",
    name: "OpenAI",
    website: "https://openai.com",
    logo: "openai",
    description: "Pioneers of GPT models, DALL-E, Whisper, and frontier reasoning models.",
  },
  {
    slug: "anthropic",
    name: "Anthropic",
    website: "https://anthropic.com",
    logo: "anthropic",
    description: "Creators of the Claude family focused on safety, coding, and long context.",
  },
  {
    slug: "google",
    name: "Google AI",
    website: "https://deepmind.google",
    logo: "google",
    description: "Developers of Gemini multimodal models, Imagen 3, and Veo video.",
  },
  {
    slug: "meta",
    name: "Meta AI",
    website: "https://ai.meta.com",
    logo: "meta",
    description: "Champions of open weights with the industry-standard Llama model series.",
  },
  {
    slug: "mistral",
    name: "Mistral AI",
    website: "https://mistral.ai",
    logo: "mistral",
    description: "European frontier AI company building efficient open and commercial models.",
  },
  {
    slug: "deepseek",
    name: "DeepSeek",
    website: "https://deepseek.com",
    logo: "deepseek",
    description: "Breakthrough open-weights reasoning and code models with MoE architecture.",
  },
  {
    slug: "stability",
    name: "Stability AI",
    website: "https://stability.ai",
    logo: "stability",
    description: "Open generative models for image, video, audio, and 3D synthesis.",
  },
  {
    slug: "cohere",
    name: "Cohere",
    website: "https://cohere.com",
    logo: "cohere",
    description: "Enterprise-focused NLP, multilingual RAG, and high-performance embeddings.",
  },
  {
    slug: "xai",
    name: "xAI",
    website: "https://x.ai",
    logo: "xai",
    description: "Builders of Grok frontier models integrated with real-time knowledge.",
  },
  {
    slug: "alibaba",
    name: "Alibaba Cloud",
    website: "https://qwenlm.github.io",
    logo: "alibaba",
    description: "Creators of Qwen top-tier open-source multimodal and coding models.",
  },
];

export const PROVIDERS: Provider[] = BASE_PROVIDERS.map((prov) => ({
  ...prov,
  modelCount: MODELS.filter((m) => m.providerSlug === prov.slug).length,
}));
