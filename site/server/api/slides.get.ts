import fs from "node:fs/promises";
import path from "node:path";
import matter from "gray-matter";

interface SlideInfo {
  folder: string;
  title: string;
  date: string;
}

// Demo folders to exclude
const EXCLUDED_FOLDERS = ["0000-00-00"];

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

  return slides;
});
