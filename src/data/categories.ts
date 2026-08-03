import { CategoryDef, UseCase } from "@/types/model";
import { MODELS } from "./models";

const BASE_CATEGORIES: Omit<CategoryDef, "modelCount">[] = [
  {
    slug: "text-chat",
    name: "Text / Chat",
    description: "General-purpose conversation, writing, translation, and summary models.",
    iconName: "MessageSquare",
  },
  {
    slug: "reasoning",
    name: "Reasoning",
    description: "Advanced step-by-step thinking, complex problem solving, and math.",
    iconName: "Brain",
  },
  {
    slug: "coding",
    name: "Coding Agents",
    description: "Code generation, debugging, repository refactoring, and agentic workflows.",
    iconName: "Code",
  },
  {
    slug: "image-gen",
    name: "Image Generation",
    description: "High-fidelity text-to-image synthesis, artistic styling, and graphics.",
    iconName: "Image",
  },
  {
    slug: "image-edit",
    name: "Image Editing",
    description: "Inpainting, outpainting, background removal, and image-to-image tasks.",
    iconName: "Sliders",
  },
  {
    slug: "video-gen",
    name: "Video Generation",
    description: "Photorealistic text-to-video, image-to-video, and motion synthesis.",
    iconName: "Video",
  },
  {
    slug: "audio-speech",
    name: "Audio & Speech",
    description: "Speech-to-text transcription, voice synthesis, and music generation.",
    iconName: "Mic",
  },
  {
    slug: "vision-language",
    name: "Vision-Language",
    description: "Multimodal understanding of images, documents, charts, and diagrams.",
    iconName: "Eye",
  },
  {
    slug: "embeddings-rag",
    name: "Embeddings / RAG",
    description: "Vector representations, semantic search, and knowledge retrieval.",
    iconName: "Database",
  },
  {
    slug: "local",
    name: "Local Models",
    description: "Open-weight models optimized to run on consumer hardware & Ollama.",
    iconName: "HardDrive",
  },
  {
    slug: "enterprise",
    name: "Enterprise Models",
    description: "High-compliance, SOC2 certified, private deployment ready models.",
    iconName: "Building",
  },
];

export const CATEGORIES: CategoryDef[] = BASE_CATEGORIES.map((cat) => ({
  ...cat,
  modelCount: MODELS.filter((m) => m.useCases.includes(cat.slug as UseCase)).length,
}));
