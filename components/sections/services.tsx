"use client";

import { useLanguage } from "@/components/providers";
import { Reveal, SectionHeading } from "@/components/ui";
import { Tilt } from "@/components/three-d";

export default function Services() {
  const { t } = useLanguage();

  return (
    <section id="services" className="border-t border-line bg-surface py-24 md:py-32">
      <div className="container-x">
        <SectionHeading index="04" label={t.services.label} title={t.services.title} sub={t.services.sub} />

        <div className="mt-14 grid gap-4 md:grid-cols-2">
          {t.services.items.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.05}>
              <Tilt max={5} className="h-full">
              <div className="group relative h-full overflow-hidden rounded-2xl border border-line bg-paper p-7 transition-[border-color,box-shadow] duration-300 hover:border-brand/40 hover:shadow-[0_18px_40px_-18px_rgba(48,70,232,0.45)] md:p-8">
              <div
                className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-accent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                aria-hidden="true"
              />
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-lg font-semibold tracking-[-0.015em]">{item.title}</h3>
                <span className="font-mono text-xs text-faint">0{i + 1}</span>
              </div>
              <p className="mt-3 max-w-md leading-relaxed text-muted">{item.body}</p>
              <ul className="mt-6 flex flex-wrap gap-2">
                {item.tags.map((tag) => (
                  <li
                    key={tag}
                    className="rounded-full border border-line px-2.5 py-1 font-mono text-[11px] text-ink-soft"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
              </div>
              </Tilt>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-16">
          <h3 className="font-mono text-xs uppercase tracking-[0.14em] text-faint">{t.services.processTitle}</h3>
          <ol className="mt-6 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {t.services.process.map((step, i) => (
              <li key={step.title} className="border-t border-ink pt-5">
                <span className="font-mono text-xs text-accent-ink">0{i + 1}</span>
                <p className="mt-2 font-semibold">{step.title}</p>
                <p className="mt-1.5 text-[0.9375rem] leading-relaxed text-muted">{step.body}</p>
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
    </section>
  );
}
