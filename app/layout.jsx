import { Source_Serif_4, Inter, IBM_Plex_Sans_Arabic } from 'next/font/google';
import './globals.css';
import { LanguageProvider } from '@/lib/i18n';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import { Preloader, Floaters } from '@/components/Chrome';
import ScrollProgress from '@/components/ScrollProgress';
import { contact, services, company } from '@/lib/content';

const display = Source_Serif_4({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-serif',
  display: 'swap',
});

const sans = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
});

const arDisplay = IBM_Plex_Sans_Arabic({
  subsets: ['arabic', 'latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-plex-ar',
  display: 'swap',
});

const arSans = IBM_Plex_Sans_Arabic({
  subsets: ['arabic', 'latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-ibm-arabic',
  display: 'swap',
});

export const metadata = {
  metadataBase: new URL('https://www.hafixsolution.com'),
  title: {
    default: 'Hafix Solution — Technology & Creative Studio in Dammam, Saudi Arabia',
    template: '%s | Hafix Solution',
  },
  description:
    'Hafix Solution is a bilingual technology and creative studio in Dammam, Saudi Arabia. Digital marketing, web development, business software, end-to-end solutions, branding and social media management.',
  keywords: [
    'Hafix Solution',
    'digital marketing Saudi Arabia',
    'web development Dammam',
    'software company Dammam',
    'branding agency Saudi Arabia',
    'social media management Khobar',
    'شركة تسويق رقمي الدمام',
    'تطوير مواقع الدمام',
    'برمجيات الشركات السعودية',
  ],
  icons: {
    icon: '/favicon.ico',
    apple: '/brand/favicon.png',
  },
  openGraph: {
    title: 'Hafix Solution — Technology & Creative Studio in Dammam',
    description:
      'Digital marketing, web development, business software and branding for companies across the Gulf. English and Arabic, by one accountable team.',
    type: 'website',
    locale: 'en_US',
    alternateLocale: 'ar_SA',
    siteName: 'Hafix Solution',
  },
  alternates: {
    languages: { en: '/', ar: '/' },
  },
};

export const viewport = {
  themeColor: '#ffffff',
  width: 'device-width',
  initialScale: 1,
};


const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Hafix Solution',
  alternateName: 'حافيكس سوليوشن',
  description:
    'Technology and creative studio in Dammam, Saudi Arabia: digital marketing, web development, business software, end-to-end software solutions, branding and social media management.',
  url: 'https://www.hafixsolution.com',
  telephone: contact.phone,
  email: contact.email,
  foundingDate: company.founded,
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Office 12, King Saud Street, Al Khobar Al Shamaliya',
    addressLocality: 'Dammam',
    postalCode: '31421',
    addressRegion: 'Eastern Province',
    addressCountry: 'SA',
  },
  areaServed: [
    { '@type': 'Country', name: 'Saudi Arabia' },
    { '@type': 'Place', name: 'Dammam' },
    { '@type': 'Place', name: 'Al Khobar' },
    { '@type': 'Place', name: 'Riyadh' },
    { '@type': 'Place', name: 'Jeddah' },
  ],
  knowsLanguage: ['en', 'ar'],
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday'],
      opens: '09:00',
      closes: '18:00',
    },
  ],
  priceRange: 'SAR',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Services',
    itemListElement: services.map((s) => ({
      '@type': 'Offer',
      itemOffered: { '@type': 'Service', name: s.title.en, alternateName: s.title.ar },
    })),
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      dir="ltr"
      data-lang="en"
      className={`${display.variable} ${sans.variable} ${arDisplay.variable} ${arSans.variable}`}
    >
      <body>
        <LanguageProvider>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          />
          <ScrollProgress />
          <Preloader />
          <span className="grain" aria-hidden="true" />
          <Nav />
          <main>{children}</main>
          <Footer />
          <Floaters whatsappHref={contact.whatsappHref} />
        </LanguageProvider>
      </body>
    </html>
  );
}
