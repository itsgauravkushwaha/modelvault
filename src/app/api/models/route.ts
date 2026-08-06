import { NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const q = searchParams.get("q")?.toLowerCase();
    const provider = searchParams.get("provider");
    const category = searchParams.get("category");
    const availability = searchParams.get("availability");

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

    return NextResponse.json({ data: models, total: models.length });
  } catch (error) {
    console.error("GET /api/models error:", error);
    return NextResponse.json({ error: "Failed to fetch models" }, { status: 500 });
  }
}
