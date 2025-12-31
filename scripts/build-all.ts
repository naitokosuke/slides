import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { execa } from "execa";

const rootDir = fileURLToPath(new URL("..", import.meta.url));
const distDir = path.join(rootDir, "dist");

async function buildAll() {
  // Get all slide folders (matching YYYY-MM-DD pattern)
  const entries = await fs.readdir(rootDir, { withFileTypes: true });
  const slideFolders = entries
    .filter((e) => e.isDirectory() && /^\d{4}-\d{2}-\d{2}$/.test(e.name))
    .map((e) => e.name)
    .sort();

  // Clean dist directory
  await fs.rm(distDir, { recursive: true, force: true });
  await fs.mkdir(distDir, { recursive: true });

  // Build each slide
  for (const folder of slideFolders) {
    const srcDir = path.join(rootDir, folder, "src");
    const slideDist = path.join(rootDir, folder, "dist");

    // Check if src/package.json exists (is a valid slide project)
    try {
      await fs.access(path.join(srcDir, "package.json"));
    } catch {
      console.log(`Skipping ${folder}: no package.json`);
      continue;
    }

    console.log(`Building ${folder}...`);

    try {
      await execa("pnpm", ["run", "build", "--base", `/${folder}/`], {
        cwd: srcDir,
        stdio: "inherit",
      });

      // Move built files to dist/{folder}/
      const targetDir = path.join(distDir, folder);
      await fs.rename(slideDist, targetDir);

      console.log(`✓ ${folder} built successfully`);
    } catch (error) {
      console.error(`✗ ${folder} failed to build`);
      throw error;
    }
  }

  console.log(`\nAll slides built to ${distDir}`);
}

await buildAll();
