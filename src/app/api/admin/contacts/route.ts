import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";
import { publicEnv } from "@/env";
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

export async function GET() {
  try {
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

    // Merge or fallback to local storage
    const localList = getLocalContacts();
    return NextResponse.json({ contacts: localList });
  } catch (error) {
    console.error("Failed to fetch admin contacts:", error);
    return NextResponse.json({ error: "Failed to fetch contact messages" }, { status: 500 });
  }
}
