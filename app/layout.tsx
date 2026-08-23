import type { Metadata, Viewport } from 'next';
import { Cormorant_Garamond, DM_Sans } from 'next/font/google';
import './globals.css';
import { CIDADE, EMAIL, INSTAGRAM, TELEFONE } from '@/lib/contato';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-dm-sans',
  display: 'swap',
});

// Defina NEXT_PUBLIC_SITE_URL no ambiente de produção para que as URLs
// canônicas e as imagens de Open Graph saiam absolutas.
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Dra. Michele Herreira | Implantes e reabilitação oral em São Paulo',
    template: '%s | Dra. Michele Herreira',
  },
  description:
    'Cirurgiã-dentista com mais de 25 anos em implantodontia e reabilitação oral, ' +
    'e odontopediatria com prevenção infantil dos 3 meses aos 15 anos. Implantes, carga ' +
    'imediata, próteses e estética do sorriso em São Paulo. CRO-SP 71275.',
  keywords: [
    'implante dentário São Paulo',
    'carga imediata',
    'reabilitação oral',
    'lente de contato dental',
    'odontopediatria',
    'odontopediatra São Paulo',
    'prevenção infantil',
    'Dra. Michele Herreira',
  ],
  authors: [{ name: 'Dra. Michele Herreira' }],
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: '/',
    siteName: 'Dra. Michele Herreira',
    title: 'Dra. Michele Herreira | Implantes e reabilitação oral em São Paulo',
    description:
      'Implantes, carga imediata, próteses e estética do sorriso, com planejamento ' +
      'digital e acompanhamento. CRO-SP 71275.',
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: '#FAF9F6',
  colorScheme: 'light',
};

// Dados estruturados: ajudam o Google a exibir telefone, horário e avaliações
// no resultado de busca. Preencher `address` assim que o endereço for definido.
const dadosEstruturados = {
  '@context': 'https://schema.org',
  '@type': 'Dentist',
  name: 'Dra. Michele Herreira',
  description:
    'Consultório odontológico com foco em implantes, carga imediata, reabilitação oral e odontopediatria.',
  medicalSpecialty: ['Implantodontia', 'Reabilitação oral', 'Odontopediatria'],
  telephone: TELEFONE,
  email: EMAIL,
  areaServed: CIDADE,
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'São Paulo',
    addressRegion: 'SP',
    addressCountry: 'BR',
  },
  sameAs: [INSTAGRAM],
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '18:00',
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${cormorant.variable} ${dmSans.variable}`}>
      <body>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(dadosEstruturados) }}
        />
      </body>
    </html>
  );
}
