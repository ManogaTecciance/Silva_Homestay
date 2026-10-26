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
    <section id="facilities" className="bg-[#f7f3eb] py-[clamp(64px,7vw,96px)]">
      <div className="mx-auto max-w-[1320px] px-[var(--gutter)]">
        <div className="mb-[clamp(28px,4vw,46px)] grid gap-4 min-[760px]:grid-cols-[.72fr_1fr] min-[760px]:items-end">
          <div>
            <span className="sv-kicker"><span aria-hidden />{facilitiesSection.eyebrow}</span>
            <h2 className="sv-section-title mt-4">Everything you need<br /><em>for a comfortable stay.</em></h2>
          </div>
          <p className="mb-1 max-w-[56ch] text-[14px] leading-[1.7] text-[#706a62] min-[760px]:justify-self-end">
            Simple, thoughtful essentials for a relaxed stay and an easy day exploring Anuradhapura.
          </p>
        </div>

        <div className="grid border-t border-[#ddd5c8] min-[620px]:grid-cols-2 min-[980px]:grid-cols-3">
          {facilities.map((facility) => {
            const Icon = icons[facility.icon];
            return (
              <div key={facility.title} className="group flex gap-4 border-b border-[#ddd5c8] py-6 min-[620px]:px-6 min-[620px]:odd:border-r min-[620px]:odd:pl-0 min-[980px]:border-r min-[980px]:nth-[3n]:border-r-0 min-[980px]:nth-[3n+1]:pl-0">
                <span className="flex h-11 w-11 flex-none items-center justify-center rounded-[12px] bg-white text-[#8c6729] shadow-[0_8px_20px_-16px_rgba(42,31,15,.5)] transition-transform duration-300 group-hover:-translate-y-0.5">
                  <Icon size={20} strokeWidth={1.65} aria-hidden />
                </span>
                <span className="flex flex-col gap-1.5">
                  <strong className="text-[14px] font-semibold text-[#2a2722]">{facility.title}</strong>
                  <span className="text-[12px] leading-[1.55] text-[#777168]">{facility.copy}</span>
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
