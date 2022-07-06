import React from "react";
import Footer from "../../../Footer/footer";

export default function CartDashboardSection() {
  return (
    <div>
      <section className="p-24">
        <div className="flex justify-between">
          <h1>
            <span className="text-2xl text-orange-500">My Booking list</span>
            <span className="text-2xl pl-4">(5)</span>
            <span className="text-2xl pl-4">|</span>
            <span className="text-2xl pl-4">Subtotal</span>
            <span className="text-2xl pl-4">3500 $</span>
          </h1>

          <button className="bg-blue-900 hover:bg-blue-900 text-sm text-white font-bold py-2 px-14 rounded">
            Continue
          </button>
        </div>

        <div>
          <div className="flex flex-col pt-3">
            <div className="max-w-6xl rounded-md mb-8 pb-6 overflow-hidden shadow-sm">
              <div className="px-6 py-4">
                <div className="flex justify-between items-center border-b border-solid border-gray-200">
                  <div className="font-bold text-xl mb-2">Event Planner (1)</div>
                  <h3 className="font-bold text-xl mb-2">Total 200$</h3>
                </div>
                <div className="flex justify-between items-center pt-4 border-b pb-3 border-solid border-gray-100">
                  <div>
                    <div className="flex flex-col">
                      <h3 className="font-medium">Open Garden</h3>
                      <p className="text-sm mt-2">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,{" "}
                        <br /> sed do eiusmod tempor
                      </p>
                    </div>
                  </div>
                  <div>
                    <div className="flex flex-col">
                      <h3 className="font-medium text-center">2</h3>
                      <p className="text-xs mt-2">No.of days</p>
                    </div>
                  </div>
                  <div>
                    <div className="flex flex-col">
                      <h3 className="font-medium text-xl text-center">2500$</h3>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex pl-6">
                <a href="" className="text-blue-900 text-sm font-medium">Edit</a>
                <span className="pl-3 text-blue-900">|</span>
                <a href="" className="text-blue-900 text-sm pl-2 font-medium">Delete</a>
                <span className="pl-3 text-blue-900">|</span>
                <a href="" className="text-blue-900 text-sm pl-2 font-medium">Save for later</a>
                <span className="pl-3 text-blue-900">|</span>
                <a href="" className="text-blue-900 text-sm pl-2 font-medium">Add more fro this vendor</a>
              </div>
            </div>
            <div className="max-w-6xl rounded-md mb-8 pb-6 overflow-hidden shadow-sm">
              <div className="px-6 py-4">
                <div className="flex justify-between items-center border-b border-solid border-gray-200">
                  <div className="font-bold text-xl mb-2">Venue (2)</div>
                  <h3 className="font-bold text-xl mb-2">Total 500$</h3>
                </div>
                <div className="flex justify-between items-center pt-4 border-b pb-3 border-solid border-gray-100">
                  <div>
                    <div className="flex flex-col">
                      <h3 className="font-medium">Open Garden</h3>
                      <p className="text-sm mt-2">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,{" "}
                        <br /> sed do eiusmod tempor
                      </p>
                    </div>
                  </div>
                  <div>
                    <div className="flex flex-col">
                      <h3 className="font-medium text-center">1</h3>
                      <p className="text-xs mt-2">No.of days</p>
                    </div>
                  </div>
                  <div>
                    <div className="flex flex-col">
                      <h3 className="font-medium text-xl text-center">250$</h3>
                    </div>
                  </div>
                </div>
                <div className="flex justify-between items-center pt-4 border-b pb-3 border-solid border-gray-100">
                  <div>
                    <div className="flex flex-col">
                      <h3 className="font-medium">Banquet Hall</h3>
                      <p className="text-sm mt-2">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,{" "}
                        <br /> sed do eiusmod tempor
                      </p>
                    </div>
                  </div>
                  <div>
                    <div className="flex flex-col">
                      <h3 className="font-medium text-center">1</h3>
                      <p className="text-xs mt-2">No.of days</p>
                    </div>
                  </div>
                  <div>
                    <div className="flex flex-col">
                      <h3 className="font-medium text-xl text-center">250$</h3>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex pl-6">
                <a href="" className="text-blue-900 text-sm font-medium">Edit</a>
                <span className="pl-3 text-blue-900">|</span>
                <a href="" className="text-blue-900 text-sm pl-2 font-medium">Delete</a>
                <span className="pl-3 text-blue-900">|</span>
                <a href="" className="text-blue-900 text-sm pl-2 font-medium">Save for later</a>
                <span className="pl-3 text-blue-900">|</span>
                <a href="" className="text-blue-900 text-sm pl-2 font-medium">Add more fro this vendor</a>
              </div>
            </div>
            <div className="max-w-6xl rounded-md mb-8 pb-6 overflow-hidden shadow-sm">
              <div className="px-6 py-4">
                <div className="flex justify-between items-center border-b border-solid border-gray-200">
                  <div className="font-bold text-xl mb-2">Photographer (2)</div>
                  <h3 className="font-bold text-xl mb-2">Total 500$</h3>
                </div>
                <div className="flex justify-between items-center pt-4 border-b pb-3 border-solid border-gray-100">
                  <div>
                    <div className="flex flex-col">
                      <h3 className="font-medium">Photography</h3>
                      <p className="text-sm mt-2">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,{" "}
                        <br /> sed do eiusmod tempor
                      </p>
                    </div>
                  </div>
                  <div>
                    <div className="flex flex-col">
                      <h3 className="font-medium text-center">10</h3>
                      <p className="text-xs mt-2">No.of days</p>
                    </div>
                  </div>
                  <div>
                    <div className="flex flex-col">
                      <h3 className="font-medium text-xl text-center">250$</h3>
                    </div>
                  </div>
                </div>
                <div className="flex justify-between items-center pt-4 border-b pb-3 border-solid border-gray-100">
                  <div>
                    <div className="flex flex-col">
                      <h3 className="font-medium">Photo editing</h3>
                      <p className="text-sm mt-2">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,{" "}
                        <br /> sed do eiusmod tempor
                      </p>
                    </div>
                  </div>
                  <div>
                    <div className="flex flex-col">
                      <p className="text-xs mt-2">Fixed Rate</p>
                    </div>
                  </div>
                  <div>
                    <div className="flex flex-col">
                      <h3 className="font-medium text-xl text-center">250$</h3>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex pl-6">
                <a href="" className="text-blue-900 text-sm font-medium">Edit</a>
                <span className="pl-3 text-blue-900">|</span>
                <a href="" className="text-blue-900 text-sm pl-2 font-medium">Delete</a>
                <span className="pl-3 text-blue-900">|</span>
                <a href="" className="text-blue-900 text-sm pl-2 font-medium">Save for later</a>
                <span className="pl-3 text-blue-900">|</span>
                <a href="" className="text-blue-900 text-sm pl-2 font-medium">Add more fro this vendor</a>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
        <button className="bg-blue-900 hover:bg-blue-900 text-sm text-white font-bold py-2 px-14 rounded">
            Continue
          </button>
        </div>
      </section>

      <div className="p-10 bg-pink-50">
        <Footer />
      </div>
    </div>
  );
}
