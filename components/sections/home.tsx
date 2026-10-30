"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, m } from "framer-motion";
import { useLanguage } from "@/components/providers";
import { ArrowUpRight, BrowserFrame, Reveal, SectionHeading } from "@/components/ui";
import { SlideProgress, Tilt, useAutoSlide } from "@/components/three-d";
import { projects } from "@/components/sections/work";
import { links } from "@/lib/copy";
import resumeSheet from "@/assets/products/resumejp-sheet.jpg";
import visaDesktop from "@/assets/products/visatomo-desktop.jpg";
import resumeLogo from "@/assets/products/logos/resumejp.svg";
import visaLogo from "@/assets/products/logos/visatomo.svg";

const ease = [0.22, 1, 0.36, 1] as const;

function MoreLink({ href, children }: { href: string; children: string }) {
  return (
    <Link href={href} className="group inline-flex items-center gap-2 text-sm font-medium text-brand">
      {children}
      <span className="transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true">
        →
      </span>
    </Link>
  );
}

/* Two products, each shown by what it hands you: a finished 履歴書, a filled visa form. */
export function HomeProducts() {
  const { t } = useLanguage();
  const items = [
    { id: "resumejp", name: "ResumeJP", logo: resumeLogo, shot: resumeSheet, href: links.resumejp, domain: "resumejp.com", copy: t.products.resumejp, tilt: -3 },
    { id: "visatomo", name: "VisaTomo", logo: visaLogo, shot: visaDesktop, href: links.visatomo, domain: "visatomo.com", copy: t.products.visatomo, tilt: 3 },
  ];

  return (
    <section className="border-t border-line py-24 md:py-32">
      <div className="container-x">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading label={t.home.productsLabel} title={t.home.productsTitle} />
          <MoreLink href="/products">{t.home.productsCta}</MoreLink>
        </div>

        <div className="mt-14 grid gap-16 md:grid-cols-2 md:gap-10 lg:gap-16">
          {items.map((item, i) => (
            <Reveal key={item.id} delay={i * 0.08}>
              <Tilt max={6}>
                <m.div
                  className="relative aspect-[16/10]"
                  style={{ rotate: item.tilt }}
                  whileHover={{ rotate: 0, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 220, damping: 20 }}
                >
                  <Image
                    src={item.shot}
                    alt={item.copy.tagline}
                    placeholder="blur"
                    fill
                    sizes="(min-width: 768px) 520px, 92vw"
                    className="rounded-xl object-cover object-top shadow-[0_1px_2px_rgba(11,21,51,0.06),0_28px_60px_-24px_rgba(48,70,232,0.45)]"
                  />
                </m.div>
              </Tilt>
              <div className="mt-9 flex items-center gap-3">
                <Image src={item.logo} alt="" width={40} height={40} unoptimized className="size-10 rounded-xl" />
                <h3 className="text-xl font-semibold tracking-[-0.02em]">{item.name}</h3>
                <span className="font-mono text-[11px] tracking-[0.12em] text-faint uppercase">{item.copy.category}</span>
              </div>
              <p className="mt-3 text-lg leading-snug text-pretty text-ink-soft">{item.copy.tagline}</p>
              <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-3">
                <a href={item.href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-sm font-medium text-ink hover:text-brand">
                  {item.domain}
                  <ArrowUpRight />
                </a>
                <MoreLink href={`/products#${item.id}`}>{t.home.details}</MoreLink>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* One browser, three sites: each slides in to replace the last, while the list
   beside it marks which one you're looking at. */
export function HomeWork() {
  const { t } = useLanguage();
  const { ref, active, running, choose, bind } = useAutoSlide(projects.length);
  const current = projects[active];

  return (
    <section className="border-t border-line bg-surface py-24 md:py-32">
      <div className="container-x">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading label={t.home.workLabel} title={t.home.workTitle} />
          <MoreLink href="/work">{t.home.workCta}</MoreLink>
        </div>

        <div ref={ref} {...bind} className="mt-14 grid items-center gap-10 lg:grid-cols-[minmax(0,4fr)_minmax(0,8fr)] lg:gap-14">
          <ol className="order-2 lg:order-1">
            {projects.map((project, i) => {
              const on = i === active;
              const c = t.work.items[project.key];
              return (
                <li key={project.key} className="border-t border-line last:border-b">
                  <button
                    type="button"
                    onClick={() => choose(i)}
                    aria-pressed={on}
                    className="relative flex w-full cursor-pointer items-baseline gap-4 py-5 text-left"
                  >
                    <span className="font-mono text-xs" style={{ color: on ? project.color : undefined }}>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span>
                      <span className={`block text-lg font-semibold tracking-[-0.02em] transition-colors ${on ? "text-ink" : "text-faint"}`}>
                        {project.name}
                      </span>
                      <span className="mt-0.5 block text-sm text-muted">
                        {c.category} · {c.place}
                      </span>
                    </span>
                    {on ? <SlideProgress running={running} /> : null}
                  </button>
                </li>
              );
            })}
          </ol>

          <Link href={`/work#${current.key}`} className="order-1 block lg:order-2" aria-label={`${current.name} — ${t.home.workCta}`}>
            <Tilt max={4}>
              <BrowserFrame domain={current.domain}>
                <div className="relative aspect-[16/10] overflow-hidden">
                  <AnimatePresence initial={false} mode="popLayout">
                    <m.div
                      key={current.key}
                      className="absolute inset-0"
                      initial={{ x: "100%" }}
                      animate={{ x: 0 }}
                      exit={{ x: "-30%" }}
                      transition={{ duration: 0.7, ease }}
                    >
                      <Image
                        src={current.desktop}
                        alt={t.work.items[current.key].alt}
                        placeholder="blur"
                        fill
                        sizes="(min-width: 1024px) 720px, 92vw"
                        className="object-cover object-top"
                      />
                    </m.div>
                  </AnimatePresence>
                </div>
              </BrowserFrame>
            </Tilt>
          </Link>
        </div>
      </div>
    </section>
  );
}

/* Services as a plain typographic index: no cards, just the list. */
export function HomeServices() {
  const { t } = useLanguage();

  return (
    <section className="border-t border-line py-24 md:py-32">
      <div className="container-x">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading label={t.home.servicesLabel} title={t.home.servicesTitle} />
          <MoreLink href="/services">{t.home.servicesCta}</MoreLink>
        </div>

        <ul className="mt-12 border-t border-ink">
          {t.services.items.map((item, i) => (
            <li key={item.title}>
              <Reveal delay={i * 0.04}>
                <Link
                  href="/services"
                  className="group grid grid-cols-[2.5rem_1fr_auto] items-baseline gap-x-4 border-b border-line py-6 md:grid-cols-[3.5rem_minmax(0,1fr)_minmax(0,1.3fr)_auto] md:py-8"
                >
                  <span className="font-mono text-xs text-faint transition-colors group-hover:text-accent-ink">0{i + 1}</span>
                  <span className="text-xl font-semibold tracking-[-0.02em] transition-transform duration-300 group-hover:translate-x-1.5 md:text-2xl">
                    {item.title}
                  </span>
                  <span className="col-start-2 mt-2 text-[0.9375rem] leading-relaxed text-muted md:col-start-3 md:mt-0">{item.body}</span>
                  <span className="col-start-3 row-start-1 text-faint transition-colors group-hover:text-brand md:col-start-4" aria-hidden="true">
                    <ArrowUpRight className="size-4 rotate-45" />
                  </span>
                </Link>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
