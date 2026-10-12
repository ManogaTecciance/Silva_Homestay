import Image from "next/image";
import { PKG_ROOM, rooms } from "@/content/content";
import { ChoosePackageButton } from "./booking-context";

const tile = "photo-frame relative rounded-[var(--radius-xl)]";

export function Rooms() {
  const { main, ac, bath } = rooms.images;
  return (
    <section id="stay" className="container-x pt-[var(--section-gap)]">
      <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,320px),1fr))] items-center gap-[clamp(28px,5vw,72px)]">
        <div className="max-w-[520px]">
          <span className="eyebrow">{rooms.eyebrow}</span>
          <h2 className="h2">{rooms.title}</h2>
          <p className="body-copy mt-4 mb-0">{rooms.copy}</p>
          <div className="mt-5 flex flex-wrap gap-[6px]">
            {rooms.chips.map((c) => (
              <span key={c} className="badge badge-secondary">
                {c}
              </span>
            ))}
          </div>
          <div className="mt-7 flex flex-wrap items-center justify-between gap-[14px] rounded-[var(--radius-xl)] border border-border bg-card px-5 py-[18px] shadow-[var(--shadow-xs)]">
            <span className="flex flex-col gap-[2px]">
              <span className="meta-label">{rooms.rateLabel}</span>
              <span className="price !leading-[1.1]">{rooms.rate}</span>
            </span>
            <ChoosePackageButton pkg={PKG_ROOM} className="btn btn-default">
              {rooms.cta}
            </ChoosePackageButton>
          </div>
        </div>

        <div className="grid w-full grid-cols-[1.3fr_1fr] gap-3">
          <div className={`${tile} row-span-2`}>
            <Image src={main.src} alt={main.alt} fill sizes="(min-width: 720px) 400px, 57vw" className="zoom-img object-cover" style={{ objectPosition: main.position }} />
          </div>
          <div className={`${tile} aspect-[3/4]`}>
            <Image src={ac.src} alt={ac.alt} fill sizes="(min-width: 720px) 300px, 43vw" className="zoom-img object-cover" style={{ objectPosition: ac.position }} />
          </div>
          <div className={`${tile} aspect-[3/4]`}>
            <Image src={bath.src} alt={bath.alt} fill sizes="(min-width: 720px) 300px, 43vw" className="zoom-img object-cover" style={{ objectPosition: bath.position }} />
          </div>
        </div>
      </div>
    </section>
  );
}
