"use client";

import { useEffect, useState } from "react";
import { ArrowRight, Menu, Phone, X } from "lucide-react";
import { contact, headerCta, nav } from "@/content/content";
import { Logo } from "./logo";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const close = () => setMenuOpen(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setMenuOpen(false);
    const onScroll = () => setScrolled(window.scrollY > 18);
    onScroll();
    window.addEventListener("keydown", onKey);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <header className={`sv-header ${scrolled || menuOpen ? "sv-header--solid" : ""}`}>
      <div className="mx-auto flex h-[68px] max-w-[1320px] items-center gap-5 px-[var(--gutter)] min-[900px]:h-[78px]">
        <a href="#top" className="flex-none rounded-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#a67c32]" aria-label="Silva Homestay & Bike Rental — home">
          <Logo size={42} />
        </a>

        <nav className="hidden min-w-0 flex-1 items-center justify-center gap-[clamp(22px,2.6vw,38px)] min-[900px]:flex" aria-label="Main navigation">
          {nav.map((n) => (
            <a key={n.href} href={n.href} className="sv-nav-link">
              {n.label}
            </a>
          ))}
        </nav>

        <div className="hidden flex-none items-center gap-3 min-[900px]:flex">
          <a className="sv-btn sv-btn--light sv-btn--compact" href={contact.phoneHref}>
            <Phone size={15} strokeWidth={1.8} aria-hidden />
            <span className="tabular-nums">{contact.phoneDisplay}</span>
          </a>
          <a className="sv-btn sv-btn--dark sv-btn--compact" href="#enquire">
            {headerCta}
            <ArrowRight size={14} strokeWidth={1.8} aria-hidden />
          </a>
        </div>

        <div className="ml-auto flex items-center gap-2 min-[900px]:hidden">
          <a className="sv-icon-button" href={contact.phoneHref} aria-label={`Call ${contact.phoneDisplay}`}>
            <Phone size={18} strokeWidth={1.8} aria-hidden />
          </a>
          <button
            type="button"
            className="sv-icon-button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            {menuOpen ? <X size={20} strokeWidth={1.8} aria-hidden /> : <Menu size={20} strokeWidth={1.8} aria-hidden />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav id="mobile-menu" className="sv-mobile-menu min-[900px]:hidden" aria-label="Mobile navigation">
          {nav.map((n) => (
            <a key={n.href} href={n.href} onClick={close} className="sv-mobile-link">
              {n.label}
              <ArrowRight size={15} strokeWidth={1.8} aria-hidden />
            </a>
          ))}
          <a className="sv-btn sv-btn--dark mt-3 w-full" href="#enquire" onClick={close}>
            {headerCta}
            <ArrowRight size={15} strokeWidth={1.8} aria-hidden />
          </a>
        </nav>
      )}
    </header>
  );
}
