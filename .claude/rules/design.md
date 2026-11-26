# デザインのルール（このサイト全体）

2026-11-26 ユーザー決定。LP をリッチに見せつつ、落ち着いた見た目にそろえるためのルール。

## 1. UI コンポーネントは shadcn/ui を使う

- https://ui.shadcn.com/ のコンポーネントを `src/components/ui/` に置いて使う（スタイル `base-nova`、ベース色 `neutral`。設定は `components.json`）
- 追加は CLI で: `npx shadcn@4.23.1 add <name>`（例: `accordion` `tabs` `dialog`）
  - CLI が `import { cn } from "cn"` と書くことがある。`@/lib/utils` に直し、`cn` パッケージは入れない
- ボタン風のリンクは `<Link className={buttonVariants({ variant, size })}>`（`Button` は `<button>` を描くため、リンクには使わない）
- 余白・文字・レイアウトは Tailwind CSS v4 のクラスで書く。CSS Modules や独自の CSS ファイルは増やさない（例外: `globals.css` のお知らせ本文 `.news-body`）
- アイコンは `lucide-react`

## 2. 色とグラデーションを抑える

- **ニュートラル（白・グレー・黒）＋アクセント 1 色**だけを使う
- **グラデーション、紫〜青系のグラデーション、パステルの背景は使わない**。背景は白（`bg-background`）か薄いグレー（`bg-muted`）の単色
- アクセントはアプリごとの `accent`（`src/content/apps/<slug>.ts`）。`text-brand` / `bg-brand` で、POINT の番号・小さな印など**狭い面積にだけ**使う。広い背景・ボタン全体には使わない
  - 白地で文字として読める濃さにする（明るい色はアイコンの色より暗くする。例: ピアノタップの金 `#E2B857` → `#9a7324`）
- トップページ・お知らせなど複数アプリが並ぶページはアクセントを使わない（黒のみ）
- ストアの公式バッジは黒のまま。加工しない

## 3. スクショの見せ方

- 推奨は `screenshots.style: "device"`: 見出しも背景も無い**素の画面**を、CSS の黒い端末枠に入れる。ストア用画像の色付き背景（グラデーション）を持ち込まないため
  - 素の画面はアプリのリポジトリの `build/store_screenshots/raw/...`（store-listing スキルで撮ったもの）。日本語版を使う
  - `cwebp -q 82 -resize 720 0 <in.png> -o public/apps/<slug>/screens/<name>.webp`
- 素の画面が無いときだけ `style: "card"`（ストア画像の見出しを `cropTop` で切り落として角丸カードにする）。素の画面が用意できたら `device` に切り替える
