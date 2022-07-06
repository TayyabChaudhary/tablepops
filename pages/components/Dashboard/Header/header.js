import Logo from "next/image";
import Link from "next/link";
import router from "next/router";
// Import the FontAwesomeIcon component
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// import the icons you need
import {
  faSearch,
  faBell,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";
export default function DashboardHeader() {
  return (
    <div>
      <header className="w-full fixed p-3 bg-white shadow-sm z-100 Op_aoaoa">
        <div className="flex justify-between items-center pl-8 pr-8">
          <div className="logo">
            <Logo src="/logo.png" alt="me" width="70px" height="43px" />
          </div>
          <div>
            <ul className="flex space-x-8 text-sm text-gray-600 items-center">
              <li>
                <Link href="">
                  <a>Dashboard</a>
                </Link>
              </li>
              <li>
                <a href="/components/Dashboard/EventAboutPage/main">Vendors</a>
              </li>
              <li>
                <a href="/components/Dashboard/EventsPage/SectionOne/sectionOne">
                  Events
                </a>
              </li>
              <li>
                <a href="">Transactions</a>
              </li>
              <li>
                <a href="/components/Dashboard/Cart/DashboardCart">
                  <FontAwesomeIcon
                    icon={faShoppingCart}
                    style={{ fontSize: 13, color: "#333" }}
                  />
                </a>
              </li>
              <li>
                <a href="/components/Dashboard/MyEvents/myevents">
                  <FontAwesomeIcon
                    icon={faBell}
                    style={{ fontSize: 13, color: "#333" }}
                  />
                </a>
              </li>
              <li>
                <button className="uppercase shadow-sm login_btn p-2 bg-orange-400 _save text-white font-medium rounded-sm px-5">
                  Create Events
                </button>
              </li>
              <li>
                <div className="w-10 h-10 bg-blue-400 rounded-full flex justify-center items-center">
                  <h2 className="text-white font-medium cursor-pointer">AB</h2>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </div>
  );
}
