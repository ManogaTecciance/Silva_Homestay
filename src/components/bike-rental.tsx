import Image from "next/image";
import { bikeRental, contact } from "@/content/content";

export function BikeRental() {
  return (
    <section id="explore" className="mt-[var(--section-gap)] border-y border-border bg-surface">
      <div className="container-x py-[clamp(48px,6vw,88px)]">
        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,320px),1fr))] items-center gap-[clamp(28px,5vw,72px)]">
          <div className="max-w-[560px]">
            <span className="eyebrow">{bikeRental.eyebrow}</span>
            <h2 className="h2-lg">{bikeRental.title}</h2>
            <p className="body-copy mt-4 mb-0">{bikeRental.copy}</p>
            <div className="mt-[26px] flex flex-wrap gap-[10px]">
              <a className="btn btn-default" href="#packages">
                {bikeRental.primaryCta}
              </a>
              <a className="btn btn-outline" href={contact.phoneHref}>
                {bikeRental.secondaryCta}
              </a>
            </div>
          </div>
          <div className="photo-frame relative aspect-[334/288] w-full max-w-[560px] justify-self-end rounded-[var(--radius-2xl)] shadow-[var(--shadow-sm)]">
            <Image src={bikeRental.image.src} alt={bikeRental.image.alt} fill sizes="(min-width: 720px) 560px, 100vw" className="object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}
