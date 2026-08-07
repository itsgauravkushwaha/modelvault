import { NextResponse } from "next/server";
import { z } from "zod";
import { supabase } from "@/lib/supabase";
import { publicEnv } from "@/env";
import { checkRateLimit } from "@/lib/rate-limit";
import fs from "fs";
import path from "path";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name is too long"),
  email: z.string().trim().email("Invalid email address"),
  message: z.string().trim().min(1, "Message is required").max(2000, "Message is too long"),
});

const CONTACTS_FILE = path.join(process.cwd(), "src/data/contacts_db.json");

function ensureLocalContactsFile(): any[] {
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

function saveLocalContact(record: any): void {
  try {
    const list = ensureLocalContactsFile();
    list.unshift(record);
    fs.writeFileSync(CONTACTS_FILE, JSON.stringify(list, null, 2), "utf-8");
  } catch (e) {
    console.error("Failed to save local contact record:", e);
  }
}

export async function POST(req: Request) {
  try {
    // Rate limit: max 5 contact submissions per 10 minutes per IP
    const rateLimit = checkRateLimit(req, "public:contact", 5, 10 * 60 * 1000);
    if (!rateLimit.allowed) {
      return NextResponse.json(
        { error: "Too many contact submissions. Please try again later." },
        { status: 429 }
      );
    }

    const body = await req.json().catch(() => ({}));
    const parsed = contactSchema.safeParse(body);

    if (!parsed.success) {
      const issue = parsed.error.issues[0]?.message || "Invalid form input. Please fill out all fields.";
      return NextResponse.json(
        { error: issue },
        { status: 400 }
      );
    }

    const { name, email, message } = parsed.data;
    const newRecord = {
      id: Date.now(),
      name,
      email,
      message,
      created_at: new Date().toISOString(),
    };

    const isPlaceholder = publicEnv.NEXT_PUBLIC_SUPABASE_URL?.includes("placeholder");

    if (!isPlaceholder) {
      try {
        const { error } = await supabase.from("contacts").insert([newRecord]);
        if (error) {
          console.warn("Supabase insert error on contacts:", error.message);
        }
      } catch (err) {
        console.warn("Failed to connect to Supabase for contacts:", err);
      }
    }

    // Always save local JSON fallback
    saveLocalContact(newRecord);

    return NextResponse.json({ success: true, message: "Thank you! Your message has been received." });
  } catch (error) {
    console.error("Contact submission error:", error);
    return NextResponse.json({ error: "Failed to deliver message." }, { status: 500 });
  }
}
