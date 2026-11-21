'use client';

import { useEffect } from 'react';
import { useLang } from '@/lib/i18n';

/**
 * The creative site stores its language in localStorage under `hafix-lang`.
 * On the industrial site we default to English on first load so a visitor
 * arriving from a search result is not dropped into RTL unexpectedly, then
 * the shared provider takes over on toggle.
 */
export default function SmoothLang() {
  const { lang } = useLang();
  useEffect(() => {
    document.documentElement.dataset.indLang = lang;
  }, [lang]);
  return null;
}
