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
    'Based in Missoula, Montana, we specialize in premium web development ensuring your goals are our top priority.',
};

export default function page() {
  return (
    <>
      <PageHeader
        title={'About Us'}
        description={'#1 Auto shop in western Montana'}
      />

      <ValuesComponent />
      <TestStats />
      <TeamComponent />
    </>
  );
}
