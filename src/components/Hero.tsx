import Image from "next/image";
import type { AppLP } from "@/content/types";
import { Badge } from "@/components/ui/badge";
import { Screenshot } from "./Screenshot";
import { StoreBadges } from "./StoreBadges";

/** 1. アプリの概要: アイコン＋見出し＋短い宣伝＋ストアへのボタン＋端末画面（白地。色はアクセントの印だけ） */
export function Hero({ app }: { app: AppLP }) {
  const [front, back] = app.hero.screenshots;
  const platforms = [app.stores.appStore && "iPhone", app.stores.googlePlay && "Android"].filter(Boolean) as string[];

  return (
    <section className="border-b">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-14 sm:px-6 md:grid-cols-[1.1fr_1fr] md:py-20 lg:gap-16">
        <div>
          <div className="flex items-center gap-4">
            <Image
              src={app.icon}
              alt=""
              width={72}
              height={72}
              priority
              className="size-16 rounded-2xl ring-1 ring-neutral-900/10 sm:size-[72px]"
            />
            <div className="min-w-0">
              <p className="text-lg font-bold leading-tight">{app.name}</p>
              <p className="mt-1 text-sm text-muted-foreground">{app.tagline}</p>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-2">
            <span className="size-2 rounded-full bg-brand" aria-hidden />
            {platforms.map((p) => (
              <Badge key={p} variant="outline" className="font-normal text-muted-foreground">
                {p}
              </Badge>
            ))}
          </div>

          <h1 className="mt-4 whitespace-pre-line text-[2.1rem] font-bold leading-[1.3] tracking-tight sm:text-5xl sm:leading-[1.25]">
            {app.hero.headline}
          </h1>
          <p className="mt-6 max-w-xl text-base leading-8 text-muted-foreground">{app.hero.lead}</p>
          <StoreBadges stores={app.stores} appName={app.name} className="mt-8" />
        </div>

        <div className="relative mx-auto flex w-full max-w-md items-end justify-center gap-4 sm:gap-6" aria-hidden>
          {back && (
            <Screenshot
              src={back}
              alt=""
              shots={app.screenshots}
              sizes="(max-width: 768px) 40vw, 220px"
              className="mb-10 w-[42%] shrink-0"
            />
          )}
          {front && (
            <Screenshot
              src={front}
              alt=""
              shots={app.screenshots}
              sizes="(max-width: 768px) 50vw, 260px"
              priority
              className={back ? "w-[50%] shrink-0" : "w-[60%] shrink-0"}
            />
          )}
        </div>
      </div>
    </section>
  );
}
