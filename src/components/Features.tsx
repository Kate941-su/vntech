import type { AppLP } from "@/content/types";
import { cn } from "@/lib/utils";
import { Screenshot } from "./Screenshot";

/** 2. メイン機能（2〜4 個）。画像とテキストを左右交互に並べる */
export function Features({ app }: { app: AppLP }) {
  return (
    <section aria-labelledby="features-title" className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24">
      <div className="max-w-2xl">
        <p className="text-sm font-semibold text-brand">FEATURES</p>
        <h2 id="features-title" className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">
          {app.name}でできること
        </h2>
      </div>

      <ol className="mt-12 space-y-6 md:mt-16 md:space-y-8">
        {app.features.map((f, i) => {
          const reversed = i % 2 === 1;
          return (
            <li
              key={f.title}
              className={cn(
                "grid items-center gap-8 overflow-hidden rounded-3xl border bg-card p-6 sm:p-10",
                f.image && "md:grid-cols-2 md:gap-12",
              )}
            >
              <div className={cn(reversed && f.image && "md:order-2")}>
                <p className="font-mono text-sm font-semibold tracking-wider text-brand">
                  POINT {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-3 whitespace-pre-line text-xl font-bold leading-snug tracking-tight sm:text-2xl">
                  {f.title}
                </h3>
                <p className="mt-4 leading-8 text-muted-foreground">{f.body}</p>
              </div>
              {f.image && (
                // 端末の下側はパネルで切って見せる（画面の上半分に情報が集まっているため）
                <div className="flex h-[380px] items-start justify-center overflow-hidden rounded-2xl bg-muted px-6 pt-10 sm:h-[460px]">
                  <Screenshot
                    src={f.image}
                    alt={`${f.title.replace(/\n/g, "")}の画面`}
                    shots={app.screenshots}
                    sizes="(max-width: 768px) 60vw, 260px"
                    className="w-[64%] max-w-[260px] shrink-0"
                  />
                </div>
              )}
            </li>
          );
        })}
      </ol>
    </section>
  );
}
