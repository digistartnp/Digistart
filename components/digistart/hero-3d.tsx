"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useSpring, useTransform } from "framer-motion";

/* ── Orbital ring ───────────────────────────────────────────── */
function OrbitalRing({
  radius,
  duration,
  reverse,
  dotColor,
  dotSize = 8,
  opacity = 0.6,
}: {
  radius: number;
  duration: number;
  reverse?: boolean;
  dotColor: string;
  dotSize?: number;
  opacity?: number;
}) {
  return (
    <div
      className="orbital-wrapper"
      style={{ width: radius * 2, height: radius * 2 }}
    >
      <motion.div
        className="orbital-track"
        style={{ width: "100%", height: "100%", borderRadius: "50%" }}
        animate={{ rotate: reverse ? -360 : 360 }}
        transition={{ duration, repeat: Infinity, ease: "linear" }}
      >
        <div
          style={{
            position: "absolute",
            top: -dotSize / 2,
            left: "50%",
            transform: "translateX(-50%)",
            width: dotSize,
            height: dotSize,
            borderRadius: "50%",
            background: dotColor,
            opacity,
            boxShadow: `0 0 ${dotSize * 2}px ${dotSize}px ${dotColor}`,
          }}
        />
      </motion.div>
    </div>
  );
}

/* ── Floating metric chip ───────────────────────────────────── */
function MetricChip({
  label,
  value,
  icon,
  delay,
  x,
  y,
}: {
  label: string;
  value: string;
  icon: string;
  delay: number;
  x: string;
  y: string;
}) {
  return (
    <motion.div
      className="metric-chip"
      style={{ position: "absolute", left: x, top: y }}
      initial={{ opacity: 0, scale: 0.7, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: [0, -6, 0] }}
      transition={{
        opacity: { delay, duration: 0.5 },
        scale: { delay, duration: 0.5 },
        y: { delay: delay + 0.5, duration: 3 + delay * 0.5, repeat: Infinity, ease: "easeInOut" },
      }}
    >
      <span className="mc-icon">{icon}</span>
      <div>
        <div className="mc-val">{value}</div>
        <div className="mc-label">{label}</div>
      </div>
    </motion.div>
  );
}

/* ── Main 3D card scene ─────────────────────────────────────── */
export default function Hero3D() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [bounds, setBounds] = useState({ cx: 0, cy: 0 });

  const rawX = useSpring(0, { stiffness: 60, damping: 18 });
  const rawY = useSpring(0, { stiffness: 60, damping: 18 });

  const rotateX = useTransform(rawY, [-1, 1], [10, -10]);
  const rotateY = useTransform(rawX, [-1, 1], [-10, 10]);

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
    const dx = (e.clientX - bounds.cx) / (containerRef.current!.offsetWidth / 2);
    const dy = (e.clientY - bounds.cy) / (containerRef.current!.offsetHeight / 2);
    rawX.set(dx);
    rawY.set(dy);
  };

  const handleMouseLeave = () => {
    rawX.set(0);
    rawY.set(0);
  };

  return (
    <div
      ref={containerRef}
      className="hero3d-scene"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Orbital rings */}
      <div className="orbitals-center">
        <OrbitalRing radius={140} duration={8}  dotColor="#0ea5e9" dotSize={10} opacity={0.9} />
        <OrbitalRing radius={190} duration={14} dotColor="#22d3ee" dotSize={7}  opacity={0.7} reverse />
        <OrbitalRing radius={240} duration={20} dotColor="#38bdf8" dotSize={5}  opacity={0.5} />
      </div>

      {/* 3D card */}
      <motion.div
        className="hero3d-card"
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        initial={{ opacity: 0, scale: 0.85, y: 40 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* Card inner layers for depth */}
        <motion.div
          className="card-layer card-layer-back"
          style={{ transform: "translateZ(-24px) scale(0.94)" }}
        />
        <motion.div
          className="card-layer card-layer-mid"
          style={{ transform: "translateZ(-12px) scale(0.97)" }}
        />

        {/* Main card face */}
        <div className="card-face">
          <div className="card-top-bar">
            <div className="card-dot red" />
            <div className="card-dot yellow" />
            <div className="card-dot green" />
            <span className="card-top-label">digistartjp.com</span>
          </div>

          <div className="card-kpi-row">
            {[
              { label: "Launched", val: "30+", up: true },
              { label: "Satisfied", val: "96%", up: true },
              { label: "Languages", val: "3", up: true },
            ].map((k) => (
              <div key={k.label} className="card-kpi">
                <div className="kpi-val">
                  {k.val}
                  <span className="kpi-arrow up">↑</span>
                </div>
                <div className="kpi-label">{k.label}</div>
              </div>
            ))}
          </div>

          {/* Animated bar chart */}
          <div className="card-chart">
            {[55, 70, 45, 90, 60, 85, 75].map((h, i) => (
              <motion.div
                key={i}
                className="chart-bar"
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                transition={{ delay: 0.6 + i * 0.07, duration: 0.5, ease: "easeOut" }}
                style={{ height: `${h}%`, transformOrigin: "bottom" }}
              />
            ))}
          </div>

          <div className="card-bottom">
            <div className="pulse-dot" />
            <span>digistartjp.com · Live</span>
          </div>
        </div>
      </motion.div>

      {/* Floating chips — real site stats */}
      <MetricChip label="Performance lift" value="+85%"   icon="📈" delay={0.9}  x="2%"   y="4%" />
      <MetricChip label="Conversion gain"  value="3x"     icon="⚡" delay={1.1}  x="60%"  y="2%" />
      <MetricChip label="Core users"       value="2.4k+"  icon="🚀" delay={1.3}  x="2%"   y="80%" />
      <MetricChip label="JP · NP · Global" value="3 mkts" icon="🌏" delay={1.5}  x="60%"  y="82%" />
    </div>
  );
}
