import { mkdtempSync, writeFileSync, rmSync, symlinkSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { spawnSync } from "node:child_process";

// Compile only the decision engine and its meaningful constraint scenarios.
const root = process.cwd();
const temporary = mkdtempSync(join(tmpdir(), "modelvault-tests-"));
try {
  const config = join(temporary, "tsconfig.json");
  writeFileSync(config, JSON.stringify({
    extends: join(root, "tsconfig.json"),
    compilerOptions: { noEmit: false, incremental: false, module: "CommonJS", moduleResolution: "node", rootDir: root, outDir: join(temporary, "out"), typeRoots: [join(root, "node_modules/@types")], types: ["node"] },
    include: [join(root, "tests/recommendations.test.ts")], exclude: [],
  }));
  let result = spawnSync(process.execPath, [join(root, "node_modules/typescript/bin/tsc"), "-p", config], { stdio: "inherit" });
  if (result.status !== 0) process.exitCode = result.status ?? 1;
  else {
    symlinkSync(join(root, "node_modules"), join(temporary, "out/node_modules"), "junction");
    result = spawnSync(process.execPath, ["--test", join(temporary, "out/tests/recommendations.test.js")], { stdio: "inherit" });
    process.exitCode = result.status ?? 1;
  }
} finally { rmSync(temporary, { recursive: true, force: true }); }
