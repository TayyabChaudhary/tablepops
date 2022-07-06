import F from "next/image";
import GridImage from "next/image";
import { useState } from "react";
import Footer from "../../../../Footer/footer";

export default function PackageVenueDetailsSection() {

  return (
    <div>
      <div className="pl-10">
        <div>
          <h1 className="text-3xl mt-4 font-medium">Packages</h1>
        </div>

        <div>
          <div className="flex flex-row mt-10">
            <div className="pr-5">
              <div className="max-w-md rounded overflow-hidden pb-6 shadow-0 border-solid border-gray-200 border">
                <div>
                  <F src="/78.png" width="600px" height="350px" />
                </div>
                <div className="px-6 py-2">
                  <div className="font-bold text-xl mb-2">Wedding and Events</div>
                  <p className="text-gray-700 text-sm">
                    Professional wedding and event planners at Radhe Upavan
                    Resort are experienced to manage all aspects of weddings and
                    events
                  </p>
                  <ul className="list-disc text-sm text-gray-600 pl-4 pt-4 iaia0a0">
                    <li>Conceptualizing the Event</li>
                    <li>Planning and Execution</li>
                    <li>Preliminary Preparation</li>
                    <li>Bridal Make-up, Hair & Beauty Treatments</li>
                    <li>Professional Photography & Video Recording</li>
                    <li>Travel Arrangements</li>
                    <li>Travel Arrangements</li>
                    <li>Theme Set-ups</li>
                    <li>Planning a Menu</li>
                    <li>Organizing Cultural Activities</li>
                    <li>Party Plot (1,00,000 Sq.ft.)</li>
                    <li>Banquet Halls (200 To 500 People Capacity)</li>
                  </ul>

                  <div className="flex flex-row pt-4">
                    <button className="bg-blue-900 mr-3 text-sm browser hover:bg-blue-900 text-white font-bold py-2 px-16 rounded">
                      Book Now
                    </button>
                    <button className="bg-transparent text-sm hover:bg-blue-900 text-blue-900 font-semibold hover:text-white py-2 px-14 border border-blue-500 hover:border-transparent rounded">
                      View More
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="max-w-md rounded overflow-hidden shadow-0 pb-6 border-solid border-gray-200 border">
                <div>
                  <F src="/78.png" width="600px" height="350px" />
                </div>
                <div className="px-6 py-2">
                  <div className="font-bold text-xl mb-2">Wedding and Events</div>
                  <p className="text-gray-700 text-sm">
                    Professional wedding and event planners at Radhe Upavan
                    Resort are experienced to manage all aspects of weddings and
                    events
                  </p>
                  <ul className="list-disc text-sm text-gray-600 pl-4 pt-4 iaia0a0">
                    <li>Conceptualizing the Event</li>
                    <li>Planning and Execution</li>
                    <li>Preliminary Preparation</li>
                    <li>Bridal Make-up, Hair & Beauty Treatments</li>
                    <li>Professional Photography & Video Recording</li>
                    <li>Travel Arrangements</li>
                    <li>Travel Arrangements</li>
                    <li>Theme Set-ups</li>
                    <li>Planning a Menu</li>
                    <li>Organizing Cultural Activities</li>
                    <li>Party Plot (1,00,000 Sq.ft.)</li>
                    <li>Banquet Halls (200 To 500 People Capacity)</li>
                  </ul>

                  <div className="flex flex-row pt-4">
                    <button className="bg-blue-900 mr-3 text-sm browser hover:bg-blue-900 text-white font-bold py-2 px-16 rounded">
                      Book Now
                    </button>
                    <button className="bg-transparent text-sm hover:bg-blue-900 text-blue-900 font-semibold hover:text-white py-2 px-14 border border-blue-500 hover:border-transparent rounded">
                      View More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div
            className="flex justify-between pt-16 border-b border-solid border-gray-100 pb-4 mb-4"
            style={{ width: "78%" }}
          >
            <div>
              <h1 className="text-2xl text-blue-900 pl-6">Reviews</h1>
            </div>
            <div>
              <button className="bg-blue-900 text-sm px-8 text-white font-bold py-3 rounded">
                Write Review
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col pl-6">
          <h3 className="text-2xl oapapapo">4.8</h3>
          <h5 className="text-sm mt-2 oapapapo">REVIEWS</h5>
          <div className="flex pt-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              className="mr-2"
              fill="#FBBF4C"
            >
              <path d="M21.947 9.179a1.001 1.001 0 0 0-.868-.676l-5.701-.453-2.467-5.461a.998.998 0 0 0-1.822-.001L8.622 8.05l-5.701.453a1 1 0 0 0-.619 1.713l4.213 4.107-1.49 6.452a1 1 0 0 0 1.53 1.057L12 18.202l5.445 3.63a1.001 1.001 0 0 0 1.517-1.106l-1.829-6.4 4.536-4.082c.297-.268.406-.686.278-1.065z"></path>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              className="mr-2"
              fill="#FBBF4C"
            >
              <path d="M21.947 9.179a1.001 1.001 0 0 0-.868-.676l-5.701-.453-2.467-5.461a.998.998 0 0 0-1.822-.001L8.622 8.05l-5.701.453a1 1 0 0 0-.619 1.713l4.213 4.107-1.49 6.452a1 1 0 0 0 1.53 1.057L12 18.202l5.445 3.63a1.001 1.001 0 0 0 1.517-1.106l-1.829-6.4 4.536-4.082c.297-.268.406-.686.278-1.065z"></path>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              className="mr-2"
              fill="#FBBF4C"
            >
              <path d="M21.947 9.179a1.001 1.001 0 0 0-.868-.676l-5.701-.453-2.467-5.461a.998.998 0 0 0-1.822-.001L8.622 8.05l-5.701.453a1 1 0 0 0-.619 1.713l4.213 4.107-1.49 6.452a1 1 0 0 0 1.53 1.057L12 18.202l5.445 3.63a1.001 1.001 0 0 0 1.517-1.106l-1.829-6.4 4.536-4.082c.297-.268.406-.686.278-1.065z"></path>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              className="mr-2"
              fill="#FBBF4C"
            >
              <path d="M21.947 9.179a1.001 1.001 0 0 0-.868-.676l-5.701-.453-2.467-5.461a.998.998 0 0 0-1.822-.001L8.622 8.05l-5.701.453a1 1 0 0 0-.619 1.713l4.213 4.107-1.49 6.452a1 1 0 0 0 1.53 1.057L12 18.202l5.445 3.63a1.001 1.001 0 0 0 1.517-1.106l-1.829-6.4 4.536-4.082c.297-.268.406-.686.278-1.065z"></path>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              className="mr-2"
              fill="#FBBF4C"
            >
              <path d="M21.947 9.179a1.001 1.001 0 0 0-.868-.676l-5.701-.453-2.467-5.461a.998.998 0 0 0-1.822-.001L8.622 8.05l-5.701.453a1 1 0 0 0-.619 1.713l4.213 4.107-1.49 6.452a1 1 0 0 0 1.53 1.057L12 18.202l5.445 3.63a1.001 1.001 0 0 0 1.517-1.106l-1.829-6.4 4.536-4.082c.297-.268.406-.686.278-1.065z"></path>
            </svg>
          </div>
          <div className="pt-2">
            <span className="text-sm text-blue-900">based on 34 ratings</span>
          </div>
        </div>

        <div>
          <div className="_p_12_s_s shadow-sm rounded-md p-4 mt-5 ml-6">
            <div className="flex justify-between items-center">
              <div>
                <div className="flex items-center">
                  <div>
                    <GridImage
                      src="/Oval Copy.png"
                      width="30px"
                      height="30px"
                    />
                  </div>
                  <div className="pl-3">
                    <h5 className="text-sm text-blue-900 font-medium">
                      Alexa Swan
                    </h5>
                  </div>
                </div>
              </div>
              <div>
                <span className="text-sm text-blue-900 font-medium">
                  1st Jan. 2022
                </span>
              </div>
            </div>
            <hr />
            <div>
              <p className="text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut <br /> labore et dolore magna
                aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                ullamco <br /> laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>
          <div className="_p_12_s_s shadow-sm rounded-md p-4 mt-5 ml-6">
            <div className="flex justify-between items-center">
              <div>
                <div className="flex items-center">
                  <div>
                    <GridImage
                      src="/Oval Copy.png"
                      width="30px"
                      height="30px"
                    />
                  </div>
                  <div className="pl-3">
                    <h5 className="text-sm text-blue-900 font-medium">
                      Alexa Swan
                    </h5>
                  </div>
                </div>
              </div>
              <div>
                <span className="text-sm text-blue-900 font-medium">
                  1st Jan. 2022
                </span>
              </div>
            </div>
            <hr />
            <div>
              <p className="text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut <br /> labore et dolore magna
                aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                ullamco <br /> laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>

          <div className="flex justify-center pt-16">
            <button className="bg-transparent hover:bg-blue-900 text-blue-900 font-semibold hover:text-white py-2 px-8 shadow-md border border-blue-900 hover:border-transparent rounded">
              View All
            </button>
          </div>
        </div>
      </div>
      <div className="p-10 bg-pink-50 mt-20">
        <Footer />
      </div>
    </div>
  );
}
