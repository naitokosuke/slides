---
title: 公式が勝手に言ってるだけ
info: |
  ## 公式が勝手に言ってるだけ
  20251213 第1回 東葛.dev 年忘れ交流会 発表スライド

duration: 10min

favicon: ./images/naitokosuke.png
theme: default
colorSchema: light
class: text-center
fonts:
  sans: "Tsunagi Gothic"

mdc: true

transition: slide-left
seoMeta:
  ogTitle: 公式が勝手に言ってるだけ
  ogImage: https://slides.naito.dev/2025-12-13/og-image.png
  ogUrl: https://slides.naito.dev/2025-12-13/
  twitterCard: summary_large_image
---

# 公式が勝手に言ってるだけ

---

<div class="center">
  <img src="/images/naitokosuke.png" alt="naitokosuke icon" />
</div>

<style scoped>
.center {
  display: grid;
  place-items: center;
  height: 100%;

  img {
    width: 320px;
    border-radius: 16px;
    transition: transform 0.3s ease, box-shadow 0.3s ease;

    &:hover {
      transform: translateY(-8px);
      box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2);
    }
  }
}
</style>

---
layout: center
---

<ProfileCard
  avatar-url="./images/naitokosuke.png"
  name="ナイトウコウスケ"
/>

---
layout: section
class: text-9xl
transition: view-transition
---

今日は

---
layout: section
class: text-9xl
transition: view-transition
---

これを

---
layout: section
class: text-9xl
transition: view-transition
---

言いたくて

---
layout: section
class: text-9xl
transition: view-transition
---

来ました

---
layout: section
class: text-9xl
transition: view-transition
---

言わせて

<br />

ください

---
layout: section
class: text-8xl bg-#b00000 text-#d0a900
transition: view-transition
---

飲み会の

<br />

幹事が一番偉い

---
class: grid place-items-center bg-black
---

<div class="grid grid-cols-2 gap-8">
  <img src="/images/unok-icon.png" class="h-100 rounded-full shadow-xl" />
  <img src="/images/kono-icon.png" class="h-100 rounded-full shadow-xl" />
</div>

---
class: grid place-items-center bg-#b00000 text-#d0a900 text-9xl
---

感謝

---
layout: section
class: text-6xl
---

「公式が勝手に言ってるだけ」

---
layout: section
class: text-3xl
---

\> 公式が勝手に言ってるだけとは、現実逃避である。

<br />

https://dic.nicovideo.jp/a/%E5%85%AC%E5%BC%8F%E3%81%8C%E5%8B%9D%E6%89%8B%E3%81%AB%E8%A8%80%E3%81%A3%E3%81%A6%E3%82%8B%E3%81%A0%E3%81%91

---
layout: section
class: text-3xl
---

今日は

<br />

東葛.dev 公式が勝手に言ってるだけ

---
layout: section
class: text-9xl
---

まずは

---
layout: section
class: text-9xl
---

<span text-yellow>祝</span> 1 周年 <span text-2xl>以上</span>

<Confetti />

---
layout: section
class: text-9xl
---

ありがとう

---
layout: section
class: text-3xl
---

<div class="center">
  <img src="/images/saurce-cover.png" alt="Saurce Cover" />
</div>

<style scoped>
.center {
  display: grid;
  place-items: center;
  height: 100%;

  img {
    width: 340px;
    border-radius: 8px;
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2);
  }
}
</style>

---
layout: section
class: text-9xl
---

<div text-4xl mb-3rem>頒布数</div>

<CountUp :to="80" :duration="10" :at="1" />

<span v-click />

---
layout: section
class: text-9xl
---

ありがとう

---
layout: section
class: text-7xl
---

<TextType
  :text="['次回はもう少し', '執筆体験の良いものを', '用意したい']"
  :typingSpeed="70"
  :pauseDuration="1500"
  :showCursor="true"
  cursorCharacter="|"
  :delay="1.5"
/>

---
layout: section
class: text-9xl
---

<SplitText text="乾杯🍻" :at="1" />

<div v-click style="{ display: none; }"/>

---
layout: section
class: text-3xl
---

<div class="center">
  <img src="/images/saurce-cover.png" alt="Saurce Cover" />
</div>

<style scoped>
.center {
  display: grid;
  place-items: center;
  height: 100%;

  img {
    width: 340px;
    border-radius: 8px;
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2);
  }
}
</style>

---
class: font-noto text-center text-7xl grid place-items-center bg-black
---

これからご覧いただくのは

---
class: font-noto text-center text-6xl grid place-items-center bg-black
---

ある男性が撮影した映像である

---
class: grid place-items-center bg-black
---

<video src="/movies/owakariitadaketadaroka.mp4" controls class="h-120" />

---
layout: section
class: font-horror text-6xl bg-black text-#d20a13
---

おわかりいただけただろうか

---
layout: section
class: font-horror text-7xl bg-black text-#d20a13
---

REPLAY

---
class: grid place-items-center bg-black
---

<video src="/movies/owakariitadaketadaroka.mp4" controls class="h-120" />

---
class: grid place-items-center bg-black
---

<img src="/images/koko.jpg" controls autoplay class="h-120" />

---
class: grid place-items-center bg-black
---

<img src="/images/koko-up.jpg" controls autoplay class="h-120" />

---
class: grid place-items-center bg-black
---

<img src="/images/koko-up2.jpg" controls autoplay class="h-120" />

---
class: grid place-items-center bg-black font-horror text-#d20a13
---

<img src="/images/koko-up2.jpg" class="h-120" />
<span class="absolute top-64 left-34 text-5xl whitespace-nowrap">タイトルが Source になっている</span>

---
class: grid place-items-center bg-#d20a13 text-9xl
---

😱

---
layout: section
class: text-9xl
---

さて

---
layout: section
class: text-9xl
---

なんと今回

---
layout: section
class: text-7xl
---

スポンサーがいます！

---
layout: section
class: text-7xl
---

紹介させてください

---
class: grid place-items-center
---

<div class="grid grid-cols-2 gap-8">
  <img src="/images/ponyo-icon.png" class="h-100 rounded-full shadow-xl" />
  <img src="/images/gyl-icon.png" class="h-100 rounded-full shadow-xl" />
</div>

---
class: text-9xl grid place-items-center
---

Discord <logos-discord-icon /> で

---
class: text-6xl grid place-items-center
---

「ありがとう」しましょう！！

---
class: text-6xl grid place-items-center
---

<span class="text-8xl">感謝タイム</span>

※メンションはやめよう

---
class: text-6xl grid place-items-center
---

全員しましたか？

---
class: text-5xl grid place-items-center
---

ぼくはこういうのちゃんとやりたい派

---
class: text-5xl grid place-items-center
---

というわけで初の技術書は大成功でした

---
class: text-5xl grid place-items-center
---

東葛.dev を柏以外で

やってくださる人を探しています

---
class: text-9xl grid place-items-center
transition: view-transition
---

<span style="view-transition-name: tokatsu">東葛</span>

---
class: text-9xl grid place-items-center
transition: view-transition
---

<span style="view-transition-name: tokatsu">東葛</span>飾

---
class: text-9xl grid place-items-center
---

<img src="/images/tokatsu.png" alt="東葛飾地域" class="h-120 rounded-4 shadow-xl" />

---
class: text-7xl grid place-items-center
---

東葛.dev が好きなら

---
class: text-7xl grid place-items-center
---

柏以外で開催してくれる人

---
class: text-7xl grid place-items-center
---

を見つけるまで盛り上げ

---
class: text-7xl grid place-items-center
---

よろしくお願いします🙏

---
class: text-7xl grid place-items-center
---

東葛.dev の理想像

---
class: text-9xl grid place-items-center
---

それは

---
class: text-9xl grid place-items-center
---

みんなに

---
class: text-7xl grid place-items-center
---

東葛で飲み・ごはん

---
class: text-8xl grid place-items-center
---

してもらいたい

---
class: text-8xl grid place-items-center
---

で

---
class: text-8xl grid place-items-center bg-white
---

<logos-discord />

---
class: text-6xl grid place-items-center
---

「地域グルメ・地域情報」に

---
class: text-8xl grid place-items-center
---

にあげてほしい

---
class: text-8xl grid place-items-center
---

それか次の交流会で

---
class: text-6xl grid place-items-center
---

「〇〇さんと飲み行ってきた」

---
class: text-8xl grid place-items-center
---

報告をしてほしい

---
class: text-9xl grid place-items-center
---

これが理想

---
class: text-9xl grid place-items-center
---

の東葛.dev

---
class: text-8xl grid place-items-center
---

0 次会もやりたい

---
class: text-9xl grid place-items-center
---

ほろ酔いで

---
class: text-8xl grid place-items-center
---

交流会行きたい

---
class: text-7xl grid place-items-center
---

夜都合つかない人もいる

---
class: text-7xl grid place-items-center
---

気になる人は教えて🙏

---
class: text-7xl grid place-items-center
---

2 次会たくさん来てくれて

---
class: text-8xl grid place-items-center
---

いつもありがとう

---
class: text-8xl grid place-items-center
---

本当にありがとう

---
class: text-8xl grid place-items-center
---

飲み会の幹事

---
class: text-8xl grid place-items-center
---

やったことある人

🙋‍♂️🙋🙋‍♀️

---
class: text-8xl grid place-items-center
---

幹事って

---
class: text-9xl grid place-items-center
---

本当に偉い👏

---
class: text-8xl grid place-items-center
---

2 次会のお店探し

---
class: text-8xl grid place-items-center
---

本当に緊張する

---
class: text-7xl grid place-items-center
---

10 人⬆️をぶちこめる場所

---
class: text-9xl grid place-items-center
---

探しは大変

(個人的に)

---
class: text-9xl grid place-items-center
---

たまには

---
class: text-5xl grid place-items-center
---

行きたいお店を選んできてくれたり

---
class: text-5xl grid place-items-center
---

してくれると

---
class: text-xl grid place-items-center
---

めちゃ嬉しい🥺

---
class: text-5xl grid place-items-center text-blue
---

もちろん

好きでやってるので全然問題ないです

---
class: text-5xl grid place-items-center
---

もっと行きたいお店がある

---
class: text-8xl grid place-items-center
---

ぼくができないので

---
class: text-8xl grid place-items-center
---

お願いしたいこと

---
class: text-7xl grid place-items-center
---

女子会をやってほしい

---
class: text-7xl grid place-items-center
---

おじさんだらけの飲み会

---
class: text-7xl grid place-items-center
---

はさすがにつらそう

---
class: text-8xl grid place-items-center
---

女子会という夢

---
class: text-9xl grid place-items-center
---

最後に

---
class: text-7xl grid place-items-center
transition: view-transition
---

本当にいつも<span style="view-transition-name: arigato">ありがとう</span>

---
class: text-9xl grid place-items-center
transition: view-transition
---

<span style="view-transition-name: arigato">ありがとう</span>

---
class: text-7xl grid place-items-center
---

<span style="view-transition-name: arigato">ありがとう</span>ございます
