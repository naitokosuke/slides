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
  <main>
    <header>
      <h1>Slides</h1>
      <p>
        Presentations by
        <a
          href="https://x.com/naitokosuke"
          target="_blank"
          rel="noopener noreferrer"
        >
          naitokosuke
          <span>(opens in new tab)</span>
        </a>
      </p>
    </header>

    <ul role="list">
      <li v-for="slide in slides" :key="slide.folder">
        <a :href="`/${slide.folder}/`">
          <img :src="slide.ogImage" :alt="slide.title" loading="lazy" />
          <div>
            <time :datetime="slide.date">{{ formatDate(slide.date) }}</time>
            <h2>{{ slide.title }}</h2>
          </div>
        </a>
      </li>
    </ul>
  </main>
</template>

<style scoped>
main {
  position: relative;
  min-height: 100vh;
  max-width: 1200px;
  margin: 0 auto;
  padding: 80px 24px 60px;

  @media (max-width: 640px) {
    padding: 48px 16px 40px;
  }

  &::before,
  &::after {
    content: "";
    position: fixed;
    inset: 0;
    pointer-events: none;
  }

  &::before {
    background: url("/bg.png") center/cover no-repeat fixed;
    z-index: -2;
  }

  &::after {
    background: linear-gradient(
      to bottom,
      rgba(8, 20, 35, 0.92) 0%,
      rgba(8, 20, 35, 0.85) 40%,
      rgba(8, 20, 35, 0.92) 100%
    );
    z-index: -1;
  }

  header {
    margin-bottom: 72px;

    @media (max-width: 640px) {
      margin-bottom: 48px;
    }

    h1 {
      font-family: "Playfair Display", serif;
      font-size: clamp(2.5rem, 8vw, 4rem);
      font-weight: 400;
      letter-spacing: 0.15em;
      line-height: 1.1;
      color: #fff;
      opacity: 0.95;
      margin: 0 0 16px;
    }

    p {
      font-family: "Inter", sans-serif;
      font-size: 1rem;
      font-weight: 400;
      letter-spacing: 0.05em;
      color: rgba(140, 170, 200, 0.7);
      margin: 0;
    }

    a {
      color: rgba(160, 190, 220, 0.9);
      text-decoration: none;
      transition: color 0.2s ease;

      &:hover {
        color: #fff;
      }

      &:focus-visible {
        outline: 2px solid rgba(160, 190, 220, 0.9);
        outline-offset: 2px;
        border-radius: 2px;
      }

      span {
        position: absolute;
        width: 1px;
        height: 1px;
        padding: 0;
        margin: -1px;
        overflow: hidden;
        clip: rect(0, 0, 0, 0);
        white-space: nowrap;
        border: 0;
      }
    }
  }

  ul {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 28px;
    list-style: none;
    padding: 0;
    margin: 0;

    @media (max-width: 640px) {
      grid-template-columns: 1fr;
      gap: 20px;
    }

    li {
      background: rgba(255, 255, 255, 0.02);
      border: 1px solid rgba(255, 255, 255, 0.06);
      border-radius: 12px;
      overflow: hidden;
      transition:
        transform 0.3s ease,
        border-color 0.3s ease,
        box-shadow 0.3s ease;

      &:hover {
        transform: translateY(-6px);
        border-color: rgba(100, 160, 220, 0.25);
        box-shadow: 0 24px 48px rgba(0, 0, 0, 0.35);

        img {
          transform: scale(1.03);
          opacity: 1;
        }
      }

      a {
        display: block;
        text-decoration: none;
        color: inherit;

        &:focus-visible {
          outline: 2px solid rgba(160, 190, 220, 0.9);
          outline-offset: -2px;
        }
      }

      img {
        width: 100%;
        aspect-ratio: 1200 / 630;
        object-fit: cover;
        background: rgba(20, 35, 55, 0.5);
        transition:
          transform 0.4s ease,
          opacity 0.3s ease;
        opacity: 0.9;
      }

      div {
        padding: 20px 24px 24px;

        @media (max-width: 640px) {
          padding: 16px 20px 20px;
        }

        time {
          display: block;
          font-family: "JetBrains Mono", monospace;
          font-size: 0.75rem;
          letter-spacing: 0.04em;
          color: rgba(120, 160, 200, 0.8);
          margin-bottom: 8px;
        }

        h2 {
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
      }
    }
  }
}
</style>
