"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, m, useReducedMotion } from "framer-motion";
import { useLanguage } from "@/components/providers";
import { PhoneFrame } from "@/components/ui";
import { Tilt, useAutoSlide } from "@/components/three-d";
import { MARK_CURSOR, MARK_LINES } from "@/components/logo";
import visaMobile from "@/assets/products/visatomo-mobile.jpg";
import resumePreview from "@/assets/products/resumejp-m-preview.jpg";
import sarathiHome from "@/assets/products/sarathi/elder_home.webp";

const ease = [0.22, 1, 0.36, 1] as const;

/* The rotating word and the phone in front move together: one glance says what we make. */
const scenes = [visaMobile, resumePreview, sarathiHome];

function RotatingWord({ word }: { word: string }) {
  return (
    <span className="relative inline-grid overflow-hidden pb-[0.08em] align-bottom whitespace-nowrap text-brand">
      <AnimatePresence mode="popLayout" initial={false}>
        <m.span
          key={word}
          className="col-start-1 row-start-1"
          initial={{ y: "100%", opacity: 0, rotateX: -60 }}
          animate={{ y: 0, opacity: 1, rotateX: 0 }}
          exit={{ y: "-100%", opacity: 0, rotateX: 60 }}
          transition={{ duration: 0.55, ease }}
        >
          {word}
        </m.span>
      </AnimatePresence>
      <m.span
        key={`${word}-line`}
        className="absolute bottom-0 left-0 h-[0.07em] w-full origin-left rounded-full bg-accent/40"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.7, delay: 0.25, ease }}
        aria-hidden="true"
      />
    </span>
  );
}

export default function Hero() {
  const { t, lang } = useLanguage();
  const reduce = useReducedMotion();
  const { ref, active } = useAutoSlide(scenes.length);
  const h = t.hero;

  return (
    <section id="top" className="relative isolate overflow-hidden bg-linear-to-b from-surface to-paper">
      <div className="container-x grid items-center gap-12 pt-14 pb-20 md:pt-20 md:pb-28 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-8">
        {/* Static on purpose: the headline is the LCP element and must paint immediately. */}
        <div>
          <h1 className="text-[2.35rem] leading-[1.08] font-semibold tracking-[-0.035em] text-ink sm:text-[3.2rem] lg:text-[3.5rem]">
            <span className="sr-only">{h.title}</span>
            <span aria-hidden="true" style={{ perspective: 600 }}>
              {lang === "ja" ? (
                <>
                  <RotatingWord word={h.words[active]} />
                  {h.tail}
                </>
              ) : (
                <>
                  <span className="sm:whitespace-nowrap">{h.lead}</span>
                  <br />
                  <RotatingWord word={h.words[active]} />
                  <br />
                  {h.tail}
                </>
              )}
              <span className="mark-cursor is-blinking ml-[0.1em] inline-block h-[0.72em] w-[0.32em] translate-y-[0.04em] rounded-[0.05em] bg-accent align-baseline" />
            </span>
          </h1>
          <p className="mt-6 max-w-lg text-[1.0625rem] leading-relaxed text-pretty text-muted">{h.sub}</p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link href="/products" className="btn btn-primary">
              {h.primary}
            </Link>
            <Link href="/work" className="btn btn-secondary">
              {t.home.workCta}
            </Link>
          </div>
        </div>

        <m.div
          ref={ref}
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1, ease }}
          className="relative mx-auto aspect-[1/1] w-full max-w-[560px]"
        >
          {/* The logo's three code lines, drawn huge as the backdrop. */}
          <svg viewBox="0 0 32 32" className="absolute inset-[4%] size-[92%]" aria-hidden="true">
            <path d={MARK_LINES} fill="var(--color-brand-soft)" />
            <rect {...MARK_CURSOR} fill="var(--color-accent)" opacity="0.16" className="mark-cursor is-blinking" />
          </svg>

          <Tilt max={5} className="absolute inset-0">
            <div className="relative size-full" style={{ perspective: 1300, transformStyle: "preserve-3d" }}>
              {scenes.map((shot, i) => {
                let offset = i - active;
                if (offset > 1) offset -= scenes.length;
                if (offset < -1) offset += scenes.length;
                const center = offset === 0;
                return (
                  <div
                    key={i}
                    className="absolute inset-y-[8%] inset-x-0 flex justify-center"
                    style={{ transformStyle: "preserve-3d", zIndex: center ? 3 : 1 }}
                  >
                    <m.div
                      className="h-full"
                      style={{ aspectRatio: "9 / 19.2" }}
                      animate={{
                        x: `${offset * 62}%`,
                        z: center ? 0 : -180,
                        rotateY: offset * -30,
                        opacity: center ? 1 : 0.55,
                        y: reduce ? 0 : center ? [0, -10, 0] : 0,
                      }}
                      transition={{
                        default: { type: "spring", stiffness: 110, damping: 20 },
                        y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
                      }}
                    >
                      <PhoneFrame className="h-full">
                        <Image
                          src={shot}
                          alt=""
                          placeholder="blur"
                          fill
                          priority={i === 0}
                          sizes="(min-width: 1024px) 240px, 42vw"
                          className="object-cover object-top"
                        />
                      </PhoneFrame>
                    </m.div>
                  </div>
                );
              })}

            </div>
          </Tilt>
        </m.div>
      </div>
    </section>
  );
}
