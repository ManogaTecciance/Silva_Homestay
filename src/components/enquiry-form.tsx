"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import { brand, contact, enquiry, packageOptions } from "@/content/content";
import { useBooking } from "./booking-context";

function nightsBetween(arrival: string, departure: string) {
  if (!arrival || !departure) return 0;
  const d = (new Date(departure).getTime() - new Date(arrival).getTime()) / 86400000;
  return d > 0 ? Math.round(d) : 0;
}

export function EnquiryForm() {
  const { pkg, setPkg } = useBooking();
  const [name, setName] = useState("");
  const [contactInfo, setContactInfo] = useState("");
  const [arrival, setArrival] = useState("");
  const [departure, setDeparture] = useState("");
  const [guests, setGuests] = useState("2");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);
  const f = enquiry.fields;

  const nights = nightsBetween(arrival, departure);
  const nightsLabel = (n: number) => `${n} ${n === 1 ? "night" : "nights"}`;
  const summary = sent
    ? ""
    : nights > 0
      ? `${nightsLabel(nights)} · ${guests} ${guests === "1" ? "guest" : "guests"}`
      : enquiry.idleSummary;

  // Any edit clears the "sent" confirmation.
  const bind = (set: (v: string) => void) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    set(e.target.value);
    setSent(false);
  };

  const mailto = () => {
    const body = [
      `Hello ${brand.name},`,
      "",
      `I would like to book: ${pkg}`,
      `Arrival: ${arrival || "—"}`,
      `Departure: ${departure || "—"}${nights ? ` (${nightsLabel(nights)})` : ""}`,
      `Guests: ${guests}`,
      "",
      message ? `${message}\n` : "",
      `Name: ${name}`,
      `Contact: ${contactInfo}`,
    ].join("\n");
    const subject = `Booking request — ${pkg.split(" — ")[0]}`;
    return `${contact.emailHref}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    window.location.href = mailto();
  };

  const firstName = (name || "friend").split(" ")[0];

  return (
    <form
      onSubmit={onSubmit}
      className="flex min-w-0 flex-col gap-4 rounded-[20px] border border-white/70 bg-white/96 p-[clamp(22px,3vw,34px)] shadow-[0_28px_70px_-32px_rgba(0,0,0,.48)] backdrop-blur-sm"
    >
      <div className="mb-1">
        <span className="text-[11px] font-semibold uppercase tracking-[.14em] text-[#8b682c]">Availability enquiry</span>
        <h3 className="mt-1.5 mb-0 font-serif text-[30px] leading-none tracking-[-.02em] text-[#211d18]">Check your stay</h3>
      </div>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,160px),1fr))] gap-[14px]">
        <div>
          <label className="sv-form-label" htmlFor="sv-name">{f.name.label}</label>
          <input className="sv-form-control" id="sv-name" type="text" value={name} onChange={bind(setName)} placeholder={f.name.placeholder} required autoComplete="name" />
        </div>
        <div>
          <label className="sv-form-label" htmlFor="sv-contact">{f.contact.label}</label>
          <input className="sv-form-control" id="sv-contact" type="text" value={contactInfo} onChange={bind(setContactInfo)} placeholder={f.contact.placeholder} required />
        </div>
      </div>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,140px),1fr))] gap-[14px]">
        <div>
          <label className="sv-form-label" htmlFor="sv-arrival">{f.arrival.label}</label>
          <input className="sv-form-control" id="sv-arrival" type="date" value={arrival} onChange={bind(setArrival)} />
        </div>
        <div>
          <label className="sv-form-label" htmlFor="sv-departure">{f.departure.label}</label>
          <input className="sv-form-control" id="sv-departure" type="date" value={departure} min={arrival || undefined} onChange={bind(setDeparture)} />
        </div>
        <div>
          <label className="sv-form-label" htmlFor="sv-guests">{f.guests.label}</label>
          <select className="sv-form-control" id="sv-guests" value={guests} onChange={bind(setGuests)}>
            {enquiry.guestOptions.map((o) => (
              <option key={o.value} value={o.value}>{o.label}</option>
            ))}
          </select>
        </div>
      </div>
      <div>
        <label className="sv-form-label" htmlFor="sv-pkg">{f.pkg.label}</label>
        <select className="sv-form-control" id="sv-pkg" value={pkg} onChange={bind(setPkg)}>
          {packageOptions.map((o) => (
            <option key={o} value={o}>{o}</option>
          ))}
        </select>
      </div>
      <div>
        <label className="sv-form-label" htmlFor="sv-msg">{f.message.label}</label>
        <textarea className="sv-form-control min-h-[82px] resize-y py-3" id="sv-msg" value={message} onChange={bind(setMessage)} placeholder={f.message.placeholder} />
      </div>
      <div className="flex flex-col items-start gap-3 min-[520px]:flex-row min-[520px]:items-center">
        <button className="sv-btn sv-btn--dark min-w-[190px]" type="submit">{enquiry.submit}</button>
        <span className="text-[12.5px] leading-normal text-muted-foreground">{summary}</span>
      </div>
      {sent && (
        <div role="status" className="flex gap-[10px] rounded-[var(--radius-lg)] border border-border bg-gold-wash px-4 py-[14px]">
          <Check size={16} strokeWidth={2} className="mt-[2px] flex-none text-gold-ink" aria-hidden />
          <span className="text-[13px] leading-[1.55] text-foreground">{enquiry.sentMessage(firstName)}</span>
        </div>
      )}
    </form>
  );
}
