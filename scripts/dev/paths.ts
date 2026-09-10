import path from "node:path";
import { fileURLToPath } from "node:url";

export const rootDir = fileURLToPath(new URL("../..", import.meta.url));
export const siteDir = path.join(rootDir, "site");
export const publicDir = path.join(rootDir, "public");
