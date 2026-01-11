<script setup lang="ts">
const { data: slides } = await useFetch("/api/slides");

const formatDate = (dateStr: string) => {
  const match = dateStr.match(/^(\d{4})-(\d{2})-(\d{2})/);
  if (!match) return dateStr;
  const [, year, month, day] = match;
  const date = new Date(Number(year), Number(month) - 1, Number(day));
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
};
</script>

<template>
  <div class="page">
    <div class="bg" />
    <div class="overlay" />

    <main class="main">
      <header class="header">
        <h1 class="hero-title">
          <span class="hero-line">Slides</span>
        </h1>
        <p class="hero-sub">
          Presentations by
          <a
            href="https://x.com/naitokosuke"
            target="_blank"
            rel="noopener noreferrer"
            class="author-link"
            >naitokosuke</a
          >
        </p>
      </header>

      <section class="grid">
        <a
          v-for="slide in slides"
          :key="slide.folder"
          :href="`/${slide.folder}/`"
          class="card"
        >
          <div class="card-img">
            <img :src="slide.ogImage" :alt="slide.title" loading="lazy" />
            <div class="card-img-overlay" />
          </div>
          <div class="card-body">
            <time class="card-date">{{ formatDate(slide.date) }}</time>
            <h2 class="card-title">{{ slide.title }}</h2>
          </div>
        </a>
      </section>
    </main>
  </div>
</template>

<style scoped>
.page {
  min-height: 100vh;
  position: relative;
}

.bg {
  position: fixed;
  inset: 0;
  background: url("/bg.png") center/cover no-repeat fixed;
  z-index: 0;
}

.overlay {
  position: fixed;
  inset: 0;
  background: linear-gradient(
    to bottom,
    rgba(8, 20, 35, 0.92) 0%,
    rgba(8, 20, 35, 0.85) 40%,
    rgba(8, 20, 35, 0.92) 100%
  );
  z-index: 1;
}

.main {
  position: relative;
  z-index: 2;
  max-width: 1200px;
  margin: 0 auto;
  padding: 80px 24px 60px;
}

.header {
  margin-bottom: 72px;
}

.hero-title {
  font-family: "Playfair Display", serif;
  font-size: clamp(2.5rem, 8vw, 4rem);
  font-weight: 400;
  letter-spacing: 0.15em;
  line-height: 1.1;
  color: #fff;
  margin: 0 0 16px;
}

.hero-line {
  opacity: 0.95;
}

.hero-sub {
  font-family: "Inter", sans-serif;
  font-size: 1rem;
  font-weight: 400;
  letter-spacing: 0.05em;
  color: rgba(140, 170, 200, 0.7);
  margin: 0;
}

.author-link {
  color: rgba(160, 190, 220, 0.9);
  text-decoration: none;
  transition: color 0.2s ease;
}

.author-link:hover {
  color: #fff;
}

.grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 28px;
}

.card {
  display: block;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 12px;
  overflow: hidden;
  text-decoration: none;
  transition:
    transform 0.3s ease,
    border-color 0.3s ease,
    box-shadow 0.3s ease;
}

.card:hover {
  transform: translateY(-6px);
  border-color: rgba(100, 160, 220, 0.25);
  box-shadow: 0 24px 48px rgba(0, 0, 0, 0.35);
}

.card-img {
  position: relative;
  aspect-ratio: 1200 / 630;
  overflow: hidden;
  background: rgba(20, 35, 55, 0.5);
}

.card-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition:
    transform 0.4s ease,
    opacity 0.3s ease;
  opacity: 0.9;
}

.card:hover .card-img img {
  transform: scale(1.03);
  opacity: 1;
}

.card-img-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(8, 20, 35, 0.6) 0%, transparent 50%);
  pointer-events: none;
}

.card-body {
  padding: 20px 24px 24px;
}

.card-date {
  display: block;
  font-family: "JetBrains Mono", monospace;
  font-size: 0.75rem;
  letter-spacing: 0.04em;
  color: rgba(120, 160, 200, 0.8);
  margin-bottom: 8px;
}

.card-title {
  font-family: "Inter", sans-serif;
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.5;
  color: rgba(255, 255, 255, 0.92);
  margin: 0;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

@media (max-width: 640px) {
  .main {
    padding: 48px 16px 40px;
  }

  .header {
    margin-bottom: 48px;
  }

  .hero-title {
    flex-direction: column;
    gap: 0;
  }

  .grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  .card-body {
    padding: 16px 20px 20px;
  }
}
</style>
