import { brand, contact, footer, footerNav } from "@/content/content";
import { Logo } from "./logo";

const heading = "mb-[2px] text-[11px] font-semibold uppercase tracking-[.12em] text-muted-foreground";
const item = "text-[13.5px]";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="container-x grid grid-cols-[repeat(auto-fit,minmax(min(100%,220px),1fr))] gap-[clamp(24px,3vw,48px)] py-[clamp(32px,4vw,52px)]">
        <div>
          <Logo size={40} footer />
          <p className="mt-4 mb-0 max-w-[30ch] text-[13px] leading-[1.6] text-muted-foreground">{brand.footerBlurb}</p>
        </div>
        <div className="flex flex-col gap-[9px]">
          <span className={heading}>{footer.contactHeading}</span>
          <a href={contact.phoneHref} className={`${item} tabular-nums`}>{contact.phoneDisplay}</a>
          <a href={contact.emailHref} className={`${item} [overflow-wrap:anywhere]`}>{contact.email}</a>
          <span className={`${item} text-muted-foreground`}>{brand.location}</span>
          <a href={contact.facebook} target="_blank" rel="noopener noreferrer" className={item}>Facebook</a>
        </div>
        <div className="flex flex-col gap-[9px]">
          <span className={heading}>{footer.ratesHeading}</span>
          {footer.rates.map((r) => (
            <span key={r} className={`${item} tabular-nums`}>{r}</span>
          ))}
        </div>
        <div className="flex flex-col gap-[9px]">
          <span className={heading}>{footer.exploreHeading}</span>
          {footerNav.map((n) => (
            <a key={n.href} href={n.href} className={`${item} !text-muted-foreground hover:!text-gold-ink`}>{n.label}</a>
          ))}
        </div>
      </div>
      <div className="border-t border-border">
        <div className="container-x flex flex-wrap justify-between gap-[10px] py-4">
          <span className="text-xs text-muted-foreground">{footer.copyright}</span>
          <span className="text-xs text-muted-foreground">{brand.location}</span>
        </div>
      </div>
    </footer>
  );
}
