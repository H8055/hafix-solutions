import { Source_Serif_4, Inter, IBM_Plex_Sans_Arabic } from 'next/font/google';
import './globals.css';
import { LanguageProvider } from '@/lib/i18n';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import LayoutSwitch from '@/components/LayoutSwitch';
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
    default: 'Hafix Solution — Technology & Creative Studio in Saudi Arabia, the UAE & India',
    template: '%s | Hafix Solution',
  },
  description:
    'Hafix Solution is a bilingual technology and creative studio headquartered in Al Jubail, Saudi Arabia, with teams in Dubai, Qatar, Kuwait and India. Digital marketing, web development, business software, end-to-end solutions, branding and social media management.',
  keywords: [
    'Hafix Solution',
    'digital marketing Saudi Arabia',
    'web development Al Jubail',
    'software company Saudi Arabia',
    'digital agency Dubai',
    'branding agency GCC',
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
    title: 'Hafix Solution — Technology & Creative Studio in Saudi Arabia',
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
  name: 'Hafix Company Ltd',
  alternateName: ['Hafix Solution', 'حافيكس سوليوشن'],
  legalName: 'Hafix Company Ltd',
  description:
    'Technology and creative studio headquartered in Al Jubail, Saudi Arabia, serving clients across Saudi Arabia, the UAE, Qatar, Kuwait and India: digital marketing, web development, business software, end-to-end software solutions, branding and social media management.',
  vatID: '314775904400003',
  taxID: '7054257022',
  url: 'https://www.hafixsolution.com',
  telephone: contact.phone,
  email: contact.email,
  foundingDate: company.founded,
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Ibn Al Bitar, Al Safa District',
    addressLocality: 'Al Jubail',
    postalCode: '35514',
    addressRegion: 'Eastern Province',
    addressCountry: 'SA',
  },
  areaServed: [
    { '@type': 'Country', name: 'Saudi Arabia' },
    { '@type': 'Country', name: 'United Arab Emirates' },
    { '@type': 'Country', name: 'Qatar' },
    { '@type': 'Country', name: 'Kuwait' },
    { '@type': 'Country', name: 'India' },
    { '@type': 'Place', name: 'Al Jubail' },
    { '@type': 'Place', name: 'Dubai' },
    { '@type': 'Place', name: 'Doha' },
    { '@type': 'Place', name: 'Kuwait City' },
    { '@type': 'Place', name: 'Mangalore' },
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
          <LayoutSwitch>{children}</LayoutSwitch>
        </LanguageProvider>
      </body>
    </html>
  );
}
