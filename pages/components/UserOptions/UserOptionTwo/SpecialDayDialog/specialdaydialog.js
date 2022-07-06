import { useState } from "react";

export default function Specialdaydialog() {
  return (
    <div>
      <div class="max-w-6xl rounded-0 overflow-hidden bg-white shadow-sm p-4 pl-20 pr-20 pb-8">
        <div class="px-6 py-4">
          <div class="font-bold text-3xl text-center mb-2">
            We’d really miss you at our special day
          </div>
          <p class="text-gray-700 text-sm">
            Tell us your reason for not attending our wedding?
          </p>

          <div className="flex flex-col">
            <div class="md:flex mb-1 mt-3">
              <label class="md:w-2/3 block text-gray-700 font-medoum">
                <input class="mr-2 leading-tight" type="radio" />
                <span class="text-sm">Not available on this date</span>
              </label>
            </div>
            <div class="md:flex mb-1 mt-3">
              <label class="md:w-2/3 block text-gray-700 font-medoum">
                <input class="mr-2 leading-tight" type="radio" />
                <span class="text-sm">
                  Already occupied in some other plans
                </span>
              </label>
            </div>
            <div class="md:flex mb-2 mt-3">
              <label class="md:w-2/3 block text-gray-700 font-medoum">
                <input class="mr-2 leading-tight" type="radio" />
                <span class="text-sm">I’d rather not say</span>
              </label>
            </div>
            <div class="flex mb-2 mt-1">
              <label class="flex items-center text-gray-700 font-medoum">
                <input class="mr-2 leading-tight" type="radio" />
                <span class="text-sm">Other</span>
              </label>
              <input
                class="shadow-0 appearance-none border ml-4 rounded w-52 text-sm py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="Enter here"
              />
            </div>

            <div className="mt-3">
              <button class=" _savespso text-white font-bold py-2 px-10 rounded-0 text-sm">
                Continue
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
