import { HandRaisedIcon, PencilIcon, PhoneIcon, PuzzlePieceIcon } from "@heroicons/react/20/solid";
import React from "react";
import Cal from "./Cal";

export default function GetStarted() {
  return (
    <div className="bg-gray-100 py-16">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-semibold text-gray-800">
        How to Get Started with Hypnotherapy
        </h2>
        <p className="mt-2 text-gray-600">
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
              <h3 className="text-lg font-semibold text-gray-800">
                Free Consultation
              </h3>
              <p className="mt-1 text-gray-600">
                The first step is to schedule a free consultation. During this
                meeting, we will discuss your concerns and goals. I will answer
                any questions you may have about hypnotherapy and what to expect.
              </p>
            </div>
          </div>
          {/* Repeat the above block for steps 2, 3, and 4 */}
          {/* <div className="flex">
            <div className="flex-shrink-0">
              <div className="flex items-center justify-center h-12 w-12 rounded-full bg-green-500 text-white">
                <PencilIcon className="h-6 w-6" aria-hidden="true" />
              </div>
            </div>
            <div className="ml-4">
              <h3 className="text-lg font-semibold text-gray-800">Assessment</h3>
              <p className="mt-1 text-gray-600">
                In the second step, we will conduct an assessment to identify
                your needs and develop a personalized treatment plan. I will
                help you set realistic goals and create a roadmap for your
                therapy.
              </p>
            </div>
          </div> */}
          <div className="flex">
            <div className="flex-shrink-0">
              <div className="flex items-center justify-center h-12 w-12 rounded-full bg-green-500 text-white">
                <PuzzlePieceIcon className="h-6 w-6" aria-hidden="true" />
              </div>
            </div>
            <div className="ml-4">
              <h3 className="text-lg font-semibold text-gray-800">90-Minute Session</h3>
              <p className="mt-1 text-gray-600">
                After the consultation, we will schedule a 90-minute session to
                begin your therapy journey. During this session, we will discuss
                your goals and concerns in more detail and develop of action.
              </p>
            </div>
          </div>
          <div className="flex">
            <div className="flex-shrink-0">
              {/* <div className="flex items-center justify-center h-12 w-12 rounded-full bg-green-500 text-white">
                <HandRaisedIcon className="h-6 w-6" aria-hidden="true" />
              </div> */}
            </div>
     
              {/* <h3 className="text-lg font-semibold text-gray-800">Evaluation</h3>
              <p className="mt-1 text-gray-600">
                The final step is to evaluate your progress and make any necessary
                adjustments to your treatment plan. We will discuss your goals and
                determine the next steps in your therapy journey.
              </p> */}
              
          </div>
          
        </div>
        <div className="flex justify-center mx-auto">
              <Cal />
              </div>
      </div>
    </div>
  );
}
