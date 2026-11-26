import Image from "next/image";
import Link from "next/link";
import { Rss } from "lucide-react";
import { apps } from "@/content/site";
import { allNews, newsForApp } from "@/lib/news";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { NewsList } from "./NewsList";
import { SiteHeader } from "./SiteHeader";
import { Footer } from "./Footer";

/** /news（全体）と /<slug>/news（アプリ別）の一覧ページ */
export function NewsIndex({ appSlug }: { appSlug?: string }) {
  const current = apps.find((a) => a.slug === appSlug);
  const items = current ? newsForApp(current.slug) : allNews();
  const filter = (active: boolean) =>
    cn(buttonVariants({ variant: active ? "default" : "outline", size: "sm" }), "rounded-full");
  return (
    <>
      <SiteHeader />
      <main className="mx-auto max-w-3xl px-4 py-14 sm:px-6 md:py-20">
        <h1 className="text-3xl font-bold tracking-tight">{current ? `${current.name}のお知らせ` : "お知らせ"}</h1>
        <p className="mt-3 text-muted-foreground">アップデートや新機能のご紹介です。</p>
        <ul className="mt-8 flex flex-wrap gap-2">
          <li>
            <Link href="/news" aria-current={current ? undefined : "page"} className={filter(!current)}>
              すべて
            </Link>
          </li>
          {apps.map((a) => (
            <li key={a.slug}>
              <Link
                href={`/${a.slug}/news`}
                aria-current={a.slug === current?.slug ? "page" : undefined}
                className={filter(a.slug === current?.slug)}
              >
                <Image src={a.icon} alt="" width={16} height={16} className="size-4 rounded" />
                {a.name}
              </Link>
            </li>
          ))}
        </ul>
        <div className="mt-8">
          <NewsList items={items} showApp={!current} />
        </div>
        <p className="mt-8">
          <a href="/news/feed.xml" className={buttonVariants({ variant: "ghost", size: "sm" })}>
            <Rss />
            RSS フィード
          </a>
        </p>
      </main>
      <Footer app={current} />
    </>
  );
}
