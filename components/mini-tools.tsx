"use client";

import { useId, useMemo, useState, type ReactNode } from "react";
import { AnimatePresence, m } from "framer-motion";
import { useLanguage } from "@/components/providers";
import type { Copy } from "@/lib/copy";

/* Small, real slices of what each product does — not mock-ups. */

const ERAS = [
  { name: "令和", start: 2019 },
  { name: "平成", start: 1989 },
  { name: "昭和", start: 1926 },
  { name: "大正", start: 1912 },
];

/** Year-level conversion. A changeover year belongs to both eras, so both are shown. */
export function toJapaneseEra(year: number): string[] | null {
  if (!Number.isInteger(year) || year < 1912 || year > 2200) return null;
  const label = (era: (typeof ERAS)[number]) => {
    const n = year - era.start + 1;
    return `${era.name}${n === 1 ? "元" : n}年`;
  };
  const index = ERAS.findIndex((era) => year >= era.start);
  const current = label(ERAS[index]);
  const previous = ERAS[index + 1];
  return year === ERAS[index].start && previous ? [current, label(previous)] : [current];
}

function ToolCard({ title, hint, children }: { title: string; hint: string; children: ReactNode }) {
  const { t } = useLanguage();
  return (
    <div className="mt-8 rounded-2xl border border-line bg-surface p-5">
      <div className="flex items-center gap-2">
        <span className="rounded-full bg-ink px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.12em] text-white">
          {t.products.tryIt}
        </span>
        <h4 className="text-sm font-semibold">{title}</h4>
      </div>
      <p className="mt-2 text-sm leading-relaxed text-muted">{hint}</p>
      {children}
    </div>
  );
}

const inputClass =
  "h-11 rounded-xl border border-line-strong bg-paper px-3 font-mono text-base text-ink transition-colors hover:border-faint focus:border-ink focus:outline-none";

export function EraConverter({ copy }: { copy: Copy["products"]["resumejp"]["tool"] }) {
  const id = useId();
  const [value, setValue] = useState("1998");
  const result = toJapaneseEra(Number(value));

  return (
    <ToolCard title={copy.title} hint={copy.hint}>
      <div className="mt-4 flex items-center gap-3">
        <label htmlFor={id} className="sr-only">
          {copy.label}
        </label>
        <input
          id={id}
          inputMode="numeric"
          maxLength={4}
          value={value}
          onChange={(e) => setValue(e.target.value.replace(/\D/g, ""))}
          className={`${inputClass} w-24`}
        />
        <svg viewBox="0 0 16 16" className="size-4 shrink-0 text-faint" aria-hidden="true">
          <path d="M3 8h10m-4-4 4 4-4 4" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <output htmlFor={id} aria-live="polite" className="min-w-0 flex-1">
          <AnimatePresence mode="wait" initial={false}>
            <m.span
              key={result?.join() ?? "none"}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.16 }}
              className="block truncate"
            >
              {result ? (
                <>
                  <span className="text-xl font-semibold tracking-tight">{result[0]}</span>
                  {result[1] ? <span className="ml-2 text-sm text-muted">/ {result[1]}</span> : null}
                </>
              ) : (
                <span className="text-sm text-faint">{copy.invalid}</span>
              )}
            </m.span>
          </AnimatePresence>
        </output>
      </div>
    </ToolCard>
  );
}

function shiftMonths(date: Date, months: number) {
  const d = new Date(date);
  const day = d.getDate();
  d.setDate(1);
  d.setMonth(d.getMonth() + months);
  // Clamp: 31 May minus 3 months is 28/29 Feb, not 3 March.
  const lastDay = new Date(d.getFullYear(), d.getMonth() + 1, 0).getDate();
  d.setDate(Math.min(day, lastDay));
  return d;
}

export function RenewalWindow({ copy }: { copy: Copy["products"]["visatomo"]["tool"] }) {
  const { lang } = useLanguage();
  const id = useId();
  const [value, setValue] = useState("");

  const message = useMemo(() => {
    if (!value) return { tone: "muted", text: copy.empty };
    const [y, m, d] = value.split("-").map(Number);
    const expiry = new Date(y, m - 1, d);
    if (Number.isNaN(expiry.getTime())) return { tone: "muted", text: copy.empty };
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    if (expiry < today) return { tone: "warn", text: copy.passed };
    const fmt = new Intl.DateTimeFormat(lang === "ja" ? "ja-JP" : "en-GB", { dateStyle: "medium" });
    return {
      tone: "ok",
      text: copy.result
        .replace("{from}", fmt.format(shiftMonths(expiry, -3)))
        .replace("{to}", fmt.format(expiry)),
    };
  }, [value, copy, lang]);

  return (
    <ToolCard title={copy.title} hint={copy.hint}>
      <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center">
        <label htmlFor={id} className="sr-only">
          {copy.label}
        </label>
        <input
          id={id}
          type="date"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className={`${inputClass} cursor-pointer sm:w-48`}
          aria-describedby={`${id}-result`}
        />
        <p
          id={`${id}-result`}
          aria-live="polite"
          className={`text-sm leading-snug ${
            message.tone === "ok" ? "font-medium text-ink" : message.tone === "warn" ? "text-red-700" : "text-faint"
          }`}
        >
          {message.text}
        </p>
      </div>
    </ToolCard>
  );
}
