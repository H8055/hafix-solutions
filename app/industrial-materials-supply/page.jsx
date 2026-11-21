import IndustrialPage from './IndustrialPage';
import { indContact } from '@/lib/industrial';

export const metadata = {
  title: 'Industrial Materials Supply — Hafix Company Ltd, Al Jubail',
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Hafix Company Ltd',
  alternateName: 'Hafix Industrial Materials Supply',
  description:
    'Industrial material trading and supply company in Al Jubail, Saudi Arabia — civil engineering, mechanical, electrical & instrumentation, safety & chemicals, oil & gas and specialised materials.',
  url: 'https://www.hafixsolution.com/industrial-materials-supply',
  email: indContact.email,
  telephone: indContact.phone,
  slogan: 'Integrity. Quality. Precision',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Ibn Al Bitar, Al Safa District',
    addressLocality: 'Al Jubail',
    postalCode: '35514',
    addressCountry: 'SA',
  },
  areaServed: [{ '@type': 'Country', name: 'Saudi Arabia' }],
  knowsAbout: [
    'Civil engineering materials',
    'Steel reinforcement',
    'Pipes fittings and valves',
    'Electrical and instrumentation materials',
    'PPE and fire safety equipment',
    'Oil and gas tubulars',
    'Industrial chemicals',
  ],
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <IndustrialPage />
    </>
  );
}
