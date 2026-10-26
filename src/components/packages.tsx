import Image from "next/image";
import { ArrowRight, Check } from "lucide-react";
import { packages, packagesSection } from "@/content/content";
import { ChoosePackageButton } from "./booking-context";

export function Packages() {
  return (
    <section id="packages" className="bg-[#f5f1e9] py-[clamp(70px,8vw,112px)]">
      <div className="mx-auto max-w-[1320px] px-[var(--gutter)]">
        <div className="mb-[clamp(30px,4vw,50px)] flex flex-col justify-between gap-5 min-[760px]:flex-row min-[760px]:items-end">
          <div className="max-w-[650px]">
            <span className="sv-kicker"><span aria-hidden />{packagesSection.eyebrow}</span>
            <h2 className="sv-section-title mt-4">Stay, ride, <em>or both.</em></h2>
            <p className="mt-4 mb-0 max-w-[60ch] text-[15px] leading-[1.7] text-[#6d6860]">{packagesSection.copy}</p>
          </div>
          <a className="sv-btn sv-btn--outline flex-none" href="#enquire">
            {packagesSection.cta}
            <ArrowRight size={16} strokeWidth={1.8} aria-hidden />
          </a>
        </div>

        <div className="grid gap-6 min-[820px]:grid-cols-2">
          {packages.map((pkg) => (
            <article key={pkg.badge} className="group overflow-hidden rounded-[20px] border border-[#e0d7c9] bg-white shadow-[0_18px_45px_-38px_rgba(47,36,18,.55)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_50px_-34px_rgba(47,36,18,.48)]">
              <div className="relative aspect-[16/9] overflow-hidden bg-[#e8e1d5]">
                <Image
                  src={pkg.image.src}
                  alt={pkg.image.alt}
                  fill
                  sizes="(min-width: 820px) 50vw, 100vw"
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.02]"
                  style={{ objectPosition: pkg.image.position }}
                />
                <span className="absolute top-4 left-4 rounded-full bg-white/94 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[.12em] text-[#6d5120] shadow-sm backdrop-blur-sm">{pkg.badge}</span>
              </div>
              <div className="flex min-h-[310px] flex-col p-[clamp(22px,3vw,34px)]">
                <h3 className="m-0 font-serif text-[clamp(25px,2.4vw,32px)] leading-[1.08] text-[#1f1c17]">{pkg.title}</h3>
                <p className="mt-4 mb-0 text-[14px] leading-[1.7] text-[#706a62]">{pkg.paragraphs[0]}</p>
                <ul className="mt-5 grid list-none gap-2 p-0 min-[480px]:grid-cols-2">
                  {pkg.chips.slice(0, 4).map((item) => (
                    <li key={item} className="flex items-center gap-2 text-[12.5px] text-[#4f4a43]">
                      <Check size={14} strokeWidth={2} className="flex-none text-[#9a722d]" aria-hidden />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-auto flex flex-col items-start justify-between gap-4 border-t border-[#e9e2d8] pt-5 min-[480px]:flex-row min-[480px]:items-end">
                  <span className="flex flex-col gap-1">
                    <span className="text-[10px] font-semibold uppercase tracking-[.14em] text-[#7c756b]">{pkg.priceLabel}</span>
                    <strong className="text-[25px] leading-none tracking-[-.03em] text-[#241f18] tabular-nums">{pkg.price}</strong>
                  </span>
                  <ChoosePackageButton pkg={pkg.value} className={`sv-btn ${pkg.featured ? "sv-btn--dark" : "sv-btn--outline"}`}>
                    View Package
                    <ArrowRight size={16} strokeWidth={1.8} aria-hidden />
                  </ChoosePackageButton>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
