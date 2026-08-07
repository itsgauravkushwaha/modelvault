import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";
import { publicEnv } from "@/env";
import { verifyAdminAuth } from "@/lib/auth";
import { checkRateLimit } from "@/lib/rate-limit";
import fs from "fs";
import path from "path";

const CONTACTS_FILE = path.join(process.cwd(), "src/data/contacts_db.json");

function getLocalContacts(): any[] {
  try {
    if (fs.existsSync(CONTACTS_FILE)) {
      const raw = fs.readFileSync(CONTACTS_FILE, "utf-8");
      return JSON.parse(raw);
    }
  } catch (e) {
    console.error("Failed to read local contacts file:", e);
  }
  return [];
}

export async function GET(req: Request) {
  try {
    // 1. Rate limiting
    const rateLimit = checkRateLimit(req, "admin:contacts", 30, 60 * 1000);
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
          .from("contacts")
          .select("*")
          .order("created_at", { ascending: false });

        if (!error && data && data.length > 0) {
          return NextResponse.json({ contacts: data });
        }
      } catch (err) {
        console.warn("Supabase fetch error for admin contacts:", err);
      }
    }

    // Fallback to local storage
    const localList = getLocalContacts();
    return NextResponse.json({ contacts: localList });
  } catch (error) {
    console.error("Failed to fetch admin contacts:", error);
    return NextResponse.json({ error: "Failed to fetch contact messages" }, { status: 500 });
  }
}
