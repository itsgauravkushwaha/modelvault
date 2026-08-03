export type UseCase =
  | "text-chat"
  | "reasoning"
  | "coding"
  | "image-gen"
  | "image-edit"
  | "video-gen"
  | "audio-speech"
  | "vision-language"
  | "embeddings-rag"
  | "local"
  | "enterprise";

export type Modality = "text" | "image" | "video" | "audio" | "code" | "multimodal";

export type Availability = "cloud" | "local" | "both";

export type PricingType = "free" | "freemium" | "paid" | "open-weights";

export interface BenchmarkScore {
  name: string;
  score: number | string;
  maxScore?: number;
}

export interface AIModel {
  slug: string;
  name: string;
  provider: string;
  providerSlug: string;
  description: string;
  type: string;
  useCases: UseCase[];
  modalities: Modality[];
  availability: Availability;
  hasApi: boolean;
  hasSelfHost: boolean;
  license: string;
  pricing: PricingType;
  pricingDetails: string;
  contextWindow: string; // e.g. "128k", "200k", "1M"
  hardwareRequirements?: string; // for local models
  benchmarks: BenchmarkScore[];
  releaseDate: string;
  lastUpdated: string;
  lastVerified: string;
  strengths: string[];
  weaknesses: string[];
  docUrl: string;
  playgroundUrl?: string;
  modelCardUrl?: string;
  tags: string[];
  aliases?: string[];
  featured?: boolean;
  trending?: boolean;
  isDeprecated?: boolean;
  bestForCategory?: string;
}

export interface Provider {
  slug: string;
  name: string;
  website: string;
  logo: string;
  description: string;
  modelCount: number;
}

export interface CategoryDef {
  slug: UseCase;
  name: string;
  description: string;
  iconName: string;
  modelCount: number;
}

export interface FilterState {
  searchQuery: string;
  useCase: UseCase | "all";
  availability: Availability | "all";
  pricing: PricingType | "all";
  provider: string | "all";
  modality: Modality | "all";
  hasApiOnly: boolean;
  hasSelfHostOnly: boolean;
  sortBy: "popularity" | "newest" | "context" | "name";
}
