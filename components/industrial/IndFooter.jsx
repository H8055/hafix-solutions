'use client';

import Link from 'next/link';
import { useLang } from '@/lib/i18n';
import { ind, indNav, indContact, indFooter, indCategories } from '@/lib/industrial';

export default function IndFooter() {
  const { t } = useLang();
  const year = new Date().getFullYear();

  return (
    <footer className="ind-foot">
      <div className="ind-shell">
        <div className="ind-foot__grid">
          <div>
            <div className="ind-logo" style={{ marginBottom: 16 }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/brand/logo-industrial.svg" alt="Hafix Company Ltd" />
            </div>
            <p style={{ color: '#a8aeb1', fontSize: '.88rem', lineHeight: 1.7, maxWidth: '40ch' }}>
              {t(indFooter.blurb)}
            </p>
            <p style={{ marginTop: 16, fontSize: '.76rem', color: '#767d82' }}>
              {t(ind.tagline)}
            </p>
          </div>

          <div>
            <h5>{t({ en: 'Product lines', ar: 'خطوط المنتجات' })}</h5>
            <ul>
              {indCategories.slice(0, 5).map((c) => (
                <li key={c.id}>
                  <a href={`#${c.id}`}>{t(c.title)}</a>
                </li>
              ))}
              <li>
                <a href="#specialized">{t(indCategories[5].title)}</a>
              </li>
            </ul>
          </div>

          <div>
            <h5>{t({ en: 'Contact', ar: 'تواصل' })}</h5>
            <ul>
              <li className="ind-tel">
                <a href={`tel:${indContact.phoneHref}`}>{indContact.phone}</a>
              </li>
              <li className="ind-tel">
                <a href={`tel:${indContact.phone2Href}`}>{indContact.phone2}</a>
              </li>
              <li>
                <a href={`mailto:${indContact.email}`}>{indContact.email}</a>
              </li>
              <li>
                <a href={`mailto:${indContact.sales}`}>{indContact.sales}</a>
              </li>
              <li style={{ color: '#a8aeb1' }}>{t(indContact.address)}</li>
            </ul>
          </div>
        </div>

        <div className="ind-foot__bar">
          <span>
            © {year} {t(ind.name)}. {t(indFooter.rights)}
          </span>
          <Link href="/" style={{ color: '#8d9397' }}>
            {t(indFooter.groupLink)} →
          </Link>
        </div>
      </div>
    </footer>
  );
}
