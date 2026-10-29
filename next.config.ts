import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },
  /* The site is a single page now; keep old URLs working. */
  async redirects() {
    return [
      { source: "/about", destination: "/#approach", permanent: true },
      { source: "/services", destination: "/#services", permanent: true },
      { source: "/contact", destination: "/#contact", permanent: true },
    ];
  },
};

export default nextConfig;
