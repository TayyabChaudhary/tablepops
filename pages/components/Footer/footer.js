import FooterImage from "next/image";
export default function Footer() {
  return (
    <footer className="bg-transparent text-center lg:text-left relative">
  
      <div className="container p-6">
        <div className="grid lg:grid-cols-5 md:grid-cols-2">
          <div className="mb-6">
            <FooterImage src="/logo.png" alt="me" width="80px" height="40px" />
            <div className="flex mt-3">
            <a href="#!" className="mr-6 text-gray-600">
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fab"
                  data-icon="instagram"
                  className="w-3.5"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                >
                  <path
                    fill="currentColor"
                    d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
                  ></path>
                </svg>
              </a>
              <a href="#!" className="mr-6 text-gray-600">
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fab"
                  data-icon="facebook-f"
                  className="w-2.5"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 320 512"
                >
                  <path
                    fill="currentColor"
                    d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
                  ></path>
                </svg>
              </a>
              <a href="#!" className="mr-6 text-gray-600">
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fab"
                  data-icon="twitter"
                  className="w-4"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="currentColor"
                    d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
                  ></path>
                </svg>
              </a>
           
            
           
           
            </div>
            <ul className="list-none mb-0 mt-4 kaaooa">
              <li>
                <a href="#!" className="text-gray-800 text-sm">
                  <i className="fa fa-phone mr-4" aria-hidden="true"></i>
                  +1 12345 67890
                </a>
              </li>
              <li>
                <a href="#!" className="text-gray-800 text-sm">
                  <i className="fa fa-envelope-o" aria-hidden="true"></i>
                  contact@tablepop.com
                </a>
              </li>
              <li>
                <a href="#!" className="text-gray-800 text-sm">
                  <i className="fa fa-map-marker mr-4" aria-hidden="true"></i>
                  10th City Pearl,
                  <br />
                  East Manhattan, NYC
                  <br />
                  35946, New York
                </a>
              </li>
            </ul>
          </div>

          <div className="mb-6">
            <ul className="list-none mb-0 text-sm _l_a_d_shaj">
              <li>
                <a href="#!" className="text-gray-800">
                  Home
                </a>
              </li>
              <li>
                <a href="/components/Vendor_List/main" className="text-gray-800">
                  Blog
                </a>
              </li>
              <li>
                <a href="/components/Venue/venue" className="text-gray-800">
                  Features
                </a>
              </li>
              <li>
                <a href="/components/Venue/VenueDetails/venuedetails" className="text-gray-800">
                  Packages
                </a>
              </li>
              <li>
                <a href="/components/UserOptions/userMain" className="text-gray-800">
                  Past Events
                </a>
              </li>
              <li>
                <a href="/components/UserOptions/UserOptionTwo/useroptionMain" className="text-gray-800">
                  Our Story
                </a>
              </li>
              <li>
                <a href="/components/Venue/VenueDetails/VenueDetailsSecond/main" className="text-gray-800">
                  Contacts
                </a>
              </li>
            </ul>
          </div>

          <div className="mb-6">
            <h5 className="uppercase font-bold mb-2.5 text-gray-800">
              Ccorporate Events
            </h5>

            <ul className="list-none mb-0 text-sm _l_a_d_shaj">
              <li>
                <a href="/components/Venue/VenueDetails/VenueDetailsThree/main" className="text-gray-800">
                  Seminars
                </a>
              </li>
              <li>
                <a href="/components/Venue/Photographer/photographer" className="text-gray-800">
                  Trade Show
                </a>
              </li>
              <li>
                <a href="/components/AboutUs/AboutUs" className="text-gray-800">
                  Product Launch
                </a>
              </li>
              <li>
                <a href="/components/VendorSignUp/VendorSignUp" className="text-gray-800">
                  Team Building
                </a>
              </li>
              <li>
                <a href="/components/VendorOnBoard/VendorOnBoard" className="text-gray-800">
                  Milestone Event
                </a>
              </li>
            </ul>
          </div>

          <div className="mb-6">
            <h5 className="uppercase font-bold mb-2.5 text-gray-800">
              Social Events
            </h5>

            <ul className="list-none mb-0 text-sm _l_a_d_shaj">
              <li>
                <a href="/components/MyPackages/MyPackages" className="text-gray-800">
                  Holiday Events
                </a>
              </li>
              <li>
                <a href="/components/How/main" className="text-gray-800">
                  Fashion Show
                </a>
              </li>
              <li>
                <a href="#!" className="text-gray-800">
                  Music Festival
                </a>
              </li>
              <li>
                <a href="#!" className="text-gray-800">
                  Awareness Event
                </a>
              </li>
              <li>
                <a href="#!" className="text-gray-800">
                  Non Profit Event
                </a>
              </li>
              <li>
                <a href="#!" className="text-gray-800">
                  Contacts
                </a>
              </li>
            </ul>
          </div>
          <div className="mb-6">
            <h5 className="uppercase font-bold mb-2.5 text-gray-800">
              Personal Events
            </h5>

            <ul className="list-none mb-0 text-sm _l_a_d_shaj">
              <li>
                <a href="#!" className="text-gray-800">
                  Wedding
                </a>
              </li>
              <li>
                <a href="#!" className="text-gray-800">
                  Birthday
                </a>
              </li>
              <li>
                <a href="#!" className="text-gray-800">
                  Babyshower
                </a>
              </li>
              <li>
                <a href="#!" className="text-gray-800">
                  Get together
                </a>
              </li>
              <li>
                <a href="#!" className="text-gray-800">
                  Personal Milestone Event
                </a>
              </li>
              <li>
                <a href="#!" className="text-gray-800">
                  Contacts
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
