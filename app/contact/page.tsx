import type { Metadata } from "next";
import { ContactPage } from "@/components/pages";

export const metadata: Metadata = {
  title: "Contact",
  description: "Start a project or ask about ResumeJP, VisaTomo or Sarathi Connect. We reply personally in English, Japanese or Nepali.",
  alternates: { canonical: "/contact" },
};

export default function Page() {
  return <ContactPage />;
}
