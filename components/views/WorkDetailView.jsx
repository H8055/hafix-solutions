'use client';

import Link from 'next/link';
import { works, workDetails, sections } from '@/lib/content';
import { useLang } from '@/lib/i18n';
import Reveal from '@/components/Reveal';
import Icon from '@/components/Icons';
import { CtaBand } from '@/components/Sections';

export default function WorkDetailView({ slug }) {
  const { t } = useLang();
  const idx = works.findIndex((w) => w.slug === slug);
  const project = works[idx] || works[0];
  const detail = workDetails[project.slug];
  const next = works[(idx + 1) % works.length];

  const blocks = [
    { label: { en: 'The challenge', ar: 'التحدي' }, value: detail?.challenge },
    { label: { en: 'Our approach', ar: 'ما فعلناه' }, value: detail?.approach },
    { label: { en: 'The outcome', ar: 'النتيجة' }, value: detail?.outcome },
  ];

  return (
    <>
      <header className="phead">
        <div className="shell" style={{ position: 'relative' }}>
          <Reveal>
            <div className="crumbs">
              <Link href="/">{t({ en: 'Home', ar: 'الرئيسية' })}</Link>
              <span>/</span>
              <Link href="/works">{t({ en: 'Work', ar: 'الأعمال' })}</Link>
              <span>/</span>
              <span>{t(project.title)}</span>
            </div>
          </Reveal>
          <Reveal as="h1" delay={80}>
            {t(project.title)}
          </Reveal>
          <Reveal delay={150}>
            <div
              style={{
                display: 'flex',
                gap: 18,
                flexWrap: 'wrap',
                alignItems: 'center',
                marginTop: 20,
                color: 'var(--muted)',
              }}
            >
              <span className="pill">{t(project.category)}</span>
              <span className="pill num">{project.year}</span>
              <span className="pill">{t({ en: 'Dammam, KSA', ar: 'الدمام، السعودية' })}</span>
            </div>
          </Reveal>
        </div>
      </header>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="shell">
          <Reveal>
            <div
              style={{
                border: '1px solid var(--line)',
                overflow: 'hidden',
                background: 'var(--ink-2)',
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`/works/${project.slug}.svg`}
                alt={t(project.title)}
                style={{ width: '100%', height: 'auto', display: 'block' }}
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="shell">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: 'clamp(20px, 3vw, 44px)',
              borderTop: '1px solid var(--line)',
              paddingTop: 'clamp(30px, 4vw, 50px)',
              marginBottom: 'clamp(40px, 6vw, 80px)',
            }}
          >
            {(detail?.metrics || []).map((m, i) => (
              <Reveal key={m.value} delay={i * 90}>
                <div
                  style={{
                    fontFamily: 'var(--font-display), Georgia, serif',
                    fontSize: 'clamp(2.4rem, 5vw, 4rem)',
                    lineHeight: 1,
                    color: 'var(--red-2)',
                    marginBottom: 10,
                  }}
                  className="num"
                >
                  {m.value}
                </div>
                <div style={{ color: 'var(--muted)', fontSize: '0.9rem' }}>{t(m.label)}</div>
              </Reveal>
            ))}
          </div>

          <div className="tl">
            {blocks.map((b, i) => (
              <Reveal className="tl__row" key={b.label.en} delay={i * 90}>
                <div className="tl__year num">{String(i + 1).padStart(2, '0')}</div>
                <h3 className="tl__title">{t(b.label)}</h3>
                <p className="tl__body">{t(b.value)}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section--tight" style={{ paddingBottom: 'clamp(60px, 8vw, 110px)' }}>
        <div className="shell">
          <Reveal>
            <Link
              href={`/works/${next.slug}`}
              className="vcard"
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                gap: 24,
                flexWrap: 'wrap',
              }}
            >
              <div>
                <div className="kicker" style={{ marginBottom: 12 }}>
                  {t({ en: 'Next project', ar: 'المشروع التالي' })}
                </div>
                <h3 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.4rem)' }}>{t(next.title)}</h3>
                <span className="muted" style={{ fontSize: '0.9rem' }}>
                  {t(next.category)}
                </span>
              </div>
              <span className="srow__arw">
                <Icon name="arrow" size={18} />
              </span>
            </Link>
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
