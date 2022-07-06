import React, { useEffect } from "react";
import VendorOnBoardHeader from "../Header/VendorOnBoardHeader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import the icons you need
import { faSearch, faCamera } from "@fortawesome/free-solid-svg-icons";
import Footer from "../../Footer/footer";
export default function VendorOnBoardTwo() {
  useEffect(() => {
    document.title = "Vendor OnBoard Page";
  }, []);
  return (
    <div>
      <VendorOnBoardHeader />

      <section>
        <div className="flex justify-center pt-28">
          <h6 className="text-gray-600">Step 2 of 3</h6>
        </div>
        <div className="flex justify-center pt-3">
          <h6 className="text-gray-600 _p_e_s_x_c_v_v_v">
            Describe your services to attract customers
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
              You can upload multiple photos upto size of 25 Mb
            </small>

            <div className="pt-8 flex flex-col relative">
              <input
                type="text"
                className="add_services_input mb-6"
                placeholder="Add Service Name (Performance, Rental etc)"
              />
              <div className="flex justify-between mb-6">
                <div className="flex flex-col relative">
                  <label className="font-bold mb-2">Category</label>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    className="absolute right-4 top-8"
                    fill="#ddd"
                  >
                    <path d="M16.293 9.293 12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z"></path>
                  </svg>
                  <select className="fisrt_select_options">
                    <option>Photography</option>
                  </select>
                </div>
                <div className="flex flex-col relative">
                  <label className="font-bold mb-2">Sub Category</label>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    className="absolute right-4 top-8"
                    fill="#ddd"
                  >
                    <path d="M16.293 9.293 12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z"></path>
                  </svg>
                  <select className="fisrt_select_options">
                    <option>Wedding Photography</option>
                  </select>
                </div>
              </div>
              <textarea
                cols="20"
                rows="8"
                className="hashsuusus pt-3 mb-6 w-full"
                placeholder="Enter service description"
              ></textarea>

              <div className="relative flex justify-start">
                <div className="flex flex-col">
                  <lablel className="font-bold flex items-center">Price</lablel>
                  <input
                    type="text"
                    className="price_input mt-3"
                    placeholder="10,000"
                  />
                </div>
                <div className="flex flex-col relative left-12">
                  <lablel className="font-bold flex items-center">Paid</lablel>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    className="absolute right-4 top-9 z-10"
                    fill="#333"
                  >
                    <path d="M16.293 9.293 12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z"></path>
                  </svg>
                  <select className="fisrt_select_optionskso mt-3">
                    <option>Wedding Photography</option>
                  </select>
                </div>
              </div>
              <div className="flex justify-center pt-20 mb-4">
                <button className="save_btn_c">
                    Save
                </button>
              </div>
              <div className="flex justify-center mb-10">
                <button className="save_address_btn_c">
                  <a href="/components/VendorOnBoard/VendorOnBoardThree/VendorOnBoardThree">
                    Save & Add Another Service
                  </a>
                </button>
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
