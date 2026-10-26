"use client";

import { useState } from "react";
import { contact, enquiry, packageOptions } from "@/content/content";
import {
  calculateNights,
  createWhatsAppEnquiryMessage,
  createWhatsAppUrl,
  getLocalTodayIso,
  type BookingValidationErrors,
  validateBookingDetails,
} from "@/lib/booking-enquiry";
import { useBooking } from "./booking-context";

export function EnquiryForm() {
  const {
    pkg,
    setPkg,
    arrival,
    setArrival,
    departure,
    setDeparture,
    guests,
    setGuests,
  } = useBooking();
  const [name, setName] = useState("");
  const [contactInfo, setContactInfo] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<BookingValidationErrors>({});
  const f = enquiry.fields;
  const today = getLocalTodayIso();

  const nights = calculateNights(arrival, departure);
  const nightsLabel = (n: number) => `${n} ${n === 1 ? "night" : "nights"}`;
  const summary = nights > 0
    ? `${nightsLabel(nights)} · ${guests} ${guests === "1" ? "guest" : "guests"}`
    : enquiry.idleSummary;

  const bind = (set: (v: string) => void) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    set(e.target.value);
  };

  const clearError = (field: keyof BookingValidationErrors) => {
    setErrors((current) => ({ ...current, [field]: undefined }));
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const nextErrors = validateBookingDetails({ arrival, departure, guests }, today);
    setErrors(nextErrors);

    const firstError = (["arrival", "departure", "guests"] as const).find(
      (field) => nextErrors[field],
    );
    if (firstError) {
      document.getElementById(`sv-${firstError}`)?.focus();
      return;
    }

    const enquiryMessage = createWhatsAppEnquiryMessage({
      arrival,
      departure,
      guests,
      name,
      contactInfo,
      pkg,
      notes: message,
    });
    window.location.assign(createWhatsAppUrl(contact.whatsappNumber, enquiryMessage));
  };

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      className="flex min-w-0 flex-col gap-4 rounded-[20px] border border-white/70 bg-white/96 p-[clamp(22px,3vw,34px)] shadow-[0_28px_70px_-32px_rgba(0,0,0,.48)] backdrop-blur-sm"
    >
      <div className="mb-1">
        <span className="text-[11px] font-semibold uppercase tracking-[.14em] text-[#8b682c]">Availability enquiry</span>
        <h3 className="mt-1.5 mb-0 font-serif text-[30px] leading-none tracking-[-.02em] text-[#211d18]">Check your stay</h3>
      </div>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,160px),1fr))] gap-[14px]">
        <div>
          <label className="sv-form-label" htmlFor="sv-name">{f.name.label}</label>
          <input className="sv-form-control" id="sv-name" type="text" value={name} onChange={bind(setName)} placeholder={f.name.placeholder} autoComplete="name" />
        </div>
        <div>
          <label className="sv-form-label" htmlFor="sv-contact">{f.contact.label}</label>
          <input className="sv-form-control" id="sv-contact" type="text" value={contactInfo} onChange={bind(setContactInfo)} placeholder={f.contact.placeholder} />
        </div>
      </div>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,140px),1fr))] gap-[14px]">
        <div>
          <label className="sv-form-label" htmlFor="sv-arrival">{f.arrival.label}</label>
          <input
            className="sv-form-control"
            id="sv-arrival"
            type="date"
            min={today}
            value={arrival}
            onChange={(event) => {
              const nextArrival = event.target.value;
              setArrival(nextArrival);
              clearError("arrival");
              if (departure && departure <= nextArrival) {
                setDeparture("");
                clearError("departure");
              }
            }}
            aria-invalid={Boolean(errors.arrival)}
            aria-describedby={errors.arrival ? "sv-arrival-error" : undefined}
          />
          {errors.arrival && <p className="sv-form-error" id="sv-arrival-error">{errors.arrival}</p>}
        </div>
        <div>
          <label className="sv-form-label" htmlFor="sv-departure">{f.departure.label}</label>
          <input
            className="sv-form-control"
            id="sv-departure"
            type="date"
            value={departure}
            min={arrival || today}
            onChange={(event) => {
              setDeparture(event.target.value);
              clearError("departure");
            }}
            aria-invalid={Boolean(errors.departure)}
            aria-describedby={errors.departure ? "sv-departure-error" : undefined}
          />
          {errors.departure && <p className="sv-form-error" id="sv-departure-error">{errors.departure}</p>}
        </div>
        <div>
          <label className="sv-form-label" htmlFor="sv-guests">{f.guests.label}</label>
          <select
            className="sv-form-control"
            id="sv-guests"
            value={guests}
            onChange={(event) => {
              setGuests(event.target.value);
              clearError("guests");
            }}
            aria-invalid={Boolean(errors.guests)}
            aria-describedby={errors.guests ? "sv-guests-error" : undefined}
          >
            {enquiry.guestOptions.map((o) => (
              <option key={o.value} value={o.value}>{o.label}</option>
            ))}
          </select>
          {errors.guests && <p className="sv-form-error" id="sv-guests-error">{errors.guests}</p>}
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
    </form>
  );
}
