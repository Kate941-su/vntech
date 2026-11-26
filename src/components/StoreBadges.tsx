import Image from "next/image";
import type { StoreLinks } from "@/content/types";
import { cn } from "@/lib/utils";

/**
 * ストアの公式バッジ（日本語版）。色・形は加工しない（各社のガイドライン）。
 * Google Play のバッジは画像の周りに余白があるため、高さを大きめにして見た目の高さをそろえる。
 */
export function StoreBadges({
  stores,
  appName,
  className,
}: {
  stores: StoreLinks;
  appName: string;
  className?: string;
}) {
  return (
    <div className={cn("flex flex-wrap items-center gap-x-1 gap-y-3", className)}>
      {stores.appStore && (
        <a
          href={stores.appStore}
          target="_blank"
          rel="noopener"
          className="block h-[46px] transition-opacity hover:opacity-80"
        >
          <Image
            src="/badges/app-store-ja.svg"
            alt={`App Store で${appName}をダウンロード`}
            width={136}
            height={46}
            className="h-full w-auto"
            unoptimized
          />
        </a>
      )}
      {stores.googlePlay && (
        <a
          href={stores.googlePlay}
          target="_blank"
          rel="noopener"
          className="-my-[9px] block h-[64px] transition-opacity hover:opacity-80"
        >
          <Image
            src="/badges/google-play-ja.png"
            alt={`Google Play で${appName}を手に入れよう`}
            width={190}
            height={74}
            className="h-full w-auto"
          />
        </a>
      )}
    </div>
  );
}
