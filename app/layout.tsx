import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { Inter, JetBrains_Mono, Noto_Sans_JP, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/providers";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";
import { links } from "@/lib/copy";

/* Variable fonts: one file per family covers every weight we use. */
const display = Space_Grotesk({ subsets: ["latin"], variable: "--font-display-latin", display: "swap" });
const body = Inter({ subsets: ["latin"], variable: "--font-body-latin", display: "swap" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono-latin", display: "swap", preload: false });
/* Japanese glyphs are served in unicode-range slices on demand, so don't preload. */
const notoJP = Noto_Sans_JP({ subsets: ["latin"], variable: "--font-jp", display: "swap", preload: false });

const siteUrl = "https://www.digistartjp.com";
const title = "DIGIスタート — Software that makes life in Japan simpler";
const description =
  "DIGIスタート is a product studio in Japan and Nepal. We build ResumeJP and VisaTomo — free, bilingual tools for Japanese resumes (履歴書) and visa forms (在留期間更新) — and build web apps and SaaS products for teams.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: title, template: "%s | DIGIスタート" },
  description,
  applicationName: "DIGIスタート",
  keywords: [
    "DIGIスタート",
    "digistart",
    "product studio Japan",
    "software company Japan Nepal",
    "ResumeJP",
    "VisaTomo",
    "Japanese resume builder",
    "履歴書 作成",
    "visa renewal form Japan",
    "在留期間更新 申請書",
    "SaaS development Japan",
    "Web アプリ開発",
  ],
  authors: [{ name: "DIGIスタート", url: siteUrl }],
  creator: "DIGIスタート",
  publisher: "DIGIスタート",
  alternates: { canonical: "/" },
  formatDetection: { telephone: false, address: false, email: false },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
  category: "technology",
  openGraph: {
    title,
    description,
    url: siteUrl,
    siteName: "DIGIスタート",
    type: "website",
    locale: "en_US",
    alternateLocale: ["ja_JP"],
  },
  twitter: { card: "summary_large_image", title, description },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: "DIGIスタート",
      alternateName: ["digistart", "DIGI Start"],
      url: siteUrl,
      logo: `${siteUrl}/icon.svg`,
      email: links.email,
      description,
      areaServed: ["JP", "NP"],
      knowsLanguage: ["en", "ja", "ne"],
      sameAs: [links.instagram, links.facebook, links.linkedin],
      contactPoint: { "@type": "ContactPoint", email: links.email, contactType: "customer support", availableLanguage: ["English", "Japanese", "Nepali"] },
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "DIGIスタート",
      inLanguage: ["en", "ja"],
      publisher: { "@id": `${siteUrl}/#organization` },
    },
    ...[
      { name: "ResumeJP", url: links.resumejp, category: "BusinessApplication", about: "Japanese resume (履歴書) builder" },
      { name: "VisaTomo", url: links.visatomo, category: "UtilitiesApplication", about: "Japan visa application forms in plain English" },
    ].map((app) => ({
      "@type": "WebApplication",
      name: app.name,
      url: app.url,
      description: app.about,
      applicationCategory: app.category,
      operatingSystem: "Web",
      inLanguage: ["en", "ja"],
      offers: { "@type": "Offer", price: "0", priceCurrency: "JPY" },
      creator: { "@id": `${siteUrl}/#organization` },
    })),
  ],
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${mono.variable} ${notoJP.variable} antialiased`}>
      <body className="min-h-dvh">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <Providers>
          <SiteHeader />
          <main id="main">{children}</main>
          <SiteFooter />
        </Providers>
      </body>
    </html>
  );
}
