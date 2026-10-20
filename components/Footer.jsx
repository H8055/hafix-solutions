'use client';

import Link from 'next/link';
import { useLang } from '@/lib/i18n';
import { nav, services, contact, company, ui } from '@/lib/content';

export default function Footer() {
  const { t } = useLang();
  const year = new Date().getFullYear();
  const serviceLinks = services.slice(0, 7);

  return (
    <footer className="foot">
      <div className="shell">
        <div className="foot__grid">
          <div>
            <div className="foot__logo">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/brand/logo-dark.png" alt="Hafix Solution" />
            </div>
            <p className="foot__blurb">{t(ui.footer.blurb)}</p>
            <div style={{ marginTop: 24 }}>
              <a className="tlink" href={`https://wa.me/${contact.whatsappHref}`} target="_blank" rel="noopener noreferrer">
                {t(nav.cta)}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h5>{t(ui.footer.explore)}</h5>
            <ul>
              {nav.links.map((l) => (
                <li key={l.href}>
                  <Link href={l.href}>{t(l.label)}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h5>{t(ui.footer.servicesList)}</h5>
            <ul>
              {serviceLinks.map((s) => (
                <li key={s.slug}>
                  <Link href={`/services#${s.slug}`}>{t(s.title)}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h5>{t(ui.footer.getInTouch)}</h5>
            <ul>
              <li>
                <a href={`tel:${contact.phoneHref}`}>{contact.phone}</a>
              </li>
              <li>
                <a href={`mailto:${contact.email}`}>{contact.email}</a>
              </li>
              <li>
                <a href={`mailto:${contact.sales}`}>{contact.sales}</a>
              </li>
              <li style={{ color: 'var(--muted)', paddingTop: 6, lineHeight: 1.6 }}>
                {t(contact.address)}
              </li>
              <li style={{ color: 'var(--muted)', fontSize: '0.86rem', paddingTop: 6 }}>
                {t(contact.hours)}
              </li>
            </ul>
          </div>
        </div>

        <div className="foot__bar">
          <span>
            © {year} {company.name}. {t(ui.footer.rights)}
          </span>
          <div className="foot__socials">
            {contact.socials.map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer">
                {s.label}
              </a>
            ))}
          </div>
          <span>{t(ui.footer.built)}</span>
        </div>
      </div>
    </footer>
  );
}
