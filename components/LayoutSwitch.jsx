'use client';

import { usePathname } from 'next/navigation';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import { Preloader, Floaters } from '@/components/Chrome';
import ScrollProgress from '@/components/ScrollProgress';
import { contact } from '@/lib/content';

/**
 * The industrial / business-unit routes are a separate brand line and carry
 * their own nav, footer and floating actions (defined in their own layout).
 * Next.js nests layouts, so without this the creative-studio chrome would
 * render above and below them. One shell, two identities.
 */
export default function LayoutSwitch({ children }) {
  const pathname = usePathname() || '/';
  const isBusinessUnit = pathname.startsWith('/industrial-materials-supply');

  if (isBusinessUnit) return <>{children}</>;

  return (
    <>
      <ScrollProgress />
      <Preloader />
      <span className="grain" aria-hidden="true" />
      <Nav />
      <main>{children}</main>
      <Footer />
      <Floaters whatsappHref={contact.whatsappHref} />
    </>
  );
}
