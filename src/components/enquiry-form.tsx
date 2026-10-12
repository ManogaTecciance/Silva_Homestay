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
      className="flex min-w-0 flex-col gap-4 rounded-[var(--radius-xl)] border border-border bg-card p-[clamp(20px,2.5vw,28px)] shadow-[var(--shadow-sm)]"
    >
      <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,160px),1fr))] gap-[14px]">
        <div>
          <label className="label" htmlFor="sv-name">{f.name.label}</label>
          <input className="input" id="sv-name" type="text" value={name} onChange={bind(setName)} placeholder={f.name.placeholder} required autoComplete="name" />
        </div>
        <div>
          <label className="label" htmlFor="sv-contact">{f.contact.label}</label>
          <input className="input" id="sv-contact" type="text" value={contactInfo} onChange={bind(setContactInfo)} placeholder={f.contact.placeholder} required />
        </div>
      </div>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,140px),1fr))] gap-[14px]">
        <div>
          <label className="label" htmlFor="sv-arrival">{f.arrival.label}</label>
          <input className="input" id="sv-arrival" type="date" value={arrival} onChange={bind(setArrival)} />
        </div>
        <div>
          <label className="label" htmlFor="sv-departure">{f.departure.label}</label>
          <input className="input" id="sv-departure" type="date" value={departure} min={arrival || undefined} onChange={bind(setDeparture)} />
        </div>
        <div>
          <label className="label" htmlFor="sv-guests">{f.guests.label}</label>
          <select className="input" id="sv-guests" value={guests} onChange={bind(setGuests)}>
            {enquiry.guestOptions.map((o) => (
              <option key={o.value} value={o.value}>{o.label}</option>
            ))}
          </select>
        </div>
      </div>
      <div>
        <label className="label" htmlFor="sv-pkg">{f.pkg.label}</label>
        <select className="input" id="sv-pkg" value={pkg} onChange={bind(setPkg)}>
          {packageOptions.map((o) => (
            <option key={o} value={o}>{o}</option>
          ))}
        </select>
      </div>
      <div>
        <label className="label" htmlFor="sv-msg">{f.message.label}</label>
        <textarea className="input" id="sv-msg" value={message} onChange={bind(setMessage)} placeholder={f.message.placeholder} />
      </div>
      <div className="flex flex-wrap items-center gap-3">
        <button className="btn btn-default btn-lg" type="submit">{enquiry.submit}</button>
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
