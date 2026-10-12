import Image from "next/image";
import { brand } from "@/content/content";

export function Logo({ size = 36, footer = false }: { size?: number; footer?: boolean }) {
  return (
    <span className="flex items-center" style={{ gap: footer ? 11 : 10 }}>
      <Image
        src={brand.logo.src}
        alt={footer ? "" : brand.logo.alt}
        width={size}
        height={size}
        className="rounded-full"
        style={{ width: size, height: size }}
        priority={!footer}
      />
      <span className="flex flex-col" style={{ gap: footer ? 2 : 1 }}>
        <span className="font-semibold leading-[1.1] tracking-[-0.01em]" style={{ fontSize: footer ? 15 : 14 }}>
          {brand.line1}
        </span>
        <span className="text-[10px] font-medium uppercase leading-[1.1] tracking-[.1em] text-muted-foreground">
          {brand.line2}
        </span>
      </span>
    </span>
  );
}
