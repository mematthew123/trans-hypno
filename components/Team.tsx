'use client';

import React from 'react';
import Image from 'next/image';
const team = [
  {
    name: 'Matthew Rhoads',
    image: '/cheezin.jpg',
    job: 'Owner / Developer',
  },
  {
    name: 'James Smith',
    image: '/cheezin.jpg',
    job: 'Auto Technician',
  },
  {
    name: 'Bart Smith',
    image: '/cheezin.jpg',
    job: 'Lead Technician',
  },
];

const TeamComponent = () => {
  return (
    <section className='py-16 sm:py-20'>
      <div className='mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8'>
        <div className='sm:space-8 space-y-12'>
          <h2 className='text-4xl font-semibold tracking-tight  text-primary-950 dark:text-primary-200 sm:text-5xl lg:text-6xl'>
            Meet the team....
          </h2>
          <ul
            role='list'
            className='grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3'
          >
            {team.map((item) => (
              <li
                key={item.name}
                className='rounded-3xl border border-primary-900/10 px-6 py-8 dark:border-primary-300/10'
              >
                <div className='space-y-6'>
                  <Image
                    className='mx-auto object-cover h-full rounded-lg'
                    src={item.image}
                    alt={item.name}
                    width={640}
                    height={64}
                  />
                  <div className='text-center'>
                    <h3 className='text-lg font-medium'>{item.name}</h3>
                    <p className='text-base text-primary-950/70 dark:text-primary-200/70'>
                      {item.job}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default TeamComponent;
