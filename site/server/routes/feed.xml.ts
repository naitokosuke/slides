import fs from "node:fs/promises";
import path from "node:path";
import matter from "gray-matter";

interface SlideInfo {
  folder: string;
  title: string;
  date: string;
}

const EXCLUDED_FOLDERS = ["0000-00-00"];
const SITE_URL = "https://slides.naito.dev";

function escapeXml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function formatRfc822Date(dateStr: string): string {
  const match = dateStr.match(/^(\d{4})-(\d{2})-(\d{2})/);
  if (!match) return new Date().toUTCString();
  const [, year, month, day] = match;
  const date = new Date(Number(year), Number(month) - 1, Number(day));
  return date.toUTCString();
}

export default defineEventHandler(async (event) => {
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

  slides.sort((a, b) => b.date.localeCompare(a.date));

  const lastBuildDate = slides.length > 0 ? formatRfc822Date(slides[0].date) : new Date().toUTCString();

  const items = slides
    .map(
      (slide) => `    <item>
      <title>${escapeXml(slide.title)}</title>
      <link>${SITE_URL}/${slide.folder}/</link>
      <guid isPermaLink="true">${SITE_URL}/${slide.folder}/</guid>
      <pubDate>${formatRfc822Date(slide.date)}</pubDate>
      <enclosure url="${SITE_URL}/${slide.folder}/og-image.png" type="image/png" length="0"/>
    </item>`,
    )
    .join("\n");

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Slides - naitokosuke</title>
    <link>${SITE_URL}/</link>
    <description>Tech talks and presentations by naitokosuke</description>
    <language>ja</language>
    <lastBuildDate>${lastBuildDate}</lastBuildDate>
    <atom:link href="${SITE_URL}/feed.xml" rel="self" type="application/rss+xml"/>
${items}
  </channel>
</rss>`;

  setHeader(event, "Content-Type", "application/rss+xml; charset=utf-8");
  return rss;
});
