<script setup lang="ts">
const route = useRoute("articles-slug");
const localePath = useLocalePath();
const slug = route.params.slug;

const { data: article } = await useAsyncData(`article-${slug}`, () =>
  queryCollection("content").path(`/articles/${slug}`).first(),
);

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("ja-JP", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

const { t } = useI18n();

useHead({
  title: article.value
    ? `${article.value.title} | ${t("meta.pageTitle")}`
    : t("meta.articleNotFoundTitle"),
  meta: article.value
    ? [
        { name: "description", content: article.value.excerpt },
        { name: "keywords", content: t("seo.keywords") },
        { property: "og:title", content: article.value.title },
        { property: "og:description", content: article.value.excerpt },
        { property: "og:image", content: article.value.imageUrl },
        { property: "og:type", content: "article" },
      ]
    : [],
});
</script>

<template>
  <div class="container">
    <header class="header">
      <NuxtLink
        :to="localePath({ name: 'index' })"
        class="back-link"
      > {{ t("article.backToHome") }} </NuxtLink>
    </header>

    <article
      v-if="article"
      class="article"
    >
      <div class="article-header">
        <h1 class="article-title">
          {{ article.title }}
        </h1>
        <div class="article-meta">
          <span class="author">{{ article.author }}</span>
          <span class="date">{{ formatDate(article.publishedAt) }}</span>
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

      <div
        v-if="article.imageUrl"
        class="article-hero"
      >
        <img
          :src="article.imageUrl"
          :alt="article.title"
        >
      </div>

      <div class="article-body">
        <ContentRenderer
          v-if="article?.body"
          :value="article"
        />
      </div>

      <footer class="article-footer">
        <div class="share-section">
          <h3>{{ t("article.share") }}</h3>
          <div class="share-buttons">
            <button class="share-button">
              {{ t("article.shareTwitter") }}
            </button>
            <button class="share-button">
              {{ t("article.shareFacebook") }}
            </button>
            <button class="share-button">
              {{ t("article.shareHatena") }}
            </button>
          </div>
        </div>
      </footer>
    </article>

    <div
      v-else
      class="not-found"
    >
      <h1>{{ t("article.notFound") }}</h1>
      <p>{{ t("article.notFoundDescription") }}</p>
      <NuxtLink
        :to="localePath({ name: 'index' })"
        class="home-link"
      >{{ t("article.backHome") }}</NuxtLink>
    </div>
  </div>
</template>

<style scoped>
.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
}

.header {
  margin-bottom: 2rem;
}

.back-link {
  color: #667eea;
  text-decoration: none;
  font-size: 0.95rem;
  transition: color 0.3s ease;
}

.back-link:hover {
  color: #764ba2;
}

.article-header {
  margin-bottom: 2rem;
}

.article-title {
  font-size: 2.5rem;
  font-weight: bold;
  line-height: 1.2;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.article-meta {
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
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

.article-hero {
  margin-bottom: 2rem;
  border-radius: 12px;
  overflow: hidden;
}

.article-hero img {
  width: 100%;
  height: auto;
  display: block;
}

.article-body {
  line-height: 1.8;
  color: #ddd;
  margin-bottom: 3rem;
}

.article-body :deep(h1) {
  font-size: 2rem;
  margin: 2rem 0 1rem;
  color: #fff;
}

.article-body :deep(h2) {
  font-size: 1.5rem;
  margin: 2rem 0 1rem;
  color: #fff;
}

.article-body :deep(h3) {
  font-size: 1.25rem;
  margin: 1.5rem 0 0.75rem;
  color: #fff;
}

.article-body :deep(p) {
  margin-bottom: 1.5rem;
}

.article-body :deep(ul),
.article-body :deep(ol) {
  margin: 1rem 0;
  padding-left: 2rem;
}

.article-body :deep(li) {
  margin-bottom: 0.5rem;
}

.article-body :deep(code.inline-code) {
  background: rgba(102, 126, 234, 0.1);
  padding: 0.2rem 0.4rem;
  border-radius: 4px;
  font-family: "Courier New", monospace;
  color: #667eea;
}

.article-body :deep(pre.code-block) {
  background: #0d0d0d;
  border: 1px solid #333;
  border-radius: 8px;
  padding: 1rem;
  margin: 1.5rem 0;
  overflow-x: auto;
}

.article-body :deep(pre.code-block code) {
  color: #f8f8f2;
  font-family: "Courier New", monospace;
  font-size: 0.95rem;
}

.article-footer {
  border-top: 1px solid #333;
  padding-top: 2rem;
}

.share-section h3 {
  margin-bottom: 1rem;
  color: #fff;
}

.share-buttons {
  display: flex;
  gap: 1rem;
}

.share-button {
  padding: 0.5rem 1rem;
  background: rgba(102, 126, 234, 0.1);
  border: 1px solid rgba(102, 126, 234, 0.3);
  border-radius: 8px;
  color: #667eea;
  cursor: pointer;
  transition: all 0.3s ease;
}

.share-button:hover {
  background: rgba(102, 126, 234, 0.2);
  transform: translateY(-2px);
}

.not-found {
  text-align: center;
  padding: 4rem 0;
}

.not-found h1 {
  font-size: 2rem;
  margin-bottom: 1rem;
  color: #fff;
}

.not-found p {
  color: #999;
  margin-bottom: 2rem;
}

.home-link {
  display: inline-block;
  padding: 0.75rem 1.5rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  text-decoration: none;
  border-radius: 8px;
  transition: transform 0.3s ease;
}

.home-link:hover {
  transform: translateY(-2px);
}
</style>
