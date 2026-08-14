import { NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const q = searchParams.get("q")?.toLowerCase();
    const provider = searchParams.get("provider");
    const category = searchParams.get("category");
    const availability = searchParams.get("availability");
    const limitParam = searchParams.get("limit");
    const pageParam = searchParams.get("page") || searchParams.get("offset");

    let models = await db.getModels();

    if (q) {
      models = models.filter(
        (m) =>
          m.name.toLowerCase().includes(q) ||
          m.provider.toLowerCase().includes(q) ||
          m.description.toLowerCase().includes(q) ||
          m.tags.some((t) => t.toLowerCase().includes(q))
      );
    }

    if (provider && provider !== "all") {
      models = models.filter((m) => m.providerSlug === provider);
    }

    if (category && category !== "all") {
      models = models.filter((m) => m.useCases.includes(category as never));
    }

    if (availability && availability !== "all") {
      models = models.filter((m) => m.availability === availability || m.availability === "both");
    }

    const total = models.length;

    // Apply pagination if limit is specified
    if (limitParam) {
      const limit = Math.max(1, parseInt(limitParam, 10) || 50);
      const page = Math.max(1, parseInt(pageParam || "1", 10) || 1);
      const offset = (page - 1) * limit;
      models = models.slice(offset, offset + limit);
    }

    return NextResponse.json(
      { data: models, total },
      {
        headers: {
          "Cache-Control": "public, max-age=3600, s-maxage=3600, stale-while-revalidate=86400",
        },
      }
    );
  } catch (error) {
    console.error("GET /api/models error:", error);
    return NextResponse.json({ error: "Failed to fetch models" }, { status: 500 });
  }
}

