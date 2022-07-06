import Logo from "next/image";
import Link from "next/link";
import { useState } from "react";
import MainHeaderLogo from "../../../public/image 31.png";
import LogoImage from "../../../public/logo.png";
export default function MainHeader() {
  const [showMe, setShowMe] = useState(false);
  const [showSignUp, setSignupShow] = useState(false);
  function toggle() {
    setShowMe(true);
    setSignupShow(false);
  }

  function sigupToggle() {
    setSignupShow(true);
    setShowMe(false);
  }

  function ClosePopup() {
    setSignupShow(false);
  }
  return (
    <header className="w-full p-3 fixed bg-white shadow-sm z-100 Op_aoaoa max-w-full">
      <div className="flex justify-between items-center pl-8 pr-8">
        <div className="logo">
          <Logo src={LogoImage} alt="me" width="70px" height="43px" />
        </div>
        <div className="flex">
          <ul className="flex space-x-16 text-md text-black items-center">
            <li>
              <Link href="/components/How/main">
                <a>How it works</a>
              </Link>
            </li>
            <li>
              <Link href="/components/MyPackages/MyPackages">Packages</Link>
            </li>
            <li>
              <a href="">Blog</a>
            </li>
            <li>
              <a href="">Our Story</a>
            </li>
          </ul>

          <button
            onClick={toggle}
            className="uppercase ml-14 mr-5 shadow-md login_btn p-2 py-3 kisoso rounded text-white font-medium px-6"
          >
            Login
          </button>

          <button
            onClick={sigupToggle}
            className="uppercase shadow-md login_btn p-2 py-3 browse text-white font-medium rounded px-6"
          >
            Signup
          </button>
        </div>
      </div>

      <div
        className="login_dialog"
        style={{
          display: showMe ? "block" : "none",
        }}
      >
        <div className="flex justify-center items-center min-h-screen">
          <div className="w-8/12 lg:max-w-full lg:flex p-0">
            <div className="oappap bg-white rounded-0 lg:rounded-b-none lg:rounded-0 p-0 flex flex-col justify-between leading-normal">
              <div className="flex flex-row">
                <div className="flex items-center">
                  <Logo
                    src={MainHeaderLogo}
                    className="object-center"
                    width="400px"
                    height="450px"
                  />
                </div>
                <div className="mb-8 pl-20 pt-14">
                  <div className="text-gray-900 font-bold text-3xl mb-2">
                    Welcome Back
                  </div>
                  <p className="text-xs text-gray-600 font-medium">
                    Login with your TablePop account
                  </p>
                  <form className="mt-4">
                    <label className="block">
                      <span className="block text-sm font-bold text-blue-800">
                        Email or Mobile Number
                      </span>
                      <input
                        type="email"
                        className="mt-1 block w-96 px-3 py-2 bg-gray-50 border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500
    "
                        placeholder="Enter email or mobile nmber"
                      />
                    </label>
                    <label className="block mt-4">
                      <span className="block text-sm font-bold text-blue-800">
                        Password
                      </span>
                      <input
                        type="email"
                        className="mt-1 block w-96 px-3 py-2 bg-gray-50 border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500
    "
                        placeholder="********"
                      />
                    </label>
                    <div className="px-6 pt-4 pb-2 flex justify-center">
                      <span className="inline-block bg-orange-600 cursor-pointer rounded text-sm font-semibold text-white mr-2 mb-2 pl-16 p-3 pr-16">
                        LOGIN
                      </span>
                    </div>
                  </form>
                  <div className="flex justify-center">
                    <h6 className="text-sm font-medium">
                      New User?{" "}
                      <span
                        className="text-orange-600 cursor-pointer "
                        onClick={sigupToggle}
                      >
                        Sign Up
                      </span>
                    </h6>
                  </div>
                  <div className="flex justify-center mt-3 items-center">
                    <h6 className="text-sm font-medium text-gray-500">
                      Login with
                    </h6>
                    <div className="flex flex-row items-center ml-2">
                      <svg
                        aria-hidden="true"
                        className="native svg-icon iconGoogle cursor-pointer"
                        width="24"
                        height="24"
                        viewBox="0 0 18 18"
                      >
                        <path
                          d="M16.51 8H8.98v3h4.3c-.18 1-.74 1.48-1.6 2.04v2.01h2.6a7.8 7.8 0 0 0 2.38-5.88c0-.57-.05-.66-.15-1.18Z"
                          fill="#4285F4"
                        ></path>
                        <path
                          d="M8.98 17c2.16 0 3.97-.72 5.3-1.94l-2.6-2a4.8 4.8 0 0 1-7.18-2.54H1.83v2.07A8 8 0 0 0 8.98 17Z"
                          fill="#34A853"
                        ></path>
                        <path
                          d="M4.5 10.52a4.8 4.8 0 0 1 0-3.04V5.41H1.83a8 8 0 0 0 0 7.18l2.67-2.07Z"
                          fill="#FBBC05"
                        ></path>
                        <path
                          d="M8.98 4.18c1.17 0 2.23.4 3.06 1.2l2.3-2.3A8 8 0 0 0 1.83 5.4L4.5 7.49a4.77 4.77 0 0 1 4.48-3.3Z"
                          fill="#EA4335"
                        ></path>
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="40px"
                        width="40px"
                        viewBox="-204.79995 -341.33325 1774.9329 2047.9995"
                      >
                        <path
                          d="M1365.333 682.667C1365.333 305.64 1059.693 0 682.667 0 305.64 0 0 305.64 0 682.667c0 340.738 249.641 623.16 576 674.373V880H402.667V682.667H576v-150.4c0-171.094 101.917-265.6 257.853-265.6 74.69 0 152.814 13.333 152.814 13.333v168h-86.083c-84.804 0-111.25 52.623-111.25 106.61v128.057h189.333L948.4 880H789.333v477.04c326.359-51.213 576-333.635 576-674.373"
                          fill="#1877f2"
                        />
                        <path
                          d="M948.4 880l30.267-197.333H789.333V554.609C789.333 500.623 815.78 448 900.584 448h86.083V280s-78.124-13.333-152.814-13.333c-155.936 0-257.853 94.506-257.853 265.6v150.4H402.667V880H576v477.04a687.805 687.805 0 00106.667 8.293c36.288 0 71.91-2.84 106.666-8.293V880H948.4"
                          fill="#fff"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="signup_dialog"
        style={{
          display: showSignUp ? "block" : "none",
        }}
      >
        <div className="flex justify-center items-center min-h-screen">
          <div className="w-10/12 lg:max-w-full lg:flex p-0">
            <div className="oappap bg-white rounded-0 lg:rounded-b-none lg:rounded-0 p-3 flex flex-col justify-between leading-normal">
              <div className="flex flex-row justify-center">
                <div className="flex items-center">
                  <Logo
                    src="/image 31.png"
                    className="object-center"
                    width="400px"
                    height="400px"
                  />
                </div>
                <div className="mb-8 pl-16 pt-14">
                  <div className="text-gray-900 font-bold text-2xl mb-2">
                    Let’s get started
                  </div>
                  <p className="text-xs text-gray-600 font-medium">
                    Fill in below details to create TablePop account
                  </p>
                  <form className="mt-4">
                    <div className="flex">
                      <label className="block">
                        <input
                          type="email"
                          className="mt-1 block w-full px-3 py-2 bg-gray-50 border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500
    "
                          placeholder="First Name"
                        />
                      </label>
                      <div className="pl-3">
                        <label className="block">
                          <input
                            type="email"
                            className="mt-1 block w-full px-3 py-2 bg-gray-50 border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500
    "
                            placeholder="Last Name"
                          />
                        </label>
                      </div>
                    </div>
                    <div className="pt-4">
                      <label className="block">
                        <input
                          type="email"
                          className="mt-1 block w-full px-3 py-2 bg-gray-50 border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500
    "
                          placeholder="Email Address"
                        />
                      </label>
                    </div>
                    <div className="pt-4">
                      <label className="block">
                        <input
                          type="number"
                          className="mt-1 block w-full px-3 py-2 bg-gray-50 border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500
    "
                          placeholder="Phone Number"
                        />
                      </label>
                    </div>
                    <div className="flex pt-4">
                      <label className="block">
                        <input
                          type="password"
                          className="mt-1 block w-full px-3 py-2 bg-gray-50 border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500
    "
                          placeholder="Password"
                        />
                      </label>
                      <div className="pl-3">
                        <label className="block">
                          <input
                            type="password"
                            className="mt-1 block w-full px-3 py-2 bg-gray-50 border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500
    "
                            placeholder="Confirm Password"
                          />
                        </label>
                      </div>
                    </div>
                    <div className="flex pt-3">
                      <div className="form-check">
                        <input
                          className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                          type="checkbox"
                          value=""
                          id="flexCheckDefault"
                        />
                        <label
                          className="form-check-label text-xs inline-block text-gray-600"
                          htmlFor="flexCheckDefault"
                        >
                          I agree that I accept all Terms & Conditions and
                          Privacy Policy
                        </label>
                      </div>
                    </div>
                    <div className="px-6 pt-4 pb-2 flex justify-center">
                      <span
                        onClick={ClosePopup}
                        className="inline-block bg-orange-600 _savespso cursor-pointer shadow-md rounded text-sm font-semibold text-white mr-2 mb-2 pl-16 p-3 pr-16"
                      >
                        SIGNUP
                      </span>
                    </div>
                  </form>
                  <div className="flex justify-center">
                    <h6 className="text-sm font-medium">
                      Already a User?{" "}
                      <span
                        className="text-orange-600 cursor-pointer"
                        onClick={toggle}
                      >
                        Login
                      </span>
                    </h6>
                  </div>
                  <div className="flex justify-center mt-3 items-center">
                    <h6 className="text-sm font-medium text-gray-500">
                      Continue with
                    </h6>
                    <div className="flex flex-row items-center ml-3">
                      <svg
                        aria-hidden="true"
                        className="native svg-icon iconGoogle"
                        width="30"
                        height="30"
                        viewBox="0 0 18 18"
                      >
                        <path
                          d="M16.51 8H8.98v3h4.3c-.18 1-.74 1.48-1.6 2.04v2.01h2.6a7.8 7.8 0 0 0 2.38-5.88c0-.57-.05-.66-.15-1.18Z"
                          fill="#4285F4"
                        ></path>
                        <path
                          d="M8.98 17c2.16 0 3.97-.72 5.3-1.94l-2.6-2a4.8 4.8 0 0 1-7.18-2.54H1.83v2.07A8 8 0 0 0 8.98 17Z"
                          fill="#34A853"
                        ></path>
                        <path
                          d="M4.5 10.52a4.8 4.8 0 0 1 0-3.04V5.41H1.83a8 8 0 0 0 0 7.18l2.67-2.07Z"
                          fill="#FBBC05"
                        ></path>
                        <path
                          d="M8.98 4.18c1.17 0 2.23.4 3.06 1.2l2.3-2.3A8 8 0 0 0 1.83 5.4L4.5 7.49a4.77 4.77 0 0 1 4.48-3.3Z"
                          fill="#EA4335"
                        ></path>
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="50px"
                        width="50px"
                        viewBox="-204.79995 -341.33325 1774.9329 2047.9995"
                      >
                        <path
                          d="M1365.333 682.667C1365.333 305.64 1059.693 0 682.667 0 305.64 0 0 305.64 0 682.667c0 340.738 249.641 623.16 576 674.373V880H402.667V682.667H576v-150.4c0-171.094 101.917-265.6 257.853-265.6 74.69 0 152.814 13.333 152.814 13.333v168h-86.083c-84.804 0-111.25 52.623-111.25 106.61v128.057h189.333L948.4 880H789.333v477.04c326.359-51.213 576-333.635 576-674.373"
                          fill="#1877f2"
                        />
                        <path
                          d="M948.4 880l30.267-197.333H789.333V554.609C789.333 500.623 815.78 448 900.584 448h86.083V280s-78.124-13.333-152.814-13.333c-155.936 0-257.853 94.506-257.853 265.6v150.4H402.667V880H576v477.04a687.805 687.805 0 00106.667 8.293c36.288 0 71.91-2.84 106.666-8.293V880H948.4"
                          fill="#fff"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
