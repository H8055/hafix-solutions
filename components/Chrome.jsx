'use client';

import { useEffect, useState } from 'react';

/* -------------------------------------------------------------------------- */
/* Quiet preloader — first visit only                                          */
/* -------------------------------------------------------------------------- */
export function Preloader() {
  const [pct, setPct] = useState(0);
  const [done, setDone] = useState(false);
  const [show, setShow] = useState(false);

  useEffect(() => {
    let seen = false;
    try {
      seen = window.sessionStorage.getItem('hafix-pre') === '1';
    } catch (e) {
      /* ignore */
    }
    if (seen) return;

    setShow(true);
    document.documentElement.dataset.lock = 'true';
    let v = 0;
    const tick = setInterval(() => {
      v += Math.random() * 18 + 9;
      if (v >= 100) {
        setPct(100);
        clearInterval(tick);
        setTimeout(() => {
          setDone(true);
          document.documentElement.dataset.lock = 'false';
          try {
            window.sessionStorage.setItem('hafix-pre', '1');
          } catch (e) {
            /* ignore */
          }
          setTimeout(() => setShow(false), 800);
        }, 220);
      } else {
        setPct(Math.round(v));
      }
    }, 70);
    return () => clearInterval(tick);
  }, []);

  if (!show) return null;

  return (
    <div className={`pre ${done ? 'done' : ''}`} aria-hidden="true">
      <div className="pre__inner">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="pre__mark" src="/brand/logo-dark.png" alt="Hafix Solution" />
        <div className="pre__bar">
          <span style={{ width: `${pct}%` }} />
        </div>
        <div className="pre__name">Hafix Solution</div>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* Floating WhatsApp + back to top                                             */
/* -------------------------------------------------------------------------- */
export function Floaters({ whatsappHref }) {
  const [up, setUp] = useState(false);

  useEffect(() => {
    const onScroll = () => setUp(window.scrollY > 700);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <a
        className="wafloat"
        href={`https://wa.me/${whatsappHref}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M17.47 14.38c-.3-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.51.07-.78.37-.27.3-1.02 1-.99 2.43.03 1.43 1.03 2.82 1.18 3.01.15.2 2.03 3.1 4.92 4.23.69.3 1.22.48 1.64.61.69.22 1.32.19 1.82.11.55-.08 1.75-.72 2-1.41.25-.69.25-1.28.17-1.41-.07-.13-.27-.2-.57-.35Z" />
          <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.27-1.38a9.9 9.9 0 0 0 4.77 1.21h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.86 9.86 0 0 0 12.04 2Zm0 18.15h-.01a8.2 8.2 0 0 1-4.19-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.19 8.19 0 0 1-1.26-4.38c0-4.54 3.7-8.23 8.25-8.23 2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.42 5.82c0 4.54-3.7 8.23-8.24 8.23Z" />
        </svg>
        <span>WhatsApp</span>
      </a>
      <button
        className={`totop ${up ? 'on' : ''}`}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Back to top"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M12 19V6M6 12l6-6 6 6" />
        </svg>
      </button>
    </>
  );
}
