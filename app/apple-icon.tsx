import { ImageResponse } from "next/og";
import { MARK_CURSOR, MARK_LINES } from "@/components/logo";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0b1533",
        }}
      >
        <svg width="118" height="118" viewBox="0 0 32 32">
          <path d={MARK_LINES} fill="#ffffff" />
          <rect {...MARK_CURSOR} fill="#4361ff" />
        </svg>
      </div>
    ),
    size
  );
}
