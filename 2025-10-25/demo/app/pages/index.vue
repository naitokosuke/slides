<script setup lang="ts">
const localePath = useLocalePath();
const { t } = useI18n();

useHead({
  title: t("meta.pageTitle"),
  meta: [
    { name: "description", content: t("site.description") },
    { name: "keywords", content: t("seo.keywords") },
    { property: "og:title", content: t("site.title") },
    { property: "og:description", content: t("site.description") },
    { property: "og:type", content: t("seo.ogType") },
  ],
});

const { data: articles } = await useAsyncData("articles", () =>
  queryCollection("content").all(),
);

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("ja-JP", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};
</script>

<template>
  <div class="container">
    <header class="header">
      <h1 class="site-title">
        {{ t("site.title") }}
      </h1>
      <p class="site-description">
        {{ t("site.description") }}
      </p>
    </header>

    <main class="main">
      <div class="articles-grid">
        <article
          v-for="article in articles"
          :key="article.id"
          class="article-card"
        >
          <NuxtLink
            :to="localePath({ name: 'articles-slug', params: { slug: article.slug } })"
            class="article-link"
          >
            <div
              v-if="article.imageUrl"
              class="article-image"
            >
              <img
                :src="article.imageUrl"
                :alt="article.title"
              >
            </div>
            <div class="article-content">
              <h2 class="article-title">{{ article.title }}</h2>
              <p class="article-excerpt">{{ article.excerpt }}</p>
              <div class="article-meta">
                <span class="article-author">{{ article.author }}</span>
                <span class="article-date">{{
                  formatDate(article.publishedAt)
                }}</span>
              </div>
              <div class="article-tags">
                <span
                  v-for="tag in article.tags"
                  :key="tag"
                  class="tag"
                >
                  {{ tag }}
                </span>
              </div>
            </div>
          </NuxtLink>
        </article>
      </div>
    </main>
  </div>
</template>

<style scoped>
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

.header {
  text-align: center;
  margin-bottom: 3rem;
}

.site-title {
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.site-description {
  font-size: 1.1rem;
  color: #666;
}

.articles-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2rem;
}

.article-card {
  background: #1a1a1a;
  border-radius: 12px;
  overflow: hidden;
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
}

.article-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 24px rgba(102, 126, 234, 0.1);
}

.article-link {
  text-decoration: none;
  color: inherit;
}

.article-image {
  width: 100%;
  height: 200px;
  overflow: hidden;
}

.article-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.article-card:hover .article-image img {
  transform: scale(1.05);
}

.article-content {
  padding: 1.5rem;
}

.article-title {
  font-size: 1.3rem;
  font-weight: bold;
  margin-bottom: 0.75rem;
  color: #fff;
  line-height: 1.4;
}

.article-excerpt {
  color: #999;
  line-height: 1.6;
  margin-bottom: 1rem;
}

.article-meta {
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
  font-size: 0.9rem;
  color: #666;
}

.article-tags {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.tag {
  padding: 0.25rem 0.75rem;
  background: rgba(102, 126, 234, 0.1);
  border: 1px solid rgba(102, 126, 234, 0.3);
  border-radius: 16px;
  font-size: 0.85rem;
  color: #667eea;
}
</style>
