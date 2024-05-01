/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Cal from "./Cal";
import { Hero, heroQuery } from "@/sanity/lib/queries";
import { client } from "@/sanity/lib/client";
import { PortableText } from "@portabletext/react";
import { urlForImage } from "@/sanity/lib/image";
import Image from "next/image";
import starryNight from "@/public/untitled4.png";
async function HeroComponent() {
  const hero = await client.fetch(heroQuery);
  const data = hero[0] as Hero;
  const numStars = 12000; // Adjust the number of stars here
  const stars = Array.from({ length: numStars }, (_, i) => (
    <div key={i} className="star" />
  ));
  return (
    <div className="relative h-[100vh] md:h-[90vh] overflow-hidden mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      {/* Twinkling Stars */}
      {stars}
      <Image
        src={starryNight}
        alt="starry night"
       width={1920}
        height={1080}
      className="absolute inset-0 object-cover w-full h-full"
      />

      {/* Overlay content */}
      <div className="absolute inset-0 flex flex-col justify-end p-8">
        {/* Stars duplicated for visual effect */}
        {stars}

        {/* CTA Button - Desktop and Mobile */}
        <div className="flex    ">
          <Cal
            buttonText="Schedule Now"
            buttonClass="hidden md:block hover:text-primary-50 transition-all mt-8 inline-flex px-5 py-3 text-lg font-medium rounded-full text-white hover:shadow-md hover:-translate-y-1 hover:scale-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary-600 bg-primary-500"
          />
          <div className="md:hidden w-full flex items-center justify-center pb-20 mb-10">
            <Cal buttonText="Schedule Now" />
          </div>
        </div>

        {/* Portable Text positioned at the bottom right, hidden on small screens */}
        <div className="absolute bottom-0 right-0 pb-10 pr-4 hidden md:block w-80 text-lg text-primary-300 sm:text-xl">
          <PortableText value={data.content} />
        </div>
      </div>
    </div>
  );
}

export default HeroComponent;
