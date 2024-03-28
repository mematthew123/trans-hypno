import ContactInfoComponent from '@/components/ContactInfo';
import React from 'react';
import type { Metadata } from 'next';
import HeaderComponent from '@/components/Header';
import PageHeader from '@/components/PageHeader';
import GoogleMapComponent from '@/components/GoogleMap';
export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Based in Missoula, Montana, we specialize in premium web development ensuring your goals are our top priority.',
};

export default function Page() {
  return (
    <>
      <PageHeader
        title={'Contact'}
        description={
          'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui'
        }
      />{' '}
      <ContactInfoComponent />
      <GoogleMapComponent />
    </>
  );
}
