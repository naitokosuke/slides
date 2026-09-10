# naitokosuke's Slides

Slides & code for my talks, using [Slidev](https://github.com/slidevjs/slidev)!

## Development

`pnpm dev` starts one server on <http://localhost:3030>. `/` is the OG-image index of every deck, and each deck is reachable at its date path, e.g. `/2026-02-06/`.

- A deck's Slidev dev server starts on the first request to its path, so only the decks you open are running
- While a deck boots, the page shows a loading state and reloads itself once the server is ready
- Every slide view gets an Index link back to `/` in the top-left corner
- `2025-10-25` is a standalone workspace: run `pnpm install`, `pnpm run build:demo` and `pnpm run copy:types` inside it before opening it

`pnpm build`, `pnpm export` and `pnpm create` still use the terminal picker.

## Catalogue

###### 0000

- `en` [Template](./0000-00-00) - subtitle
