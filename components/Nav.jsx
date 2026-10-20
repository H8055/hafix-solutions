'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useLang } from '@/lib/i18n';
import { nav, contact } from '@/lib/content';
import Icon from '@/components/Icons';

export default function Nav() {
  const { t, lang, toggle } = useLang();
  const path = usePathname();
  const [stuck, setStuck] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setStuck(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [path, lang]);

  useEffect(() => {
    document.documentElement.dataset.lock = open ? 'true' : 'false';
    return () => {
      document.documentElement.dataset.lock = 'false';
    };
  }, [open]);

  return (
    <>
      <header className={`nav ${stuck ? 'stuck' : ''}`}>
        <div className="nav__in">
          <Link href="/" className="nav__logo" aria-label="Hafix Solution — home">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/brand/logo-dark.png" alt="Hafix Solution" />
          </Link>

          <nav className="nav__links" aria-label="Primary">
            {nav.links.map((l) => {
              const active = l.href === '/' ? path === '/' : path.startsWith(l.href);
              return (
                <Link key={l.href} href={l.href} className={`nav__link ${active ? 'active' : ''}`}>
                  {t(l.label)}
                </Link>
              );
            })}
          </nav>

          <div className="nav__right">
            <button className="lang" onClick={toggle} aria-label="Switch language">
              <Icon name="globe" size={15} />
              {t({ en: 'العربية', ar: 'English' })}
            </button>
            <Link href="/contact" className="btn btn--solid btn--sm">
              {t(nav.cta)}
              <Icon name="arrow" size={16} className="btn__arw" />
            </Link>
            <button
              className={`nav__burger ${open ? 'open' : ''}`}
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

      <div className={`drawer ${open ? 'open' : ''}`}>
        <div className="drawer__links">
          {nav.links.map((l, i) => (
            <Link
              key={l.href}
              href={l.href}
              className="drawer__link"
              style={{ transitionDelay: open ? `${120 + i * 70}ms` : '0ms' }}
            >
              {t(l.label)}
              <span>0{i + 1}</span>
            </Link>
          ))}
        </div>
        <div className="drawer__foot">
          <div>
            <a href={`tel:${contact.phoneHref}`}>{contact.phone}</a>
          </div>
          <div>
            <a href={`mailto:${contact.email}`}>{contact.email}</a>
          </div>
          <div>{t(contact.addressShort)}</div>
          <div style={{ display: 'flex', gap: 12, paddingTop: 8 }}>
            <button className="lang" onClick={toggle}>
              <Icon name="globe" size={15} />
              {t({ en: 'العربية', ar: 'English' })}
            </button>
            <Link href="/contact" className="btn btn--solid btn--sm">
              {t(nav.cta)}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
