"use client";

import type { ReactNode } from "react";
import { m } from "framer-motion";

export function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <m.div
      className={className}
      initial={{ opacity: 0, y: 22, rotateX: -14 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      style={{ transformPerspective: 900, transformOrigin: "50% 100%" }}
    >
      {children}
    </m.div>
  );
}

export function SectionHeading({
  index,
  label,
  title,
  sub,
  tone = "ink",
}: {
  index?: string;
  label: string;
  title: string;
  sub?: string;
  tone?: "ink" | "paper";
}) {
  const dark = tone === "paper";
  return (
    <Reveal className="max-w-2xl">
      <p
        className={`font-mono text-xs uppercase tracking-[0.14em] ${
          dark ? "text-white/55" : "text-faint"
        }`}
      >
        {index ? <span className="text-accent">{index} / </span> : null}
        {label}
      </p>
      <h2
        className={`mt-4 text-[2rem] leading-[1.1] font-semibold tracking-[-0.035em] text-balance md:text-[2.75rem] ${
          dark ? "text-white" : "text-ink"
        }`}
      >
        {title}
      </h2>
      {sub ? (
        <p
          className={`mt-4 text-[1.0625rem] leading-relaxed text-pretty ${
            dark ? "text-white/65" : "text-muted"
          }`}
        >
          {sub}
        </p>
      ) : null}
    </Reveal>
  );
}

export function BrowserFrame({
  domain,
  children,
  className = "",
}: {
  domain?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`overflow-hidden rounded-xl border border-line bg-paper shadow-[0_1px_2px_rgba(11,21,51,0.05),0_18px_50px_-16px_rgba(48,70,232,0.35)] ${className}`}
    >
      <div className="flex h-8 items-center justify-center border-b border-line bg-linear-to-r from-brand-soft via-paper to-brand-soft px-3">
        {domain ? (
          <span className="inline-flex items-center gap-1.5 rounded-full bg-paper px-3 py-0.5 font-mono text-[10px] text-muted ring-1 ring-line">
            <svg viewBox="0 0 12 12" className="size-2.5 text-brand" aria-hidden="true">
              <path d="M3.5 5.5V4a2.5 2.5 0 0 1 5 0v1.5M2.5 5.5h7v5h-7z" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" />
            </svg>
            {domain}
          </span>
        ) : null}
      </div>
      <div className="relative">{children}</div>
    </div>
  );
}

export function PhoneFrame({
  children,
  className = "",
  tone = "ink",
}: {
  children: ReactNode;
  className?: string;
  tone?: "ink" | "paper";
}) {
  return (
    <div
      className={`relative aspect-[9/19.2] overflow-hidden rounded-[2rem] border-[5px] ${
        tone === "ink" ? "border-ink bg-ink" : "border-white/15 bg-white/5"
      } shadow-[0_20px_50px_-20px_rgba(0,0,0,0.45)] ${className}`}
    >
      <div className="relative size-full overflow-hidden rounded-[1.6rem] bg-paper">{children}</div>
    </div>
  );
}

export function ArrowUpRight({ className = "size-3.5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" fill="none" className={className} aria-hidden="true">
      <path
        d="M5 11 11 5M6 5h5v5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
