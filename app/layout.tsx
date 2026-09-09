import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://vikahelp.me'),
  title: 'Помощь с ВНЖ и ИП в Сербии — Вика поможет',
  description: 'Помощь с открытием ИП, подготовкой к подаче на ВНЖ и сопровождением в учреждения Нови-Сада. Общение с сотрудниками на сербском.',
  alternates: { canonical: '/' },
  icons: { icon: '/favicon-v2.svg' },
  openGraph: {
    type: 'website', locale: 'ru_RU', url: '/', siteName: 'Вика поможет',
    title: 'Помощь с ВНЖ и ИП в Сербии — Вика поможет',
    description: 'Помощь с открытием ИП, подготовкой к подаче на ВНЖ и сопровождением в учреждения Нови-Сада.',
    images: [{ url: '/og.png', width: 1200, height: 630, alt: 'Вика поможет — помощь с бюрократией в Сербии' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Помощь с ВНЖ и ИП в Сербии — Вика поможет',
    description: 'Помощь с открытием ИП, подготовкой к подаче на ВНЖ и сопровождением в учреждения Нови-Сада.',
    images: ['/og.png'],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Вика поможет',
    legalName: 'Viktoriia Poverenova PR Konsultantske aktivnosti u vezi s poslovanjem i ostalim upravljanjem Novi Sad',
    url: 'https://vikahelp.me',
    email: 'powerenova@gmail.com',
    sameAs: ['https://t.me/ViktoriaPowerenova'],
    areaServed: { '@type': 'City', name: 'Novi Sad' },
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Mite Ružića 2, sprat 2, stan 3',
      addressLocality: 'Novi Sad',
      addressCountry: 'RS',
    },
  };

  return <html lang="ru"><body><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />{children}</body></html>;
}
