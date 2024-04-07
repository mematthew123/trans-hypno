import HeaderComponent from '@/components/Header';
import './globals.css';
import type { Metadata } from 'next';
import { ThemeProvider } from './theme-provider';
import FooterComponent from '@/components/Footer';
import { Analytics } from '@vercel/analytics/react';
import TestNav from '@/components/TestNav';

export const metadata = {
  title: {
    template: '%s - Transcend Mind & Body',
    default: 'Transcend Mind & Body',
  },
  description:
    'Hypnotherapy is a powerful tool that can help you overcome obstacles and achieve your goals.',
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <html lang='en'>
        <body className='bg-primary-50 text-primary-950 antialiased transition  '>
          <Analytics />
          <HeaderComponent />
          {children}
          <FooterComponent />
        </body>
      </html>
    </>
  );
}