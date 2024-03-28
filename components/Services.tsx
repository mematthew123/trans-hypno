import React from 'react';
import { WrenchScrewdriverIcon } from '@heroicons/react/20/solid';
import Image from 'next/image';

const services = [
  {
    step: '01',
    name: 'Diagnostics',
    imageUrl: '/brakes.jpg',
    description:
      'State-of-the-art diagnostics to accurately identify vehicle issues. Quick and reliable assessments to get your vehicle back on the road safely.',
  },
  {
    step: '02',
    name: 'Repairs',
    imageUrl: '/working.jpg',
    description:
      'Expert repairs from experienced mechanics. From engine overhauls to brake replacements, we ensure high-quality work for your vehicle’s longevity.',
  },
  {
    step: '03',
    name: 'Maintenance',
    imageUrl: '/winterCar.jpg',
    description:
      'Regular maintenance services to keep your vehicle in top condition. Oil changes, tire rotations, and more to enhance performance and prevent future issues.',
  },
];

const ServicesComponent = () => {
  return (
    <section className='py-16 sm:py-20'>
      <div className='mx-auto flex justify-center object-center  max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8'>
        <div className='flex justify-center object-center flex-col gap-12 sm:gap-16'>
          <h2 className='text-4xl font-semibold tracking-tight  text-primary-950 dark:text-primary-200 sm:text-5xl lg:text-6xl'>
            Services
          </h2>
          <div className='grid gap-16 lg:grid-cols-3'>
            {services.map((service) => (
              <div
                key={service.step}
                className='group h-96 w-80 [perspective:1000px]'
              >
                <div className='relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]'>
                  {/* Front face with image */}
                  <div className='absolute inset-0 h-full w-full rounded-xl [backface-visibility:hidden]'>
                    <Image
                      className='object-cover  h-full w-full rounded-xl'
                      src={service.imageUrl}
                      alt={service.name}
                      width={320}
                      height={240}
                    />
                    <p className='bg-yellow-600   text-2xl'> {service.name}</p>
                  </div>
                  {/* Back face with text */}
                  <div className='absolute inset-0 h-full w-full rounded-xl bg-black/80 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]'>
                    <div className='flex min-h-full flex-col items-center justify-center'>
                      <h2 className='text-2xl font-bold mb-4'>
                        {service.name}
                      </h2>
                      <p className='text-base'>{service.description}</p>
                      <button className='mt-4 inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-yellow-200 hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500'>
                        <WrenchScrewdriverIcon
                          className='-ml-1 mr-2 h-5 w-5'
                          aria-hidden='true'
                        />
                        <a href='tel:+1406204779'>Schedule Now</a>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesComponent;
