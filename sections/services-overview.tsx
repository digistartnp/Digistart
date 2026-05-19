import Link from "next/link";
import Container from "@/components/container";
import FadeIn from "@/components/fade-in";
import SectionHeading from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { services } from "@/data/services";

export default function ServicesOverview() {
  return (
    <section className="bg-[#f7f9fc] py-20 sm:py-24">
      <Container className="space-y-12">
        <SectionHeading
          eyebrow="Services"
          title="Full-service engineering for modern companies"
          description="From frontend experience to backend architecture, we deliver complete digital solutions tailored to your market, timeline, and growth goals."
        />
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => (
            <FadeIn key={service.id} delay={index * 0.05}>
              <Card className="h-full border-slate-200/70 bg-white shadow-sm">
                <CardHeader className="space-y-4">
                  <service.icon className="h-6 w-6 text-primary" />
                  <div>
                    <p className="heading-text text-lg font-semibold text-slate-950">
                      {service.title}
                    </p>
                    <p className="text-sm text-slate-600">
                      {service.shortDescription}
                    </p>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                    Core stack
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {service.stack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-600"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </FadeIn>
          ))}
        </div>
        <div>
          <Button size="lg" asChild>
            <Link href="/services">See full service breakdown</Link>
          </Button>
        </div>
      </Container>
    </section>
  );
}
