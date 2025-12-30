import { defineConfig } from "unocss";
import presetWebFonts from "@unocss/preset-web-fonts";

export default defineConfig({
  presets: [
    presetWebFonts({
      provider: "google",
      fonts: {
        "yuji-syuku": "Yuji Syuku",
        "cormorant-garamond": "Cormorant Garamond",
      },
    }),
  ],
});
