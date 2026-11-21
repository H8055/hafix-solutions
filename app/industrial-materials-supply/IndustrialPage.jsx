'use client';

import { useState } from 'react';
import Icon from '@/components/Icons';
import { useLang } from '@/lib/i18n';
import {
  ind,
  indHero,
  indAbout,
  indCategories,
  indCapabilities,
  indSectors,
  indProcess,
  indQuote,
  indContact,
} from '@/lib/industrial';

/* ---------------------------------------------------------------- hero ---- */
function Hero() {
  const { t } = useLang();
  return (
    <section className="ind-hero">
      <div className="ind-hero__bg">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/industrial/hero-yard.jpg" alt="" fetchPriority="high" />
      </div>
      <div className="ind-shell ind-hero__in">
        <span className="ind-kicker">{t(indHero.eyebrow)}</span>
        <h1 className="ind-h1">
          {t(indHero.h1a)}
          <br />
          <span>{t(indHero.h1b)}</span>
        </h1>
        <p className="ind-lead ind-hero__lead">{t(indHero.lead)}</p>
        <div className="ind-hero__cta">
          <a className="ind-btn ind-btn--solid" href="#contact">
            {t(indHero.cta1)}
            <Icon name="arrow" size={16} stroke={1.8} />
          </a>
          <a className="ind-btn ind-btn--ghost" href="#products">
            {t(indHero.cta2)}
          </a>
        </div>

        <div className="ind-facts">
          {indHero.facts.map((f) => (
            <div className="ind-fact" key={f.value}>
              <b>{f.value}</b>
              <span>{t(f.label)}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------ products ---- */
function Products() {
  const { t, lang } = useLang();
  return (
    <section className="ind-sec ind-sec--paper" id="products">
      <div className="ind-shell">
        <div className="ind-head">
          <span className="ind-kicker">{t({ en: 'Products & services', ar: 'المنتجات والخدمات' })}</span>
          <h2 className="ind-h2">
            {t({ en: 'Six material categories, one supply desk.', ar: 'ست فئات مواد، ونقطة توريد واحدة.' })}
          </h2>
          <p className="ind-muted" style={{ marginTop: 18 }}>
            {t({
              en: 'As a material supplier in Saudi Arabia we hold and source a broad range of engineering and industrial materials — from rebar and cement to instrumentation, PPE and drilling tubulars.',
              ar: 'بصفتنا مورّد مواد في المملكة العربية السعودية، نوفّر ونورّد مجموعة واسعة من المواد الهندسية والصناعية — من حديد التسليح والإسمنت إلى الأجهزة ومعدات الوقاية والمواسير.',
            })}
          </p>
        </div>

        <div className="ind-cats">
          {indCategories.map((c) => (
            <article className="ind-cat" id={c.id} key={c.id}>
              <div className="ind-cat__top">
                <span className="ind-cat__icon">
                  <Icon name={c.icon} size={21} stroke={1.5} />
                </span>
                <span className="ind-cat__num">{c.num}</span>
              </div>
              <h3 className="ind-h3" style={{ color: 'var(--ind-ink)' }}>{t(c.title)}</h3>
              <p style={{ margin: 0, fontSize: '.9rem', color: '#5a6165', lineHeight: 1.65 }}>
                {t(c.body)}
              </p>
              <ul className="ind-cat__list">
                {(c.items[lang] || c.items.en).map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------- capabilities ---- */
function Capabilities() {
  const { t } = useLang();
  return (
    <section className="ind-sec" id="capabilities">
      <div className="ind-shell">
        <div className="ind-head">
          <span className="ind-kicker">{t(indCapabilities.kicker)}</span>
          <h2 className="ind-h2">{t(indCapabilities.title)}</h2>
        </div>
        <div className="ind-caps">
          {indCapabilities.items.map((c, i) => (
            <article className="ind-cap" key={i}>
              <span className="ind-cap__icon">
                <Icon name={c.icon} size={22} stroke={1.5} />
              </span>
              <h3 className="ind-h3">{t(c.title)}</h3>
              <p style={{ margin: 0, fontSize: '.9rem', color: 'var(--ind-muted)', lineHeight: 1.68 }}>
                {t(c.body)}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------- sectors ---- */
function Sectors() {
  const { t } = useLang();
  return (
    <section className="ind-sec ind-sec--tight">
      <div className="ind-shell">
        <div className="ind-head">
          <span className="ind-kicker">{t(indSectors.kicker)}</span>
          <h2 className="ind-h2">{t(indSectors.title)}</h2>
        </div>
        <div className="ind-sectors">
          {indSectors.items.map((s, i) => (
            <div className="ind-sector" key={i}>
              <Icon name={s.icon} size={19} stroke={1.5} />
              {t(s.label)}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------- process ---- */
function Process() {
  const { t } = useLang();
  return (
    <section className="ind-sec ind-sec--paper">
      <div className="ind-shell">
        <div className="ind-head">
          <span className="ind-kicker">{t(indProcess.kicker)}</span>
          <h2 className="ind-h2">{t(indProcess.title)}</h2>
        </div>
        <div className="ind-steps">
          {indProcess.steps.map((s) => (
            <article className="ind-step" key={s.num}>
              <span className="ind-step__num">{s.num}</span>
              <h4 style={{ color: 'var(--ind-ink)' }}>{t(s.title)}</h4>
              <p style={{ margin: 0, fontSize: '.88rem', color: '#5a6165', lineHeight: 1.65 }}>
                {t(s.body)}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* --------------------------------------------------------------- about ---- */
function About() {
  const { t } = useLang();
  return (
    <section className="ind-sec" id="about">
      <div className="ind-shell">
        <div className="ind-about">
          <div>
            <span className="ind-kicker">{t(indAbout.kicker)}</span>
            <h2 className="ind-h2">{t(indAbout.title)}</h2>
            <p className="ind-lead" style={{ marginTop: 22 }}>{t(indAbout.body)}</p>

            <div className="ind-vm">
              <div className="ind-vm__row">
                <h5>{t(indAbout.vision.title)}</h5>
                <p>{t(indAbout.vision.body)}</p>
              </div>
              <div className="ind-vm__row">
                <h5>{t(indAbout.mission.title)}</h5>
                <p>{t(indAbout.mission.body)}</p>
              </div>
            </div>

            <p className="ind-muted" style={{ marginTop: 24 }}>{t(indAbout.close)}</p>
          </div>

          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="ind-about__img" src="/industrial/rig-sunrise.jpg" alt="" loading="lazy" />
        </div>
      </div>
    </section>
  );
}

/* --------------------------------------------------------------- quote ---- */
function Quote() {
  const { t, lang } = useLang();
  const [state, setState] = useState({ status: 'idle', msg: '' });
  const [form, setForm] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    category: indCategories[0].id,
    project: '',
    details: '',
  });

  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.details.trim()) {
      setState({ status: 'err', msg: t(indQuote.form.required) });
      return;
    }
    setState({ status: 'sending', msg: '' });
    setTimeout(() => {
      setState({ status: 'ok', msg: t(indQuote.form.sent) });
      setForm({ name: '', company: '', email: '', phone: '', category: indCategories[0].id, project: '', details: '' });
    }, 700);
  };

  return (
    <section className="ind-sec ind-sec--paper" id="contact">
      <div className="ind-shell">
        <div className="ind-quote">
          <div>
            <span className="ind-kicker">{t(indQuote.kicker)}</span>
            <h2 className="ind-h2">{t(indQuote.title)}</h2>
            <p className="ind-muted" style={{ marginTop: 20 }}>{t(indQuote.body)}</p>

            <div className="ind-contact-list">
              <a href={`tel:${indContact.phoneHref}`} className="ind-tel">
                <Icon name="phone" size={17} stroke={1.6} />
                {indContact.phone}
              </a>
              <a href={`tel:${indContact.phone2Href}`} className="ind-tel">
                <Icon name="phone" size={17} stroke={1.6} />
                {indContact.phone2}
              </a>
              <a href={`mailto:${indContact.sales}`}>
                <Icon name="mail" size={17} stroke={1.6} />
                {indContact.sales}
              </a>
              <div>
                <Icon name="pin" size={17} stroke={1.6} />
                <span>{t(indContact.address)}</span>
              </div>
              <div>
                <Icon name="clock" size={17} stroke={1.6} />
                <span>{t(indContact.hours)}</span>
              </div>
            </div>
          </div>

          <form className="ind-form" onSubmit={submit} noValidate>
            <div className="ind-form__row">
              <div className="ind-field">
                <label htmlFor="i-name">{t(indQuote.form.name)} *</label>
                <input id="i-name" value={form.name} onChange={set('name')} autoComplete="name" />
              </div>
              <div className="ind-field">
                <label htmlFor="i-company">{t(indQuote.form.company)}</label>
                <input id="i-company" value={form.company} onChange={set('company')} autoComplete="organization" />
              </div>
            </div>

            <div className="ind-form__row">
              <div className="ind-field">
                <label htmlFor="i-email">{t(indQuote.form.email)} *</label>
                <input id="i-email" type="email" value={form.email} onChange={set('email')} autoComplete="email" />
              </div>
              <div className="ind-field">
                <label htmlFor="i-phone">{t(indQuote.form.phone)}</label>
                <input id="i-phone" value={form.phone} onChange={set('phone')} autoComplete="tel" placeholder="+966 5X XXX XXXX" />
              </div>
            </div>

            <div className="ind-form__row">
              <div className="ind-field">
                <label htmlFor="i-cat">{t(indQuote.form.category)}</label>
                <select id="i-cat" value={form.category} onChange={set('category')}>
                  {indCategories.map((c) => (
                    <option key={c.id} value={c.id}>
                      {t(c.title)}
                    </option>
                  ))}
                </select>
              </div>
              <div className="ind-field">
                <label htmlFor="i-project">{t(indQuote.form.project)}</label>
                <input id="i-project" value={form.project} onChange={set('project')} />
              </div>
            </div>

            <div className="ind-field">
              <label htmlFor="i-details">{t(indQuote.form.details)} *</label>
              <textarea
                id="i-details"
                value={form.details}
                onChange={set('details')}
                placeholder={t(indQuote.form.detailsPh)}
              />
            </div>

            {state.status === 'ok' && <p className="ind-form__msg ind-form__msg--ok">{state.msg}</p>}
            {state.status === 'err' && <p className="ind-form__msg ind-form__msg--err">{state.msg}</p>}

            <button className="ind-btn ind-btn--solid" type="submit" disabled={state.status === 'sending'}>
              {state.status === 'sending' ? t(indQuote.form.sending) : t(indQuote.form.submit)}
              <Icon name="arrow" size={16} stroke={1.8} />
            </button>
            <p className="ind-form__note">{t(indQuote.form.note)}</p>
          </form>
        </div>
      </div>
    </section>
  );
}

export default function IndustrialPage() {
  return (
    <>
      <Hero />
      <Products />
      <Capabilities />
      <Sectors />
      <Process />
      <About />
      <Quote />
    </>
  );
}
