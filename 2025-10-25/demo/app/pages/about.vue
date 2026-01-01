<script setup>
useHead({
  title: "このブログについて | Vue & Nuxt Tech Blog",
  meta: [
    {
      name: "description",
      content:
        "型安全性と開発体験を追求するVue.js・Nuxt技術ブログについて。Vue Fes Japan 2025 デモアプリケーション。",
    },
  ],
});
</script>

<template>
  <div class="container">
    <div class="about-header">
      <h1 class="page-title">
        このブログについて
      </h1>
      <p class="page-subtitle">
        型安全性と開発体験を追求する技術ブログ
      </p>
    </div>

    <div class="about-content">
      <section class="section">
        <h2>コンセプト</h2>
        <p>
          このブログは、Vue.js と Nuxt
          を中心とした現代的なフロントエンド開発における
          型安全性と開発者体験（DX）の向上に焦点を当てた技術ブログです。
        </p>
        <p>
          特に AI 時代の開発において、型システムがいかに重要な役割を果たすかを
          実践的な事例とともにお伝えしています。
        </p>
      </section>

      <section class="section">
        <h2>主なトピック</h2>
        <div class="topics-grid">
          <div class="topic-card">
            <h3>Nuxt Typed Router</h3>
            <p>
              ファイルベースルーティングに型安全性を追加し、開発体験を向上させる方法
            </p>
          </div>
          <div class="topic-card">
            <h3>Pinia Colada</h3>
            <p>
              宣言的な非同期状態管理による、よりシンプルで保守性の高いコード
            </p>
          </div>
          <div class="topic-card">
            <h3>Vue 3.5</h3>
            <p>
              最新機能とパフォーマンス改善による、現代的な Vue
              アプリケーション開発
            </p>
          </div>
          <div class="topic-card">
            <h3>AI 駆動開発</h3>
            <p>型システムを活用した AI 支援開発の実践的なアプローチ</p>
          </div>
        </div>
      </section>

      <section class="section">
        <h2>技術スタック</h2>
        <p>このデモアプリケーションは以下の技術を使用して構築されています：</p>
        <ul class="tech-list">
          <li><strong>Nuxt 4</strong> - フルスタック Vue フレームワーク</li>
          <li>
            <strong>Vue 3.5</strong> - プログレッシブ JavaScript フレームワーク
          </li>
          <li><strong>TypeScript</strong> - 型安全な JavaScript</li>
          <li>
            <strong>File-based Routing</strong> - 規約ベースのルーティング
          </li>
          <li><strong>ESLint</strong> - コード品質管理</li>
        </ul>
      </section>

      <section class="section">
        <h2>Author</h2>
        <div class="author-card">
          <div class="author-info">
            <h3>ナイトウコウスケ</h3>
            <p>フロントエンドエンジニア・Vue Fes Japan 2025 スピーカー</p>
            <p>
              型安全性と開発者体験の向上に情熱を注ぐフロントエンドエンジニアです。
              Vue.js エコシステムを中心とした現代的な開発手法について探求し、
              実践的な知見を共有しています。
            </p>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<style scoped>
.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
}

.about-header {
  text-align: center;
  margin-bottom: 3rem;
}

.page-title {
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.page-subtitle {
  font-size: 1.1rem;
  color: #666;
}

.about-content {
  line-height: 1.8;
}

.section {
  margin-bottom: 3rem;
}

.section h2 {
  font-size: 1.8rem;
  margin-bottom: 1rem;
  color: #fff;
  border-bottom: 2px solid #667eea;
  padding-bottom: 0.5rem;
}

.section p {
  color: #ddd;
  margin-bottom: 1rem;
}

.topics-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  margin: 2rem 0;
}

.topic-card {
  background: rgba(102, 126, 234, 0.05);
  border: 1px solid rgba(102, 126, 234, 0.2);
  border-radius: 12px;
  padding: 1.5rem;
  transition: transform 0.3s ease;
}

.topic-card:hover {
  transform: translateY(-4px);
}

.topic-card h3 {
  color: #667eea;
  margin-bottom: 0.75rem;
  font-size: 1.2rem;
}

.topic-card p {
  color: #ccc;
  font-size: 0.95rem;
}

.tech-list {
  list-style: none;
  padding: 0;
}

.tech-list li {
  padding: 0.5rem 0;
  border-bottom: 1px solid #333;
  color: #ddd;
}

.tech-list li:last-child {
  border-bottom: none;
}

.author-card {
  background: rgba(102, 126, 234, 0.05);
  border: 1px solid rgba(102, 126, 234, 0.2);
  border-radius: 12px;
  padding: 2rem;
}

.author-info h3 {
  color: #667eea;
  margin-bottom: 0.5rem;
}

.author-info p {
  color: #ccc;
  margin-bottom: 1rem;
}
</style>
