"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/components/digistart/language-provider";

export default function Footer() {
  const { lang, setLang, t } = useLanguage();

  return (
    <footer>
      <div className="footer-inner">
        <div className="footer-top">
          <div className="footer-brand">
            <Link href="/#home" className="footer-logo">
              <Image
                src="/images/logo.png"
                alt="DIGIスタート"
                width={36}
                height={36}
                unoptimized
              />
              <span className="footer-logo-text">
                DIGI<span>スタート</span>
              </span>
            </Link>
            <p className="footer-tagline">{t("footer_tagline")}</p>
          </div>

          <div className="footer-col">
            <h5>{t("footer_nav")}</h5>
            <ul>
              <li>
                <Link href="/#home">{t("nav_home")}</Link>
              </li>
              <li>
                <Link href="/#services">{t("nav_services")}</Link>
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
          </div>

          <div className="footer-col">
            <h5>{t("footer_services")}</h5>
            <ul>
              <li>
                <Link href="/#services">{t("svc1_title")}</Link>
              </li>
              <li>
                <Link href="/#services">{t("svc2_title")}</Link>
              </li>
              <li>
                <Link href="/#services">{t("svc3_title")}</Link>
              </li>
              <li>
                <Link href="/#services">{t("svc4_footer")}</Link>
              </li>
            </ul>
          </div>

          <div className="footer-col">
            <h5>{t("footer_lang")}</h5>
            <ul>
              <li>
                <button
                  type="button"
                  onClick={() => setLang("en")}
                  aria-pressed={lang === "en"}
                >
                  English
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => setLang("jp")}
                  aria-pressed={lang === "jp"}
                >
                  日本語
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-copy">© 2026 DIGIスタート.</div>
          <div className="footer-langs">
            <button type="button" onClick={() => setLang("en")}>
              EN
            </button>
            <button type="button" onClick={() => setLang("jp")}>
              JP
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
