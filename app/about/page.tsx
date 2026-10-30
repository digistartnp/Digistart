import type { Metadata } from "next";
import { AboutPage } from "@/components/pages";

export const metadata: Metadata = {
  title: "About",
  description: "DIGIスタート is a small product studio working between Japan and Nepal: private by default, bilingual from day one, fast on any phone.",
  alternates: { canonical: "/about" },
};

export default function Page() {
  return <AboutPage />;
}
