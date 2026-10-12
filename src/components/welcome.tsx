import Image from "next/image";
import { welcome } from "@/content/content";

export function Welcome() {
  return (
    <section id="about" className="container-x pt-[var(--section-gap)]">
      <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,320px),1fr))] items-center gap-[clamp(28px,5vw,80px)]">
        <div className="photo-frame relative aspect-[5/4] w-full max-w-[520px] rounded-[var(--radius-2xl)] shadow-[var(--shadow-sm)]">
          <Image
            src={welcome.image.src}
            alt={welcome.image.alt}
            fill
            sizes="(min-width: 720px) 520px, 100vw"
            className="object-cover"
            style={{ objectPosition: "50% 45%" }}
          />
        </div>
        <div className="max-w-[560px]">
          <span className="eyebrow">{welcome.eyebrow}</span>
          <h2 className="h2">{welcome.title}</h2>
          {welcome.paragraphs.map((p, i) => (
            <p key={i} className={`body-copy mb-0 ${i === 0 ? "mt-4" : "mt-3"}`}>
              {p}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
