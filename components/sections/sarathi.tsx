"use client";

import Link from "next/link";
import { useLanguage } from "@/components/providers";
import { Reveal, SectionHeading } from "@/components/ui";
import { PhoneFan } from "@/components/three-d";
import elderHome from "@/assets/products/sarathi/elder_home.webp";
import elderConfirm from "@/assets/products/sarathi/elder_confirm.webp";
import elderMedicines from "@/assets/products/sarathi/elder_medicines.webp";
import familyToday from "@/assets/products/sarathi/family_today.webp";

const shots = [elderHome, elderConfirm, elderMedicines, familyToday];

/* One line icon per feature, same order as the copy: talk, medicines, family, SOS, scam, languages. */
const icons = [
  "M12 3a3 3 0 0 0-3 3v5a3 3 0 0 0 6 0V6a3 3 0 0 0-3-3Zm-6 8a6 6 0 0 0 12 0M12 17v4",
  "M8.5 15.5 15.5 8.5a3.5 3.5 0 1 0-5-5l-7 7a3.5 3.5 0 0 0 5 5Zm-3-3 7-7",
  "M4 6h16v12H4zM4 15l4-4 4 4 3-3 5 5",
  "M12 4 3 20h18L12 4Zm0 6v4m0 3v.01",
  "M12 3 5 6v5c0 4.4 3 8.3 7 9.5 4-1.2 7-5.1 7-9.5V6l-7-3Zm-3 9 2 2 4-4",
  "M3 12h18M12 3c2.5 2.7 3.8 5.7 3.8 9s-1.3 6.3-3.8 9c-2.5-2.7-3.8-5.7-3.8-9S9.5 5.7 12 3Zm-9 9a9 9 0 1 0 18 0 9 9 0 1 0-18 0",
];

export default function Sarathi() {
  const { t } = useLanguage();
  const s = t.sarathi;

  return (
    <section id="sarathi" className="relative border-t border-line bg-linear-to-b from-brand-soft to-surface py-24 md:py-32">
      <div className="container-x grid items-center gap-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-16">
        <div>
          <SectionHeading label={s.label} title={s.title} sub={s.tagline} />
          <Reveal className="mt-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-line bg-paper px-3 py-1 font-mono text-[11px] text-muted">
              <span className="size-1.5 animate-pulse rounded-full bg-amber-500" aria-hidden="true" />
              {s.status}
            </span>
            <p className="mt-5 leading-relaxed text-pretty text-muted">{s.desc}</p>

            <ul className="mt-7 grid grid-cols-2 gap-2 sm:grid-cols-3">
              {s.features.map((feature, i) => (
                <li
                  key={feature.title}
                  title={feature.body}
                  className="flex items-center gap-2 rounded-xl border border-line bg-paper px-3 py-2.5 text-sm font-medium text-ink-soft"
                >
                  <svg viewBox="0 0 24 24" className="size-4.5 shrink-0 text-brand" aria-hidden="true">
                    <path d={icons[i]} fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  {feature.title}
                </li>
              ))}
            </ul>

            <Link href="/contact?topic=sarathi" className="btn btn-primary mt-8">
              {s.cta}
            </Link>
          </Reveal>
        </div>

        <Reveal delay={0.08}>
          <PhoneFan steps={s.screens} shots={shots} />
        </Reveal>
      </div>
    </section>
  );
}
