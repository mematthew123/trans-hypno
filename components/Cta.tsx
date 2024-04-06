'use client';
import React from 'react';
import Cal from './Cal';

const CallToActionComponent = () => {
  return (
    <section className='py-16 sm:py-20'>
      <div className='mx-auto max-w-2xl px-4 text-center sm:px-6 lg:max-w-7xl lg:px-8'>
        <div className='bg-primary-500/10  flex flex-col items-center gap-8 rounded-3xl px-5 py-16 sm:gap-10'>
          <div className='flex flex-col gap-4 sm:gap-6'>
            <h2 className='mx-auto max-w-sm text-3xl font-medium tracking-tight sm:text-4xl'>
              Ready to schedule an appointment?
            </h2>
          </div>
          <Cal buttonText='Schedule Now' />
        </div>
      </div>
    </section>
  );
};

export default CallToActionComponent;
