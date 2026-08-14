import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";
import { checkRateLimit } from "@/lib/rate-limit";
import { z } from "zod";

// --- Aggregation cache ---
const aggregateCache = new Map<
  string,
  { data: FeedbackAggregate; expiry: number }
>();
const CACHE_TTL = 60_000; // 60 seconds

interface FeedbackAggregate {
  total: number;
  helpful: number;
  unhelpful: number;
  helpfulPercent: number;
  topUseCases: string[];
}

// --- POST: Submit feedback ---
const submitSchema = z.object({
  modelSlug: z.string().min(1).max(300),
  helpful: z.boolean(),
  useCase: z.string().max(500).optional(),
});

export async function POST(request: Request) {
  // Rate limit: 5 submissions per minute per IP
  const rl = checkRateLimit(request, "feedback:submit", 5, 60_000);
  if (!rl.allowed) {
    return NextResponse.json(
      { error: "Too many submissions. Please wait a moment." },
      { status: 429 }
    );
  }

  const body = await request.json().catch(() => null);
  const parsed = submitSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Invalid request", details: parsed.error.flatten() },
      { status: 400 }
    );
  }

  const { modelSlug, helpful, useCase } = parsed.data;

  const { error } = await supabase.from("model_feedback").insert({
    model_slug: modelSlug,
    helpful,
    use_case: useCase?.trim() || null,
  });

  if (error) {
    console.error("[Feedback] Insert error:", error);
    return NextResponse.json(
      { error: "Failed to save feedback" },
      { status: 500 }
    );
  }

  // Invalidate cache for this slug
  aggregateCache.delete(modelSlug);

  return NextResponse.json({ success: true });
}

// --- GET: Fetch aggregate feedback ---
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const slug = searchParams.get("slug");

  if (!slug) {
    return NextResponse.json(
      { error: "Missing 'slug' query parameter" },
      { status: 400 }
    );
  }

  // Check cache
  const cached = aggregateCache.get(slug);
  if (cached && Date.now() < cached.expiry) {
    return NextResponse.json({ data: cached.data });
  }

  // Query Supabase
  const { data: rows, error } = await supabase
    .from("model_feedback")
    .select("helpful, use_case")
    .eq("model_slug", slug);

  if (error) {
    console.error("[Feedback] Query error:", error);
    return NextResponse.json(
      { error: "Failed to fetch feedback" },
      { status: 500 }
    );
  }

  const total = rows?.length ?? 0;
  const helpful = rows?.filter((r) => r.helpful).length ?? 0;
  const unhelpful = total - helpful;
  const helpfulPercent = total > 0 ? Math.round((helpful / total) * 100) : 0;

  // Extract top use cases (deduplicated, max 5)
  const useCaseCounts = new Map<string, number>();
  for (const row of rows ?? []) {
    if (row.use_case) {
      const normalized = row.use_case.trim().toLowerCase();
      useCaseCounts.set(normalized, (useCaseCounts.get(normalized) ?? 0) + 1);
    }
  }
  const topUseCases = [...useCaseCounts.entries()]
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5)
    .map(([uc]) => uc.charAt(0).toUpperCase() + uc.slice(1));

  const aggregate: FeedbackAggregate = {
    total,
    helpful,
    unhelpful,
    helpfulPercent,
    topUseCases,
  };

  // Cache result
  aggregateCache.set(slug, { data: aggregate, expiry: Date.now() + CACHE_TTL });

  return NextResponse.json({ data: aggregate });
}
