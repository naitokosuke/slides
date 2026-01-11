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

// Slides that already have manually created OG images
const SKIP_OG_GENERATION = ["2025-10-25", "2025-06-17"];

// Demo folders to exclude from build
const EXCLUDED_FOLDERS = ["0000-00-00"];

async function buildAll() {
  // Get all slide folders (matching YYYY-MM-DD or YYYY-MM-DD-suffix pattern)
  const entries = await fs.readdir(rootDir, { withFileTypes: true });
  const allSlideFolders = entries
    .filter((e) => e.isDirectory() && /^\d{4}-\d{2}-\d{2}(-[\w]+)?$/.test(e.name))
    .filter((e) => !EXCLUDED_FOLDERS.includes(e.name))
    .map((e) => e.name)
    .sort();

  // Check if we should only build changed slides
  const changedSlidesEnv = process.env.CHANGED_SLIDES;
  let slideFolders: string[];
  let isIncrementalBuild = false;

  if (changedSlidesEnv && changedSlidesEnv !== "all") {
    // Incremental build: only build changed slides
    const changedSet = new Set(
      changedSlidesEnv.split(",").map((s) => s.trim()),
    );
    slideFolders = allSlideFolders.filter((f) => changedSet.has(f));
    isIncrementalBuild = true;
    console.log(`Incremental build: ${slideFolders.join(", ")}`);
  } else {
    // Full build
    slideFolders = allSlideFolders;
    console.log("Full build: all slides");
  }

  // Clean dist directory (only for full builds)
  if (!isIncrementalBuild) {
    await fs.rm(distDir, { recursive: true, force: true });
  }
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

  // Copy public folder to dist
  await copyPublicAssets();

  // Generate OG images for slides that don't have them (only for built slides)
  await generateOgImages(slideFolders);

  // Generate homepage using Nuxt SSG
  await generateHomepage();
}

async function copyPublicAssets() {
  const publicDir = path.join(rootDir, "public");
  try {
    await fs.access(publicDir);
    const files = await fs.readdir(publicDir);
    for (const file of files) {
      await fs.copyFile(path.join(publicDir, file), path.join(distDir, file));
    }
    console.log("✓ Public assets copied");
  } catch {
    // No public folder, skip
  }
}

async function generateOgImages(slideFolders: string[]) {
  console.log("\nGenerating OG images...");

  for (const folder of slideFolders) {
    // Skip slides that already have manually created OG images
    if (SKIP_OG_GENERATION.includes(folder)) {
      console.log(`Skipping OG image for ${folder} (manually created)`);
      continue;
    }

    const srcDir = path.join(rootDir, folder, "src");
    const targetDir = path.join(distDir, folder);
    const ogImagePath = path.join(targetDir, "og-image.png");

    // Check if OG image already exists in dist
    try {
      await fs.access(ogImagePath);
      console.log(`Skipping OG image for ${folder} (already exists)`);
      continue;
    } catch {
      // OG image doesn't exist, generate it
    }

    console.log(`Generating OG image for ${folder}...`);

    const ogExportDir = path.join(srcDir, "og-image");

    try {
      // Export first slide as PNG
      // slidev export creates a directory with 1.png inside
      await execa(
        "pnpm",
        [
          "exec",
          "slidev",
          "export",
          "--format",
          "png",
          "--range",
          "1",
          "--output",
          "og-image",
        ],
        {
          cwd: srcDir,
          stdio: "inherit",
        },
      );

      // Move the generated image to dist folder
      const generatedImage = path.join(ogExportDir, "1.png");
      try {
        await fs.access(generatedImage);
        await fs.rename(generatedImage, ogImagePath);
        // Clean up the export directory
        await fs.rm(ogExportDir, { recursive: true, force: true });
        console.log(`✓ OG image generated for ${folder}`);
      } catch {
        console.warn(`⚠ Could not find generated OG image for ${folder}`);
      }
    } catch (error) {
      console.warn(`⚠ Failed to generate OG image for ${folder}:`, error);
      // Clean up on failure
      await fs
        .rm(ogExportDir, { recursive: true, force: true })
        .catch(() => {});
      // Continue with other slides, don't fail the entire build
    }
  }
}

async function generateHomepage() {
  console.log("\nGenerating homepage with Nuxt SSG...");

  const siteDir = path.join(rootDir, "site");

  try {
    // Generate static site
    await execa("pnpm", ["run", "generate"], {
      cwd: siteDir,
      stdio: "inherit",
    });

    // Copy generated files to dist (excluding _nuxt which goes to root)
    const siteOutput = path.join(siteDir, ".output", "public");
    const files = await fs.readdir(siteOutput);

    for (const file of files) {
      const src = path.join(siteOutput, file);
      const dest = path.join(distDir, file);
      const stat = await fs.stat(src);

      if (stat.isDirectory()) {
        await fs.cp(src, dest, { recursive: true });
      } else {
        await fs.copyFile(src, dest);
      }
    }

    console.log("✓ Homepage generated with Nuxt SSG");
  } catch (error) {
    console.error("✗ Failed to generate homepage");
    throw error;
  }
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
