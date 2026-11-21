'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { useLang } from '@/lib/i18n';
import { testimonials, faqs, sections, ui, contact, services } from '@/lib/content';
import Reveal from '@/components/Reveal';
import Icon from '@/components/Icons';

/* -------------------------------------------------------------------------- */
/* Testimonials                                                                */
/* -------------------------------------------------------------------------- */
export function Testimonials() {
  const { t } = useLang();
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);

  const go = useCallback((d) => {
    setI((v) => (v + d + testimonials.length) % testimonials.length);
  }, []);

  useEffect(() => {
    if (paused || !testimonials.length) return;
    const id = setInterval(() => go(1), 7000);
    return () => clearInterval(id);
  }, [paused, go]);

  if (!testimonials.length) return null;

  const item = testimonials[i];
  const initials = t(item.author)
    .split(' ')
    .slice(0, 2)
    .map((w) => w[0])
    .join('');

  return (
    <section className="section" id="testimonials">
      <div className="shell">
        <SecHeadLite kicker={sections.testimonials.kicker} title={sections.testimonials.title} />
        <Reveal
          className="tst"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className="tst__quote" key={i} style={{ animation: 'rotIn .7s cubic-bezier(.22,1,.36,1) both' }}>
            “{t(item.quote)}”
          </div>
          <div className="tst__who">
            <span className="tst__av">{initials}</span>
            <div>
              <b>{t(item.author)}</b>
              <span>{t(item.role)}</span>
            </div>
          </div>
          <div className="tst__nav">
            <button className="tst__btn" onClick={() => go(-1)} aria-label="Previous">
              <Icon name="arrow" size={18} />
            </button>
            <button className="tst__btn" onClick={() => go(1)} aria-label="Next">
              <Icon name="arrow" size={18} />
            </button>
            <div className="tst__dots">
              {testimonials.map((_, idx) => (
                <span
                  key={idx}
                  className={`tst__dot ${idx === i ? 'on' : ''}`}
                  onClick={() => setI(idx)}
                  style={{ cursor: 'pointer' }}
                />
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function SecHeadLite({ kicker, title }) {
  const { t } = useLang();
  return (
    <div style={{ marginBottom: 'clamp(30px, 4vw, 54px)' }}>
      <Reveal>
        <span className="kicker" style={{ marginBottom: 20 }}>{t(kicker)}</span>
      </Reveal>
      <Reveal as="h2" delay={80}>
        {t(title)}
      </Reveal>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* FAQ                                                                         */
/* -------------------------------------------------------------------------- */
export function Faq() {
  const { t } = useLang();
  const [open, setOpen] = useState(0);
  return (
    <section className="section" id="faq">
      <div className="shell">
        <SecHeadLite kicker={sections.faq.kicker} title={sections.faq.title} />
        <div className="faq">
          {faqs.map((f, i) => (
            <div className={`faq__item ${open === i ? 'open' : ''}`} key={f.q.en}>
              <button
                className="faq__q"
                onClick={() => setOpen(open === i ? -1 : i)}
                aria-expanded={open === i}
              >
                <span>{t(f.q)}</span>
                <span className="faq__ico" aria-hidden="true" />
              </button>
              <div className="faq__a">
                <div>{t(f.a)}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/* Contact info + form                                                         */
/* -------------------------------------------------------------------------- */
export function ContactBlock({ withForm = true }) {
  const { t, lang } = useLang();
  const [state, setState] = useState({ status: 'idle', msg: '' });
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: services[0].slug,
    message: '',
    consent: true,
  });

  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setState({ status: 'err', msg: t(ui.form.required) });
      return;
    }
    setState({ status: 'sending', msg: t(ui.sending) });
    setTimeout(() => {
      setState({ status: 'ok', msg: t(ui.sent) });
      setForm((f) => ({ ...f, name: '', email: '', phone: '', company: '', message: '' }));
    }, 900);
  };

  return (
    <div className="contact">
      <div className="cinfo">
        <Reveal className="cinfo__item">
          <h4>{t(contactPageLabel('office'))}</h4>
          <p>{t(contact.address)}</p>
        </Reveal>
        <Reveal className="cinfo__item" delay={70}>
          <h4>{t(contactPageLabel('phone'))}</h4>
          <p>
            <a href={`tel:${contact.phoneHref}`}>{contact.phone}</a>
          </p>
        </Reveal>
        <Reveal className="cinfo__item" delay={120}>
          <h4>{t(contactPageLabel('whatsapp'))}</h4>
          <p>
            <a
              href={`https://wa.me/${contact.whatsappHref}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {contact.whatsapp}
            </a>
          </p>
        </Reveal>
        <Reveal className="cinfo__item" delay={170}>
          <h4>{t(contactPageLabel('email'))}</h4>
          <p>
            <a href={`mailto:${contact.email}`}>{contact.email}</a>
            <br />
            <a href={`mailto:${contact.sales}`}>{contact.sales}</a>
          </p>
        </Reveal>
        <Reveal className="cinfo__item" delay={220}>
          <h4>{t(contactPageLabel('hours'))}</h4>
          <p>{t(contact.hours)}</p>
        </Reveal>
      </div>

      {withForm ? (
        <Reveal delay={100}>
          <form className="form" onSubmit={submit} noValidate>
            <div className="form__row">
              <div className="field">
                <label htmlFor="c-name">{t(ui.form.name)}</label>
                <input
                  id="c-name"
                  value={form.name}
                  onChange={set('name')}
                  placeholder={t({ en: 'Khalid Al-Faraj', ar: 'خالد الفرج' })}
                />
              </div>
              <div className="field">
                <label htmlFor="c-email">{t(ui.form.email)}</label>
                <input
                  id="c-email"
                  type="email"
                  value={form.email}
                  onChange={set('email')}
                  placeholder="name@company.com"
                />
              </div>
            </div>
            <div className="form__row">
              <div className="field">
                <label htmlFor="c-phone">{t(ui.form.phone)}</label>
                <input
                  id="c-phone"
                  value={form.phone}
                  onChange={set('phone')}
                  placeholder="+966 5X XXX XXXX"
                />
              </div>
              <div className="field">
                <label htmlFor="c-company">{t(ui.form.company)}</label>
                <input
                  id="c-company"
                  value={form.company}
                  onChange={set('company')}
                  placeholder={t({ en: 'Company name', ar: 'اسم الشركة' })}
                />
              </div>
            </div>
            <div className="form__row">
              <div className="field">
                <label htmlFor="c-service">{t(ui.form.service)}</label>
                <select id="c-service" value={form.service} onChange={set('service')}>
                  {services.map((s) => (
                    <option key={s.slug} value={s.slug}>
                      {t(s.title)}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="field">
              <label htmlFor="c-message">{t(ui.form.message)}</label>
              <textarea
                id="c-message"
                value={form.message}
                onChange={set('message')}
                placeholder={t({
                  en: 'A few lines about your business, timeline and goals…',
                  ar: 'سطور قليلة عن نشاطك والجدول الزمني وأهدافك…',
                })}
              />
            </div>
            <label className="check">
              <input
                type="checkbox"
                checked={form.consent}
                onChange={(e) => setForm((f) => ({ ...f, consent: e.target.checked }))}
              />
              <span>{t(ui.form.consent)}</span>
            </label>
            <div style={{ display: 'flex', gap: 18, alignItems: 'center', flexWrap: 'wrap' }}>
              <button type="submit" className="btn btn--solid">
                {state.status === 'sending' ? t(ui.sending) : t(ui.sendMessage)}
                <Icon name="arrow" size={16} className="btn__arw" />
              </button>
              <span className={`form__msg ${state.status}`}>{state.msg}</span>
            </div>
          </form>
        </Reveal>
      ) : null}
    </div>
  );
}

function contactPageLabel(kind) {
  return {
    office: { en: 'Office', ar: 'المكتب' },
    phone: { en: 'Phone', ar: 'الهاتف' },
    whatsapp: { en: 'WhatsApp', ar: 'واتساب' },
    email: { en: 'Email', ar: 'البريد الإلكتروني' },
    hours: { en: 'Working hours', ar: 'ساعات العمل' },
  }[kind];
}
