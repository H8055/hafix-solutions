'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useLang } from '@/lib/i18n';
import { ind, indNav, indContact } from '@/lib/industrial';

export default function IndNav() {
  const { t, lang, toggle } = useLang();
  const [open, setOpen] = useState(false);

  return (
    <header className="ind-top">
      <div className="ind-shell ind-top__in">
        <Link href="/industrial-materials-supply" className="ind-logo">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/brand/logo-light.png" alt="Hafix Company Ltd" />
        </Link>

        <nav className="ind-links" aria-label="Primary">
          {indNav.map((l) => (
            <Link key={l.href} href={l.href}>
              {t(l.label)}
            </Link>
          ))}
        </nav>

        <div className="ind-top__act">
          <button className="ind-lang" onClick={toggle} aria-label="Switch language">
            {lang === 'en' ? 'العربية' : 'English'}
          </button>
          <a
            className="ind-btn ind-btn--solid ind-btn--sm"
            href={`https://wa.me/${indContact.whatsappHref}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {t({ en: 'Request a quotation', ar: 'اطلب عرض سعر' })}
          </a>
        </div>
      </div>
    </header>
  );
}
