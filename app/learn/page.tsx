import CallToActionComponent from '@/components/Cta';
import PageHeader from '@/components/PageHeader';
import React from 'react';

import { pageContentQuery } from '@/sanity/lib/queries';
import { client } from '@/sanity/lib/client';
import PageContentComponent from '@/components/PageContent';

export const revalidate = 3; // 3 seconds


 export default async function page() {
  // Fetch the page content from Sanity
  const pageContent = await client.fetch(pageContentQuery, {
    slug: 'learn',
  });
  return (
    <div>
      <PageHeader
        title={'Learn'}
        description={
          'Learn about Hypnosis and how it can help you achieve your goals.'
        }
        image='/flowers.jpg'
      />

      {/* Page content from the pageContent query */}
      <PageContentComponent pageContent={pageContent} />

      <CallToActionComponent />
    </div>
  );
};


