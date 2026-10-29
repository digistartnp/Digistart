"use client";

import { useLanguage } from "@/components/providers";
import { Reveal, SectionHeading } from "@/components/ui";
import { Mark3D, StackRing, Tilt } from "@/components/three-d";

const stack = ["TypeScript", "React", "Next.js", "Node.js", "PostgreSQL", "Tailwind CSS"];

/* Simple line icons, one per principle, drawn on the same 24-unit grid. */
const icons = [
  "M12 3 5 6v5c0 4.4 3 8.3 7 9.5 4-1.2 7-5.1 7-9.5V6l-7-3Zm-2.5 9 2 2 4-4.5",
  "M4 6h9M8.5 4v2c0 4-2 7-4.5 8.5M6 10c1.2 2 3.2 3.6 5.5 4.5M13 20l4-9 4 9m-6.8-2.5h5.6",
  "M7 3h7l5 5v13H7V3Zm7 0v5h5M10 13h6M10 17h4",
  "M13 3 5 14h6l-1 7 8-11h-6l1-7Z",
];

export default function Approach() {
  const { t } = useLanguage();

  return (
    <section id="approach" className="py-24 md:py-32">
      <div className="container-x">
        <div className="grid items-center gap-10 md:grid-cols-[minmax(0,1fr)_auto]">
          <div>
            <SectionHeading index="03" label={t.approach.label} title={t.approach.title} />
            <Reveal className="mt-6 flex max-w-md items-start gap-3 text-sm leading-relaxed text-muted">
              <span className="mt-1.5 h-3.5 w-2 shrink-0 rounded-[2px] bg-accent" aria-hidden="true" />
              {t.approach.markCaption}
            </Reveal>
          </div>
          <Reveal delay={0.1} className="mx-auto w-44 md:mr-10 md:w-56">
            <Mark3D />
          </Reveal>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {t.approach.items.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.06}>
              <Tilt max={8} className="h-full">
                <div className="group relative h-full overflow-hidden rounded-2xl border border-line bg-paper p-6 transition-[border-color,box-shadow] duration-300 hover:border-brand/40 hover:shadow-[0_18px_40px_-18px_rgba(48,70,232,0.45)] md:p-7">
                  <div
                    className="pointer-events-none absolute -top-16 -right-16 size-40 rounded-full bg-accent/10 blur-2xl transition-opacity duration-300 group-hover:opacity-100 md:opacity-0"
                    aria-hidden="true"
                  />
                  <span className="relative flex size-11 items-center justify-center rounded-xl bg-brand-soft text-brand transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:rotate-[-4deg]">
                    <svg viewBox="0 0 24 24" className="size-5.5" aria-hidden="true">
                      <path
                        d={icons[i]}
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <h3 className="relative mt-6 font-semibold tracking-[-0.01em]">{item.title}</h3>
                  <p className="relative mt-2 text-[0.9375rem] leading-relaxed text-muted">{item.body}</p>
                </div>
              </Tilt>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-8 grid items-center gap-4 overflow-hidden rounded-2xl border border-line bg-linear-to-r from-surface via-paper to-brand-soft px-6 py-5 sm:grid-cols-[auto_1fr]">
          <span className="font-mono text-xs uppercase tracking-[0.14em] text-faint">{t.approach.stack}</span>
          <StackRing items={stack} />
        </Reveal>
      </div>
    </section>
  );
}
