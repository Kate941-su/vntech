import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { findApp } from "@/content/site";
import { CATEGORIES, formatDate, type Category, type NewsMeta } from "@/lib/news";
import { Badge } from "@/components/ui/badge";

const CATEGORY_VARIANT: Record<Category, "default" | "secondary" | "outline"> = {
  feature: "default",
  update: "secondary",
  info: "outline",
};

export function CategoryBadge({ category }: { category: Category }) {
  return <Badge variant={CATEGORY_VARIANT[category]}>{CATEGORIES[category]}</Badge>;
}

/** お知らせの一覧（新しい順に渡す） */
export function NewsList({ items, showApp = true }: { items: NewsMeta[]; showApp?: boolean }) {
  if (items.length === 0) return <p className="py-10 text-center text-sm text-muted-foreground">お知らせはまだありません。</p>;
  return (
    <ul className="divide-y rounded-xl border bg-card">
      {items.map((n) => {
        const app = n.app ? findApp(n.app) : undefined;
        return (
          <li key={n.id}>
            <Link href={`/news/${n.id}`} className="group flex items-center gap-4 p-4 transition-colors hover:bg-muted/60 sm:p-5">
              <span className="min-w-0 flex-1">
                <span className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
                  <time dateTime={n.date}>{formatDate(n.date)}</time>
                  <CategoryBadge category={n.category} />
                  {showApp && app && (
                    <span className="inline-flex items-center gap-1.5">
                      <Image src={app.icon} alt="" width={16} height={16} className="size-4 rounded" />
                      {app.name}
                    </span>
                  )}
                </span>
                <span className="mt-1.5 block font-semibold leading-snug">{n.title}</span>
                <span className="mt-1 line-clamp-2 block text-sm text-muted-foreground">{n.summary}</span>
              </span>
              <ChevronRight className="size-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5" />
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
