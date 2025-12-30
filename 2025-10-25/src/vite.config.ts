import { defineConfig } from "vite";

export default defineConfig({
  // Set base path for GitHub Pages deployment
  base: process.env.CI ? "/vue-fes-japan-2025-slide/" : "/",
  build: {
    chunkSizeWarningLimit: 8000,
    rollupOptions: {
      output: {
        manualChunks: {
          monaco: ["monaco-editor"],
        },
      },
    },
  },
  optimizeDeps: {
    exclude: ["monaco-editor"],
  },
});
