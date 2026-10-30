import type { Metadata } from "next";
import { WorkPage } from "@/components/pages";

export const metadata: Metadata = {
  title: "Work — Websites we've built",
  description: "Bilingual websites by DIGIスタート for Mother India Kyoto, Akarui Pokhara and Sagarmatha — restaurants, schools and companies in Japan and Nepal.",
  alternates: { canonical: "/work" },
};

export default function Page() {
  return <WorkPage />;
}
