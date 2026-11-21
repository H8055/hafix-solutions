'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useLang } from '@/lib/i18n';
import { ind, indNav, indContact } from '@/lib/industrial';
import DivisionToggle from '@/components/DivisionToggle';
import Icon from '@/components/Icons';

export default function IndNav() {
  const { t, lang, toggle } = useLang();
  const [open, setOpen] = useState(false);
  const [stuck, setStuck] = useState(false);

  useEffect(() => {
    const onScroll = () => setStuck(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [lang]);

  useEffect(() => {
    document.documentElement.dataset.lock = open ? 'true' : 'false';
    return () => {
      document.documentElement.dataset.lock = 'false';
    };
  }, [open]);

  return (
    <>
      <header className={`ind-top ${stuck ? 'is-stuck' : ''}`}>
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
            <DivisionToggle variant="dark" />
            <button className="ind-lang" onClick={toggle} aria-label="Switch language">
              {lang === 'en' ? 'العربية' : 'English'}
            </button>
            <a
              className="ind-btn ind-btn--solid ind-btn--sm ind-top__cta"
              href={`https://wa.me/${indContact.whatsappHref}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {t({ en: 'Request a quotation', ar: 'اطلب عرض سعر' })}
            </a>
            <button
              className={`ind-burger ${open ? 'open' : ''}`}
              onClick={() => setOpen((o) => !o)}
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer — same behaviour as the studio nav */}
      <div className={`ind-drawer ${open ? 'open' : ''}`}>
        <div className="ind-drawer__links">
          {indNav.map((l, i) => (
            <Link
              key={l.href}
              href={l.href}
              className="ind-drawer__link"
              onClick={() => setOpen(false)}
              style={{ transitionDelay: open ? `${100 + i * 60}ms` : '0ms' }}
            >
              {t(l.label)}
              <span>0{i + 1}</span>
            </Link>
          ))}
        </div>

        <div className="ind-drawer__foot">
          <DivisionToggle variant="dark" />

          <a className="ind-drawer__phone ind-tel" href={`tel:${indContact.phoneHref}`}>
            <Icon name="phone" size={16} stroke={1.6} />
            {indContact.phone}
          </a>
          <a className="ind-drawer__phone ind-tel" href={`tel:${indContact.phone2Href}`}>
            <Icon name="phone" size={16} stroke={1.6} />
            {indContact.phone2}
          </a>
          <a className="ind-drawer__mail" href={`mailto:${indContact.email}`}>
            <Icon name="mail" size={16} stroke={1.6} />
            {indContact.email}
          </a>
          <span className="ind-drawer__addr">{t(indContact.address)}</span>

          <div className="ind-drawer__actions">
            <button className="ind-lang" onClick={toggle}>
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
      </div>
    </>
  );
}
