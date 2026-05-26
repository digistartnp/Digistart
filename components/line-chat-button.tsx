"use client";

import { useEffect, useState } from "react";
import { useLanguage } from "@/components/digistart/language-provider";

const LINE_URL = "https://line.me/R/ti/p/@069twqcs";

export default function LineChatButton() {
  const { t } = useLanguage();
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const id = window.setTimeout(() => setMounted(true), 240);
    return () => window.clearTimeout(id);
  }, []);

  return (
    <div
      className={`line-chat-dock ${mounted ? "is-visible" : ""} ${
        open ? "is-open" : ""
      }`}
    >
      <div className="line-chat-card" role="dialog" aria-hidden={!open}>
        <button
          type="button"
          className="line-chat-close"
          onClick={() => setOpen(false)}
          aria-label="Close"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path
              d="M2 2L12 12M12 2L2 12"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>
        <div className="line-chat-card-head">
          <div className="line-chat-avatar" aria-hidden="true">
            <LineGlyph />
          </div>
          <div className="line-chat-card-text">
            <strong>{t("line_chat_label")}</strong>
            <span>{t("line_chat_sub")}</span>
          </div>
        </div>
        <a
          href={LINE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="line-chat-card-cta"
        >
          {t("line_chat_cta")}
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path
              d="M3 7H11M11 7L7 3M11 7L7 11"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
      </div>

      <button
        type="button"
        className="line-chat-fab"
        onClick={() => setOpen((v) => !v)}
        aria-label={t("line_chat_aria")}
        aria-expanded={open}
      >
        <span className="line-chat-pulse" aria-hidden="true" />
        <span className="line-chat-pulse line-chat-pulse--lag" aria-hidden="true" />
        <span className="line-chat-fab-inner">
          {open ? (
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
              <path
                d="M4 4L18 18M18 4L4 18"
                stroke="currentColor"
                strokeWidth="2.4"
                strokeLinecap="round"
              />
            </svg>
          ) : (
            <LineGlyph />
          )}
        </span>
        <span className="line-chat-fab-label">{t("line_chat_label")}</span>
      </button>
    </div>
  );
}

function LineGlyph() {
  return (
    <svg
      width="26"
      height="26"
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M18 4C9.716 4 3 9.51 3 16.3c0 6.087 5.366 11.187 12.62 12.156.49.106 1.16.327 1.328.752.152.387.099.991.049 1.385l-.215 1.287c-.066.387-.305 1.52 1.336.83 1.642-.69 8.84-5.21 12.058-8.92C32.24 21.39 33 18.928 33 16.3 33 9.51 26.284 4 18 4z"
        fill="currentColor"
      />
      <text
        x="18"
        y="20"
        textAnchor="middle"
        fontFamily="Arial, sans-serif"
        fontWeight="800"
        fontSize="8"
        fill="#06C755"
        letterSpacing="0.4"
      >
        LINE
      </text>
    </svg>
  );
}
