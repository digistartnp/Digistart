"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/components/digistart/language-provider";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const { lang, setLang, t } = useLanguage();

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={isScrolled ? "scrolled" : undefined}>
      <div className="nav-inner">
        <Link href="/#home" className="nav-logo">
          <Image
            src="/images/logo.png"
            alt="DIGIスタート Logo"
            width={40}
            height={40}
            priority
            unoptimized
          />
          <span className="nav-logo-text">
            DIGI<span>スタート</span>
          </span>
        </Link>

        <ul className="nav-links">
          <li>
            <Link href="/#home">{t("nav_home")}</Link>
          </li>
          <li>
            <Link href="/#services">{t("nav_services")}</Link>
          </li>
          <li>
            <Link href="/#pricing">{t("nav_pricing")}</Link>
          </li>
          <li>
            <Link href="/#about">{t("nav_about")}</Link>
          </li>
          <li>
            <Link href="/#faq">{t("nav_faq")}</Link>
          </li>
          <li>
            <Link href="/#contact">{t("nav_contact")}</Link>
          </li>
        </ul>

        <div className="nav-right">
          <div className="lang-switcher">
            <button
              type="button"
              className={`lang-btn${lang === "en" ? " active" : ""}`}
              onClick={() => setLang("en")}
            >
              EN
            </button>
            <button
              type="button"
              className={`lang-btn${lang === "jp" ? " active" : ""}`}
              onClick={() => setLang("jp")}
            >
              JP
            </button>
          </div>
          <Link href="/#contact" className="nav-cta">
            {t("nav_cta")}
          </Link>
        </div>

        <button
          className="hamburger"
          onClick={() => setIsMobileOpen((prev) => !prev)}
          aria-label="Toggle menu"
          aria-expanded={isMobileOpen}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <div className={`mobile-menu${isMobileOpen ? " open" : ""}`}>
        <Link href="/#home" onClick={() => setIsMobileOpen(false)}>
          {t("nav_home")}
        </Link>
        <Link href="/#services" onClick={() => setIsMobileOpen(false)}>
          {t("nav_services")}
        </Link>
        <Link href="/#pricing" onClick={() => setIsMobileOpen(false)}>
          {t("nav_pricing")}
        </Link>
        <Link href="/#about" onClick={() => setIsMobileOpen(false)}>
          {t("nav_about")}
        </Link>
        <Link href="/#faq" onClick={() => setIsMobileOpen(false)}>
          {t("nav_faq")}
        </Link>
        <Link href="/#contact" onClick={() => setIsMobileOpen(false)}>
          {t("nav_contact")}
        </Link>
      </div>
    </nav>
  );
}
