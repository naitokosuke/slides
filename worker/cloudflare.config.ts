import { bindings, defineConfig, triggers } from "cf/config";

export default defineConfig({
  worker: {
    name: "slides",
    compatibilityDate: "2024-12-30",
    entrypoint: "src/index.ts",
    triggers: [
      triggers.fetch({
        pattern: "slides.naito.dev/*",
        zone: "naito.dev",
      }),
    ],
    env: {
      ASSETS: bindings.r2({
        name: "slides",
      }),
    },
  },
});
