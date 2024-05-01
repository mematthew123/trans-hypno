'use client';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { useTheme } from 'next-themes';
import { ThemeSwitcher } from './ThemeSwitcher';
import Cal from './Cal';
import Image from 'next/image';

const links = [
  {
    ref: '01',
    name: 'Home',
    href: '/',
  },
  {
    ref: '02',
    name: 'About',
    href: '/about',
  },
  {
    ref: '03',
    name: 'Contact',
    href: '/contact',
  },
  {
    ref: '04',
    name: 'Learn',
    href: '/learn',
  },
  {
    ref: '05',
    name: 'Library',
    href: '/library',
  }
];

const HeaderComponent = () => {
  const [open, setOpen] = useState(false);

  return (
    <header
      className={`transition ${open ? 'bg-primary-500/10 ' : 'bg-primary-50 '}`}
    >
      <div className='mx-auto flex max-w-2xl items-center justify-between px-4 sm:px-6 sm:py-6 lg:max-w-7xl lg:px-8'>
        <div className='flex'>
          <a
            href='/'
            className=' focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary-950 '
          >
            <span className='sr-only'>Transcend Mind & Body</span>
            <Image
              src='/logo-text.png'
              alt='Transcend Hypnotherapy'
              width={700}
              height={700}
              className='md:w-auto hidden md:flex md:h-14'
              sizes='(max-width: 640px) 100vw, (max-width: 768px) 80vw, 700px'
            />
             <Image
              src='/logo-text.png'
              alt='Transcend Hypnotherapy'
              width={200}
              height={200}
              className='md:w-auto flex md:hidden '
              sizes='(max-width: 640px) 100vw, (max-width: 768px) 80vw, 700px'
            />
          </a>
        </div>
        <div className='-mr-2 flex items-center space-x-2 sm:space-x-3'>
          <button
            onClick={() => setOpen(!open)}
            className='inline-flex h-14 w-14 items-center justify-center rounded-full text-primary-950 ring-primary-950 transition '
          >
            <span className='sr-only'>Toggle menu</span>
            {open ? (
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth='1.5'
                stroke='currentColor'
                className='w-8 h-8'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M6 18 18 6M6 6l12 12'
                />
              </svg>
            ) : (
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='w-8 h-8'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
                />
              </svg>
            )}
          </button>
        </div>
      </div>
      {open && (
        <div className='mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8'>
          <div className='grid grid-cols-1 gap-16 pb-24 pt-6 lg:grid-cols-2 lg:pt-12'>
            <div className='hidden items-center justify-center rounded-3xl bg-primary-500/10 px-6 py-8  lg:flex'>
              <p className='max-w-sm text-xl italic leading-loose text-primary-950/70 '>
                <span className='font-medium'>Transcend Mind & Body</span> is a
                hypnotherapy practice that specializes in helping clients
                overcome obstacles and achieve their goals. Whether you want to
                quit smoking, lose weight, or reduce stress, hypnotherapy can
                help you make lasting changes in your life.
                <Cal buttonClass=' text-secondary-500 flex pt-10 mt-0 w-auto text-7xl text-secondary-500 bg-transparent' />
              </p>
            </div>
            <nav className='flex flex-col gap-1 divide-y divide-primary-900/10'>
              {links.map((link) => (
                <a
                  key={link.ref}
                  href={link.href}
                  aria-description='Navigate to page'
                  className='group inline-flex py-6 text-3xl font-medium tracking-tight text-primary-950 transition focus-visible:outline-none  sm:py-8 sm:text-4xl'
                >
                  <div className='flex flex-1 items-center justify-between rounded-3xl group-focus-visible:outline group-focus-visible:outline-2 group-focus-visible:outline-offset-2 group-focus-visible:outline-primary-950 '>
                    <div className='flex items-center gap-6'>
                      <span className='text-xs'>{link.ref}</span>
                      <span className='group-hover:underline'>{link.name}</span>
                    </div>
                    <svg
                      className='h-6 w-6 text-primary-600 sm:h-8 sm:w-8'
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 24 24'
                      fill='currentColor'
                      aria-hidden='true'
                    >
                      <path d='M16.0037 9.41421L7.39712 18.0208L5.98291 16.6066L14.5895 8H7.00373V6H18.0037V17H16.0037V9.41421Z' />
                    </svg>
                  </div>
                </a>
              ))}
              {/* we are going to make a button for user to click to call us */}
              <Cal buttonClass=' md:hidden text-center justify-center  flex pt-10 mt-0 w-auto text-3xl text-secondary-500 bg-transparent' />
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default HeaderComponent;
