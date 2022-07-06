import I from "next/image";
import { useState } from "react";
export default function VenueDetailsSecondSectionOne() {
  const [openGardenDialog, showOpenGarden] = useState(false);

  function openDialogGarden() {
    showOpenGarden(!openGardenDialog);
  }

  return (
    <div>
      <div className="flex justify-between p-10 pt-32">
        <div>
          <h1 className="text-3xl font-medium">Bliss on the Ocean</h1>
          <div className="flex items-center pt-2">
            <svg
              width="24"
              height="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 10c-1.104 0-2-.896-2-2s.896-2 2-2 2 .896 2 2-.896 2-2 2m0-5c-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3-1.343-3-3-3m-7 2.602c0-3.517 3.271-6.602 7-6.602s7 3.085 7 6.602c0 3.455-2.563 7.543-7 14.527-4.489-7.073-7-11.072-7-14.527m7-7.602c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602" />
            </svg>
            <span className="text-sm pl-2 text-gray-600">
              2nd Lane, Palm Beach, Malibu, LA 34678
            </span>
            <b className="text-sm text-orange-500 underline ml-3 cursor-pointer">
              View Map
            </b>
          </div>

          <div>
            <p className="text-sm text-gray-600 mt-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor <br /> incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud <br /> exercitation ullamco
              laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          <div>
            <div className="grid grid-cols-3 gap-8 pt-8">
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
            </div>
          </div>
        </div>

        <div>
          <div className="flex flex-col">
            <div>
              <I
                src="/jaaka.png"
                width="325px"
                className="shadow-lg"
                height="200px"
              />
            </div>
            <div>
              <div className="flex pt-2">
                <div className="pr-2">
                  <I src="/image 58.png" width="100px" height="80px" />
                </div>
                <div className="pr-2">
                  <I src="/image 58.png" width="100px" height="80px" />
                </div>
                <div>
                  <div className="jaaiaia relative">
                    <div className="w-auto bg-white cursor-pointer p-2 rounded-sm absolute bottom-2 right-2 left-1">
                      <div className="flex items-center">
                        <svg
                          width="10px"
                          height="10px"
                          className="gb_Te"
                          focusable="false"
                          viewBox="0 0 24 24"
                        >
                          <path d="M6,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM16,6c0,1.1 0.9,2 2,2s2,-0.9 2,-2 -0.9,-2 -2,-2 -2,0.9 -2,2zM12,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2z"></path>
                        </svg>
                        <span className="textiaooa">See Photos</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="pl-10">
        <div>
          <h2 className="text-2xl font-medium">Services</h2>

          <div>
            <div className="flex justify-between">
              <div>
                <div
                  className="flex justify-between items-center border-b border-solid border-gray-200 pb-6"
                  style={{ width: "900px" }}
                >
                  <div className="flex flex-col">
                    <h6 className="text-sm">Open Garden</h6>
                    <p className="text-sm mt-2 text-gray-600">
                      Accomodates 200 people with night lighting and sitting{" "}
                      <br />
                      faciliries
                    </p>
                  </div>
                  <div>
                    <div className="flex flex-col items-center">
                      <h3 className="font-medium text-xl">250 $</h3>
                      <small className="text-xs">per day</small>
                    </div>
                  </div>
                  <div>
                    <button
                      onClick={openDialogGarden}
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 browse px-10 w-full mt-4 text-sm rounded-0"
                    >
                      Add
                    </button>
                  </div>
                </div>
                <div
                  className="flex justify-between items-center mt-6 border-b border-solid border-gray-200 pb-6"
                  style={{ width: "900px" }}
                >
                  <div className="flex flex-col">
                    <h6 className="text-sm">Banquet Hall</h6>
                    <p className="text-sm mt-2 text-gray-600">
                      Accomodates 200 people with night lighting and sitting{" "}
                      <br />
                      faciliries
                    </p>
                  </div>
                  <div>
                    <div className="flex flex-col items-center">
                      <h3 className="font-medium text-xl">250 $</h3>
                      <small className="text-xs">per day</small>
                    </div>
                  </div>
                  <div>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 browse px-10 w-full mt-4 text-sm rounded-0">
                      Add
                    </button>
                  </div>
                </div>
                <div
                  className="flex justify-between items-center mt-6 border-b border-solid border-gray-200 pb-6"
                  style={{ width: "900px" }}
                >
                  <div className="flex flex-col">
                    <h6 className="text-sm">Theme Set-ups</h6>
                    <p className="text-sm mt-2 text-gray-600">
                      Accomodates 200 people with night lighting and sitting{" "}
                      <br />
                      faciliries
                    </p>
                  </div>
                  <div>
                    <div className="flex flex-col items-center">
                      <h3 className="font-medium text-xl">250 $</h3>
                      <small className="text-xs">per Event</small>
                    </div>
                  </div>
                  <div>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 browse px-10 w-full mt-4 text-sm rounded-0">
                      Add
                    </button>
                  </div>
                </div>
                <div
                  className="flex justify-between items-center mt-6 border-b border-solid border-gray-200 pb-6"
                  style={{ width: "900px" }}
                >
                  <div className="flex flex-col">
                    <h6 className="text-sm">Food Catering</h6>
                    <p className="text-sm mt-2 text-gray-600">
                      Accomodates 200 people with night lighting and sitting{" "}
                      <br />
                      faciliries
                    </p>
                  </div>
                  <div>
                    <div className="flex flex-col items-center">
                      <h3 className="font-medium text-xl">40 $</h3>
                      <small className="text-xs">per Person</small>
                    </div>
                  </div>
                  <div>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 browse px-10 w-full mt-4 text-sm rounded-0">
                      Add
                    </button>
                  </div>
                </div>
              </div>

              <div className="pr-10">
                <div className="max-w-xs overflow-hidden shadow-sm jaiaoao rounded-md p-3 pb-8">
                  <div className="px-2 py-0">
                    <div className="font-bold text-md mb-5 pt-4">
                      For Custom Requirement
                    </div>
                    <div className="flex justify-center">
                      <div className="mb-3 relative">
                        <select
                          className="form-select text-sm appearance-none
                    relative
      block
      w-72
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
                          <option selected>All Services</option>
                          <option value="1">One</option>
                          <option value="2">Two</option>
                          <option value="3">Three</option>
                        </select>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="z-100 absolute right-2 top-1"
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
                    <textarea
                      id="message"
                      rows="4"
                      className="block p-2.5 w-full resize-none mt-2 text-gray-900 bg-gray-50 rounded-0 text-sm border border-gray-300 dark:placeholder-gray-400"
                      placeholder="Tell us about your requirement"
                    ></textarea>
                  </div>
                  <div>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 browse px-10 w-full mt-4 text-sm rounded">
                      Get Quote
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div style={{ display: openGardenDialog ? "block" : "none" }}>
        <div className="special_day_dialog flex justify-center pt-16">
          <div>
            <div className="max-w-8xl rounded overflow-hidden shadow-md bg-white p-10 akakak">
              <div className="px-6 py-4">
                <div className="font-bold text-sm mb-2">Open Garden</div>
                <div className="flex flex-row justify-between">
                  <p className="text-gray-700 text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.{" "}
                    <br />
                    Voluptatibus quia, nulla! Maiores et perferendis eaque,{" "}
                    <br />
                    exercitationem praesentium nihil.
                  </p>
                  <div>
                    <div className="flex">
                      <div className="w-32 border border-solid border-blue-900 p-0 pl-2 rounded">
                        <div className="flex items-center">
                          <h3 className="text-xl cursor-pointer border-r text-blue-900 border-solid border-blue-900 pr-4">
                            -
                          </h3>
                          <h5 className="pl-6 pr-6">1</h5>
                          <h3 className="text-xl cursor-pointer text-blue-900 border-l border-solid border-blue-900 pl-4">
                            +
                          </h3>
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-center pt-2">
                      <h5 className="text-sm">5days</h5>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-xl font-medium">250$</h4>
                  </div>
                </div>
              </div>
              <div className="px-6 pt-4 pb-2">
                <textarea
                  id="message"
                  rows="4"
                  className="block p-2.5 w-full text-sm text-gray-900 bg-white rounded-0 resize-none border border-gray-300 focus:ring-blue-500 outline-none"
                  placeholder="Add instructions (Optional)"
                ></textarea>
              </div>
              <div className="flex justify-center pt-10">
                <button className="bg-blue-900 hover:bg-blue-900 text-white font-semibold hover:text-white py-2 px-8 shadow-0 border border-blue-900 hover:border-transparent rounded">
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
