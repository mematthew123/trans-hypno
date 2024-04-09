import { PortableText } from '@portabletext/react';

interface PageContent {
  _id: string;
  introTitle: string;
  mainContent: any[]; // This matches the block content structure from Sanity
  testimonial: any[]; // This matches the block content structure from Sanity
}

export default function PageContentComponent({
  pageContent,
}: {
  pageContent: PageContent[];
}) {
  return (
    <section className='py-12 md:py-16 lg:py-20'>
      <div className='max-w-xl mx-auto px-4 md:max-w-4xl lg:max-w-7xl lg:px-8'>
        <div className='mx-auto max-w-3xl text-lg leading-8 text-gray-800 '>
          {pageContent.map((content) => (
            <article key={content._id} className='space-y-8'>
              <h2 className='text-3xl font-bold tracking-tight text-gray-900  sm:text-4xl md:text-5xl'>
                {content.introTitle}
              </h2>
              <div className='prose prose-lg max-w-none text-gray-800'>
                <PortableText value={content.mainContent} />
              </div>
              <blockquote className='pl-4 italic border-l-4 '>
                {content.testimonial}
              </blockquote>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
