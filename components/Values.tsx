import React from 'react';

const values = [
  [
    {
      ref: '01',
      name: 'Quality',
      description:
        'Do it right the first time. We take pride in our work and strive to deliver the best possible product. When you leave our shop, you can be confident that your vehicle is safe and reliable. We stand behind our work and offer a 12 month/12,000 mile warranty on all repairs.',
    },
    {
      ref: '02',
      name: 'Commitment',
      description:
        'We are commited to our customers and getting them back on the road as quickly as possible.',
    },
  ],
  [
    {
      ref: '03',
      name: 'Honesty',
      description:
        'Honesty and integrity are the foundation of our business. We are a team and work together to provide the best service possible.',
    },
    {
      ref: '04',
      name: 'Respect',
      description:
        'We treat our customers and their vehicles with the utmost respect.',
    },
    {
      ref: '05',
      name: 'Communication',
      description:
        'We believe in open communication and will always keep you informed about your vehicle.',
    },
    {
      ref: '06',
      name: 'Transparency',
      description:
        'We are transparent in our pricing and will always provide you with a detailed estimate before any work is done.',
    },
  ],
];
const ValuesComponent = () => {
  return (
    <section className='py-16 sm:py-20'>
      <div className='mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8'>
        <div className='flex flex-col gap-8 lg:gap-12'>
          <h2 className='text-3xl font-medium tracking-tight sm:text-4xl'>
            Values
          </h2>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
            {values.map((column, columnIndex) =>
              column.map((value, valueIndex) => {
                const isLarge = (columnIndex + valueIndex) % 5 === 0; // Example condition for larger items
                return (
                  <div
                    key={value.ref}
                    className={`flex flex-col rounded-3xl bg-primary-500/10 px-6 py-8 dark:bg-primary-400/10 ${
                      isLarge
                        ? 'sm:col-span-2 lg:col-span-1 lg:row-span-2'
                        : 'sm:col-span-1'
                    }`}
                  >
                    <p className='text-sm'>{value.ref}</p>
                    <div className='flex flex-col gap-4'>
                      <h3 className='text-xl font-medium'>{value.name}</h3>
                      <p className='text-base text-primary-950/70 dark:text-primary-200/70 sm:text-lg'>
                        {value.description}
                      </p>
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValuesComponent;
