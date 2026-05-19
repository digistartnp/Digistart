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
    ],
  },
};

export default nextConfig;
