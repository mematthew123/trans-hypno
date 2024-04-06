'use client';
import React from 'react';

const FooterComponent = () => {
  return (
    <footer
      className='bg-primary-500/10  mt-16 py-16 lg:mt-20 lg:py-20'
      aria-labelledby='footer-heading'
    >
      <div className='mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8'>
        <div className='flex flex-col justify-between gap-12 sm:gap-16 lg:flex-row'>
          <div className='flex max-w-sm flex-col items-start gap-6 sm:gap-8'>
            <h1 className='text-2xl font-bold'>Transcend Mind & Body</h1>
            <p className='text-primary-950/70  text-base'>
              Specializing in Hypnotherapy that can help you overcome obstacles
              and achieve your goals.
            </p>
            <div className='flex justify-end gap-4'>
              <p className='text-primary-950/70  text-sm'>
                © 2024 Transcend Mind & Body
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterComponent;
