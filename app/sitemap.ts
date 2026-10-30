import type { MetadataRoute } from "next";
import { LEGAL_UPDATED } from "@/lib/legal";

const siteUrl = "https://www.digistartjp.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: siteUrl, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    ...["products", "work", "services", "about", "contact"].map((path) => ({
      url: `${siteUrl}/${path}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: path === "contact" ? 0.6 : 0.8,
    })),
    { url: `${siteUrl}/privacy`, lastModified: new Date(LEGAL_UPDATED), changeFrequency: "yearly", priority: 0.3 },
    { url: `${siteUrl}/terms`, lastModified: new Date(LEGAL_UPDATED), changeFrequency: "yearly", priority: 0.3 },
  ];
}
