import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";
import { publicEnv } from "@/env";
import { z } from "zod";

const newsletterSchema = z.object({
  email: z.string().email("Invalid email address"),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const parsed = newsletterSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    const { email } = parsed.data;
    const isPlaceholder = publicEnv.NEXT_PUBLIC_SUPABASE_URL?.includes("placeholder");

    if (!isPlaceholder) {
      try {
        const { error } = await supabase
          .from("subscribers")
          .upsert([{ email, subscribed_at: new Date().toISOString() }], { onConflict: "email" });

        if (error) {
          console.warn("Supabase subscribers error:", error.message);
        }
      } catch (err) {
        console.warn("Failed to save subscriber to Supabase:", err);
      }
    }

    return NextResponse.json({ success: true, message: "Subscribed successfully!" });
  } catch (error) {
    console.error("Newsletter submission error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
