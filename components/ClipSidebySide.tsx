import Image from 'next/image';
import Link from 'next/link';
import {
  aboutUsQuery,
  AboutUs,
  educationQuery,
  Education,
} from '@/sanity/lib/queries';
import { client } from '@/sanity/lib/client';
import { PortableText } from '@portabletext/react';
import { urlForImage } from '@/sanity/lib/image';

import { PortableTextComponents } from '@portabletext/react';

const components: PortableTextComponents = {
  block: {
    // Default block renderer (for paragraphs, etc.)
    normal: ({ children }) => <p className='text-xl mb-4'>{children}</p>,
  },
};

async function LeftSide() {
  const aboutUs = await client.fetch(aboutUsQuery);
  const data = aboutUs[0] as AboutUs;

  return (
    <section className='py-20 bg-primary-400/5 '>
      <div className='container mx-auto flex flex-col lg:flex-row items-center gap-8 px-4'>
        {/* Image side */}
        <div className=' hidden md:block w-full lg:w-1/2'>
          <Image
            className='w-full h-auto shadow-lg rounded-l-full rounded-t-full aspect-auto'
            src={urlForImage(data.image).url() as string}
            alt='Therapy Services'
            width={500}
            height={500}
            priority
            quality={100}
          />
        </div>
        {/* Text side */}
        <div className='w-full lg:w-1/2'>
          <span className='text-primary-600 uppercase text-base font-bold'>
            {data.subtitle}
          </span>
          <h2 className='text-4xl font-semibold tracking-tight my-5  text-primary-950  sm:text-5xl lg:text-6xl'>
            {data.title}
          </h2>
          <div className='mx-auto max-w-prose text-base lg:max-w-none'>
            <div className='text-xl mb-4'>
              <PortableText value={data.description} components={components} />
            </div>
          </div>
          <Link href='/about' aria-description='Read More about Hypnotherapy'>
            <p className=' hidden md:inline-flex hover:text-primary-50 transition-effect mt-8  items-center justify-center px-5 py-3 text-lg font-medium hover:shadow-md text-white hover:-translate-y-1 hover:scale-110 rounded-full transition-colors duration-1000 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary-600'>
              Read More
            </p>
          </Link>
        </div>
        <div className=' md:hidden block text-left w-full lg:w-1/2'>
          <Image
            className='w-full h-60 md:h-96 shadow-lg rounded-l-full rounded-t-full aspect-auto'
            src={urlForImage(data.image).url() as string}
            alt='Therapy for all'
            width={500}
            height={500}
            priority  
            quality={100}
          />
          <Link href='/about' aria-description='Read More' className='flex'>
            <p className=' w-auto hover:text-primary-50 transition-effect mt-8   px-5 py-3 text-lg font-medium hover:shadow-md text-white hover:-translate-y-1 hover:scale-110 rounded-full transition-colors duration-1000 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary-600'>
              Read More
            </p>
          </Link>
        </div>
      </div>
    </section>
  );
}

async function RightSide() {
  const education = await client.fetch(educationQuery);
  const data = education[0] as Education;

  return (
    <section className=' py-20'>
      <div className='container mx-auto flex flex-col lg:flex-row items-center gap-8 px-4'>
        <div className='w-full lg:w-1/2'>
          <span className='text-primary-600 uppercase text-base font-bold'>
            {data.subtitle}
          </span>
          <h2 className='text-4xl font-semibold tracking-tight my-5  text-primary-950  sm:text-5xl lg:text-6xl'>
            {data.title}
          </h2>
          <div className='mx-auto max-w-prose text-base lg:max-w-none'>
            <div className='text-xl mb-4'>
              <PortableText value={data.description} components={components} />
            </div>
          </div>
          <Link
            href='/learn'
            aria-label='Learn More about Hypnotherapy'
            className='hidden hover:text-primary-50 transition-effect mt-8 md:inline-flex items-center justify-center px-5 py-3 text-lg font-medium hover:shadow-md text-white hover:-translate-y-1 hover:scale-110 rounded-full transition-colors duration-1000 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary-600'
          >
            Learn More
          </Link>
        </div>
        <div className='w-full lg:w-1/2'>
          <Image
            className='w-full  h-60 md:h-96 shadow-lg rounded-r-full rounded-t-full aspect-auto	'
            src={urlForImage(data.image).url() as string}
            alt='Therapy'
            width={500}
            height={500}
            priority
            quality={100}
          />
          <Link
            href='/learn'
            className='flex md:hidden justify-end'
            aria-label='Learn More about Hypnotherapy'
          >
            <p className=' w-auto hover:text-primary-50 transition-effect mt-8  items-center justify-center px-5 py-3 text-lg font-medium hover:shadow-md text-white hover:-translate-y-1 hover:scale-110 rounded-full transition-colors duration-1000 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary-600'>
              Learn More
            </p>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function ClipSidebySide() {
  return (
    <div className='my-20 lg:my-40 mx-auto'>
      <LeftSide />
      <div className='md:h-20 md:lg:h-40' />
      <RightSide />
    </div>
  );
}
