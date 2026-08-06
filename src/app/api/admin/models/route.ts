import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { AIModel } from "@/types/model";
import { aiModelSchema } from "@/lib/validations/model";

export async function GET() {
  try {
    const models = await db.getModels();
    return NextResponse.json({ data: models, total: models.length });
  } catch (error) {
    console.error("GET /api/admin/models error:", error);
    return NextResponse.json({ error: "Failed to fetch admin models" }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const validation = aiModelSchema.safeParse(body);

    if (!validation.success) {
      return NextResponse.json(
        { error: "Validation failed", details: validation.error.flatten() },
        { status: 400 }
      );
    }

    const result = await db.createModel(validation.data as unknown as AIModel);

    if (!result.success) {
      return NextResponse.json({ error: result.error }, { status: 400 });
    }

    return NextResponse.json({ data: result.model, message: "Model created successfully" }, { status: 201 });
  } catch (error) {
    console.error("POST /api/admin/models error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
