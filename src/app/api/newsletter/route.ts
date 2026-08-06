import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";
import { publicEnv } from "@/env";
import { z } from "zod";
import fs from "fs";
import path from "path";

const newsletterSchema = z.object({
  email: z.string().email("Invalid email address"),
});

const SUBSCRIBERS_FILE = path.join(process.cwd(), "src/data/subscribers_db.json");

function ensureLocalSubscribersFile(): any[] {
  try {
    if (fs.existsSync(SUBSCRIBERS_FILE)) {
      const raw = fs.readFileSync(SUBSCRIBERS_FILE, "utf-8");
      return JSON.parse(raw);
    }
  } catch (e) {
    console.error("Failed to read local subscribers file:", e);
  }
  return [];
}

function saveLocalSubscriber(email: string): void {
  try {
    const list = ensureLocalSubscribersFile();
    const existing = list.find((s) => s.email === email);
    if (!existing) {
      list.unshift({ id: Date.now(), email, subscribed_at: new Date().toISOString() });
      fs.writeFileSync(SUBSCRIBERS_FILE, JSON.stringify(list, null, 2), "utf-8");
    }
  } catch (e) {
    console.error("Failed to save local subscriber record:", e);
  }
}

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

    // Always save local JSON fallback
    saveLocalSubscriber(email);

    return NextResponse.json({ success: true, message: "Subscribed successfully!" });
  } catch (error) {
    console.error("Newsletter submission error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
