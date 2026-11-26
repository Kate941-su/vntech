import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Footer } from "@/components/Footer";
import { SiteHeader } from "@/components/SiteHeader";
import { findApp } from "@/content/site";
import { ArrowLeft } from "lucide-react";
import { CategoryBadge } from "@/components/NewsList";
import { buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { allNews, findNews, formatDate } from "@/lib/news";

type Props = { params: Promise<{ id: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return allNews().map((n) => ({ id: n.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const n = findNews((await params).id);
  if (!n) return {};
  const app = n.app ? findApp(n.app) : undefined;
  const image = n.image ?? app?.seo.ogImage ?? app?.icon;
  return {
    title: app ? `${n.title} | ${app.name}` : n.title,
    description: n.summary,
    alternates: { canonical: `/news/${n.id}` },
    openGraph: {
      type: "article",
      locale: "ja_JP",
      url: `/news/${n.id}`,
      title: n.title,
      description: n.summary,
      publishedTime: n.date,
      images: image ? [image] : undefined,
    },
  };
}

export default async function NewsArticle({ params }: Props) {
  const n = findNews((await params).id);
  if (!n) notFound();
  const app = n.app ? findApp(n.app) : undefined;

  return (
    <>
      <SiteHeader />
      <article className="mx-auto max-w-3xl px-4 py-14 sm:px-6 md:py-20">
        <p className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
          <time dateTime={n.date}>{formatDate(n.date)}</time>
          <CategoryBadge category={n.category} />
          {app && (
            <Link href={`/${app.slug}`} className="inline-flex items-center gap-1.5 hover:text-foreground">
              <Image src={app.icon} alt="" width={18} height={18} className="size-[18px] rounded" />
              {app.name}
            </Link>
          )}
          {n.version && <span>バージョン {n.version}</span>}
        </p>
        <h1 className="mt-4 text-3xl font-bold leading-snug tracking-tight">{n.title}</h1>
        {n.image && (
          // 記事ごとに縦横比が違うので next/image の fill ではなく実寸で出す
          // eslint-disable-next-line @next/next/no-img-element
          <img src={n.image} alt="" className="mt-8 w-full rounded-xl border" />
        )}
        <Separator className="my-8" />
        <div className="news-body" dangerouslySetInnerHTML={{ __html: n.html }} />

        <p className="mt-14">
          <Link href={app ? `/${app.slug}/news` : "/news"} className={buttonVariants({ variant: "outline" })}>
            <ArrowLeft />
            お知らせ一覧へ
          </Link>
        </p>
      </article>
      <Footer app={app} />
    </>
  );
}
