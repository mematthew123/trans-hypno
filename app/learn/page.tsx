import CallToActionComponent from '@/components/Cta';
import PageHeader from '@/components/PageHeader';
import React from 'react';

import { pageContentQuery } from '@/sanity/lib/queries';
import { client } from '@/sanity/lib/client';
import PageContentComponent from '@/components/PageContent';

export const revalidate = 3; // 3 seconds

const pageContent = await client.fetch(pageContentQuery);

const page = () => {
  return (
    <div>
      <PageHeader
        title={'Learn'}
        description={
          'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui'
        }
        image='/flowers.jpg'
      />

      {/* Page content from the pageContent query */}
      <PageContentComponent pageContent={pageContent} />

      <CallToActionComponent />
    </div>
  );
};

export default page;
