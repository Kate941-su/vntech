import Link from "next/link";
import type { AppLP } from "@/content/types";
import { newsForApp } from "@/lib/news";
import { buttonVariants } from "@/components/ui/button";
import { NewsList } from "./NewsList";

/** LP のフッター手前に出す、そのアプリの最新のお知らせ（無ければ出さない） */
export function NewsSection({ app, limit = 3 }: { app: AppLP; limit?: number }) {
  const items = newsForApp(app.slug);
  if (items.length === 0) return null;
  return (
    <section aria-labelledby="news-title" className="mx-auto max-w-6xl px-4 pb-16 sm:px-6 md:pb-24">
      <div className="flex items-end justify-between gap-4">
        <div>
          <p className="text-sm font-semibold text-brand">NEWS</p>
          <h2 id="news-title" className="mt-2 text-2xl font-bold tracking-tight">
            お知らせ
          </h2>
        </div>
        {items.length > limit && (
          <Link href={`/${app.slug}/news`} className={buttonVariants({ variant: "outline", size: "sm" })}>
            すべて見る
          </Link>
        )}
      </div>
      <div className="mt-6">
        <NewsList items={items.slice(0, limit)} showApp={false} />
      </div>
    </section>
  );
}
