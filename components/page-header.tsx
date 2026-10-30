"use client";

import type { ReactNode } from "react";
import { m } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

/* Every inner page opens the same way: its path typed out like a prompt, then
   the headline. The h1 stays static so it paints immediately. */
export default function PageHeader({
  path,
  title,
  sub,
  children,
}: {
  path: string;
  title: string;
  sub?: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative">
      <div className="container-x pt-14 pb-12 md:pt-24 md:pb-16">
        <p className="flex items-center font-mono text-xs tracking-[0.08em] text-faint" aria-hidden="true">
          <span className="text-accent-ink">~/</span>
          <span className="inline-flex overflow-hidden">
            {path.split("").map((char, i) => (
              <m.span
                key={`${char}-${i}`}
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.3, delay: 0.05 + i * 0.035, ease }}
              >
                {char}
              </m.span>
            ))}
          </span>
          <span className="mark-cursor is-blinking ml-1 inline-block h-3.5 w-[7px] rounded-[1px] bg-accent" />
        </p>
        <h1 className="mt-5 max-w-4xl text-[2.5rem] leading-[1.04] font-semibold tracking-[-0.04em] text-balance text-ink md:text-[4.25rem]">
          {title}
        </h1>
        {sub ? (
          <p className="mt-6 max-w-2xl text-[1.0625rem] leading-relaxed text-pretty text-muted md:text-lg">{sub}</p>
        ) : null}
        {children}
      </div>
      <div className="container-x" aria-hidden="true">
        <div className="relative h-px bg-line">
          <m.span
            className="absolute inset-y-0 left-0 w-24 origin-left bg-brand"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.7, delay: 0.25, ease }}
          />
        </div>
      </div>
    </section>
  );
}
