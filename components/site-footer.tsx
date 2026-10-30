"use client";

import Link from "next/link";
import { Logo } from "@/components/logo";
import { useLanguage } from "@/components/providers";
import { ArrowUpRight } from "@/components/ui";
import { links } from "@/lib/copy";

export default function SiteFooter() {
  const { t } = useLanguage();

  const columns = [
    {
      title: t.footer.products,
      items: [
        { label: "ResumeJP", href: links.resumejp, external: true },
        { label: "VisaTomo", href: links.visatomo, external: true },
        { label: "Sarathi Connect", href: "/products#sarathi", badge: t.footer.soon },
      ],
    },
    {
      title: t.footer.company,
      items: [
        { label: t.nav.work, href: "/work" },
        { label: t.nav.services, href: "/services" },
        { label: t.nav.about, href: "/about" },
        { label: t.nav.contact, href: "/contact" },
      ],
    },
    {
      title: t.footer.connect,
      items: [
        { label: "LINE", href: links.line, external: true },
        { label: "Instagram", href: links.instagram, external: true },
        { label: "Facebook", href: links.facebook, external: true },
        { label: "LinkedIn", href: links.linkedin, external: true },
      ],
    },
  ];

  return (
    <footer className="border-t border-line bg-surface">
      <div className="container-x grid gap-12 py-16 md:grid-cols-[1.4fr_repeat(3,1fr)]">
        <div>
          <Logo />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">{t.footer.tagline}</p>
        </div>
        {columns.map((col) => (
          <div key={col.title}>
            <h3 className="font-mono text-xs uppercase tracking-[0.14em] text-faint">{col.title}</h3>
            <ul className="mt-4 space-y-2.5">
              {col.items.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    {...("external" in item && item.external
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                    className="inline-flex items-center gap-1.5 text-sm text-ink-soft transition-colors hover:text-ink"
                  >
                    {item.label}
                    {"external" in item && item.external ? (
                      <ArrowUpRight className="size-3 text-faint" />
                    ) : null}
                    {"badge" in item && item.badge ? (
                      <span className="rounded-full border border-line-strong px-1.5 py-px font-mono text-[10px] text-muted">
                        {item.badge}
                      </span>
                    ) : null}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-line">
        <div className="container-x flex flex-col gap-2 py-6 text-xs text-faint sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} DIGIスタート. {t.footer.rights}
          </p>
          <div className="flex items-center gap-5">
            <Link href="/privacy" className="transition-colors hover:text-ink">
              {t.footer.privacy}
            </Link>
            <Link href="/terms" className="transition-colors hover:text-ink">
              {t.footer.terms}
            </Link>
            <span className="font-mono">{t.footer.place}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
