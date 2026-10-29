"use client";

import { useState } from "react";
import { AnimatePresence, m } from "framer-motion";
import { useLanguage } from "@/components/providers";
import { Reveal, SectionHeading } from "@/components/ui";

export default function Faq() {
  const { t } = useLanguage();
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 md:py-32">
      <div className="container-x grid gap-12 lg:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] lg:gap-20">
        <SectionHeading index="05" label={t.faq.label} title={t.faq.title} />

        <Reveal>
          <ul className="border-t border-line">
            {t.faq.items.map((item, i) => {
              const isOpen = open === i;
              return (
                <li key={item.q} className="border-b border-line">
                  <h3>
                    <button
                      type="button"
                      id={`faq-q-${i}`}
                      aria-expanded={isOpen}
                      aria-controls={`faq-a-${i}`}
                      onClick={() => setOpen(isOpen ? null : i)}
                      className="flex w-full cursor-pointer items-center justify-between gap-6 py-5 text-left font-medium"
                    >
                      {item.q}
                      <span
                        className={`relative size-3.5 shrink-0 transition-transform duration-200 ${isOpen ? "rotate-45" : ""}`}
                        aria-hidden="true"
                      >
                        <span className="absolute top-1/2 left-0 h-[1.5px] w-full -translate-y-1/2 bg-ink" />
                        <span className="absolute top-0 left-1/2 h-full w-[1.5px] -translate-x-1/2 bg-ink" />
                      </span>
                    </button>
                  </h3>
                  <AnimatePresence initial={false}>
                    {isOpen ? (
                      <m.div
                        id={`faq-a-${i}`}
                        role="region"
                        aria-labelledby={`faq-q-${i}`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="max-w-xl pb-6 leading-relaxed text-muted">{item.a}</p>
                      </m.div>
                    ) : null}
                  </AnimatePresence>
                </li>
              );
            })}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
