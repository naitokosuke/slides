# Why GitHub Actions for Cloudflare Deploy

## Status

Accepted

## Context

Cloudflare へのデプロイ方法を検討した。

### 選択肢

1. **Cloudflare のビルトインビルド** - GitHub 連携で自動ビルド・デプロイ
2. **GitHub Actions + Wrangler** - GitHub Actions でビルドし、Workers Static Assets でデプロイ
3. **GitHub Actions + R2** - GitHub Actions でビルドし、R2 にアップロード

### 問題 1: メモリ不足

Cloudflare のビルド環境でメモリ不足 (OOM) が発生した。

- Exit status 134 / 137 (SIGABRT / SIGKILL)
- `--workspace-concurrency=1` でも解消せず
- `NODE_OPTIONS='--max-old-space-size=1536'` でも解消せず

Slidev + Vite のビルドは重く、Cloudflare の無料ビルド環境（約 2GB メモリ）では不十分だった。

### 問題 2: アセットサイズ制限

Workers Static Assets には 25 MiB のファイルサイズ制限がある。
動画ファイル (84.9 MiB) や大きな SVG (26.6 MiB) がこの制限を超えていた。

## Decision

**GitHub Actions でビルドし、Cloudflare R2 にアップロードする。**

- GitHub Actions の `ubuntu-latest` は約 7GB のメモリを持ち、Slidev のビルドに十分
- R2 にはファイルサイズ制限がない（5 TiB まで）
- rclone で一括アップロード

### ビルドスクリプト

各スライドを `dist/{日付}/` にビルドするカスタムスクリプト `scripts/build-all.ts` を作成した。

- 各スライドを順次ビルド（メモリ節約のため）
- `--base /{日付}/` オプションで正しい base path を設定
- ビルド結果を `dist/{日付}/` に移動

### R2 設定

1. Cloudflare Dashboard で R2 バケット `slides` を作成
2. カスタムドメイン `slides.naito.dev` を設定
3. R2 API トークンを作成し、GitHub Secrets に設定:
   - `R2_ACCESS_KEY_ID`
   - `R2_SECRET_ACCESS_KEY`
   - `CLOUDFLARE_ACCOUNT_ID`

これにより `https://slides.naito.dev/2024-08-02` のような URL でアクセス可能になる。

## Consequences

### Pros

- ビルドに十分なメモリを確保できる
- ファイルサイズ制限がない
- R2 はエグレス料金が無料
- ビルドプロセスを完全に制御できる

### Cons

- GitHub Actions の設定・管理が必要
- R2 バケットの設定が必要
- 複数の Secrets を管理する必要がある

## References

- [Cloudflare R2](https://developers.cloudflare.com/r2/)
- [R2 Public Buckets](https://developers.cloudflare.com/r2/buckets/public-buckets/)
- [rclone with Cloudflare R2](https://rclone.org/s3/#cloudflare-r2)
