import Image from "next/image";
import { ArrowRight, Bike, Landmark, Snowflake, SquareParking } from "lucide-react";
import { hero } from "@/content/content";

const featureIcons = [Snowflake, Bike, SquareParking, Landmark];

export function Hero() {
  return (
    <section id="top" className="sv-hero">
      <div className="mx-auto grid max-w-[1320px] items-center gap-[clamp(36px,5vw,82px)] px-[var(--gutter)] py-[clamp(48px,6vw,88px)] min-[900px]:min-h-[650px] min-[900px]:grid-cols-[.88fr_1.12fr]">
        <div className="relative z-[2] max-w-[590px] py-2">
          <span className="sv-kicker">
            <span aria-hidden />
            {hero.eyebrow}
          </span>
          <h1 className="sv-hero-title mt-5">
            Stay comfortably.<br />
            Explore <em>Anuradhapura</em><br />
            <em>freely.</em>
          </h1>
          <p className="mt-6 mb-0 max-w-[54ch] text-[clamp(15px,1.3vw,17px)] leading-[1.72] text-[#625e57] text-pretty">
            {hero.copy}
          </p>
          <div className="mt-8 flex flex-col gap-3 min-[480px]:flex-row">
            <a className="sv-btn sv-btn--accent" href="#enquire">
              {hero.primaryCta}
              <ArrowRight size={16} strokeWidth={1.8} aria-hidden />
            </a>
            <a className="sv-btn sv-btn--outline" href="#packages">
              {hero.secondaryCta}
              <ArrowRight size={16} strokeWidth={1.8} aria-hidden />
            </a>
          </div>

          <div className="mt-9 grid grid-cols-2 gap-x-4 gap-y-4 min-[560px]:grid-cols-4">
            {hero.chips.map((label, index) => {
              const Icon = featureIcons[index];
              return (
                <span key={label} className="flex items-center gap-2 text-[12px] font-medium text-[#34312c]">
                  <Icon size={18} strokeWidth={1.55} className="flex-none text-[#7d5d25]" aria-hidden />
                  {label}
                </span>
              );
            })}
          </div>
        </div>

        <div className="relative w-full min-[900px]:-mr-[max(0px,calc((100vw-1320px)/2))]">
          <div className="sv-hero-image relative min-h-[460px] overflow-hidden min-[900px]:min-h-[610px] min-[900px]:rounded-l-[28px] min-[900px]:rounded-r-none">
            <Image
              src={hero.image.src}
              alt={hero.image.alt}
              fill
              priority
              sizes="(min-width: 900px) 58vw, 100vw"
              className="object-cover"
              style={{ objectPosition: "50% 60%" }}
            />
            <span className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(250,248,243,.16),transparent_28%)]" />
          </div>
          <div className="sv-rate-card absolute bottom-5 left-4 min-[900px]:bottom-7 min-[900px]:left-[-26px]">
            <span className="text-[10px] font-semibold uppercase tracking-[.16em] text-[#766e62]">{hero.rateLabel}</span>
            <strong className="mt-1 block text-[26px] leading-none tracking-[-.03em] text-[#171714] tabular-nums">{hero.rate}</strong>
          </div>
        </div>
      </div>
    </section>
  );
}
