import Link from "next/link";
import { SiteHeader } from "@/components/SiteHeader";
import { buttonVariants } from "@/components/ui/button";

export default function NotFound() {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto max-w-xl px-4 py-24 text-center">
        <p className="font-mono text-sm text-muted-foreground">404</p>
        <h1 className="mt-3 text-2xl font-bold tracking-tight">ページが見つかりません</h1>
        <Link href="/" className={buttonVariants({ variant: "outline", className: "mt-8" })}>
          アプリ一覧へ
        </Link>
      </main>
    </>
  );
}
