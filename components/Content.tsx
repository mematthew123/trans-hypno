/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import { CameraIcon } from '@heroicons/react/20/solid';
import Link from 'next/link';
import { ArrowLongRightIcon } from '@heroicons/react/24/outline';

export default function ContentComponent() {
  return (
    <section className=' py-16 sm:py-20'>
      <div className='mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8'>
        <div className='overflow-hidden '>
          <div className='relative mx-auto max-w-7xl py-16'>
            <div className='absolute bottom-0 left-3/4 top-0 hidden w-screen bg-gray-50 lg:block' />
            <div className=' text-base lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-8'>
              <div>
                <h2 className='text-4xl font-semibold tracking-tight  text-primary-950  sm:text-5xl lg:text-6xl'>
                  About Us
                </h2>
                <h3 className='mt-2 text-xl leading-8 tracking-tight  text-primary-950  sm:text-3xl'>
                  Compassionate Care
                </h3>
              </div>
            </div>
            <div className='mt-8 lg:grid lg:grid-cols-2 lg:gap-8'>
              <div className='relative lg:col-start-2 lg:row-start-1'>
                <svg
                  className='absolute right-0 top-0 -mr-20 -mt-20 hidden lg:block'
                  width={404}
                  height={384}
                  fill='none'
                  viewBox='0 0 404 384'
                  aria-hidden='true'
                >
                  <defs>
                    <pattern
                      id='de316486-4a29-4312-bdfc-fbce2132a2c1'
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
                    fill='url(#de316486-4a29-4312-bdfc-fbce2132a2c1)'
                  />
                </svg>
                <div className='relative mx-auto max-w-prose  text-base lg:max-w-none'>
                  <figure>
                    <div className='aspect-h-7 aspect-w-12 lg:aspect-none'>
                      <img
                        className='rounded-lg object-cover object-center shadow-lg'
                        src='/plant.jpg'
                        alt='Auto Mechanic'
                        width={1184}
                        height={1376}
                      />
                    </div>
                    <figcaption className='mt-3 flex text-sm text-gray-500'>
                      <CameraIcon
                        className='h-5 w-5 flex-none text-gray-400'
                        aria-hidden='true'
                      />
                      <span className='ml-2'>Photograph by Marcus O’Leary</span>
                    </figcaption>
                  </figure>
                </div>
              </div>
              <div className='mt-8 lg:mt-0'>
                <div className='mx-auto max-w-prose text-base lg:max-w-none'>
                  <p className='text-xl '>
                    We are a team of dedicated professionals who are committed
                    to providing the best possible care for our patients. Our
                    compassionate approach to patient care is what sets us apart
                    from other practices. We believe in treating each patient
                    with the respect and dignity they deserve, and we work hard
                    to ensure that every patient receives the highest quality
                    care possible.
                  </p>
                  <Link
                    href='/about'
                    className='inline-flex text-xl items-center mt-8 text-primary-500 hover:text-primary-600'
                  >
                    <p className='inline-flex text-xl items-center mt-8 text-primary-500 hover:text-primary-600'>
                      Learn more
                      <ArrowLongRightIcon className='w-10 h-10 ml-2 hover:text-primary-600 hover:w-12 hover:h-12' />
                    </p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
