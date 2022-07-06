import Logo from "next/image";
import Link from "next/link";
import MainHeader from "../MainHeader/mainheader";
export default function Header() {
  return (
    <div>
      <div className="_main_header min-h-screen overflow-hidden bg-no-repeat">
        <MainHeader />

        <div className="flex justify-center pt-48">
          <h1 className="text-7xl uppercase font-medium hading_main text-white">
            We are the new <br /> age of planners
          </h1>
        </div>
        <div className="flex justify-center pt-3">
          <p className="text-white text-center text-md main_para">
            Discover, book and pay curated event pros and vendors who will work
            with their <br /> style and budget to design custom real or virtual
            event experiences on one easy to <br /> use platform.
          </p>
        </div>
        <div className="flex justify-center pt-6">
          <div className="flex flex-row">
            <div>
              <h3 className="text-white text-left text-lg mb-4">
                Where do you want to host your next event?
              </h3>
              <div className="flex justify-center">
                <div className="mb-3 xl:w-96 relative">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    className="absolute right-4 top-2"
                    fill="#888"
                  >
                    <path d="M16.293 9.293 12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z"></path>
                  </svg>
                  <select
                    className="form-select text-base appearance-none block w-full px-3 py-1.5 font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition
      ease-in-out m-0 before:focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    aria-label="Default select example"
                  >
                    <option selected className="text-blue-800">
                      Select Location
                    </option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-white text-center text-lg ml-14 mb-4">
                On which occassion do you wish to host it?
              </h3>
              <div className="flex justify-center">
                <div className="mb-3 xl:w-96 relative">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    className="absolute -right-6 top-2"
                    fill="#888"
                  >
                    <path d="M16.293 9.293 12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z"></path>
                  </svg>
                  <select
                    className="form-select ml-10 appearance-none block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition
      ease-in-out m-0 before:focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    aria-label="Default select example"
                  >
                    <option selected className="text-blue-800">
                      Select Location
                    </option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center pt-10">
          <button className="_event_button p-3 pl-8 pr-8 text-white rounded font-medium">
            Host an Event
          </button>
        </div>
      </div>
    </div>
  );
}
