/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Cal from './Cal';
import { Hero, heroQuery } from '@/sanity/lib/queries';
import { client } from '@/sanity/lib/client';
import { PortableText } from '@portabletext/react';
import { urlForImage } from '@/sanity/lib/image';
import Image from 'next/image';

async function HeroComponent() {
  const hero = await client.fetch(heroQuery);
  const data = hero[0] as Hero;
  console.log(data);

  return (
    <section className=' py-16 sm:py-20 h-[90vh]'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className='flex flex-col md:flex-row gap-8 md:gap-16 items-center'>
          <div className='flex-1 mb-8 md:mb-0'>
            {' '}
            {/* Hero title */}
            <h1 className='text-4xl  font-semibold tracking-tight text-primary-950  sm:text-5xl lg:text-6xl'>
              {data.title}
            </h1>
            <div className='mt-4 text-lg text-gray-300 sm:text-xl'>
              <PortableText value={data.content} />
            </div>
            <Cal buttonText='Schedule Now' />
          </div>
          <div className='flex-1'>
            <Image
              className=' md:inline-block md:object-center md:h-96 h-64 md:w-full rounded-3xl'
              src={urlForImage(data.image).url() as string}
              alt='Auto Shop'
              width={500}
              height={500}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroComponent;
