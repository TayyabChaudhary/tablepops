import { useState } from "react";
import Footer from "../../../Footer/footer";

export default function EventsFirstSection() {
  const [showMe, setShowMe] = useState(false);
  const [showBtn, setShowButton] = useState(true);
  function toggle() {
    setShowMe(!showMe);
    setShowButton(!showBtn);
  }
  return (
    <>
      <section className="flex flex-col">
        <div className="pl-16 pt-24">
          <h1 className="text-4xl font-medium _opaoao">My Events</h1>
          <p className="text-sm font-medium mt-3">
            Let’s fill in alldetails of your event. This information will be
            visible to all the invitees attending the event
          </p>
          <div>
            <div className="flex flex-row pt-5">
              <div>
                <div className="w-72 h-56 rounded-md cursor-pointer bg-blue-200 flex justify-center items-center  ">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="40"
                      height="40"
                      fill="#fff"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 4h-3v-1h3v1zm10.93 0l.812 1.219c.743 1.115 1.987 1.781 3.328 1.781h1.93v13h-20v-13h3.93c1.341 0 2.585-.666 3.328-1.781l.812-1.219h5.86zm1.07-2h-8l-1.406 2.109c-.371.557-.995.891-1.664.891h-5.93v17h24v-17h-3.93c-.669 0-1.293-.334-1.664-.891l-1.406-2.109zm-11 8c0-.552-.447-1-1-1s-1 .448-1 1 .447 1 1 1 1-.448 1-1zm7 0c1.654 0 3 1.346 3 3s-1.346 3-3 3-3-1.346-3-3 1.346-3 3-3zm0-2c-2.761 0-5 2.239-5 5s2.239 5 5 5 5-2.239 5-5-2.239-5-5-5z" />
                    </svg>
                  </div>
                </div>
                <p className="text-sm text-center mt-3">
                  Upload relevant picture for event
                </p>
                <div className="flex justify-center">
                  <small className="text-xs text-center">
                    (Maximum 5 pictures)
                  </small>
                </div>
              </div>
              <div>
                <form>
                  <div className="flex justify-center pl-8 pt-5">
                    <div className="mb-3">
                      <input
                        type="text"
                        className="
        form-control
        block
        w-full
        px-3
        py-1.5
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded-0
        transition
        ease-in-out
        m-0
        text-sm
        _o_9_p_2_s_s
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
                        id="exampleFormControlInput1"
                        placeholder="Enter event name"
                      />
                    </div>
                  </div>
                  <div className="flex justify-center pl-8 pt-5">
                    <div className="mb-3">
                      <textarea
                        className="
        form-control
        block
        w-full
        px-3
        py-1.5
        resize-none
        text-sm
        _o_9_p_2_s_s
        _o_9_p_2_s_s
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
                        id="exampleFormControlTextarea1"
                        rows="5"
                        placeholder="Enter event description"
                      ></textarea>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="flex flex-row items-center">
              <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0 pt-10">
                <label
                  className="block uppercase tracking-wide text-gray-900 text-xs font-medium mb-2"
                  for="grid-state"
                >
                  Number of guests
                </label>
                <div className="flex w-96">
                  <div className="relative">
                    <select
                      className="block appearance-none bg-transparent w-96 border border-gray-200 text-sm text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="grid-state"
                    >
                      <option>New Mexico</option>
                      <option>Missouri</option>
                      <option>Texas</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                      <svg
                        className="fill-current h-4 w-4"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                      </svg>
                    </div>
                  </div>
                  <div className="relative">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      className="absolute left-6 top-2"
                      fill="#3D5A80"
                    >
                      <path d="M3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-2V2h-2v2H9V2H7v2H5a2 2 0 0 0-2 2zm16 14H5V8h14z"></path>
                    </svg>
                    <input
                      type="date"
                      className="border ml-4 border-solid w-96 rounded pr-24 pl-8 pt-2 text-sm outline-none text-left py-2 border-gray-200 appearance-none"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-row">
              <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0 pt-5">
                <label
                  className="block uppercase tracking-wide text-gray-900 text-xs font-medium mb-2"
                  for="grid-state"
                >
                  Approximate Budget
                </label>
                <div className="flex w-96">
                <div className="relative">
                  <select
                    className="block appearance-none w-96 bg-transparent border border-gray-200 text-sm text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-state"
                  >
                    <option>under 10,000 $</option>
                    <option>Missouri</option>
                    <option>Texas</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg
                      className="fill-current h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </div>
                </div>
                <div className="relative">
                  
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      className="absolute left-6 top-2"
                      fill="#3D5A80"
                    >
                      <path d="M3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-2V2h-2v2H9V2H7v2H5a2 2 0 0 0-2 2zm16 14H5V8h14z"></path>
                    </svg>

                    <input
                      type="date"
                      className="border ml-4 border-solid w-96 rounded pr-24 pl-8 pt-2 text-sm outline-none text-left py-2 border-gray-200 appearance-none"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center pt-12">
              <button className="uppercase shadow-sm login_btn p-2 _save w-96 pt-4 py-4 text-white font-medium rounded-sm px-5">
                Save
              </button>
            </div>
          </div>
        </div>
        <hr className="mt-20" />

        <div className="flex justify-center pt-10">
          <div className="flex flex-row">
            <div>
              <div className="p-2 bg-blue-300 pl-10 rounded-md pr-10">
                <h5 className="text-white">My Services</h5>
              </div>
            </div>
            <div>
              <div className="p-2 bg-gray-300 pl-10 rounded-md pr-10">
                <h5 className="text-white">Invitations</h5>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center pt-6">
          <p className="text-sm text-center text-gray-600">
            Lorem ipsum is placeholder text commonly used in the graphic, print,
            and <br /> publishing industries for previewing layouts and visual
            mockups.
          </p>
        </div>
        <div
          className="block"
          style={{
            display: showMe ? "block" : "none",
          }}
        >
          <div className="flex justify-center">
            <div>
              <p className="text-sm text-gray-500 mt-4">
                Add “,” to add mltiple email ids. You can also import email
              </p>
            </div>
          </div>
          <div className="flex justify-center">
            <div>
              <div className="pt-6">
                <div className="w-full px-3">
                  <input
                    autoComplete="off"
                    className="appearance-none block w-96 bg-transparent text-sm text-gray-700 border border-gray-200 rounded-0 py-2 _o_9_p_2_s_s px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-password"
                    type="email"
                    placeholder="Enter email id"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center pt-10">
            <button className="capitalize shadow-sm ml-4 _savespso text-sm p-2 browse w-96 pt-3 py-3 text-white font-medium rounded-sm px-5">
              Import List
            </button>
            <button className="capitalize ml-4 shadow-sm login_btn text-sm p-2 browse w-96 pt-3 py-3 text-white font-medium rounded-sm px-5">
              Send Invitation
            </button>
          </div>

          <div className="pl-16 pt-10">
            <div>
              <h4 className="text-2xl font-medium">Invitations Sent</h4>
            </div>
            <div>
              <div className="relative overflow-x-auto shadow-0 sm:rounded-0 pt-8 pr-16 _paoaws">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                  <thead className="text-xs text-gray-700 capitalize dark:text-gray-400">
                    <tr>
                      <th scope="col" className="px-6 py-3 font-medium text-md">
                        <input
                          className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                          type="checkbox"
                          value=""
                          id="flexCheckDefault"
                        />
                      </th>
                      <th scope="col" className="px-6 py-3 font-medium text-md">
                        Name
                      </th>
                      <th scope="col" className="px-6 py-3 font-medium text-md">
                        Email Id
                      </th>
                      <th scope="col" className="px-6 py-3 font-medium text-md">
                        Mobile Number
                      </th>
                      <th scope="col" className="px-6 py-3 font-medium text-md">
                        Status
                      </th>
                      <th scope="col" className="px-6 py-3 font-medium text-md">
                        <a
                          href="#"
                          className="font-medium text-blue-600 hover:underline"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            fill="#3D5A80"
                            height="20"
                            viewBox="0 0 24 24"
                          >
                            <path d="M12 18c1.657 0 3 1.343 3 3s-1.343 3-3 3-3-1.343-3-3 1.343-3 3-3zm0-9c1.657 0 3 1.343 3 3s-1.343 3-3 3-3-1.343-3-3 1.343-3 3-3zm0-9c1.657 0 3 1.343 3 3s-1.343 3-3 3-3-1.343-3-3 1.343-3 3-3z" />
                          </svg>
                        </a>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-white border-b">
                      <th>
                        <input
                          className="form-check-input ml-6 appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                          type="checkbox"
                          value=""
                          id="flexCheckDefault"
                        />
                      </th>
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                      >
                        Midge
                      </th>
                      <td className="px-6 py-4">marvelousmidge@gmail.com</td>
                      <td className="px-6 py-4">+1 24345 54323</td>
                      <td className="px-6 py-4 text-green-500">Accepted</td>
                      <td className="px-6 py-4 text-right">
                        <a
                          href="#"
                          className="font-medium text-blue-600 hover:underline"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            fill="#3D5A80"
                            height="20"
                            viewBox="0 0 24 24"
                          >
                            <path d="M12 18c1.657 0 3 1.343 3 3s-1.343 3-3 3-3-1.343-3-3 1.343-3 3-3zm0-9c1.657 0 3 1.343 3 3s-1.343 3-3 3-3-1.343-3-3 1.343-3 3-3zm0-9c1.657 0 3 1.343 3 3s-1.343 3-3 3-3-1.343-3-3 1.343-3 3-3z" />
                          </svg>
                        </a>
                      </td>
                    </tr>
                    <tr className="bg-white border-b">
                      <th>
                        <input
                          className="form-check-input ml-6 appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                          type="checkbox"
                          value=""
                          id="flexCheckDefault"
                        />
                      </th>
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                      >
                        Midge
                      </th>
                      <td className="px-6 py-4">marvelousmidge@gmail.com</td>
                      <td className="px-6 py-4">+1 24345 54323</td>
                      <td className="px-6 py-4">
                        Pending:{" "}
                        <span className="text-blue-500 underline font-medium ml-4 cursor-pointer">
                          Send Reminder
                        </span>{" "}
                      </td>
                      <td className="px-6 py-4 text-right">
                        <a
                          href="#"
                          className="font-medium text-blue-600 hover:underline"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            fill="#3D5A80"
                            height="20"
                            viewBox="0 0 24 24"
                          >
                            <path d="M12 18c1.657 0 3 1.343 3 3s-1.343 3-3 3-3-1.343-3-3 1.343-3 3-3zm0-9c1.657 0 3 1.343 3 3s-1.343 3-3 3-3-1.343-3-3 1.343-3 3-3zm0-9c1.657 0 3 1.343 3 3s-1.343 3-3 3-3-1.343-3-3 1.343-3 3-3z" />
                          </svg>
                        </a>
                      </td>
                    </tr>
                    <tr className="bg-white border-b">
                      <th>
                        <input
                          className="form-check-input ml-6 appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                          type="checkbox"
                          value=""
                          id="flexCheckDefault"
                        />
                      </th>
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                      >
                        Midge
                      </th>
                      <td className="px-6 py-4">marvelousmidge@gmail.com</td>
                      <td className="px-6 py-4">+1 24345 54323</td>
                      <td className="px-6 py-4 text-red-400">Cancelled</td>
                      <td className="px-6 py-4 text-right">
                        <a
                          href="#"
                          class="font-medium text-blue-600 hover:underline"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            fill="#3D5A80"
                            height="20"
                            viewBox="0 0 24 24"
                          >
                            <path d="M12 18c1.657 0 3 1.343 3 3s-1.343 3-3 3-3-1.343-3-3 1.343-3 3-3zm0-9c1.657 0 3 1.343 3 3s-1.343 3-3 3-3-1.343-3-3 1.343-3 3-3zm0-9c1.657 0 3 1.343 3 3s-1.343 3-3 3-3-1.343-3-3 1.343-3 3-3z" />
                          </svg>
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center pt-14">
          <div style={{ display: showBtn ? "block" : "none" }}>
            <button
              onClick={toggle}
              className="uppercase shadow-sm login_btn text-sm p-2 browse w-96 pt-3 py-3 text-white font-medium rounded-sm px-5"
            >
              Browse Services
            </button>
          </div>
        </div>

        <div>
          <div className="bg-pink-50 p-10 mt-32">
            <Footer />
          </div>
        </div>
      </section>
    </>
  );
}
