import Head from "next/head";
import DashboardHeader from "../../../Dashboard/Header/header";
import S from "next/image";
import VenueDetailsThree from "./venuedetailsthree";
import { useEffect } from "react";
export default function VenueDetailsThreeMain() {
  function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
     
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
    document.getElementById("ajauaja").classList.toggle('laaoaoa');
  }

  return (
    <div>
      <Head>
        <title>Venue Details Three</title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"
          integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g=="
        />
      </Head>

      <div className="venue_details_three_main">
        <DashboardHeader />
      </div>
      <div className="flex flex-col">
        <div className="flex justify-center relative -top-24">
          <div className="max-w-6xl _p_a_x_x_x bg-white rounded overflow-hidden shadow-0">
            <div className="px-6 py-4">
              <div className="flex justify-between items-center">
                <div>
                  <div className="flex items-center">
                    <div className="rec_image flex justify-center items-center">
                      <S src="/Group 219.png" width="30px" height="30px" />
                    </div>
                    <div>
                      <div className="font-bold text-xl mb-2 pl-2">
                        Bliss on the Ocean
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <svg
                    width="24"
                    height="24"
                    fill="#EE6C4D"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12 21.593c-5.63-5.539-11-10.297-11-14.402 0-3.791 3.068-5.191 5.281-5.191 1.312 0 4.151.501 5.719 4.457 1.59-3.968 4.464-4.447 5.726-4.447 2.54 0 5.274 1.621 5.274 5.181 0 4.069-5.136 8.625-11 14.402m5.726-20.583c-2.203 0-4.446 1.042-5.726 3.238-1.285-2.206-3.522-3.248-5.719-3.248-3.183 0-6.281 2.187-6.281 6.191 0 4.661 5.571 9.429 12 15.809 6.43-6.38 12-11.148 12-15.809 0-4.011-3.095-6.181-6.274-6.181" />
                  </svg>
                </div>
              </div>

              <div className="flex items-center pt-4">
                <svg
                  width="24"
                  height="24"
                  xmlns="http://www.w3.org/2000/svg"
                  fillRule="evenodd"
                  clipRule="evenodd"
                >
                  <path d="M12 10c-1.104 0-2-.896-2-2s.896-2 2-2 2 .896 2 2-.896 2-2 2m0-5c-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3-1.343-3-3-3m-7 2.602c0-3.517 3.271-6.602 7-6.602s7 3.085 7 6.602c0 3.455-2.563 7.543-7 14.527-4.489-7.073-7-11.072-7-14.527m7-7.602c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602" />
                </svg>
                <span className="text-sm pl-2">
                  2nd Lane, Palm Beach, Malibu, LA 34678
                </span>
              </div>
              <div className="flex flex-col pl-8">
                <span className="text-sm pb-2 pt-3">
                  <b>42</b> Events Hosted
                </span>
                <span className="text-sm pb-2">
                  <b>10+</b> Services Provided
                </span>
                <span className="text-sm">
                  <b>35</b> Photos
                </span>
              </div>
            </div>

            <div className="tab relative">
              <button
                className="tablinks"
                id="ajauaja"
                onClick={() => openCity(event, "London")}
              >
                About
              </button>
              <button className="tablinks" onClick={() => openCity(event, "Paris")}>
                Services
              </button>
              <button className="tablinks" onClick={() => openCity(event, "Tokyo")}>
                Packages
              </button>
              <button className="tablinks" onClick={() => openCity(event, "Photos")}>
                Photos
              </button>
              <button className="tablinks" onClick={() => openCity(event, "Reviews")}>
                Reviews
              </button>
            </div>
          </div>
        </div>
      </div>

      <VenueDetailsThree />
    </div>
  );
}
