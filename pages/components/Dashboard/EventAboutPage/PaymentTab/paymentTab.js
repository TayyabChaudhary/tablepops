import UserImages from "next/image";
import PaymentActivity from "../PaymentActivity/paymentactivity";
export default function PaymentTabEvnt() {
  return (
    <>
      <div className="flex justify-center relative">
        <div class="flex justify-center">
          <div class="border-r border-b border-l akjskjdksjk border-gray-400 shadow-lg rounded-2xl lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
            <div className="flex overflow-hidden justify-between items-center">
              <div className="flex flex-col">
                <div>
                  <h1 className="text-3xl font-medium text-center mb-2">
                    24,000 $
                  </h1>
                </div>
                <div>
                  <h6 className="text-sm">Total Payable Amount</h6>
                </div>
              </div>
              <div className="flex flex-col">
                <div>
                  <h1 className="text-3xl font-medium text-center mb-2">
                    20,000 $
                  </h1>
                </div>
                <div>
                  <h6 className="text-sm">Total Paid Amount</h6>
                </div>
              </div>
              <div className="flex flex-col">
                <div>
                  <h1 className="text-3xl font-medium text-center mb-2">
                    1,350 $
                  </h1>
                </div>
                <div>
                  <h6 className="text-sm">Contribution from guests</h6>
                </div>
              </div>
              <div className="flex flex-col bg-pink-100 rounded p-3 px-8 py-6">
                <div>
                  <h1 className="text-3xl font-medium text-center mb-2">
                    2,650 $
                  </h1>
                </div>
                <div>
                  <h6 className="text-sm">Remaining Amount</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center pl-20 pt-12">
        <h2 className="text-2xl font-medium">My Payments</h2>
        <h6 className="text-md font-medium pl-6">Payment Activity</h6>
      </div>

        <div className="pl-20 pr-16">
            <PaymentActivity />
           
        </div>

      {/* <div className="pl-20 pt-2 pr-12">
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
                      <li>Payment Status</li>
                    </ul>
                  </div>
                  <div className="pl-16">
                    <ul className="text-sm _l_a_d_s text-gray-800">
                      <li>450 $</li>
                      <li>Pending</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="flex flex-col pt-5">
              <button class="bg-transparent mb-5 font-semibold hover:text-white py-2 px-8 border _savespso text-white text-sm ml-7 hover:border-transparent rounded-sm">
                Make Payment
              </button>
              <button class="bg-transparent mb-5 hover:bg-blue-900 text-blue-900 font-semibold hover:text-white py-2 px-8 border border-blue-900 text-sm ml-7 hover:border-transparent rounded-sm">
                Help
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
                      <li>Payment Status</li>
                    </ul>
                  </div>
                  <div className="pl-16">
                    <ul className="text-sm _l_a_d_s text-gray-800">
                      <li>1,000 $</li>
                      <li>Partially paid</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="flex flex-col pt-5">

              <button class="bg-transparent mb-5 flex items-center px-12 hover:bg-blue-900 text-blue-900 font-semibold hover:text-white py-2 border border-blue-900 text-sm ml-7 hover:border-transparent rounded-sm">
              <svg xmlns="http://www.w3.org/2000/svg" className="mr-2" fill="#0CB169" width="24" height="24" ><path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm-1.999 14.413-3.713-3.705L7.7 11.292l2.299 2.295 5.294-5.294 1.414 1.414-6.706 6.706z"></path></svg>
                Fully Paid
              </button>
              <button class="bg-transparent hover:bg-blue-900 text-blue-900 font-semibold hover:text-white py-2 px-8 border border-blue-900 text-sm ml-7 hover:border-transparent rounded-sm">
                Help
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
                      <li>Payment Status</li>
                    </ul>
                  </div>
                  <div className="pl-16">
                    <ul className="text-sm _l_a_d_s text-gray-800">
                      <li>450 $</li>
                      <li>Paid</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="flex flex-col pt-5">
            <button class="bg-transparent mb-5 flex items-center px-12 hover:bg-blue-900 text-blue-900 font-semibold hover:text-white py-2 border border-blue-900 text-sm ml-7 hover:border-transparent rounded-sm">
              <svg xmlns="http://www.w3.org/2000/svg" className="mr-2" fill="#0CB169" width="24" height="24" ><path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm-1.999 14.413-3.713-3.705L7.7 11.292l2.299 2.295 5.294-5.294 1.414 1.414-6.706 6.706z"></path></svg>
                Fully Paid
              </button>
              <button class="bg-transparent hover:bg-blue-900 text-blue-900 font-semibold hover:text-white py-2 px-8 border border-blue-900 text-sm ml-7 hover:border-transparent rounded-sm">
                Send message
              </button>
            </div>
          </div>
        </div>
      </div>
      </div> */}
    </>
  );
}
