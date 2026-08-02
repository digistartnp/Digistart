import type { Metadata } from "next";
import RevealProvider from "@/components/digistart/reveal-provider";
import { ContactSection } from "@/components/digistart/sections";
import Container from "@/components/container";
import SectionHeading from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact — Free Consultation in English or 日本語",
  description:
    "Tell us about your business and get a free consultation and tailored proposal for your website, MEO, or digital transformation project. English and Japanese welcome.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact — Free Consultation in English or 日本語",
    description:
      "Get a free consultation and tailored proposal for your website or digital project.",
    url: "/contact",
    type: "website",
  },
};

export default function ContactPage() {
  return (
    <div className="bg-white">
      <RevealProvider>
        <ContactSection />
      </RevealProvider>
      <section className="border-b border-slate-200/70 bg-[#f7f9fc] py-20">
        <Container className="space-y-10">
          <SectionHeading
            eyebrow="Contact"
            title="Let us plan your next digital experience"
            description="Share your goals and we will respond quickly with a tailored proposal and timeline."
          />
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
            <Card className="border-slate-200 bg-white">
              <CardContent className="space-y-6 p-6">
                <form className="space-y-5">
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <label className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                        Full name
                      </label>
                      <input
                        type="text"
                        placeholder="Your name"
                        className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-800 focus:border-primary focus:outline-none"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                        Email
                      </label>
                      <input
                        type="email"
                        placeholder="you@company.com"
                        className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-800 focus:border-primary focus:outline-none"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                      Project summary
                    </label>
                    <textarea
                      rows={5}
                      placeholder="Tell us about the product, goals, and timeline."
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-800 focus:border-primary focus:outline-none"
                    />
                  </div>
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <p className="text-xs text-slate-500">
                      We respond within 24 hours on business days.
                    </p>
                    <Button type="submit" size="lg">
                      Send inquiry
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
            <div className="space-y-6">
              <Card className="border-slate-200 bg-white">
                <CardContent className="space-y-4 p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                    Contact details
                  </p>
                  <div>
                    <p className="text-sm font-semibold text-slate-950">Email</p>
                    <p className="text-sm text-slate-600">
                      {siteConfig.contact.email}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-950">Phone</p>
                    <p className="text-sm text-slate-600">
                      {siteConfig.contact.phone}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-950">
                      Location
                    </p>
                    <p className="text-sm text-slate-600">
                      {siteConfig.contact.location}
                    </p>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-slate-200 bg-slate-950 text-white">
                <CardContent className="space-y-3 p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
                    Office hours
                  </p>
                  <p className="text-sm">
                    Monday to Friday, 10:00 - 19:00 JST. Remote strategy sessions
                    available worldwide.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
