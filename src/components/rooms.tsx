import Image from "next/image";
import { ArrowRight, BedDouble, Coffee, Snowflake } from "lucide-react";
import { PKG_ROOM, rooms } from "@/content/content";
import { ChoosePackageButton } from "./booking-context";

const images = [rooms.images.main, rooms.images.ac, rooms.images.bath];
const roomIcons = [BedDouble, Snowflake, Coffee];

export function Rooms() {
  return (
    <section id="stay" className="bg-white py-[clamp(70px,8vw,112px)]">
      <div className="mx-auto max-w-[1320px] px-[var(--gutter)]">
        <div className="mb-[clamp(28px,4vw,48px)] flex flex-col justify-between gap-5 min-[760px]:flex-row min-[760px]:items-end">
          <div className="max-w-[700px]">
            <span className="sv-kicker"><span aria-hidden />{rooms.eyebrow}</span>
            <h2 className="sv-section-title mt-4">{rooms.title}</h2>
            <p className="mt-4 mb-0 max-w-[62ch] text-[15px] leading-[1.7] text-[#6d6860]">{rooms.copy}</p>
          </div>
          <ChoosePackageButton pkg={PKG_ROOM} className="sv-btn sv-btn--outline flex-none">
            {rooms.cta}
            <ArrowRight size={16} strokeWidth={1.8} aria-hidden />
          </ChoosePackageButton>
        </div>

        <div className="grid gap-5 min-[720px]:grid-cols-2 min-[1080px]:grid-cols-[1.18fr_.91fr_.91fr]">
          {rooms.details.map((detail, index) => {
            const image = images[index];
            const Icon = roomIcons[index];
            const primary = index === 0;
            return (
              <article key={detail.title} className={`group overflow-hidden rounded-[18px] border border-[#e7e1d8] bg-[#fdfcf9] ${primary ? "min-[720px]:col-span-2 min-[1080px]:col-span-1" : ""}`}>
                <div className={`relative overflow-hidden bg-[#ece7de] ${primary ? "aspect-[16/11]" : "aspect-[4/3] min-[1080px]:aspect-[16/11]"}`}>
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes={primary ? "(min-width: 1080px) 42vw, 100vw" : "(min-width: 1080px) 29vw, 50vw"}
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.02]"
                    style={{ objectPosition: image.position }}
                  />
                  <span className="absolute top-4 right-4 flex h-9 w-9 items-center justify-center rounded-full bg-[#2a2118]/72 text-white backdrop-blur-sm">
                    <Icon size={17} strokeWidth={1.7} aria-hidden />
                  </span>
                </div>
                <div className="flex min-h-[132px] flex-col p-5">
                  <h3 className="m-0 text-[17px] leading-tight font-semibold tracking-[-.015em] text-[#211f1b]">{detail.title}</h3>
                  <p className="mt-2 mb-0 text-[12.5px] leading-[1.55] text-[#787168]">{detail.copy}</p>
                  {primary && (
                    <div className="mt-4 flex items-end justify-between gap-4 border-t border-[#e8e1d7] pt-4">
                      <span className="text-[11px] font-medium uppercase tracking-[.08em] text-[#797269]">{rooms.rateLabel}</span>
                      <strong className="text-[21px] tracking-[-.025em] text-[#2b251e] tabular-nums">{rooms.rate}</strong>
                    </div>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
