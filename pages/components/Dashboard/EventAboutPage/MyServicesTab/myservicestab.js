import UserImages from "next/image";
export default function MyServicesTab() {
  return (
    <>
      <div className="flex justify-between">
        <div>
          <div className="flex flex-row">
            <div>
              <h1 className="text-2xl _opaoao">My Services</h1>
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
      bg-white bg-clip-padding bg-no-repeat
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
                  <svg xmlns="http://www.w3.org/2000/svg" className="z-100 absolute -right-3 top-1" fill="#ddd" width="24" height="24"><path d="M16.293 9.293 12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z"></path></svg>

                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="flex">
            <button className="capitalize shadow-0 text-sm login_btn p-2 _event_button text-white font-medium rounded-sm px-5">
              Book New Service
            </button>
            <button className="bg-transparent hover:bg-blue-900 text-blue-900 font-semibold hover:text-white py-2 px-8 border border-blue-900 text-sm ml-7 hover:border-transparent rounded-sm">
              Report An Issue
            </button>
          </div>
        </div>
      </div>

      <div className="pt-8">
        <h4 className="text-xl pb-5">Event Planner</h4>
        <div className="border-solid border-t border-gray-300"></div>
        <div className="flex justify-between">
          <div>
            <div className="flex p-5">
              <div className="flex flex-col items-center">
                <UserImages
                  src="/image 57.png"
                  width="150px"
                  className="rounded-full"
                  height="150px"
                />
                <a href="" className="text-sm font-medium text-blue-900 mt-3">
                  View Profile
                </a>
              </div>

              <div className="pl-10 pt-6">
                <div>
                  <h3 className="text-2xl font-medium">Alexa Grey</h3>
                  <p className="text-xs mt-3 text-gray-500">
                    Lorem ipsum dolor sit amet, consectetur adipiscing <br />{" "}
                    elit. Auctor gravida mauris quisque vitae facilisi et.
                  </p>
                </div>
                <div className="flex flex-row mt-4">
                  <div>
                    <ul className="text-sm _l_a_d_s text-gray-800">
                      <li>Charges</li>
                      <li>Duration</li>
                      <li>Payment Status</li>
                    </ul>
                  </div>
                  <div className="pl-16">
                    <ul className="text-sm _l_a_d_s text-gray-800">
                      <li>450 $</li>
                      <li>2 days</li>
                      <li>Pending</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="flex flex-col pt-5">
              <button className="bg-transparent mb-5 font-semibold hover:text-white py-2 px-8 border _savespso text-white text-sm ml-7 hover:border-transparent rounded-sm">
                Make Payment
              </button>
              <button className="bg-transparent mb-5 hover:bg-blue-900 text-blue-900 font-semibold hover:text-white py-2 px-8 border border-blue-900 text-sm ml-7 hover:border-transparent rounded-sm">
                Send Message
              </button>
              <button className="bg-transparent hover:bg-blue-900 text-blue-900 font-semibold hover:text-white py-2 px-8 border border-blue-900 text-sm ml-7 hover:border-transparent rounded-sm">
                Schedule Call
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-8">
        <h4 className="text-xl pb-5">Venue</h4>
        <div className="border-solid border-t border-gray-300"></div>
        <div className="flex justify-between">
          <div>
            <div className="flex p-5">
              <div className="flex flex-col items-center">
                <UserImages
                  src="/image 58.png"
                  width="150px"
                  className="rounded-full"
                  height="150px"
                />
                <a href="" className="text-sm font-medium text-blue-900 mt-3">
                  View Details
                </a>
              </div>

              <div className="pl-10 pt-6">
                <div>
                  <h3 className="text-2xl font-medium">Bliss on the Ocean</h3>
                  <p className="text-xs mt-3 text-gray-500">
                    Lorem ipsum dolor sit amet, consectetur adipiscing <br />{" "}
                    elit. Auctor gravida mauris quisque vitae facilisi et.
                  </p>
                </div>
                <div className="flex flex-row mt-4">
                  <div>
                    <ul className="text-sm _l_a_d_s text-gray-800">
                      <li>Charges</li>
                      <li>Duration</li>
                      <li>Payment Status</li>
                    </ul>
                  </div>
                  <div className="pl-16">
                    <ul className="text-sm _l_a_d_s text-gray-800">
                      <li>1,000 $</li>
                      <li>2 days</li>
                      <li>Partially paid</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="flex flex-col pt-5">
              <button className="bg-transparent mb-5 font-semibold hover:text-white py-2 px-8 border _savespso text-white text-sm ml-7 hover:border-transparent rounded-sm">
                Make Payment
              </button>
              <button className="bg-transparent mb-5 hover:bg-blue-900 text-blue-900 font-semibold hover:text-white py-2 px-8 border border-blue-900 text-sm ml-7 hover:border-transparent rounded-sm">
                Send Message
              </button>
              <button className="bg-transparent hover:bg-blue-900 text-blue-900 font-semibold hover:text-white py-2 px-8 border border-blue-900 text-sm ml-7 hover:border-transparent rounded-sm">
                Schedule Call
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-8">
        <h4 className="text-xl pb-5">Photographer</h4>
        <div className="border-solid border-t border-gray-300"></div>
        <div className="flex justify-between">
          <div>
            <div className="flex p-5">
              <div className="flex flex-col items-center">
                <UserImages
                  src="/image 59.png"
                  width="150px"
                  className="rounded-full"
                  height="150px"
                />
                <a href="" className="text-sm font-medium text-blue-900 mt-3">
                  View Profile
                </a>
              </div>

              <div className="pl-10 pt-6">
                <div>
                  <h3 className="text-2xl font-medium">Simon Gull</h3>
                  <p className="text-xs mt-3 text-gray-500">
                    Lorem ipsum dolor sit amet, consectetur adipiscing <br />{" "}
                    elit. Auctor gravida mauris quisque vitae facilisi et.
                  </p>
                </div>
                <div className="flex flex-row mt-4">
                  <div>
                    <ul className="text-sm _l_a_d_s text-gray-800">
                      <li>Charges</li>
                      <li>Duration</li>
                      <li>Payment Status</li>
                    </ul>
                  </div>
                  <div className="pl-16">
                    <ul className="text-sm _l_a_d_s text-gray-800">
                      <li>450 $</li>
                      <li>2 days</li>
                      <li>Paid</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="flex flex-col pt-5">
              <button className="bg-transparent mb-5 hover:bg-blue-900 text-blue-900 font-semibold hover:text-white py-2 px-8 border border-blue-900 text-sm ml-7 hover:border-transparent rounded-sm">
                Send Message
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
