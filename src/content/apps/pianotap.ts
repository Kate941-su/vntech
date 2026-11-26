import type { AppLP } from "../types";

// 文言の元: data/listings/pianotap.json（Google Play の掲載文）
// スクショはストア用の画像（素の画面が手元に無いため card 表示）。ゲーム中の横画面は縦長の枠に合わないので使っていない
const app: AppLP = {
  slug: "pianotap",
  name: "ピアノタップ",
  tagline: "名曲を弾くピアノゲーム",
  icon: "/apps/pianotap/icon.webp",
  accent: "#9a7324",
  screenshots: { style: "card", aspect: 1080 / 1920, cropTop: 0.22 },
  hero: {
    headline: "楽譜が読めなくても、\n名曲が弾ける",
    lead: "流れてくる五線譜に合わせて鍵盤をタップし、名曲の主旋律を弾くピアノゲームです。光る鍵盤を追いかけるだけで、「歓喜の歌」や「エリーゼのために」が自分の指から鳴りだします。",
    screenshots: ["/apps/pianotap/screenshots/02.webp", "/apps/pianotap/screenshots/03.webp"],
  },
  features: [
    {
      title: "クラシックから\nジャズ・民謡まで",
      body: "曲を選ぶとデモ演奏が流れるので、知らない曲もすぐ覚えられます。「エリーゼのために」「威風堂々」「さくら さくら」「聖者の行進」など、パブリックドメインの曲をこのアプリのために短く編曲しています。",
      image: "/apps/pianotap/screenshots/02.webp",
    },
    {
      title: "自己ベストを更新して\nS ランクをめざそう",
      body: "押すタイミングで PERFECT・GREAT・GOOD を判定。コンボをつないでハイスコアを目指します。1 曲は 30〜60 秒なので、すき間時間にさっと遊べます。",
      image: "/apps/pianotap/screenshots/03.webp",
    },
    {
      title: "苦手なところは\nゆっくりくり返し練習",
      body: "練習モードでは、テンポを 50% まで落としたり、苦手な小節だけをくり返したりできます。伴奏はあなたの演奏を待ってくれるので、自分のペースで弾けます。",
      image: "/apps/pianotap/screenshots/04.webp",
    },
    {
      title: "ガイド・音名・音色を\n好みに合わせて",
      body: "次に弾く鍵盤を光らせるガイド、音名（ドレミ）の表示、振動、ライト／ダークを切り替えられます。ピアノの音はアプリ内で合成するので、オフラインでも遊べます。",
      image: "/apps/pianotap/screenshots/05.webp",
    },
  ],
  stores: {
    googlePlay: "https://play.google.com/store/apps/details?id=jp.vntech.pianotap",
    appStore: "https://apps.apple.com/jp/app/id6834791944",
  },
  notes: [
    "毎日 2 回まで無料で遊べます。それ以降は広告を 1 本見るごとに 1 回遊べます。",
    "Pro（月額の自動更新サブスクリプション）では、すべての曲・広告なし・回数無制限・ギターなどの音色が使えます。料金はアプリ内に表示されます。",
    "収録曲はすべてパブリックドメインの曲を、このアプリのために短く編曲したものです。",
  ],
  links: {
    privacy: "https://privacy-policy-root.vercel.app/piano-tap",
    terms: "https://privacy-policy-root.vercel.app/piano-tap/terms",
    support: "https://privacy-policy-root.vercel.app/piano-tap/support",
  },
  seo: {
    title: "ピアノタップ - 名曲を弾くピアノゲーム",
    description:
      "流れる五線譜に合わせて鍵盤をタップし、「エリーゼのために」などの名曲の主旋律を弾くピアノゲーム。楽譜が読めなくても、光る鍵盤を追うだけで弾けます。",
  },
};

export default app;
