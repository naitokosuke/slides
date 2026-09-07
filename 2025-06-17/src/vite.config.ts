// Vite 8's default lightningcss minifier chokes on this slide's UnoCSS-generated
// CSS ("Invalid state" here, "Unexpected end of input" on other decks); esbuild
// doesn't. Same workaround as site/nuxt.config.ts.
// (No `vite` import: this package has no direct dependency on it.)
export default {
  build: { cssMinify: "esbuild" },
};
