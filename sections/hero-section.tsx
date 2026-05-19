import Link from "next/link";
import { ArrowUpRight, ShieldCheck, Sparkles, Zap } from "lucide-react";
import Container from "@/components/container";
import CtaDialog from "@/components/cta-dialog";
import FadeIn from "@/components/fade-in";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="absolute inset-0 hero-glow" aria-hidden="true" />
      <div className="absolute inset-0 grid-fade opacity-60" aria-hidden="true" />
      <Container className="relative py-20 sm:py-28">
        <div className="flex flex-col gap-14 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl space-y-8">
            <FadeIn>
              <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-slate-600 shadow-sm">
                <Sparkles className="h-4 w-4 text-primary" />
                High-end software agency
              </div>
            </FadeIn>
            <FadeIn delay={0.05}>
              <h1 className="heading-text text-4xl font-semibold text-slate-950 sm:text-5xl lg:text-6xl">
                We build premium digital platforms that scale with your
                business.
              </h1>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="text-lg text-slate-600 sm:text-xl">
                Digistart partners with ambitious teams to deliver modern
                frontends, reliable backend systems, and conversion-focused
                experiences. Every build is engineered for performance,
                scalability, and trust.
              </p>
            </FadeIn>
            <FadeIn delay={0.15}>
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                <CtaDialog />
                <Button size="lg" variant="outline" asChild>
                  <Link href="/services">
                    Explore services
                    <ArrowUpRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </FadeIn>
          </div>

          <FadeIn delay={0.2}>
            <div className="glass-panel glow-border w-full max-w-md rounded-3xl p-8">
              <div className="space-y-6">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                    Trusted delivery
                  </p>
                  <p className="mt-2 text-2xl font-semibold text-slate-950">
                    Product-ready in weeks, not quarters.
                  </p>
                </div>
                <div className="space-y-4">
                  {[
                    {
                      title: "Performance first",
                      description:
                        "Speed budgets, Core Web Vitals, and optimized pipelines from day one.",
                      icon: Zap,
                    },
                    {
                      title: "Enterprise-grade security",
                      description:
                        "Auth, data privacy, and compliance baked into every architecture.",
                      icon: ShieldCheck,
                    },
                  ].map((item) => (
                    <div
                      key={item.title}
                      className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white/70 p-4"
                    >
                      <item.icon className="mt-1 h-5 w-5 text-primary" />
                      <div>
                        <p className="text-sm font-semibold text-slate-950">
                          {item.title}
                        </p>
                        <p className="text-sm text-slate-600">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex items-center justify-between rounded-2xl bg-slate-50 px-4 py-3 text-sm text-slate-600">
                  <span>Average delivery cycle</span>
                  <span className="font-semibold text-slate-950">6-10 weeks</span>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
