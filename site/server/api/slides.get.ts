import fs from "node:fs/promises";
import path from "node:path";
import matter from "gray-matter";

interface SlideInfo {
  folder: string;
  title: string;
  date: string;
  ogImage: string;
}

// Demo folders to exclude
const EXCLUDED_FOLDERS = ["0000-00-00"];

// Base URL for OG images (production URL for dev, relative for build)
const OG_IMAGE_BASE =
  process.env.NODE_ENV === "development" ? "https://slides.naito.dev" : "";

export default defineEventHandler(async () => {
  const rootDir = path.resolve(process.cwd(), "..");

  // Get all slide folders (matching YYYY-MM-DD or YYYY-MM-DD-suffix pattern)
  const entries = await fs.readdir(rootDir, { withFileTypes: true });
  const slideFolders = entries
    .filter(
      (e) => e.isDirectory() && /^\d{4}-\d{2}-\d{2}(-[\w]+)?$/.test(e.name),
    )
    .filter((e) => !EXCLUDED_FOLDERS.includes(e.name))
    .map((e) => e.name)
    .sort();

  const slides: SlideInfo[] = [];

  for (const folder of slideFolders) {
    const slidesPath = path.join(rootDir, folder, "src", "slides.md");

    // OG image path (stored in each slide directory root)
    const ogImage = `${OG_IMAGE_BASE}/${folder}/og-image.png`;

    try {
      const content = await fs.readFile(slidesPath, "utf-8");
      const { data } = matter(content);
      const title =
        data.title ||
        data.info?.split("\n")[0]?.replace(/^##\s*/, "") ||
        folder;
      slides.push({
        folder,
        title,
        date: folder,
        ogImage,
      });
    } catch {
      slides.push({
        folder,
        title: folder,
        date: folder,
        ogImage,
      });
    }
  }

  // Sort by date descending (newest first)
  slides.sort((a, b) => b.date.localeCompare(a.date));

  return slides;
});
