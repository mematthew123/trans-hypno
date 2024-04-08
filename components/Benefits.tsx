'use client';

import React, { useEffect, useState } from 'react';
import { client } from '../sanity/lib/client';
import { urlForImage } from '@/sanity/lib/image';
import { PortableText } from '@portabletext/react';
import Image from 'next/image';
import { Benefit } from '@/sanity/lib/queries';
import { benefitsQuery } from '@/sanity/lib/queries';
import { LightBulbIcon } from '@heroicons/react/24/outline';
import Cal from './Cal';

function BenefitsComponent() {
  const [benefitsData, setBenefitsData] = useState<Benefit[]>([]);
  useEffect(() => {
    fetchBenefits();
  }, []);

  const fetchBenefits = async () => {
    const benefits = await client.fetch(benefitsQuery);
    setBenefitsData(benefits);
  };

  return (
    <section className='py-16 mx-auto sm:py-20'>
      <div className='mx-auto flex justify-center object-center  px-4 py-16  sm:py-24 lg:max-w-7xl '>
        <div className='flex justify-center object-center flex-col gap-12 sm:gap-16'>
          <h2 className='text-4xl font-semibold tracking-tight  text-primary-950  sm:text-5xl lg:text-6xl'>
            Benefits{' '}
          </h2>
          <div className=' mx-auto grid gap-12 space-y-10 md:space-y-0 sm:gap-16 lg:grid-cols-3'>
            {benefitsData.map((benefit) => (
              <div
                key={benefit._id}
                className='group  h-96 w-96  [perspective:1000px]'
              >
                <div className='relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]'>
                  {/* Front face with image */}
                  <div className='absolute inset-0 h-full w-full rounded-xl [backface-visibility:hidden]'>
                    {benefit.benefitsImage && (
                      <Image
                        className='object-cover cursor-pointer object-left h-full w-full rounded-xl'
                        src={urlForImage(benefit.benefitsImage).url() as string}
                        alt={benefit.title}
                        width={320}
                        height={320}
                      />
                    )}
                    <p className=' md:my-6 text-2xl'>{benefit.title}</p>
                  </div>
                  {/* Back face with text */}
                  <div className='absolute inset-0 h-full w-full rounded-xl bg-black/80 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]'>
                    <div className='flex min-h-full flex-col items-center justify-center'>
                      <h2 className='text-2xl font-bold mb-4'>
                        {benefit.title}
                      </h2>
                      <PortableText value={benefit.description} />
                      <button className=' my-2 text-secondary-500'>
                        <LightBulbIcon
                          className='-ml-1 mr-2 h-5 w-5 inline-block'
                          aria-hidden='true'
                        />
                        <Cal buttonClass='  text-secondary-500 flex  mt-0 w-auto text-xl text-secondary-500 bg-transparent' />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default BenefitsComponent;
