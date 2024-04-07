import React from 'react';
import { StarIcon } from '@heroicons/react/20/solid';
import { HeartIcon } from '@heroicons/react/24/outline';
import { Steps, stepsQuery } from '@/sanity/lib/queries';
import { client } from '@/sanity/lib/client';

export default async function Steps() {
  const steps = await client.fetch(stepsQuery);
  console.log(steps);

  return (
    <section className='py-20 my-20 bg-primary-400/5'>
      <div className='container mx-auto text-center px-4'>
        <div className='mb-8'>
          <h2 className='text-5xl font-semibold tracking-tight text-primary-950 sm:text-6xl lg:text-7xl'>
            How It Works
          </h2>
        </div>

        {/* Using grid instead of flex */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-10 items-center'>
          {/* Step 1 */}
          <div className='flex flex-col items-center'>
            <div className='mb-6'>
              <HeartIcon className='mb-3 text-primary-500 h-8 w-8' />
              <h3 className='text-3xl font-semibold'>{steps[0].stepTitle}</h3>
            </div>
            <p className='text-lg max-w-md'>
              Discover personalized strategies tailored to your needs, fostering
              relaxation and mental wellness.
            </p>
          </div>

          {/* Step 2 */}
          <div className='flex flex-col items-center'>
            <div className='mb-6'>
              <HeartIcon className='mb-3 text-primary-500 h-8 w-8' />
              <h3 className='text-3xl font-semibold'>Relax & Reflect</h3>
            </div>
            <p className='text-lg max-w-md'>
              Engage in guided sessions designed to promote deep relaxation and
              introspection.
            </p>
          </div>

          {/* Step 3 */}
          <div className='flex flex-col items-center'>
            <div className='mb-6'>
              <HeartIcon className='mb-3 text-primary-500 h-8 w-8' />
              <h3 className='text-3xl font-semibold'>Achieve Balance</h3>
            </div>
            <p className='text-lg max-w-md'>
              Attain a harmonious state of mind, empowering a healthier, more
              fulfilling life.
            </p>
          </div>
        </div>

        <div className='mt-12'>
          <button className='bg-primary-500 text-white font-medium px-6 py-3 rounded-full shadow-md hover:bg-primary-600'>
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
}
