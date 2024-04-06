'use client';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { useTheme } from 'next-themes';
import { ThemeSwitcher } from './ThemeSwitcher';
import Cal from './Cal';

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
];

const HeaderComponent = () => {
  const [open, setOpen] = useState(false);

  return (
    <header
      className={`transition ${
        open
          ? 'bg-primary-500/10 dark:bg-primary-400/10'
          : 'bg-primary-50 dark:bg-primary-950'
      }`}
    >
      <div className='mx-auto flex max-w-2xl items-center justify-between px-4 py-4 sm:px-6 sm:py-6 lg:max-w-7xl lg:px-8'>
        <div className='flex'>
          <a
            href='/'
            className='rounded-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary-950 dark:group-focus-visible:outline-primary-200'
          >
            <span className='sr-only'>Transcend Mind & Body</span>
            <h1 className='text-2xl sm:text-4xl uppercase font-bold text-primary-950 dark:text-primary-200'>
              Logo
            </h1>
          </a>
        </div>
        <div className='-mr-2 flex items-center space-x-2 sm:space-x-3'>
          <ThemeSwitcher />
          <button
            onClick={() => setOpen(!open)}
            className='inline-flex h-14 w-14 items-center justify-center rounded-full text-primary-950 ring-primary-950 transition hover:bg-primary-500/10 focus:outline-none focus-visible:ring-2 dark:text-primary-200 dark:hover:bg-primary-400/10'
          >
            <span className='sr-only'>Toggle menu</span>
            {open ? (
              <svg
                className='h-8 w-8'
                xmlns='http://www.w3.org/2000/svg'
                fill='currentColor'
                viewBox='0 0 24 24'
                aria-hidden='true'
              >
                <path d='M19 8H5V10H19V8ZM19 14H5V16H19V14Z'></path>
              </svg>
            ) : (
              <svg
                className='h-8 w-8'
                xmlns='http://www.w3.org/2000/svg'
                fill='currentColor'
                viewBox='0 0 24 24'
                aria-hidden='true'
              >
                <path d='M19 8H5V10H19V8ZM19 14H5V16H19V14Z'></path>
              </svg>
            )}
          </button>
        </div>
      </div>
      {open && (
        <div className='mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8'>
          <div className='grid grid-cols-1 gap-16 pb-24 pt-6 lg:grid-cols-2 lg:pt-12'>
            <div className='hidden items-center justify-center rounded-3xl bg-primary-500/10 px-6 py-8 dark:bg-primary-400/10 lg:flex'>
              <p className='max-w-sm text-xl italic leading-loose text-primary-950/70 dark:text-primary-200/70'>
                <span className='font-medium'>Transcend Mind & Body</span> is a
                hypnotherapy practice that specializes in helping clients
                overcome obstacles and achieve their goals. Whether you want to
                quit smoking, lose weight, or reduce stress, hypnotherapy can
                help you make lasting changes in your life.
                {/* <Cal buttonClass=' flex pt-10 mt-0 w-auto text-7xl text-yellow-500 bg-transparent' /> */}
                <button className='flex underline animate-pulse underline:blue-200 pt-10 mt-0 w-auto text-2xl text-yellow-500 bg-transparent'>
                  <a href='tel:+1406204779'>Book a Session</a>
                </button>
              </p>
            </div>
            <nav className='flex flex-col gap-1 divide-y divide-primary-900/10 dark:divide-primary-300/10'>
              {links.map((link) => (
                <a
                  key={link.ref}
                  href={link.href}
                  className='group inline-flex py-6 text-3xl font-medium tracking-tight text-primary-950 transition focus-visible:outline-none dark:text-primary-200 sm:py-8 sm:text-4xl'
                >
                  <div className='flex flex-1 items-center justify-between rounded-3xl group-focus-visible:outline group-focus-visible:outline-2 group-focus-visible:outline-offset-2 group-focus-visible:outline-primary-950 dark:group-focus-visible:outline-primary-200'>
                    <div className='flex items-center gap-6'>
                      <span className='text-xs'>{link.ref}</span>
                      <span className='group-hover:underline'>{link.name}</span>
                    </div>
                    <svg
                      className='h-6 w-6 text-primary-600 dark:text-primary-400 sm:h-8 sm:w-8'
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
              <button className=' animate-pulse md:hidden flex underline underline:blue-200 pt-10 mt-0 w-auto text-2xl text-yellow-500 bg-transparent'>
                <a href='tel:+1406204779'>Book a Session</a>
              </button>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default HeaderComponent;
