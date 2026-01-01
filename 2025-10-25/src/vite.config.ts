import { defineConfig } from "vite";

export default defineConfig({
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
