/**
 * Monaco Editor Setup for Slidev
 *
 * Manages type definitions for Monaco Editor in presentations
 */

/// <reference path="./raw.d.ts" />

import { defineMonacoSetup } from "@slidev/types";

// CSS変数から値を取得するヘルパー関数
const getCSSVar = (varName: string): string => {
  if (typeof document !== "undefined") {
    return getComputedStyle(document.documentElement)
      .getPropertyValue(varName)
      .trim();
  }
  return "";
};

// CSS変数を参照する色定数
const COLORS = {
  primary: {
    gold: getCSSVar("--color-primary-gold"),
    sand: getCSSVar("--color-primary-sand"),
    bronze: getCSSVar("--color-primary-bronze"),
  },
  background: {
    darkPrimary: getCSSVar("--color-bg-dark-primary"),
    darkSecondary: getCSSVar("--color-bg-dark-secondary"),
    darkTertiary: getCSSVar("--color-bg-dark-tertiary"),
  },
  text: {
    primary: getCSSVar("--color-text-primary"),
    secondary: getCSSVar("--color-text-secondary"),
    accent: getCSSVar("--color-text-accent"),
  },
} as const;

const monacoTropicalTheme = {
  base: "vs-dark" as const,
  inherit: true,
  rules: [
    { token: "comment", foreground: "6c7086", fontStyle: "italic" },
    { token: "string", foreground: "a6e3a1" },
    { token: "number", foreground: "fab387" },
    { token: "keyword", foreground: "cba6f7" },
    { token: "keyword.operator", foreground: "f5c2e7" },
    { token: "type", foreground: "89dceb" },
    { token: "function", foreground: "89b4fa" },
    { token: "variable.predefined", foreground: "f5e0dc" },
    { token: "variable", foreground: "f8f8ff" },
    { token: "delimiter", foreground: "bac2de" },
    { token: "invalid", foreground: "f38ba8" },
  ],
  colors: {
    "editor.background": COLORS.background.darkPrimary,
    "editor.foreground": COLORS.text.primary,
    "editorLineNumber.foreground": "#6c7086",
    "editorLineNumber.activeForeground": COLORS.primary.gold,
    "editorCursor.foreground": COLORS.primary.gold,
    "editor.selectionBackground": `${COLORS.primary.gold}66`,
    "editor.inactiveSelectionBackground": `${COLORS.primary.sand}33`,
    "editor.selectionHighlightBackground": `${COLORS.primary.sand}20`,
    "editor.lineHighlightBackground": "#ffcc7022", // ホバー時の行の背景を金色系に
    "editor.lineHighlightBorder": "#ffcc7055",
    "editor.wordHighlightBackground": "#ffd4a333",
    "editor.wordHighlightStrongBackground": "#ffd4a355",
    "editorBracketMatch.background": "#ffd4a333",
    "editorBracketMatch.border": "#ffd4a355",
    "editorWhitespace.foreground": "#45475a66",
    "editorIndentGuide.background": "#31324488",
    "editorIndentGuide.activeBackground": "#585b70cc",
    "editorGutter.background": "#1a1a2e",
    "editorSuggestWidget.background": "#20243b",
    "editorSuggestWidget.border": "#2a2f4a",
    "editorSuggestWidget.foreground": "#f8f8ff",
    "editorSuggestWidget.highlightForeground": "#ffd4a3",
    "editorSuggestWidget.selectedBackground": "#2d3251",
    "scrollbarSlider.background": "#585b7044",
    "scrollbarSlider.hoverBackground": "#585b7066",
    "scrollbarSlider.activeBackground": "#585b7088",
    focusBorder: "#ffcc7044",
    "widget.shadow": "#00000055",

    // ホバー関連の色設定（型情報ポップアップ）
    "editor.hoverHighlightBackground": "#ffcc7044", // ホバー時の行/単語の背景色
    "editorHoverWidget.background": "#1a1a2ef0", // 型情報ポップアップの背景
    "editorHoverWidget.border": "#ffcc70aa", // 型情報ポップアップの境界線（金色）
    "editorHoverWidget.foreground": "#f8f8ff", // 型情報の通常テキスト色
    "editorHoverWidget.statusBarBackground": "#2d3251", // ステータスバー背景
    "editorHoverWidget.highlightForeground": "#ffd4a3", // ハイライトされたテキスト

    // パラメータヒント（型情報）の色
    "editorParameterHint.background": "#1a1a2ef0",
    "editorParameterHint.border": "#ffcc70aa",
    "editorParameterHint.foreground": "#f8f8ff",

    // リンクホバー
    "editorLink.activeForeground": "#ffd4a3",
  },
};

// Raw imports of actual library type definition files
import vueTypes from "./vue.d.ts?raw";
import piniaColadaTypes from "./pinia-colada.d.ts?raw";

// Import from demo (Nuxt app) generated typed-router files
import routerTypes from "../../../demo/.nuxt/typed-router/__router.d.ts?raw";
import routesTypes from "../../../demo/.nuxt/typed-router/__routes.ts?raw";
import pathsTypes from "../../../demo/.nuxt/typed-router/__paths.d.ts?raw";
import typesUtils from "../../../demo/.nuxt/typed-router/__types_utils.d.ts?raw";
import useTypedRoute from "../../../demo/.nuxt/typed-router/__useTypedRoute.ts?raw";
import useTypedRouter from "../../../demo/.nuxt/typed-router/__useTypedRouter.ts?raw";

export default defineMonacoSetup(async (monaco) => {
  monaco.editor.defineTheme("slidev-tropical", monacoTropicalTheme);
  monaco.editor.setTheme("slidev-tropical");

  // TypeScript コンパイラオプション設定
  monaco.typescript.typescriptDefaults.setCompilerOptions({
    ...monaco.typescript.typescriptDefaults.getCompilerOptions(),
    baseUrl: ".",
    moduleResolution: monaco.typescript.ModuleResolutionKind.NodeJs,
    paths: {
      "@/*": ["./*"],
      "~/*": ["./*"],
      "@typed-router": ["./node_modules/@typed-router/index.d.ts"],
    },
  });

  monaco.typescript.typescriptDefaults.addExtraLib(
    vueTypes,
    "file:///node_modules/@types/vue/index.d.ts",
  );
  monaco.typescript.typescriptDefaults.addExtraLib(
    piniaColadaTypes,
    "file:///node_modules/@pinia/colada/index.d.ts",
  );
  monaco.typescript.typescriptDefaults.addExtraLib(
    routesTypes,
    "file:///node_modules/@typed-router/__routes.ts",
  );
  monaco.typescript.typescriptDefaults.addExtraLib(
    routerTypes,
    "file:///node_modules/@typed-router/__router.d.ts",
  );
  monaco.typescript.typescriptDefaults.addExtraLib(
    pathsTypes,
    "file:///node_modules/@typed-router/__paths.d.ts",
  );
  monaco.typescript.typescriptDefaults.addExtraLib(
    typesUtils,
    "file:///node_modules/@typed-router/__types_utils.d.ts",
  );
  monaco.typescript.typescriptDefaults.addExtraLib(
    useTypedRoute,
    "file:///node_modules/@typed-router/__useTypedRoute.ts",
  );
  monaco.typescript.typescriptDefaults.addExtraLib(
    useTypedRouter,
    "file:///node_modules/@typed-router/__useTypedRouter.ts",
  );

  const typedRouterModuleContent = `
${routesTypes}

${routerTypes.replace(/import[^;]+;/g, "")}

${useTypedRoute.replace(/import[^;]+;/g, "").replace("export default", "export")}

${useTypedRouter.replace(/import[^;]+;/g, "").replace("export default", "export")}
`;

  const wrappedModule = `declare module '@typed-router' { ${typedRouterModuleContent} }`;

  monaco.typescript.typescriptDefaults.addExtraLib(
    wrappedModule,
    "file:///node_modules/@typed-router/index.d.ts",
  );

  return {
    editorOptions: {
      fontSize: 18,
      lineHeight: 1.7,
    },
  };
});
