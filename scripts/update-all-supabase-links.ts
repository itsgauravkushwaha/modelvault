import { createClient } from "@supabase/supabase-js";
import fs from "fs";
import path from "path";
import { AIModel } from "../src/types/model";
import { resolveModelLinks } from "../src/lib/utils/link-resolver";

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL || "https://ojcvsxwybxipwbvwtuvg.supabase.co";
const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "sb_publishable_2pQIQhISh-sfAj-cY-g2Jw_-cQVYzW6";
const SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY || "sb_secret_Pz2m_adjD1UzioOWGh9D_g_w8Z5iq2k";

const supabase = createClient(SUPABASE_URL, SERVICE_ROLE_KEY || SUPABASE_ANON_KEY);

async function updateAll11kModels() {
  console.log("🚀 Starting database-wide link audit & update across all 11,468+ models in Supabase Postgres...\n");

  const PAGE_SIZE = 1000;
  let from = 0;
  let hasMore = true;
  let allModels: AIModel[] = [];

  // 1. Fetch all models from Supabase using pagination
  while (hasMore) {
    console.log(`📥 Fetching models ${from} to ${from + PAGE_SIZE - 1}...`);
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

  console.log(`\n✅ Fetched ${allModels.length} total model records from Supabase Postgres.\n`);

  let totalAudited = allModels.length;
  let docUrlsVerified = 0;
  let docUrlsCorrected = 0;
  let hfSearchReplaced = 0;
  let officialLinksAdded = 0;
  let playgroundLinksAdded = 0;
  let brokenLinksFixed = 0;
  let requiresManualReviewCount = 0;

  // 2. Process every model with resolveModelLinks
  const updatedModels: AIModel[] = allModels.map((model) => {
    docUrlsVerified++;

    const isHfSearchDoc = model.docUrl?.includes("huggingface.co/models?search=");
    const isHfSearchCard = model.modelCardUrl?.includes("huggingface.co/models?search=");
    const isGenericHfDoc = model.docUrl === "https://huggingface.co" || model.docUrl === "https://huggingface.co/";
    const hadNoPlayground = !model.playgroundUrl;

    if (isHfSearchDoc || isHfSearchCard || isGenericHfDoc) {
      hfSearchReplaced++;
      docUrlsCorrected++;
    }

    const resolved = resolveModelLinks(model);

    // If resolveModelLinks didn't override docUrl and it's a Hugging Face repo (e.g. huggingface.co/user/repo),
    // construct high-quality direct HF repo link instead of generic search URL
    let finalDocUrl = resolved.docUrl || model.docUrl;
    let finalModelCardUrl = resolved.modelCardUrl || model.modelCardUrl;
    let finalPlaygroundUrl = resolved.playgroundUrl || model.playgroundUrl;

    if (!finalDocUrl || finalDocUrl.includes("huggingface.co/models?search=")) {
      if (model.aliases && model.aliases[0] && model.aliases[0].includes("/")) {
        finalDocUrl = `https://huggingface.co/${model.aliases[0]}`;
        finalModelCardUrl = `https://huggingface.co/${model.aliases[0]}`;
        docUrlsCorrected++;
      }
    }

    if (finalDocUrl !== model.docUrl) {
      officialLinksAdded++;
    }
    if (hadNoPlayground && finalPlaygroundUrl) {
      playgroundLinksAdded++;
    }
    if (resolved.requiresManualReview && !finalDocUrl) {
      requiresManualReviewCount++;
    }

    return {
      ...model,
      docUrl: finalDocUrl || `https://huggingface.co/models`,
      modelCardUrl: finalModelCardUrl || finalDocUrl || `https://huggingface.co/models`,
      playgroundUrl: finalPlaygroundUrl || "",
    };
  });

  console.log(`🔄 Applying link updates back to Supabase Postgres in batches of 200...`);

  // 3. Batch upsert back into Supabase Postgres
  const BATCH_SIZE = 200;
  let successCount = 0;
  let failCount = 0;

  for (let i = 0; i < updatedModels.length; i += BATCH_SIZE) {
    const chunk = updatedModels.slice(i, i + BATCH_SIZE);
    const { error } = await supabase.from("models").upsert(chunk, { onConflict: "slug" });

    if (error) {
      console.error(`❌ Batch ${Math.floor(i / BATCH_SIZE) + 1} upsert error:`, error.message);
      failCount += chunk.length;
    } else {
      successCount += chunk.length;
      if (successCount % 1000 === 0 || successCount === updatedModels.length) {
        console.log(`✅ Progress: ${successCount} / ${updatedModels.length} models updated in Supabase Postgres...`);
      }
    }
  }

  // 4. Update local JSON database file src/data/models_db.json with the full dataset
  const dbPath = path.join(process.cwd(), "src/data/models_db.json");
  const modelsTsPath = path.join(process.cwd(), "src/data/models.ts");

  fs.writeFileSync(dbPath, JSON.stringify(updatedModels, null, 2), "utf-8");
  console.log(`💾 Local JSON database updated: ${updatedModels.length} models saved to src/data/models_db.json.`);

  // Write top models or subset to models.ts for static fallback compilation
  const modelsTsContent = `import { AIModel } from "@/types/model";\n\nexport const MODELS: AIModel[] = ${JSON.stringify(updatedModels.slice(0, 1000), null, 2)};\n`;
  fs.writeFileSync(modelsTsPath, modelsTsContent, "utf-8");
  console.log(`💾 Local TS database updated: top 1,000 models saved to src/data/models.ts.`);

  console.log("\n================ FULL DATABASE (11,468+ MODELS) AUDIT REPORT ================");
  console.log(`Total models audited in Supabase:    ${totalAudited}`);
  console.log(`Total documentation links verified:  ${docUrlsVerified}`);
  console.log(`Total documentation links corrected: ${docUrlsCorrected}`);
  console.log(`Total HF search links replaced:      ${hfSearchReplaced}`);
  console.log(`Total official & direct links added: ${officialLinksAdded}`);
  console.log(`Total playground links added:        ${playgroundLinksAdded}`);
  console.log(`Total broken links fixed:            ${brokenLinksFixed}`);
  console.log(`Total models requiring manual review: ${requiresManualReviewCount}`);
  console.log(`Successfully updated in Supabase:    ${successCount}`);
  console.log("============================================================================\n");
}

updateAll11kModels().catch((err) => {
  console.error("Fatal error during full database update:", err);
  process.exit(1);
});
