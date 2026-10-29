"use client";

import Link from "next/link";
import { useLanguage } from "@/components/providers";
import { LEGAL_UPDATED, legal, type LegalKind } from "@/lib/legal";

export default function LegalPage({ kind }: { kind: LegalKind }) {
  const { lang } = useLanguage();
  const doc = legal[kind][lang];
  const other: LegalKind = kind === "privacy" ? "terms" : "privacy";

  return (
    <article className="container-x max-w-3xl py-16 md:py-24">
      <p className="font-mono text-xs uppercase tracking-[0.14em] text-faint">
        {doc.updated} · <time dateTime={LEGAL_UPDATED}>{LEGAL_UPDATED}</time>
      </p>
      <h1 className="mt-4 text-[2.25rem] leading-tight font-semibold tracking-[-0.03em] md:text-5xl">{doc.title}</h1>
      <p className="mt-6 text-lg leading-relaxed text-pretty text-muted">{doc.intro}</p>

      <div className="mt-12 space-y-10">
        {doc.sections.map((section, i) => (
          <section key={section.heading} aria-labelledby={`${kind}-${i}`}>
            <h2 id={`${kind}-${i}`} className="text-xl font-semibold tracking-[-0.015em]">
              <span className="mr-2 font-mono text-sm text-accent-ink">{String(i + 1).padStart(2, "0")}</span>
              {section.heading}
            </h2>
            <div className="mt-3 space-y-3">
              {section.body.map((p) => (
                <p key={p} className="leading-relaxed text-pretty text-ink-soft">
                  {p}
                </p>
              ))}
            </div>
          </section>
        ))}
      </div>

      <div className="mt-16 flex flex-wrap gap-3 border-t border-line pt-8">
        <Link href={`/${other}`} className="btn btn-secondary">
          {legal[other][lang].title}
        </Link>
        <Link href="/#contact" className="btn btn-primary">
          {lang === "ja" ? "お問い合わせ" : "Contact us"}
        </Link>
      </div>
    </article>
  );
}
