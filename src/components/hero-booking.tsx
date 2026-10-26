"use client";

import { ArrowRight, CalendarDays, ChevronDown, Users } from "lucide-react";
import { enquiry } from "@/content/content";
import { scrollToId } from "@/lib/scroll";
import { useBooking } from "./booking-context";

export function HeroBooking() {
  const {
    arrival,
    setArrival,
    departure,
    setDeparture,
    guests,
    setGuests,
  } = useBooking();
  const openEnquiry = () => scrollToId("enquire");

  return (
    <>
      <form
        className="sv-booking-bar"
        aria-label="Check room availability"
        onSubmit={(event) => {
          event.preventDefault();
          openEnquiry();
        }}
      >
        <label className="sv-booking-field" htmlFor="sv-hero-arrival">
          <CalendarDays size={22} strokeWidth={1.65} aria-hidden />
          <span className="min-w-0">
            <span className="sv-booking-label">Check-in</span>
            <input
              id="sv-hero-arrival"
              type="date"
              value={arrival}
              onChange={(event) => {
                const nextArrival = event.target.value;
                setArrival(nextArrival);
                if (departure && departure <= nextArrival) setDeparture("");
              }}
            />
          </span>
        </label>

        <label className="sv-booking-field" htmlFor="sv-hero-departure">
          <CalendarDays size={22} strokeWidth={1.65} aria-hidden />
          <span className="min-w-0">
            <span className="sv-booking-label">Check-out</span>
            <input
              id="sv-hero-departure"
              type="date"
              min={arrival || undefined}
              value={departure}
              onChange={(event) => setDeparture(event.target.value)}
            />
          </span>
        </label>

        <label className="sv-booking-field" htmlFor="sv-hero-guests">
          <Users size={23} strokeWidth={1.65} aria-hidden />
          <span className="min-w-0 flex-1">
            <span className="sv-booking-label">Guests</span>
            <span className="relative block">
              <select
                id="sv-hero-guests"
                value={guests}
                onChange={(event) => setGuests(event.target.value)}
              >
                {enquiry.guestOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
              <ChevronDown className="sv-booking-chevron" size={16} strokeWidth={1.8} aria-hidden />
            </span>
          </span>
        </label>

        <button type="submit" className="sv-booking-submit">
          Check availability
          <ArrowRight size={18} strokeWidth={1.7} aria-hidden />
        </button>
      </form>

      <button type="button" className="sv-mobile-booking" onClick={openEnquiry}>
        <span>
          <small>Ready to plan your stay?</small>
          Check availability
        </span>
        <ArrowRight size={19} strokeWidth={1.7} aria-hidden />
      </button>
    </>
  );
}
