/* eslint-disable react/no-unescaped-entities */
import {
  CheckCircleIcon,
  InformationCircleIcon,
} from '@heroicons/react/20/solid';

export default function PageContent() {
  return (
    <section className='py-16 sm:py-20'>
      <div className='mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8'>
        <div className='mx-auto max-w-3xl text-base leading-7 text-gray-700'>
          <p className='text-base font-semibold leading-7 text-indigo-600'>
            Our Services
          </p>
          <h1 className='mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
            Your Trusted Auto Experts in Missoula
          </h1>
          <p className='mt-6 text-xl leading-8'>
            At Missoula Auto Shop, we are dedicated to providing top-notch auto
            services. From routine maintenance to complex repairs, our
            experienced team ensures your vehicle performs its best.
          </p>
          <div className='mt-10 max-w-2xl'>
            <p>
              Our state-of-the-art facility is equipped with the latest tools
              and technology. We pride ourselves on delivering efficient,
              reliable, and friendly service, making car care stress-free for
              you.
            </p>
            <ul role='list' className='mt-8 max-w-xl space-y-8 text-gray-600'>
              <li className='flex gap-x-3'>
                <CheckCircleIcon
                  className='mt-1 h-5 w-5 flex-none text-indigo-600'
                  aria-hidden='true'
                />
                <span>
                  <strong className='font-semibold text-gray-900'>
                    Comprehensive Diagnostics.
                  </strong>
                  Utilizing advanced diagnostic tools, we accurately identify
                  issues, ensuring precise repairs.
                </span>
              </li>
              <li className='flex gap-x-3'>
                <CheckCircleIcon
                  className='mt-1 h-5 w-5 flex-none text-indigo-600'
                  aria-hidden='true'
                />
                <span>
                  <strong className='font-semibold text-gray-900'>
                    Routine Maintenance.
                  </strong>
                  From oil changes to tire rotations, we help keep your vehicle
                  in peak condition.
                </span>
              </li>
              <li className='flex gap-x-3'>
                <CheckCircleIcon
                  className='mt-1 h-5 w-5 flex-none text-indigo-600'
                  aria-hidden='true'
                />
                <span>
                  <strong className='font-semibold text-gray-900'>
                    Specialized Repairs.
                  </strong>
                  Our skilled technicians handle all types of repairs, including
                  engine, transmission, and brake services.
                </span>
              </li>
            </ul>
            <p className='mt-8'>
              Visit us for a free consultation and experience the difference in
              quality and customer service. We're here to keep you safe and your
              vehicle running smoothly.
            </p>
            <h2 className='mt-16 text-2xl font-bold tracking-tight text-gray-900'>
              Experience You Can Trust
            </h2>
            <p className='mt-6'>
              Our team of certified professionals has years of experience in
              automotive repair. We are committed to providing honest advice and
              transparent services. Trust us for all your auto needs in
              Missoula.
            </p>
            <figure className='mt-10 border-l border-indigo-600 pl-9'>
              <blockquote className='font-semibold text-gray-900'>
                <p>
                  “Professional, efficient, and trustworthy. They go above and
                  beyond to ensure customer satisfaction. Highly recommend for
                  any auto service needs!”
                </p>
              </blockquote>
              <figcaption className='mt-6 flex gap-x-4'>
                <img
                  className='h-6 w-6 flex-none rounded-full bg-gray-50'
                  src='https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
                  alt=''
                />
                <div className='text-sm leading-6'>
                  <strong className='font-semibold text-gray-900'>
                    Alex Johnson
                  </strong>
                  – Long-time Customer
                </div>
              </figcaption>
            </figure>
            <p className='mt-10'>
              Join our community of satisfied customers. Let us take care of
              your vehicle, so you can drive with confidence.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
