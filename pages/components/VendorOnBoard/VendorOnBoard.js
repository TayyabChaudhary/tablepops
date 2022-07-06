import React, { useEffect } from "react";
import DashboardHeader from "../Dashboard/Header/header";
import VendorOnBoardHeader from "./Header/VendorOnBoardHeader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import the icons you need
import { faSearch, faCamera } from "@fortawesome/free-solid-svg-icons";
import Footer from "../Footer/footer";
export default function VendorOnBoard() {
  useEffect(() => {
    document.title = "Vendor OnBoard Page";
  }, []);
  return (
    <div>
      <VendorOnBoardHeader />

      <section>
        <div className="flex justify-center pt-28">
          <h6 className="text-gray-600">Step 1 of 3</h6>
        </div>
        <div className="flex justify-center pt-3">
          <h6 className="text-gray-600 _p_e_s_x_c_v_v_v">
            Let’s get started by telling us about your venture
          </h6>
        </div>
        <div className="flex justify-center">
          <div className="flex flex-col items-center">
            <div className="camera_box flex justify-center items-center mt-8">
              <FontAwesomeIcon
                icon={faCamera}
                style={{ fontSize: 30, color: "#fff" }}
              />
            </div>
            <small className="text-sm mt-4 text-gray-600 cursor-pointer">
              Upload logo or cover picture
            </small>

            <div className="pt-8 flex flex-col relative">
              <input
                type="text"
                className="venue_name_input mb-6"
                placeholder="Enter venture name"
              />
              <textarea
                cols="4"
                rows="8"
                className="venue_name_textarea pt-3 mb-6"
                placeholder="Enter event description"
              ></textarea>
              <div className="relative flex flex-col mb-6">
                <lablel className="font-bold">Type of Service</lablel>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="#ccc"
                  className="absolute z-50 right-4 top-11"
                >
                  <path d="M16.293 9.293 12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z"></path>
                </svg>
                <select className="mt-4 _p_2_s_x_c_c_c_c_c appearance-none">
                  <option>Venue</option>
                </select>
              </div>
              <div className="relative flex flex-col">
                <lablel className="font-bold flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="#333"
                  >
                    <path d="M12 2C7.589 2 4 5.589 4 9.995 3.971 16.44 11.696 21.784 12 22c0 0 8.029-5.56 8-12 0-4.411-3.589-8-8-8zm0 12c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z"></path>
                  </svg>
                  Address
                </lablel>
                <input
                  type="text"
                  className="venue_name_input mb-6 mt-4"
                  placeholder="Write Address"
                />
              </div>
              <div className="flex justify-center pt-10 mb-10">
                <button className="continue_btn_c">
                    <a href="/components/VendorOnBoard/VendorOnBoardTwo/VendorOnBoardTwo">
                    Continue
                    </a></button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="_p_a_w_3_d_x_c_v_v p-10">
        <Footer />
      </div>
    </div>
  );
}
