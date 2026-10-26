import Image from "next/image";
import { Mail, Phone } from "lucide-react";
import { contact, enquiry } from "@/content/content";
import { EnquiryForm } from "./enquiry-form";

export function Enquiry() {
  return (
    <section id="enquire" className="relative isolate overflow-hidden bg-[#302317] py-[clamp(64px,7vw,100px)]">
      <Image
        src="/images/destinations/ruwanwelisaya.jpg"
        alt=""
        fill
        sizes="100vw"
        className="-z-20 object-cover"
        style={{ objectPosition: "50% 62%" }}
      />
      <span className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(41,26,14,.88)_0%,rgba(62,37,17,.73)_42%,rgba(27,22,18,.48)_100%)]" />

      <div className="mx-auto grid max-w-[1320px] items-center gap-[clamp(36px,6vw,88px)] px-[var(--gutter)] min-[940px]:grid-cols-[.78fr_1.22fr]">
        <div className="max-w-[500px] text-white">
          <span className="sv-kicker !text-[#ead3a3]"><span aria-hidden className="!bg-[#d1a456]" />{enquiry.eyebrow}</span>
          <h2 className="mt-4 mb-0 font-serif text-[clamp(40px,5.2vw,64px)] leading-[.98] tracking-[-.035em]">Plan your stay in<br /><em className="font-normal text-[#f1d4a0]">Anuradhapura.</em></h2>
          <p className="mt-5 mb-0 max-w-[46ch] text-[14.5px] leading-[1.75] text-white/78">{enquiry.copy}</p>
          <div className="mt-7 flex flex-col gap-3 text-[13px] min-[520px]:flex-row min-[940px]:flex-col min-[1180px]:flex-row">
            <a href={contact.phoneHref} className="flex min-h-11 items-center gap-2.5 rounded-[10px] border border-white/24 bg-white/10 px-4 text-white backdrop-blur transition hover:bg-white/16 hover:text-white">
              <Phone size={16} strokeWidth={1.7} aria-hidden />
              <span className="tabular-nums">{contact.phoneDisplay}</span>
            </a>
            <a href={contact.emailHref} className="flex min-h-11 min-w-0 items-center gap-2.5 rounded-[10px] border border-white/24 bg-white/10 px-4 text-white backdrop-blur transition hover:bg-white/16 hover:text-white">
              <Mail size={16} strokeWidth={1.7} className="flex-none" aria-hidden />
              <span className="truncate">{contact.email}</span>
            </a>
          </div>
        </div>
        <EnquiryForm />
      </div>
    </section>
  );
}
