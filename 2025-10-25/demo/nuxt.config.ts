export default defineNuxtConfig({
  modules: [
    "@nuxt/eslint",
    "nuxt-typed-router",
    "@nuxtjs/i18n",
    "@nuxt/content",
  ],
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  devServer: {
    port: 7110,
  },
  compatibilityDate: "2025-07-15",
  eslint: {
    config: {
      stylistic: {
        indent: 2,
        quotes: "double",
        semi: true,
      },
    },
  },
  i18n: {
    locales: [
      {
        code: "ja",
        name: "日本語",
        file: "ja.json",
        language: "ja-JP",
        domain: "localhost",
      },
      {
        code: "en",
        name: "English",
        file: "en.json",
        language: "en-US",
        domain: "localhost",
      },
    ],
    defaultLocale: "ja",
    strategy: "prefix_except_default",
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: "i18n_redirected",
      redirectOn: "all",
      alwaysRedirect: false,
      fallbackLocale: "ja",
    },
    experimental: {
      localeDetector: "./utils/localeDetector.ts",
    },
    compilation: {
      strictMessage: true,
    },
  },
});
