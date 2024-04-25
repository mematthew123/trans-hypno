/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Cal from "./Cal";
import { Hero, heroQuery } from "@/sanity/lib/queries";
import { client } from "@/sanity/lib/client";
import { PortableText } from "@portabletext/react";
import { urlForImage } from "@/sanity/lib/image";
import Image from "next/image";

async function HeroComponent() {
  const hero = await client.fetch(heroQuery);
  const data = hero[0] as Hero;

  return (
    <section className="md:py-20 py-12  h-[90vh]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center">
          {/* Hero title and PortableText */}
          <div className="flex-1">
            <h1 className="text-4xl md:mt-0 mt-20 text-center md:text-left font-semibold tracking-tight text-primary-950 sm:text-5xl lg:text-6xl">
              {data.title}
            </h1>
            <div className="mt-4 text-lg text-gray-300 sm:text-xl">
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
              className="h-64 w-64 object-contain md:inline-block md:object-center md:h-96 md:w-96 rounded-3xl"
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
