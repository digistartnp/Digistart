import Hero from "@/components/sections/hero";
import Products from "@/components/sections/products";
import Sarathi from "@/components/sections/sarathi";
import Approach from "@/components/sections/approach";
import Services from "@/components/sections/services";
import Faq from "@/components/sections/faq";
import Contact from "@/components/sections/contact";
import ScrollRail from "@/components/scroll-rail";
import { copy } from "@/lib/copy";

/* FAQ rich results: mirrors the questions rendered in the FAQ section. */
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: copy.en.faq.items.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  })),
};

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <ScrollRail />
      <Hero />
      <Products />
      <Sarathi />
      <Approach />
      <Services />
      <Faq />
      <Contact />
    </>
  );
}
