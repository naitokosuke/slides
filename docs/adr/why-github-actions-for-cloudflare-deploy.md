# Why GitHub Actions for Cloudflare Deploy

## Status

Accepted

## Context

Cloudflare Workers へのデプロイ方法を検討した。

### 選択肢

1. **Cloudflare のビルトインビルド** - GitHub 連携で自動ビルド・デプロイ
2. **GitHub Actions + Wrangler** - GitHub Actions でビルドし、Wrangler でデプロイ

### 問題

Cloudflare のビルド環境でメモリ不足 (OOM) が発生した。

- Exit status 134 / 137 (SIGABRT / SIGKILL)
- `--workspace-concurrency=1` でも解消せず
- `NODE_OPTIONS='--max-old-space-size=1536'` でも解消せず

Slidev + Vite のビルドは重く、Cloudflare の無料ビルド環境（約 2GB メモリ）では不十分だった。

## Decision

**GitHub Actions でビルドし、Wrangler で Cloudflare Workers にデプロイする。**

GitHub Actions の `ubuntu-latest` は約 7GB のメモリを持ち、Slidev のビルドに十分なリソースがある。

### ビルドスクリプト

各スライドを `dist/{日付}/` にビルドするカスタムスクリプト `scripts/build-all.ts` を作成した。

- 各スライドを順次ビルド（メモリ節約のため）
- `--base /{日付}/` オプションで正しい base path を設定
- ビルド結果を `dist/{日付}/` に移動

これにより `https://slides.naito.dev/2024-08-02` のような URL でアクセス可能になる。

## Consequences

### Pros

- ビルドに十分なメモリを確保できる
- ビルドプロセスを完全に制御できる
- GitHub Actions のキャッシュ機能でビルド時間を短縮できる

### Cons

- GitHub Actions の設定・管理が必要
- Cloudflare Secrets と GitHub Secrets の両方を管理する必要がある

## References

- [Cloudflare Workers Static Assets](https://developers.cloudflare.com/workers/static-assets/)
- [cloudflare/wrangler-action](https://github.com/cloudflare/wrangler-action)
