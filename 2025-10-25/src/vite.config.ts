import { defineConfig } from "vite";

export default defineConfig({
  base: process.env.BASE_URL || "/",
  build: {
    chunkSizeWarningLimit: 8000,
  },
  optimizeDeps: {
    include: ["@vueuse/integrations/useQRCode"],
    exclude: ["monaco-editor"],
  },
});
