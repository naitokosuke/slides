# CLAUDE.md

## CLI Development

When creating command-line interfaces, use the `use-gunshi-cli` skill.

## Fonts

Local font collection is available at the sibling directory: `../awesome-fonts-awesome-fonts/`

This directory contains free Japanese fonts for use in slides. When using custom fonts, copy the font files to the slide's `src/public/` directory.

## Toolchain

This repository is migrated to Vite+. Run the toolchain through `vp`, which comes from the `vite-plus` devDependency and resolves from `node_modules/.bin`.

- `vp check` runs the format and lint checks
- `vp run fmt` formats the tree: Oxfmt for code, Prettier for Markdown
- `vp run lint` runs Vize
- `vp run <script>` is the equivalent of `pnpm run <script>`

Run these from the repository root so `vp` resolves from `node_modules/.bin`. A globally installed toolchain drifts from what this repository pins, and the system profile currently carries vize 0.391.0 against the pinned 0.390.0.

Oxfmt options live in the `fmt` block of `vite.config.ts`. There is no separate formatter config file.

Markdown stays on Prettier because `prettier-plugin-slidev` is what keeps per-slide frontmatter intact, and Oxfmt cannot load Prettier plugins.
