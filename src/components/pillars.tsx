import { pillars } from "@/content/content";

export function Pillars() {
  return (
    <section className="border-y border-border bg-surface">
      <div className="container-x grid grid-cols-[repeat(auto-fit,minmax(min(100%,210px),1fr))] gap-[clamp(20px,3vw,40px)] py-[clamp(28px,3vw,40px)]">
        {pillars.map((p) => (
          <div key={p.kicker} className="flex flex-col gap-[6px]">
            <span className="text-[11px] font-semibold uppercase tracking-[.14em] text-gold-ink">{p.kicker}</span>
            <span className="text-lg leading-[1.2] font-semibold tracking-[-0.01em]">{p.title}</span>
            <span className="text-[13px] leading-normal text-muted-foreground">{p.copy}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
