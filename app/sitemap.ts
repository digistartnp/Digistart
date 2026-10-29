import type { MetadataRoute } from "next";
import { LEGAL_UPDATED } from "@/lib/legal";

const siteUrl = "https://www.digistartjp.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: siteUrl, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${siteUrl}/privacy`, lastModified: new Date(LEGAL_UPDATED), changeFrequency: "yearly", priority: 0.3 },
    { url: `${siteUrl}/terms`, lastModified: new Date(LEGAL_UPDATED), changeFrequency: "yearly", priority: 0.3 },
  ];
}
