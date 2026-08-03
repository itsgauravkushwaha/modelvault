import { NextResponse } from "next/server";
import { db } from "@/lib/db";

interface Params {
  params: Promise<{ slug: string }>;
}

export async function GET(_request: Request, { params }: Params) {
  try {
    const { slug } = await params;
    const model = db.getModelBySlug(slug);

    if (!model) {
      return NextResponse.json({ error: "Model not found" }, { status: 404 });
    }

    return NextResponse.json({ data: model });
  } catch (error) {
    console.error("GET /api/models/[slug] error:", error);
    return NextResponse.json({ error: "Failed to fetch model details" }, { status: 500 });
  }
}
