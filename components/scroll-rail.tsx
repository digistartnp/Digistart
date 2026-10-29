"use client";

import { useEffect, useState } from "react";
import { m, useScroll, useSpring } from "framer-motion";
import { useLanguage } from "@/components/providers";

/* A thin progress line across the top, plus (on wide screens) a rail of
   connected section dots whose line fills up to the section you're in. */
export default function ScrollRail() {
  const { t } = useLanguage();
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 140, damping: 26, mass: 0.4 });
  const [active, setActive] = useState("top");

  const sections = [
    { id: "products", label: t.nav.products },
    { id: "sarathi", label: t.nav.next },
    { id: "approach", label: t.nav.approach },
    { id: "services", label: t.nav.services },
    { id: "faq", label: t.faq.label },
    { id: "contact", label: t.nav.contact },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) if (entry.isIntersecting) setActive(entry.target.id);
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    for (const id of ["top", "products", "sarathi", "approach", "services", "faq", "contact"]) {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <m.div
        className="fixed inset-x-0 top-0 z-50 h-[2px] origin-left bg-linear-to-r from-brand to-accent"
        style={{ scaleX: progress }}
        aria-hidden="true"
      />

      <nav
        aria-label="Sections"
        className={`fixed top-1/2 left-6 z-30 hidden -translate-y-1/2 transition-opacity duration-300 2xl:left-10 xl:block ${
          active === "top" ? "pointer-events-none opacity-0" : "opacity-100"
        }`}
      >
        <div className="relative">
          <span className="absolute top-1 bottom-1 left-[5px] w-px bg-line-strong" aria-hidden="true" />
          {/* Fills exactly up to the current section's dot. */}
          <m.span
            className="absolute top-1 bottom-1 left-[5px] w-px origin-top bg-brand"
            initial={false}
            animate={{ scaleY: Math.max(0, sections.findIndex((s) => s.id === active)) / (sections.length - 1) }}
            transition={{ type: "spring", stiffness: 120, damping: 22 }}
            aria-hidden="true"
          />
          <ul className="relative flex flex-col gap-5">
            {sections.map((s) => {
              const on = active === s.id;
              return (
                <li key={s.id}>
                  <a href={`#${s.id}`} className="group flex items-center gap-3" aria-current={on ? "true" : undefined}>
                    <span
                      className={`block size-[11px] rounded-full border-2 transition-all duration-300 ${
                        on ? "scale-110 border-brand bg-brand" : "border-line-strong bg-paper group-hover:border-brand"
                      }`}
                    />
                    <span
                      className={`font-mono text-[11px] tracking-[0.08em] uppercase transition-all duration-300 ${
                        on ? "translate-x-0 text-ink opacity-100" : "-translate-x-1 text-faint opacity-0 group-hover:opacity-100"
                      }`}
                    >
                      {s.label}
                    </span>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </>
  );
}
