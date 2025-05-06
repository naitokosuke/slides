const config = {
  trailingComma: "es5",
  tabWidth: 2,
  semi: true,
  singleQuote: false,
  plugins: ["prettier-plugin-slidev"],
  plugins: ["prettier-plugin-slidev"],
  overrides: [
    {
      files: ["slides.md", "pages/*.md"],
      options: {
        parser: "slidev",
        // plugins: ["prettier-plugin-slidev"],
      },
    },
  ],
};

export default config;
