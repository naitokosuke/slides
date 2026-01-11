import { defineConfig } from "vite";

export default defineConfig({
  // Set base path for GitHub Pages deployment
  base: process.env.CI ? "/naive-vue-fes-japan-2025-slide/" : "/",
});
