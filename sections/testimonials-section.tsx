import Container from "@/components/container";
import FadeIn from "@/components/fade-in";
import SectionHeading from "@/components/section-heading";
import { Card, CardContent } from "@/components/ui/card";
import { testimonials } from "@/data/testimonials";

export default function TestimonialsSection() {
  return (
    <section className="bg-[#f7f9fc] py-20 sm:py-24">
      <Container className="space-y-12">
        <SectionHeading
          eyebrow="Testimonials"
          title="Trusted by teams that ship at scale"
          description="We build long-term partnerships grounded in reliability, craft, and measurable impact."
        />
        <div className="grid gap-6 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <FadeIn key={testimonial.name} delay={index * 0.05}>
              <Card className="h-full border-slate-200 bg-white">
                <CardContent className="space-y-4 p-6">
                  <p className="text-sm text-slate-700">“{testimonial.quote}”</p>
                  <div>
                    <p className="text-sm font-semibold text-slate-950">
                      {testimonial.name}
                    </p>
                    <p className="text-xs text-slate-500">
                      {testimonial.title}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
