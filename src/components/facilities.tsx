import Image from "next/image";
import { Bike, CookingPot, Leaf, Snowflake, SquareParking, Tag, type LucideIcon } from "lucide-react";
import { facilities, facilitiesSection, type FacilityIcon } from "@/content/content";

const icons: Record<FacilityIcon, LucideIcon> = {
  snowflake: Snowflake,
  bike: Bike,
  parking: SquareParking,
  leaf: Leaf,
  tag: Tag,
  cooking: CookingPot,
};

export function Facilities() {
  return (
    <section id="facilities" className="container-x pt-[var(--section-gap)]">
      <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,300px),1fr))] items-start gap-[clamp(28px,4vw,64px)]">
        <div>
          <span className="eyebrow">{facilitiesSection.eyebrow}</span>
          <h2 className="h2">{facilitiesSection.title}</h2>
          <div className="photo-frame relative mt-7 aspect-[4/3] max-w-[460px] rounded-[var(--radius-xl)]">
            <Image src={facilitiesSection.image.src} alt={facilitiesSection.image.alt} fill sizes="(min-width: 720px) 460px, 100vw" className="object-cover" />
          </div>
        </div>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,200px),1fr))] gap-3">
          {facilities.map((f) => {
            const Icon = icons[f.icon];
            return (
              <div key={f.title} className="flex flex-col gap-[10px] rounded-[var(--radius-lg)] border border-border bg-card p-[18px]">
                <Icon size={20} strokeWidth={2} className="text-gold-ink" aria-hidden />
                <span className="text-sm leading-[1.25] font-semibold">{f.title}</span>
                <span className="text-[12.5px] leading-normal text-muted-foreground">{f.copy}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
