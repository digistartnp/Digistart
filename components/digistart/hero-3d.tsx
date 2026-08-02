"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useReducedMotion, useSpring, useTransform } from "framer-motion";

/* A quiet wireframe of a site in progress — no charts, no chips, one accent. */
const stats = [
  { value: "30+", label: "sites launched" },
  { value: "3", label: "languages" },
  { value: "96%", label: "would refer us" },
];

export default function Hero3D() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [bounds, setBounds] = useState({ cx: 0, cy: 0 });
  const reduceMotion = useReducedMotion();

  const rawX = useSpring(0, { stiffness: 60, damping: 20 });
  const rawY = useSpring(0, { stiffness: 60, damping: 20 });

  const rotateX = useTransform(rawY, [-1, 1], [4, -4]);
  const rotateY = useTransform(rawX, [-1, 1], [-5, 5]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const update = () => {
      const r = el.getBoundingClientRect();
      setBounds({ cx: r.left + r.width / 2, cy: r.top + r.height / 2 });
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    const el = containerRef.current;
    if (!el || reduceMotion) return;
    rawX.set((e.clientX - bounds.cx) / (el.offsetWidth / 2));
    rawY.set((e.clientY - bounds.cy) / (el.offsetHeight / 2));
  };

  const handleMouseLeave = () => {
    rawX.set(0);
    rawY.set(0);
  };

  const line = (delay: number, width: string) => ({
    initial: { width: 0 },
    animate: { width },
    transition: { delay, duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
  });

  return (
    <div
      ref={containerRef}
      className="hero3d-scene"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        className="hero3d-stack"
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* a second window peeking out behind — depth without glow */}
        <div className="hero3d-ghost" aria-hidden="true" />

        <div className="hero3d-window">
          <div className="win-bar">
            <span className="win-dot" />
            <span className="win-dot" />
            <span className="win-dot" />
            <span className="win-url">digistartjp.com</span>
          </div>

          <div className="win-body">
            <motion.span className="wf-bar wf-bar--title" {...line(0.35, "62%")} />
            <motion.span className="wf-bar" {...line(0.42, "88%")} />
            <motion.span className="wf-bar" {...line(0.49, "74%")} />
            <motion.span className="wf-bar wf-bar--accent" {...line(0.6, "104px")} />

            <div className="wf-grid" aria-hidden="true">
              {[0, 1, 2].map((i) => (
                <motion.span
                  key={i}
                  className="wf-tile"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.75 + i * 0.09, duration: 0.4 }}
                />
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      <motion.dl
        className="hero3d-stats"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 0.5 }}
      >
        {stats.map((s) => (
          <div key={s.label}>
            <dt>{s.value}</dt>
            <dd>{s.label}</dd>
          </div>
        ))}
      </motion.dl>
    </div>
  );
}
