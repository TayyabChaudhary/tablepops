import React, { useEffect } from "react";
import Imae from "next/image";
import $ from "jquery";
import Footer from "../../Footer/footer";
export default function Section2() {
  useEffect(() => {
    /**
     * @description Change Home page slider's arrows active status
     */
    function updateSliderArrowsStatus(
      cardsContainer,
      containerWidth,
      cardCount,
      cardWidth
    ) {
      if (
        $(cardsContainer).scrollLeft() + containerWidth <
        cardCount * cardWidth + 15
      ) {
        $("#slide-right-container").addClass("active");
      } else {
        $("#slide-right-container").removeClass("active");
      }
      if ($(cardsContainer).scrollLeft() > 0) {
        $("#slide-left-container").addClass("active");
      } else {
        $("#slide-left-container").removeClass("active");
      }
    }
    $(function () {
      // Scroll products' slider left/right
      let div = $("#cards-container");
      let cardCount = $(div).find(".cards").children(".card").length;
      let speed = 1000;
      let containerWidth = $(".container").width();
      let cardWidth = 615;

      updateSliderArrowsStatus(div, containerWidth, cardCount, cardWidth);

      //Remove scrollbars
      $("#slide-right-container").click(function (e) {
        if ($(div).scrollLeft() + containerWidth < cardCount * cardWidth) {
          $(div).animate(
            {
              scrollLeft: $(div).scrollLeft() + cardWidth,
            },
            {
              duration: speed,
              complete: function () {
                setTimeout(
                  updateSliderArrowsStatus(
                    div,
                    containerWidth,
                    cardCount,
                    cardWidth
                  ),
                  1005
                );
              },
            }
          );
        }
        updateSliderArrowsStatus(div, containerWidth, cardCount, cardWidth);
      });
      $("#slide-left-container").click(function (e) {
        if ($(div).scrollLeft() + containerWidth > containerWidth) {
          $(div).animate(
            {
              scrollLeft: "-=" + cardWidth,
            },
            {
              duration: speed,
              complete: function () {
                setTimeout(
                  updateSliderArrowsStatus(
                    div,
                    containerWidth,
                    cardCount,
                    cardWidth
                  ),
                  1005
                );
              },
            }
          );
        }
        updateSliderArrowsStatus(div, containerWidth, cardCount, cardWidth);
      });

      // If resize action ocurred then update the container width value
      $(window).resize(function () {
        try {
          containerWidth = $("#cards-container").width();
          updateSliderArrowsStatus(div, containerWidth, cardCount, cardWidth);
        } catch (error) {
          console.log(
            `Error occured while trying to get updated slider container width: 
            ${error}`
          );
        }
      });
    });
  }, []);
  return (
    <div>
      <section className="vendorsignup_section_two">
        <div className="flex justify-center pt-14 pb-14">
          <div>
            <Imae
              src="/image_nityfive.png"
              alt="Image Nity"
              width="600px"
              height="400px"
            />
          </div>
          <div className="pt-24 pl-14">
            <h1 className="text-4xl font-bold mb-3">Get Noticed</h1>
            <p className="text-gray-400">
              List your brand in our curated directory alongside the <br /> best
              event professionals, vendors, and venues.
            </p>
            <button className="browse text-white rounded px-10 py-3 mt-8 font-blod shadow-md">
              List Your Business
            </button>
          </div>
        </div>
      </section>

      <section className="_p_s_3_4_e_5_r_t pt-16 pb-16">
        <div className="flex justify-center">
          <div>
            <h1 className="text-4xl font-bold mb-3 pt-20 pr-20">
              Reach More Customers
            </h1>
            <p className="text-gray-400">
              List your brand in our curated directory alongside the <br /> best
              event professionals, vendors, and venues.
            </p>
            <button className="browse text-white rounded px-10 py-3 mt-8 font-blod shadow-md">
              Create My Profile
            </button>
          </div>
          <div>
            <Imae
              src="/reach_one.png"
              width="500px"
              height="400px"
              className="relative"
            />
            <div className="_image_22">
              <Imae src="/reach_two.png" width="400px" height="300px" />
            </div>
          </div>
        </div>
      </section>

      <section className="_p_a_s_X_X_X_N">
        <div className="flex justify-center pt-20">
          <h1 className="text-4xl font-bold text-gray-800">
            Grow Your Network
          </h1>
        </div>
        <div className="flex justify-center pt-2">
          <p className="_p_e_s_c_c_c_f text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor <br /> incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        <div className="flex justify-center pt-10">
          <div>
            <div className="max-w-2xl rounded-lg overflow-hidden shadow-lg bg-white _p_9_i_7_w_2_s_z_a">
              <div className="px-6 py-4 pt-8">
                <div className="font-medium text-4xl text-center mb-2 pl-6 _p_3_s_e_r_r">
                  Free
                </div>
                <div className="flex items-center justify-center pl-12">
                  <h2 className="text-4xl text-center font-bold">$ 0</h2>
                  <small className="text-xs pl-2 text-gray-800">
                    per month
                  </small>
                </div>
                <div className="flex justify-between items-center mb-2 pl-14 pr-14 pt-4">
                  <h6 className="_p_a_s_s_S_S">Display events</h6>
                  <small className="text-md font-medium">upto 2</small>
                </div>
                <div className="flex justify-between items-center mb-2 pl-14 pr-14">
                  <h6 className="_p_a_s_s_S_S">Upload albums</h6>
                  <small className="text-md font-medium">upto 5 photos</small>
                </div>
                <div className="flex justify-between items-center mb-2 pl-14 pr-14">
                  <h6 className="_p_a_s_s_S_S">Upload videos</h6>
                  <small className="text-md font-medium">No</small>
                </div>
                <div className="flex justify-between items-center mb-2 pl-14 pr-14">
                  <h6 className="_p_a_s_s_S_S">Profile placement</h6>
                  <small className="text-md font-medium">upto 2</small>
                </div>
                <div className="flex justify-between items-center mb-2 pl-14 pr-14">
                  <h6 className="_p_a_s_s_S_S">Display events</h6>
                  <small className="text-md font-medium">
                    After paid users
                  </small>
                </div>
                <div className="flex justify-between items-center mb-2 pl-14 pr-14">
                  <h6 className="_p_a_s_s_S_S">Team members</h6>
                  <small className="text-md font-medium">Only one</small>
                </div>
                <div className="flex justify-between items-center mb-2 pl-14 pr-14">
                  <h6 className="_p_a_s_s_S_S">Custom Events</h6>
                  <small className="text-md font-medium">No</small>
                </div>
                <div className="flex justify-between items-center mb-2 pl-14 pr-14">
                  <h6 className="_p_a_s_s_S_S">Packages</h6>
                  <small className="text-md font-medium">No</small>
                </div>
                <div className="flex justify-between items-center mb-2 pl-14 pr-14">
                  <h6 className="_p_a_s_s_S_S">Festival offers</h6>
                  <small className="text-md font-medium">No</small>
                </div>
                <div className="flex justify-between items-center mb-2 pl-14 pr-14">
                  <h6 className="_p_a_s_s_S_S">Dedicated support team</h6>
                  <small className="text-md font-medium">No</small>
                </div>
                <div className="flex justify-center">
                  <button className="_p_1_w_2_s_z mt-3 text-white font-bold py-3 px-32 rounded">
                    SELECT
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="max-w-2xl rounded-lg overflow-hidden shadow-lg bg-white _p_9_i_7_w_2_s_z_a ml-14">
              <div className="px-6 py-4 pt-8">
                <div className="font-medium text-4xl text-center mb-2 pl-6 _p_3_s_e_r_r">
                  Premiun
                </div>
                <div className="flex items-center justify-center pl-12">
                  <h2 className="text-4xl text-center font-bold">$ 349</h2>
                  <small className="text-xs pl-2 text-gray-800">
                    per month
                  </small>
                </div>
                <div className="flex justify-between items-center mb-2 pl-14 pr-14 pt-4">
                  <h6 className="_p_a_s_s_S_S">Display events</h6>
                  <small className="text-md font-medium">upto 2</small>
                </div>
                <div className="flex justify-between items-center mb-2 pl-14 pr-14">
                  <h6 className="_p_a_s_s_S_S">Upload albums</h6>
                  <small className="text-md font-medium">upto 5 photos</small>
                </div>
                <div className="flex justify-between items-center mb-2 pl-14 pr-14">
                  <h6 className="_p_a_s_s_S_S">Upload videos</h6>
                  <small className="text-md font-medium">No</small>
                </div>
                <div className="flex justify-between items-center mb-2 pl-14 pr-14">
                  <h6 className="_p_a_s_s_S_S">Profile placement</h6>
                  <small className="text-md font-medium">upto 2</small>
                </div>
                <div className="flex justify-between items-center mb-2 pl-14 pr-14">
                  <h6 className="_p_a_s_s_S_S">Display events</h6>
                  <small className="text-md font-medium">
                    After paid users
                  </small>
                </div>
                <div className="flex justify-between items-center mb-2 pl-14 pr-14">
                  <h6 className="_p_a_s_s_S_S">Team members</h6>
                  <small className="text-md font-medium">Only one</small>
                </div>
                <div className="flex justify-between items-center mb-2 pl-14 pr-14">
                  <h6 className="_p_a_s_s_S_S">Custom Events</h6>
                  <small className="text-md font-medium">No</small>
                </div>
                <div className="flex justify-between items-center mb-2 pl-14 pr-14">
                  <h6 className="_p_a_s_s_S_S">Packages</h6>
                  <small className="text-md font-medium">No</small>
                </div>
                <div className="flex justify-between items-center mb-2 pl-14 pr-14">
                  <h6 className="_p_a_s_s_S_S">Festival offers</h6>
                  <small className="text-md font-medium">No</small>
                </div>
                <div className="flex justify-between items-center mb-2 pl-14 pr-14">
                  <h6 className="_p_a_s_s_S_S">Dedicated support team</h6>
                  <small className="text-md font-medium">No</small>
                </div>
                <div className="flex justify-center">
                  <button className="_p_1_w_2_s_z mt-3 text-white font-bold py-3 px-32 rounded">
                    SELECT
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="_p_a_s_X_X_X_N pt-20 pb-20">
        <div className="flex justify-end relative right-16">
          <div id="slide-left-container">
            <div className="slide-left">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="#333"
              >
                <path d="M12.707 17.293 8.414 13H18v-2H8.414l4.293-4.293-1.414-1.414L4.586 12l6.707 6.707z"></path>
              </svg>
            </div>
          </div>
          <div id="slide-right-container">
            <div className="slide-right">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="#333"
              >
                <path d="m11.293 17.293 1.414 1.414L19.414 12l-6.707-6.707-1.414 1.414L15.586 11H6v2h9.586z"></path>
              </svg>
            </div>
          </div>
        </div>
        <div className="containers">
          <div id="cards-container">
            <div className="cards">
              <div className="card p-5">
                <div className="containers">
                  <div className="flex">
                    <div>
                      <Imae src="/comma.png" width="130" height="100" />
                    </div>

                    <div className="pl-6">
                      <p className="_p_2_w_s_s_S_S_S_S">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex justify-between pt-4 pl-4">
                  <div className="flex">
                    <Imae src="/Headshot.png" width="50" height="50" />
                    <div className="flex flex-col pl-4">
                      <b>Firstname Lastname</b>
                      <small className="text-sm text-gray-600">
                        Certified Event Host
                      </small>
                    </div>
                  </div>
                  <div>
                    <small className="text-sm text-gray-600">
                      January 29, 2021
                    </small>
                  </div>
                </div>
              </div>
              <div className="card p-5">
                <div className="containers">
                  <div className="flex">
                    <div>
                      <Imae src="/comma.png" width="130" height="100" />
                    </div>

                    <div className="pl-6">
                      <p className="_p_2_w_s_s_S_S_S_S">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex justify-between pt-4 pl-4">
                  <div className="flex">
                    <Imae src="/Headshot.png" width="50" height="50" />
                    <div className="flex flex-col pl-4">
                      <b>Firstname Lastname</b>
                      <small className="text-sm text-gray-600">
                        Certified Event Host
                      </small>
                    </div>
                  </div>
                  <div>
                    <small className="text-sm text-gray-600">
                      January 29, 2021
                    </small>
                  </div>
                </div>
              </div>
              <div className="card p-5">
                <div className="containers">
                  <div className="flex">
                    <div>
                      <Imae src="/comma.png" width="130" height="100" />
                    </div>

                    <div className="pl-6">
                      <p className="_p_2_w_s_s_S_S_S_S">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex justify-between pt-4 pl-4">
                  <div className="flex">
                    <Imae src="/Headshot.png" width="50" height="50" />
                    <div className="flex flex-col pl-4">
                      <b>Firstname Lastname</b>
                      <small className="text-sm text-gray-600">
                        Certified Event Host
                      </small>
                    </div>
                  </div>
                  <div>
                    <small className="text-sm text-gray-600">
                      January 29, 2021
                    </small>
                  </div>
                </div>
              </div>
              <div className="card p-5">
                <div className="containers">
                  <div className="flex">
                    <div>
                      <Imae src="/comma.png" width="130" height="100" />
                    </div>

                    <div className="pl-6">
                      <p className="_p_2_w_s_s_S_S_S_S">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex justify-between pt-4 pl-4">
                  <div className="flex">
                    <Imae src="/Headshot.png" width="50" height="50" />
                    <div className="flex flex-col pl-4">
                      <b>Firstname Lastname</b>
                      <small className="text-sm text-gray-600">
                        Certified Event Host
                      </small>
                    </div>
                  </div>
                  <div>
                    <small className="text-sm text-gray-600">
                      January 29, 2021
                    </small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center pt-20">
          <h1 className="text-3xl font-bold get_free_profile">
            Get started with a free profile
          </h1>
        </div>
        <div className="flex justify-center pt-20">
          <button className="get_free_btn px-8 py-3">Get Started Now</button>
        </div>
      </section>

      <div className="_p_a_w_3_d_x_c_v_v p-10">
        <Footer />
      </div>
    </div>
  );
}
