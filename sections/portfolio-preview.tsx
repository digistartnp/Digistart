import Container from "@/components/container";
import FadeIn from "@/components/fade-in";
import SectionHeading from "@/components/section-heading";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { portfolio } from "@/data/portfolio";

export default function PortfolioPreview() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <Container className="space-y-12">
        <SectionHeading
          eyebrow="Portfolio"
          title="Selected builds that drive measurable results"
          description="We focus on real business outcomes: conversion, retention, and operational efficiency."
        />
        <div className="grid gap-6 lg:grid-cols-3">
          {portfolio.map((project, index) => (
            <FadeIn key={project.name} delay={index * 0.05}>
              <Card className="h-full border-slate-200/70 bg-white shadow-sm">
                <CardHeader className="space-y-3">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                    {project.category}
                  </p>
                  <p className="heading-text text-lg font-semibold text-slate-950">
                    {project.name}
                  </p>
                  <p className="text-sm text-slate-600">{project.summary}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-sm font-medium text-slate-900">
                    {project.outcome}
                  </p>
                </CardContent>
              </Card>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
