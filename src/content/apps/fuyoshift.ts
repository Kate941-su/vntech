import type { AppLP } from "../types";

// 文言の元: data/listings/fuyoshift.json（Google Play の掲載文）
// 画面は arbeit リポジトリの素の画面（build/store_screenshots/raw/android/ja/phone）
// iOS は 2026-11-26 時点で TestFlight のみ。App Store で公開したら stores.appStore を足す
const app: AppLP = {
  slug: "fuyoshift",
  name: "扶養バイト管理",
  tagline: "シフト給料計算と年収の壁",
  icon: "/apps/fuyoshift/icon.webp",
  accent: "#006b5b",
  screenshots: { style: "device", aspect: 1080 / 2400, cropTop: 0 },
  hero: {
    headline: "扶養の壁まで、\nあといくら？",
    lead: "シフトを入力するだけで、次の給料の見込みと、扶養の「年収の壁」までの残りがわかるアプリです。入力したシフトと時給から目安を計算します。会員登録はいりません。",
    screenshots: ["/apps/fuyoshift/screens/home.webp", "/apps/fuyoshift/screens/calendar.webp"],
  },
  features: [
    {
      title: "あなたに当てはまる壁を\nまとめて確認",
      body: "税金の扶養と社会保険の扶養の両方に対応し、あなたに当てはまる壁を表示します。「あと○円」と、このペースで超えそうな月を予測し、壁に近づいたら通知でお知らせします。",
      image: "/apps/fuyoshift/screens/wall.webp",
    },
    {
      title: "あと何時間\n働けるかがわかる",
      body: "壁までの残りを、時間と日数に換算します。バイトを掛け持ちしている場合は、勤務先ごとに切り替えられます。",
      image: "/apps/fuyoshift/screens/hours.webp",
    },
    {
      title: "深夜や土日の割増も\n自動で計算",
      body: "時給と日給に対応し、深夜・土日祝・残業などの割増を重ねて計算します。日をまたぐシフト、休憩、交通費にも対応しています。",
      image: "/apps/fuyoshift/screens/shift.webp",
    },
    {
      title: "毎月の収入を\nグラフでチェック",
      body: "給料明細の実際の支給額を入力すると、年間の収入に反映されます。月ごとの収入はグラフで確認できます。",
      image: "/apps/fuyoshift/screens/chart.webp",
    },
  ],
  stores: {
    googlePlay: "https://play.google.com/store/apps/details?id=jp.vntech.fuyoshift",
  },
  notes: [
    "無料で使えます（広告を表示します）。扶養の壁の機能は、無料版でもすべて使えます。有料版（年額プラン・買い切り）では広告を表示せず、勤務先を 3 つ以上登録できます。",
    "シフト・時給・収入・生年月日は端末の外に送りません。",
    "表示する金額や時期は、入力した情報と公開されている制度の情報をもとにした目安です。実際の給与額や、税金・社会保険の扱いを保証するものではありません。扶養の正式な判定は、勤務先、家族の勤務先の健康保険組合、税務署などにご確認ください。",
    "本アプリは、国や自治体などの公的機関とは関係ありません。",
  ],
  links: {
    privacy: "https://privacy-policy-root.vercel.app/fuyoshift",
    terms: "https://privacy-policy-root.vercel.app/fuyoshift/terms",
    support: "https://privacy-policy-root.vercel.app/fuyoshift/support",
  },
  seo: {
    title: "扶養バイト管理 - シフト給料計算と年収の壁",
    description:
      "シフトを入力するだけで、次の給料の見込みと扶養の「年収の壁」までの残りがわかるアプリ。あと何時間働けるか、深夜などの割増の計算にも対応。会員登録なし。",
  },
};

export default app;
