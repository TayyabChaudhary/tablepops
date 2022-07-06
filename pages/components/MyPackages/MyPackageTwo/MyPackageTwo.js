import React, { useEffect } from "react";
import VendorOnBoardHeader from "../../VendorOnBoard/Header/VendorOnBoardHeader";
import Footer from "../../Footer/footer";
export default function MyPackageTwo() {
  useEffect(() => {
    document.title = "My Packages";
  }, []);
  return (
    <div>
      <VendorOnBoardHeader />

      <section>
        <div className="flex justify-center pt-28">
          <h1 className="text-2xl mb-6">
            Describe your package to attract customers
          </h1>
        </div>
        <div className="flex justify-center">
          <div>
            <div className="flex flex-col">
              <label>Title</label>
              <input
                type="text"
                className="_p_w_w_W_WW_ mt-3"
                placeholder="Add Package Name "
              />
              <div className="flex pt-6">
                <div className="flex flex-col relative">
                  <label className="text-sm mb-2">Category</label>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="#ccc"
                    className="absolute right-4 top-9"
                  >
                    <path d="M16.293 9.293 12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z"></path>
                  </svg>
                  <select className="appearance-none _p_e_e_x_x_c_c_c">
                    <option>Photography</option>
                  </select>
                </div>
                <div className="flex flex-col relative pl-14">
                  <label className="text-sm mb-2">Sub category</label>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="#ccc"
                    className="absolute right-4 top-9"
                  >
                    <path d="M16.293 9.293 12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z"></path>
                  </svg>
                  <select className="appearance-none _p_e_e_x_x_c_c_c">
                    <option>Wedding Photography</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="flex flex-col pt-6">
              <label>Description</label>
              <textarea
                rows="9"
                className="w-full border border-solid border-gray-300 outline-none rounded-0 text-sm pl-4 pt-3 mt-3 resize-none"
                placeholder="Enter service description"
              ></textarea>
            </div>
            <div className="flex flex-col pt-6">
              <label>Price</label>
              <input
                type="text"
                className="_p_w_w_W_WW_ mt-3"
                placeholder="10,000 $"
              />
            </div>
            <div className="flex flex-col pt-6">
              <label>
                Packge Perks{" "}
                <small className="text-xs text-gray-600">
                  (Press enter after typing every perk)
                </small>
              </label>
              <input
                type="text"
                className="_p_w_w_W_WW_ mt-3"
                placeholder="Add Package perks "
              />
            </div>
            <div>
              <ul className="text-sm list-disc text-gray-500 mt-4 ml-4 _p_a_s_x_cv_v_v_sss">
                <li>Conceptualizing the Event</li>
                <li> Planning and Execution</li>
                <li> Preliminary Preparation</li>
                <li> Bridal Make-up, Hair & Beauty Treatments</li>
              </ul>
            </div>
            <div className="flex justify-center pt-20 pb-20">
              <a href="/components/MyPackages/MyPackageThree/MyPackageThree">
              <button className="save_butn">Save</button>
              </a>
            </div>
          </div>
          <div>
            <div className="flex flex-col relative left-20">
              <div className="_p_3_e_3_r_r_r flex justify-center items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="#fff"
                >
                  <path d="M12 8c-2.168 0-4 1.832-4 4s1.832 4 4 4 4-1.832 4-4-1.832-4-4-4zm0 6c-1.065 0-2-.935-2-2s.935-2 2-2 2 .935 2 2-.935 2-2 2z"></path>
                  <path d="M20 5h-2.586l-2.707-2.707A.996.996 0 0 0 14 2h-4a.996.996 0 0 0-.707.293L6.586 5H4c-1.103 0-2 .897-2 2v11c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V7c0-1.103-.897-2-2-2zM4 18V7h3c.266 0 .52-.105.707-.293L10.414 4h3.172l2.707 2.707A.996.996 0 0 0 17 7h3l.002 11H4z"></path>
                </svg>
               
              </div>
              <small className="text-sm text-center mt-3 text-gray-800">Upload pictures related to your package</small>
            </div>
          </div>
        </div>
      </section>

      <div className="p-10 _p_a_w_3_d_x_c_v_v ">
        <Footer />
      </div>
    </div>
  );
}
