import React from 'react';
import { StarIcon } from '@heroicons/react/20/solid';
import { HeartIcon } from '@heroicons/react/24/outline';
import Cal from './Cal';

export default function Steps() {
  return (
    <section className=' top-0 mb-12'>
      <div className='container mx-auto md:text-center px-4'>
        <div className='mb-8'>
          <h2 className='text-4xl font-semibold tracking-tight  text-primary-950  sm:text-5xl lg:text-6xl'>
            How It Works
          </h2>
          <p className=' text-xl'>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit.
          </p>
        </div>

        <div className='flex flex-col md:flex-row  items-center space-y-6 md:space-y-0'>
          {/* Step 1 */}
          <div className='flex flex-col md:items-center'>
            <div className='mb-4'>
              {/* Icon placeholder */}
              <HeartIcon className='hidden md:block text-primary-500 md:mx-auto h-8 w-8' />

              <h3 className='text-2xl md:block md:no-underline underline flex md:flex-none font-medium'>
                Develop a Plan
                <HeartIcon className=' text-primary-500 md:hidden h-8 w-8' />
              </h3>
            </div>
            <p className=' text-2xl'>
              Lorem ipsum dolor sit amet consectetur adipiscing elit. Libero
              nemo voluptate.
            </p>
          </div>

          {/* Step 2 */}
          <div className='flex flex-col md:items-center'>
            <div className='mb-4'>
              {/* Icon placeholder */}
              <HeartIcon className='hidden md:block text-primary-500 md:mx-auto h-8 w-8' />

              <h3 className='text-2xl md:block md:no-underline underline flex md:flex-none font-medium'>
                Develop a Plan
                <HeartIcon className=' text-primary-500 md:hidden h-8 w-8' />
              </h3>
            </div>
            <p className=' text-2xl'>
              Lorem ipsum dolor sit amet consectetur adipiscing elit. Libero
              nemo voluptate.
            </p>
          </div>

          {/* Step 3 */}
          <div className='flex flex-col md:items-center'>
            <div className='mb-4'>
              {/* Icon placeholder */}
              <HeartIcon className='hidden md:block text-primary-500 md:mx-auto h-8 w-8' />

              <h3 className='text-2xl md:block md:no-underline underline flex md:flex-none font-medium'>
                Develop a Plan
                <HeartIcon className=' text-primary-500 md:hidden h-8 w-8' />
              </h3>
            </div>
            <p className=' text-2xl'>
              Lorem ipsum dolor sit amet consectetur adipiscing elit. Libero
              nemo voluptate.
            </p>
          </div>
        </div>
        <div className='mt-8'>
          <button className='bg-primary-500 text-white px-4 py-2 rounded-md hover:bg-primary-600'>
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
}
