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
            What is Hypnotherapy?
          </p>
          <h1 className='mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
            Discover the Power of Hypnotherapy
          </h1>
          <p className='mt-6 text-xl leading-8'>
            Hypnotherapy is a powerful tool that can help you overcome obstacles
            and achieve your goals. By tapping into the subconscious mind, you
            can unlock your full potential and create lasting change in your
            life.
          </p>
          <div className='mt-10 max-w-2xl'>
            <p>
              Whether you're looking to break bad habits, reduce stress, or
              improve your confidence, hypnotherapy can help. Our experienced
              practitioners will guide you through the process, helping you
              achieve your desired outcomes.
            </p>
            <ul role='list' className='mt-8 max-w-xl space-y-8 text-gray-600'>
              <li className='flex gap-x-3'>
                <CheckCircleIcon
                  className='mt-1 h-5 w-5 flex-none text-indigo-600'
                  aria-hidden='true'
                />
                <span>
                  <strong className='font-semibold text-gray-900'>
                    Personalized Sessions.
                  </strong>
                  We tailor each session to your unique needs and goals.
                </span>
              </li>
              <li className='flex gap-x-3'>
                <CheckCircleIcon
                  className='mt-1 h-5 w-5 flex-none text-indigo-600'
                  aria-hidden='true'
                />
                <span>
                  <strong className='font-semibold text-gray-900'>
                    Positive Reinforcement.
                  </strong>
                  Our sessions are designed to reinforce positive behaviors,
                  habits, and thought patterns.
                </span>
              </li>
              <li className='flex gap-x-3'>
                <CheckCircleIcon
                  className='mt-1 h-5 w-5 flex-none text-indigo-600'
                  aria-hidden='true'
                />
                <span>
                  <strong className='font-semibold text-gray-900'>
                    Sustained Well-being.
                  </strong>
                  We provide ongoing support to help you achieve sustained
                  well-being.
                </span>
              </li>
            </ul>
            <p className='mt-8'>
              Discover the power of hypnotherapy and take control of your life.
              Schedule a session today and start your journey to a better you.
            </p>

            <figure className='mt-10 border-l border-indigo-600 pl-9'>
              <blockquote className='font-semibold text-gray-900'>
                <p>
                  "Hypnotherapy has changed my life. I feel more confident and
                  in control than ever before. Thank you for helping me achieve
                  my goals."
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
              Ready to take the next step? Schedule a session today and start
              your journey to a better you.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
