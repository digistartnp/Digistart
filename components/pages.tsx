"use client";

import PageHeader from "@/components/page-header";
import CtaBand from "@/components/cta-band";
import Products from "@/components/sections/products";
import Sarathi from "@/components/sections/sarathi";
import Work from "@/components/sections/work";
import Services from "@/components/sections/services";
import Faq from "@/components/sections/faq";
import Approach from "@/components/sections/approach";
import Contact from "@/components/sections/contact";
import { useLanguage } from "@/components/providers";

/* Inner pages: a shared header, the page's own sections, then the way forward. */

export function ProductsPage() {
  const { t } = useLanguage();
  return (
    <>
      <PageHeader path="products" title={t.products.title} sub={t.products.sub} />
      <Products />
      <Sarathi />
    </>
  );
}

export function WorkPage() {
  const { t } = useLanguage();
  return (
    <>
      <PageHeader path="work" title={t.work.title} sub={t.work.sub} />
      <Work />
      <CtaBand />
    </>
  );
}

export function ServicesPage() {
  const { t } = useLanguage();
  return (
    <>
      <PageHeader path="services" title={t.services.title} sub={t.services.sub} />
      <Services />
      <Faq />
      <CtaBand />
    </>
  );
}

export function AboutPage() {
  const { t } = useLanguage();
  return (
    <>
      <PageHeader path="about" title={t.approach.title} sub={t.about.sub} />
      <Approach />
      <CtaBand />
    </>
  );
}

export function ContactPage() {
  const { t } = useLanguage();
  return (
    <>
      <PageHeader path="contact" title={t.contact.title} sub={t.contact.sub} />
      <Contact />
    </>
  );
}
