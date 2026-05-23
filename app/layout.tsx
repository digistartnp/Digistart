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

export const metadata: Metadata = {
  metadataBase: new URL("https://www.digistartjp.com"),
  icons: {
    icon: "/images/logo.png",
    shortcut: "/images/logo.png",
    apple: "/images/logo.png",
  },
  title: {
    default: "DIGIスタート | Start Smart. Start Digital.",
    template: "%s | DIGIスタート",
  },
  description:
    "Start smart. Start digital. DIGIスタート helps businesses launch modern websites, social media, and full digital transformation.",
  openGraph: {
    title: "DIGIスタート | Start Smart. Start Digital.",
    description:
      "We transform traditional businesses into digital powerhouses with websites, social media, and transformation support.",
    url: "https://www.digistartjp.com",
    siteName: "DIGIスタート",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DIGIスタート | Start Smart. Start Digital.",
    description:
      "Websites, social media, and digital transformation for modern businesses.",
  },
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
      <body className="min-h-screen">
        <CursorGlow />
        <ScrollProgress />
        <LanguageProvider>
          <Navbar />
          <PageTransition>
            <main className="flex-1">{children}</main>
          </PageTransition>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
