'use client';

import { usePathname, useRouter } from 'next/navigation';
import { useLang } from '@/lib/i18n';

/**
 * Two-state switch between Hafix's two business identities.
 *   Tech       → /                        (technology & creative studio)
 *   Materials  → /industrial-materials-supply
 * The thumb slides to whichever division you are in; clicking the other
 * navigates there. The industrial route renders its own dark variant via
 * the `on-dark` wrapper class, so it reads on the graphite bar too.
 */
export default function DivisionToggle({ variant = 'light' }) {
  const pathname = usePathname() || '/';
  const router = useRouter();
  const { t } = useLang();

  const onMaterials = pathname.startsWith('/industrial-materials-supply');

  const go = (target) => {
    if (target === 'materials' && !onMaterials) {
      router.push('/industrial-materials-supply');
    } else if (target === 'tech' && onMaterials) {
      router.push('/');
    }
  };

  return (
    <div
      className={`divt divt--${variant} ${onMaterials ? 'is-materials' : 'is-tech'}`}
      role="group"
      aria-label={t({ en: 'Choose division', ar: 'اختر القطاع' })}
    >
      <span className="divt__thumb" aria-hidden="true" />

      <button
        type="button"
        className={`divt__opt ${!onMaterials ? 'on' : ''}`}
        onClick={() => go('tech')}
        aria-pressed={!onMaterials}
        title={t({ en: 'Technology & creative studio', ar: 'استوديو تقني وإبداعي' })}
      >
        {t({ en: 'Tech', ar: 'تقنية' })}
      </button>

      <button
        type="button"
        className={`divt__opt ${onMaterials ? 'on' : ''}`}
        onClick={() => go('materials')}
        aria-pressed={onMaterials}
        title={t({ en: 'Industrial materials supply', ar: 'توريد المواد الصناعية' })}
      >
        {t({ en: 'Materials', ar: 'مواد' })}
      </button>
    </div>
  );
}
