import Logo from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function UserOptionsHeader() {
    const [showMe, setShowMe] = useState(false);
    const [showSignUp, setSignupShow] = useState(false);
    function toggle() {
      setShowMe(!showMe);
    }
  
    function sigupToggle() {
      setSignupShow(!showSignUp);
    }
  
    return(
        <>
         <header className="w-full p-3 bg-white shadow-sm z-100">
      <div className="flex justify-between items-center pl-8 pr-8">
        <div className="logo">
          <Logo src="/logo.png" alt="me" width="80px" height="40px" />
        </div>
        <div>
          <ul className="flex space-x-10 text-sm text-gray-600 items-center">
            <li>
              <Link href="/components/How/main">
                <a>How it works</a>
              </Link>
            </li>
            <li>
              <a href="/components/Dashboard/mainfile">Packages</a>
            </li>
            <li>
              <a href="">Blog</a>
            </li>
            <li>
              <a href="">Our Story</a>
            </li>
            <li>
              <button
                onClick={toggle}
                className="uppercase shadow-sm login_btn p-2 bg-orange-400 text-white font-medium rounded-sm px-5"
              >
                Login
              </button>
            </li>
            <li>
              <button
                onClick={sigupToggle}
                className="uppercase shadow-sm login_btn p-2 bg-blue-800 text-white font-medium rounded-sm px-5"
              >
                Signup
              </button>
            </li>
          </ul>
        </div>
      </div>

      <div
        className="login_dialog"
        style={{
          display: showMe ? "block" : "none",
        }}
      >
        <div className="flex justify-center items-center min-h-screen">
          <div class="w-8/12 lg:max-w-full lg:flex p-0">
            <div class="oappap bg-white rounded-0 lg:rounded-b-none lg:rounded-0 p-0 flex flex-col justify-between leading-normal">
              <div className="flex flex-row">
                <div class="flex items-center">
                  <Logo
                    src="/image 31.png"
                    className="object-center"
                    width="400px"
                    height="450px"
                  />
                </div>
                <div class="mb-8 pl-20 pt-14">
                  <div class="text-gray-900 font-bold text-3xl mb-2">
                    Welcome Back
                  </div>
                  <p class="text-xs text-gray-600 font-medium">
                    Login with your TablePop account
                  </p>
                  <form className="mt-4">
                    <label class="block">
                      <span class="block text-sm font-medium text-slate-700">
                        Email or Mobile Number
                      </span>
                      <input
                        type="email"
                        class="mt-1 block w-96 px-3 py-2 bg-white border border-slate-300 rounded-0 text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500
    "
                        placeholder="Enter email or mobile nmber"
                      />
                    </label>
                    <label class="block mt-4">
                      <span class="block text-sm font-medium text-slate-700">
                        Password
                      </span>
                      <input
                        type="email"
                        class="mt-1 block w-96 px-3 py-2 bg-white border border-slate-300 rounded-0 text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500
    "
                        placeholder="********"
                      />
                    </label>
                    <div class="px-6 pt-4 pb-2 flex justify-center">
                      <span class="inline-block bg-orange-600 cursor-pointer rounded text-sm font-semibold text-white mr-2 mb-2 pl-16 p-3 pr-16">
                        LOGIN
                      </span>
                    </div>
                  </form>
                  <div className="flex justify-center">
                    <h6 className="text-sm font-medium">
                      New User? <span className="text-orange-600">Sign Up</span>
                    </h6>
                  </div>
                  <div className="flex justify-center mt-3 items-center">
                    <h6 className="text-sm font-medium text-gray-500">
                      Login with
                    </h6>

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="30px"
                      width="30px"
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
      <div
        className="signup_dialog"
        style={{
            display: showSignUp? "block" : "none"
        }}
      >
        <div className="flex justify-center items-center min-h-screen">
          <div class="w-10/12 lg:max-w-full lg:flex p-0">
            <div class="oappap bg-white rounded-0 lg:rounded-b-none lg:rounded-0 p-3 flex flex-col justify-between leading-normal">
              <div className="flex flex-row justify-center">
                <div class="flex items-center">
                  <Logo
                    src="/image 31.png"
                    className="object-center"
                    width="400px"
                    height="450px"
                  />
                </div>
                <div class="mb-8 pl-20 pt-5">
                  <div class="text-gray-900 font-bold text-2xl mb-2">
                    Let’s get started
                  </div>
                  <p class="text-xs text-gray-600 font-medium">
                    Fill in below details to create TablePop account
                  </p>
                  <form className="mt-4">
                    <div className="flex">
                      <label class="block">
                        <input
                          type="email"
                          class="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-0 text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500
    "
                          placeholder="First Name"
                        />
                      </label>
                      <div className="pl-3">
                        <label class="block">
                          <input
                            type="email"
                            class="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-0 text-sm shadow-sm placeholder-slate-400
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
                      <label class="block">
                        <input
                          type="email"
                          class="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-0 text-sm shadow-sm placeholder-slate-400
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
                      <label class="block">
                        <input
                          type="number"
                          class="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-0 text-sm shadow-sm placeholder-slate-400
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
                      <label class="block">
                        <input
                          type="password"
                          class="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-0 text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500
    "
                          placeholder="Password"
                        />
                      </label>
                      <div className="pl-3">
                        <label class="block">
                          <input
                            type="password"
                            class="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-0 text-sm shadow-sm placeholder-slate-400
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
                      <div class="form-check">
                        <input
                          class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                          type="checkbox"
                          value=""
                          id="flexCheckDefault"
                        />
                        <label
                          class="form-check-label text-xs inline-block text-gray-600"
                          for="flexCheckDefault"
                        >
                          I agree that I accept all Terms & Conditions and
                          Privacy Policy
                        </label>
                      </div>
                    </div>
                    <div class="px-6 pt-4 pb-2 flex justify-center">
                      <span class="inline-block bg-orange-600 cursor-pointer rounded text-sm font-semibold text-white mr-2 mb-2 pl-16 p-3 pr-16">
                        SIGNUP
                      </span>
                    </div>
                  </form>
                  <div className="flex justify-center">
                    <h6 className="text-sm font-medium">
                      Already a User?{" "}
                      <span className="text-orange-600">Login</span>
                    </h6>
                  </div>
                  <div className="flex justify-center mt-3 items-center">
                    <h6 className="text-sm font-medium text-gray-500">
                      Continue with
                    </h6>

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="30px"
                      width="30px"
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
    </header>

 
        </>
    )
}