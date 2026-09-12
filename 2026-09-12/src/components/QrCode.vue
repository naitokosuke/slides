<script setup lang="ts">
import { ref } from "vue";
import QRCode from "qrcode";

const { url, label } = defineProps<{ url: string; label: string }>();

const dataUrl = ref("");
QRCode.toDataURL(url, {
  errorCorrectionLevel: "M",
  margin: 2,
  scale: 1,
}).then((value) => (dataUrl.value = value));
</script>

<template>
  <div class="qr-code">
    <img :src="dataUrl" :alt="`QR code for ${label}`" />
    <a :href="url">{{ label }}</a>
  </div>
</template>

<style scoped>
.qr-code {
  align-self: center;
  margin-block: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-5);

  img {
    width: var(--qr-size, 23rem);
    height: var(--qr-size, 23rem);
    padding: var(--space-4);
    background: var(--c-light);
    box-shadow: var(--bevel-sunken);
    image-rendering: pixelated;
  }
}
</style>
