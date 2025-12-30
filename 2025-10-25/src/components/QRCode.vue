<script setup lang="ts">
import { useQRCode } from "@vueuse/integrations/useQRCode";

interface Props {
  url: string;
  size?: number;
}

const props = withDefaults(defineProps<Props>(), {
  size: 200,
});

const qrcode = useQRCode(props.url, {
  errorCorrectionLevel: "H",
  type: "image/png",
  margin: 2,
  width: props.size,
});
</script>

<template>
  <img :src="qrcode" :alt="`QR Code for ${url}`" class="rounded-lg shadow-xl" />
</template>
