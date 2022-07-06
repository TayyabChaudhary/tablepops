import Head from "next/head";
import VenueHeader from "../Header/header";
import GridImage from "next/image";
import Footer from "../../Footer/footer";
export default function VenueDetails() {
  return (
    <>
      <Head>
        <title>Venue Details Page</title>
      </Head>

      <VenueHeader />

      <div className="flex justify-center pt-10">
        <div className="flex">
          <div className="pr-6">
            <GridImage
              src="/7e7.png"
              className="mr-3 object-fit shadow-md"
              width="634px"
              height="438px"
            />
          </div>
          <div className="flex flex-col">
            <div className="flex">
              <div className="pr-6">
                <GridImage
                  src="/soa.png"
                  width="250px"
                  className="object-fit shadow-md"
                  height="200px"
                />
              </div>
              <div>
                <GridImage src="/aoa.png" width="250px" height="200px" />
              </div>
            </div>
            <div className="flex pt-8">
              <div className="pr-6">
                <GridImage
                  src="/hss.png"
                  width="250px"
                  className="object-fit shadow-md"
                  height="200px"
                />
              </div>
              <div>
                <div className="bb relative">
                  <div className="w-48 absolute bottom-3 right-3 bg-white rounded-md p-2 cursor-pointer">
                    <div className="flex items-center">
                      <svg
                        className="gb_Te"
                        width="20px"
                        height="20px"
                        focusable="false"
                        viewBox="0 0 24 24"
                      >
                        <path d="M6,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM16,6c0,1.1 0.9,2 2,2s2,-0.9 2,-2 -0.9,-2 -2,-2 -2,0.9 -2,2zM12,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2z"></path>
                      </svg>
                      <h5 className="text-md text-blue-900 font-medium pl-2">
                        Show all photos
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="p-10">
        <div className="flex flex-row justify-between">
          <div>
            <h1 className="text-4xl pl-6 _opaoao vendor_category">
              Bliss on the Ocean
            </h1>
            <ul>
              <li className="flex flex-row pt-3 pl-4 text-sm jaiaiai">
                <svg
                  width="20"
                  height="20"
                  fill="#EE6C4D"
                  className="mr-3"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 10c-1.104 0-2-.896-2-2s.896-2 2-2 2 .896 2 2-.896 2-2 2m0-5c-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3-1.343-3-3-3m-7 2.602c0-3.517 3.271-6.602 7-6.602s7 3.085 7 6.602c0 3.455-2.563 7.543-7 14.527-4.489-7.073-7-11.072-7-14.527m7-7.602c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602" />
                </svg>
                2nd Lane, Palm Beach, Malibu, LA 34678{" "}
                <span className="text-sm pl-3 font-bold text-orange-600 underline">
                  View Map
                </span>
              </li>
            </ul>

            <p className="pl-4 pt-3 text-sm jaiaiai text-gray-600 kaaooa">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore <br /> et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut
              <br />
              aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse
              <br /> cillum dolore eu fugiat nulla pariatur. Excepteur sint
              occaecat cupidatat non proident, sunt in culpa
              <br /> qui officia deserunt mollit anim id est laborum.
            </p>
            <p className="pl-4 pt-3 text-sm jaiaiai text-gray-600 kaaooa">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore <br /> et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut
              <br />
              aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse
              <br /> cillum dolore eu fugiat nulla pariatur. Excepteur sint
              occaecat cupidatat non proident, sunt in culpa
              <br /> qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
          <div>
            <div className="max-w-md w-auto bg-gray-50 rounded overflow-hidden shadow-sm">
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2 text-blue-900">
                  Request a Quote
                </div>
                <div className="flex justify-start">
                  <div className="mb-3 xl:w-64 relative">
                    <select
                      className="form-select text-sm appearance-none
                    relative
      block
      w-64
      ml-0
      px-3
      py-1.5
      font-normal
      text-gray-700
      bg-transparent bg-clip-padding bg-no-repeat
      border border-solid border-gray-300
      rounded-0
      transition
      ease-in-out
      m-0
      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                      aria-label="Default select example"
                    >
                      <option selected>Select Ocassion</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="z-100 absolute right-1 top-1"
                      fill="#ddd"
                      width="24"
                      height="24"
                    >
                      <path d="M16.293 9.293 12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z"></path>
                    </svg>
                  </div>
                </div>
                <div className="flex justify-start">
                  <div className="mb-3 xl:w-64 relative">
                    <select
                      className="form-select text-sm appearance-none
                    relative
      block
      w-64
      ml-0
      px-3
      py-1.5
      font-normal
      text-gray-700
      bg-transparent bg-clip-padding bg-no-repeat
      border border-solid border-gray-300
      rounded-0
      transition
      ease-in-out
      m-0
      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                      aria-label="Default select example"
                    >
                      <option selected>Guests</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="z-100 absolute right-1 top-1"
                      fill="#ddd"
                      width="24"
                      height="24"
                    >
                      <path d="M16.293 9.293 12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z"></path>
                    </svg>
                  </div>
                </div>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg
                      className="w-5 h-5 text-gray-500 dark:text-gray-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"></path>
                    </svg>
                  </div>
                  <input
                    datepicker
                    type="text"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-0 focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:placeholder-gray-400 dark:text-white"
                    placeholder="Select Date"
                  />
                </div>

                <div>
                  <h4 className="text-xl text-blue-900 mt-3">
                    Select Services
                  </h4>
                  <div className="flex justify-between pb-3 mt-3">
                    <div>
                      <input type="checkbox" />
                      <span className="text-sm ml-2 text-blue-900 font-medium">
                        Services 1
                      </span>
                    </div>
                    <div>
                      <input type="checkbox" />
                      <span className="text-sm ml-2 text-blue-900 font-medium">
                        Services 2
                      </span>
                    </div>
                  </div>
                  <div className="flex justify-between pb-3">
                    <div>
                      <input type="checkbox" />
                      <span className="text-sm ml-2 text-blue-900 font-medium">
                        Services 3
                      </span>
                    </div>
                    <div>
                      <input type="checkbox" />
                      <span className="text-sm ml-2 text-blue-900 font-medium">
                        Services 4
                      </span>
                    </div>
                  </div>
                  <div className="flex justify-between pb-3">
                    <div>
                      <input type="checkbox" />
                      <span className="text-sm ml-2 text-blue-900 font-medium">
                        Services 5
                      </span>
                    </div>
                    <div>
                      <input type="checkbox" />
                      <span className="text-sm ml-2 text-blue-900 font-medium">
                        Services 6
                      </span>
                    </div>
                  </div>
                  <div className="flex justify-between pb-3">
                    <div>
                      <input type="checkbox" />
                      <span className="text-sm ml-2 text-blue-900 font-medium">
                        Services 7
                      </span>
                    </div>
                    <div>
                      <input type="checkbox" />
                      <span className="text-sm ml-2 text-blue-900 font-medium">
                        Services 8
                      </span>
                    </div>
                  </div>
                  <div className="flex justify-between pb-3">
                    <div>
                      <input type="checkbox" />
                      <span className="text-sm ml-2 text-blue-900 font-medium">
                        Service 9
                      </span>
                    </div>
                    <div>
                      <input type="checkbox" />
                      <span className="text-sm ml-2 text-blue-900 font-medium">
                        Service 10
                      </span>
                    </div>
                  </div>
                  <div>
                    <button className="bg-blue-500 w-full _savespso hover:bg-blue-700 text-white font-bold py-3 px-4 rounded">
                      Get Quote
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pl-4">
          <h3 className="text-xl text-blue-900 mt-4">What We Offer</h3>
          <div className="grid grid-cols-3 gap-2 pt-5">
            <div>
              <div className="flex items-center pb-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#EE6C4D"
                  width="24"
                  height="24"
                >
                  <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"></path>
                  <path d="M9.999 13.587 7.7 11.292l-1.412 1.416 3.713 3.705 6.706-6.706-1.414-1.414z"></path>
                </svg>
                <span className="text-sm pl-2">Air conditioning</span>
              </div>
              <div className="flex items-center pb-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#EE6C4D"
                  width="24"
                  height="24"
                >
                  <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"></path>
                  <path d="M9.999 13.587 7.7 11.292l-1.412 1.416 3.713 3.705 6.706-6.706-1.414-1.414z"></path>
                </svg>
                <span className="text-sm pl-2">Pet-friendly</span>
              </div>
              <div className="flex items-center pb-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#EE6C4D"
                  width="24"
                  height="24"
                >
                  <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"></path>
                  <path d="M9.999 13.587 7.7 11.292l-1.412 1.416 3.713 3.705 6.706-6.706-1.414-1.414z"></path>
                </svg>
                <span className="text-sm pl-2">Access Wifi</span>
              </div>
              <div className="flex items-center pb-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#EE6C4D"
                  width="24"
                  height="24"
                >
                  <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"></path>
                  <path d="M9.999 13.587 7.7 11.292l-1.412 1.416 3.713 3.705 6.706-6.706-1.414-1.414z"></path>
                </svg>
                <span className="text-sm pl-2">Linen supplied</span>
              </div>
            </div>
            <div>
              <div>
                <div className="flex items-center pb-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#EE6C4D"
                    width="24"
                    height="24"
                  >
                    <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"></path>
                    <path d="M9.999 13.587 7.7 11.292l-1.412 1.416 3.713 3.705 6.706-6.706-1.414-1.414z"></path>
                  </svg>
                  <span className="text-sm pl-2">Parking</span>
                </div>
                <div className="flex items-center pb-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#EE6C4D"
                    width="24"
                    height="24"
                  >
                    <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"></path>
                    <path d="M9.999 13.587 7.7 11.292l-1.412 1.416 3.713 3.705 6.706-6.706-1.414-1.414z"></path>
                  </svg>
                  <span className="text-sm pl-2">Open fireplace</span>
                </div>
                <div className="flex items-center pb-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#EE6C4D"
                    width="24"
                    height="24"
                  >
                    <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"></path>
                    <path d="M9.999 13.587 7.7 11.292l-1.412 1.416 3.713 3.705 6.706-6.706-1.414-1.414z"></path>
                  </svg>
                  <span className="text-sm pl-2">Wheelchair</span>
                </div>
                <div className="flex items-center pb-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#EE6C4D"
                    width="24"
                    height="24"
                  >
                    <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"></path>
                    <path d="M9.999 13.587 7.7 11.292l-1.412 1.416 3.713 3.705 6.706-6.706-1.414-1.414z"></path>
                  </svg>
                  <span className="text-sm pl-2">Kitchen</span>
                </div>
              </div>
            </div>
            <div>
              <div>
                <div className="flex items-center pb-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#EE6C4D"
                    width="24"
                    height="24"
                  >
                    <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"></path>
                    <path d="M9.999 13.587 7.7 11.292l-1.412 1.416 3.713 3.705 6.706-6.706-1.414-1.414z"></path>
                  </svg>
                  <span className="text-sm pl-2">Personal Staff</span>
                </div>
                <div className="flex items-center pb-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#EE6C4D"
                    width="24"
                    height="24"
                  >
                    <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"></path>
                    <path d="M9.999 13.587 7.7 11.292l-1.412 1.416 3.713 3.705 6.706-6.706-1.414-1.414z"></path>
                  </svg>
                  <span className="text-sm pl-2">Open fireplace</span>
                </div>
                <div className="flex items-center pb-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#EE6C4D"
                    width="24"
                    height="24"
                  >
                    <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"></path>
                    <path d="M9.999 13.587 7.7 11.292l-1.412 1.416 3.713 3.705 6.706-6.706-1.414-1.414z"></path>
                  </svg>
                  <span className="text-sm pl-2">Wheelchair</span>
                </div>
                <div className="flex items-center pb-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#EE6C4D"
                    width="24"
                    height="24"
                  >
                    <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"></path>
                    <path d="M9.999 13.587 7.7 11.292l-1.412 1.416 3.713 3.705 6.706-6.706-1.414-1.414z"></path>
                  </svg>
                  <span className="text-sm pl-2">Kitchen</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="flex justify-between pt-6" style={{ width: "78%" }}>
            <div>
              <h1 className="text-2xl text-blue-900 pl-6">Reviews</h1>
            </div>
            <div>
              <button className="_savespso text-sm px-8 text-white font-bold py-3 rounded">
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
        </div>

        <div className="flex justify-center mt-8">
          <button className="bg-blue-500 _savespso shadow-sm hover:bg-blue-700 text-white font-bold py-3 px-10 rounded">
            View All
          </button>
        </div>
      </div>

      <div className="bg-pink-50 p-10 mt-4">
        <Footer />
      </div>
    </>
  );
}
