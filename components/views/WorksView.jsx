'use client';

import Link from 'next/link';
import { useState } from 'react';
import { WorksGrid, SecHead, CtaBand } from '@/components/Sections';
import { works, workFilters, sections } from '@/lib/content';
import { useLang } from '@/lib/i18n';
import Reveal from '@/components/Reveal';

export default function WorksView() {
  const { t } = useLang();
  const [filter, setFilter] = useState('all');
  const items = filter === 'all' ? works : works.filter((w) => w.tag === filter);

  return (
    <>
      <header className="phead">
        <div className="shell" style={{ position: 'relative' }}>
          <Reveal>
            <div className="crumbs">
              <Link href="/">{t({ en: 'Home', ar: 'الرئيسية' })}</Link>
              <span>/</span>
              <span>{t({ en: 'Work', ar: 'الأعمال' })}</span>
            </div>
          </Reveal>
          <Reveal as="h1" delay={80}>
            {t({ en: 'Selected work', ar: 'أعمال مختارة' })}
          </Reveal>
          <Reveal delay={160}>
            <p className="phead__sub" style={{ marginTop: 24 }}>
              {t(sections.works.body)}
            </p>
          </Reveal>
        </div>
      </header>

      <section className="section" style={{ paddingTop: 'clamp(30px, 4vw, 50px)' }}>
        <div className="shell">
          {works.length > 0 && (
          <div className="filters">
            {workFilters.map((f) => (
              <button
                key={f.id}
                className={`filter ${filter === f.id ? 'on' : ''}`}
                onClick={() => setFilter(f.id)}
              >
                {t(f.label)}
              </button>
            ))}
            <span
              className="muted"
              style={{ alignSelf: 'center', marginInlineStart: 8, fontSize: '0.85rem' }}
            >
              {items.length} / {works.length}
            </span>
          </div>
          )}
          <WorksGrid items={items} key={filter} />
        </div>
      </section>

      <CtaBand />
    </>
  );
}
