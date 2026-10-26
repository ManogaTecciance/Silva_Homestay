import { Bike, Landmark, Snowflake } from "lucide-react";
import { pillars } from "@/content/content";

const icons = [Snowflake, Bike, Landmark];

export function Pillars() {
  return (
    <section className="border-y border-[#e7e0d4] bg-white" aria-label="Why stay with Silva Homestay">
      <div className="mx-auto grid max-w-[1320px] divide-y divide-[#e8e1d6] px-[var(--gutter)] min-[720px]:grid-cols-3 min-[720px]:divide-x min-[720px]:divide-y-0">
        {pillars.map((pillar, index) => {
          const Icon = icons[index];
          return (
            <div key={pillar.kicker} className="flex items-start gap-4 py-6 min-[720px]:px-[clamp(22px,3vw,42px)] min-[720px]:first:pl-0 min-[720px]:last:pr-0">
              <span className="flex h-10 w-10 flex-none items-center justify-center rounded-full bg-[#f7f1e4] text-[#8a672a]">
                <Icon size={19} strokeWidth={1.6} aria-hidden />
              </span>
              <span className="flex flex-col gap-1">
                <span className="text-[14px] font-semibold tracking-[-.01em] text-[#201e1a]">{pillar.title}</span>
                <span className="text-[12.5px] leading-[1.55] text-[#756f66]">{pillar.copy}</span>
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
}
