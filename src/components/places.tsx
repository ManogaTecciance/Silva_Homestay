"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ArrowRight, Bike, ChevronLeft, ChevronRight, MapPin } from "lucide-react";
import { INITIAL_DESTINATION, PKG_SACRED_CITY, destinations, placesSection } from "@/content/content";
import { distanceText } from "@/lib/destinations";
import { scrollToId } from "@/lib/scroll";
import { usePrefersReducedMotion, useViewportWidth } from "@/lib/hooks";
import { useBooking } from "./booking-context";
import { DestinationModal } from "./destination-modal";

const N = destinations.length;

/** Cover-flow geometry per breakpoint; index 0 = active, 1 = adjacent, 2 = outer. */
function layoutFor(w: number, reduced: boolean) {
  const bp = w >= 1100 ? "d" : w >= 700 ? "t" : "m";
  const cardW = Math.round(bp === "d" ? 360 : bp === "t" ? 320 : Math.min(320, w - 96));
  const cardH = Math.round((cardW * 4) / 3);
  const X = bp === "d" ? [0, 300, 545] : bp === "t" ? [0, 262, 440] : [0, Math.round(cardW * 0.95 + 12), Math.round(cardW * 1.9 + 24)];
  const S = bp === "d" ? [1, 0.9, 0.8] : bp === "t" ? [1, 0.88, 0.78] : [1, 0.9, 0.82];
  const R = reduced ? [0, 0, 0] : bp === "d" ? [0, 14, 24] : bp === "t" ? [0, 9, 14] : [0, 3, 5];
  const O = bp === "d" ? [1, 0.94, 0.72] : bp === "t" ? [1, 0.88, 0] : [1, 0.72, 0];
  const B = [1, 0.78, 0.6];
  const nameSize = bp === "m" ? 22 : bp === "t" ? 24 : 26;
  return { cardW, cardH, X, S, R, O, B, nameSize };
}

export function Places() {
  const w = useViewportWidth();
  const reduced = usePrefersReducedMotion();
  const { setPkg } = useBooking();
  const [active, setActive] = useState(INITIAL_DESTINATION);
  const [modal, setModal] = useState<number | null>(null);

  const sectionRef = useRef<HTMLElement>(null);
  const [seen, setSeen] = useState(false);
  const shown = seen || reduced;

  // Reveal the section once it scrolls into view.
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((x) => x.isIntersecting)) {
          setSeen(true);
          io.disconnect();
        }
      },
      { threshold: 0.12 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const drag = useRef<{ x: number; moved: boolean } | null>(null);
  const suppressClick = useRef(false);
  const returnIdx = useRef<number | null>(null);

  const focusCard = (i: number) =>
    requestAnimationFrame(() =>
      document.querySelector<HTMLElement>(`[data-card="${i}"]`)?.focus({ preventScroll: true }),
    );

  const step = (dir: number) => {
    const next = (active + dir + N) % N;
    setActive(next);
    // Keep keyboard focus on the centre card when stepping from a card.
    const ae = document.activeElement as HTMLElement | null;
    if (ae?.dataset?.card != null) focusCard(next);
  };

  const openModal = (i: number) => {
    returnIdx.current = i;
    setModal(i);
  };
  const closeModal = useCallback(() => {
    setModal(null);
    if (returnIdx.current != null) focusCard(returnIdx.current);
  }, []);

  const { cardW, cardH, X, S, R, O, B, nameSize } = layoutFor(w, reduced);

  const onStageKey = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      step(-1);
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      step(1);
    }
  };

  const onCard = (i: number) => {
    if (suppressClick.current) {
      suppressClick.current = false;
      return;
    }
    if (i === active) openModal(i);
    else setActive(i);
  };


  return (
    <section id="places" ref={sectionRef} aria-labelledby="places-title" className="overflow-hidden pt-[clamp(56px,7vw,104px)]">
      <div
        className="mx-auto max-w-[760px] px-[var(--gutter)] text-center"
        style={{
          opacity: shown ? 1 : 0,
          transform: shown ? "none" : "translateY(20px)",
          transition: "opacity .8s cubic-bezier(.22,1,.36,1), transform .8s cubic-bezier(.22,1,.36,1)",
        }}
      >
        <span className="mb-[14px] inline-flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[.14em] text-gold-ink">
          <span className="block h-px w-7 bg-gold" />
          {placesSection.eyebrow}
          <span className="block h-px w-7 bg-gold" />
        </span>
        <h2 id="places-title" className="h2-lg">
          {placesSection.title}
        </h2>
        <p className="mx-auto mt-[14px] mb-0 max-w-[52ch] text-[15px] leading-[1.65] text-pretty text-muted-foreground">
          {placesSection.copy}
        </p>
      </div>

      <div
        style={{
          opacity: shown ? 1 : 0,
          transform: shown ? "none" : "scale(.98)",
          transition: "opacity .9s cubic-bezier(.22,1,.36,1) .1s, transform .9s cubic-bezier(.22,1,.36,1) .1s",
        }}
      >
        <div
          role="region"
          aria-roledescription="carousel"
          aria-label="Places to explore by bike"
          onKeyDown={onStageKey}
          onPointerDown={(e) => {
            drag.current = { x: e.clientX, moved: false };
            suppressClick.current = false;
          }}
          onPointerMove={(e) => {
            if (drag.current && Math.abs(e.clientX - drag.current.x) > 8) drag.current.moved = true;
          }}
          onPointerUp={(e) => {
            const d = drag.current;
            drag.current = null;
            if (!d || !d.moved) return;
            suppressClick.current = true;
            const dx = e.clientX - d.x;
            if (Math.abs(dx) > 40) step(dx < 0 ? 1 : -1);
          }}
          onPointerCancel={() => {
            drag.current = null;
          }}
          className="relative mt-[clamp(32px,4vw,52px)] touch-pan-y select-none"
          style={{ height: cardH + 24, perspective: 1800, perspectiveOrigin: "50% 45%" }}
        >
          {destinations.map((d, i) => {
            let o = (((i - active) % N) + N) % N;
            if (o > 2) o -= N;
            const k = Math.abs(o);
            const sg = Math.sign(o);
            const isActive = k === 0;
            const dist = distanceText(d);
            return (
              <button
                key={d.id}
                type="button"
                data-card={i}
                onClick={() => onCard(i)}
                aria-label={isActive ? `Explore ${d.name} — open details` : `Show ${d.name}`}
                aria-hidden={!isActive}
                tabIndex={isActive ? 0 : -1}
                className="gold-focus absolute top-[10px] left-1/2 cursor-pointer overflow-hidden rounded-[var(--radius-2xl)] border-0 bg-muted p-0 text-left text-white [-webkit-tap-highlight-color:transparent]"
                style={{
                  width: cardW,
                  height: cardH,
                  marginLeft: -cardW / 2,
                  transform: `translateX(${sg * X[k]}px) translateZ(${-k * 40}px) rotateY(${sg * R[k]}deg) scale(${S[k]})`,
                  opacity: O[k],
                  zIndex: 10 - k,
                  boxShadow: isActive ? "0 32px 60px -24px rgba(20,16,10,.5)" : "0 14px 32px -18px rgba(20,16,10,.35)",
                  pointerEvents: O[k] === 0 ? "none" : "auto",
                  transition:
                    "transform .65s cubic-bezier(.22,1,.36,1), opacity .65s cubic-bezier(.22,1,.36,1), box-shadow .65s ease-out",
                }}
              >
                <Image
                  src={d.image}
                  alt={d.imageAlt}
                  fill
                  draggable={false}
                  loading={k <= 1 ? "eager" : "lazy"}
                  sizes={`${cardW}px`}
                  className="object-cover"
                  style={{ objectPosition: d.cardPos, filter: `brightness(${B[k]})`, transition: "filter .65s ease-out" }}
                />
                <span className="absolute inset-0 bg-[linear-gradient(to_top,rgba(14,11,6,.86)_0%,rgba(14,11,6,.52)_30%,rgba(14,11,6,0)_58%)]" />
                <span className="absolute top-[14px] right-[14px] left-[14px] flex items-center justify-between gap-2">
                  <span className="inline-flex items-center rounded-full bg-white/92 px-[10px] py-[5px] text-[11px] font-semibold tracking-[.02em] text-[#1A1406]">
                    {d.label}
                  </span>
                  <span
                    className="rounded-full bg-[rgba(14,11,6,.42)] px-[9px] py-[5px] text-xs font-medium text-white tabular-nums transition-opacity duration-[400ms] ease-out"
                    style={{ opacity: isActive ? 1 : 0 }}
                  >
                    {i + 1} / {N}
                  </span>
                </span>
                <span className="absolute right-0 bottom-0 left-0 flex flex-col gap-[6px] p-[clamp(16px,2vw,22px)]">
                  <span className="leading-[1.1] font-semibold tracking-[-0.02em] text-balance" style={{ fontSize: nameSize }}>
                    {d.name}
                  </span>
                  <span className="flex items-center gap-[6px] text-[12.5px] text-white/88">
                    <MapPin size={13} strokeWidth={2} className="flex-none" aria-hidden />
                    {d.category}
                  </span>
                  {dist && (
                    <span className="flex items-center gap-[6px] text-[12.5px] text-white/88">
                      <Bike size={13} strokeWidth={2} className="flex-none" aria-hidden />
                      {dist}
                    </span>
                  )}
                  <span
                    className="mt-2 inline-flex h-9 items-center gap-2 self-start rounded-full bg-white px-[14px] text-[13px] font-semibold text-[#14100C]"
                    style={{
                      opacity: isActive ? 1 : 0,
                      transform: isActive ? "none" : "translateY(6px)",
                      transition: "opacity .45s ease-out, transform .45s cubic-bezier(.22,1,.36,1)",
                    }}
                  >
                    {placesSection.cardCta}
                    <ArrowRight size={15} strokeWidth={2} aria-hidden />
                  </span>
                </span>
              </button>
            );
          })}
        </div>

        <div className="mt-[clamp(18px,2.5vw,28px)] flex items-center justify-center gap-[14px] px-4">
          <button type="button" className="btn btn-outline btn-icon rounded-full" onClick={() => step(-1)} aria-label="Previous destination">
            <ChevronLeft size={16} strokeWidth={2} aria-hidden />
          </button>
          <div className="flex items-center gap-[2px]">
            {destinations.map((d, i) => (
              <button
                key={d.id}
                type="button"
                onClick={() => setActive(i)}
                aria-label={`Show ${d.name} (${i + 1} of ${N})`}
                aria-current={i === active}
                className="flex h-7 cursor-pointer items-center rounded-full border-0 bg-transparent px-1 focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-gold"
              >
                <span
                  className="block h-2 rounded-full"
                  style={{
                    width: i === active ? 24 : 8,
                    background: i === active ? "var(--silva-gold)" : "var(--border)",
                    transition: "width .45s cubic-bezier(.22,1,.36,1), background .45s ease-out",
                  }}
                />
              </button>
            ))}
          </div>
          <button type="button" className="btn btn-outline btn-icon rounded-full" onClick={() => step(1)} aria-label="Next destination">
            <ChevronRight size={16} strokeWidth={2} aria-hidden />
          </button>
        </div>
        <div aria-live="polite" className="sr-only">
          {destinations[active].name}, {active + 1} of {N}
        </div>
      </div>

      <div className="container-x pt-[clamp(28px,4vw,44px)]">
        <div className="mx-auto flex max-w-[920px] flex-wrap items-center gap-x-6 gap-y-4 rounded-[var(--radius-xl)] border border-border bg-card px-5 py-[18px] shadow-[var(--shadow-xs)]">
          <span className="flex h-11 w-11 flex-none items-center justify-center rounded-full bg-gold-wash text-gold-ink">
            <Bike size={20} strokeWidth={2} aria-hidden />
          </span>
          <span className="flex min-w-[220px] flex-1 flex-col gap-[3px]">
            <span className="text-[15.5px] font-semibold tracking-[-0.01em]">{placesSection.strapTitle}</span>
            <span className="text-[13.5px] leading-normal text-muted-foreground">{placesSection.strapCopy}</span>
          </span>
          <a className="btn btn-default" href="#packages" style={{ gap: 8 }}>
            {placesSection.strapCta}
            <ArrowRight size={15} strokeWidth={2} aria-hidden />
          </a>
        </div>
      </div>

      {modal != null && (
        <DestinationModal
          destination={destinations[modal]}
          fullScreen={w < 700}
          onClose={closeModal}
          onViewPackage={() => {
            closeModal();
            setTimeout(() => scrollToId("packages"), 30);
          }}
          onExploreWithBike={() => {
            closeModal();
            setPkg(PKG_SACRED_CITY);
            setTimeout(() => scrollToId("enquire"), 30);
          }}
        />
      )}
    </section>
  );
}
