"use client";

import { useRef } from "react";
import Image, { type StaticImageData } from "next/image";
import { m, useInView, useReducedMotion } from "framer-motion";
import { useLanguage } from "@/components/providers";
import { ArrowUpRight, BrowserFrame, PhoneFrame, Reveal } from "@/components/ui";
import { Tilt } from "@/components/three-d";
import type { Copy } from "@/lib/copy";
import motherDesktop from "@/assets/work/mother-desktop.jpg";
import motherMobile from "@/assets/work/mother-mobile.jpg";
import akaruiDesktop from "@/assets/work/akarui-desktop.jpg";
import akaruiMobile from "@/assets/work/akarui-mobile.jpg";
import sagarDesktop from "@/assets/work/sagar-desktop.jpg";
import sagarMobile from "@/assets/work/sagar-mobile.jpg";

type ProjectKey = keyof Copy["work"]["items"];

/* Client websites, best first. Each keeps a hint of its own brand colour. */
export const projects: {
  key: ProjectKey;
  name: string;
  domain: string;
  href: string;
  color: string;
  desktop: StaticImageData;
  mobile: StaticImageData;
}[] = [
  {
    key: "mother",
    name: "Mother India Kyoto",
    domain: "motherindiakyoto.com",
    href: "https://motherindiakyoto.com/",
    color: "#d97706",
    desktop: motherDesktop,
    mobile: motherMobile,
  },
  {
    key: "akarui",
    name: "Akarui Pokhara",
    domain: "akaruipokharaedu.com",
    href: "https://www.akaruipokharaedu.com/",
    color: "#dc2626",
    desktop: akaruiDesktop,
    mobile: akaruiMobile,
  },
  {
    key: "sagar",
    name: "Sagarmatha",
    domain: "sagarmathagroupsjp.com",
    href: "https://www.sagarmathagroupsjp.com/",
    color: "#a8823f",
    desktop: sagarDesktop,
    mobile: sagarMobile,
  },
];

/* 16:10 window onto a full-page screenshot that scrolls itself: slowly down
   the page, a beat at the bottom, then back to the top. */
const WINDOW_RATIO = 10 / 16;

export function ScrollShot({ shot, alt, domain, sizes }: { shot: StaticImageData; alt: string; domain: string; sizes: string }) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount: 0.3 });
  const travel = (1 - (shot.width * WINDOW_RATIO) / shot.height) * 100;
  const running = inView && !reduce;

  return (
    <BrowserFrame domain={domain}>
      <div ref={ref} className="relative aspect-[16/10] overflow-hidden">
        <m.div
          animate={running ? { y: ["0%", `-${travel}%`, `-${travel}%`, "0%"] } : { y: "0%" }}
          transition={
            running
              ? { duration: 26, times: [0, 0.78, 0.86, 1], ease: "easeInOut", repeat: Infinity, repeatDelay: 1.2 }
              : { duration: 0.6 }
          }
        >
          <Image src={shot} alt={alt} placeholder="blur" sizes={sizes} className="h-auto w-full" />
        </m.div>
      </div>
    </BrowserFrame>
  );
}

function Devices({ project, copy, flip }: { project: (typeof projects)[number]; copy: Copy["work"]["items"][ProjectKey]; flip: boolean }) {
  const reduce = useReducedMotion();
  return (
    <Tilt max={4}>
      <div className="relative pb-[14%]" style={{ perspective: 1400 }}>
        <m.div
          className={`w-[90%] ${flip ? "mr-auto" : "ml-auto"}`}
          style={{ rotateY: flip ? 9 : -9, rotateX: 3 }}
        >
          <ScrollShot shot={project.desktop} alt={copy.alt} domain={project.domain} sizes="(min-width: 1024px) 600px, 90vw" />
        </m.div>
        <m.div
          className={`absolute bottom-0 z-10 w-[22%] ${flip ? "right-0" : "left-0"}`}
          style={{ rotateY: flip ? -12 : 12 }}
          animate={reduce ? undefined : { y: [0, -10, 0] }}
          transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <PhoneFrame className="w-full">
            <Image src={project.mobile} alt={copy.mobileAlt} placeholder="blur" fill sizes="(min-width: 1024px) 170px, 25vw" className="object-cover object-top" />
          </PhoneFrame>
        </m.div>
      </div>
    </Tilt>
  );
}

export default function Work() {
  const { t } = useLanguage();

  return (
    <section aria-label={t.work.label} className="pt-14 pb-24 md:pt-20 md:pb-32">
      <div className="container-x space-y-28 md:space-y-40">
        {projects.map((project, i) => {
          const c = t.work.items[project.key];
          const flip = i % 2 === 1;
          return (
            <article
              key={project.key}
              id={project.key}
              aria-labelledby={`${project.key}-name`}
              className={`grid scroll-mt-24 items-center gap-12 lg:gap-16 ${
                flip ? "lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)]" : "lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]"
              }`}
            >
              <Reveal className={flip ? "lg:order-2" : ""}>
                <p className="flex items-center gap-3 font-mono text-xs tracking-[0.12em] uppercase">
                  <span style={{ color: project.color }}>{String(i + 1).padStart(2, "0")}</span>
                  <span className="h-px w-8" style={{ background: project.color }} aria-hidden="true" />
                  <span className="text-faint">{c.category}</span>
                </p>
                <h2 id={`${project.key}-name`} className="mt-5 text-[2rem] leading-[1.08] font-semibold tracking-[-0.035em] md:text-[2.75rem]">
                  {project.name}
                </h2>
                <p className="mt-2 text-sm text-faint">{c.place}</p>
                <p className="mt-6 leading-relaxed text-pretty text-muted">{c.summary}</p>

                <h3 className="mt-8 font-mono text-xs tracking-[0.14em] text-faint uppercase">{t.work.built}</h3>
                <ul className="mt-4 space-y-3">
                  {c.points.map((point) => (
                    <li key={point} className="flex items-center gap-3 text-[0.9375rem] text-ink-soft">
                      <span className="h-3 w-1.5 shrink-0 rounded-[1px]" style={{ background: project.color }} aria-hidden="true" />
                      {point}
                    </li>
                  ))}
                </ul>

                <a href={project.href} target="_blank" rel="noopener noreferrer" className="btn btn-secondary mt-9">
                  {t.work.visit}
                  <span className="font-mono text-xs text-faint">{project.domain}</span>
                  <ArrowUpRight />
                </a>
              </Reveal>

              <Reveal delay={0.08} className={flip ? "lg:order-1" : ""}>
                <Devices project={project} copy={c} flip={flip} />
              </Reveal>
            </article>
          );
        })}
      </div>
    </section>
  );
}
