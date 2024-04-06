import CallToActionComponent from '@/components/Cta';
import PageContent from '@/components/PageContent';
import PageHeader from '@/components/PageHeader';
import React from 'react';

const page = () => {
  return (
    <div>
      <PageHeader
        title={'Learn'}
        description={
          'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui'
        }
        image='/trees.jpg'
      />

      <PageContent />
      <CallToActionComponent />
    </div>
  );
};

export default page;
