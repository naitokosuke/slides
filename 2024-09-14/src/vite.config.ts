// Vite 8's default lightningcss minifier chokes on this slide's UnoCSS-generated
// CSS ("Unexpected end of input"); esbuild doesn't. Same workaround as site/nuxt.config.ts.
// (No `vite` import: this package has no direct dependency on it.)
export default {
  build: { cssMinify: "esbuild" },
};
