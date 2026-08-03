import { z } from "zod";

export const benchmarkScoreSchema = z.object({
  name: z.string().min(1, "Benchmark name is required"),
  score: z.union([z.number(), z.string()]),
  maxScore: z.number().optional(),
});

export const aiModelSchema = z.object({
  slug: z.string().min(1, "Slug is required").regex(/^[a-z0-9-]+$/, "Slug must be lowercase alphanumeric with hyphens"),
  name: z.string().min(1, "Name is required"),
  provider: z.string().min(1, "Provider name is required"),
  providerSlug: z.string().min(1, "Provider slug is required"),
  description: z.string().min(1, "Description is required"),
  type: z.string().min(1, "Model type is required"),
  useCases: z.array(z.string()).min(1, "At least one use case is required"),
  modalities: z.array(z.string()).min(1, "At least one modality is required"),
  availability: z.enum(["cloud", "local", "both"]),
  hasApi: z.boolean(),
  hasSelfHost: z.boolean(),
  license: z.string().min(1, "License is required"),
  pricing: z.enum(["free", "freemium", "paid", "open-weights"]),
  pricingDetails: z.string().min(1, "Pricing details required"),
  contextWindow: z.string().min(1, "Context window required"),
  hardwareRequirements: z.string().optional(),
  benchmarks: z.array(benchmarkScoreSchema).default([]),
  releaseDate: z.string().min(1, "Release date required"),
  lastUpdated: z.string().min(1, "Last updated date required"),
  lastVerified: z.string().default(new Date().toISOString().split("T")[0]),
  strengths: z.array(z.string()).default([]),
  weaknesses: z.array(z.string()).default([]),
  docUrl: z.string().url("Doc URL must be a valid URL"),
  playgroundUrl: z.string().url().optional().or(z.literal("")),
  modelCardUrl: z.string().url().optional().or(z.literal("")),
  tags: z.array(z.string()).default([]),
  featured: z.boolean().optional().default(false),
  trending: z.boolean().optional().default(false),
  isDeprecated: z.boolean().optional().default(false),
  bestForCategory: z.string().optional(),
});

export const modelPartialSchema = aiModelSchema.partial();
