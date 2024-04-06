'use client';
import { Disclosure } from '@headlessui/react';
import { MinusIcon, PlusIcon } from '@heroicons/react/20/solid';

interface Faq {
  _id: string;
  question: string;
  answer: string;
}

// Adjusted FaqsComponents to accept 'faqs' prop
export default function FaqsComponents({ faqs }: { faqs: Faq[] }) {
  return (
    <section className='py-16 sm:py-20'>
      <div className='mx-auto px-4 py-16  sm:py-24 lg:max-w-7xl '>
        <h2 className='text-4xl font-semibold tracking-tight text-primary-950  sm:text-5xl lg:text-6xl'>
          Frequently Asked Questions
        </h2>
        <dl className='mt-10 space-y-6 divide-y divide-gray-900/10'>
          {faqs.map((faq) => (
            <Disclosure as='div' key={faq._id} className='pt-6'>
              {({ open }) => (
                <>
                  <dt>
                    <Disclosure.Button className='flex w-full items-start justify-between text-left text-gray-900'>
                      <span className='text-base font-semibold leading-7'>
                        {faq.question}
                      </span>
                      <span className='ml-6 flex h-7 items-center'>
                        {open ? (
                          <MinusIcon className='h-6 w-6' aria-hidden='true' />
                        ) : (
                          <PlusIcon className='h-6 w-6' aria-hidden='true' />
                        )}
                      </span>
                    </Disclosure.Button>
                  </dt>
                  <Disclosure.Panel as='dd' className='mt-2 pr-12'>
                    <p className='text-base leading-7 text-gray-600'>
                      {faq.answer}
                    </p>
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          ))}
        </dl>
      </div>
    </section>
  );
}
