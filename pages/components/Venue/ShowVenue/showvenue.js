import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import { useState } from "react";

export default function ShowVenue() {
  const [AllFilterShow, AllFilterHideShow] = useState(false);

  function HideAllFilterShow() {
    AllFilterHideShow(!AllFilterShow);
  }

  return (
    <div>
      <div className="flex justify-between pb-8 items-center relative">
        <div className="flex flex-col">
          <div className="flex">
            <div className="chips cursor-pointer w-28 ml-6 rounded-full p-1">
              <div className="flex items-center justify-between pl-3">
                <div>
                  <span className="text-xs font-semibold text-gray-800">Location</span>
                </div>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="#434343"
                    className="mr-1"
                  >
                    <path d="M16.293 9.293 12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z"></path>
                  </svg>
                </div>
              </div>
            </div>
            <div className="chips cursor-pointer w-28 ml-6 rounded-full p-1">
              <div className="flex items-center justify-between pl-3">
                <div>
                  <span className="text-xs font-semibold text-gray-800">Guest</span>
                </div>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="#434343"
                    className="mr-1"
                  >
                    <path d="M16.293 9.293 12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z"></path>
                  </svg>
                </div>
              </div>
            </div>
            <div className="chips cursor-pointer w-28 ml-6 rounded-full p-1">
              <div className="flex items-center justify-between pl-3">
                <div>
                  <span className="text-xs font-semibold text-gray-800">Costs</span>
                </div>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="#434343"
                    className="mr-1"
                  >
                    <path d="M16.293 9.293 12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z"></path>
                  </svg>
                </div>
              </div>
            </div>
            <div className="border border-solid border-red-400 cursor-pointer w-42 ml-6 rounded-full p-1">
              <div className="flex items-center justify-between pl-3">
                <div>
                  <span className="text-xs font-semibold text-gray-800">Type of event</span>
                </div>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="#434343"
                    className="mr-1"
                  >
                    <path d="M16.293 9.293 12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z"></path>
                  </svg>
                </div>
              </div>
            </div>
            <div className="border border-solid border-red-400 cursor-pointer w-42 ml-6 rounded-full p-1">
              <div className="flex items-center justify-between pl-3">
                <div>
                  <span className="text-xs font-semibold text-gray-800">Venue Type</span>
                </div>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="#434343"
                    className="mr-1"
                  >
                    <path d="M16.293 9.293 12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z"></path>
                  </svg>
                </div>
              </div>
            </div>
            <div className="border border-solid border-red-400 cursor-pointer w-42 ml-6 rounded-full p-1">
              <div className="flex items-center justify-between pl-3">
                <div>
                  <span className="text-xs font-semibold text-gray-800">Eco Friendly</span>
                </div>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="#434343"
                    className="mr-1"
                  >
                    <path d="M16.293 9.293 12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z"></path>
                  </svg>
                </div>
              </div>
            </div>
            <div className="border border-solid border-red-400 cursor-pointer w-42 ml-6 rounded-full p-1">
              <div className="flex items-center justify-between pl-3">
                <div>
                  <span className="text-xs font-semibold text-gray-800">Availability</span>
                </div>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="#434343"
                    className="mr-1"
                  >
                    <path d="M16.293 9.293 12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z"></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div style={{ display: AllFilterShow ? "block" : "none" }}>
            <div className="flex mt-3">
              <div className="chips cursor-pointer w-28 ml-6 rounded-full p-1">
                <div className="flex items-center justify-between pl-3">
                  <div>
                    <span className="text-xs font-semibold text-gray-800">Packages</span>
                  </div>
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="#434343"
                      className="mr-1"
                    >
                      <path d="M16.293 9.293 12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z"></path>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="chips cursor-pointer w-28 ml-6 rounded-full p-1">
                <div className="flex items-center justify-between pl-3">
                  <div>
                    <span className="text-xs font-semibold text-gray-800">Language</span>
                  </div>
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="#434343"
                      className="mr-1"
                    >
                      <path d="M16.293 9.293 12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z"></path>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="chips cursor-pointer w-28 ml-6 rounded-full p-1">
                <div className="flex items-center justify-between pl-3">
                  <div>
                    <span className="text-xs font-semibold text-gray-800">ethnicity</span>
                  </div>
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="#434343"
                      className="mr-1"
                    >
                      <path d="M16.293 9.293 12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z"></path>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="border border-solid border-red-400 cursor-pointer w-42 ml-6 rounded-full p-1">
                <div className="flex items-center justify-between pl-3">
                  <div>
                    <span className="text-xs font-semibold text-gray-800">
                      Vendor specific filter
                    </span>
                  </div>
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="#434343"
                      className="mr-1"
                    >
                      <path d="M16.293 9.293 12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z"></path>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="border border-solid border-red-400 cursor-pointer w-42 ml-6 rounded-full p-1">
                <div className="flex items-center justify-between pl-3">
                  <div>
                    <span className="text-xs font-semibold text-gray-800">
                      Vendor specific filter
                    </span>
                  </div>
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="#434343"
                      className="mr-1"
                    >
                      <path d="M16.293 9.293 12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z"></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <span
            onClick={HideAllFilterShow}
            className="text-orange-500 text-md font-medium cursor-pointer"
          >
            All Filters
          </span>
        </div>
      </div>
    </div>
  );
}
