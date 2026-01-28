import antfu from "@antfu/eslint-config";

export default antfu({
  vue: true,
  markdown: false,
  stylistic: {
    quotes: "double",
    semi: true,
  },
  formatters: {
    css: true,
  },
  ignores: ["**/demo/eslint/**"],
});
