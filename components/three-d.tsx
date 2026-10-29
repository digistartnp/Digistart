"use client";

import { useEffect, useRef, useState, type PointerEvent, type ReactNode } from "react";
import Image, { type StaticImageData } from "next/image";
import {
  m,
  useAnimationFrame,
  useInView,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";
import { MARK_CURSOR, MARK_LINES } from "@/components/logo";
import { PhoneFrame } from "@/components/ui";

/* CSS 3D throughout — real depth on the GPU without shipping a WebGL engine. */

const spring = { stiffness: 140, damping: 18, mass: 0.6 };
export const AUTO_SLIDE_MS = 4200;

function useFinePointer() {
  const [fine, setFine] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(hover: hover) and (pointer: fine)");
    // eslint-disable-next-line react-hooks/set-state-in-effect -- read a media query once on mount
    setFine(mq.matches);
  }, []);
  return fine;
}

/**
 * Auto-advancing index for showcases. Always keeps sliding: picking a slide
 * jumps there and restarts the timer. Runs only while on screen, pauses while
 * hovered, and never runs with reduced motion.
 */
export function useAutoSlide(count: number) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount: 0.4 });
  const [active, setActive] = useState(0);
  const [hovering, setHovering] = useState(false);
  const running = !reduce && !hovering && inView;

  useEffect(() => {
    if (!running) return;
    const id = window.setTimeout(() => setActive((a) => (a + 1) % count), AUTO_SLIDE_MS);
    return () => window.clearTimeout(id);
  }, [active, running, count]);

  return {
    ref,
    active,
    running,
    showProgress: !reduce,
    choose: setActive,
    bind: {
      onPointerEnter: () => setHovering(true),
      onPointerLeave: () => setHovering(false),
    },
  };
}

/** Thin bar that fills while a slide is showing. */
export function SlideProgress({
  running,
  tone = "ink",
  full = false,
}: {
  running: boolean;
  tone?: "ink" | "paper";
  full?: boolean;
}) {
  return (
    <m.span
      key={String(running)}
      className={`absolute bottom-0 left-0 ${full ? "h-full" : "h-0.5"} ${tone === "ink" ? "bg-brand" : "bg-white"}`}
      initial={{ width: "0%" }}
      animate={{ width: running ? "100%" : "0%" }}
      transition={{ duration: running ? AUTO_SLIDE_MS / 1000 : 0, ease: "linear" }}
      aria-hidden="true"
    />
  );
}

/** Tilts its children toward the pointer. Inert on touch and with reduced motion. */
export function Tilt({
  children,
  className = "",
  max = 6,
}: {
  children: ReactNode;
  className?: string;
  max?: number;
}) {
  const reduce = useReducedMotion();
  const fine = useFinePointer();
  const px = useMotionValue(0);
  const py = useMotionValue(0);
  const rotateY = useSpring(useTransform(px, [-0.5, 0.5], [-max, max]), spring);
  const rotateX = useSpring(useTransform(py, [-0.5, 0.5], [max, -max]), spring);
  const active = fine && !reduce;

  const onMove = (e: PointerEvent<HTMLDivElement>) => {
    if (!active) return;
    const r = e.currentTarget.getBoundingClientRect();
    px.set((e.clientX - r.left) / r.width - 0.5);
    py.set((e.clientY - r.top) / r.height - 0.5);
  };

  return (
    <div
      className={className}
      style={{ perspective: 1400 }}
      onPointerMove={onMove}
      onPointerLeave={() => {
        px.set(0);
        py.set(0);
      }}
    >
      <m.div
        className="h-full"
        style={active ? { rotateX, rotateY, transformStyle: "preserve-3d" } : undefined}
      >
        {children}
      </m.div>
    </div>
  );
}

/** The logo, extruded, turning and floating on its own. Animates only while on screen. */
export function Mark3D({ className = "" }: { className?: string }) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref);
  const LAYERS = 14;
  const DEPTH = 1.5;
  const rotY = useMotionValue(-24);
  const rotX = useMotionValue(12);
  const lift = useMotionValue(0);
  const shadow = useTransform(lift, [-8, 8], [0.7, 1]);
  const t = useRef(0);

  useAnimationFrame((_, delta) => {
    if (reduce || !inView) return;
    t.current += delta / 1000;
    rotY.set(Math.sin(t.current * 0.55) * 34);
    rotX.set(10 + Math.sin(t.current * 0.4) * 7);
    lift.set(Math.sin(t.current * 0.9) * 8);
  });

  return (
    <div ref={ref} className={`pointer-events-none select-none ${className}`} role="img" aria-label="digistart logo in 3D">
      <div className="relative aspect-square" style={{ perspective: 900 }}>
        <m.div
          className="absolute inset-x-[18%] -bottom-[6%] h-[10%] rounded-[50%] bg-brand/25 blur-xl"
          style={{ scaleX: shadow, opacity: shadow }}
          aria-hidden="true"
        />
        <m.div
          className="absolute inset-0"
          style={{ rotateY: rotY, rotateX: rotX, y: lift, transformStyle: "preserve-3d" }}
        >
          {Array.from({ length: LAYERS }, (_, i) => {
            const front = i === 0;
            const k = 1 + (i / LAYERS) * 1.6; // navy getting lighter toward the back
            return (
              <svg
                key={i}
                viewBox="0 0 32 32"
                className="absolute inset-0 size-full"
                style={{ transform: `translateZ(${(LAYERS / 2 - i) * DEPTH}px)` }}
                aria-hidden="true"
              >
                <path
                  d={MARK_LINES}
                  fill={front ? "var(--color-ink)" : `rgb(${Math.round(11 * k + 8)},${Math.round(21 * k + 6)},${Math.round(51 * k + 4)})`}
                />
                <rect {...MARK_CURSOR} fill={front ? "var(--color-accent)" : i < 4 ? "#3550e6" : "#2a3fb4"} />
              </svg>
            );
          })}
        </m.div>
      </div>
    </div>
  );
}

type Step = { title: string; body: string; alt: string };

/** Minimal progress dots: the active one stretches and fills while it shows. */
export function SlideDots({
  count,
  active,
  running,
  showProgress,
  onChoose,
  labels,
  tone = "ink",
}: {
  count: number;
  active: number;
  running: boolean;
  showProgress: boolean;
  onChoose: (i: number) => void;
  labels: string[];
  tone?: "ink" | "paper";
}) {
  const dark = tone === "paper";
  return (
    <div className="mt-4 flex justify-center gap-1.5">
      {Array.from({ length: count }, (_, i) => (
        <button
          key={i}
          type="button"
          onClick={() => onChoose(i)}
          aria-label={labels[i]}
          aria-pressed={active === i}
          className="group flex h-6 cursor-pointer items-center px-0.5"
        >
          <span
            className={`relative block h-1.5 overflow-hidden rounded-full transition-[width,background-color] duration-300 ${
              active === i ? "w-7" : "w-1.5"
            } ${dark ? "bg-white/25 group-hover:bg-white/45" : "bg-ink/15 group-hover:bg-ink/30"}`}
          >
            {active === i ? (
              showProgress ? (
                <SlideProgress running={running} tone={tone} full />
              ) : (
                <span className={`absolute inset-0 ${dark ? "bg-white" : "bg-brand"}`} />
              )
            ) : null}
          </span>
        </button>
      ))}
    </div>
  );
}

/** Tech stack as an endless, auto-scrolling strip. Reduced motion gets a still list. */
export function StackRing({ items }: { items: string[] }) {
  return (
    <div className="stack-marquee relative overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_12%,#000_88%,transparent)]">
      <ul className="stack-marquee-track flex w-max gap-3">
        {[...items, ...items].map((item, i) => (
          <li
            key={`${item}-${i}`}
            aria-hidden={i >= items.length}
            className="rounded-full border border-line bg-paper px-4 py-1.5 font-mono text-sm whitespace-nowrap text-ink-soft shadow-[0_1px_2px_rgba(11,21,51,0.05)]"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

/** ResumeJP's job in one picture: what you type on the phone becomes the 履歴書 sheet. */
export function InputOutput({
  input,
  output,
  inputAlt,
  outputAlt,
}: {
  input: StaticImageData;
  output: StaticImageData;
  inputAlt: string;
  outputAlt: string;
}) {
  const reduce = useReducedMotion();
  const pop = { scale: 1.08, rotateY: 0, rotateX: 0, transition: { type: "spring" as const, stiffness: 260, damping: 18 } };
  const drift = (delay: number, d: number) =>
    reduce ? {} : { animate: { y: [0, -d, 0] }, transition: { duration: 6, delay, repeat: Infinity, ease: "easeInOut" as const } };

  return (
    <Tilt max={4}>
      <div
        className="relative aspect-[16/12]"
        style={{ perspective: 1200 }}
      >
        {/* Flow line from phone to paper, with a pulse travelling along it. */}
        <svg viewBox="0 0 100 75" preserveAspectRatio="none" className="absolute inset-0 size-full" aria-hidden="true">
          <path d="M30 40 C 40 40, 40 30, 50 30" fill="none" stroke="var(--color-accent)" strokeOpacity="0.35" strokeWidth="0.5" strokeDasharray="1.2 1.4" />
          <circle r="0.9" fill="var(--color-accent)" className="flow-dot" />
        </svg>

        <m.div
          className="absolute top-[9%] left-[6%] z-10 h-[82%] cursor-pointer"
          style={{ aspectRatio: "9 / 19.2", rotateY: 16 }}
          whileHover={pop}
          {...drift(0, 8)}
        >
          <PhoneFrame className="h-full">
            <Image src={input} alt={inputAlt} placeholder="blur" fill sizes="(min-width: 1024px) 200px, 34vw" className="object-cover object-top" />
          </PhoneFrame>
        </m.div>

        <m.div
          className="absolute top-[18%] right-[5%] w-[58%] cursor-pointer overflow-hidden rounded-md bg-paper shadow-[0_24px_50px_-18px_rgba(11,21,51,0.4)] ring-1 ring-line hover:z-20"
          style={{ rotateY: -18, rotateX: 6 }}
          whileHover={pop}
          {...drift(1.5, 10)}
        >
          <Image src={output} alt={outputAlt} placeholder="blur" sizes="(min-width: 1024px) 380px, 58vw" className="h-auto w-full" />
        </m.div>
      </div>
    </Tilt>
  );
}

/** Four screens fanned out. The spotlight lifts each one in turn; pointing at a phone pops it up. */
export function PhoneFan({ steps, shots }: { steps: Step[]; shots: StaticImageData[] }) {
  const count = shots.length;
  const { ref, active, running, showProgress, choose, bind } = useAutoSlide(count);
  const [hovered, setHovered] = useState<number | null>(null);
  const lift = hovered ?? active;
  const mid = (count - 1) / 2;

  return (
    <div ref={ref} {...bind}>
      <div
        className="relative aspect-[16/12] sm:aspect-[16/11]"
        style={{ perspective: 1400 }}
        onPointerLeave={() => setHovered(null)}
      >
        {shots.map((shot, i) => {
          const pos = i - mid; // -1.5 … 1.5
          const lifted = i === lift;
          return (
            <div
              key={i}
              className="pointer-events-none absolute inset-x-0 top-[14%] flex h-[70%] justify-center"
              style={{ zIndex: lifted ? 10 : 5 - Math.round(Math.abs(pos)) }}
            >
              <m.button
                type="button"
                onClick={() => choose(i)}
                onPointerEnter={() => setHovered(i)}
                aria-label={steps[i].title}
                aria-current={i === active ? "step" : undefined}
                className="pointer-events-auto h-full cursor-pointer"
                style={{ aspectRatio: "9 / 19.2" }}
                animate={{
                  x: `${pos * 78}%`,
                  y: lifted ? "-7%" : `${Math.abs(pos) * 4}%`,
                  rotateZ: lifted ? 0 : pos * 5,
                  rotateY: lifted ? 0 : pos * -12,
                  scale: lifted ? 1.14 : 0.92,
                  opacity: lifted ? 1 : 0.82,
                }}
                transition={{ type: "spring", stiffness: 220, damping: 20 }}
              >
                <PhoneFrame
                  className={`h-full transition-shadow duration-300 ${
                    lifted ? "shadow-[0_30px_60px_-20px_rgba(48,70,232,0.5)]" : ""
                  }`}
                >
                  <Image src={shot} alt={steps[i].alt} placeholder="blur" fill sizes="(min-width: 1024px) 170px, 24vw" className="object-cover object-top" />
                </PhoneFrame>
              </m.button>
            </div>
          );
        })}
      </div>
      <SlideDots
        count={count}
        active={active}
        running={running}
        showProgress={showProgress}
        onChoose={choose}
        labels={steps.map((s) => s.title)}
      />
    </div>
  );
}
