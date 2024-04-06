'use client';
import React from 'react';
import Image from 'next/image';

const team = [
  {
    name: 'Stefanie',
    image: '/plant.jpg',
    job: 'Owner & Healer',
    desc: 'Stefanie is the owner of Transcend Mind & Body. She is a certified hypnotherapist and energy healer. She is passionate about helping others overcome obstacles and achieve their goals.',
  },
];

const TeamComponent = () => {
  // Assuming only one member for now, but keeping structure flexible
  const member = team[0];

  return (
    <section className='py-16 sm:py-20'>
      <div className='mx-auto max-w-4xl px-4 sm:px-6 lg:px-8'>
        <h2 className='text-4xl font-semibold tracking-tight text-center text-primary-950 dark:text-primary-200 sm:text-5xl lg:text-6xl'>
          Meet Stefanie
        </h2>
        <div className='mt-12'>
          <div
            key={member.name}
            className='rounded-3xl border border-primary-900/10 px-6 py-8 dark:border-primary-300/10'
          >
            <div className='space-y-6'>
              <div className='flex justify-center'>
                <Image
                  className='object-cover rounded-lg'
                  src={member.image}
                  alt={member.name}
                  width={240}
                  height={240}
                />
              </div>
              <div className='text-center'>
                <h3 className='text-2xl font-medium'>{member.name}</h3>
                <p className='text-primary-950 dark:text-primary-200 mt-2'>
                  {member.job}
                </p>
                <p className='text-primary-950/70 dark:text-primary-200/70 mt-4'>
                  {member.desc}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamComponent;
