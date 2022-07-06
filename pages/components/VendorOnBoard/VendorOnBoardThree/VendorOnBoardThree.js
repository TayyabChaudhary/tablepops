import React, { useEffect, useState } from "react";
import VendorOnBoardHeader from "../Header/VendorOnBoardHeader";
import Footer from "../../Footer/footer";
export default function VendorOnBoardThree() {
  useEffect(() => {
    document.title = "Vendor OnBoard Page";
  }, []);

  const [ShowSuccessFullyPopup, HideShowSuccessFullyPopup] = useState(false);

  function ClikShowHideSuccessFullyPopup() {
    HideShowSuccessFullyPopup(true);
  }
  function hideClickSuccessFullyPopup() {
    HideShowSuccessFullyPopup(false);
  }
  return (
    <div>
      <VendorOnBoardHeader />
      {ShowSuccessFullyPopup && (
        <div className="succ_fully_popip fixed top-0 right-0 left-0 flex justify-center items-center min-h-screen">
          <div className="success_box">
            <div className="top_bar"></div>
            <div className="flex justify-center pt-32">
              <h1 className="text-2xl">
                Thank you for submitting your profile
              </h1>
            </div>
            <div className="flex justify-center pt-6">
              <p className="text-sm text-gray-600">
                Our team will get in touch with you to verify your profile. Post
                verification, <br /> It’ll be live on our platform. Your default
                settings for notification is active so <br /> you receive
                notification on activation and whenever you receive enquiry.
              </p>
            </div>

            <div className="flex justify-center pt-10">
              <button className="go_back_btn text-white" onClick={hideClickSuccessFullyPopup}>Go Back</button>
            </div>
          </div>
        </div>
      )}
      <section className="overflow-hidden">
        <div className="flex justify-center pt-28">
          <h6 className="text-gray-600">Step 2 of 3</h6>
        </div>
        <div className="flex justify-center pt-3">
          <h6 className="text-gray-600 _p_e_s_x_c_v_v_v">
            Showcase best photos and videos of your services
          </h6>
        </div>
        <div className="flex justify-center pt-10">
          <div className="flex flex-col">
            <div>
              <button
                className="add_new_photo_v"
                onClick={ClikShowHideSuccessFullyPopup}
              >
                Add New Photo/Video
              </button>
            </div>
            <div className="text-center pt-6">
              <a href="" className="skip_now_text">
                Skip for now
              </a>
            </div>
          </div>
        </div>

        <div className="relative left-10 pt-20 overflow-hidden">
          <h2 className="text-2xl">My Photos & Videos</h2>
          <div className="flex flex-row mt-6 mb-6">
            <div>
              <img
                src="/v_five.png"
                alt=""
                width="300"
                className="mr-6"
                height="100"
              />
            </div>
            <div>
              <img src="/v_four.png" alt="" width="300" className="mr-6" />
            </div>
            <div>
              <img src="/v_three.png" alt="" width="300" className="mr-6" />
            </div>
            <div>
              <img src="/v_two.png" alt="" width="300" className="mr-6" />
            </div>
          </div>
          <div className="flex flex-row mt-6 mb-20">
            <div>
              <img
                src="/v_one.png"
                alt=""
                width="300"
                className="mr-6"
                height="100"
              />
            </div>
            <div>
              <img src="/v_four.png" alt="" width="300" className="mr-6" />
            </div>
            <div>
              <img src="/v_three.png" alt="" width="300" className="mr-6" />
            </div>
            <div>
              <img src="/v_two.png" alt="" width="300" className="mr-6" />
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
