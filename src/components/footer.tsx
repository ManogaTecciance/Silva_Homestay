import { Facebook, Mail, MapPin, Phone } from "lucide-react";
import { brand, contact, footer, footerNav } from "@/content/content";
import { Logo } from "./logo";

const heading = "mb-2 text-[10px] font-semibold uppercase tracking-[.15em] text-[#8c8173]";
const link = "text-[13px] leading-[1.5] text-[#514c45] transition-colors hover:text-[#8a6527]";

export function Footer() {
  return (
    <footer className="border-t border-[#e7e0d6] bg-[#faf8f3]">
      <div className="mx-auto grid max-w-[1320px] gap-9 px-[var(--gutter)] py-[clamp(44px,5vw,68px)] min-[620px]:grid-cols-2 min-[1040px]:grid-cols-[1.35fr_.7fr_1fr_.65fr]">
        <div>
          <Logo size={44} footer />
          <p className="mt-5 mb-0 max-w-[34ch] text-[12.5px] leading-[1.65] text-[#746e65]">{brand.footerBlurb}</p>
        </div>

        <div className="flex flex-col gap-2.5">
          <span className={heading}>{footer.quickLinksHeading}</span>
          {footerNav.map((item) => <a key={item.href} href={item.href} className={link}>{item.label}</a>)}
        </div>

        <div className="flex flex-col gap-3">
          <span className={heading}>{footer.contactHeading}</span>
          <a href={contact.phoneHref} className={`flex items-center gap-2.5 ${link}`}><Phone size={14} strokeWidth={1.7} className="flex-none text-[#8e692b]" aria-hidden /><span className="tabular-nums">{contact.phoneDisplay}</span></a>
          <a href={contact.emailHref} className={`flex min-w-0 items-center gap-2.5 ${link}`}><Mail size={14} strokeWidth={1.7} className="flex-none text-[#8e692b]" aria-hidden /><span className="[overflow-wrap:anywhere]">{contact.email}</span></a>
          <span className="flex items-center gap-2.5 text-[13px] text-[#746e65]"><MapPin size={14} strokeWidth={1.7} className="flex-none text-[#8e692b]" aria-hidden />{brand.location}</span>
        </div>

        <div className="flex flex-col gap-3">
          <span className={heading}>{footer.socialHeading}</span>
          <a href={contact.facebook} target="_blank" rel="noopener noreferrer" className="flex h-10 w-10 items-center justify-center rounded-full border border-[#dcd3c6] bg-white text-[#322d26] transition hover:-translate-y-0.5 hover:border-[#b8914e] hover:text-[#8a6527]" aria-label="Silva Homestay on Facebook">
            <Facebook size={17} strokeWidth={1.8} aria-hidden />
          </a>
        </div>
      </div>

      <div className="border-t border-[#e7e0d6]">
        <div className="mx-auto flex max-w-[1320px] flex-col gap-2 px-[var(--gutter)] py-5 text-[11.5px] text-[#837b70] min-[560px]:flex-row min-[560px]:items-center min-[560px]:justify-between">
          <span>{footer.copyright}</span>
          <span>{brand.location}</span>
        </div>
      </div>
    </footer>
  );
}
