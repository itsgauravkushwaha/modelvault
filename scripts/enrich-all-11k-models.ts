import { createClient } from "@supabase/supabase-js";
import fs from "fs";
import path from "path";
import { AIModel } from "../src/types/model";
import { enrichModelData } from "../src/lib/utils/model-enricher";

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL || "https://ojcvsxwybxipwbvwtuvg.supabase.co";
const SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY || "sb_secret_Pz2m_adjD1UzioOWGh9D_g_w8Z5iq2k";

const supabase = createClient(SUPABASE_URL, SERVICE_ROLE_KEY);

async function enrichAll11kModels() {
  console.log("🚀 Starting database-wide information enrichment across all 11,468+ models in Supabase Postgres...\n");

  const PAGE_SIZE = 1000;
  let from = 0;
  let hasMore = true;
  let allModels: AIModel[] = [];

  // 1. Fetch all models from Supabase
  while (hasMore) {
    console.log(`📥 Fetching models range ${from} to ${from + PAGE_SIZE - 1}...`);
    const { data, error } = await supabase
      .from("models")
      .select("*")
      .range(from, from + PAGE_SIZE - 1);

    if (error) {
      console.error(`❌ Error fetching models range ${from}-${from + PAGE_SIZE}:`, error.message);
      break;
    }

    if (data && data.length > 0) {
      allModels.push(...(data as AIModel[]));
      from += data.length;
      if (data.length < PAGE_SIZE) {
        hasMore = false;
      }
    } else {
      hasMore = false;
    }
  }

  console.log(`\n✅ Loaded ${allModels.length} total models from Supabase. Processing rich descriptions, benchmarks, hardware requirements, strengths, & weaknesses...\n`);

  let enrichedCount = 0;

  // 2. Apply enrichModelData to every single model
  const enrichedModels: AIModel[] = allModels.map((model) => {
    enrichedCount++;
    const enriched = enrichModelData(model);

    // Clean up any null / created_at fields for JSON compatibility
    const clean: any = { ...enriched };
    delete clean.created_at;
    Object.keys(clean).forEach((k) => {
      if (clean[k] === null) {
        if (k === "featured" || k === "trending" || k === "isDeprecated" || k === "hasApi" || k === "hasSelfHost") {
          clean[k] = false;
        } else if (k === "useCases" || k === "modalities" || k === "benchmarks" || k === "strengths" || k === "weaknesses" || k === "tags" || k === "aliases") {
          clean[k] = [];
        } else if (k === "hardwareRequirements" || k === "bestForCategory") {
          delete clean[k];
        } else {
          clean[k] = "";
        }
      }
    });

    return clean as AIModel;
  });

  console.log(`🔄 Applying enriched data back to Supabase Postgres in batches of 200...`);

  // 3. Batch upsert back into Supabase Postgres
  const BATCH_SIZE = 200;
  let successCount = 0;
  let failCount = 0;

  for (let i = 0; i < enrichedModels.length; i += BATCH_SIZE) {
    const chunk = enrichedModels.slice(i, i + BATCH_SIZE);
    const { error } = await supabase.from("models").upsert(chunk, { onConflict: "slug" });

    if (error) {
      console.error(`❌ Batch ${Math.floor(i / BATCH_SIZE) + 1} upsert error:`, error.message);
      failCount += chunk.length;
    } else {
      successCount += chunk.length;
      if (successCount % 1000 === 0 || successCount === enrichedModels.length) {
        console.log(`✅ Progress: ${successCount} / ${enrichedModels.length} models enriched in Supabase...`);
      }
    }
  }

  // 4. Save to local data files
  const dbPath = path.join(process.cwd(), "src/data/models_db.json");
  const modelsTsPath = path.join(process.cwd(), "src/data/models.ts");

  fs.writeFileSync(dbPath, JSON.stringify(enrichedModels, null, 2), "utf-8");
  console.log(`💾 Saved ${enrichedModels.length} enriched models to src/data/models_db.json.`);

  const modelsTsContent = `import { AIModel } from "@/types/model";\n\nexport const MODELS: AIModel[] = ${JSON.stringify(enrichedModels.slice(0, 1000), null, 2)};\n`;
  fs.writeFileSync(modelsTsPath, modelsTsContent, "utf-8");
  console.log(`💾 Saved top 1,000 enriched models to src/data/models.ts.`);

  console.log("\n================ ENRICHMENT SUMMARY ================");
  console.log(`Total models enriched:          ${enrichedCount}`);
  console.log(`Successfully updated Supabase: ${successCount}`);
  console.log(`Failed records:                ${failCount}`);
  console.log("===================================================\n");
}

enrichAll11kModels().catch((err) => {
  console.error("Fatal error during model enrichment:", err);
  process.exit(1);
});
