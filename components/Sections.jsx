'use client';

import Link from 'next/link';
import { useLang } from '@/lib/i18n';
import {
  clients,
  marqueeTitle,
  story,
  sections,
  process,
  works,
  priorities,
  industries,
  contact,
  nav,
} from '@/lib/content';
import Reveal from '@/components/Reveal';
import Icon from '@/components/Icons';

/* -------------------------------------------------------------------------- */
/* Section heading                                                             */
/* -------------------------------------------------------------------------- */
export function SecHead({ kicker, title, body, cta, ctaHref = '/contact' }) {
  const { t } = useLang();
  return (
    <div className="sec-head">
      <div>
        {kicker ? (
          <Reveal>
            <span className="kicker" style={{ marginBottom: 22 }}>
              {t(kicker)}
            </span>
          </Reveal>
        ) : null}
        <Reveal as="h2" delay={90}>
          {t(title)}
        </Reveal>
      </div>
      <div className="sec-head__body">
        <Reveal delay={170}>
          <p>{t(body)}</p>
        </Reveal>
        {cta ? (
          <Reveal delay={240}>
            <Link href={ctaHref} className="tlink" style={{ marginTop: 26 }}>
              {t(cta)}
              <Icon name="arrow" size={16} />
            </Link>
          </Reveal>
        ) : null}
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* Clients — static hairline grid                                              */
/* -------------------------------------------------------------------------- */
export function Clients() {
  const { t } = useLang();
  return (
    <section className="clients">
      <div className="shell clients__head">
        <p className="clients__label">{t(marqueeTitle)}</p>
        <span className="clients__count num">{clients.length} selected partners</span>
      </div>
      <div className="shell">
        <div className="clients__grid">
          {clients.map((c) => (
            <div className={`clients__cell brand--${c.style}`} key={c.name}>
              {c.logo ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img className="client-logo__img" src={c.logo} alt={c.name} loading="lazy" />
              ) : (
                <>
                  <span className="client-logo__mark" aria-hidden="true">{c.mark}</span>
                  <span className="client-logo__wordmark">{c.name}</span>
                </>
              )}
              {c.country && <span className="client-logo__country">{t(c.country)}</span>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/* Story — numbered rows                                                       */
/* -------------------------------------------------------------------------- */
export function Story() {
  const { t } = useLang();
  return (
    <section className="section" id="story">
      <div className="shell">
        {story.map((s, i) => (
          <Reveal className="story__row" key={s.num} delay={i * 110}>
            <div className="story__num num">{s.num}</div>
            <div>
              <div className="kicker" style={{ marginBottom: 16 }}>
                {t(s.kicker)}
              </div>
              <h3 className="story__title">{t(s.title)}</h3>
            </div>
            <p className="story__body">{t(s.body)}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/* Services — clean numbered list                                              */
/* -------------------------------------------------------------------------- */
export function ServiceList({ items, limit }) {
  const { t } = useLang();
  const list = limit ? items.slice(0, limit) : items;

  return (
    <div className="slist">
      {list.map((s) => (
        <Link href={`/services#${s.slug}`} className="srow" key={s.slug}>
          <span className="srow__num num">{s.num}</span>
          <h3 className="srow__title">{t(s.title)}</h3>
          <p className="srow__desc">{t(s.short)}</p>
          <span className="srow__arw">
            <Icon name="arrowUpRight" size={16} />
          </span>
        </Link>
      ))}
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* Service cards                                                               */
/* -------------------------------------------------------------------------- */
export function ServiceCards({ items }) {
  const { t, lang } = useLang();
  return (
    <div className="cards">
      {items.map((s, i) => (
        <Reveal className="card" key={s.slug} delay={(i % 3) * 90} id={s.slug}>
          <span className="card__num num">{s.num}</span>
          <Icon name={s.icon} size={42} className="card__ico" />
          <h3 className="card__title">{t(s.title)}</h3>
          <p className="card__body">{t(s.short)}</p>
          <ul className="card__list">
            {(s.bullets[lang] || s.bullets.en).map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>
        </Reveal>
      ))}
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* Process                                                                     */
/* -------------------------------------------------------------------------- */
export function Process() {
  const { t } = useLang();
  return (
    <section className="section" id="process">
      <div className="shell">
        <SecHead kicker={sections.process.kicker} title={sections.process.title} body={sections.process.body} />
        <div className="steps">
          {process.map((p, i) => (
            <Reveal className="step" key={p.num} delay={i * 80}>
              <div className="step__num num">{p.num}</div>
              <h3 className="step__title">{t(p.title)}</h3>
              <p className="step__body">{t(p.body)}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/* Works grid                                                                  */
/* -------------------------------------------------------------------------- */
export function WorksGrid({ items }) {
  const { t } = useLang();
  const imageFor = (work) =>
    work.tag === 'branding' ? '/images/work-branding.png' : '/images/work-digital.png';

  if (!items.length) {
    return (
      <div className="works-empty">
        <span className="works-empty__mark" aria-hidden="true">✳</span>
        <h3>{t(sections.works.empty.title)}</h3>
        <p>{t(sections.works.empty.body)}</p>
        <Link href="/contact" className="btn btn--solid">
          {t({ en: 'Request the portfolio', ar: 'اطلب ملف الأعمال' })}
          <Icon name="arrow" size={16} stroke={1.7} />
        </Link>
      </div>
    );
  }

  return (
    <div className="works">
      {items.map((w, i) => (
        <Reveal key={w.slug} delay={(i % 3) * 100}>
          <Link href={`/works/${w.slug}`} className="wcard">
            <div className="wcard__media">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={imageFor(w)} alt={t(w.title)} loading="lazy" />
              <span className="wcard__veil" />
              <span className="wcard__tag">{w.year}</span>
            </div>
            <div className="wcard__meta">
              <h3>{t(w.title)}</h3>
              <em className="num">{w.year}</em>
            </div>
            <div className="wcard__cat">{t(w.category)}</div>
          </Link>
        </Reveal>
      ))}
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* Priorities                                                                  */
/* -------------------------------------------------------------------------- */
export function Priorities() {
  const { t } = useLang();
  return (
    <section className="section" id="priorities">
      <div className="shell">
        <SecHead kicker={sections.priorities.kicker} title={sections.priorities.title} />
        <div className="prios">
          {priorities.map((p, i) => (
            <Reveal className="prio" key={p.title.en} delay={i * 100}>
              <h3>{t(p.title)}</h3>
              <p>{t(p.body)}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/* Industries                                                                  */
/* -------------------------------------------------------------------------- */
export function Industries() {
  const { t } = useLang();
  return (
    <section className="section" id="industries">
      <div className="shell">
        <SecHead
          kicker={sections.industries.kicker}
          title={sections.industries.title}
          body={sections.industries.body}
        />
        <div className="inds">
          {industries.map((ind, i) => (
            <Reveal className="ind" key={ind.name.en} delay={(i % 4) * 80}>
              <Icon name={ind.icon} size={30} />
              <span>{t(ind.name)}</span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/* CTA band                                                                    */
/* -------------------------------------------------------------------------- */
export function CtaBand() {
  const { t } = useLang();
  return (
    <section className="cta" style={{ paddingBlock: 'clamp(64px, 8vw, 118px)' }}>
      <div className="shell">
        <Reveal as="h2" className="cta__big">
          {t({ en: 'Let’s build something', ar: 'لنبنِ شيئاً' })}{' '}
          <em>{t({ en: 'worth remembering', ar: 'يستحق أن يُذكَر' })}</em>
        </Reveal>
        <Reveal delay={90}>
          <p className="cta__meta">
            {t({
              en: 'Tell us what you are building. You will hear back within one business day — in English or Arabic.',
              ar: 'أخبرنا بما تبنيه. سنعود إليك خلال يوم عمل واحد — بالإنجليزية أو العربية.',
            })}
          </p>
        </Reveal>
        <Reveal className="cta__row" delay={140}>
          <Link href="/contact" className="btn btn--solid">
            {t(nav.cta)}
            <Icon name="arrow" size={15} className="btn__arw" />
          </Link>
          <a
            className="btn btn--ghost"
            href={`https://wa.me/${contact.whatsappHref}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {t({ en: 'Chat on WhatsApp', ar: 'تواصل عبر واتساب' })}
          </a>
        </Reveal>
      </div>
    </section>
  );
}
