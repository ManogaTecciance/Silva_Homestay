"use client";

import { createContext, useCallback, useContext, useMemo, useState } from "react";
import { PKG_ROOM } from "@/content/content";
import { scrollToId } from "@/lib/scroll";

type Booking = {
  pkg: string;
  setPkg: (pkg: string) => void;
  arrival: string;
  setArrival: (arrival: string) => void;
  departure: string;
  setDeparture: (departure: string) => void;
  guests: string;
  setGuests: (guests: string) => void;
  /** Pre-select a room/package in the enquiry form and scroll to it. */
  choosePackage: (pkg: string) => void;
};

const BookingContext = createContext<Booking | null>(null);

export function BookingProvider({ children }: { children: React.ReactNode }) {
  const [pkg, setPkg] = useState<string>(PKG_ROOM);
  const [arrival, setArrival] = useState("");
  const [departure, setDeparture] = useState("");
  const [guests, setGuests] = useState("2");
  const choosePackage = useCallback((next: string) => {
    setPkg(next);
    scrollToId("enquire");
  }, []);
  const value = useMemo(
    () => ({
      pkg,
      setPkg,
      arrival,
      setArrival,
      departure,
      setDeparture,
      guests,
      setGuests,
      choosePackage,
    }),
    [pkg, arrival, departure, guests, choosePackage],
  );
  return <BookingContext.Provider value={value}>{children}</BookingContext.Provider>;
}

export function useBooking() {
  const ctx = useContext(BookingContext);
  if (!ctx) throw new Error("useBooking must be used inside <BookingProvider>");
  return ctx;
}

export function ChoosePackageButton({
  pkg,
  className,
  children,
}: {
  pkg: string;
  className?: string;
  children: React.ReactNode;
}) {
  const { choosePackage } = useBooking();
  return (
    <button type="button" className={className} onClick={() => choosePackage(pkg)}>
      {children}
    </button>
  );
}
