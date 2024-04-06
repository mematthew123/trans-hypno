'use client';

import React, { useEffect, useState } from 'react';
import { client } from '../sanity/lib/client';
import { urlForImage } from '@/sanity/lib/image';
import { PortableText } from '@portabletext/react';

import { ImageAsset } from '@sanity/types';
import Image from 'next/image';
import { Benefit } from '@/sanity/lib/queries';
import { getBenefits } from '@/sanity/lib/queries';
import { LightBulbIcon } from '@heroicons/react/24/outline';
import { Rakkas } from 'next/font/google';

const inter = Rakkas({ weight: '400', subsets: ['latin'] });

function BenefitsComponent() {
  const [benefitsData, setBenefitsData] = useState<Benefit[]>([]);
  useEffect(() => {
    getBenefits(client).then((data) => {
      setBenefitsData(data);
    });
  }, []);

  return (
    <section className='py-16 sm:py-20'>
      <div className='mx-auto flex justify-center object-center  max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8'>
        <div className='flex justify-center object-center flex-col gap-12 sm:gap-16'>
          <h2 className={inter + ' text-4xl  text-center text-new-orleans-950'}>
            {' '}
            Benefits of Hypnotherapy
          </h2>
          <div className='grid gap-12 sm:gap-16 lg:grid-cols-3'>
            {benefitsData.map((benefit) => (
              <div
                key={benefit._id}
                className='group h-96 w-80 [perspective:1000px]'
              >
                <div className='relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]'>
                  {/* Front face with image */}
                  <div className='absolute inset-0 h-full w-full rounded-xl [backface-visibility:hidden]'>
                    {benefit.benefitsImage && (
                      <Image
                        className='object-cover h-full w-full rounded-xl'
                        src={urlForImage(benefit.benefitsImage).url() as string}
                        alt={benefit.title}
                        width={320}
                        height={320}
                      />
                    )}
                    <p className='bg-yellow-600 text-2xl'>{benefit.title}</p>
                  </div>
                  {/* Back face with text */}
                  <div className='absolute inset-0 h-full w-full rounded-xl bg-black/80 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]'>
                    <div className='flex min-h-full flex-col items-center justify-center'>
                      <h2 className='text-2xl font-bold mb-4'>
                        {benefit.title}
                      </h2>
                      <PortableText value={benefit.description} />
                      <button className='mt-4 ...'>
                        <LightBulbIcon
                          className='-ml-1 mr-2 h-5 w-5'
                          aria-hidden='true'
                        />
                        <a href='tel:+1406204779'>Schedule Now</a>
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
