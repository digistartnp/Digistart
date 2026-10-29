import type { Metadata } from "next";
import LegalPage from "@/components/legal-page";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How DIGIスタート collects, uses and protects personal information on digistartjp.com.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return <LegalPage kind="privacy" />;
}
