/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Link from 'next/link';

const HeroComponent = () => {
  return (
    <section className=' py-16 sm:py-20'>
      <div className='mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8'>
        <div className='flex flex-col gap-16'>
          <div className='flex flex-col items-start gap-8 sm:gap-10'>
            <div className='flex max-w-xl flex-col items-start gap-4 sm:gap-6'>
              <h1 className='text-4xl font-semibold tracking-tight  text-primary-950 dark:text-primary-200 sm:text-5xl lg:text-6xl'>
                Expert Auto Repair and Maintenance
              </h1>
              <p className='text-lg text-gray-300 sm:text-xl'>
                Your one-stop shop for high-quality car care. From tires to
                transmissions, we've got you covered.
              </p>
            </div>
            <Link
              href='/contact'
              className='inline-flex animate-pulse bg-primary-700 dark:bg-primary-800 text-white items-center justify-center rounded-full   px-5 py-3 text-base font-medium transition  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600'
            >
              Call to Schedule
            </Link>
          </div>
          <img
            className='h-auto w-full rounded-3xl'
            src='/blackCar.jpg'
            alt='Auto Shop'
          />
        </div>
      </div>
    </section>
  );
};

export default HeroComponent;
