import React from 'react';

const AltHeroComponent = () => {
  const backgroundImageUrl = '/mechanic.jpg'; // Replace with your actual image URL

  return (
    <div
      className='bg-no-repeat bg-cover bg-center h-screen flex items-center justify-center'
      style={{ backgroundImage: `url(${backgroundImageUrl})` }}
    >
      <div className='absolute inset-0 bg-black bg-opacity-50'></div>
      <div className='text-center text-white p-4 bg-black bg-opacity-50 rounded-lg'>
        <h1 className='text-4xl md:text-6xl font-bold mb-3'>
          Exceptional Auto Services
        </h1>
        <p className='text-xl md:text-2xl mb-6'>Quality care for your car</p>
        <div className='flex justify-center gap-4'>
          <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded'>
            Book Appointment
          </button>
          <button className='bg-transparent hover:bg-white hover:text-blue-500 text-white font-bold py-2 px-6 border border-white rounded'>
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default AltHeroComponent;
