import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { AIModel } from "@/types/model";
import { modelPartialSchema } from "@/lib/validations/model";

interface Params {
  params: Promise<{ slug: string }>;
}

export async function PUT(request: Request, { params }: Params) {
  try {
    const { slug } = await params;
    const body = await request.json();
    const validation = modelPartialSchema.safeParse(body);

    if (!validation.success) {
      return NextResponse.json(
        { error: "Validation failed", details: validation.error.flatten() },
        { status: 400 }
      );
    }

    const result = db.updateModel(slug, validation.data as unknown as Partial<AIModel>);

    if (!result.success) {
      return NextResponse.json({ error: result.error }, { status: 404 });
    }

    return NextResponse.json({ data: result.model, message: "Model updated successfully" });
  } catch (error) {
    console.error("PUT /api/admin/models/[slug] error:", error);
    return NextResponse.json({ error: "Failed to update model" }, { status: 500 });
  }
}

export async function DELETE(_request: Request, { params }: Params) {
  try {
    const { slug } = await params;
    const result = db.deleteModel(slug);

    if (!result.success) {
      return NextResponse.json({ error: result.error }, { status: 404 });
    }

    return NextResponse.json({ message: `Model ${slug} deleted successfully` });
  } catch (error) {
    console.error("DELETE /api/admin/models/[slug] error:", error);
    return NextResponse.json({ error: "Failed to delete model" }, { status: 500 });
  }
}
