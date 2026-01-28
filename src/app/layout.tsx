import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import './globals.css';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
});

const playfair = Playfair_Display({
  variable: '--font-playfair',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'IC Studio – Carpintería Premium y Diseño a la Medida',
  description:
    'IC Studio: Soluciones de carpintería premium en Hermosillo. Diseño y fabricación de muebles, puertas y estructuras de madera para interiores y exteriores.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body
        className={`${inter.variable} ${playfair.variable} antialiased bg-bone text-text-dark font-sans selection:bg-green-dark selection:text-white`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
