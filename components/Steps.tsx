import React from 'react';
import { StarIcon } from '@heroicons/react/20/solid';
import { HeartIcon } from '@heroicons/react/24/outline';
import { Steps, stepsQuery } from '@/sanity/lib/queries';
import { client } from '@/sanity/lib/client';
import Link from 'next/link';

export default async function Steps() {
  const steps = await client.fetch(stepsQuery);
  console.log(steps);

  return (
    <section className='py-20 my-20 bg-primary-400/5'>
      <div className='container mx-auto text-center px-4'>
        <div className='mb-8'>
          <h2 className='text-5xl font-semibold tracking-tight text-primary-950 sm:text-6xl lg:text-7xl'>
            Get Started
          </h2>
        </div>

        {/* Using grid instead of flex */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-10 items-center'>
          {/* Step 1 */}

          <div className='flex flex-col items-center text-center'>
            <div className='mb-6'>
              {/* Ensure the icon inherits center alignment from parent */}
              <div className='flex justify-center'>
                <HeartIcon className='text-primary-500 h-8 w-8' />
              </div>
              <h3 className='mt-3 text-3xl font-semibold'>
                Schedule a Session
              </h3>
            </div>
            <p className='text-lg max-w-md'>
              Book a session that fits your with your schedule and needs.
            </p>
          </div>
          {/* Step 2 */}
          <div className='flex flex-col items-center text-center'>
            <div className='mb-6'>
              {/* Ensure the icon inherits center alignment from parent */}
              <div className='flex justify-center'>
                <HeartIcon className='text-primary-500 h-8 w-8' />
              </div>
              <h3 className='mt-3 text-3xl font-semibold'>
                Experience Hypnosis
              </h3>
            </div>
            <p className='text-lg max-w-md'>
              Enjoy a personalized hypnotherapy session designed to meet your
              unique needs.
            </p>
          </div>

          {/* Step 3 */}
          <div className='flex flex-col items-center text-center'>
            <div className='mb-6'>
              {/* Ensure the icon inherits center alignment from parent */}
              <div className='flex justify-center'>
                <HeartIcon className='text-primary-500 h-8 w-8' />
              </div>
              <h3 className='mt-3 text-3xl font-semibold'>Attain Your Goals</h3>
            </div>
            <p className='text-lg max-w-md'>
              Experience the benefits of hypnotherapy and achieve your goals.
            </p>
          </div>
        </div>
        <div className='mt-12'>
          <Link
            href='/contact'
            className='hover:text-primary-50 transition-effect mt-8 inline-flex items-center justify-center px-5 py-3 text-lg font-medium hover:shadow-md text-white hover:-translate-y-1 hover:scale-110 rounded-full transition-colors duration-1000 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary-600'
          >
            Get Started
          </Link>
        </div>
      </div>
    </section>
  );
}
