import { useState } from "react";
import VenueSectionCards from "../Cards/card";
import ShowVenue from "../ShowVenue/showvenue";

export default function VenueSectionOne() {
  const [chipsShow, ShowHideChips] = useState(false);
  const [ShowHideFilter, hideShowFilter] = useState(true);
  function showHideChip() {
    ShowHideChips(!chipsShow);
    hideShowFilter(!ShowHideFilter);
  }

  return (
    <div>
      <section className="p-10">
        {/* Find New Vuene */}
        <div
          className="show_venue_filter"
          style={{ display: chipsShow ? "block" : "none" }}
        >
          <ShowVenue />
        </div>
        <div style={{ display: ShowHideFilter ? "block" : "none" }}>
          <div className="flex flex-row justify-between">
            <div>
              <div className="flex justify-center">
                <div className="mb-3 xl:w-64 relative">
                  <select
                    className="form-select text-sm appearance-none
                    relative
      block
      w-64
      ml-5
      px-3
      py-1.5
      font-normal
      text-gray-700
      bg-gray-50 bg-clip-padding bg-no-repeat
      border border-solid border-gray-300
      rounded-0
      transition
      ease-in-out
      m-0
      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    aria-label="Default select example"
                  >
                    <option selected>Venue Type</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="z-100 absolute -right-3 top-1"
                    fill="#ddd"
                    width="24"
                    height="24"
                  >
                    <path d="M16.293 9.293 12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z"></path>
                  </svg>
                </div>
              </div>
            </div>
            <div>
              <div className="flex justify-center">
                <div className="mb-3 xl:w-64 relative">
                  <select
                    className="form-select text-sm appearance-none
                    relative
      block
      w-64
      ml-5
      px-3
      py-1.5
      font-normal
      text-gray-700
      bg-gray-50 bg-clip-padding bg-no-repeat
      border border-solid border-gray-300
      rounded-0
      transition
      ease-in-out
      m-0
      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    aria-label="Default select example"
                  >
                    <option selected>Guest</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="z-100 absolute -right-3 top-1"
                    fill="#ddd"
                    width="24"
                    height="24"
                  >
                    <path d="M16.293 9.293 12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z"></path>
                  </svg>
                </div>
              </div>
            </div>
            <div>
              <div className="flex justify-center">
                <div className="mb-3 xl:w-64 relative">
                  <select
                    className="form-select text-sm appearance-none
                    relative
      block
      w-64
      ml-5
      px-3
      py-1.5
      font-normal
      text-gray-700
      bg-gray-50 bg-clip-padding bg-no-repeat
      border border-solid border-gray-300
      rounded-0
      transition
      ease-in-out
      m-0
      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    aria-label="Default select example"
                  >
                    <option selected>Location</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="z-100 absolute -right-3 top-1"
                    fill="#ddd"
                    width="24"
                    height="24"
                  >
                    <path d="M16.293 9.293 12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z"></path>
                  </svg>
                </div>
              </div>
            </div>
            <div>
              <div className="flex justify-center">
                <div className="mb-3 xl:w-64 relative">
                  <select
                    className="form-select text-sm appearance-none
                    relative
      block
      w-64
      ml-5
      px-3
      py-1.5
      bg-gray-50
      font-normal
      text-gray-700
    bg-clip-padding bg-no-repeat
      border border-solid border-gray-300
      rounded-0
      transition
      ease-in-out
      m-0
      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    aria-label="Default select example"
                  >
                    <option selected>Price</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="z-100 absolute -right-3 top-1"
                    fill="#ddd"
                    width="24"
                    height="24"
                  >
                    <path d="M16.293 9.293 12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z"></path>
                  </svg>
                </div>
              </div>
            </div>
            <div>
              <button
                onClick={showHideChip}
                className="text-white _savespso font-bold py-2 px-4 border text-sm rounded"
              >
                Fine Venue
              </button>
            </div>
          </div>
        </div>
      </section>
      <VenueSectionCards />
    </div>
  );
}
