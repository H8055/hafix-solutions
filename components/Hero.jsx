'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useLang } from '@/lib/i18n';
import { hero, stats } from '@/lib/content';
import Icon from '@/components/Icons';
import Reveal from '@/components/Reveal';

export default function Hero() {
  const { t, lang } = useLang();
  const words = hero.rotator[lang] || hero.rotator.en;
  const [i, setI] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setI((v) => (v + 1) % words.length), 3400);
    return () => clearInterval(id);
  }, [words.length]);

  return (
    <section className="hero">
      <div className="hero__bg" aria-hidden="true">
        <div className="hero__grid" />
      </div>

      <div className="shell hero__in">
        <Reveal className="hero__eyebrow" delay={100}>
          <span className="kicker">{t(hero.eyebrow)}</span>
        </Reveal>

        <Reveal as="h1" className="hero__title" delay={170}>
          {t(hero.titleA)}
          <span className="hero__rot" key={i}>
            <span>{words[i]}</span>
          </span>
        </Reveal>

        <Reveal delay={260}>
          <p className="hero__sub">{t(hero.sub)}</p>
        </Reveal>

        <Reveal className="hero__cta" delay={340}>
          <Link href="/contact" className="btn btn--solid">
            {t(hero.cta1)}
            <Icon name="arrow" size={15} className="btn__arw" />
          </Link>
          <Link href="/works" className="btn btn--ghost">
            {t(hero.cta2)}
          </Link>
        </Reveal>
      </div>

      <div className="shell hero__in">
        <div className="hero__stats">
          {stats.map((s, idx) => (
            <Reveal className="hero__stat" key={s.value} delay={440 + idx * 80}>
              <b className="num">{s.value}</b>
              <span>{t(s.label)}</span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
