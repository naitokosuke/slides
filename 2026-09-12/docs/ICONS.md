# アイコンの出典

`PixelIcon.vue` は npm パッケージ [`@react95/icons`](https://github.com/React95/React95/tree/master/packages/icons)（React95 プロジェクト, MIT License）の PNG を `node_modules` から直接 `?url` import で参照している。

`@react95/icons` の `package.json` の `exports` フィールドは React 用 `.tsx` しか公開しておらず、`png/` への bare specifier import はブロックされる。そのため `PixelIcon.vue` からは `../../node_modules/@react95/icons/png/<file>.png?url` という相対パスで直接参照している。

`PixelIcon.vue` のマッピング。

| `name`   | ファイル (@react95/icons/png/) |
| -------- | ------------------------------ |
| `folder` | `Folder_32x32_4.png`           |
| `open`   | `FolderOpen_32x32_4.png`       |
| `file`   | `FileText_32x32_4.png`         |
| `drive`  | `Defrag_32x32_4.png`           |
| `trash`  | `RecycleFull_32x32_4.png`      |
| `chip`   | `Memory_32x32_4.png`           |
| `mirror` | `Computer_32x32_4.png`         |
| `start`  | `Logo_16x16_4.png`             |

## ライセンスについて（要注意）

`@react95/icons` パッケージ自体は MIT ライセンスだが、収録されている PNG のファイル名 (`Access110_*`, `Appwiz1500_*`, `Diskcopy1_*` など) は Windows/Office の実バイナリのリソース名と一致しており、実際に画像を確認しても本物の Windows 98 システムアイコンと同一の絵柄だった。つまりパッケージの MIT 表記はリポジトリ著作者が持つ範囲（コード・パッケージング）にしか及ばず、アイコンの図案そのものは Microsoft の著作物である可能性が高い。

これは以前 `src/public/icons/`（[zhaotianff/Win98-Icons](https://github.com/zhaotianff/Win98-Icons) 由来）で問題視したのと同じ構造のリスクである。今回は見た目の再現度を優先し、このリスクを認識した上で自己判断として `@react95/icons` を採用している。
