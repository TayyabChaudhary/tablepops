import React, { useEffect } from "react";
import VendorOnBoardHeader from "../../VendorOnBoard/Header/VendorOnBoardHeader";
import GridImage from "next/image";
import F from "next/image";
import Footer from "../../Footer/footer";
import SeventyEightImage from '../../../../public/78.png'
export default function MyPackageThree() {
  useEffect(() => {
    document.title = "My Packages";
  }, []);
  return (
    <div>
      <VendorOnBoardHeader />

      <section className="flex justify-between pt-28 pl-28 pr-48 overflow-hidden">
        <div>
          <h1 className="text-3xl oapapapo">My Packages</h1>
        </div>
        <div>
          <button className="add_newBtn_package">Add New Package</button>
        </div>
      </section>

      <div className="pt-6">
        <div className="border border-solid border-t relative left-24 border-gray-200 w-4/5"></div>
        <div></div>

        <div>
          <div className="flex flex-row mt-10 pl-20 overflow-hidden">
            <div className="pr-5">
              <div className="max-w-lg rounded overflow-hidden pb-6 shadow-0 border-solid border-gray-200 border">
                <div>
                  <F src={SeventyEightImage} width="600px" height="350px" />
                </div>
                <div className="px-6 py-2">
                  <div className="font-bold text-xl mb-2">
                    Wedding and Events
                  </div>
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
              <div className="max-w-lg rounded overflow-hidden shadow-0 pb-6 border-solid border-gray-200 border">
                <div>
                  <F src={SeventyEightImage} width="600px" height="350px" />
                </div>
                <div className="px-6 py-2">
                  <div className="font-bold text-xl mb-2">
                    Wedding and Events
                  </div>
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
      </div>
      <div className="p-10 mt-20 _p_a_w_3_d_x_c_v_v ">
        <Footer />
      </div>
    </div>
  );
}
