import type { AppLP } from "../types";

// 文言の元: data/listings/classicplayer.json（Google Play の掲載文）
// 画面は classicmusic リポジトリの素の画面（build/store_screenshots/raw-android/ja/phone）
// ポリシー・サポートはストアの掲載文に合わせて GitHub Pages のもの
const app: AppLP = {
  slug: "classicplayer",
  name: "クラシック名曲プレイヤー",
  tagline: "広告なしでクラシックを聴く",
  icon: "/apps/classicplayer/icon.webp",
  accent: "#7a2e3a",
  screenshots: { style: "device", aspect: 1233 / 2673, cropTop: 0 },
  hero: {
    headline: "広告なしで、\nクラシックを聴く",
    lead: "CMSL クラシック名曲サウンドライブラリーがフリー素材として公開している約 500 曲を、ジャンルや作曲家から選んでストリーミング再生できるプレイヤーです。広告なし、アカウント登録なしで使えます。",
    screenshots: ["/apps/classicplayer/screens/player.webp", "/apps/classicplayer/screens/home.webp"],
  },
  features: [
    {
      title: "おまかせ再生で\nすぐに聴ける",
      body: "「おまかせ再生」を押すだけで、すぐに聴けます。ホームの新着の曲や、交響曲・協奏曲・ピアノ・室内楽・オペラなどのジャンルからも選べます。",
      image: "/apps/classicplayer/screens/home.webp",
    },
    {
      title: "交響曲からピアノまで\n約 500 曲",
      body: "ジャンル → 作曲家 → 作品と進み、楽章を通して再生できます。曲名や作曲家名の検索は、ひらがな・カタカナ・英字の違いを気にせず探せます。",
      image: "/apps/classicplayer/screens/genre.webp",
    },
    {
      title: "作曲家の肖像画と\n作品の一覧",
      body: "作曲家ごとに作品をまとめて表示します。肖像画はパブリックドメインなどの画像です。曲目は毎月更新され、アプリが自動で取り込みます。",
      image: "/apps/classicplayer/screens/composer.webp",
    },
    {
      title: "ダウンロードして\nオフラインでも",
      body: "Wi-Fi のときにダウンロードしておけば、オフラインで再生できます。バックグラウンド再生、ロック画面からの操作、スリープタイマーにも対応しています。",
      image: "/apps/classicplayer/screens/work.webp",
    },
  ],
  stores: {
    googlePlay: "https://play.google.com/store/apps/details?id=jp.vntech.classic",
    appStore: "https://apps.apple.com/jp/app/id6837931432",
  },
  notes: [
    "すべての曲と機能を無料で使えます。利用データの収集もありません。",
    "音源は CMSL クラシック名曲サウンドライブラリー（制作: ANDO TOWA）の mp3 で、Creative Commons 表示 2.1 日本ライセンスで公開されています。本アプリは CMSL の公式アプリではありません。",
  ],
  links: {
    privacy: "https://kate941-su.github.io/classicplayer/privacy/",
    support: "https://kate941-su.github.io/classicplayer/support/",
  },
  seo: {
    title: "クラシック名曲プレイヤー - 広告なしでクラシックを聴く",
    description:
      "CMSL クラシック名曲サウンドライブラリーの約 500 曲を、ジャンルや作曲家から選んで聴けるプレイヤー。広告なし、アカウント登録なし、オフライン再生にも対応。",
  },
};

export default app;
