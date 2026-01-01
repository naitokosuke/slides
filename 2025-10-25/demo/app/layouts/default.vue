<script setup lang="ts">
const { locale, locales, setLocale } = useI18n();
const { t } = useI18n();
const localePath = useLocalePath();

const switchLocale = (event: Event) => {
  const target = event.target as HTMLSelectElement;
  setLocale(target.value as "ja" | "en");
};
</script>

<template>
  <div class="layout">
    <nav class="navbar">
      <div class="nav-container">
        <NuxtLink
          :to="localePath({ name: 'index' })"
          class="nav-brand"
        >
          {{ t('site.title') }}
        </NuxtLink>

        <div class="nav-actions">
          <div class="nav-links">
            <NuxtLink
              :to="localePath({ name: 'index' })"
              class="nav-link"
            >
              {{ t('nav.home') }}
            </NuxtLink>
            <NuxtLink
              :to="localePath({ name: 'about' })"
              class="nav-link"
            >
              {{ t('nav.about') }}
            </NuxtLink>
          </div>

          <div class="language-switcher">
            <select
              :value="locale"
              class="language-select"
              :title="t('language.switch')"
              @change="switchLocale"
            >
              <option
                v-for="loc in locales"
                :key="loc.code"
                :value="loc.code"
              >
                {{ loc.name }}
              </option>
            </select>
          </div>
        </div>
      </div>
    </nav>

    <main class="main-content">
      <slot />
    </main>

    <footer class="footer">
      <div class="footer-container">
        <p>&copy; 2025 ナイトウコウスケ. Vue Fes Japan 2025 Demo App.</p>
        <div class="footer-links">
          <a
            href="https://vuefes.jp/2025/"
            target="_blank"
            rel="noopener"
          >Vue Fes Japan 2025</a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener"
          >GitHub</a>
        </div>
      </div>
    </footer>
  </div>
</template>

<style scoped>
.layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: #0a0a0a;
  color: #fff;
}

.navbar {
  background: rgba(16, 16, 16, 0.95);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid #333;
  position: sticky;
  top: 0;
  z-index: 100;
}

.nav-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 4rem;
}

.nav-brand {
  font-size: 1.5rem;
  font-weight: bold;
  text-decoration: none;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.nav-actions {
  display: flex;
  align-items: center;
  gap: 2rem;
}

.nav-links {
  display: flex;
  gap: 2rem;
}

.language-switcher {
  position: relative;
}

.language-select {
  background: rgba(102, 126, 234, 0.1);
  border: 1px solid rgba(102, 126, 234, 0.3);
  border-radius: 8px;
  color: #667eea;
  padding: 0.5rem 1rem;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.3s ease;
  outline: none;
}

.language-select:hover {
  background: rgba(102, 126, 234, 0.2);
  border-color: rgba(102, 126, 234, 0.5);
}

.language-select:focus {
  border-color: #667eea;
  box-shadow: 0 0 0 2px rgba(102, 126, 234, 0.2);
}

.language-select option {
  background: #1a1a1a;
  color: #fff;
}

.nav-link {
  text-decoration: none;
  color: #ccc;
  font-weight: 500;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  transition: all 0.3s ease;
}

.nav-link:hover,
.nav-link.router-link-active {
  color: #667eea;
  background: rgba(102, 126, 234, 0.1);
}

.main-content {
  flex: 1;
}

.footer {
  background: #0d0d0d;
  border-top: 1px solid #333;
  padding: 2rem 0;
  margin-top: 4rem;
}

.footer-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.footer-links {
  display: flex;
  gap: 2rem;
}

.footer-links a {
  color: #666;
  text-decoration: none;
  transition: color 0.3s ease;
}

.footer-links a:hover {
  color: #667eea;
}

@media (max-width: 768px) {
  .nav-container {
    padding: 0 1rem;
  }

  .nav-actions {
    gap: 1rem;
  }

  .nav-links {
    gap: 1rem;
  }

  .nav-brand {
    font-size: 1.25rem;
  }

  .language-select {
    padding: 0.4rem 0.8rem;
    font-size: 0.8rem;
  }

  .footer-container {
    flex-direction: column;
    gap: 1rem;
    text-align: center;
  }
}
</style>
