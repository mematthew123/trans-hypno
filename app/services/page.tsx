import CallToActionComponent from '@/components/Cta';
import PageContent from '@/components/PageContent';
import PageHeader from '@/components/PageHeader';
import React from 'react';

const page = () => {
  return (
    <div>
      <PageHeader
        title={'Services'}
        description={
          'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui'
        }
      />

      <PageContent />
      <CallToActionComponent />
    </div>
  );
};

export default page;
