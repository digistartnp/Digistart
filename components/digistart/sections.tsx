"use client";

import { useMemo, useRef, useState } from "react";
import {
  ArrowUpRight,
  Bolt,
  ChartColumnBig,
  Code2,
  Globe,
  Hash,
  Lightbulb,
  PenTool,
  Rocket,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useLanguage } from "@/components/digistart/language-provider";
import Hero3D from "@/components/digistart/hero-3d";
import CountUp from "@/components/digistart/count-up";
import Magnetic from "@/components/digistart/magnetic";
import MarqueeTicker from "@/components/digistart/marquee-ticker";

/* 3D tilt wrapper — outer div keeps CSS reveal/class, inner motion.div handles tilt */
function TiltCard({ children, className }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 120, damping: 20 });
  const sy = useSpring(y, { stiffness: 120, damping: 20 });
  const rotateX = useTransform(sy, [-0.5, 0.5], [5, -5]);
  const rotateY = useTransform(sx, [-0.5, 0.5], [-5, 5]);
  const glareX = useTransform(sx, [-0.5, 0.5], ["0%", "100%"]);
  const glareY = useTransform(sy, [-0.5, 0.5], ["0%", "100%"]);

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    x.set((e.clientX - r.left) / r.width - 0.5);
    y.set((e.clientY - r.top) / r.height - 0.5);
  };
  const onLeave = () => { x.set(0); y.set(0); };

  return (
    <div ref={ref} className={className} style={{ perspective: "800px" }} onMouseMove={onMove} onMouseLeave={onLeave}>
      <motion.div style={{ rotateX, rotateY, transformStyle: "preserve-3d", height: "100%" }}>
        <motion.div
          style={{
            position: "absolute", inset: 0, borderRadius: "inherit", pointerEvents: "none",
            background: `radial-gradient(circle at ${glareX} ${glareY}, rgba(255,255,255,0.055) 0%, transparent 55%)`,
            zIndex: 10,
          }}
        />
        {children}
      </motion.div>
    </div>
  );
}

const socialLinks = {
  facebook: "https://www.facebook.com/profile.php?id=61576693414774",
  linkedin: "https://www.linkedin.com/in/digi-start-2583793b9/",
  instagram: "https://www.instagram.com/digistartjp/",
  email:
    "https://mail.google.com/mail/?view=cm&fs=1&to=digistartnp@gmail.com",
};

export function HeroSection() {
  const { t } = useLanguage();

  return (
    <section id="home">
      <div className="hero-bg-dots" />
      <div className="hero-bg-shape" />
      <div className="hero-top-fade" aria-hidden="true" />

      <div className="hero-inner">
        <div className="hero-content">
          <div className="hero-badge">{t("hero_badge")}</div>
          <h1 className="hero-title">
            <span>{t("hero_title_1")}</span>
            <br />
            <span className="accent">{t("hero_title_2")}</span>
          </h1>
          <p className="hero-sub">{t("hero_sub")}</p>
          <div className="hero-actions">
            <Magnetic>
              <Link href="/#contact" className="btn-primary">
                {t("hero_cta1")}
              </Link>
            </Magnetic>
            <Magnetic>
              <Link href="/#services" className="btn-secondary">
                {t("hero_cta2")}
              </Link>
            </Magnetic>
          </div>
          <div className="hero-stats">
            <div className="stat-item">
              <div className="stat-num"><CountUp to={30} suffix="+" /></div>
              <div className="stat-label">{t("stat1")}</div>
            </div>
            <div className="stat-item">
              <div className="stat-num"><CountUp to={96} suffix="%" /></div>
              <div className="stat-label">{t("stat2")}</div>
            </div>
            <div className="stat-item">
              <div className="stat-num"><CountUp to={3} /></div>
              <div className="stat-label">{t("stat3")}</div>
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <Hero3D />
        </div>
      </div>
    </section>
  );
}

export function ServicesSection() {
  const { t } = useLanguage();

  const products = useMemo(
    () => [
      {
        id: "01",
        icon: Code2,
        title: t("prod1_title"),
        tagline: t("prod1_tagline"),
        points: [t("prod1_p1"), t("prod1_p2"), t("prod1_p3")],
      },
      {
        id: "02",
        icon: PenTool,
        title: t("prod2_title"),
        tagline: t("prod2_tagline"),
        points: [t("prod2_p1"), t("prod2_p2"), t("prod2_p3")],
      },
      {
        id: "03",
        icon: Globe,
        title: t("prod3_title"),
        tagline: t("prod3_tagline"),
        points: [t("prod3_p1"), t("prod3_p2"), t("prod3_p3")],
      },
      {
        id: "04",
        icon: ShieldCheck,
        title: t("prod4_title"),
        tagline: t("prod4_tagline"),
        points: [t("prod4_p1"), t("prod4_p2"), t("prod4_p3")],
      },
    ],
    [t]
  );

  return (
    <section id="services">
      <div className="container">
        <div className="services-header reveal">
          <div className="section-label">{t("svc_label")}</div>
          <h2 className="section-title">{t("svc_title")}</h2>
          <p className="section-sub">{t("svc_sub")}</p>
        </div>

        <div className="services-grid">
          {products.map((product) => (
            <TiltCard key={product.id} className="reveal">
              <div className="service-card product-tier-card" style={{ height: "100%" }}>
                <div className="svc-num">{product.id}</div>
                <div className="svc-icon">
                  <product.icon aria-hidden="true" />
                </div>
                <h3 className="svc-title">{product.title}</h3>
                <p className="prod-tagline">{product.tagline}</p>
                <ul className="prod-points">
                  {product.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            </TiltCard>
          ))}
        </div>

        <div className="services-header reveal" style={{ marginTop: "72px" }}>
          <div className="section-label">{t("svc_projects_label")}</div>
          <h3 className="section-title">{t("svc_projects_title")}</h3>
          <p className="section-sub">{t("svc_projects_sub")}</p>
        </div>

        <div className="services-grid">
          <div className="service-card reveal">
            <div className="svc-project-logo">
              <Image
                src="https://www.akaruipokharaedu.com/assets/gallery/LOGO/Akarui%20Logo.webp"
                alt="Akarui Pokhara Edu logo"
                width={28}
                height={28}
                unoptimized
              />
            </div>
            <h3 className="svc-title">{t("svc_project1_title")}</h3>
            <p className="svc-desc">{t("svc_project1_desc")}</p>
            <Link
              href="https://www.akaruipokharaedu.com/"
              target="_blank"
              rel="noreferrer"
              className="btn-primary"
              style={{ marginTop: "20px" }}
            >
              {t("svc_project_cta")}
            </Link>
          </div>

          <div className="service-card reveal">
            <div className="svc-project-logo">
              <Image
                src="https://mustangasian-jp.online/images/logo.png"
                alt="Mustang Asian JP logo"
                width={28}
                height={28}
                unoptimized
              />
            </div>
            <h3 className="svc-title">{t("svc_project2_title")}</h3>
            <p className="svc-desc">{t("svc_project2_desc")}</p>
            <Link
              href="https://mustangasian-jp.online/"
              target="_blank"
              rel="noreferrer"
              className="btn-primary"
              style={{ marginTop: "20px" }}
            >
              {t("svc_project_cta")}
            </Link>
          </div>
        </div>

        <MarqueeTicker />
      </div>
    </section>
  );
}

export function PricingSection() {
  const { t } = useLanguage();
  const [currency, setCurrency] = useState<"jpy" | "usd">("jpy");

  const priceLabel = (jpy: string, usd: string) =>
    currency === "jpy" ? jpy : usd;

  return (
    <section id="pricing" className="pricing-section">
      <div className="section-label">{t("pricing_label")}</div>
      <h2 className="heading">{t("pricing_heading")}</h2>
      <p className="subheading">{t("pricing_subheading")}</p>

      <div className="toggle-row">
        <button
          className={`toggle-btn${currency === "jpy" ? " active" : ""}`}
          onClick={() => setCurrency("jpy")}
        >
          ¥ JPY
        </button>
        <button
          className={`toggle-btn${currency === "usd" ? " active" : ""}`}
          onClick={() => setCurrency("usd")}
        >
          $ USD
        </button>
      </div>

      <div className="plans-grid">
        <div className="plan-card">
          <span className="plan-icon">
            <Globe aria-hidden="true" />
          </span>
          <div className="plan-name">{t("plan_go_name")}</div>
          <div className="plan-tagline">{t("plan_go_tagline")}</div>
          <div className="plan-price">
            <div className="price-row">
              <span className="original-price">
                {priceLabel("\u00a5780,000", "$5,200")}
              </span>
              <span className="discounted-price">
                {priceLabel("\u00a5590,000", "$3,900")}
              </span>
              <span className="discount-label">{t("plan_discount")}</span>
            </div>
          </div>
          <div className="plan-note">{t("plan_go_note")}</div>
          <ul className="plan-features">
            <li>{t("plan_go_f1")}</li>
            <li>{t("plan_go_f2")}</li>
            <li>{t("plan_go_f3")}</li>
            <li>{t("plan_go_f4")}</li>
            <li>{t("plan_go_f5")}</li>
            <li>{t("plan_go_f6")}</li>
          </ul>
          <Link href="/#contact" className="btn btn-primary">
            {t("nav_cta")}
          </Link>
        </div>

        <div className="plan-card popular">
          <div className="popular-badge">{t("popular_badge")}</div>
          <span className="plan-icon">
            <ChartColumnBig aria-hidden="true" />
          </span>
          <div className="plan-name">{t("plan_build_name")}</div>
          <div className="plan-tagline">{t("plan_build_tagline")}</div>
          <div className="plan-price">
            <div className="price-row">
              <span className="original-price">
                {priceLabel("\u00a51,250,000", "$8,300")}
              </span>
              <span className="discounted-price">
                {priceLabel("\u00a5980,000", "$6,500")}
              </span>
              <span className="discount-label">{t("plan_discount")}</span>
            </div>
          </div>
          <div className="plan-note">{t("plan_build_note")}</div>
          <ul className="plan-features">
            <li>{t("plan_build_f1")}</li>
            <li>{t("plan_build_f2")}</li>
            <li>{t("plan_build_f3")}</li>
            <li>{t("plan_build_f4")}</li>
            <li>{t("plan_build_f5")}</li>
            <li>{t("plan_build_f6")}</li>
          </ul>
          <Link href="/#contact" className="btn btn-primary">
            {t("nav_cta")}
          </Link>
        </div>

        <div className="plan-card">
          <span className="plan-icon">
            <Bolt aria-hidden="true" />
          </span>
          <div className="plan-name">{t("plan_full_name")}</div>
          <div className="plan-tagline">{t("plan_full_tagline")}</div>
          <div className="plan-price">
            <div className="price-row">
              <span className="original-price">
                {priceLabel("\u00a52,400,000", "$15,900")}
              </span>
              <span className="discounted-price">
                {priceLabel("\u00a51,850,000", "$12,300")}
              </span>
              <span className="discount-label">{t("plan_discount")}</span>
            </div>
          </div>
          <div className="plan-note">{t("plan_full_note")}</div>
          <ul className="plan-features">
            <li>{t("plan_full_f1")}</li>
            <li>{t("plan_full_f2")}</li>
            <li>{t("plan_full_f3")}</li>
            <li>{t("plan_full_f4")}</li>
            <li>{t("plan_full_f5")}</li>
            <li>{t("plan_full_f6")}</li>
            <li>{t("plan_full_f7")}</li>
          </ul>
          <Link href="/#contact" className="btn btn-primary">
            {t("nav_cta")}
          </Link>
        </div>
      </div>

      <div className="section-divider">
        <span className="section-divider-label">{t("monthly_label")}</span>
      </div>
      <div className="sub-label">{t("monthly_sub_label")}</div>
      <h3 className="sub-heading">{t("monthly_heading")}</h3>
      <p className="sub-sub">{t("monthly_subheading")}</p>

      <div className="subs-grid">
        <div className="sub-card">
          <div className="sub-card-header">
            <span className="sub-icon">
              <Sparkles aria-hidden="true" />
            </span>
            <span className="sub-badge badge-green">Starter</span>
          </div>
          <div className="sub-name">{t("sub1_name")}</div>
          <div className="sub-desc">{t("sub1_desc")}</div>
          <div className="sub-price">
            {priceLabel("\u00a545,000", "$300")} / mo
          </div>
          <div className="sub-period">{t("sub1_period")}</div>
          <ul className="sub-features">
            <li>{t("sub1_f1")}</li>
            <li>{t("sub1_f2")}</li>
            <li>{t("sub1_f3")}</li>
            <li>{t("sub1_f4")}</li>
          </ul>
          <Link href="/#contact" className="btn btn-primary">
            {t("nav_cta")}
          </Link>
        </div>

        <div className="sub-card featured">
          <div className="sub-card-header">
            <span className="sub-icon">
              <ArrowUpRight aria-hidden="true" />
            </span>
            <span className="sub-badge badge-gold">Popular</span>
          </div>
          <div className="sub-name">{t("sub2_name")}</div>
          <div className="sub-desc">{t("sub2_desc")}</div>
          <div className="sub-price">
            {priceLabel("\u00a590,000", "$600")} / mo
          </div>
          <div className="sub-period">{t("sub2_period")}</div>
          <ul className="sub-features">
            <li>{t("sub2_f1")}</li>
            <li>{t("sub2_f2")}</li>
            <li>{t("sub2_f3")}</li>
            <li>{t("sub2_f4")}</li>
            <li>{t("sub2_f5")}</li>
            <li>{t("sub2_f6")}</li>
          </ul>
          <Link href="/#contact" className="btn btn-primary">
            {t("nav_cta")}
          </Link>
        </div>

        <div className="sub-card">
          <div className="sub-card-header">
            <span className="sub-icon">
              <Lightbulb aria-hidden="true" />
            </span>
            <span className="sub-badge badge-blue">Pro</span>
          </div>
          <div className="sub-name">{t("sub3_name")}</div>
          <div className="sub-desc">{t("sub3_desc")}</div>
          <div className="sub-price">
            {priceLabel("\u00a5180,000", "$1,200")} / mo
          </div>
          <div className="sub-period">{t("sub3_period")}</div>
          <ul className="sub-features">
            <li>{t("sub3_f1")}</li>
            <li>{t("sub3_f2")}</li>
            <li>{t("sub3_f3")}</li>
            <li>{t("sub3_f4")}</li>
            <li>{t("sub3_f5")}</li>
            <li>{t("sub3_f6")}</li>
            <li>{t("sub3_f7")}</li>
          </ul>
          <Link href="/#contact" className="btn btn-primary">
            {t("nav_cta")}
          </Link>
        </div>
      </div>

      <div className="section-divider">
        <span className="section-divider-label">{t("addons_divider")}</span>
      </div>
      <div className="addons-label">{t("addons_label")}</div>
      <h3 className="addons-heading">{t("addons_heading")}</h3>
      <p className="addons-sub">{t("addons_sub")}</p>

      <div className="addons-grid">
        {[
          {
            name: t("addon1_name"),
            desc: t("addon1_desc"),
            tag: t("addon1_tag"),
            price: priceLabel("\u00a58,000", "$53"),
          },
          {
            name: t("addon2_name"),
            desc: t("addon2_desc"),
            tag: t("addon2_tag"),
            price: priceLabel("\u00a525,000", "$170"),
          },
          {
            name: t("addon3_name"),
            desc: t("addon3_desc"),
            tag: t("addon3_tag"),
            price: priceLabel("\u00a5115,000", "$770"),
          },
          {
            name: t("addon4_name"),
            desc: t("addon4_desc"),
            tag: t("addon4_tag"),
            price: priceLabel("\u00a545,000", "$300"),
          },
          {
            name: t("addon5_name"),
            desc: t("addon5_desc"),
            tag: t("addon5_tag"),
            price: priceLabel("\u00a5260,000", "$1,720"),
          },
          {
            name: t("addon6_name"),
            desc: t("addon6_desc"),
            tag: t("addon6_tag"),
            price: priceLabel("\u00a560,000", "$400"),
          },
          {
            name: t("addon7_name"),
            desc: t("addon7_desc"),
            tag: t("addon7_tag"),
            price: priceLabel("\u00a535,000", "$240"),
          },
          {
            name: t("addon8_name"),
            desc: t("addon8_desc"),
            tag: t("addon8_tag"),
            price: priceLabel("\u00a520,000", "$135"),
          },
        ].map((addon) => (
          <div key={addon.name} className="addon-card">
            <div className="addon-top">
              <div className="addon-icon-name">
                <span className="addon-emoji">
                  <Sparkles aria-hidden="true" />
                </span>
                <div className="addon-name">{addon.name}</div>
              </div>
              <div className="addon-price">{addon.price}</div>
            </div>
            <div className="addon-desc">{addon.desc}</div>
            <span className="addon-tag">{addon.tag}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export function AboutSection() {
  const { t } = useLanguage();

  return (
    <section id="about">
      <div className="container">
        <div className="about-inner">
          <div className="about-visual reveal">
            <div className="about-card-main">
              <div className="about-tagline">
                <span className="ac">{t("about_tagline_1")}</span>
                <br />
                <span>{t("about_tagline_2")}</span>
              </div>
              <p className="about-card-desc">{t("about_card_desc")}</p>
              <div className="about-metrics">
                <div className="am-item">
                  <div className="am-val">2</div>
                  <div className="am-label">{t("am1")}</div>
                </div>
                <div className="am-item">
                  <div className="am-val">∞</div>
                  <div className="am-label">{t("am2")}</div>
                </div>
              </div>
              <div className="about-badge-strip">
                <span className="about-badge">Japan</span>
                <span className="about-badge">Nepal</span>
                <span className="about-badge">Global</span>
              </div>
            </div>
          </div>

          <div className="about-content reveal">
            <div className="section-label">{t("about_label")}</div>
            <h2 className="section-title">{t("about_title")}</h2>
            <p className="section-sub">{t("about_sub")}</p>

            <div className="about-story">
              <h3 className="about-why-title">{t("about_why_title")}</h3>
              <p className="about-story-body">{t("about_why_body")}</p>
              <p className="about-story-closing">{t("about_closing")}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function TeamSection() {
  const { t } = useLanguage();

  const team = useMemo(
    () => [
      {
        name: t("team_member_1_name"),
        role: t("team_member_1_role"),
        bio: t("team_member_1_bio"),
      },
      {
        name: t("team_member_2_name"),
        role: t("team_member_2_role"),
        bio: t("team_member_2_bio"),
      },
      {
        name: t("team_member_3_name"),
        role: t("team_member_3_role"),
        bio: t("team_member_3_bio"),
      },
    ],
    [t]
  );

  return (
    <section id="team">
      <div className="container">
        <div className="services-header reveal">
          <div className="section-label">{t("team_label")}</div>
          <h2 className="section-title">{t("team_title")}</h2>
          <p className="section-sub">{t("team_sub")}</p>
        </div>

        <div className="team-grid">
          {team.map((member) => (
            <div key={member.name} className="team-card reveal">
              <div className="team-avatar">
                <span>{member.name.slice(0, 1)}</span>
              </div>
              <div className="team-name">{member.name}</div>
              <div className="team-role">{member.role}</div>
              <p className="team-bio">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FaqSection() {
  const { t } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const items = useMemo(
    () =>
      [
        { q: t("faq1_q"), a: t("faq1_a") },
        { q: t("faq3_q"), a: t("faq3_a") },
        { q: t("faq6_q"), a: t("faq6_a") },
        { q: t("faq8_q"), a: t("faq8_a") },
      ],
    [t]
  );

  return (
    <section id="faq">
      <div className="container">
        <div className="faq-inner">
          <div className="faq-intro reveal">
            <div className="section-label">{t("faq_label")}</div>
            <h2 className="section-title">{t("faq_title")}</h2>
            <p className="section-sub">{t("faq_sub")}</p>
            <br />
            <Link href="/#contact" className="btn-primary">
              {t("faq_cta")}
            </Link>
          </div>

          <div className="faq-list reveal">
            {items.map((item, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={item.q}
                  className={`faq-item${isOpen ? " open" : ""}`}
                >
                  <button
                    type="button"
                    className="faq-q"
                    onClick={() =>
                      setOpenIndex(isOpen ? null : Number(index))
                    }
                  >
                    <span>{item.q}</span>
                    <div className="faq-icon">{isOpen ? "-" : "+"}</div>
                  </button>
                  <div className="faq-a">{item.a}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export function ContactSection() {
  const { t, lang } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch(form.action, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: formData,
      });

      if (response.ok) {
        form.reset();
        setIsSuccess(true);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact">
      <div className="container">
        <div className="contact-inner">
          <div className="contact-info reveal">
            <div className="section-label">{t("contact_label")}</div>
            <h2 className="section-title">{t("contact_title")}</h2>
            <p className="section-sub">{t("contact_sub")}</p>

            <div className="contact-methods">
              <div className="cm-item">
                <div className="cm-icon">
                  <Globe aria-hidden="true" />
                </div>
                <div>
                  <div className="cm-label">{t("cm_fb")}</div>
                  <div className="cm-val">
                    <a href={socialLinks.facebook} target="_blank" rel="noreferrer">
                      DIGIスタート
                    </a>
                  </div>
                </div>
              </div>
              <div className="cm-item">
                <div className="cm-icon">
                  <ArrowUpRight aria-hidden="true" />
                </div>
                <div>
                  <div className="cm-label">{t("cm_li")}</div>
                  <div className="cm-val">
                    <a href={socialLinks.linkedin} target="_blank" rel="noreferrer">
                      DIGIスタート
                    </a>
                  </div>
                </div>
              </div>
              <div className="cm-item">
                <div className="cm-icon">
                  <Hash aria-hidden="true" />
                </div>
                <div>
                  <div className="cm-label">{t("cm_ig")}</div>
                  <div className="cm-val">
                    <a href={socialLinks.instagram} target="_blank" rel="noreferrer">
                      @digistartjp
                    </a>
                  </div>
                </div>
              </div>
              <div className="cm-item">
                <div className="cm-icon">
                  <Sparkles aria-hidden="true" />
                </div>
                <div>
                  <div className="cm-label">{t("cm_email")}</div>
                  <div className="cm-val">
                    <a href={socialLinks.email} target="_blank" rel="noreferrer">
                      digistartnp@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-form-wrap reveal">
            <div className="form-title">
              {isSuccess ? t("form_title_success") : t("form_title")}
            </div>
            <form
              id="contactForm"
              action="https://formspree.io/f/xgonprwq"
              method="POST"
              onSubmit={handleSubmit}
            >
              <div className="form-group">
                <label htmlFor="nameInput">{t("form_name")}</label>
                <input
                  id="nameInput"
                  name="name"
                  type="text"
                  required
                  placeholder={t("form_name")}
                />
              </div>
              <div className="form-group">
                <label htmlFor="emailInput">{t("form_email")}</label>
                <input
                  id="emailInput"
                  name="email"
                  type="email"
                  required
                  placeholder="email@example.com"
                />
              </div>
              <div className="form-group">
                <label htmlFor="messageInput">{t("form_msg")}</label>
                <textarea
                  id="messageInput"
                  name="message"
                  rows={5}
                  required
                  placeholder={t("form_msg")}
                />
              </div>
              <button type="submit" className="form-submit" disabled={isSubmitting}>
                {isSubmitting ? "..." : t("form_submit")}
              </button>
              {isSuccess && (
                <p className="form-success show" lang={lang}>
                  {t("form_success")}
                </p>
              )}
            </form>

            <p id="formNote" style={{ marginTop: "16px" }}>
              {isSuccess ? t("form_note_success") : t("form_note")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
