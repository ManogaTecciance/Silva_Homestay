import Image from "next/image";
import { Bike, Check, Landmark } from "lucide-react";
import { welcome } from "@/content/content";

const icons = [Check, Landmark, Bike];

export function Welcome() {
  return (
    <section id="about" className="bg-[#f4f0e8] py-[clamp(64px,8vw,112px)]">
      <div className="mx-auto grid max-w-[1320px] items-center gap-[clamp(36px,6vw,92px)] px-[var(--gutter)] min-[860px]:grid-cols-[1.08fr_.92fr]">
        <div className="relative">
          <div className="relative aspect-[6/5] overflow-hidden rounded-[22px] bg-[#e9e2d6] shadow-[0_24px_60px_-38px_rgba(45,35,20,.55)]">
            <Image
              src={welcome.image.src}
              alt={welcome.image.alt}
              fill
              sizes="(min-width: 860px) 56vw, 100vw"
              className="object-cover transition-transform duration-500 hover:scale-[1.02]"
              style={{ objectPosition: "50% 47%" }}
            />
          </div>
          <span className="absolute -right-3 -bottom-4 hidden rounded-[14px] border border-white/70 bg-white/94 px-5 py-4 text-[12px] font-medium text-[#4f493f] shadow-[0_18px_40px_-24px_rgba(45,35,20,.5)] backdrop-blur min-[680px]:block">
            A peaceful base in Anuradhapura
          </span>
        </div>

        <div className="max-w-[540px]">
          <span className="sv-kicker"><span aria-hidden />{welcome.eyebrow}</span>
          <h2 className="sv-section-title mt-4">Welcome to Silva<br /><em>Homestay & Bike Rental</em></h2>
          <p className="mt-5 mb-0 text-[15px] leading-[1.75] text-[#69645c] text-pretty">{welcome.paragraphs[0]}</p>
          <p className="mt-3 mb-0 text-[15px] leading-[1.75] text-[#69645c] text-pretty">{welcome.paragraphs[1]}</p>

          <div className="mt-7 divide-y divide-[#dcd4c7] border-y border-[#dcd4c7]">
            {welcome.highlights.map((highlight, index) => {
              const Icon = icons[index];
              return (
                <div key={highlight} className="flex items-center gap-3 py-3.5 text-[13.5px] font-medium text-[#38342e]">
                  <Icon size={17} strokeWidth={1.65} className="text-[#926d2e]" aria-hidden />
                  {highlight}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
