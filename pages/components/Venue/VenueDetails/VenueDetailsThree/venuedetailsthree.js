import V from "next/image";
import GridImage from "next/image";
import Footer from "../../../Footer/footer";
// Import the FontAwesomeIcon component
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// import the icons you need
import {
  faPlay,
} from "@fortawesome/free-solid-svg-icons";
export default function VenueDetailsThree() {
  return (
    <div>
      <div id="London" style={{ display: "block" }} className="tabcontent">
        <div className="flex">
          <div>
            <V src="/Mapsicle Map.png" width="350px" height="300px" />
          </div>
          <div className="pl-28">
            <p className="text-sm text-gray-500 pt-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor <br /> incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis <br /> nostrud exercitation ullamco
              laboris nisi ut aliquip ex ea commodo consequat. <br /> Duis aute
              irure dolor in reprehenderit in voluptate velit esse cillum dolore
              eu <br /> fugiat nulla pariatur. Excepteur sint occaecat cupidatat
              non proident, sunt in culpa <br /> qui officia deserunt mollit
              anim id est laborum.
            </p>
            <p className="text-sm text-gray-500 pt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor <br /> incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis <br /> nostrud exercitation ullamco
              laboris nisi ut aliquip ex ea commodo consequat. <br /> Duis aute
              irure dolor in reprehenderit in voluptate velit esse cillum dolore
              eu <br /> fugiat nulla pariatur. Excepteur sint occaecat cupidatat
              non proident, sunt in culpa <br /> qui officia deserunt mollit
              anim id est laborum.
            </p>
          </div>
        </div>

        <div className="pl-10 pt-6">
          <div className="flex flex-col">
            <div className="flex items-center border-b border-solid border-gray-300 pb-4">
              <b className="text-sm">Event Spaces</b>
              <span className="pl-96 text-orange-500">2 spaces</span>
            </div>
            <div className="flex mt-6 items-center border-b border-solid border-gray-300 pb-4">
              <b className="text-sm">Services</b>
              <div className="pl-96">
                <span className="text-orange-500 pl-6">6 services</span>
              </div>
            </div>
            <div>
              <h4 className="mt-4">
                <b>Amenities</b>
              </h4>
            </div>
            <div>
              <div className="grid grid-cols-3 gap-4 mt-4 border-b border-solid border-gray-300 pb-4 mb-4">
                <div>
                  <div className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="#EE6C4D"
                    >
                      <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"></path>
                      <path d="M9.999 13.587 7.7 11.292l-1.412 1.416 3.713 3.705 6.706-6.706-1.414-1.414z"></path>
                    </svg>
                    <span className="text-sm pl-2">Air conditioning</span>
                  </div>
                </div>
                <div>
                  <div className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="#EE6C4D"
                    >
                      <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"></path>
                      <path d="M9.999 13.587 7.7 11.292l-1.412 1.416 3.713 3.705 6.706-6.706-1.414-1.414z"></path>
                    </svg>
                    <span className="text-sm pl-2">Parking</span>
                  </div>
                </div>
                <div>
                  <div className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="#EE6C4D"
                    >
                      <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"></path>
                      <path d="M9.999 13.587 7.7 11.292l-1.412 1.416 3.713 3.705 6.706-6.706-1.414-1.414z"></path>
                    </svg>
                    <span className="text-sm pl-2">Personal Staff</span>
                  </div>
                </div>

                <div>
                  <div className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="#EE6C4D"
                    >
                      <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"></path>
                      <path d="M9.999 13.587 7.7 11.292l-1.412 1.416 3.713 3.705 6.706-6.706-1.414-1.414z"></path>
                    </svg>
                    <span className="text-sm pl-2">Pet-friendly</span>
                  </div>
                </div>
                <div>
                  <div className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="#EE6C4D"
                    >
                      <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"></path>
                      <path d="M9.999 13.587 7.7 11.292l-1.412 1.416 3.713 3.705 6.706-6.706-1.414-1.414z"></path>
                    </svg>
                    <span className="text-sm pl-2">Open fireplace</span>
                  </div>
                </div>
                <div>
                  <div className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="#EE6C4D"
                    >
                      <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"></path>
                      <path d="M9.999 13.587 7.7 11.292l-1.412 1.416 3.713 3.705 6.706-6.706-1.414-1.414z"></path>
                    </svg>
                    <span className="text-sm pl-2">Open fireplace</span>
                  </div>
                </div>
                <div>
                  <div className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="#EE6C4D"
                    >
                      <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"></path>
                      <path d="M9.999 13.587 7.7 11.292l-1.412 1.416 3.713 3.705 6.706-6.706-1.414-1.414z"></path>
                    </svg>
                    <span className="text-sm pl-2">Access Wifi</span>
                  </div>
                </div>
                <div>
                  <div className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="#EE6C4D"
                    >
                      <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"></path>
                      <path d="M9.999 13.587 7.7 11.292l-1.412 1.416 3.713 3.705 6.706-6.706-1.414-1.414z"></path>
                    </svg>
                    <span className="text-sm pl-2">Wheelchair</span>
                  </div>
                </div>
                <div>
                  <div className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="#EE6C4D"
                    >
                      <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"></path>
                      <path d="M9.999 13.587 7.7 11.292l-1.412 1.416 3.713 3.705 6.706-6.706-1.414-1.414z"></path>
                    </svg>
                    <span className="text-sm pl-2">Wheelchair</span>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="flex items-center border-b border-solid border-gray-300 pb-4">
                <b className="text-sm">Contact Number</b>
                <span className="pl-80 text-orange-500">
                  +1 1234567890 | +1 0987654321
                </span>
              </div>
              <div className="flex mt-6 items-center border-b border-solid border-gray-300 pb-4">
                <b className="text-sm">Email</b>
                <div className="pl-96">
                  <span className="text-orange-500 pl-6">
                    blissontheocean@gmail.com
                  </span>
                </div>
              </div>
              <div className="flex justify-center pt-20">
                <button className="bg-blue-900 text-sm hover:bg-blue-700 text-white font-bold py-3 px-20 rounded">
                  View Services
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="Paris" className="tabcontent relative -top-16">
        <div>
          <h3 className="text-2xl font-medium">Space</h3>
        </div>
        <div>
          <div className="flex mt-3">
            <div>
              <div className="max-w-xs rounded overflow-hidden shadow-md p-3">
                <V
                  src="/image 100.png"
                  width="500px"
                  className="rounded-md"
                  height="380px"
                />
                <div className="px-0 py-4">
                  <div className="flex justify-between mb-2">
                    <V
                      src="/image 100.png"
                      width="70px"
                      className="rounded-md"
                      height="50px"
                    />
                    <V
                      src="/image 101.png"
                      width="70px"
                      className="rounded-md"
                      height="50px"
                    />
                    <V
                      src="/image 56.png"
                      width="70px"
                      className="rounded-md"
                      height="50px"
                    />
                    <div className="fifteen_more rounded-md flex justify-center items-center">
                      <h3 className="text-xs text-center text-white">
                        15 more Photos
                      </h3>
                    </div>
                  </div>
                  <h4 className="font-medium mt-4 mb-2 text-xl">
                    Wedding Garden
                  </h4>
                  <p className="text-gray-700 text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Voluptatibus quia, nulla! Maiores et perferendis eaque,
                  </p>
                  <div className="flex pt-2">
                    <h3 className="font-medium">250$</h3>
                    <small className="text-xs pl-3">per day</small>
                  </div>
                  <div className="pt-6">
                    <button className="bg-blue-900 w-full text-sm hover:bg-blue-900 text-white font-bold py-2 px-4 rounded">
                      Add
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="max-w-xs rounded ml-8 overflow-hidden shadow-md p-3">
                <V
                  src="/78.png"
                  width="500px"
                  className="rounded-md"
                  height="380px"
                />
                <div className="px-0 py-4">
                  <div className="flex justify-between mb-2">
                    <V
                      src="/hsdhs.png"
                      width="70px"
                      className="rounded-md"
                      height="50px"
                    />
                    <V
                      src="/t.png"
                      width="70px"
                      className="rounded-md"
                      height="50px"
                    />
                    <V
                      src="/image 43.png"
                      width="70px"
                      className="rounded-md"
                      height="50px"
                    />
                    <div className="fifteen_more rounded-md flex justify-center items-center">
                      <h3 className="text-xs text-center text-white">
                        15 more Photos
                      </h3>
                    </div>
                  </div>
                  <h4 className="font-medium mt-4 mb-2 text-xl">
                    Banquet Hall
                  </h4>
                  <p className="text-gray-700 text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Voluptatibus quia, nulla! Maiores et perferendis eaque,
                  </p>
                  <div className="flex pt-2">
                    <h3 className="font-medium">250$</h3>
                    <small className="text-xs pl-3">per day</small>
                  </div>
                  <div className="pt-6">
                    <button className="bg-blue-900 w-full text-sm hover:bg-blue-900 text-white font-bold py-2 px-4 rounded">
                      Add
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="pt-16">
          <h3 className="text-2xl font-medium">Other Services</h3>
        </div>
        <div>
          <div className="flex mt-3">
            <div>
              <div className="max-w-xs rounded overflow-hidden shadow-md p-3">
                <V
                  src="/image 100.png"
                  width="500px"
                  className="rounded-md"
                  height="380px"
                />
                <div className="px-0 py-4">
                  <div className="flex justify-between mb-2">
                    <V
                      src="/image 100.png"
                      width="70px"
                      className="rounded-md"
                      height="50px"
                    />
                    <V
                      src="/image 101.png"
                      width="70px"
                      className="rounded-md"
                      height="50px"
                    />
                    <V
                      src="/image 56.png"
                      width="70px"
                      className="rounded-md"
                      height="50px"
                    />
                    <div className="fifteen_more rounded-md flex justify-center items-center">
                      <h3 className="text-xs text-center text-white">
                        15 more Photos
                      </h3>
                    </div>
                  </div>
                  <h4 className="font-medium mt-4 mb-2 text-xl">
                    Wedding Garden
                  </h4>
                  <p className="text-gray-700 text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Voluptatibus quia, nulla! Maiores et perferendis eaque,
                  </p>
                  <div className="flex pt-2">
                    <h3 className="font-medium">250$</h3>
                    <small className="text-xs pl-3">per day</small>
                  </div>
                  <div className="pt-6">
                    <button className="bg-blue-900 w-full text-sm hover:bg-blue-900 text-white font-bold py-2 px-4 rounded">
                      Add
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="max-w-xs rounded ml-8 overflow-hidden shadow-md p-3">
                <V
                  src="/78.png"
                  width="500px"
                  className="rounded-md"
                  height="380px"
                />
                <div className="px-0 py-4">
                  <div className="flex justify-between mb-2">
                    <V
                      src="/hsdhs.png"
                      width="70px"
                      className="rounded-md"
                      height="50px"
                    />
                    <V
                      src="/t.png"
                      width="70px"
                      className="rounded-md"
                      height="50px"
                    />
                    <V
                      src="/image 43.png"
                      width="70px"
                      className="rounded-md"
                      height="50px"
                    />
                    <div className="fifteen_more rounded-md flex justify-center items-center">
                      <h3 className="text-xs text-center text-white">
                        15 more Photos
                      </h3>
                    </div>
                  </div>
                  <h4 className="font-medium mt-4 mb-2 text-xl">
                    Banquet Hall
                  </h4>
                  <p className="text-gray-700 text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Voluptatibus quia, nulla! Maiores et perferendis eaque,
                  </p>
                  <div className="flex pt-2">
                    <h3 className="font-medium">250$</h3>
                    <small className="text-xs pl-3">per day</small>
                  </div>
                  <div className="pt-6">
                    <button className="bg-blue-900 w-full text-sm hover:bg-blue-900 text-white font-bold py-2 px-4 rounded">
                      Add
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="max-w-xs rounded ml-8 overflow-hidden shadow-md p-3">
                <V
                  src="/image 104.png"
                  width="500px"
                  className="rounded-md"
                  height="380px"
                />
                <div className="px-0 py-4">
                  <div className="flex justify-between mb-2">
                    <V
                      src="/hsdhs.png"
                      width="70px"
                      className="rounded-md"
                      height="50px"
                    />
                    <V
                      src="/t.png"
                      width="70px"
                      className="rounded-md"
                      height="50px"
                    />
                    <V
                      src="/image 43.png"
                      width="70px"
                      className="rounded-md"
                      height="50px"
                    />
                    <div className="fifteen_more rounded-md flex justify-center items-center">
                      <h3 className="text-xs text-center text-white">
                        15 more Photos
                      </h3>
                    </div>
                  </div>
                  <h4 className="font-medium mt-4 mb-2 text-xl">
                    Barbeque Catering
                  </h4>
                  <p className="text-gray-700 text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Voluptatibus quia, nulla! Maiores et perferendis eaque,
                  </p>
                  <div className="flex pt-2">
                    <h3 className="font-medium">250$</h3>
                    <small className="text-xs pl-3">per day</small>
                  </div>
                  <div className="pt-6">
                    <button className="bg-blue-900 w-full text-sm hover:bg-blue-900 text-white font-bold py-2 px-4 rounded">
                      Add
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="Tokyo" className="tabcontent">
        <div className="relative -top-16">
          <div className="max-w-sm w-full lg:max-w-full lg:flex bg-white shadow-md p-4 rounded-md">
            <div className="flex flex-col mr-8">
              <div
                className="h-72 bg-cover lg:w-96 flex-none bg-center bg-no-repeat rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden aosoopak"
                title="Woman holding a mug"
              ></div>
              <div className="flex flex-row justify-between">
                <V
                  src="/image 107.png"
                  width="80px"
                  className="rounded-md"
                  height="50px"
                />
                <V
                  src="/image 106.png"
                  width="80px"
                  className="rounded-md"
                  height="50px"
                />
                <V
                  src="/image 105.png"
                  width="80px"
                  className="rounded-md"
                  height="50px"
                />
                <div className="fifteen_more rounded-md flex justify-center items-center">
                  <h3 className="text-xs text-center text-white">
                    15 more Photos
                  </h3>
                </div>
              </div>
              <div className="flex flex-row pt-4">
                <button className="bg-blue-900 mr-3 text-sm browser hover:bg-blue-900 text-white font-bold py-2 px-12 rounded">
                  Book Now
                </button>
                <button className="bg-transparent text-sm hover:bg-blue-900 text-blue-900 font-semibold hover:text-white py-2 px-12 border border-blue-500 hover:border-transparent rounded">
                  View More
                </button>
              </div>
            </div>

            <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
              <div className="mb-8">
                <div className="text-gray-900 font-bold text-xl mb-2">
                  Wedding and Events
                </div>
                <p className="text-gray-700 text-sm">
                  Professional wedding and event planners at Radhe Upavan Resort
                  are <br /> experienced to manage all aspects of weddings and
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
              </div>
            </div>
          </div>
          <div className="max-w-sm w-full lg:max-w-full lg:flex mt-14 bg-white shadow-md p-4 rounded-md">
            <div className="flex flex-col mr-8">
              <div
                className="h-72 bg-cover lg:w-96 flex-none bg-center bg-no-repeat rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden uqywuww"
                title="Woman holding a mug"
              ></div>
              <div className="flex flex-row justify-between">
                <V
                  src="/image 107.png"
                  width="80px"
                  className="rounded-md"
                  height="50px"
                />
                <V
                  src="/image 106.png"
                  width="80px"
                  className="rounded-md"
                  height="50px"
                />
                <V
                  src="/image 105.png"
                  width="80px"
                  className="rounded-md"
                  height="50px"
                />
                <div className="fifteen_more rounded-md flex justify-center items-center">
                  <h3 className="text-xs text-center text-white">
                    15 more Photos
                  </h3>
                </div>
              </div>
              <div className="flex flex-row pt-4">
                <button className="bg-blue-900 mr-3 text-sm browser hover:bg-blue-900 text-white font-bold py-2 px-12 rounded">
                  Book Now
                </button>
                <button className="bg-transparent text-sm hover:bg-blue-900 text-blue-900 font-semibold hover:text-white py-2 px-12 border border-blue-500 hover:border-transparent rounded">
                  View More
                </button>
              </div>
            </div>

            <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
              <div className="mb-8">
                <div className="text-gray-900 font-bold text-xl mb-2">
                  Wedding and Events
                </div>
                <p className="text-gray-700 text-sm">
                  Professional wedding and event planners at Radhe Upavan Resort
                  are <br /> experienced to manage all aspects of weddings and
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
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="tabcontent" id="Photos">
        <div className="relative -top-16">
          <div className="pt-4">
            <div className="grid grid-cols-4 gap-4">
              <div>
                <div className="one bg-no-repeat rounded-0 flex justify-center items-center"></div>
              </div>
              <div>
                <div className="two bg-no-repeat rounded-0 flex justify-center items-center">
                  {" "}
                </div>
              </div>
              <div>
                <div className="three bg-no-repeat rounded-0 flex justify-center items-center"></div>
              </div>
              <div>
                <div className="four bg-no-repeat rounded-0 flex justify-center items-center"></div>
              </div>
              <div>
                <div className="five bg-no-repeat rounded-0 flex justify-center items-center"></div>
              </div>
              <div>
                <div className="six bg-no-repeat rounded-0 flex justify-center items-center"></div>
              </div>
              <div>
                <div className="seven bg-no-repeat rounded-0 flex justify-center items-center"></div>
              </div>
              <div>
                <div className="eight bg-no-repeat rounded-0 flex justify-center items-center"></div>
              </div>
              <div>
                <div className="nine bg-no-repeat rounded-0 flex justify-center items-center"></div>
              </div>
              <div>
                <div className="ten bg-no-repeat rounded-0 flex justify-center items-center"></div>
              </div>
              <div>
                <div className="eleven bg-no-repeat rounded-0 flex justify-center items-center"></div>
              </div>
              <div>
                <div className="twellev bg-no-repeat rounded-0 flex justify-center items-center"></div>
              </div>
              <div>
                <div className="thirten bg-no-repeat rounded-0 flex justify-center items-center">
                  <div className="w-10 h-10 bg-white rounded-full flex justify-center items-center">
                    <FontAwesomeIcon
                      icon={faPlay}
                      style={{ fontSize: 12, color: "#333" }}
                    />
                  </div>
                </div>
              </div>
              <div>
                <div className="fourten bg-no-repeat rounded-0 flex justify-center items-center">
                  <div className="w-10 h-10 bg-white rounded-full flex justify-center items-center">
                    <FontAwesomeIcon
                      icon={faPlay}
                      style={{ fontSize: 12, color: "#333" }}
                    />
                  </div>
                </div>
              </div>
              <div>
                <div className="fiften bg-no-repeat rounded-0 flex justify-center items-center">
                  <div className="w-10 h-10 bg-white rounded-full flex justify-center items-center">
                    <FontAwesomeIcon
                      icon={faPlay}
                      style={{ fontSize: 12, color: "#333" }}
                    />
                  </div>
                </div>
              </div>
              <div>
                <div className="sixten bg-no-repeat rounded-0 flex justify-center items-center">
                  <div className="w-10 h-10 bg-white rounded-full flex justify-center items-center">
                    <FontAwesomeIcon
                      icon={faPlay}
                      style={{ fontSize: 12, color: "#333" }}
                    />
                  </div>
                </div>
              </div>
              <div>
                <div className="eight bg-no-repeat rounded-0 flex justify-center items-center"></div>
              </div>
              <div>
                <div className="nine bg-no-repeat rounded-0 flex justify-center items-center"></div>
              </div>
              <div>
                <div className="ten bg-no-repeat rounded-0 flex justify-center items-center"></div>
              </div>
              <div>
                <div className="eleven bg-no-repeat rounded-0 flex justify-center items-center"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="tabcontent" id="Reviews">
        <div className="relative -top-16">
          <div className="pb-6">
            <div className="flex justify-between pt-6" style={{ width: "78%" }}>
              <div>
                <div className="flex flex-col pl-6">
                  <div className="flex pt-2 items-center">
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

                    <span className="text-sm font-medium">
                      4.8 out of 5 ratings
                    </span>
                  </div>
                  <div className="pt-2">
                    <span className="text-sm text-blue-900">
                      based on 34 ratings
                    </span>
                  </div>
                </div>
              </div>
              <div>
                <button className="bg-blue-900 text-sm px-8 text-white font-bold py-3 rounded">
                  Write Review
                </button>
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
                <div className="flex pt-2 items-center">
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
                <p className="text-sm mt-3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut <br /> labore et dolore magna
                  aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                  ullamco <br /> laboris nisi ut aliquip ex ea commodo
                  consequat.
                </p>

                <div className="flex pt-3">
                  <div className="pr-3">
                    <V
                      src="/bb.png"
                      width="80px"
                      className="mr-3"
                      height="60px"
                    />
                  </div>
                  <div className="pr-3">
                    <V
                      src="/image 46.png"
                      width="80px"
                      className="mr-3"
                      height="60px"
                    />
                  </div>
                  <div className="pr-3">
                    <V
                      src="/image 112.png"
                      width="80px"
                      className="mr-3"
                      height="60px"
                    />
                  </div>
                  <div className="pr-3">
                    <V
                      src="/image 113.png"
                      width="80px"
                      className="mr-3"
                      height="60px"
                    />
                  </div>
                </div>
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
                <div className="flex pt-2 items-center">
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
                <p className="text-sm mt-3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut <br /> labore et dolore magna
                  aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                  ullamco <br /> laboris nisi ut aliquip ex ea commodo
                  consequat.
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
                <div className="flex pt-2 items-center">
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
                <p className="text-sm mt-3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut <br /> labore et dolore magna
                  aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                  ullamco <br /> laboris nisi ut aliquip ex ea commodo
                  consequat.
                </p>
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-16">
            <button className="bg-transparent shadow-sm hover:bg-blue-900 hover:text-white text-blue-900 border border-solid border-blue-900 font-bold py-3 px-10 rounded">
              View All
            </button>
          </div>
        </div>
      </div>

      <div>
        <div className="bg-pink-50 p-10 mt-20">
          <Footer />
        </div>
      </div>
    </div>
  );
}
