import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Footer } from "@/components/Footer";
import { SiteHeader } from "@/components/SiteHeader";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { apps, site } from "@/content/site";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="border-b">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">{site.name}</h1>
            <p className="mt-5 max-w-xl text-lg leading-8 text-muted-foreground">{site.description}</p>
            <Link href="/news" className={buttonVariants({ variant: "outline", className: "mt-8" })}>
              お知らせ（アップデート・新機能）
              <ArrowRight />
            </Link>
          </div>
        </section>

        <section aria-label="アプリ" className="mx-auto max-w-6xl px-4 py-14 sm:px-6 md:py-20">
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {apps.map((a) => (
              <li key={a.slug}>
                <Link href={`/${a.slug}`} className="group block h-full">
                  <Card className="h-full gap-0 p-6 transition-colors group-hover:bg-muted/50">
                    {/* Card は先頭の img の上余白を消すので div で包む */}
                    <div>
                      <Image src={a.icon} alt="" width={64} height={64} className="size-16 rounded-2xl ring-1 ring-neutral-900/10" />
                    </div>
                    <p className="mt-5 text-lg font-bold tracking-tight">{a.name}</p>
                    <p className="mt-1 text-sm text-muted-foreground">{a.tagline}</p>
                    <div className="mt-5 flex flex-1 items-end justify-between gap-2">
                      <div className="flex gap-1.5">
                        {a.stores.appStore && (
                          <Badge variant="outline" className="font-normal text-muted-foreground">
                            iPhone
                          </Badge>
                        )}
                        {a.stores.googlePlay && (
                          <Badge variant="outline" className="font-normal text-muted-foreground">
                            Android
                          </Badge>
                        )}
                      </div>
                      <ArrowRight className="size-4 text-muted-foreground transition-transform group-hover:translate-x-0.5" />
                    </div>
                  </Card>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </main>
      <Footer />
    </>
  );
}
