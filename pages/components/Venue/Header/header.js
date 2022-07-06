import Logo from "next/image";
import Link from "next/link";
// Import the FontAwesomeIcon component
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import the icons you need
import { faCart } from "@fortawesome/free-solid-svg-icons";
export default function VenueHeader() {
  return (
    <>
      <header className="w-full p-3 bg-white shadow-sm z-100">
        <div className="flex justify-between items-center pl-8 pr-8">
          <div className="logo">
            <Logo src="/logos.png" alt="me" width="70px" height="43px" />
          </div>
          <div>
            <ul className="flex space-x-10 text-sm text-gray-600 items-center">
              <li>
                <Link href="">
                  <a>Dashboard</a>
                </Link>
              </li>
              <li>
                <a href="">Events</a>
              </li>
              <li>
                <a href="">Transactions</a>
              </li>
                <li>
                  <a href="">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="#333"
                    >
                      <path d="M21.822 7.431A1 1 0 0 0 21 7H7.333L6.179 4.23A1.994 1.994 0 0 0 4.333 3H2v2h2.333l4.744 11.385A1 1 0 0 0 10 17h8c.417 0 .79-.259.937-.648l3-8a1 1 0 0 0-.115-.921zM17.307 15h-6.64l-2.5-6h11.39l-2.25 6z"></path>
                      <circle cx="10.5" cy="19.5" r="1.5"></circle>
                      <circle cx="17.5" cy="19.5" r="1.5"></circle>
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="" className="kisoso px-6 py-3 rounded-sm text-white">
                    Create Event
                  </a>
                </li>
                <div className="w-10 h-10 rounded-full flex justify-center items-center dkdodola">
                  <h4 className="text-white">AB</h4>
                </div>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
}
