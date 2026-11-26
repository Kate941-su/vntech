import Link from "next/link";
import { site } from "@/content/site";
import { buttonVariants } from "@/components/ui/button";

/** 全ページ共通の上部（LP・お知らせ・トップ） */
export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b bg-background/85 backdrop-blur supports-[backdrop-filter]:bg-background/70">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="text-sm font-semibold tracking-tight">
          {site.name}
        </Link>
        <nav className="flex items-center gap-1">
          <Link href="/" className={buttonVariants({ variant: "ghost", size: "sm" })}>
            アプリ
          </Link>
          <Link href="/news" className={buttonVariants({ variant: "ghost", size: "sm" })}>
            お知らせ
          </Link>
        </nav>
      </div>
    </header>
  );
}
