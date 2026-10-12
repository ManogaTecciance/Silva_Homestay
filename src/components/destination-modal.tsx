"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { Bike, Check, MapPin, X } from "lucide-react";
import { placesSection, type Destination } from "@/content/content";
import { distanceText } from "@/lib/destinations";

const subhead = "m-0 mb-3 text-xs font-semibold uppercase tracking-[.14em] text-gold-ink";

export function DestinationModal({
  destination: d,
  fullScreen,
  onClose,
  onViewPackage,
  onExploreWithBike,
}: {
  destination: Destination;
  fullScreen: boolean;
  onClose: () => void;
  onViewPackage: () => void;
  onExploreWithBike: () => void;
}) {
  const closeRef = useRef<HTMLButtonElement>(null);
  const dist = distanceText(d);
  const t = placesSection.modal;

  // Lock page scroll, focus the close button, close on Escape.
  useEffect(() => {
    document.body.style.overflow = "hidden";
    requestAnimationFrame(() => closeRef.current?.focus({ preventScroll: true }));
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose]);

  const trapFocus = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key !== "Tab") return;
    const f = Array.from(
      e.currentTarget.querySelectorAll<HTMLElement>('button, a[href], [tabindex]:not([tabindex="-1"])'),
    ).filter((el) => !(el as HTMLButtonElement).disabled);
    if (!f.length) return;
    const first = f[0];
    const last = f[f.length - 1];
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  };

  return (
    <div
      onClick={(e) => e.target === e.currentTarget && onClose()}
      className="anim-fade-in fixed inset-0 z-[70] flex items-center justify-center bg-[rgba(20,16,10,.5)] backdrop-blur-[6px]"
      style={{ padding: fullScreen ? 0 : "clamp(16px,4vw,48px)" }}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="dest-title"
        onKeyDown={trapFocus}
        className="anim-modal relative w-full max-w-[1020px] overflow-y-auto overscroll-contain bg-background shadow-[var(--shadow-2xl)]"
        style={{
          height: fullScreen ? "100%" : "auto",
          maxHeight: fullScreen ? "100%" : "calc(100vh - 64px)",
          borderRadius: fullScreen ? 0 : "var(--radius-2xl)",
        }}
      >
        <div className="relative overflow-hidden bg-muted" style={{ aspectRatio: fullScreen ? "4/3" : "2/1" }}>
          <Image
            src={d.image}
            alt={d.imageAlt}
            fill
            sizes="(min-width: 1100px) 1020px, 100vw"
            className="object-cover"
            style={{ objectPosition: d.modalPos }}
          />
          <span className="absolute inset-0 bg-[linear-gradient(to_top,rgba(14,11,6,.5)_0%,rgba(14,11,6,0)_42%)]" />
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="absolute top-[14px] right-[14px] flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border-0 bg-white/95 text-[#14100C] shadow-[var(--shadow-sm)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
          >
            <X size={16} strokeWidth={2.2} aria-hidden />
          </button>
          <span className="absolute bottom-4 left-[clamp(20px,3.2vw,40px)] rounded-full bg-white/92 px-[10px] py-[5px] text-[11px] font-semibold text-[#1A1406]">
            {d.label}
          </span>
        </div>

        <div className="p-[clamp(22px,3.2vw,40px)]">
          <div className="flex flex-col gap-2">
            <span className="flex items-center gap-[6px] text-[13px] text-muted-foreground">
              <MapPin size={13} strokeWidth={2} className="flex-none" aria-hidden />
              {d.category}
            </span>
            <h2 id="dest-title" className="m-0 text-[clamp(28px,3.6vw,40px)] leading-[1.08] font-semibold tracking-[-0.028em]">
              {d.name}
            </h2>
            {dist && (
              <span className="flex items-center gap-[6px] text-[13px] text-muted-foreground">
                <Bike size={13} strokeWidth={2} className="flex-none" aria-hidden />
                {dist}
              </span>
            )}
            <p className="mt-[6px] mb-0 max-w-[62ch] text-[clamp(15.5px,1.4vw,17px)] leading-[1.65] text-pretty text-foreground">
              {d.introduction}
            </p>
          </div>

          <div className="mt-[clamp(22px,3vw,32px)] grid grid-cols-[repeat(auto-fit,minmax(min(100%,320px),1fr))] gap-[clamp(24px,4vw,48px)] border-t border-border pt-[clamp(22px,3vw,32px)]">
            <div>
              <h3 className={subhead}>{t.history}</h3>
              <p className="m-0 text-[15px] leading-[1.75] text-pretty text-muted-foreground">{d.history}</p>
              <h3 className={`${subhead} mt-7`}>{t.significance}</h3>
              <ul className="m-0 flex list-none flex-col gap-[10px] p-0">
                {d.significance.map((s) => (
                  <li key={s} className="flex gap-[10px] text-[14.5px] leading-[1.55]">
                    <Check size={16} strokeWidth={2.2} className="mt-[3px] flex-none text-gold-ink" aria-hidden />
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col gap-[14px]">
              <div className="flex flex-col gap-2 rounded-[var(--radius-lg)] border border-border bg-surface px-5 py-[18px]">
                <span className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[.14em] text-gold-ink">
                  <Bike size={16} strokeWidth={2} className="flex-none" aria-hidden />
                  {t.from}
                </span>
                {dist ? (
                  <span className="text-xl font-bold tracking-[-0.02em]">{dist}</span>
                ) : (
                  <span className="text-[13.5px] leading-[1.55] text-muted-foreground">{t.noDistance}</span>
                )}
                <span className="text-[14.5px] leading-normal font-semibold">{t.stop}</span>
              </div>
              <div className="rounded-[var(--radius-lg)] border border-border bg-card px-5 py-[18px]">
                <h3 className={subhead}>{t.visiting}</h3>
                <ul className="m-0 flex list-none flex-col gap-[9px] p-0">
                  {d.visitingNotes.map((v) => (
                    <li key={v} className="flex gap-[10px] text-[13.5px] leading-[1.55] text-muted-foreground">
                      <span className="mt-2 h-[5px] w-[5px] flex-none rounded-full bg-gold" />
                      <span>{v}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-[clamp(22px,3vw,32px)] flex flex-wrap items-center justify-between gap-[14px] border-t border-border pt-5">
            <span className="max-w-[44ch] text-[13.5px] leading-[1.55] text-muted-foreground">{t.footer}</span>
            <div className="flex flex-wrap gap-[10px]">
              <button type="button" className="btn btn-outline" onClick={onViewPackage}>
                {t.viewPackage}
              </button>
              <button type="button" className="btn btn-default" onClick={onExploreWithBike} style={{ gap: 8 }}>
                <Bike size={16} strokeWidth={2} className="flex-none" aria-hidden />
                {t.exploreWithBike}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
