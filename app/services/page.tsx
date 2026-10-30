import type { Metadata } from "next";
import { ServicesPage } from "@/components/pages";
import { copy } from "@/lib/copy";

export const metadata: Metadata = {
  title: "Services — Web apps, websites & product design",
  description:
    "Web apps, SaaS MVPs, bilingual websites with SEO and MEO, product design and maintenance — from the team behind ResumeJP and VisaTomo.",
  alternates: { canonical: "/services" },
};

/* FAQ rich results: mirrors the questions rendered on this page. */
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: copy.en.faq.items.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  })),
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <ServicesPage />
    </>
  );
}
