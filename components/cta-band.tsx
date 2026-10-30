"use client";

import Link from "next/link";
import { useLanguage } from "@/components/providers";
import { ArrowUpRight, Reveal } from "@/components/ui";
import { links } from "@/lib/copy";

export default function CtaBand() {
  const { t } = useLanguage();

  return (
    <section className="border-t border-line bg-linear-to-b from-brand-soft to-paper">
      <div className="container-x py-20 md:py-28">
        <Reveal className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div className="max-w-xl">
            <h2 className="text-[2rem] leading-[1.08] font-semibold tracking-[-0.035em] text-balance md:text-[3rem]">
              {t.cta.title}
            </h2>
            <p className="mt-4 text-[1.0625rem] leading-relaxed text-pretty text-muted">{t.cta.sub}</p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link href="/contact" className="btn btn-primary">
              {t.cta.button}
            </Link>
            <a href={links.line} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
              {t.contact.line}
              <ArrowUpRight />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
