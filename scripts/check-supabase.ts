import { createClient } from "@supabase/supabase-js";
import { resolveModelLinks } from "../src/lib/utils/link-resolver";

const url = "https://ojcvsxwybxipwbvwtuvg.supabase.co";
const key = "sb_publishable_2pQIQhISh-sfAj-cY-g2Jw_-cQVYzW6";

const supabase = createClient(url, key);

async function runAuditAndFix() {
  console.log("🔍 Fetching model count from Supabase...");
  const { count, error } = await supabase.from("models").select("*", { count: "exact", head: true });
  if (error) {
    console.error("Supabase error:", error);
    return;
  }
  console.log(`🎉 Supabase database contains ${count} records!`);
}

runAuditAndFix();
