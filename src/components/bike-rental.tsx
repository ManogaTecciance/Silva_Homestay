import Image from "next/image";
import { ArrowRight, Bike, Clock3, MapPinned, Phone } from "lucide-react";
import { bikeRental, contact } from "@/content/content";

export function BikeRental() {
  return (
    <section id="explore" className="bg-white py-[clamp(70px,8vw,112px)]">
      <div className="mx-auto grid max-w-[1320px] items-center gap-[clamp(32px,4vw,58px)] px-[var(--gutter)] min-[980px]:grid-cols-[.72fr_1.05fr_.7fr]">
        <div className="max-w-[440px]">
          <span className="sv-kicker"><span aria-hidden />{bikeRental.eyebrow}</span>
          <h2 className="sv-section-title mt-4">Explore Anuradhapura<br /><em>your way.</em></h2>
          <p className="mt-5 mb-0 text-[15px] leading-[1.72] text-[#6d6860]">{bikeRental.copy}</p>
          <div className="mt-7 flex flex-col gap-3 min-[480px]:flex-row min-[980px]:flex-col min-[1180px]:flex-row">
            <a className="sv-btn sv-btn--accent" href="#packages">
              View Bike Rental
              <ArrowRight size={16} strokeWidth={1.8} aria-hidden />
            </a>
            <a className="sv-btn sv-btn--outline" href={contact.phoneHref}>
              <Phone size={15} strokeWidth={1.8} aria-hidden />
              Call to reserve
            </a>
          </div>
        </div>

        <div className="relative aspect-[4/3] overflow-hidden rounded-[22px] bg-[#e8e2d9] shadow-[0_24px_54px_-38px_rgba(40,31,18,.55)]">
          <Image src={bikeRental.image.src} alt={bikeRental.image.alt} fill sizes="(min-width: 980px) 42vw, 100vw" className="object-cover transition-transform duration-500 hover:scale-[1.02]" />
        </div>

        <aside className="rounded-[18px] border border-[#e6ded2] bg-[#fbf8f2] p-6 shadow-[0_18px_42px_-36px_rgba(41,31,18,.5)]" aria-label="Bike rental information">
          <div className="flex items-center justify-between gap-4 border-b border-[#e4dccf] pb-4">
            <span className="text-[15px] font-semibold text-[#26221c]">Bike rental</span>
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#f0e5cf] text-[#8c682b]"><Bike size={18} strokeWidth={1.7} aria-hidden /></span>
          </div>
          <div className="divide-y divide-[#e4dccf]">
            <div className="flex items-start gap-3 py-4">
              <Clock3 size={17} strokeWidth={1.7} className="mt-0.5 flex-none text-[#8c682b]" aria-hidden />
              <span className="flex flex-col gap-1"><strong className="text-[13px] font-semibold">Flexible rental</strong><span className="text-[11.5px] leading-[1.5] text-[#777067]">Collect your bike directly from the homestay.</span></span>
            </div>
            <div className="flex items-start gap-3 py-4">
              <MapPinned size={17} strokeWidth={1.7} className="mt-0.5 flex-none text-[#8c682b]" aria-hidden />
              <span className="flex flex-col gap-1"><strong className="text-[13px] font-semibold">Sacred City / Mihintale</strong><span className="text-[11.5px] leading-[1.5] text-[#777067]">Bike package from <b className="text-[#4b402f]">Rs. 2,000</b>.</span></span>
            </div>
          </div>
          <p className="m-0 pt-1 text-[10.5px] leading-[1.5] text-[#8a8278]">Contact us to confirm your dates and the right rental option.</p>
        </aside>
      </div>
    </section>
  );
}
