import fs from "fs";
import path from "path";

const dbPath = path.join(process.cwd(), "src/data/models_db.json");
const modelsTsPath = path.join(process.cwd(), "src/data/models.ts");

const raw = fs.readFileSync(dbPath, "utf-8");
const models = JSON.parse(raw);

const sanitized = models.map((m: any) => {
  const clean: any = { ...m };
  delete clean.created_at;

  Object.keys(clean).forEach((key) => {
    if (clean[key] === null) {
      if (key === "featured" || key === "trending" || key === "isDeprecated" || key === "hasApi" || key === "hasSelfHost") {
        clean[key] = false;
      } else if (key === "useCases" || key === "modalities" || key === "benchmarks" || key === "strengths" || key === "weaknesses" || key === "tags" || key === "aliases") {
        clean[key] = [];
      } else if (key === "hardwareRequirements" || key === "bestForCategory") {
        delete clean[key];
      } else {
        clean[key] = "";
      }
    }
  });

  return clean;
});

fs.writeFileSync(dbPath, JSON.stringify(sanitized, null, 2), "utf-8");
console.log(`Sanitized ${dbPath}`);

const modelsTsContent = `import { AIModel } from "@/types/model";\n\nexport const MODELS: AIModel[] = ${JSON.stringify(sanitized.slice(0, 1000), null, 2)};\n`;
fs.writeFileSync(modelsTsPath, modelsTsContent, "utf-8");
console.log(`Sanitized ${modelsTsPath}`);
