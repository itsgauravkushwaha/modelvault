import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";
import { publicEnv } from "@/env";
import { verifyAdminAuth } from "@/lib/auth";
import { checkRateLimit } from "@/lib/rate-limit";
import fs from "fs";
import path from "path";

const SUBSCRIBERS_FILE = path.join(process.cwd(), "src/data/subscribers_db.json");

function getLocalSubscribers(): any[] {
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

export async function GET(req: Request) {
  try {
    // 1. Rate limiting
    const rateLimit = checkRateLimit(req, "admin:subscribers", 30, 60 * 1000);
    if (!rateLimit.allowed) {
      return NextResponse.json({ error: "Too many requests" }, { status: 429 });
    }

    // 2. Strict Authentication check
    if (!verifyAdminAuth(req)) {
      return NextResponse.json(
        { error: "Unauthorized. Admin authentication required." },
        { status: 401 }
      );
    }

    const isPlaceholder = publicEnv.NEXT_PUBLIC_SUPABASE_URL?.includes("placeholder");

    if (!isPlaceholder) {
      try {
        const { data, error } = await supabase
          .from("subscribers")
          .select("*")
          .order("subscribed_at", { ascending: false });

        if (!error && data && data.length > 0) {
          return NextResponse.json({ subscribers: data });
        }
      } catch (err) {
        console.warn("Supabase fetch error for admin subscribers:", err);
      }
    }

    // Fallback to local storage
    const localList = getLocalSubscribers();
    return NextResponse.json({ subscribers: localList });
  } catch (error) {
    console.error("Failed to fetch admin subscribers:", error);
    return NextResponse.json({ error: "Failed to fetch subscribers" }, { status: 500 });
  }
}
