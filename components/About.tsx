import React from 'react';

export default function About() {
  return (
    <section className='relative ' aria-labelledby='join-heading'>
      <div
        className='absolute inset-x-0 hidden h-1/2 bg-slate-50 lg:block'
        aria-hidden='true'
      />
      <div className='mx-auto max-w-7xl bg-secondary-600 lg:bg-transparent lg:px-8'>
        <div className='lg:grid lg:grid-cols-12'>
          <div className='relative z-10 lg:col-span-4 lg:col-start-1 lg:row-start-1 lg:bg-transparent lg:py-16'>
            <div
              className='absolute inset-x-0 h-1/2 bg-slate-50 lg:hidden'
              aria-hidden='true'
            />
            <div className='mx-auto max-w-md px-6 sm:max-w-3xl lg:max-w-none lg:p-0'>
              <div className='aspect-h-6 aspect-w-10 sm:aspect-h-1 sm:aspect-w-2 lg:aspect-w-1'>
                <img
                  className='rounded-3xl object-cover object-center shadow-2xl'
                  src='https://images.unsplash.com/photo-1507207611509-ec012433ff52?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=934&q=80'
                  alt=''
                />
              </div>
            </div>
          </div>

          <div className='relative lg:col-span-10 lg:col-start-3 lg:row-start-1 lg:grid lg:grid-cols-10 lg:items-center lg:rounded-3xl'>
            <div
              className='absolute inset-0 hidden overflow-hidden rounded-3xl lg:block'
              aria-hidden='true'
            >
              <svg
                className='absolute bottom-full left-full -translate-x-2/3 translate-y-1/3 transform xl:bottom-auto xl:top-0 xl:translate-y-0'
                width={404}
                height={384}
                fill='none'
                viewBox='0 0 404 384'
                aria-hidden='true'
              >
                <defs>
                  <pattern
                    id='64e643ad-2176-4f86-b3d7-f2c5da3b6a6d'
                    x={0}
                    y={0}
                    width={20}
                    height={20}
                    patternUnits='userSpaceOnUse'
                  >
                    <rect
                      x={0}
                      y={0}
                      width={4}
                      height={4}
                      className='text-secondary-500'
                      fill='currentColor'
                    />
                  </pattern>
                </defs>
                <rect
                  width={404}
                  height={384}
                  fill='url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)'
                />
              </svg>
              <svg
                className='absolute top-full -translate-x-1/3 -translate-y-1/3 transform xl:-translate-y-1/2'
                width={404}
                height={384}
                fill='none'
                viewBox='0 0 404 384'
                aria-hidden='true'
              >
                <defs>
                  <pattern
                    id='64e643ad-2176-4f86-b3d7-f2c5da3b6a6d'
                    x={0}
                    y={0}
                    width={20}
                    height={20}
                    patternUnits='userSpaceOnUse'
                  >
                    <rect
                      x={0}
                      y={0}
                      width={4}
                      height={4}
                      className='text-secondary-500'
                      fill='currentColor'
                    />
                  </pattern>
                </defs>
                <rect
                  width={404}
                  height={384}
                  fill='url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)'
                />
              </svg>
            </div>
            <div className='relative mx-auto max-w-md space-y-6 px-6 py-12 sm:max-w-3xl sm:py-16 lg:col-span-6 lg:col-start-4 lg:max-w-none lg:p-0'>
              <h2
                className='text-3xl font-bold tracking-tight text-white'
                id='join-heading'
              >
                Join our team
              </h2>
              <p className='text-lg  text-white'>
                Varius facilisi mauris sed sit. Non sed et duis dui leo,
                vulputate id malesuada non. Cras aliquet purus dui laoreet diam
                sed lacus, fames.
              </p>
              <a
                className='block w-full rounded-md border border-transparent bg-white px-5 py-3 text-center text-base font-medium text-blue-700 shadow-md hover:bg-slate-50 sm:inline-block sm:w-auto'
                href='#'
              >
                Explore open positions
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
