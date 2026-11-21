'use client';

import Link from 'next/link';
import { contactPage, sections, contact } from '@/lib/content';
import { useLang } from '@/lib/i18n';
import Reveal from '@/components/Reveal';
import { ContactBlock, Faq } from '@/components/Interactions';
import { CtaBand, SecHead } from '@/components/Sections';
import Offices from '@/components/Offices';
import Icon from '@/components/Icons';

export default function ContactView() {
  const { t } = useLang();

  return (
    <>
      <header className="phead">
        <div className="shell" style={{ position: 'relative' }}>
          <Reveal>
            <div className="crumbs">
              <Link href="/">{t({ en: 'Home', ar: 'الرئيسية' })}</Link>
              <span>/</span>
              <span>{t({ en: 'Contact', ar: 'تواصل معنا' })}</span>
            </div>
          </Reveal>
          <Reveal as="h1" delay={80}>
            {t(contactPage.title)}
          </Reveal>
          <Reveal delay={160}>
            <p className="phead__sub" style={{ marginTop: 24 }}>
              {t(contactPage.body)}
            </p>
          </Reveal>
        </div>
      </header>

      <section className="section" style={{ paddingTop: 'clamp(30px, 4vw, 50px)' }}>
        <div className="shell">
          <SecHead kicker={sections.contact.kicker} title={sections.contact.title} body={sections.contact.body} />
          <ContactBlock />
        </div>
      </section>

      <section className="section--tight" style={{ paddingTop: 0 }}>
        <div className="shell">
          <Reveal>
            <div className="map">
              <svg viewBox="0 0 800 500" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
                <defs>
                  <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M40 0H0V40" fill="none" stroke="rgba(20,22,26,.08)" strokeWidth="1" />
                  </pattern>
                </defs>
                <rect width="800" height="500" fill="url(#grid)" />
                <path
                  d="M-20 380 C 120 330, 240 420, 400 350 S 660 260, 820 300"
                  fill="none"
                  stroke="rgba(192,57,47,.75)"
                  strokeWidth="2"
                />
                <path
                  d="M-20 120 C 180 170, 300 60, 520 140 S 700 220, 820 180"
                  fill="none"
                  stroke="rgba(20,22,26,.14)"
                  strokeWidth="1.5"
                />
                <circle cx="400" cy="250" r="90" fill="none" stroke="rgba(192,57,47,.35)" />
                <circle cx="400" cy="250" r="150" fill="none" stroke="rgba(192,57,47,.18)" />
              </svg>
              <div className="map__pin">
                <Icon name="pin" size={34} stroke={1.2} />
                <b>{t({ en: 'Al Jubail', ar: 'الجبيل' })}</b>
                <span className="muted" style={{ maxWidth: 320, fontSize: '0.92rem' }}>
                  {t(contact.address)}
                </span>
                <a
                  className="btn btn--light btn--sm"
                  href={`https://maps.google.com/?q=${encodeURIComponent('Ibn Al Bitar, Al Safa District, Al Jubail 35514, Saudi Arabia')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t({ en: 'Open in Maps', ar: 'افتح في الخرائط' })}
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <Offices />
      <Faq />
      <CtaBand />
    </>
  );
}
