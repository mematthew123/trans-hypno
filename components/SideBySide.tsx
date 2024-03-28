import React from 'react';
import Image from 'next/image';

const LeftSide = () => {
  return (
    <section className='py-16 sm:py-20'>
      <div className='mx-auto max-w-2xl px-4 text-center sm:px-6 lg:max-w-7xl lg:px-8'>
        <div className='flex  mr-auto w-full lg:py-20 md:w-2/3 flex-wrap-reverse md:flex-nowrap items-center bg-gray-100 rounded-lg shadow-md'>
          <div className='w-full mx-auto max-w-xl px-6 lg:max-w-7xl lg:px-8 md:w-1/2 mb-4 md:mb-0 md:mr-6'>
            <Image
              src='/mechanic.jpg' // Update with your mechanic related image
              alt='Auto Repair'
              className='w-full h-auto rounded-md shadow-sm'
              height={500}
              width={500}
            />
          </div>
          <div className='w-full px-4 md:w-1/2'>
            <h3 className='text-2xl text-center font-bold mb-4'>
              Expert Auto Repair Services
            </h3>
            <p className='text-gray-700 px-4 text-center mb-4'>
              From routine maintenance to complex diagnostics, our skilled
              mechanics ensure your vehicle runs smoothly.
            </p>
            <a
              href='/services'
              className='text-blue-600 font-semibold text-lg my-6 flex justify-center hover:underline'
            >
              Explore Services
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

const RightSide = () => {
  return (
    <section className='py-16 sm:py-20'>
      <div className='mx-auto max-w-2xl px-4 text-center sm:px-6 lg:max-w-7xl lg:px-8'>
        <div className='flex   md:mb-40 ml-auto  lg:py-20 md:w-2/3 flex-wrap-reverse md:flex-nowrap items-center bg-gray-100 rounded-lg shadow-md'>
          <div className=' mx-auto max-w-xl px-6 lg:max-w-7xl lg:px-8 md:w-1/2 mb-4 md:mb-0 md:ml-6'>
            <Image
              src='/blackCar.jpg' // Update with another mechanic related image
              alt='Vehicle Diagnostics'
              className='w-full h-auto object-contain rounded-md shadow-sm'
              height={500}
              width={500}
            />
          </div>
          <div className='w-full px-4 md:w-1/2'>
            <h3 className='text-2xl px-4 text-center font-bold mb-4'>
              State-of-the-Art Diagnostics
            </h3>
            <p className='text-gray-700 px-4 text-center mb-4'>
              Utilizing advanced technology, we provide accurate diagnostics to
              identify and fix issues effectively.
            </p>
            <a
              href='/diagnostics'
              className='text-blue-600 font-semibold text-lg my-6 flex justify-center hover:underline'
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default function SideBySide() {
  return (
    <div className=' mx-auto'>
      <LeftSide />
      <div className='h-20 lg:h-40' />
      <RightSide />
    </div>
  );
}
