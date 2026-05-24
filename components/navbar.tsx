"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { useLanguage } from "@/components/digistart/language-provider";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const { lang, setLang, t } = useLanguage();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navTo = (hash: string) => (e: React.MouseEvent) => {
    setIsMobileOpen(false);
    if (pathname === "/") {
      e.preventDefault();
      const el = document.getElementById(hash);
      if (el) el.scrollIntoView({ behavior: "smooth" });
      window.history.replaceState(null, "", `/#${hash}`);
    } else {
      router.push(`/#${hash}`);
    }
  };

  return (
    <nav className={isScrolled ? "scrolled" : undefined}>
      <div className="nav-inner">
        <a href="/#home" className="nav-logo" onClick={navTo("home")}>
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
        </a>

        <ul className="nav-links">
          <li>
            <a href="/#home" onClick={navTo("home")}>{t("nav_home")}</a>
          </li>
          <li>
            <a href="/#services" onClick={navTo("services")}>{t("nav_services")}</a>
          </li>
          <li>
            <a href="/#about" onClick={navTo("about")}>{t("nav_about")}</a>
          </li>
          <li>
            <a href="/#faq" onClick={navTo("faq")}>{t("nav_faq")}</a>
          </li>
          <li>
            <a href="/#contact" onClick={navTo("contact")}>{t("nav_contact")}</a>
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
          <a href="/#contact" className="nav-cta" onClick={navTo("contact")}>
            {t("nav_cta")}
          </a>
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
        <a href="/#home" onClick={navTo("home")}>{t("nav_home")}</a>
        <a href="/#services" onClick={navTo("services")}>{t("nav_services")}</a>
        <a href="/#about" onClick={navTo("about")}>{t("nav_about")}</a>
        <a href="/#faq" onClick={navTo("faq")}>{t("nav_faq")}</a>
        <a href="/#contact" onClick={navTo("contact")}>{t("nav_contact")}</a>
      </div>
    </nav>
  );
}
