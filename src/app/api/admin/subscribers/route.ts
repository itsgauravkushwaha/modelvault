import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";
import { publicEnv } from "@/env";

export async function GET() {
  try {
    const isPlaceholder = publicEnv.NEXT_PUBLIC_SUPABASE_URL?.includes("placeholder");

    if (!isPlaceholder) {
      const { data, error } = await supabase
        .from("subscribers")
        .select("*")
        .order("subscribed_at", { ascending: false });

      if (!error && data) {
        return NextResponse.json({ subscribers: data });
      }
    }

    // Demo/Fallback subscribers list
    return NextResponse.json({
      subscribers: [
        { id: 1, email: "alex.dev@ai.com", subscribed_at: new Date().toISOString() },
        { id: 2, email: "sarah.cto@startup.io", subscribed_at: new Date(Date.now() - 86400000).toISOString() },
      ],
    });
  } catch (error) {
    console.error("Failed to fetch admin subscribers:", error);
    return NextResponse.json({ error: "Failed to fetch subscribers" }, { status: 500 });
  }
}
