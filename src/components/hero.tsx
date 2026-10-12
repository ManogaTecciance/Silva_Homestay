import Image from "next/image";
import { ArrowRight, Bike } from "lucide-react";
import { hero } from "@/content/content";

export function Hero() {
  return (
    <section
      id="top"
      className="anim-fade-up container-x pt-[clamp(32px,6vw,84px)] pb-[clamp(40px,5vw,64px)]"
    >
      <div className="grid grid-cols-[minmax(0,1fr)] items-center justify-items-start gap-[clamp(32px,4vw,64px)] min-[860px]:grid-cols-[1.02fr_.98fr]">
        <div className="max-w-[640px] text-left">
          <span
            className="badge badge-outline"
            style={{ gap: 7, borderColor: "var(--silva-gold)", color: "var(--silva-gold-ink)", background: "var(--silva-gold-wash)" }}
          >
            <Bike size={12} strokeWidth={2} aria-hidden />
            {hero.eyebrow}
          </span>
          <h1 className="mt-[18px] mb-0 text-[clamp(36px,5.4vw,64px)] leading-[1.03] font-semibold tracking-[-0.03em] text-balance">
            {hero.headlineLead}&nbsp;<span className="serif-italic text-gold-ink">{hero.headlineAccent}</span>
          </h1>
          <p className="mt-5 mb-0 max-w-[50ch] text-[clamp(15px,1.3vw,17px)] leading-[1.65] text-pretty text-muted-foreground">
            {hero.copy}
          </p>
          <div className="mt-7 flex flex-wrap justify-start gap-[10px]">
            <a className="btn btn-default btn-lg" href="#enquire">
              {hero.primaryCta}
            </a>
            <a className="btn btn-outline btn-lg" href="#packages" style={{ gap: 8 }}>
              {hero.secondaryCta}
              <ArrowRight size={15} strokeWidth={2} aria-hidden />
            </a>
          </div>
          <div className="mt-6 flex flex-wrap justify-start gap-2">
            {hero.chips.map((c) => (
              <span key={c} className="badge badge-secondary">
                {c}
              </span>
            ))}
          </div>
        </div>

        <div className="relative w-full max-w-[520px] justify-self-start min-[860px]:justify-self-end">
          <div className="photo-frame relative aspect-[4/5] rounded-[var(--radius-2xl)] shadow-[var(--shadow-sm)]">
            <Image
              src={hero.image.src}
              alt={hero.image.alt}
              fill
              priority
              sizes="(min-width: 860px) 520px, 100vw"
              className="anim-hero-drift object-cover"
              style={{ objectPosition: "50% 60%" }}
            />
          </div>
          <div className="absolute bottom-6 left-[-10px] flex flex-col gap-[2px] rounded-[var(--radius-xl)] border border-border bg-card px-[18px] py-[14px] shadow-[var(--shadow-md)]">
            <span className="meta-label">{hero.rateLabel}</span>
            <span className="text-[22px] leading-[1.1] font-bold tracking-[-0.02em] tabular-nums">{hero.rate}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
