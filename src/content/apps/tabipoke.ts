import type { AppLP } from "../types";

// 文言の元: data/listings/tabipoke.json（App Store の説明文。iOS 専用で Play には無い）
// 画面は tabipoke リポジトリの素の画面（build/store_screenshots/raw/ja/phone）
const app: AppLP = {
  slug: "tabipoke",
  name: "タビポケ",
  tagline: "オフライン旅のしおり",
  icon: "/apps/tabipoke/icon.webp",
  accent: "#1b6fb0",
  screenshots: { style: "device", aspect: 1320 / 2868, cropTop: 0 },
  hero: {
    headline: "圏外でも、旅のしおりは\n全部ポケットに",
    lead: "海外旅行のフライト・ホテル・予定・予約番号をまとめて、電波がなくても見られるようにする旅のしおりアプリです。着いたばかりの空港で SIM がつながらないときも、機内モードのままでも、必要な情報をすぐに出せます。",
    screenshots: ["/apps/tabipoke/screens/timeline.webp", "/apps/tabipoke/screens/detail.webp"],
  },
  features: [
    {
      title: "電波がなくても\n全部見られる",
      body: "旅行のデータ、元のスクショや PDF、QR コードをすべて端末に保存します。機内モードでもすべての画面が動きます。",
      image: "/apps/tabipoke/screens/timeline.webp",
    },
    {
      title: "現地時間と日本時間を\n並べて表示",
      body: "時刻は現地時間と日本時間を並べて表示するので、日付をまたぐフライトもわかりやすくなります。予約番号はワンタップでコピーできます。",
      image: "/apps/tabipoke/screens/detail.webp",
    },
    {
      title: "空港は\n名前で選ぶだけ",
      body: "「フランクフルト」「名古屋」のように、空港を名前や都市名で選ぶだけ。タイムゾーンも自動で入ります。帰りの便は行きの便から下書きを作れます。",
      image: "/apps/tabipoke/screens/airport-search.webp",
    },
    {
      title: "アカウント登録なしで\nすぐ使える",
      body: "データは端末と自分の iCloud にだけ保存します。予約の内容や個人情報を、開発者や第三者に送ることはありません。",
      image: "/apps/tabipoke/screens/home.webp",
    },
  ],
  stores: {
    appStore: "https://apps.apple.com/jp/app/id6837183118",
  },
  notes: [
    "iPhone 専用です（iOS 26 以降）。",
    "無料でも、旅行 1 件・手入力・オフライン保存のすべてが使えます。スクショ・PDF からの取り込み（ベータ）は 3 回までお試しいただけます。",
    "旅行パス（旅行 1 回分）・年額プラン（7 日間無料）・買い切りで、2 件目以降の旅行や取り込みの回数無制限、ウィジェットなどが使えます。",
  ],
  links: {
    privacy: "https://privacy-policy-root.vercel.app/tabipoke",
    terms: "https://privacy-policy-root.vercel.app/tabipoke/terms",
    support: "https://privacy-policy-root.vercel.app/tabipoke/support",
  },
  seo: {
    title: "タビポケ - オフライン旅のしおり",
    description:
      "海外旅行のフライト・ホテル・予定・予約番号をまとめて、電波がなくても見られる旅のしおりアプリ。現地時間と日本時間を並べて表示。アカウント登録なし。",
  },
};

export default app;
