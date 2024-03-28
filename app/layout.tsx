import HeaderComponent from '@/components/Header';
import './globals.css';
import type { Metadata } from 'next';
import { ThemeProvider } from './theme-provider';
import FooterComponent from '@/components/Footer';
import { Analytics } from '@vercel/analytics/react';

export const metadata = {
  title: {
    template: '%s - Zephyr Pixels: Made in Montana',
    default: 'Zephyr Pixels - 100% Handcoded Websites and Web Applications',
  },
  description:
    'Located in Missoula Montana - Specializing in web development, marketing, and e-commerce. We build custom websites and applications.',
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <html lang='en'>
        <body className='bg-primary-50 text-primary-950 antialiased transition  dark:bg-primary-950 dark:text-primary-200'>
          <Analytics />
          <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
            <HeaderComponent />
            {children}
            <FooterComponent />
          </ThemeProvider>
        </body>
      </html>
    </>
  );
}
