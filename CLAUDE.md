# CLAUDE.md

## CLI Development

When creating command-line interfaces, use the `use-gunshi-cli` skill.

## Dev Server

`vp dev` starts a single server on port 3030. `defaultPackage.dev` in `vite.config.ts` points it at the repository root, so it never asks which workspace package to run.

- `/` is the Nuxt app in `site/`, rendering the OG-image grid from the local tree
- `/<date>/` lazily spawns `slidev --base /<date>/` on a free port and proxies to it, websocket upgrades included
- `scripts/dev/plugin.ts` is the Vite plugin that owns the routing, the loading and error pages, and the back-to-index link injected into deck HTML
- The plugin takes over the dev server's `upgrade` listener, because the root Vite server renders nothing of its own and its HMR socket would otherwise compete with the deck and site sockets
- OG images are read from `<date>/og-image.png`, so `site/` never falls back to `slides.naito.dev`

`build:slide`, `export:slide` and `create:slide` still use the `prompts` picker, and the first two also take a date, e.g. `vp run build:slide 2026-02-06`.

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
