import { defineConfig } from "vite";

export default defineConfig({
  base: process.env.BASE_URL || "/",
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
