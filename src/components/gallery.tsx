"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ArrowRight, ChevronLeft, ChevronRight, X } from "lucide-react";
import { gallery, gallerySection } from "@/content/content";

export function Gallery() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const open = openIndex == null ? null : gallery[openIndex];

  useEffect(() => {
    if (openIndex == null) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpenIndex(null);
      if (event.key === "ArrowLeft") setOpenIndex((index) => index == null ? null : (index - 1 + gallery.length) % gallery.length);
      if (event.key === "ArrowRight") setOpenIndex((index) => index == null ? null : (index + 1) % gallery.length);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [openIndex]);

  const step = (direction: number) => setOpenIndex((index) => index == null ? null : (index + direction + gallery.length) % gallery.length);

  return (
    <section id="gallery" className="bg-white py-[clamp(70px,8vw,112px)]">
      <div className="mx-auto max-w-[1320px] px-[var(--gutter)]">
        <div className="mb-[clamp(26px,3.5vw,44px)] flex flex-col justify-between gap-5 min-[680px]:flex-row min-[680px]:items-end">
          <div>
            <span className="sv-kicker"><span aria-hidden />{gallerySection.eyebrow}</span>
            <h2 className="sv-section-title mt-4">{gallerySection.title}</h2>
          </div>
          <button type="button" className="sv-btn sv-btn--outline flex-none" onClick={() => setOpenIndex(0)}>
            {gallerySection.cta}
            <ArrowRight size={16} strokeWidth={1.8} aria-hidden />
          </button>
        </div>

        <div className="sv-gallery-grid">
          {gallery.map((item, index) => (
            <button
              key={item.src}
              type="button"
              onClick={() => setOpenIndex(index)}
              aria-label={`View larger: ${item.caption}`}
              className={`sv-gallery-item sv-gallery-item--${index + 1}`}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(min-width: 980px) 32vw, (min-width: 620px) 50vw, 100vw"
                className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.025]"
                style={{ objectPosition: item.position }}
              />
              <span className="sr-only">{item.caption}</span>
            </button>
          ))}
        </div>
      </div>

      {open && (
        <div
          onClick={() => setOpenIndex(null)}
          role="dialog"
          aria-modal="true"
          aria-label={open.caption}
          className="anim-lightbox fixed inset-0 z-[70] flex cursor-zoom-out items-center justify-center bg-[#17130e]/88 p-[clamp(14px,4vw,52px)] backdrop-blur-sm"
        >
          <button type="button" onClick={() => setOpenIndex(null)} aria-label="Close gallery" className="absolute top-4 right-4 flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-white/20 bg-white/12 text-white backdrop-blur transition hover:bg-white/20">
            <X size={19} aria-hidden />
          </button>
          <button type="button" onClick={(event) => { event.stopPropagation(); step(-1); }} aria-label="Previous photo" className="absolute left-3 z-[2] flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-white/20 bg-white/12 text-white backdrop-blur transition hover:bg-white/20 min-[760px]:left-8">
            <ChevronLeft size={20} aria-hidden />
          </button>
          <figure onClick={(event) => event.stopPropagation()} className="m-0 w-full max-w-[920px] cursor-default overflow-hidden rounded-[18px] bg-white shadow-2xl">
            <Image src={open.src} alt={open.alt} width={open.width} height={open.height} sizes="920px" className="max-h-[80vh] w-full bg-[#ece8e1] object-contain" style={{ height: "auto" }} />
            <figcaption className="flex items-center justify-between gap-3 px-5 py-4 text-[12.5px] text-[#635e56]">
              <span>{open.caption}</span>
              <span className="tabular-nums">{openIndex! + 1} / {gallery.length}</span>
            </figcaption>
          </figure>
          <button type="button" onClick={(event) => { event.stopPropagation(); step(1); }} aria-label="Next photo" className="absolute right-3 z-[2] flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-white/20 bg-white/12 text-white backdrop-blur transition hover:bg-white/20 min-[760px]:right-8">
            <ChevronRight size={20} aria-hidden />
          </button>
        </div>
      )}
    </section>
  );
}
