/* eslint-disable react/no-unescaped-entities */

import React from "react";
import Cal from "./Cal";
import { Hero, heroQuery } from "@/sanity/lib/queries";
import { client } from "@/sanity/lib/client";
import { PortableText } from "@portabletext/react";
import { urlForImage } from "@/sanity/lib/image";
import Image from "next/image";
import starryNight from "@/public/no-logo.png";

async function HeroComponent() {
  const hero = await client.fetch(heroQuery);
  const data = hero[0] as Hero;
  const numStars = 500; // Adjust the number of stars here
  const stars = Array.from({ length: numStars }, (_, i) => (
    <div key={i} className="star" />
  ));
  return (
    <section className="md:py-20 relative py-12  h-[85vh]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Image
          src={starryNight}
          alt="starry night"
          width={1920}
          height={1080}
          className="absolute inset-0 object-cover w-full h-full opacity-95"
        />
        <div className="flex flex-col mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 absolute inset-0 md:flex-row gap-8 md:gap-16 items-center">
          {/* Hero title and PortableText */}
          {stars}
          <div className="flex-1">
            <h1 className=" hidden md:flex text-4xl md:mt-0 mt-20 text-center md:text-left font-semibold tracking-tight text-primary-950 sm:text-5xl lg:text-6xl">
              {data.title}
            </h1>
            <div className=" hidden md:flex mt-4 text-lg text-gray-300 sm:text-xl">
              <PortableText value={data.content} />
            </div>
            <Cal
              buttonText="Schedule Now"
              buttonClass=" hidden md:block hover:text-primary-50 transition-effect mt-8 inline-flex items-center justify-center px-5 py-3 text-lg font-medium hover:shadow-md text-white hover:-translate-y-1 hover:scale-110 rounded-full transition-colors duration-1000 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary-600 hover:text-primary-50 transition-effect mt-8 md:inline-flex items-center justify-center px-5 py-3 text-lg font-medium hover:shadow-md text-white hover:-translate-y-1 hover:scale-110 rounded-full transition-colors duration-1000 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary-600"
            />
          </div>
          {/* Image */}
          <div className="flex-1">
            <Image
              className="h-64 w-64 translate-x-0 -translate-y-3/4 md:-translate-y-8  object-contain md:inline-block md:object-center md:h-96 md:w-96 rounded-3xl"
              src={urlForImage(data.image).url() as string}
              alt="Image of Therapy"
              width={500}
              height={500}
              priority
              quality={100}
            />
            <div className="md:hidden w-full flex justify-center mt-8 mb-10 md:mt-0">
              <Cal buttonText="Schedule Now" />
            </div>
          </div>
          {/* Cal Component */}
        </div>
      </div>
    </section>
  );
}

export default HeroComponent;
