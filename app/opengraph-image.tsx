import { ImageResponse } from "next/og";
import { MARK_CURSOR, MARK_LINES } from "@/components/logo";

export const alt = "digistart — Software that makes life in Japan simpler.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          background: "#ffffff",
          color: "#0b1533",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <svg width="72" height="72" viewBox="0 0 32 32">
            <path d={MARK_LINES} fill="#0b1533" />
            <rect {...MARK_CURSOR} fill="#4361ff" />
          </svg>
          <span style={{ fontSize: 48, fontWeight: 700, letterSpacing: -2 }}>digistart</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <span style={{ fontSize: 76, fontWeight: 700, letterSpacing: -3, lineHeight: 1.05, maxWidth: 940 }}>
            Software that makes life in Japan simpler.
          </span>
          <span style={{ fontSize: 30, color: "#5c5c5a" }}>ResumeJP · VisaTomo · Sarathi Connect</span>
        </div>
      </div>
    ),
    size
  );
}
