<template>
  <div class="tweet-button-wrapper">
    <div class="tweet-button-container">
      <a
        :href="twitterIntentUrl"
        target="_blank"
        rel="noopener noreferrer"
        :class="['tweet-button', `variant-${variant}`]"
      >
        <logos-twitter class="twitter-icon" />
        <span>{{ buttonText }}</span>
      </a>
    </div>
    <div v-if="showQr" class="qr-code-container">
      <QRCode :url="twitterIntentUrl" :size="qrSize" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";

const {
  text,
  hashtags = ["vuefes", "vuefes_future"],
  url = "https://vuefes.jp/2025/speaker/naitokosuke",
  buttonText,
  variant = "success",
  showQr = true,
  qrSize = 450,
} = defineProps<{
  text?: string;
  hashtags?: string[];
  url?: string;
  buttonText?: string;
  variant?: "primary" | "success" | "info" | "warning";
  showQr?: boolean;
  qrSize?: number;
}>();

const twitterIntentUrl = computed(() => {
  const params = new URLSearchParams();

  if (text) {
    params.append("text", text);
  }

  if (hashtags.length > 0) {
    params.append("hashtags", hashtags.join(","));
  }

  if (url) {
    params.append("url", url);
  }

  return `https://twitter.com/intent/tweet?${params.toString()}`;
});
</script>

<style scoped>
.tweet-button-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
}

.tweet-button-container {
  display: inline-block;
}

.qr-code-container {
  display: flex;
  justify-content: center;
}

.tweet-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  padding: 1rem 2rem;
  font-weight: 600;
  font-size: 1.125rem;
  line-height: 1.5;
  color: var(--color-text-primary);
  border: 1px solid var(--color-primary-bronze);
  border-radius: 0.5rem;
  box-shadow:
    0 4px 6px -1px rgba(0, 0, 0, 0.3),
    0 2px 4px -1px rgba(0, 0, 0, 0.15);
  transition: all 0.2s ease;
  text-decoration: none;
}

.tweet-button:hover {
  transform: translateY(-2px);
  box-shadow:
    0 10px 15px -3px rgba(0, 0, 0, 0.4),
    0 4px 6px -2px rgba(0, 0, 0, 0.25);
  color: var(--color-text-accent);
}

.twitter-icon {
  width: 1.5rem;
  height: 1.5rem;
}

/* Variant styles */
.variant-primary {
  background: linear-gradient(
    to right,
    var(--color-bg-dark-primary),
    var(--color-bg-dark-secondary)
  );
  border-color: var(--color-primary-bronze);
}

.variant-primary:hover {
  background: linear-gradient(
    to right,
    var(--color-bg-dark-secondary),
    var(--color-bg-dark-tertiary)
  );
  border-color: var(--color-primary-copper);
}

.variant-success {
  background: linear-gradient(
    to right,
    var(--color-bg-dark-secondary),
    var(--color-bg-dark-tertiary)
  );
  border-color: var(--color-primary-gold);
}

.variant-success:hover {
  background: linear-gradient(
    to right,
    var(--color-bg-dark-tertiary),
    var(--color-primary-bronze)
  );
  border-color: var(--color-primary-sand);
}

.variant-info {
  background: linear-gradient(
    to right,
    var(--color-bg-dark-primary),
    var(--color-bg-dark-secondary)
  );
  border-color: var(--color-primary-copper);
}

.variant-info:hover {
  background: linear-gradient(
    to right,
    var(--color-bg-dark-secondary),
    var(--color-bg-dark-tertiary)
  );
  border-color: var(--color-primary-bronze);
}

.variant-warning {
  background: linear-gradient(
    to right,
    var(--color-bg-dark-primary),
    var(--color-bg-dark-secondary)
  );
  border-color: var(--color-primary-sienna);
}

.variant-warning:hover {
  background: linear-gradient(
    to right,
    var(--color-bg-dark-secondary),
    var(--color-bg-dark-tertiary)
  );
  border-color: var(--color-primary-copper);
}
</style>
