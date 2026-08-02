import type { Metadata } from "next";
import RevealProvider from "@/components/digistart/reveal-provider";
import { AboutSection } from "@/components/digistart/sections";
import Container from "@/components/container";
import SectionHeading from "@/components/section-heading";
import FadeIn from "@/components/fade-in";

export const metadata: Metadata = {
  title: "About — A Bilingual Web Studio Working in Japan",
  description:
    "DIGIスタート is a small web studio building bilingual (English / 日本語) websites and digital tools for restaurants, schools, and growing businesses in Japan.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About — A Bilingual Web Studio Working in Japan",
    description:
      "A small web studio building bilingual websites and digital tools for businesses in Japan.",
    url: "/about",
    type: "website",
  },
};

const values = [
  {
    title: "Precision",
    description:
      "We sweat the details so your platform feels reliable, premium, and effortless.",
  },
  {
    title: "Momentum",
    description:
      "We keep projects moving with clear milestones, rapid feedback loops, and focused execution.",
  },
  {
    title: "Partnership",
    description:
      "We collaborate deeply with your team to build long-term success, not just deliverables.",
  },
];

export default function AboutPage() {
  return (
    <div className="bg-white">
      <RevealProvider>
        <AboutSection />
      </RevealProvider>
      <section className="border-b border-slate-200/70 bg-[#f7f9fc] py-20">
        <Container className="space-y-10">
          <SectionHeading
            eyebrow="About"
            title="A dedicated team of builders and strategists"
            description="Digistart is a high-end IT and software agency helping modern businesses launch premium digital experiences."
          />
          <div className="grid gap-8 lg:grid-cols-[1.2fr_1fr]">
            <FadeIn>
              <div className="space-y-6 text-base text-slate-600">
                <p>
                  We started Digistart to bridge the gap between premium design
                  and production-grade engineering. Our team blends product
                  strategy, user experience, and modern development to build
                  platforms that perform.
                </p>
                <p>
                  Every engagement is structured to move fast with clarity. We
                  work alongside founders, product teams, and marketing leaders
                  to deliver measurable impact.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <div className="glass-panel rounded-3xl p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                  Vision
                </p>
                <p className="mt-3 text-lg font-semibold text-slate-950">
                  Build the most trusted digital delivery partner for growing
                  businesses in Asia.
                </p>
                <p className="mt-4 text-sm text-slate-600">
                  We believe in long-term partnerships grounded in measurable
                  outcomes, clear communication, and world-class quality.
                </p>
              </div>
            </FadeIn>
          </div>
        </Container>
      </section>

      <section className="bg-white py-20">
        <Container className="space-y-10">
          <SectionHeading
            eyebrow="Mission"
            title="Deliver high-performance software with premium craft"
            description="We design, build, and optimize platforms that help teams grow faster while maintaining reliability."
          />
          <div className="grid gap-6 lg:grid-cols-3">
            {values.map((value, index) => (
              <FadeIn key={value.title} delay={index * 0.05}>
                <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
                  <p className="heading-text text-lg font-semibold text-slate-950">
                    {value.title}
                  </p>
                  <p className="mt-3 text-sm text-slate-600">
                    {value.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
}
