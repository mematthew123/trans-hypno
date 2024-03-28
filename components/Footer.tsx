'use client';
import React from 'react';

const FooterComponent = () => {
  return (
    <footer
      className='bg-primary-500/10 dark:bg-primary-400/10 mt-16 py-16 lg:mt-20 lg:py-20'
      aria-labelledby='footer-heading'
    >
      <div className='mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8'>
        <div className='flex flex-col justify-between gap-12 sm:gap-16 lg:flex-row'>
          <div className='flex max-w-sm flex-col items-start gap-6 sm:gap-8'>
            <h1 className='text-2xl font-bold'>Missoula Auto Repair</h1>
            <p className='text-primary-950/70 dark:text-primary-200/70 text-base'>
              We are a full service auto repair shop located in Missoula,
              Montana. We offer a wide variety of services including oil
              changes, tire rotations, and more!
            </p>
            <div className='flex justify-end gap-4'>
              <p className='text-primary-950/70 dark:text-primary-200/70 text-sm'>
                © 2023 Zephyr Pixels
              </p>
              <p className='text-primary-950/70 dark:text-primary-200/70 text-sm'>
                Privacy Policy
              </p>
              <p className='text-primary-950/70 dark:text-primary-200/70 text-sm'>
                Terms of Service
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterComponent;
