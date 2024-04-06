import Image from 'next/image';
import Link from 'next/link';

const LeftSide = () => {
  return (
    <section className='py-20'>
      <div className='container mx-auto flex flex-col lg:flex-row items-center gap-8 px-4'>
        {/* Image side */}
        <div className=' hidden md:block w-full lg:w-1/2'>
          <img
            className='w-full h-auto shadow-lg rounded-l-full rounded-t-full '
            src='/plant.jpg'
            alt='Therapy'
          />
        </div>
        {/* Text side */}
        <div className='w-full lg:w-1/2'>
          <span className='text-primary-500 uppercase text-sm font-bold'>
            Learn
          </span>
          <h2 className='text-4xl font-semibold tracking-tight my-5  text-primary-950  sm:text-5xl lg:text-6xl'>
            About Us
          </h2>
          <div className='mx-auto max-w-prose text-base lg:max-w-none'>
            <p className='text-xl mb-4'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <p className='text-xl mb-8'>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum.
            </p>
          </div>
          <Link href='/learn'>
            <p className='text-primary-500'>Learn More</p>
          </Link>
        </div>
        <div className=' md:hidden block w-full lg:w-1/2'>
          <img
            className='w-full h-auto shadow-lg rounded-l-full rounded-t-full '
            src='/plant.jpg'
            alt='Therapy'
          />
        </div>
      </div>
    </section>
  );
};

const RightSide = () => {
  return (
    <section className=' py-20'>
      <div className='container mx-auto flex flex-col lg:flex-row items-center gap-8 px-4'>
        <div className='w-full lg:w-1/2'>
          <span className='text-primary-500 uppercase text-sm font-bold'>
            Learn
          </span>
          <h2 className='text-4xl font-semibold tracking-tight my-5  text-primary-950  sm:text-5xl lg:text-6xl'>
            What to Expect
          </h2>
          <div className='mx-auto max-w-prose text-base lg:max-w-none'>
            <p className='text-xl mb-4'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <p className='text-xl mb-8'>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum.
            </p>
          </div>
          <Link href='/learn' className='text-primary-500'>
            Learn More
          </Link>
        </div>
        <div className='w-full lg:w-1/2'>
          <img
            className='w-full h-auto shadow-lg rounded-r-full rounded-t-full '
            src='/plant.jpg'
            alt='Therapy'
          />
        </div>
      </div>
    </section>
  );
};

export default function ClipSidebySide() {
  return (
    <div className='my-20 lg:my-40 mx-auto'>
      <LeftSide />
      <div className='h-20 lg:h-40' />
      <RightSide />
    </div>
  );
}
