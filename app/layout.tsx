import HeaderComponent from '@/components/Header';
import './globals.css';
import FooterComponent from '@/components/Footer';
import { Analytics } from '@vercel/analytics/react';
import Banner from '@/components/Banner';

export const metadata = {
  title: {
    template: '%s - Transcend Mind & Body',
    default: 'Transcend Mind & Body',
  },
  description: {
    default: 'Witness the power of your mind',
  },
  openGraph: {
    title: 'Transcend Mind & Body',
    description:
      'Witness the power of your mind and body with Transcend Mind & Body.',
    url: 'https://trans-hypno.vercel.app',
    siteName: 'Transcend Mind & Body',
    images: [
      {
        url: 'https://trans-hypno.vercel.app/logo_no-bg.png',
        width: 800,
        height: 600,
      },
      {
        url: 'https://trans-hypno.vercel.app/logo_no-bg.png',
        width: 1800,
        height: 1600,
        alt: 'Transcend Mind & Body',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
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
