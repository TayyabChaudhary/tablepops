export default function EventInvitationTab() {
  return (
    <>
      <div className="flex justify-between">
        <div className="flex flex-row">
          <div>
            <h3 className="text-2xl font-medium">Guests (120)</h3>
          </div>
          <div>
            <div className="flex justify-center">
              <div className="mb-3 xl:w-64 relative">
                <select
                  className="form-select text-sm appearance-none
                    relative
      block
      w-64
      ml-5
      px-3
      py-1.5
      font-normal
      text-gray-700
      bg-white bg-clip-padding bg-no-repeat
      border border-solid border-gray-300
      rounded-0
      transition
      ease-in-out
      m-0
      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  aria-label="Default select example"
                >
                  <option selected>All Services</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="z-100 absolute -right-3 top-1"
                  fill="#ddd"
                  width="24"
                  height="24"
                >
                  <path d="M16.293 9.293 12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="flex">
            <input
              className="shadow-0 text-sm appearance-none border rounded-sm w-96 mr-3 h-10 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="email"
              placeholder="Enter email"
            />

            <button className="capitalize shadow-0 text-sm login_btn p-2 _event_button text-white font-medium rounded-sm px-5">
              Invite People
            </button>
            <button className="bg-transparent hover:bg-blue-900 text-blue-900 font-semibold hover:text-white py-2 px-8 border border-blue-900 text-sm ml-7 hover:border-transparent rounded-sm">
              Export List
            </button>
          </div>
        </div>
      </div>

      <div>
        <div>
          <div className="relative overflow-x-auto shadow-0 sm:rounded-0 pt-8 pr-16 _paoaws">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-blue-900 capitalize dark:text-gray-400">
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
                  <td className="px-6 py-4 text-green-400">Accepted</td>
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
                  <td className="px-6 py-4 text-green-400">Accepted</td>
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
                  <td className="px-6 py-4 text-gray-500">
                    Pending{" "}
                    <span className="text-blue-500 underline font-medium ml-4 cursor-pointer">
                      Send Reminder
                    </span>
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
                  <td className="px-6 py-4 text-green-400">Accepted</td>
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
                  <td className="px-6 py-4 text-green-400">Accepted</td>
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
                  <td className="px-6 py-4 text-gray-800">
                    Pending
                    <span className="text-blue-500 underline font-medium ml-4 cursor-pointer">
                      Send Reminder
                    </span>
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
                  <td className="px-6 py-4 text-green-400">Accepted</td>
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
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
