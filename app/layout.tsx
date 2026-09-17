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

  return (
    <html lang="ru">
      <head>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-CW3Z9ZZKHZ" />
        <script dangerouslySetInnerHTML={{ __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-CW3Z9ZZKHZ');
          document.addEventListener('click', function(event) {
            var link = event.target instanceof Element ? event.target.closest('a[href]') : null;
            if (!link) return;
            var url = new URL(link.href);
            if (url.hostname !== 't.me') return;
            var service = link.dataset.service || 'general';
            if (!['ip', 'residence', 'support', 'unsure', 'general'].includes(service)) service = 'general';
            gtag('event', 'telegram_click_' + service, {
              service: service,
              button_id: link.dataset.buttonId || 'unknown',
              link_text: link.textContent.trim(),
              link_url: url.origin + url.pathname,
              section: link.closest('section')?.id || 'navigation',
              transport_type: 'beacon'
            });
          });
        ` }} />
      </head>
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
        {children}
      </body>
    </html>
  );
}
