import React from 'react';

export default function GoogleMapComponent() {
  return (
    <div>
      <section className='py-16 sm:py-20'>
        <div className='mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8'>
          <div className='rounded-3xl bg-primary-500/10 px-6 py-6 '>
            <iframe
              src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10908.691020230099!2d-114.0116577813486!3d46.87964985521304!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x535dcdd8e4e1f32f%3A0x1c5d78852fdd2eb0!2sCity%20of%20Missoula!5e0!3m2!1sen!2sus!4v1704503182682!5m2!1sen!2sus'
              width='600'
              height='450'
              loading='lazy'
              className='w-full h-80 md:h-[600px] rounded-3xl'
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
}
