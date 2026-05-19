import { CheckCircle2 } from "lucide-react";
import Container from "@/components/container";
import FadeIn from "@/components/fade-in";
import SectionHeading from "@/components/section-heading";

const pillars = [
  {
    title: "Senior-led delivery",
    description:
      "Every engagement is guided by senior engineers and designers focused on outcomes, not just output.",
  },
  {
    title: "SaaS-grade quality",
    description:
      "We build with performance, scalability, and accessibility baked into the core architecture.",
  },
  {
    title: "Transparent collaboration",
    description:
      "Weekly checkpoints, proactive risk management, and a clear roadmap keep teams aligned.",
  },
];

const trustSignals = [
  "Average 2.4x improvement in conversion for redesign clients",
  "Core Web Vitals score consistently above 90",
  "Launch-ready documentation for internal teams",
  "Dedicated post-launch optimization sprints",
];

export default function WhyChooseUs() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <Container className="space-y-12">
        <SectionHeading
          eyebrow="Why Digistart"
          title="A partner built for ambitious product teams"
          description="We combine strategic design, engineering excellence, and operational clarity to help you move faster without sacrificing quality."
        />
        <div className="grid gap-6 lg:grid-cols-3">
          {pillars.map((pillar, index) => (
            <FadeIn key={pillar.title} delay={index * 0.05}>
              <div className="glass-panel h-full rounded-3xl p-6">
                <p className="heading-text text-lg font-semibold text-slate-950">
                  {pillar.title}
                </p>
                <p className="mt-3 text-sm text-slate-600">
                  {pillar.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
        <FadeIn delay={0.15}>
          <div className="grid gap-4 rounded-3xl border border-slate-200 bg-slate-50 p-6 sm:grid-cols-2">
            {trustSignals.map((signal) => (
              <div key={signal} className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 text-primary" />
                <p className="text-sm text-slate-700">{signal}</p>
              </div>
            ))}
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
