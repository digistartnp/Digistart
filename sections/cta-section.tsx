import Link from "next/link";
import Container from "@/components/container";
import FadeIn from "@/components/fade-in";
import { Button } from "@/components/ui/button";

export default function CtaSection() {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-20 sm:py-24">
      <div className="absolute inset-0 hero-glow opacity-50" aria-hidden="true" />
      <Container className="relative">
        <FadeIn>
          <div className="flex flex-col gap-6 rounded-3xl border border-white/10 bg-white/5 p-10 text-white backdrop-blur-lg">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/70">
                Ready to build
              </p>
              <h2 className="heading-text mt-4 text-3xl font-semibold sm:text-4xl">
                Launch a premium digital experience with Digistart.
              </h2>
              <p className="mt-4 max-w-2xl text-sm text-white/70 sm:text-base">
                Tell us about your next initiative. We will respond quickly with
                a clear plan, timeline, and the right team to deliver.
              </p>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button size="lg" asChild>
                <Link href="/contact">Start a project</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/services">View capabilities</Link>
              </Button>
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
