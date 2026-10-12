"use client";

import { useEffect, useState } from "react";
import { Phone } from "lucide-react";
import { contact, headerCta, nav } from "@/content/content";
import { Logo } from "./logo";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const close = () => setMenuOpen(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setMenuOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background">
      <div className="mx-auto flex h-[60px] max-w-[1400px] items-center gap-[clamp(12px,2vw,28px)] px-[var(--gutter)]">
        <a href="#top" className="flex-none" aria-label="Silva Homestay & Bike Rental — home">
          <Logo />
        </a>

        {/* ≥ 860px: inline nav */}
        <nav className="hidden min-w-0 flex-1 items-center gap-[clamp(14px,2vw,26px)] min-[860px]:flex">
          {nav.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="whitespace-nowrap text-sm font-medium text-muted-foreground transition-colors duration-150 hover:text-foreground"
            >
              {n.label}
            </a>
          ))}
        </nav>
        <div className="hidden flex-none items-center gap-2 min-[860px]:flex">
          <a className="btn btn-outline btn-sm" href={contact.phoneHref} style={{ gap: 7 }}>
            <Phone size={14} strokeWidth={2} aria-hidden />
            <span className="tabular-nums">{contact.phoneDisplay}</span>
          </a>
          <a className="btn btn-default btn-sm" href="#enquire">
            {headerCta}
          </a>
        </div>

        {/* < 860px: icon buttons + disclosure menu */}
        <div className="flex-1 min-[860px]:hidden" />
        <div className="flex flex-none items-center gap-2 min-[860px]:hidden">
          <a className="btn btn-outline btn-icon" href={contact.phoneHref} aria-label={`Call ${contact.phoneDisplay}`}>
            <Phone size={16} strokeWidth={2} aria-hidden />
          </a>
          <button
            type="button"
            className="btn btn-outline btn-icon"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Menu"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <path d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav
          id="mobile-menu"
          className="anim-menu flex flex-col border-t border-border bg-background px-[var(--gutter)] pt-2 pb-4 min-[860px]:hidden"
        >
          {nav.map((n) => (
            <a key={n.href} href={n.href} onClick={close} className="border-b border-border py-3 text-[15px] font-medium">
              {n.label}
            </a>
          ))}
          <a className="btn btn-default mt-[14px] h-11" href="#enquire" onClick={close}>
            {headerCta}
          </a>
        </nav>
      )}
    </header>
  );
}
