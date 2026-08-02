import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.akaruipokharaedu.com",
      },
      {
        protocol: "https",
        hostname: "mustangasian-jp.online",
      },
      {
        protocol: "https",
        hostname: "motherindiakyoto.com",
      },
      {
        protocol: "https",
        hostname: "www.sagarmathagroupsjp.com",
      },
      {
        protocol: "https",
        hostname: "s0.wp.com",
      },
    ],
  },
};

export default nextConfig;
