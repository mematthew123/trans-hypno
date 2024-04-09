import { XMarkIcon } from '@heroicons/react/20/solid';
import { Banner, bannerQuery } from '@/sanity/lib/queries';
import { client } from '@/sanity/lib/client';
import { PortableText, PortableTextComponents } from '@portabletext/react';

export const revalidate = 3; // 3 seconds

const components: PortableTextComponents = {
  block: {
    // Default block renderer (for paragraphs, etc.)
    normal: ({ children }) => (
      <p className=' mx-auto text-sm md:text-lg align-middle  leading-6 text-accent-700'>
        {children}
      </p>
    ),
  },
};

export default async function BannerComponent() {
  const banner = await client.fetch(bannerQuery);
  const data = banner[0] as Banner;

  return (
    <div className='relative isolate flex items-center gap-x-6 overflow-hidden bg-gray-50 px-6 py-2.5 sm:px-3.5 '>
      <div
        className='absolute left-[max(-7rem,calc(50%-52rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl'
        aria-hidden='true'
      >
        <div
          className='aspect-[577/310] w-[36.0625rem] bg-gradient-to-r from-[#ff80b5] to-[#9089fc] opacity-30'
          style={{
            clipPath:
              'polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)',
          }}
        />
      </div>
      <div
        className='absolute left-[max(45rem,calc(50%+8rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl'
        aria-hidden='true'
      >
        <div
          className='aspect-[577/310] w-[36.0625rem] bg-gradient-to-r from-[#ff80b5] to-[#9089fc] opacity-30'
          style={{
            clipPath:
              'polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)',
          }}
        />
      </div>
      <div className='  justify-center text-center mx-auto items-center gap-x-4 gap-y-2'>
        <div className='text-lg leading-6 text-accent-100'>
          <svg
            viewBox='0 0 2 2'
            className='mx-2 inline h-0.5 w-0.5 fill-current'
            aria-hidden='true'
          >
            <circle cx={1} cy={1} r={1} />
          </svg>

          <PortableText value={data?.content} components={components} />
        </div>
      </div>
    </div>
  );
}
