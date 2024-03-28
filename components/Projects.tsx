'use client';
import React from 'react';
import Image from 'next/image';

const projects = [
  {
    name: 'McKay Painting',
    description: 'An SEO optimized website for a local painting company',
    image: '/mckay.webp',
    message:
      'A custom built website that acheives a perfect score on Google Lighthouse.',
    url: 'https://mckaypainting.us',
  },
  {
    name: 'Kootenai Organics',
    description: 'Progressive web app for organic dispensary',
    image: '/koots.png',
    message:
      'POS Integrated Progressive Web App for real time inventory, ordering, and offline functionality.',
    url: 'https://kootenaiorganics.com',
  },
  {
    name: 'Hufford Homestead',
    description: 'A Direct to Consumer website for a local organic farm',
    image: '/hufford.png',
    message:
      'Custom built website and CMS allowing the client to manage their own content.',
    url: 'https://huffordhomestead.com',
  },

  {
    name: 'Kiki Glass Shop',
    description: 'Online shop for a local glass artist',
    image: '/kiki.png',
    message:
      'Direct to Consumer website built on Shopify selling stained glass art.',
    url: 'https://kikiglassshop.com',
  },
];
const ProjectsComponent = () => {
  return (
    <section className='py-16 sm:py-20'>
      <div className='mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8'>
        <div className='flex flex-col items-center gap-12 lg:gap-20'>
          <h2 className='mx-auto max-w-xl text-center text-3xl font-medium tracking-tight sm:text-4xl'>
            Recent Projects & Builds
          </h2>
          <div className='divide-primary-900/10 dark:divide-primary-300/10 grid divide-y lg:grid-cols-2 lg:divide-x lg:divide-y-0'>
            {projects.map((project) => (
              <figure
                key={project.name}
                className='mx-auto flex max-w-lg flex-col items-center gap-6 py-8 lg:px-8 lg:py-20'
              >
                <a href={project.url} target='_blank' rel='noopener noreferrer'>
                  <Image
                    className='mx-auto h-48 w-full object-cover rounded-lg'
                    src={project.image}
                    alt={project.name}
                    width={400}
                    height={400}
                  />
                </a>
                <figcaption className='flex flex-col gap-4'>
                  <div className='text-center'>
                    <div className='text-base font-medium'>{project.name}</div>
                    <div className='text-primary-950/70 dark:text-primary-200/70 text-sm'>
                      {project.description}
                    </div>
                  </div>
                  <blockquote className='text-primary-950/70 dark:text-primary-200/70 text-center text-lg italic leading-loose'>
                    <p>{project.message}</p>
                  </blockquote>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsComponent;
