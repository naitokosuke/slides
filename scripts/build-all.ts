import fs from "node:fs/promises";
import path from "node:path";
import process from "node:process";
import { fileURLToPath } from "node:url";
import { cli, define } from "gunshi";
import { execa } from "execa";
import matter from "gray-matter";

const rootDir = fileURLToPath(new URL("..", import.meta.url));
const distDir = path.join(rootDir, "dist");

// Slides with standalone workspace (have their own pnpm-workspace.yaml)
const STANDALONE_WORKSPACES = ["2025-10-25"];

// Slides that already have manually created OG images
const SKIP_OG_GENERATION = ["2025-10-25", "2025-06-17"];

// Demo folders to exclude from build
const EXCLUDED_FOLDERS = ["0000-00-00"];

async function buildAll() {
  // Get all slide folders (matching YYYY-MM-DD pattern)
  const entries = await fs.readdir(rootDir, { withFileTypes: true });
  const slideFolders = entries
    .filter((e) => e.isDirectory() && /^\d{4}-\d{2}-\d{2}$/.test(e.name))
    .filter((e) => !EXCLUDED_FOLDERS.includes(e.name))
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

  // Generate OG images for slides that don't have them
  await generateOgImages(slideFolders);

  // Generate homepage
  await generateHomepage(slideFolders);
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
        ["exec", "slidev", "export", "--format", "png", "--range", "1", "--output", "og-image"],
        {
          cwd: srcDir,
          stdio: "inherit",
        }
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
      await fs.rm(ogExportDir, { recursive: true, force: true }).catch(() => {});
      // Continue with other slides, don't fail the entire build
    }
  }
}

interface SlideInfo {
  folder: string;
  title: string;
  date: string;
}

async function generateHomepage(slideFolders: string[]) {
  console.log("\nGenerating homepage...");

  const slides: SlideInfo[] = [];

  for (const folder of slideFolders) {
    const slidesPath = path.join(rootDir, folder, "src", "slides.md");
    try {
      const content = await fs.readFile(slidesPath, "utf-8");
      const { data } = matter(content);
      const title = data.title || data.info?.split("\n")[0]?.replace(/^##\s*/, "") || folder;
      slides.push({
        folder,
        title,
        date: folder,
      });
    } catch {
      slides.push({
        folder,
        title: folder,
        date: folder,
      });
    }
  }

  // Sort by date descending (newest first)
  slides.sort((a, b) => b.date.localeCompare(a.date));

  const html = generateHomepageHtml(slides);
  await fs.writeFile(path.join(distDir, "index.html"), html);
  console.log("✓ Homepage generated");
}

function generateHomepageHtml(slides: SlideInfo[]): string {
  const slideItems = slides
    .map(
      (slide) => `
      <a href="/${slide.folder}/" class="slide-card">
        <span class="date">${slide.date}</span>
        <span class="title">${escapeHtml(slide.title)}</span>
      </a>`
    )
    .join("\n");

  return `<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Slides - naitokosuke</title>
  <style>
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }
    body {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
      background: #0f0f0f;
      color: #e0e0e0;
      min-height: 100vh;
      padding: 2rem;
    }
    .container {
      max-width: 800px;
      margin: 0 auto;
    }
    h1 {
      font-size: 2rem;
      margin-bottom: 2rem;
      color: #fff;
    }
    .slides-list {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }
    .slide-card {
      display: flex;
      align-items: center;
      gap: 1.5rem;
      padding: 1.25rem 1.5rem;
      background: #1a1a1a;
      border-radius: 8px;
      text-decoration: none;
      color: inherit;
      transition: background 0.2s, transform 0.2s;
    }
    .slide-card:hover {
      background: #252525;
      transform: translateX(4px);
    }
    .date {
      font-family: "JetBrains Mono", monospace;
      font-size: 0.875rem;
      color: #888;
      white-space: nowrap;
    }
    .title {
      font-size: 1.125rem;
      color: #fff;
    }
    @media (max-width: 600px) {
      body {
        padding: 1rem;
      }
      .slide-card {
        flex-direction: column;
        align-items: flex-start;
        gap: 0.5rem;
      }
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>Slides</h1>
    <div class="slides-list">
${slideItems}
    </div>
  </div>
</body>
</html>`;
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
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
