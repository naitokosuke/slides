# CLAUDE.md

## CLI Development

When creating command-line interfaces, use the `use-gunshi-cli` skill.

## Fonts

Local font collection is available at the sibling directory: `../awesome-fonts-awesome-fonts/`

This directory contains free Japanese fonts for use in slides. When using custom fonts, copy the font files to the slide's `src/public/` directory.

## Lint and Format

Always go through the pnpm scripts, which resolve the versions pinned in `pnpm-workspace.yaml`.

- `pnpm lint` runs vize
- `pnpm fmt` runs oxfmt for code and Prettier for Markdown

Never invoke `vize` or `oxfmt` as bare commands. A different version may be installed globally on the machine, and a bare command silently picks that one up. When you need flags the scripts don't cover, use `pnpm exec vize ...` or `pnpm exec oxfmt ...`.
