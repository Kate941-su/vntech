/** ストアへのリンク。無いストアは省略する（そのバッジは出ない） */
export type StoreLinks = {
  googlePlay?: string;
  appStore?: string;
};

/** 機能紹介の 1 ブロック（LP では 2〜4 個） */
export type Feature = {
  title: string;
  body: string;
  /** public/ からのパス。省略するとテキストだけのブロックになる */
  image?: string;
};

/** LP を持つアプリ 1 つ分の設定。src/content/apps/<slug>.ts に 1 ファイルずつ置く */
export type AppLP = {
  /** URL になる（/<slug>）。英小文字・数字・- のみ */
  slug: string;
  /** 表示名（ストアのアプリ名の短い形） */
  name: string;
  /** 一言の説明。トップページのカードとフッターのアプリ一覧に出る */
  tagline: string;
  /** public/ からのパス（512px 程度の正方形） */
  icon: string;

  /**
   * アクセント色（1 色だけ）。POINT の番号・小さな印に使う。背景やグラデーションには使わない。
   * アイコンの主な色から、白背景で文字が読める濃さのものを選ぶ
   */
  accent: string;

  screenshots: {
    /**
     * device: 素の画面（見出しなし）を CSS の端末枠に入れて見せる（推奨）
     * card:   ストア用の画像（見出し・端末枠つき）の上側を切り落とし、角丸のカードで見せる
     */
    style: "device" | "card";
    /** 画像の 幅 / 高さ（Play: 1080/1920、iPhone 6.9": 1320/2868、Android 素の画面: 1080/2400 など） */
    aspect: number;
    /** card のとき、上側を何割切り落とすか（見出しが 1 行なら 0.18、サブ見出し付きなら 0.27 くらい）。device では 0 */
    cropTop: number;
  };

  hero: {
    /** 改行は \n */
    headline: string;
    lead: string;
    /** ヒーロー右側に並べて見せるスクショ（1〜2 枚。1 枚目が手前） */
    screenshots: string[];
  };

  /** 2〜4 個 */
  features: Feature[];

  stores: StoreLinks;

  /** 推奨環境・注意書きなど（フッターの手前に小さく出す） */
  notes?: string[];

  links: {
    privacy?: string;
    support?: string;
    terms?: string;
  };

  seo: {
    title: string;
    description: string;
    /** 1200x630 前後の横長画像（Play のフィーチャーグラフィックなど）。省略時はアイコン */
    ogImage?: string;
  };
};

/** LP を持たない自社アプリ（フッターのアプリ一覧に載せるだけ） */
export type ExternalApp = {
  name: string;
  tagline: string;
  icon: string;
  href: string;
};
