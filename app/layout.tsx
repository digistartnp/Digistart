import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Noto_Sans_JP, Plus_Jakarta_Sans, Sora } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/components/digistart/language-provider";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import PageTransition from "@/components/page-transition";
import ScrollProgress from "@/components/digistart/scroll-progress";
import CursorGlow from "@/components/digistart/cursor-glow";
import ScrollReset from "@/components/digistart/scroll-reset";

const fontSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const fontHeading = Sora({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const fontJP = Noto_Sans_JP({
  subsets: ["latin"],
  variable: "--font-jp",
  display: "swap",
});

const siteUrl = "https://www.digistartjp.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  icons: {
    icon: "/images/logo.png",
    shortcut: "/images/logo.png",
    apple: "/images/logo.png",
  },
  title: {
    default:
      "DIGIスタート — Web Design & Digital Transformation in Japan | Start Smart. Start Digital.",
    template: "%s | DIGIスタート",
  },
  description:
    "DIGIスタート builds fast, bilingual (English / 日本語) websites for restaurants, schools, and small businesses in Japan — plus SEO, Google Maps optimization, QR menus, and social media support.",
  keywords: [
    "web design Japan",
    "website development Tokyo",
    "bilingual website Japanese English",
    "多言語ウェブサイト制作",
    "ホームページ制作 日本",
    "restaurant website Japan",
    "QR code digital menu",
    "Google Maps optimization",
    "MEO対策",
    "digital transformation Japan",
    "SNS運用代行",
    "DIGIスタート",
  ],
  applicationName: "DIGIスタート",
  authors: [{ name: "DIGIスタート", url: siteUrl }],
  creator: "DIGIスタート",
  publisher: "DIGIスタート",
  category: "Web Design & Development",
  alternates: {
    canonical: "/",
    languages: {
      en: "/",
      ja: "/",
      "x-default": "/",
    },
  },
  formatDetection: { telephone: false, address: false, email: false },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "DIGIスタート — Web Design & Digital Transformation in Japan",
    description:
      "Fast, bilingual websites for restaurants, schools, and small businesses in Japan — plus SEO, Google Maps optimization, QR menus, and social media support.",
    url: siteUrl,
    siteName: "DIGIスタート",
    type: "website",
    locale: "en_US",
    alternateLocale: ["ja_JP"],
    images: [
      {
        url: "/images/logo.png",
        width: 224,
        height: 216,
        alt: "DIGIスタート",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DIGIスタート — Web Design & Digital Transformation in Japan",
    description:
      "Bilingual websites, SEO, Google Maps optimization, and social media for businesses in Japan.",
    images: ["/images/logo.png"],
  },
};

/* Structured data — one graph so Organization and WebSite can reference each other. */
const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfessionalService",
      "@id": `${siteUrl}/#organization`,
      name: "DIGIスタート",
      alternateName: ["DIGI Start", "Digistart"],
      url: siteUrl,
      logo: `${siteUrl}/images/logo.png`,
      image: `${siteUrl}/images/logo.png`,
      email: "digistartnp@gmail.com",
      description:
        "Web design, development, and digital transformation studio building bilingual websites for businesses in Japan.",
      slogan: "Start Smart. Start Digital.",
      areaServed: [
        { "@type": "Country", name: "Japan" },
        { "@type": "Country", name: "Nepal" },
      ],
      availableLanguage: ["en", "ja", "ne"],
      knowsLanguage: ["en", "ja", "ne"],
      sameAs: [
        "https://www.facebook.com/profile.php?id=61576693414774",
        "https://www.instagram.com/digistartjp/",
        "https://www.linkedin.com/in/digi-start-2583793b9/",
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Services",
        itemListElement: [
          "Website Design & Development",
          "Map Engine Optimization (MEO)",
          "QR Code Digital Menus",
          "Digital Transformation",
          "Social Media Integration",
          "Advertising",
        ].map((name) => ({
          "@type": "Offer",
          itemOffered: { "@type": "Service", name },
        })),
      },
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "DIGIスタート",
      inLanguage: ["en", "ja"],
      publisher: { "@id": `${siteUrl}/#organization` },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fontSans.variable} ${fontHeading.variable} ${fontJP.variable} h-full scroll-smooth antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="min-h-screen">
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <ScrollReset />
        <CursorGlow />
        <ScrollProgress />
        <LanguageProvider>
          <Navbar />
          <PageTransition>
            <main id="main" className="flex-1">
            {children}
          </main>
          </PageTransition>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
