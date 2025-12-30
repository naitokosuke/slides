---
theme: default
fonts:
  sans: "Noto Sans JP"
info: |
  ## 自己紹介
class: text-center
drawings:
  persist: false
transition: slide-left
mdc: true
---

<h1>自己紹介</h1>

2024.09.26


---
layout: cover
class: text-right
---

<h1>内藤 航介</h1>

<div>ナイトウ <a href="https://twitter.com/engineer_naito" target="_blank" rel="noopener noreferrer"><carbon-logo-twitter /></a></div>

<div class="abs-br m-6">
  {{ nowStrRef }}
</div>

<script setup lang="ts">
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
})
</script>

<style>
h1::first-letter {
  color: green;
  font-size: 300%;
}
</style>

---
transition: slide-left
level: 2
---

<h1><span text-green>経</span>歴</h1>

<br />
<br />
<br />

<Toc minDepth="1" maxDepth="1"></Toc>

---
transition: slide-left
title: 筑波大学(2014 - 2020)
---

<h1><span class="color-itf">筑波大学</span></h1>

国立大、理系、非 CS 専攻

- 入学(2014.04)
- 一般入試
- 理工学群応用理工学類(coens)
- 宅通

<br />

- バドミントン同好会

<br />

- 応用物理主専攻
- レーザーによる表面微細加工メカニズム

<br />

- 卒業(2020.10)

<style>
.color-itf {
  background: linear-gradient(45deg, #00BFD6, #6600CC);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-size: 400% 400%;
  animation: GradientBackground 5s ease infinite;
}

@keyframes GradientBackground {
  0% {
    background-position: 0% 50%;
  }

  50% {
    background-position: 100% 50%;
  }

  100% {
    background-position: 0% 50%;
  }
};
</style>

---
transition: slide-left
title: コガソフトウェア株式会社(2021 - 2023)
---

<h1>コガソフトウェア株式会社</h1>

従業員数約 120 人、SI、SES、受託、自社開発

- 入社(2021.01)

- 研修(2021.01 - 2021.03)
  <div bg-gray inline-block px-5><logos-java /> <logos-git-icon/></div>

- 小人症患者向け服薬記録アプリ(2021.04 - 2022.02)
  <div bg-gray inline-block px-5>
    <logos-angular-icon /> <logos-nodejs-icon /> <logos-express /> <logos-cordova />
  </div>

- 腸活(検便)サービス企業の業務システムなど(2022.03 - 2023.12)
  <div bg-gray inline-block px-5>
    <logos-django-icon /> <logos-pandas /> <logos-numpy /> <logos-jquery />
  </div>

- 退職(2023.12)


---
transition: slide-left
title: ベストスキップ株式会社(2024 - )
---

<h1>ベストスキップ株式会社</h1>

従業員数約 70 人、SI

- 入社(2024.01)

<br />

- ドキュメントレビュー、テスト支援(2024.01 - 2024.03)
  - インフラ点検業務支援アプリ
  - 鉄道システム
  - 診察予約システム

- 音声会話 AI チャット API(2024.04 - )
  <div bg-gray inline-block px-5>
    <logos-fastapi-icon /> <simple-icons-rye text-black /> <logos-openai-icon />
  </div>



---
transition: slide-up
---

<h1>Web アプリケーション開発経験</h1>

計: 2 年 10 ヶ月

- 小人症患者向け服薬記録アプリ(2021.04 - 2022.02)

  <div bg-gray inline-block px-5>
    <logos-angular-icon /> <logos-nodejs-icon /> <logos-express /> <logos-cordova />
  </div>

<br />

- 腸活(検便)サービス企業の業務システムなど(2022.03 - 2023.12)

  <div bg-gray inline-block px-5>
    <logos-django-icon /> <logos-pandas /> <logos-numpy /> <logos-jquery />
  </div>

<br />

- 音声会話 AI チャット API(2024.04 - )

  <div bg-gray inline-block px-5>
    <logos-fastapi-icon /> <simple-icons-rye text-black /> <logos-openai-icon />
  </div>

---
transition: slide-left
---

<h1>小人症向け服薬記録管理アプリ</h1>

新規権限(保護者)追加: 実装、テスト、設計書作成(リバース)

- フロントエンド
  - OnsenUI + AngularJS(1 系) で新規画面実装

- バックエンド
  - Express(Node.js) + Sequelize で新規 API 開発

- テスト
  - `.sh` × `.json` でナイーブなテストコード

---
transition: slide-up
---

<h1>腸活(検便)サービス企業の開発業務</h1>

業務アプリ、検査結果解析、ToBアプリ、

- 業務アプリ
  - 取引先管理
  - EC
  - 検体管理
  - 請求

- 検査結果解析
  - データ分析

- ToB
  - 問診票
  - 検査結果レポート

---
transition: slide-up
---

<h1>チャット Bot Web API</h1>

- 生成 AI × リアルタイム情報
  - 天気、ニュース API との繋ぎ込み
  - カレンダー情報
  - 表情分析

- 技術スタック
  - フレームワーク: FastAPI(Python), SQLModel
  - ツール: Rye, uv

- アーキテクチャ
  - GoF のデザインパターンからファクトリメソッドパターンを採用
  - https://kosuke222naito.github.io/20240803-lt/

---
transition: slide-left
---

<h1>DB 設計、パフォーマンスチューニング</h1>

RDBMS を使用した DB 設計

- 腸活案件での新規サービス立ち上げ時
  - 既存システムを踏襲(ヒト -> 家畜)
  - 相違点の整理のために用件定義から参加
  - ビジネス、商流理解から
  - Django のビルトイン ORM を利用して無駄なクエリが発行されないように

- チャット Bot API 開発時に経験
  - シンプルな構成


