import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "DIGIスタート — digistart",
    short_name: "digistart",
    description: "Software that makes life in Japan simpler.",
    start_url: "/",
    display: "browser",
    background_color: "#ffffff",
    theme_color: "#0b1533",
    icons: [
      { src: "/icon.svg", type: "image/svg+xml", sizes: "any" },
      { src: "/apple-icon", type: "image/png", sizes: "180x180" },
    ],
  };
}
