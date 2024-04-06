/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Link from 'next/link';
import Cal from './Cal';

const HeroComponent = () => {
  return (
    <section className='py-16 sm:py-20'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className='flex flex-col md:flex-row gap-8 md:gap-16 items-center'>
          <div className='flex-1 mb-8 md:mb-0'>
            {' '}
            <h1 className='text-4xl font-semibold tracking-tight text-primary-950 dark:text-primary-200 sm:text-5xl lg:text-6xl'>
              Transcend Mind & Body
            </h1>
            <p className='mt-4 text-lg text-gray-300 sm:text-xl'>
              Hypnotherapy is a powerful tool that can help you overcome
              obstacles and achieve your goals. Whether you want to quit
              smoking, lose weight, or reduce stress, hypnotherapy can help you
              make lasting changes in your life.
            </p>
            <Cal />
          </div>
          <div className='flex-1'>
            <img
              className='hidden md:inline-block md:h-auto md:object-center md:w-full md:rounded-3xl'
              src='/logo_no_text.png'
              alt='Auto Shop'
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroComponent;
