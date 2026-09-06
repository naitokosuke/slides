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

Do not rely on a globally installed `vp` or `vize`. The Nix system profile ships a `vp` whose derivation is missing its JavaScript entry point, and its `vize` is a different version from the one pinned here.

Oxfmt options live in the `fmt` block of `vite.config.ts`. There is no separate formatter config file.

Markdown stays on Prettier because `prettier-plugin-slidev` is what keeps per-slide frontmatter intact, and Oxfmt cannot load Prettier plugins.
