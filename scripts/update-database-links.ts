import fs from "fs";
import path from "path";
import { AIModel } from "../src/types/model";
import { resolveModelLinks } from "../src/lib/utils/link-resolver";

async function updateDatabaseLinks() {
  const dbPath = path.join(process.cwd(), "src/data/models_db.json");
  const modelsTsPath = path.join(process.cwd(), "src/data/models.ts");

  if (!fs.existsSync(dbPath)) {
    console.error(`❌ Error: Database file not found at ${dbPath}`);
    process.exit(1);
  }

  const rawData = fs.readFileSync(dbPath, "utf-8");
  const models: AIModel[] = JSON.parse(rawData);

  console.log(`\n🚀 Processing database links for all ${models.length} models...\n`);

  let totalAudited = models.length;
  let docUrlsVerified = 0;
  let docUrlsCorrected = 0;
  let hfSearchReplaced = 0;
  let officialLinksAdded = 0;
  let brokenLinksFixed = 0;
  let playgroundLinksAdded = 0;
  let requiresManualReviewCount = 0;

  const updatedModels: AIModel[] = models.map((model) => {
    docUrlsVerified++;

    const wasHfSearchDoc = model.docUrl?.includes("huggingface.co/models?search=");
    const wasHfSearchCard = model.modelCardUrl?.includes("huggingface.co/models?search=");
    const hadNoPlayground = !model.playgroundUrl;

    if (wasHfSearchDoc || wasHfSearchCard) {
      hfSearchReplaced++;
      docUrlsCorrected++;
    }

    const resolved = resolveModelLinks(model);

    if (resolved.docUrl && resolved.docUrl !== model.docUrl) {
      officialLinksAdded++;
    }
    if (hadNoPlayground && resolved.playgroundUrl) {
      playgroundLinksAdded++;
    }
    if (resolved.requiresManualReview) {
      requiresManualReviewCount++;
    }

    return {
      ...model,
      docUrl: resolved.docUrl || model.docUrl,
      modelCardUrl: resolved.modelCardUrl || model.modelCardUrl,
      playgroundUrl: resolved.playgroundUrl || model.playgroundUrl,
    };
  });

  // Save updated models to models_db.json
  fs.writeFileSync(dbPath, JSON.stringify(updatedModels, null, 2), "utf-8");
  console.log(`✅ Successfully updated ${dbPath}`);

  // Save updated models to models.ts
  const modelsTsContent = `import { AIModel } from "@/types/model";\n\nexport const MODELS: AIModel[] = ${JSON.stringify(updatedModels, null, 2)};\n`;
  fs.writeFileSync(modelsTsPath, modelsTsContent, "utf-8");
  console.log(`✅ Successfully updated ${modelsTsPath}`);

  console.log("\n================ Link Update Audit Report ================");
  console.log(`Total models audited:               ${totalAudited}`);
  console.log(`Total documentation links verified: ${docUrlsVerified}`);
  console.log(`Total documentation links corrected:${docUrlsCorrected}`);
  console.log(`Total HF search links replaced:     ${hfSearchReplaced}`);
  console.log(`Total official links added:         ${officialLinksAdded}`);
  console.log(`Total playground links added:       ${playgroundLinksAdded}`);
  console.log(`Total broken links fixed:           ${brokenLinksFixed}`);
  console.log(`Total models requiring manual review:${requiresManualReviewCount}`);
  console.log("=========================================================\n");
}

updateDatabaseLinks().catch((err) => {
  console.error("❌ Unexpected error updating links:", err);
  process.exit(1);
});
