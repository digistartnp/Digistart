"use client";

import { motion } from "framer-motion";

const items = [
  "React / Next.js", "Node.js", "PostgreSQL", "TypeScript",
  "Tailwind CSS", "Framer Motion", "Vercel", "Figma",
  "API Architecture", "SEO & Performance", "UI/UX Design", "Bilingual EN · JP",
];

function Track({ reverse }: { reverse?: boolean }) {
  const doubled = [...items, ...items];
  return (
    <motion.div
      className="marquee-track"
      animate={{ x: reverse ? ["0%", "50%"] : ["0%", "-50%"] }}
      transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
    >
      {doubled.map((item, i) => (
        <span key={i} className="marquee-item">
          <span className="marquee-dot" />
          {item}
        </span>
      ))}
    </motion.div>
  );
}

export default function MarqueeTicker() {
  return (
    <div className="marquee-section">
      <div className="marquee-fade-left" />
      <div className="marquee-fade-right" />
      <div className="marquee-row">
        <Track />
      </div>
      <div className="marquee-row" style={{ marginTop: 10 }}>
        <Track reverse />
      </div>
    </div>
  );
}
