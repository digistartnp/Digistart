"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { LazyMotion, MotionConfig } from "framer-motion";
import { copy, type Copy, type Locale } from "@/lib/copy";

const STORAGE_KEY = "digistart-lang";
const loadMotionFeatures = () => import("@/lib/motion-features").then((mod) => mod.default);

type LanguageContextValue = {
  lang: Locale;
  setLang: (lang: Locale) => void;
  t: Copy;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

/* Server renders English; the stored or browser preference is applied after
   hydration so the markup always matches. "jp" is the key the old site saved. */
function readPreferredLocale(): Locale | null {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === "ja" || stored === "jp") return "ja";
    if (stored === "en") return "en";
  } catch {
    /* storage blocked — fall through to the browser language */
  }
  return navigator.language.toLowerCase().startsWith("ja") ? "ja" : null;
}

export function Providers({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Locale>("en");

  useEffect(() => {
    const preferred = readPreferredLocale();
    // eslint-disable-next-line react-hooks/set-state-in-effect -- one-time sync from browser storage after hydration
    if (preferred) setLangState(preferred);
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = useCallback((next: Locale) => {
    setLangState(next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      /* non-critical */
    }
  }, []);

  const value = useMemo(() => ({ lang, setLang, t: copy[lang] }), [lang, setLang]);

  return (
    <LanguageContext.Provider value={value}>
      <LazyMotion features={loadMotionFeatures} strict>
        <MotionConfig reducedMotion="user">{children}</MotionConfig>
      </LazyMotion>
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used within Providers");
  return context;
}
