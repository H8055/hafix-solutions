import Link from 'next/link';
import Nav from '@/components/industrial/IndNav';
import Footer from '@/components/industrial/IndFooter';
import SmoothLang from '@/components/industrial/SmoothLang';
import '@/app/industrial.css';
import { contact } from '@/lib/content';

export const metadata = {
  title: 'Industrial Materials Supply — Hafix Company Ltd | Al Jubail, Saudi Arabia',
  description:
    'Hafix Company Ltd supplies civil, mechanical, electrical, safety and oil & gas industrial materials to contractors and industrial operators across Saudi Arabia. Al Jubail, KSA. +966 53 698 5370',
  keywords: [
    'industrial materials supplier Saudi Arabia',
    'material trading Al Jubail',
    'oil and gas materials supplier KSA',
    'civil engineering materials Saudi Arabia',
    'electrical instrumentation materials Jubail',
    'PPE supplier Saudi Arabia',
    'Hafix Company Ltd',
  ],
  alternates: { canonical: 'https://www.hafixsolution.com/industrial-materials-supply' },
  openGraph: {
    title: 'Industrial Materials Supply — Hafix Company Ltd',
    description:
      'Civil, mechanical, electrical, safety and oil & gas materials supplied to international standards across the Kingdom.',
    url: 'https://www.hafixsolution.com/industrial-materials-supply',
    images: ['/industrial/hero-yard.jpg'],
  },
};

export default function IndustrialLayout({ children }) {
  return (
    <div className="ims">
      <SmoothLang />
      <Nav />
      <main>{children}</main>
      <Footer />
      <a
        className="ind-wa"
        href={`https://wa.me/${contact.whatsappHref}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M21 11.5a8.4 8.4 0 0 1-12.4 7.4L3 21l2.2-5.4A8.4 8.4 0 1 1 21 11.5Z" />
          <path d="M8.8 9.2c.2 1.9 1.8 3.5 3.7 3.7" />
        </svg>
        WhatsApp
      </a>
    </div>
  );
}
