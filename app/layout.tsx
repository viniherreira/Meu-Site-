import type { Metadata } from 'next';
import { Cormorant_Garamond, DM_Sans } from 'next/font/google';
import './globals.css';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-dm-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Dra. Michele Herreira | Especialista em Estética & Reabilitação Oral',
  description:
    'Especialista em implantes dentários, carga imediata, lentes de contato dental e reabilitação oral completa. Tecnologia digital de ponta e atendimento humanizado em São Paulo.',
  keywords: [
    'implantes dentários',
    'carga imediata',
    'lentes de contato dental',
    'clareamento dental',
    'estética odontológica',
    'cirurgia odontológica',
    'dentista São Paulo',
    'Dra Michele Herreira',
  ],
  authors: [{ name: 'Dra. Michele Herreira' }],
  openGraph: {
    title: 'Dra. Michele Herreira | Especialista em Estética & Reabilitação Oral',
    description:
      'Tecnologia avançada, precisão clínica e atendimento humanizado para a transformação que você merece.',
    type: 'website',
    locale: 'pt_BR',
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${cormorant.variable} ${dmSans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
