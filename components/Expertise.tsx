'use client';
import Image from 'next/image';
import React, { useState } from 'react';

const features = [
  {
    id: 'expertise-1',
    name: 'General Auto Repairs',
    description:
      'Comprehensive repair services covering everything from brakes to transmissions. Trust our skilled mechanics to diagnose and repair your vehicle with precision and care.',
  },
  {
    id: 'expertise-2',
    name: 'Routine Maintenance',
    description:
      'Keep your car running smoothly with our routine maintenance services. From oil changes to tire rotations, we ensure your vehicle stays in top condition.',
  },
  {
    id: 'expertise-3',
    name: 'Engine Diagnostics',
    description:
      'Advanced diagnostic tools to accurately identify engine problems. Our experts will quickly pinpoint issues and recommend the best course of action.',
  },
  {
    id: 'expertise-4',
    name: 'Tire Services',
    description:
      'Offering a range of tire services including sales, fittings, rotations, and alignments. Ensure your tires are in the best shape for safety and performance.',
  },
  {
    id: 'expertise-5',
    name: 'Battery and Electrical Systems',
    description:
      'Expertise in battery replacements, electrical repairs, and alternator services. We handle all your vehicle’s electrical needs for optimal performance.',
  },
  {
    id: 'expertise-6',
    name: 'HVAC Services',
    description:
      'Comprehensive heating, ventilation, and air conditioning services to keep your car comfortable in any weather. From repairs to complete overhauls, we’ve got you covered.',
  },
];

const ExpertiseComponent = () => {
  const [selected, setSelected] = useState<number | null>(null);

  const toggle = (index: number) => {
    setSelected(selected === index ? null : index);
  };

  return (
    <section className='py-16 sm:py-20'>
      <div className='mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8'>
        <div className='grid gap-12 lg:grid-cols-3 lg:gap-8'>
          <h2 className='text-3xl font-medium tracking-tight sm:text-4xl'>
            Expertise
          </h2>

          <div className='lg:col-span-2'>
            <dl className='-mt-3'>
              {features.map((feature, index) => (
                <div
                  key={feature.id}
                  className={`rounded-3xl px-4 transition ${
                    selected === index ? 'bg-primary-500/10 ' : ''
                  }`}
                >
                  <dt
                    className={`border-b text-lg transition ${
                      selected === index || selected === index + 1
                        ? 'border-transparent'
                        : 'border-primary-900/10 '
                    }`}
                  >
                    <button
                      type='button'
                      className='group block w-full py-6 text-left transition focus-visible:outline-none'
                      aria-controls={feature.id}
                      onClick={() => toggle(index)}
                      aria-expanded={selected === index}
                    >
                      <div className='group-focus-visible:outline-primary-950 flex items-center justify-between rounded-3xl group-focus-visible:outline group-focus-visible:outline-2 group-focus-visible:outline-offset-2'>
                        <span className='font-medium'>{feature.name}</span>
                        <span className='ml-6 flex h-7 items-center'>
                          <svg
                            className={`text-primary-600  h-6 w-6 transform transition duration-200 ease-in-out ${
                              selected === index ? '-rotate-180' : 'rotate-0'
                            }`}
                            xmlns='http://www.w3.org/2000/svg'
                            viewBox='0 0 24 24'
                            fill='currentColor'
                            aria-hidden='true'
                          >
                            <path d='M11.9997 13.1714L16.9495 8.22168L18.3637 9.63589L11.9997 15.9999L5.63574 9.63589L7.04996 8.22168L11.9997 13.1714Z' />
                          </svg>
                        </span>
                      </div>
                    </button>
                  </dt>
                  <dd
                    className='pb-6 pr-6'
                    id={feature.id}
                    style={{ display: selected === index ? 'block' : 'none' }}
                  >
                    <p className='text-primary-950/70 text-base'>
                      {feature.description}
                    </p>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpertiseComponent;
