import React from "react";
import {
  PhoneIcon,
  PuzzlePieceIcon,
} from "@heroicons/react/20/solid";
import Cal from "./Cal";
import { GetStartedType, getStartedQuery } from "@/sanity/lib/queries";
import { client } from "@/sanity/lib/client";

export default async function GetStartedComponent() {
  const getStarted: GetStartedType[] = await client.fetch(getStartedQuery);
  const getStartedData = getStarted[0]; // Assuming there is only one getStarted document

  // Define a map for icons based on step titles
  const iconMap = {
    "FREE CONSULTATION": <PhoneIcon className="h-6 w-6" aria-hidden="true" />,
    "90-MINUTE SESSION": (
      <PuzzlePieceIcon className="h-6 w-6" aria-hidden="true" />
    ),
    // Add more mappings as needed
  };

  return (
    <div className="bg-primary-400/5  py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-semibold tracking-tight my-5  text-primary-950  sm:text-5xl lg:text-6xl">
          {getStartedData.title}
        </h2>
        <p className="mx-auto text-xl mb-4 max-w-prose  lg:max-w-none">
          {getStartedData.description}
        </p>
        <div className="grid md:grid-cols-2 gap-8 mt-10">
          {getStartedData.steps.map((step) => (
            <div className="flex" key={step._key}>
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-green-500 text-white">
                  <PhoneIcon className="h-6 w-6" aria-hidden="true" />
                </div>
              </div>
              <div className="ml-4">
                <h3 className="text-primary-600 uppercase text-lg font-bold">
                  {step.stepTitle}
                </h3>
                <div className="mx-auto max-w-prose text-base lg:max-w-none">
                  <p className="mt-1 text-xl mb-4 text-gray-600">
                    {step.stepDescription}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center mx-auto">
          <Cal />
        </div>
      </div>
    </div>
  );
}
