import fs from "node:fs/promises";
import path from "node:path";
import matter from "gray-matter";

interface SlideInfo {
  folder: string;
  title: string;
  date: string;
  ogImage: string | null;
}

const EXCLUDED_FOLDERS = import.meta.dev ? [] : ["0000-00-00"];

async function exists(file: string) {
  try {
    await fs.access(file);
    return true;
  } catch {
    return false;
  }
}

export default defineEventHandler(async () => {
  const rootDir = path.resolve(process.cwd(), "..");

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
    const folderDir = path.join(rootDir, folder);
    const ogImage = (await exists(path.join(folderDir, "og-image.png")))
      ? `/${folder}/og-image.png`
      : null;

    let title = folder;
    try {
      const content = await fs.readFile(
        path.join(folderDir, "src", "slides.md"),
        "utf-8",
      );
      const { data } = matter(content);
      title =
        data.title ||
        data.info?.split("\n")[0]?.replace(/^##\s*/, "") ||
        folder;
    } catch {
      title = folder;
    }

    slides.push({ folder, title, date: folder, ogImage });
  }

  slides.sort((a, b) => b.date.localeCompare(a.date));

  return slides;
});
