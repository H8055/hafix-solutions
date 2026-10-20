'use client';

import Link from 'next/link';
import { ServiceCards, Process, SecHead, CtaBand } from '@/components/Sections';
import { Faq } from '@/components/Interactions';
import { services } from '@/lib/content';
import { useLang } from '@/lib/i18n';
import Reveal from '@/components/Reveal';
import Icon from '@/components/Icons';

export default function ServicesView() {
  const { t, lang } = useLang();

  const models = [
    {
      num: '01',
      title: { en: 'Project', ar: 'مشروع محدد' },
      body: {
        en: 'A fixed scope, fixed price and fixed date. Ideal for websites, branding programmes and one-off builds.',
        ar: 'نطاق ثابت وسعر ثابت وموعد ثابت. مثالي للمواقع وبرامج الهوية والمشاريع لمرة واحدة.',
      },
      bullets: {
        en: ['Fixed quotation', 'Dated milestones', 'Warranty period included'],
        ar: ['عرض سعر ثابت', 'مراحل مؤرّخة', 'فترة ضمان مشمولة'],
      },
    },
    {
      num: '02',
      title: { en: 'Retainer', ar: 'اشتراك شهري' },
      body: {
        en: 'A monthly package for marketing, social media, content production and ongoing optimisation.',
        ar: 'باقة شهرية للتسويق ووسائل التواصل وإنتاج المحتوى والتحسين المستمر.',
      },
      bullets: {
        en: ['Predictable monthly fee', 'Monthly reporting', 'Pause or scale anytime'],
        ar: ['رسوم شهرية واضحة', 'تقرير شهري', 'إيقاف أو توسيع في أي وقت'],
      },
    },
    {
      num: '03',
      title: { en: 'Partnership', ar: 'شراكة' },
      body: {
        en: 'We become your technology department: software, infrastructure, support and strategy under one annual contract.',
        ar: 'نصبح قسم التقنية لديك: البرمجيات والبنية التحتية والدعم والاستراتيجية ضمن عقد سنوي واحد.',
      },
      bullets: {
        en: ['Dedicated team', 'SLA-backed support', 'Roadmap ownership'],
        ar: ['فريق مخصّص', 'دعم بمستوى خدمة موثّق', 'إدارة خريطة المنتج'],
      },
    },
  ];

  return (
    <>
      <header className="phead">
        <div className="shell" style={{ position: 'relative' }}>
          <Reveal>
            <div className="crumbs">
              <Link href="/">{t({ en: 'Home', ar: 'الرئيسية' })}</Link>
              <span>/</span>
              <span>{t({ en: 'Services', ar: 'الخدمات' })}</span>
            </div>
          </Reveal>
          <Reveal as="h1" delay={80}>
            {t({ en: 'Fourteen disciplines,', ar: 'أربعة عشر تخصصاً،' })}
            <br />
            <em className="muted" style={{ fontStyle: 'italic' }}>
              {t({ en: 'one accountable team.', ar: 'وفريق واحد مسؤول.' })}
            </em>
          </Reveal>
          <Reveal delay={160}>
            <p className="phead__sub" style={{ marginTop: 24 }}>
              {t({
                en: 'Everything below is delivered in-house in Dammam, in English and Arabic, with the same project manager from kickoff to launch.',
                ar: 'كل ما يلي يُنفَّذ داخل استوديونا في الدمام، بالإنجليزية والعربية، مع مدير مشروع واحد من الانطلاقة حتى الإطلاق.',
              })}
            </p>
          </Reveal>
        </div>
      </header>

      <section className="section" style={{ paddingTop: 'clamp(40px, 5vw, 70px)' }}>
        <div className="shell">
          <ServiceCards items={services} />
        </div>
      </section>

      <Process />

      <section className="section--tight" style={{ paddingBottom: 'clamp(60px, 8vw, 110px)' }}>
        <div className="shell">
          <SecHead
            kicker={{ en: 'Engagement', ar: 'نموذج التعاون' }}
            title={{ en: 'How you can work with us', ar: 'كيف يمكنك العمل معنا' }}
            body={{
              en: 'Three engagement models, so you can start where you are — a single project, a monthly retainer, or a long-term technology partnership.',
              ar: 'ثلاثة نماذج للتعاون، لتبدأ من حيث أنت: مشروع واحد، أو اشتراك شهري، أو شراكة تقنية طويلة الأمد.',
            }}
          />
          <div className="cards">
            {models.map((m, i) => (
              <Reveal className="card" key={m.num} delay={i * 90}>
                <span className="card__num num">{m.num}</span>
                <Icon name={['layers', 'share', 'chip'][i]} size={42} className="card__ico" />
                <h3 className="card__title">{t(m.title)}</h3>
                <p className="card__body">{t(m.body)}</p>
                <ul className="card__list">
                  {(m.bullets[lang] || m.bullets.en).map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Faq />
      <CtaBand />
    </>
  );
}
