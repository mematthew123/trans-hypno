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
  console.log(data);

  return (
    <section className='py-20 bg-primary-400/5 '>
      <div className='container mx-auto flex flex-col lg:flex-row items-center gap-8 px-4'>
        {/* Image side */}
        <div className=' hidden md:block w-full lg:w-1/2'>
          <img
            className='w-full h-auto shadow-lg rounded-l-full rounded-t-full '
            src={urlForImage(data.image).url() as string}
            alt='Therapy'
          />
        </div>
        {/* Text side */}
        <div className='w-full lg:w-1/2'>
          <span className='text-primary-500 uppercase text-sm font-bold'>
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
          <Link href='/learn'>
            <p className='text-primary-500'>Learn More</p>
          </Link>
        </div>
        <div className=' md:hidden block w-full lg:w-1/2'>
          <img
            className='w-full h-auto shadow-lg rounded-l-full rounded-t-full '
            src='/plant.jpg'
            alt='Therapy'
          />
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
          <span className='text-primary-500 uppercase text-sm font-bold'>
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
          <Link href='/learn' className='text-primary-500'>
            Learn More
          </Link>
        </div>
        <div className='w-full lg:w-1/2'>
          <img
            className='w-full h-auto shadow-lg rounded-r-full rounded-t-full '
            src={urlForImage(data.image).url() as string}
            alt='Therapy'
          />
        </div>
      </div>
    </section>
  );
}

export default function ClipSidebySide() {
  return (
    <div className='my-20 lg:my-40 mx-auto'>
      <LeftSide />
      <div className='h-20 lg:h-40' />
      <RightSide />
    </div>
  );
}
