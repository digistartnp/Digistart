"use client";

import type { ReactNode } from "react";
import Image, { type StaticImageData } from "next/image";
import { m, useReducedMotion } from "framer-motion";
import { useLanguage } from "@/components/providers";
import { ArrowUpRight, BrowserFrame, PhoneFrame, Reveal, SectionHeading } from "@/components/ui";
import { InputOutput, Tilt } from "@/components/three-d";
import { EraConverter, RenewalWindow } from "@/components/mini-tools";
import { links, type Copy } from "@/lib/copy";
import resumeFill from "@/assets/products/resumejp-m-fill.jpg";
import resumeSheet from "@/assets/products/resumejp-sheet.jpg";
import visaDesktop from "@/assets/products/visatomo-desktop.jpg";
import visaMobile from "@/assets/products/visatomo-mobile.jpg";
import resumeLogo from "@/assets/products/logos/resumejp.svg";
import visaLogo from "@/assets/products/logos/visatomo.svg";

/* VisaTomo on desktop and phone at once: the browser angled in depth, the phone
   floating in front. Both drift on their own and pop toward you on hover. */
function VisaShowcase({ copy }: { copy: Copy["products"]["visatomo"] }) {
  const reduce = useReducedMotion();
  const drift = (delay: number, d: number) =>
    reduce ? {} : { animate: { y: [0, -d, 0] }, transition: { duration: 7, delay, repeat: Infinity, ease: "easeInOut" as const } };
  const pop = { scale: 1.05, rotateY: 0, rotateX: 0, transition: { type: "spring" as const, stiffness: 260, damping: 18 } };

  return (
    <Tilt max={4}>
      <div className="relative aspect-[16/12]" style={{ perspective: 1400 }}>
        <m.div
          className="absolute top-[6%] left-0 w-[86%] cursor-pointer"
          style={{ rotateY: 14, rotateX: 4 }}
          whileHover={pop}
          {...drift(0, 6)}
        >
          <BrowserFrame domain="visatomo.com" className="w-full">
            <Image src={visaDesktop} alt={copy.alts[0]} placeholder="blur" sizes="(min-width: 1024px) 520px, 86vw" className="h-auto w-full" />
          </BrowserFrame>
        </m.div>
        <m.div
          className="absolute right-[2%] bottom-[2%] z-10 h-[72%] cursor-pointer"
          style={{ aspectRatio: "9 / 19.2", rotateY: -12 }}
          whileHover={pop}
          {...drift(1.6, 10)}
        >
          <PhoneFrame className="h-full">
            <Image src={visaMobile} alt={copy.alts[1]} placeholder="blur" fill sizes="(min-width: 1024px) 200px, 34vw" className="object-cover object-top" />
          </PhoneFrame>
        </m.div>
      </div>
    </Tilt>
  );
}

function ProductCopy({
  id,
  name,
  logo,
  domain,
  href,
  copy,
  tool,
}: {
  id: string;
  name: string;
  logo: StaticImageData;
  domain: string;
  href: string;
  copy: Copy["products"]["resumejp"] | Copy["products"]["visatomo"];
  tool: ReactNode;
}) {
  const { t } = useLanguage();

  return (
    <>
      <div className="flex items-center gap-3">
        <Image
          src={logo}
          alt=""
          width={44}
          height={44}
          unoptimized
          className="size-11 rounded-xl shadow-[0_4px_14px_-4px_rgba(11,21,51,0.35)]"
        />
        <div>
          <h3 id={id} className="text-xl font-semibold tracking-[-0.02em]">
            {name}
          </h3>
          <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-faint">{copy.category}</p>
        </div>
        <span className="ml-auto inline-flex items-center gap-1.5 rounded-full border border-line px-2.5 py-1 text-xs font-medium text-ink-soft">
          <span className="relative flex size-1.5" aria-hidden="true">
            <span className="absolute inset-0 animate-ping rounded-full bg-emerald-400 opacity-60 motion-reduce:hidden" />
            <span className="relative size-1.5 rounded-full bg-emerald-500" />
          </span>
          {t.products.live}
        </span>
      </div>

      <p className="mt-7 text-2xl leading-snug font-semibold tracking-[-0.03em] text-balance md:text-[1.75rem]">
        {copy.tagline}
      </p>
      <p className="mt-4 leading-relaxed text-pretty text-muted">{copy.desc}</p>

      <ul className="mt-7 space-y-3 border-t border-line pt-7">
        {copy.features.map((feature) => (
          <li key={feature} className="flex gap-3 text-[0.9375rem] text-ink-soft">
            <svg viewBox="0 0 16 16" className="mt-1 size-4 shrink-0 text-accent" aria-hidden="true">
              <path d="m3.5 8.5 3 3 6-7" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            {feature}
          </li>
        ))}
      </ul>

      {tool}

      <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-3">
        <a href={href} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
          {t.products.visit} {domain}
          <ArrowUpRight />
        </a>
        <span className="text-sm text-faint">{t.products.free}</span>
      </div>
    </>
  );
}

export default function Products() {
  const { t } = useLanguage();
  const r = t.products.resumejp;
  const v = t.products.visatomo;

  return (
    <section id="products" className="border-t border-line py-24 md:py-32">
      <div className="container-x">
        <SectionHeading index="01" label={t.products.label} title={t.products.title} sub={t.products.sub} />

        <div className="mt-16 space-y-24 md:mt-20 md:space-y-32">
          <article
            aria-labelledby="resumejp-name"
            className="grid items-center gap-10 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-16"
          >
            <Reveal>
              <ProductCopy
                id="resumejp-name"
                name="ResumeJP"
                logo={resumeLogo}
                domain="resumejp.com"
                href={links.resumejp}
                copy={r}
                tool={<EraConverter copy={r.tool} />}
              />
            </Reveal>
            <Reveal delay={0.08}>
              <InputOutput input={resumeFill} output={resumeSheet} inputAlt={r.steps[1].alt} outputAlt={r.steps[2].alt} />
            </Reveal>
          </article>

          <article
            aria-labelledby="visatomo-name"
            className="grid items-center gap-10 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-16"
          >
            <Reveal className="lg:order-2">
              <ProductCopy
                id="visatomo-name"
                name="VisaTomo"
                logo={visaLogo}
                domain="visatomo.com"
                href={links.visatomo}
                copy={v}
                tool={<RenewalWindow copy={v.tool} />}
              />
            </Reveal>
            <Reveal delay={0.08} className="lg:order-1">
              <VisaShowcase copy={v} />
            </Reveal>
          </article>
        </div>
      </div>
    </section>
  );
}
