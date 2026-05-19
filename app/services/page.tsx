import type { Metadata } from "next";
import Link from "next/link";
import RevealProvider from "@/components/digistart/reveal-provider";
import { ServicesSection } from "@/components/digistart/sections";
import Container from "@/components/container";
import SectionHeading from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore Digistart services including frontend development, backend architecture, full stack builds, and UX design.",
};

export default function ServicesPage() {
  const defaultValue = services[0]?.id ?? "";

  return (
    <div className="bg-white">
      <RevealProvider>
        <ServicesSection />
      </RevealProvider>

      <section className="bg-white py-20">
        <Container className="space-y-10">
          <SectionHeading
            eyebrow="Projects"
            title="Services already delivered"
            description="Two recent projects showcasing our work across Japan and Nepal."
          />
          <div className="grid gap-6 md:grid-cols-2">
            <Card className="border-slate-200 bg-white">
              <CardContent className="space-y-4 p-6">
                <img
                  src="https://www.akaruipokharaedu.com/assets/gallery/LOGO/Akarui%20Logo.webp"
                  alt="Akarui Pokhara Edu logo"
                  className="h-11 w-11 rounded-xl border border-slate-200 bg-white p-2"
                  loading="lazy"
                />
                <p className="heading-text text-lg font-semibold text-slate-950">
                  Akarui Pokhara Edu
                </p>
                <p className="text-sm text-slate-600">
                  Educational service platform with streamlined enrollment and
                  multilingual messaging.
                </p>
                <Button asChild>
                  <Link
                    href="https://www.akaruipokharaedu.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Visit site
                  </Link>
                </Button>
              </CardContent>
            </Card>
            <Card className="border-slate-200 bg-white">
              <CardContent className="space-y-4 p-6">
                <img
                  src="https://mustangasian-jp.online/images/logo.png"
                  alt="Mustang Asian JP logo"
                  className="h-11 w-11 rounded-xl border border-slate-200 bg-white p-2"
                  loading="lazy"
                />
                <p className="heading-text text-lg font-semibold text-slate-950">
                  Mustang Asian JP
                </p>
                <p className="text-sm text-slate-600">
                  Restaurant experience with modern branding and digital menu
                  flows.
                </p>
                <Button asChild>
                  <Link
                    href="https://mustangasian-jp.online/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Visit site
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </Container>
      </section>

      <section className="border-b border-slate-200/70 bg-[#f7f9fc] py-20">
        <Container className="space-y-10">
          <SectionHeading
            eyebrow="Services"
            title="Engineering capabilities built for modern SaaS teams"
            description="We deliver end-to-end digital products with an emphasis on performance, usability, and business impact."
          />
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <Tabs defaultValue={defaultValue} className="w-full">
              <TabsList className="flex h-auto flex-wrap justify-start gap-2 bg-transparent p-0">
                {services.map((service) => (
                  <TabsTrigger
                    key={service.id}
                    value={service.id}
                    className="rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-600 data-[state=active]:border-primary data-[state=active]:text-primary"
                  >
                    {service.title}
                  </TabsTrigger>
                ))}
              </TabsList>
              {services.map((service) => (
                <TabsContent key={service.id} value={service.id} className="mt-8">
                  <div className="grid gap-8 lg:grid-cols-[1.2fr_1fr]">
                    <div className="space-y-6">
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                          {service.title}
                        </p>
                        <h2 className="heading-text mt-3 text-3xl font-semibold text-slate-950">
                          {service.shortDescription}
                        </h2>
                        <p className="mt-4 text-base text-slate-600">
                          {service.description}
                        </p>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-slate-950">
                          Business value
                        </p>
                        <p className="mt-2 text-sm text-slate-600">
                          {service.value}
                        </p>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-slate-950">
                          Benefits
                        </p>
                        <ul className="mt-3 space-y-2 text-sm text-slate-600">
                          {service.benefits.map((benefit) => (
                            <li key={benefit}>• {benefit}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <Card className="h-fit border-slate-200 bg-slate-50">
                      <CardContent className="space-y-6 p-6">
                        <div>
                          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                            Core tech stack
                          </p>
                          <div className="mt-3 flex flex-wrap gap-2">
                            {service.stack.map((tech) => (
                              <span
                                key={tech}
                                className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-600"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                        <div className="rounded-2xl border border-slate-200 bg-white p-4 text-sm text-slate-600">
                          <p className="font-semibold text-slate-950">
                            Delivery focus
                          </p>
                          <p className="mt-2">
                            We align every sprint to measurable business goals so
                            your investment turns into revenue, retention, or
                            operational efficiency.
                          </p>
                        </div>
                        <Button asChild>
                          <Link href="/contact">Plan this service</Link>
                        </Button>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </Container>
      </section>
    </div>
  );
}
