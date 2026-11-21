'use client';

import Link from 'next/link';
import { aboutPage, stats, company, story } from '@/lib/content';
import { useLang } from '@/lib/i18n';
import Reveal from '@/components/Reveal';
import { Process, SecHead, CtaBand } from '@/components/Sections';

export default function AboutView() {
  const { t } = useLang();

  return (
    <>
      <header className="phead">
        <div className="shell" style={{ position: 'relative' }}>
          <Reveal>
            <div className="crumbs">
              <Link href="/">{t({ en: 'Home', ar: 'الرئيسية' })}</Link>
              <span>/</span>
              <span>{t({ en: 'About', ar: 'من نحن' })}</span>
            </div>
          </Reveal>
          <Reveal as="h1" delay={80}>
            {t(aboutPage.title)}
          </Reveal>
          <Reveal delay={160}>
            <p className="phead__sub lead" style={{ marginTop: 26, maxWidth: '62ch' }}>
              {t(aboutPage.lead)}
            </p>
          </Reveal>
        </div>
      </header>

      <section className="section" style={{ paddingTop: 'clamp(30px, 4vw, 50px)' }}>
        <div className="shell">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: 'clamp(20px, 3vw, 40px)',
              borderBlock: '1px solid var(--line)',
              paddingBlock: 'clamp(28px, 4vw, 48px)',
            }}
          >
            {stats.map((s, i) => (
              <Reveal key={s.value} delay={i * 80}>
                <div
                  className="num"
                  style={{
                    fontFamily: 'var(--font-display), Georgia, serif',
                    fontSize: 'clamp(2.6rem, 5.4vw, 4.4rem)',
                    lineHeight: 1,
                    marginBottom: 8,
                  }}
                >
                  {s.value}
                </div>
                <div style={{ color: 'var(--muted)', fontSize: '0.9rem' }}>{t(s.label)}</div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="story">
        <div className="shell">
          <SecHead
            kicker={{ en: 'Our story', ar: 'قصتنا' }}
            title={{ en: 'From a small room in the Eastern Province', ar: 'من غرفة صغيرة في المنطقة الشرقية' }}
            body={{
              en: 'Eight years, one address, and a belief that marketing, design and engineering work better when one team owns all three.',
              ar: 'ثماني سنوات وعنوان واحد، وقناعة بأن التسويق والتصميم والهندسة تعمل بشكل أفضل حين يمتلكها فريق واحد.',
            }}
          />
          <div className="tl" style={{ borderTop: '1px solid var(--line)' }}>
            {aboutPage.timeline.map((r, i) => (
              <Reveal className="tl__row" key={r.year} delay={i * 80}>
                <div className="tl__year num">{r.year}</div>
                <h3 className="tl__title">{t(r.title)}</h3>
                <p className="tl__body">{t(r.body)}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="values">
        <div className="shell">
          <SecHead
            kicker={{ en: 'Values', ar: 'قيمنا' }}
            title={{ en: 'What we hold to', ar: 'ما نتمسك به' }}
            body={{
              en: 'Four commitments that shape who we hire, how we price and which projects we say yes to.',
              ar: 'أربعة التزامات تحدد من نُوظّف وكيف نُسعّر وأي المشاريع نقبلها.',
            }}
          />
          <div className="cards">
            {aboutPage.values.map((v, i) => (
              <Reveal className="card" key={v.title.en} delay={(i % 4) * 90}>
                <span className="card__num num">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="card__title">{t(v.title)}</h3>
                <p className="card__body">{t(v.body)}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Process />

      <section className="section--tight" style={{ paddingBottom: 'clamp(60px, 8vw, 110px)' }}>
        <div className="shell">
          <Reveal>
            <div className="vcard" style={{ padding: 'clamp(30px, 4vw, 56px)' }}>
              <span className="kicker" style={{ marginBottom: 18 }}>
                {t({ en: 'Studio', ar: 'الاستوديو' })}
              </span>
              <h3 style={{ fontSize: 'clamp(1.6rem, 3.4vw, 2.6rem)', marginBottom: 16 }}>
                {company.name}
              </h3>
              <p className="muted" style={{ maxWidth: '60ch' }}>
                {t(story[2].body)}
              </p>
              <div style={{ marginTop: 26, display: 'flex', gap: 14, flexWrap: 'wrap' }}>
                <Link href="/contact" className="btn btn--solid btn--sm">
                  {t({ en: 'Work with us', ar: 'اعمل معنا' })}
                </Link>
                <Link href="/services" className="btn btn--ghost btn--sm">
                  {t({ en: 'See services', ar: 'تصفح الخدمات' })}
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
