import { Mail, Phone } from "lucide-react";
import { contact, enquiry } from "@/content/content";
import { EnquiryForm } from "./enquiry-form";

const contactCard =
  "flex items-center gap-[14px] rounded-[var(--radius-lg)] border border-border bg-card px-[18px] py-4 shadow-[var(--shadow-xs)] transition-colors duration-150 hover:border-gold";

export function Enquiry() {
  return (
    <section id="enquire" className="mt-[var(--section-gap)] border-t border-border bg-surface">
      <div className="container-x grid grid-cols-[repeat(auto-fit,minmax(min(100%,320px),1fr))] items-start gap-[clamp(28px,4vw,56px)] py-[clamp(44px,6vw,88px)]">
        <div>
          <span className="eyebrow">{enquiry.eyebrow}</span>
          <h2 className="h2-lg max-w-[16ch]">{enquiry.title}</h2>
          <p className="body-copy mt-4 mb-0 max-w-[44ch]">{enquiry.copy}</p>
          <div className="mt-[26px] flex max-w-[380px] flex-col gap-[10px]">
            <a href={contact.phoneHref} className={contactCard}>
              <Phone size={18} strokeWidth={2} className="flex-none text-gold-ink" aria-hidden />
              <span className="flex min-w-0 flex-col gap-[2px]">
                <span className="meta-label">{enquiry.callLabel}</span>
                <span className="text-[15px] font-semibold tabular-nums">{contact.phoneDisplay}</span>
              </span>
            </a>
            <a href={contact.emailHref} className={contactCard}>
              <Mail size={18} strokeWidth={2} className="flex-none text-gold-ink" aria-hidden />
              <span className="flex min-w-0 flex-col gap-[2px]">
                <span className="meta-label">{enquiry.emailLabel}</span>
                <span className="text-[13.5px] font-semibold [overflow-wrap:anywhere]">{contact.email}</span>
              </span>
            </a>
          </div>
        </div>
        <EnquiryForm />
      </div>
    </section>
  );
}
