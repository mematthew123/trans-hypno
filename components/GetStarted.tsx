import {
  HandRaisedIcon,
  PencilIcon,
  PhoneIcon,
  PuzzlePieceIcon,
} from "@heroicons/react/20/solid";
import React from "react";
import Cal from "./Cal";

export default function GetStarted() {
  return (
    <div className="bg-primary-400/5  py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-semibold tracking-tight my-5  text-primary-950  sm:text-5xl lg:text-6xl">
          How to Get Started
        </h2>
        <p className="mx-auto text-xl mb-4 max-w-prose  lg:max-w-none">
          It is worth pointing out that it is not always possible to reach a
          specific goal or find a solution after each therapy session. The
          therapy process can be a continuous journey that requires patience,
          commitment and openness.
        </p>
        <div className="grid md:grid-cols-2 gap-8 mt-10">
          {/* Step 1 */}
          <div className="flex">
            <div className="flex-shrink-0">
              <div className="flex items-center justify-center h-12 w-12 rounded-full bg-green-500 text-white">
                <PhoneIcon className="h-6 w-6" aria-hidden="true" />
              </div>
            </div>
            <div className="ml-4">
              <h3 className="text-primary-600 uppercase text-lg font-bold">
                Free Consultation
              </h3>
              <div className="mx-auto max-w-prose text-base lg:max-w-none">
                <p className="mt-1 text-xl mb-4 text-gray-600">
                  The first step is to schedule a free consultation. During this
                  meeting, we will discuss your concerns and goals. I will
                  answer any questions you may have about hypnotherapy and what
                  to expect.
                </p>
              </div>
            </div>
          </div>

          <div className="flex">
            <div className="flex-shrink-0">
              <div className="flex items-center justify-center h-12 w-12 rounded-full bg-green-500 text-white">
                <PuzzlePieceIcon className="h-6 w-6" aria-hidden="true" />
              </div>
            </div>
            <div className="ml-4">
              <h3 className="text-primary-600 uppercase text-lg font-bold">
                90-Minute Session
              </h3>
              <div className="mx-auto max-w-prose text-base lg:max-w-none">
                <p className="mt-1 text-xl mb-4 text-gray-600">
                  After the consultation, we will schedule a 90-minute session
                  to begin your therapy journey. During this session, we will
                  discuss your goals and concerns in more detail and develop of
                  action.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center mx-auto">
          <Cal />
        </div>
      </div>
    </div>
  );
}
