"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, m } from "framer-motion";
import { Logo } from "@/components/logo";
import { useLanguage } from "@/components/providers";
import type { Locale } from "@/lib/copy";

function LanguageToggle() {
  const { lang, setLang } = useLanguage();
  const options: { value: Locale; label: string }[] = [
    { value: "en", label: "EN" },
    { value: "ja", label: "日本語" },
  ];

  return (
    <div role="group" aria-label="Language" className="flex rounded-full border border-line p-0.5">
      {options.map((option) => (
        <button
          key={option.value}
          type="button"
          onClick={() => setLang(option.value)}
          aria-pressed={lang === option.value}
          className={`h-7 cursor-pointer rounded-full px-2.5 text-xs font-medium transition-colors ${
            lang === option.value ? "bg-ink text-white" : "text-muted hover:text-ink"
          }`}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}

export default function SiteHeader() {
  const { t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const nav = [
    { href: "/#products", label: t.nav.products },
    { href: "/#sarathi", label: t.nav.next },
    { href: "/#approach", label: t.nav.approach },
    { href: "/#services", label: t.nav.services },
    { href: "/#contact", label: t.nav.contact },
  ];

  return (
    <header
      className={`sticky top-0 z-40 border-b backdrop-blur-md transition-colors duration-200 ${
        scrolled || open ? "border-line bg-paper/85" : "border-transparent bg-paper/0"
      }`}
    >
      <div className="container-x flex h-16 items-center justify-between gap-6">
        <Link href="/#top" aria-label="digistart — home" onClick={() => setOpen(false)}>
          <Logo />
        </Link>

        <nav aria-label="Main" className="hidden md:block">
          <ul className="flex items-center gap-7">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-sm text-muted transition-colors hover:text-ink">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <LanguageToggle />
          <Link href="/#contact" className="btn btn-primary h-9 px-4 text-sm">
            {t.nav.cta}
          </Link>
        </div>

        <button
          type="button"
          className="-mr-2 flex size-11 cursor-pointer items-center justify-center md:hidden"
          aria-label={t.nav.menu}
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="relative block h-3 w-5">
            <span
              className={`absolute left-0 h-[1.5px] w-5 transition-transform bg-ink duration-200 ${
                open ? "top-1.5 rotate-45" : "top-0"
              }`}
            />
            <span
              className={`absolute left-0 h-[1.5px] w-5 transition-transform bg-ink duration-200 ${
                open ? "top-1.5 -rotate-45" : "top-3"
              }`}
            />
          </span>
        </button>
      </div>

      <AnimatePresence>
        {open ? (
          <m.nav
            id="mobile-nav"
            aria-label="Mobile"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-line md:hidden"
          >
            <div className="container-x flex flex-col py-3">
              {nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="flex h-12 items-center border-b border-line text-base text-ink last:border-b-0"
                >
                  {item.label}
                </Link>
              ))}
              <div className="flex items-center justify-between gap-3 pt-4 pb-2">
                <LanguageToggle />
                <Link href="/#contact" onClick={() => setOpen(false)} className="btn btn-primary">
                  {t.nav.cta}
                </Link>
              </div>
            </div>
          </m.nav>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
