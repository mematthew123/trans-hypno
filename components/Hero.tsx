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

  return (
    <section className="md:py-20 lg:max-w-7xl px-4 sm:px-6 lg:px-8 mx-auto relative py-12 md:h-[100vh] h-[80vh]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Image
          src={starryNight}
          alt="starry night"
          width={1920}
          height={1080}
          priority
          className="absolute inset-0 object-cover translate-x-0 translate-y-10 mb-10 md:mb-0 rounded-t-none rounded-lg md:rounded-lg lg:w-full w-auto h-full opacity-95"
        />
        <div className="flex flex-col rounded-md mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 absolute inset-0 md:flex-row gap-8 md:gap-16 items-center">
          {/* Hero title and PortableText */}
          <div className="flex-1">
            <h1 className="hidden md:flex text-4xl gradient-text md:mt-0 mt-20 text-center md:text-left font-semibold tracking-tight sm:text-5xl lg:text-6xl">
              {data.title}
            </h1>
            <div className="hidden subtitle-gradient-text md:flex mt-4 text-lg sm:text-xl">
              <PortableText value={data.content} />
            </div>
            <Cal
              buttonText="Schedule Now"
              buttonClass="hidden md:block hover:text-primary-50 transition-effect mt-8 inline-flex items-center justify-center px-5 py-3 text-lg font-medium hover:shadow-md text-white hover:-translate-y-1 hover:scale-110 rounded-full transition-colors duration-1000 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary-600"
            />
          </div>
          {/* Image */}
          <div className="flex-1">
            <Image
              className="h-80 w-80 md:h-4/6 md:w-4/6 translate-x-0 -translate-y-1/4 md:-translate-y-8 object-contain md:inline-block md:object-center md:rounded-3xl"
              src={urlForImage(data.image).url() as string}
              alt="Image of Therapy"
              width={600}
              height={600}
              quality={100}
            />

            <div className="md:hidden w-full flex justify-center mt-8 mb-10 md:mt-0">
              <Cal buttonText="Schedule Now" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroComponent;
