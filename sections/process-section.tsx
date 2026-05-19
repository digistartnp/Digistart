import Container from "@/components/container";
import FadeIn from "@/components/fade-in";
import SectionHeading from "@/components/section-heading";
import { processSteps } from "@/data/process";

export default function ProcessSection() {
  return (
    <section className="bg-[#f7f9fc] py-20 sm:py-24">
      <Container className="space-y-12">
        <SectionHeading
          eyebrow="Process"
          title="A refined workflow that keeps teams aligned"
          description="Our delivery model ensures clarity, speed, and precision at every stage of the build."
        />
        <div className="grid gap-6 lg:grid-cols-5">
          {processSteps.map((step, index) => (
            <FadeIn key={step.title} delay={index * 0.04}>
              <div className="h-full rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <p className="mt-4 text-base font-semibold text-slate-950">
                  {step.title}
                </p>
                <p className="mt-2 text-sm text-slate-600">
                  {step.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
