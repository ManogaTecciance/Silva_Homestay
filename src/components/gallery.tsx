"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { gallery, gallerySection, type GalleryItem } from "@/content/content";

export function Gallery() {
  const [open, setOpen] = useState<GalleryItem | null>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <section id="gallery" className="container-x pt-[var(--section-gap)]">
      <div className="mb-[clamp(20px,2.5vw,32px)] flex flex-wrap items-end justify-between gap-4">
        <div>
          <span className="eyebrow">{gallerySection.eyebrow}</span>
          <h2 className="h2">{gallerySection.title}</h2>
        </div>
        <span className="text-[12.5px] text-muted-foreground">{gallerySection.hint}</span>
      </div>

      <div className="grid grid-flow-dense auto-rows-[clamp(140px,17vw,230px)] grid-cols-[repeat(auto-fill,minmax(min(46%,280px),1fr))] gap-3">
        {gallery.map((g) => (
          <button
            key={g.src}
            type="button"
            onClick={() => setOpen(g)}
            aria-label={`View larger: ${g.caption}`}
            className={`photo-frame relative row-span-2 cursor-zoom-in rounded-[var(--radius-lg)] p-0 ${g.wide ? "col-span-2" : ""}`}
          >
            <Image
              src={g.src}
              alt={g.alt}
              fill
              sizes={g.wide ? "(min-width: 720px) 640px, 100vw" : "(min-width: 720px) 320px, 50vw"}
              className="zoom-img object-cover"
              style={{ objectPosition: g.position }}
            />
          </button>
        ))}
      </div>

      {open && (
        <div
          onClick={() => setOpen(null)}
          role="dialog"
          aria-modal="true"
          aria-label={open.caption}
          className="anim-lightbox fixed inset-0 z-[60] flex cursor-zoom-out items-center justify-center bg-black/78 p-[clamp(16px,4vw,48px)]"
        >
          <figure className="m-0 w-full max-w-[760px] overflow-hidden rounded-[var(--radius-xl)] bg-card shadow-[var(--shadow-2xl)]">
            <Image
              src={open.src}
              alt={open.alt}
              width={open.width}
              height={open.height}
              sizes="760px"
              className="max-h-[78vh] w-full bg-muted object-contain"
              style={{ height: "auto" }}
            />
            <figcaption className="flex justify-between gap-3 px-[18px] py-[14px] text-[13px] text-muted-foreground">
              <span>{open.caption}</span>
              <span>{gallerySection.closeHint}</span>
            </figcaption>
          </figure>
        </div>
      )}
    </section>
  );
}
