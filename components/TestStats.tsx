/* eslint-disable react/no-unescaped-entities */
import React from 'react';
const stats = [
  { label: 'Founded', value: '2020' },
  { label: 'Clients', value: '100+' },
  { label: 'Success Rate', value: '90%' },
];
export default function TestStats() {
  return (
    <section className='py-16 sm:py-20'>
      <div className='mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8'>
        <div className='mx-auto max-w-7xl px-6 lg:px-8'>
          <div className='mx-auto grid max-w-2xl grid-cols-1 items-start gap-x-8 gap-y-16 sm:gap-y-24 lg:mx-0 lg:max-w-none lg:grid-cols-2'>
            <div className='lg:pr-4'>
              <div className='relative overflow-hidden rounded-3xl bg-gray-900 px-6 pb-9 pt-64 shadow-2xl sm:px-12 lg:max-w-lg lg:px-8 lg:pb-8 xl:px-10 xl:pb-10'>
                <img
                  className='absolute inset-0 h-full w-full object-cover brightness-125 saturate-0'
                  src='https://images.unsplash.com/photo-1630569267625-157f8f9d1a7e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2669&q=80'
                  alt=''
                />
                <div className='absolute inset-0 bg-gray-900 mix-blend-multiply' />
                <div
                  className='absolute left-1/2 top-1/2 -ml-16 -translate-x-1/2 -translate-y-1/2 transform-gpu blur-3xl'
                  aria-hidden='true'
                >
                  <div
                    className='aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-primary-800 to-primary-400 rounded-3xl opacity-70'
                    style={{
                      clipPath:
                        'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                    }}
                  />
                </div>
              </div>
            </div>
            <div>
              <div>
                <div className='text-base leading-7 text-gray-700 lg:max-w-lg'>
                  <p className='text-base font-semibold leading-7 '>
                    Hi there! I'm Stefanie
                  </p>
                  <h1 className='mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
                    At Transcend Hypnotherapy, we are dedicated to helping you
                    achieve your goals and live your best life.
                  </h1>
                  <div className='max-w-xl'>
                    <p className='mt-6'>
                      Since 2020 we have helped over clients overcome obstacles,
                      reduce stress, and improve their overall well-being. Our
                      proven processes and experienced practitioners can help
                      you achieve your desired outcomes.
                    </p>
                    <p className='mt-8'>
                      Here is some more content to add to the paragraph. Yes I
                      am a paragraph. I am a paragraph. I am a paragraph. I am a
                      paragraph. I am a paragraph. I am a paragraph. I am a
                      paragraph. I am a paragraph. I am a paragraph.
                    </p>
                    <p className='mt-8'></p>
                  </div>
                </div>
              </div>
              {/* <dl className='mt-10 grid grid-cols-2 gap-8 border-t border-gray-900/10 pt-10 sm:grid-cols-4'>
                {stats.map((stat, statIdx) => (
                  <div key={statIdx}>
                    <dt className='text-sm font-semibold leading-6 text-gray-600'>
                      {stat.label}
                    </dt>
                    <dd className='mt-2 text-3xl font-bold leading-10 tracking-tight text-gray-900'>
                      {stat.value}
                    </dd>
                  </div>
                ))}
              </dl> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
