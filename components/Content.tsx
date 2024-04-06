/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import { CameraIcon } from '@heroicons/react/20/solid';

export default function ContentComponent() {
  return (
    <section className=' py-16 sm:py-20'>
      <div className='mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8'>
        <div className='overflow-hidden '>
          <div className='relative mx-auto max-w-7xl px-6 py-16 lg:px-8'>
            <div className='absolute bottom-0 left-3/4 top-0 hidden w-screen bg-gray-50 lg:block' />
            <div className='mx-auto max-w-prose text-base lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-8'>
              <div>
                <h2 className='text-4xl font-semibold tracking-tight  text-primary-950 dark:text-primary-200 sm:text-5xl lg:text-6xl'>
                  About Us
                </h2>
                <h3 className='mt-2 text-xl leading-8 tracking-tight  text-primary-950 dark:text-primary-200 sm:text-3xl'>
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
                        className='text-gray-200 dark:text-gray-800'
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
                        src='/trees.jpg'
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
                  <p className='text-xl '></p>
                </div>
                <div className='mx-auto max-w-prose text-base lg:max-w-none'>
                  <p className='text-xl '>
                    We are a team of experienced professionals who are
                    passionate about helping our clients achieve their goals.
                    Whether you want to quit smoking, lose weight, or reduce
                    stress, we can help you make lasting changes in your life.
                    Our team is dedicated to providing compassionate care and
                    personalized support to help you achieve your goals. We
                    believe that everyone deserves to live a happy, healthy
                    life, and we are here to help you make that a reality.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
