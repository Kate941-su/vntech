import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { AppLP } from "@/content/types";
import { apps, externalApps, site } from "@/content/site";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { StoreBadges } from "./StoreBadges";

/** 3. フッター: もう一度ダウンロードボタン＋自社アプリへのリンク */
export function Footer({ app }: { app?: AppLP }) {
  const others = [
    ...apps
      .filter((a) => a.slug !== app?.slug)
      .map((a) => ({ name: a.name, tagline: a.tagline, icon: a.icon, href: `/${a.slug}`, internal: true })),
    ...externalApps.map((a) => ({ ...a, internal: false })),
  ];

  const links = [
    app?.links.privacy && { href: app.links.privacy, label: "プライバシーポリシー", external: true },
    app?.links.terms && { href: app.links.terms, label: "利用規約", external: true },
    app?.links.support && { href: app.links.support, label: "サポート", external: true },
    { href: app ? `/${app.slug}/news` : "/news", label: "お知らせ", external: false },
    { href: site.googlePlayDeveloper, label: "Google Play のデベロッパーページ", external: true },
    app && { href: "/", label: "すべてのアプリ", external: false },
  ].filter(Boolean) as { href: string; label: string; external: boolean }[];

  return (
    <footer className="border-t bg-muted/40">
      {app && (
        <section className="mx-auto max-w-6xl px-4 pt-16 sm:px-6 md:pt-20">
          <Card className="items-center gap-0 px-6 py-12 text-center sm:px-12">
            <div>
              <Image src={app.icon} alt="" width={80} height={80} className="size-20 rounded-[1.4rem] ring-1 ring-neutral-900/10" />
            </div>
            <p className="mt-5 text-xl font-bold tracking-tight">{app.name}</p>
            <p className="mt-1 text-sm text-muted-foreground">{app.tagline}</p>
            <StoreBadges stores={app.stores} appName={app.name} className="mt-8 justify-center" />
            {app.notes && (
              <ul className="mt-10 max-w-2xl space-y-1.5 text-left text-xs leading-6 text-muted-foreground">
                {app.notes.map((n) => (
                  <li key={n} className="flex gap-2">
                    <span aria-hidden>※</span>
                    <span>{n}</span>
                  </li>
                ))}
              </ul>
            )}
          </Card>
        </section>
      )}

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <h2 className="text-sm font-semibold">{app ? "ほかのアプリ" : "アプリ一覧"}</h2>
        <ul className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {others.map((o) => {
            const body = (
              <>
                <Image src={o.icon} alt="" width={44} height={44} className="size-11 shrink-0 rounded-xl ring-1 ring-neutral-900/10" />
                <span className="min-w-0 flex-1">
                  <span className="block truncate text-sm font-semibold">{o.name}</span>
                  <span className="block truncate text-xs text-muted-foreground">{o.tagline}</span>
                </span>
                {!o.internal && <ArrowUpRight className="size-4 shrink-0 text-muted-foreground" aria-label="外部サイト" />}
              </>
            );
            const cls =
              "flex items-center gap-3 rounded-xl border bg-background p-3 transition-colors hover:bg-muted";
            return (
              <li key={o.href}>
                {o.internal ? (
                  <Link href={o.href} className={cls}>
                    {body}
                  </Link>
                ) : (
                  <a href={o.href} target="_blank" rel="noopener" className={cls}>
                    {body}
                  </a>
                )}
              </li>
            );
          })}
        </ul>

        <Separator className="my-10" />

        <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
          {links.map((l) =>
            l.external ? (
              <a key={l.label} href={l.href} target="_blank" rel="noopener" className="hover:text-foreground">
                {l.label}
              </a>
            ) : (
              <Link key={l.label} href={l.href} className="hover:text-foreground">
                {l.label}
              </Link>
            ),
          )}
        </nav>
        <p className="mt-6 text-xs text-muted-foreground">
          © {new Date().getFullYear()} {site.developer}
        </p>
        <p className="mt-2 text-[11px] leading-5 text-muted-foreground/80">
          Apple および Apple ロゴは米国その他の国で登録された Apple Inc. の商標です。App Store は Apple Inc.
          のサービスマークです。Google Play および Google Play ロゴは Google LLC の商標です。
        </p>
      </section>
    </footer>
  );
}
