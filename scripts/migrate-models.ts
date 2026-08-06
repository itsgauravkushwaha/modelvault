import { loadEnvConfig } from "@next/env";
import path from "path";
import fs from "fs";

// Load environment variables from .env.local / .env
loadEnvConfig(process.cwd());

import { createClient } from "@supabase/supabase-js";
import { AIModel } from "../src/types/model";

async function migrate() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseAnonKey || supabaseUrl.includes("placeholder")) {
    console.error("\n❌ Error: Valid Supabase environment variables are required.");
    console.error(`Current NEXT_PUBLIC_SUPABASE_URL: ${supabaseUrl || "undefined"}`);
    console.error("Please add your real Supabase URL and Anon Key to `.env.local` then re-run:\n  npx tsx scripts/migrate-models.ts\n");
    process.exit(1);
  }

  const supabase = createClient(supabaseUrl, supabaseAnonKey);

  const dbPath = path.join(process.cwd(), "src/data/models_db.json");
  if (!fs.existsSync(dbPath)) {
    console.error(`❌ Error: Database file not found at ${dbPath}`);
    process.exit(1);
  }

  const rawData = fs.readFileSync(dbPath, "utf-8");
  const models: AIModel[] = JSON.parse(rawData);

  console.log(`\n🚀 Found ${models.length} models in ${dbPath}. Starting migration to Supabase 'models' table...\n`);

  let successCount = 0;
  let failureCount = 0;
  const failures: { slug: string; error: string }[] = [];

  // Batch upsert in chunks of 50 models
  const BATCH_SIZE = 50;
  for (let i = 0; i < models.length; i += BATCH_SIZE) {
    const batch = models.slice(i, i + BATCH_SIZE);
    
    const { error } = await supabase
      .from("models")
      .upsert(batch, { onConflict: "slug" });

    if (error) {
      console.warn(`⚠️ Batch ${Math.floor(i / BATCH_SIZE) + 1} failed (${error.message}). Retrying item-by-item...`);
      for (const item of batch) {
        const { error: itemError } = await supabase
          .from("models")
          .upsert(item, { onConflict: "slug" });

        if (itemError) {
          failureCount++;
          failures.push({ slug: item.slug, error: itemError.message });
        } else {
          successCount++;
        }
      }
    } else {
      successCount += batch.length;
      console.log(`✅ Progress: ${Math.min(i + BATCH_SIZE, models.length)} / ${models.length} models migrated...`);
    }
  }

  console.log("\n================ Migration Summary ================");
  console.log(`Total models in JSON:  ${models.length}`);
  console.log(`Successfully migrated: ${successCount}`);
  console.log(`Failures:              ${failureCount}`);

  if (failures.length > 0) {
    console.log("\n❌ Failures breakdown:");
    failures.forEach((f) => console.log(` - ${f.slug}: ${f.error}`));
  }

  // Verification step (Requirement 9)
  console.log("\n🔍 Verifying records in Supabase...");
  const { count, error: countError } = await supabase
    .from("models")
    .select("*", { count: "exact", head: true });

  if (countError) {
    console.error("❌ Verification query failed:", countError.message);
  } else {
    console.log(`🎉 Verification confirmed: Supabase 'models' table contains ${count} records.`);
  }
}

migrate().catch((err) => {
  console.error("❌ Unexpected error during migration:", err);
  process.exit(1);
});
