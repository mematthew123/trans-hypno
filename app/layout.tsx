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
  description:
    'Hypnotherapy is a powerful tool that can help you overcome obstacles and achieve your goals.',
  image: '/logo_no-bg.png',
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
          <Banner />
          <HeaderComponent />
          {children}
          <FooterComponent />
        </body>
      </html>
    </>
  );
}
