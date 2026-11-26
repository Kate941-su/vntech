import Image from "next/image";
import type { AppLP } from "@/content/types";
import { cn } from "@/lib/utils";

type Props = {
  src: string;
  alt: string;
  shots: AppLP["screenshots"];
  sizes: string;
  priority?: boolean;
  className?: string;
};

/**
 * アプリの画面。
 * - device: 素の画面を、黒い端末の枠（CSS）に入れる
 * - card:   ストア用の画像の見出しを切り落とし、角丸のカードにする
 */
export function Screenshot({ src, alt, shots, sizes, priority, className }: Props) {
  if (shots.style === "device") {
    return (
      <div
        className={cn(
          "rounded-[2.6rem] bg-neutral-900 p-[3.2%] shadow-xl shadow-neutral-900/15 ring-1 ring-neutral-900/10",
          className,
        )}
      >
        <div className="relative overflow-hidden rounded-[2.1rem] bg-neutral-100" style={{ aspectRatio: shots.aspect }}>
          <Image src={src} alt={alt} fill sizes={sizes} priority={priority} className="object-cover" />
        </div>
      </div>
    );
  }
  return (
    <div
      className={cn("relative overflow-hidden rounded-3xl shadow-xl shadow-neutral-900/10 ring-1 ring-neutral-900/10", className)}
      style={{ aspectRatio: `${shots.aspect / (1 - shots.cropTop)}` }}
    >
      <Image src={src} alt={alt} fill sizes={sizes} priority={priority} className="object-cover object-bottom" />
    </div>
  );
}
