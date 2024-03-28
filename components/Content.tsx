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
                  Missoula's most trusted auto shop
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
                <div className='relative mx-auto max-w-prose text-base lg:max-w-none'>
                  <figure>
                    <div className='aspect-h-7 aspect-w-12 lg:aspect-none'>
                      <img
                        className='rounded-lg object-cover object-center shadow-lg'
                        src='/mechanic.jpg'
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
                  <p className='text-xl text-gray-200 dark:text-gray-800'>
                    Missoula Auto Repair is a locally owned and operated auto
                    repair shop in Missoula, MT. We are a full service auto
                    repair shop that specializes in all makes and models of
                    vehicles. We offer a wide range of services including oil
                    changes, tire rotations, brake inspections, and more.
                  </p>
                </div>
                <div className='mx-auto max-w-prose text-base lg:max-w-none'>
                  <div className='mt-5 prose prose-yellow my-10 py-10 text-gray-500 dark:text-gray-400 prose-2xl mx-auto lg:max-w-none lg:row-start-1 lg:col-start-1'>
                    <ul role='list text-3xl font-semibold  text-primary-950 dark:text-primary-200 my-20 '>
                      <li className='list-disc'>Honda</li>
                      <li className='list-disc'>Toyota</li>
                      <li className='list-disc'>Ford</li>
                      <li className='list-disc'>Chevy</li>
                      <li className='list-disc'>Subaru</li>
                      <li className='list-disc'>Nissan</li>
                      <li className='list-disc'>Dodge</li>
                      <li className='list-disc'>Jeep</li>
                      <li className='list-disc'>And More!</li>
                    </ul>
                  </div>
                  <p className='text-xl text-gray-200 dark:text-gray-800'>
                    From small cars to large trucks, we can handle any job. We
                    offer competitive pricing and fast turnaround times so you
                    don't have to wait long for your vehicle to be fixed. Our
                    technicians are ASE certified and have years of experience
                    in the industry.
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
