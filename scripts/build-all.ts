import fs from "node:fs/promises";
import path from "node:path";
import process from "node:process";
import { fileURLToPath } from "node:url";
import { cli, define } from "gunshi";
import { execa } from "execa";

const rootDir = fileURLToPath(new URL("..", import.meta.url));
const distDir = path.join(rootDir, "dist");

// Slides with standalone workspace (have their own pnpm-workspace.yaml)
const STANDALONE_WORKSPACES = ["2025-10-25"];

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
    const folderDir = path.join(rootDir, folder);
    const srcDir = path.join(folderDir, "src");
    const slideDist = path.join(folderDir, "dist");

    // Check if this is a standalone workspace
    const isStandaloneWorkspace = STANDALONE_WORKSPACES.includes(folder);

    if (isStandaloneWorkspace) {
      // Standalone workspace: build from root directory
      console.log(`Building ${folder} (standalone workspace)...`);

      try {
        // Install dependencies first
        console.log(`Installing dependencies for ${folder}...`);
        const installArgs = process.env.CI
          ? ["install", "--frozen-lockfile"]
          : ["install"];
        await execa("pnpm", installArgs, {
          cwd: folderDir,
          stdio: "inherit",
        });

        // Build demo app
        console.log(`Building demo app for ${folder}...`);
        await execa("pnpm", ["run", "build:demo"], {
          cwd: folderDir,
          stdio: "inherit",
        });

        // Copy types
        console.log(`Copying types for ${folder}...`);
        await execa("pnpm", ["run", "copy:types"], {
          cwd: folderDir,
          stdio: "inherit",
        });

        // Build slides with base path
        console.log(`Building slides for ${folder}...`);
        await execa("pnpm", ["--filter", "src", "run", "build"], {
          cwd: folderDir,
          stdio: "inherit",
          env: {
            ...process.env,
            BASE_URL: `/${folder}/`,
          },
        });

        // Move built files to dist/{folder}/
        const targetDir = path.join(distDir, folder);
        await fs.rename(slideDist, targetDir);

        console.log(`✓ ${folder} built successfully`);
      } catch (error) {
        console.error(`✗ ${folder} failed to build`);
        throw error;
      }
    } else {
      // Standard slide: build from src directory
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
  }

  console.log(`\nAll slides built to ${distDir}`);
}

const command = define({
  name: "build-all",
  description: "Build all slides for CI deployment",
  run: async () => {
    await buildAll();
  },
});

await cli(process.argv.slice(2), command, {
  name: "build-all",
  version: "1.0.0",
});
