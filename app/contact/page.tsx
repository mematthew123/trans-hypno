import ContactInfoComponent from '@/components/ContactInfo';
import React from 'react';
import type { Metadata } from 'next';
import PageHeader from '@/components/PageHeader';
import GoogleMapComponent from '@/components/GoogleMap';
export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Hypnotherapy in Missoula, Montana. Contact us to schedule a session.',
};

export default function Page() {
  return (
    <>
      <PageHeader
        title={'Contact'}
        description={
          'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui'
        }
        image='/flowers.jpg'
      />{' '}
      <ContactInfoComponent />
      <GoogleMapComponent />
    </>
  );
}
