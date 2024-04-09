import React from 'react';
import type { Metadata } from 'next';
import PageHeader from '@/components/PageHeader';
import CallToActionComponent from '@/components/Cta';
import ContentComponent from '@/components/Content';

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Providing Hypnotherapy in Missoula, Montana. Learn more about our team and values.',
};

export const revalidate = 3; // 3 seconds

export default function page() {
  return (
    <>
      <PageHeader
        title={'About Us'}
        description={'Hypnotherapy in for everyone'}
        image='/flowers.jpg'
      />

      <ContentComponent />
      {/* <TeamComponent /> */}
      <CallToActionComponent />
    </>
  );
}
