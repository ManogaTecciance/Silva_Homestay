import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { packages, packagesSection } from "@/content/content";
import { ChoosePackageButton } from "./booking-context";

export function Packages() {
  return (
    <section id="packages" className="container-x pt-[var(--section-gap)]">
      <div className="mb-[clamp(24px,3vw,40px)] flex flex-wrap items-end justify-between gap-5">
        <div className="max-w-[640px]">
          <span className="eyebrow">{packagesSection.eyebrow}</span>
          <h2 className="h2">{packagesSection.title}</h2>
          <p className="mt-[14px] mb-0 text-[15px] leading-[1.65] text-pretty text-muted-foreground">{packagesSection.copy}</p>
        </div>
        <a className="btn btn-outline" href="#enquire" style={{ gap: 8 }}>
          {packagesSection.cta}
          <ArrowRight size={15} strokeWidth={2} aria-hidden />
        </a>
      </div>

      <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,320px),1fr))] gap-[clamp(16px,2vw,24px)]">
        {packages.map((p) => (
          <article
            key={p.badge}
            className={`relative flex flex-col overflow-hidden rounded-[var(--radius-xl)] border bg-card transition-[transform,box-shadow] duration-200 ease-out hover:-translate-y-0.5 ${
              p.featured
                ? "border-gold shadow-[var(--shadow-md)]"
                : "border-border shadow-[var(--shadow-sm)] hover:shadow-[var(--shadow-md)]"
            }`}
          >
            <span
              className="badge absolute top-[14px] left-[14px] z-[2] font-semibold"
              style={
                p.featured
                  ? { background: "var(--silva-gold)", color: "#1A1406" }
                  : { background: "var(--card)", color: "var(--foreground)", borderColor: "var(--border)" }
              }
            >
              {p.badge}
            </span>
            <div className="relative aspect-[16/10] overflow-hidden bg-muted">
              <Image
                src={p.image.src}
                alt={p.image.alt}
                fill
                sizes="(min-width: 1400px) 680px, (min-width: 720px) 50vw, 100vw"
                className="zoom-img object-cover"
                style={{ objectPosition: p.image.position }}
              />
            </div>
            <div className="flex flex-1 flex-col gap-[14px] p-[clamp(20px,2vw,26px)]">
              <div className="flex flex-col gap-2">
                <h3 className="m-0 text-[19px] leading-[1.2] font-semibold tracking-[-0.01em]">{p.title}</h3>
                {p.paragraphs.map((t, i) => (
                  <p key={i} className="m-0 text-sm leading-[1.6] text-pretty text-muted-foreground">
                    {t}
                  </p>
                ))}
              </div>
              <div className="flex flex-wrap gap-[6px]">
                {p.chips.map((c) => (
                  <span key={c} className="badge badge-secondary">
                    {c}
                  </span>
                ))}
                {p.extraChip && <span className="badge badge-outline">{p.extraChip}</span>}
              </div>
              <div className="flex-1" />
              <div className="separator" />
              <div className="flex items-end justify-between gap-3">
                <span className="flex flex-col gap-[2px]">
                  <span className="meta-label">{p.priceLabel}</span>
                  <span className="price">{p.price}</span>
                </span>
                <ChoosePackageButton pkg={p.value} className={`btn ${p.featured ? "btn-default" : "btn-outline"}`}>
                  {packagesSection.select}
                </ChoosePackageButton>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
