import type { Metadata } from "next";
import LegalPage from "@/components/legal-page";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "The terms that apply to using the DIGIスタート website.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return <LegalPage kind="terms" />;
}
