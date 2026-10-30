"use client";

import { m, useScroll, useSpring } from "framer-motion";

/* A thin reading-progress line across the top of every page. */
export default function ScrollRail() {
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 140, damping: 26, mass: 0.4 });

  return (
    <m.div
      className="fixed inset-x-0 top-0 z-50 h-[2px] origin-left bg-linear-to-r from-brand to-accent"
      style={{ scaleX: progress }}
      aria-hidden="true"
    />
  );
}
