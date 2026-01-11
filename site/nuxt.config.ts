// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },

  modules: ["@unocss/nuxt"],

  app: {
    head: {
      title: "Slides - naitokosuke",
      meta: [
        {
          name: "description",
          content: "Tech talks and presentations by naitokosuke",
        },
        { property: "og:title", content: "Slides - naitokosuke" },
        { property: "og:description", content: "Tech talks and presentations" },
        {
          property: "og:image",
          content: "https://slides.naito.dev/og-image.png",
        },
        { property: "og:url", content: "https://slides.naito.dev/" },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    },
  },

  // SSG configuration
  ssr: true,
  nitro: {
    preset: "static",
    prerender: {
      // Don't crawl links - slides are external
      crawlLinks: false,
      // Only prerender the index page
      routes: ["/"],
    },
  },
});
