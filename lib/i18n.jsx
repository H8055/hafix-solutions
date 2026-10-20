'use client';

import { createContext, useCallback, useContext, useEffect, useState } from 'react';

const LangContext = createContext(null);

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState('en');
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem('hafix-lang');
      if (saved === 'ar' || saved === 'en') setLang(saved);
    } catch (e) {
      /* ignore */
    }
    setHydrated(true);
  }, []);

  useEffect(() => {
    const dir = lang === 'ar' ? 'rtl' : 'ltr';
    const el = document.documentElement;
    el.lang = lang;
    el.dir = dir;
    el.dataset.lang = lang;
    try {
      window.localStorage.setItem('hafix-lang', lang);
    } catch (e) {
      /* ignore */
    }
  }, [lang]);

  const t = useCallback(
    (value) => {
      if (value == null) return '';
      if (typeof value === 'string' || typeof value === 'number') return value;
      return value[lang] ?? value.en ?? '';
    },
    [lang]
  );

  const toggle = useCallback(() => setLang((l) => (l === 'en' ? 'ar' : 'en')), []);

  return (
    <LangContext.Provider
      value={{ lang, setLang, toggle, t, hydrated, dir: lang === 'ar' ? 'rtl' : 'ltr' }}
    >
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error('useLang must be used inside <LanguageProvider>');
  return ctx;
}
