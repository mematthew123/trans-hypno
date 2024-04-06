/* eslint-disable react/no-unescaped-entities */
import TeamComponent from '@/components/Team';
import ValuesComponent from '@/components/Values';
import React from 'react';
import type { Metadata } from 'next';
import Page from '../contact/page';
import PageHeader from '@/components/PageHeader';
import AboutPageContent from '@/components/AboutPageContent';
import TestStats from '@/components/TestStats';

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Providing Hypnotherapy in Missoula, Montana. Learn more about our team and values.',
};

export default function page() {
  return (
    <>
      <PageHeader
        title={'About Us'}
        description={'Hypnotherapy in Missoula, Montana'}
        image='/flowers.jpg'
      />

      <TestStats />
      <TeamComponent />
    </>
  );
}
