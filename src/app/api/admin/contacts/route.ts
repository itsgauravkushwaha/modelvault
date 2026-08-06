import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";
import { publicEnv } from "@/env";

export async function GET() {
  try {
    const isPlaceholder = publicEnv.NEXT_PUBLIC_SUPABASE_URL?.includes("placeholder");

    if (!isPlaceholder) {
      const { data, error } = await supabase
        .from("contacts")
        .select("*")
        .order("created_at", { ascending: false });

      if (!error && data) {
        return NextResponse.json({ contacts: data });
      }
    }

    // Demo/Fallback contacts list
    return NextResponse.json({
      contacts: [
        {
          id: 1,
          name: "Marcus Vance",
          email: "marcus@frontier.ai",
          subject: "Model Listing Inquiry",
          message: "Would love to feature our new multimodal model on ModelVault.",
          created_at: new Date().toISOString(),
        },
      ],
    });
  } catch (error) {
    console.error("Failed to fetch admin contacts:", error);
    return NextResponse.json({ error: "Failed to fetch contact messages" }, { status: 500 });
  }
}
