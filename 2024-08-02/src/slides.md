---
theme: seriph
background: /anbai_katsu.png
title: 東葛.dev #1
info: |
  ## 東葛.dev #1
  [connpass](https://toukatsu.connpass.com/event/322980/)
class: text-center
transition: fade-out
fonts:
  sans: "Kiwi Maru "
  mono: "Fira Code"
seoMeta:
  ogTitle: 東葛.dev #1
  ogImage: https://slides.naito.dev/2024-08-02/og-image.png
  ogUrl: https://slides.naito.dev/2024-08-02/
  twitterCard: summary_large_image
---

# 東葛.dev #1

<div>
  <a
    href="https://toukatsu.connpass.com/event/322980/"
    target="_blank"
    rel="noopener noreferrer"
    text-white
    text-opacity-50
  >
    【初学者歓迎】東葛.dev in 柏 LT交流会【第1回】
  </a>
</div>

{{ nowStrRef }}

<script setup>
import { ref, onMounted } from "vue";

const now = new Date();
const nowStr = now.toLocaleString();
const nowStrRef = ref(nowStr);

function tick() {
  const newTime = new Date();
  const newTimeStr = newTime.toLocaleString();
  nowStrRef.value = newTimeStr;
}

onMounted(() => {
  setInterval(tick, 1000);
  tick();
});
</script>

---
transition: fade-out
layout: iframe-right
url: https://www.pref.chiba.lg.jp/kc-toukatsu/gaiyou.html
---

# あいさつ

お集まりいただきありがとうございます

- 主催者: hk(kouno) <a href="https://x.com/hk_it7" target="_blank" rel="noopener noreferrer"><logos-twitter /></a>

<img src="/images/kouno.jpg" w-30 mt-5 ml-10/>

<br />

- にぎやかし: ナイトウ <a href="https://x.com/engineer_naito" target="_blank" rel="noopener noreferrer"><logos-twitter /></a>

<img src="/images/naito.jpg" w-30 mt-5 ml-10/>

---
transition: fade-out
layout: two-cols
---

# こんなイベント

<v-clicks>

- 東葛にゆかりのあるITエンジニア
- 初心者も
- ベテランも
- 発表したり
- 共有したり
- 話したり

</v-clicks>

<twemoji-handshake
  absolute
  text-9xl
  v-after
/>

::right::

<div class="discord">Discord</div>
<img
  :src="qrcode"
  alt="QR Code"
  w-64
  absolute
  right-40
  bottom-40
/>

<script setup>
import { useQRCode } from "@vueuse/integrations/useQRCode";

const qrcode = useQRCode("https://discord.gg/uW4XTB2p8y");
</script>

<style>
.discord {
  color: #5865F2;
  font-size: 2rem;
}
</style>

---
transition: view-transition
layout: iframe-right
url: https://teganuma-hanabi.kashiwa-cci.or.jp/
---

# 予定

<br />

- 15:05 自己紹介

- 15:15 IRT

- 16:00 LT

- 17:00 今後の活動とか相談しながら

- 18:00 撤収 -> 二次会

<healthicons-i-schedule-school-date-time-outline
  text-5xl
  ml-75
/>

---
transition: fade-out
layout: two-cols
---

# IRT

Interaction Round Table

<br />

テーブルに集まった人で

決められたテーマについて

自由にトーク & ディスカッション

::right::


<div mt-15>
  <div>IRT #とは</div>
  <a
    text-xs
    href="https://blog.phperkaigi.jp/2020/02/07/interactive-round-table/"
    target="_blank"
    rel="noopener noreferrer"
  >
    https://blog.phperkaigi.jp/2020/02/07/interactive-round-table/
  </a>
  <img :src="qrcode" alt="QR Code" w-64 ml-15 mt-5/>
</div>

<div
  text-5xl
  absolute
  bottom-10
  right-10
>
  ~ 16:00
</div>

<script setup>
import { useQRCode } from "@vueuse/integrations/useQRCode";

const qrcode = useQRCode("https://blog.phperkaigi.jp/2020/02/07/interactive-round-table/");
</script>


---
transition: fade-out
---

# LT

- kii310 さん <a href="https://x.com/kii310_nyan" target="_blank" rel="noopener noreferrer"><logos-twitter /></a>

<img src="/images/kii310.jpg" w-30 mt-5 ml-10/>

<br />

- tyamahori さん <a href="https://x.com/tyamahori" target="_blank" rel="noopener noreferrer"><logos-twitter /></a>

<img src="/images/tyamahori.jpg" w-30 mt-5 ml-10/>

<div
  text-5xl
  absolute
  bottom-10
  right-10
>
  ~ 17:00
</div>

---
transition: fade-out
---

# LT

- ナイトウ <a href="https://x.com/engineer_naito" target="_blank" rel="noopener noreferrer"><logos-twitter /></a>

<img src="/images/naito.jpg" w-30 mt-5 ml-10/>

<br />

- hk(kouno) <a href="https://x.com/hk_it7" target="_blank" rel="noopener noreferrer"><logos-twitter /></a>

<img src="/images/kouno.jpg" w-30 mt-5 ml-10/>

<div
  text-5xl
  absolute
  bottom-10
  right-10
>
  ~ 17:00
</div>

---
transition: fade-out
---

# 今後を考えつつ雑談

<div text-9xl mt-20 class="clock">{{ nowStrRef }}</div>
<div  ml-100 text-5xl>撤収<span text-9xl mt-20 v-mark="{ at: 0 }">18:00</span></div>

<script setup>
import { ref, onMounted } from "vue";

const now = new Date();
const nowStr = now.toLocaleTimeString();
const nowStrRef = ref(nowStr);

function tick() {
  const newTime = new Date();
  const newTimeStr = newTime.toLocaleTimeString();
  nowStrRef.value = newTimeStr;
}

onMounted(() => {
  setInterval(tick, 1000);
  tick();
});
</script>

<style>
.clock {
  background: linear-gradient(315deg, #FFD343, #3776AB);
  background-size: 200% 200%;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: gradientShift 4s infinite;
}

@keyframes gradientShift {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
</style>
