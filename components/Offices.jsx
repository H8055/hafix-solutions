'use client';

import { contact } from '@/lib/content';
import { useLang } from '@/lib/i18n';
import Reveal from '@/components/Reveal';
import Icon from '@/components/Icons';

/**
 * Global offices — one card per country.
 * Only the Saudi head office carries a street address (supplied by the client);
 * the other cards are presence locations and deliberately show no invented address.
 */
export default function Offices() {
  const { t } = useLang();

  return (
    <section className="section offices" id="offices">
      <div className="shell">
        <Reveal>
          <div className="offices__head">
            <span className="kicker">{t({ en: 'Where we work', ar: 'أين نعمل' })}</span>
            <h2 className="offices__title">
              {t({ en: 'One team, five markets.', ar: 'فريق واحد، خمسة أسواق.' })}
            </h2>
            <p className="offices__sub">
              {t({
                en: 'Headquartered in Al Jubail in the Kingdom’s Eastern Province, with teams serving clients across the Gulf and India.',
                ar: 'مقرّنا الرئيسي في الجبيل بالمنطقة الشرقية، وفرقنا تخدم العملاء في الخليج والهند.',
              })}
            </p>
          </div>
        </Reveal>

        <div className="offices__grid">
          {contact.offices.map((o, i) => (
            <Reveal key={o.city.en} delay={60 + i * 55}>
              <article className={`office ${o.primary ? 'office--hq' : ''}`}>
                <header className="office__top">
                  <span className="office__flag" aria-hidden="true">{o.flag}</span>
                  <span className="office__role">{t(o.role)}</span>
                </header>

                <h3 className="office__city">{t(o.city)}</h3>
                <p className="office__country">{t(o.country)}</p>

                {o.address ? (
                  <p className="office__addr">{t(o.address)}</p>
                ) : (
                  <p className="office__addr office__addr--soft">
                    {t({ en: 'Client services & project delivery', ar: 'خدمات العملاء وتنفيذ المشاريع' })}
                  </p>
                )}

                <footer className="office__foot">
                  <a href={`tel:${o.phoneHref}`} className="office__phone">
                    <Icon name="phone" size={15} stroke={1.4} />
                    {o.phone}
                  </a>
                  <a
                    className="office__map"
                    href={`https://maps.google.com/?q=${encodeURIComponent(o.mapQuery)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {t({ en: 'Map', ar: 'الخريطة' })}
                    <Icon name="arrow" size={13} stroke={1.6} />
                  </a>
                </footer>
              </article>
            </Reveal>
          ))}
          <Reveal delay={340}>
            <article className="office office--cta">
              <header className="office__top">
                <span className="office__flag" aria-hidden="true">✳</span>
                <span className="office__role">{t({ en: 'Remote', ar: 'عن بُعد' })}</span>
              </header>
              <h3 className="office__city">
                {t({ en: 'Not near an office?', ar: 'لست قريباً من مكتب؟' })}
              </h3>
              <p className="office__country">
                {t({ en: 'We work across time zones', ar: 'نعمل عبر المناطق الزمنية' })}
              </p>
              <p className="office__addr office__addr--soft">
                {t({
                  en: 'Most of our clients we have never met in person — kickoffs, reviews and launches all run remotely in English or Arabic.',
                  ar: 'معظم عملائنا لم نلتقِ بهم شخصياً: الاجتماعات والمراجعات والإطلاق تُدار عن بُعد بالإنجليزية أو العربية.',
                })}
              </p>
              <footer className="office__foot">
                <a href={`mailto:${contact.email}`} className="office__phone">
                  <Icon name="arrow" size={15} stroke={1.4} />
                  {t({ en: 'Start a conversation', ar: 'ابدأ محادثة' })}
                </a>
              </footer>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
