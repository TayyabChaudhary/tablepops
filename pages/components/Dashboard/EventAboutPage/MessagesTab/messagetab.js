import MessageImage from "next/image";
export default function MessgaesTab() {
  return (
    <>
      <main className="flex flex-row -mt-20">
        <div>
          <div class="max-w-sm w-full lg:max-w-full lg:flex">
            <div
              className="h-96 lg:h-auto lg:w-96 border-solid oaiajak border-r p-3 relative border-gray-300 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
              title="Woman holding a mug"
            >
              <form className="relative">
                <i className="fa fa-search absolute left-3 text-gray-300 top-2"></i>
                <input
                  className="shadow-0 text-sm appearance-none border rounded-0 w-full py-2 px-8 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="username"
                  type="search"
                  placeholder="Search or start new message"
                />
              </form>
              <div>
                <ul>
                  <li className="w-full p-4 bg-pink-50 rounded-sm mt-4 cursor-pointer">
                    <div className="flex flex-row">
                      <div className="relative">
                        <MessageImage
                          src="/image 57.png"
                          className="rounded-full mr-4"
                          width="40px"
                          height="40px"
                        />
                        <div className="w-2 h-2 bg-green-500 absolute bottom-1 right-0 rounded-full"></div>
                      </div>
                      <div className="flex flex-col text-left pl-3">
                        <h4 className="font-medium mb-1">Alexa Grey</h4>
                        <p className="text-xs text-gray-500">
                          I’ve received it. I’ll review and
                          <span className="pl-2 text-xs absolute right-5">
                            1 h ago
                          </span>
                        </p>
                      </div>
                    </div>
                  </li>
                  <li className="w-full p-4 bg-white rounded-sm mt-2 hover:bg-pink-50 cursor-pointer">
                    <div className="flex flex-row">
                      <div className="relative">
                        <MessageImage
                          src="/image 59.png"
                          className="rounded-full mr-4"
                          width="40px"
                          height="40px"
                        />
                        <div className="w-2 h-2 bg-green-500 absolute bottom-1 right-0 rounded-full"></div>
                      </div>
                      <div className="flex flex-col text-left pl-3">
                        <h4 className="font-medium mb-1">Simon Dull</h4>
                        <p className="text-xs text-gray-500">
                          Missed Voice Call
                          <span className="pl-2 text-xs absolute right-5">
                            1 h ago
                          </span>
                        </p>
                      </div>
                    </div>
                  </li>
                  <li className="w-full p-4 bg-white hover:bg-pink-50  rounded-sm mt-2 cursor-pointer">
                    <div className="flex flex-row">
                      <div className="relative">
                        <MessageImage
                          src="/image 57.png"
                          className="rounded-full mr-4"
                          width="40px"
                          height="40px"
                        />
                        <div className="w-2 h-2 bg-green-500 absolute bottom-1 right-0 rounded-full"></div>
                      </div>
                      <div className="flex flex-col text-left pl-3">
                        <h4 className="font-medium mb-1">Alexa Grey</h4>
                        <p className="text-xs text-gray-500">
                          Missed Voice Call
                          <span className="pl-2 text-xs absolute right-5">
                            1 h ago
                          </span>
                        </p>
                      </div>
                    </div>
                  </li>
                  <li className="w-full p-4 bg-white hover:bg-pink-50  rounded-sm mt-2 cursor-pointer">
                    <div className="flex flex-row">
                      <div className="relative">
                        <MessageImage
                          src="/image 57.png"
                          className="rounded-full mr-4"
                          width="40px"
                          height="40px"
                        />
                        <div className="w-2 h-2 bg-green-500 absolute bottom-1 right-0 rounded-full"></div>
                      </div>
                      <div className="flex flex-col text-left pl-3">
                        <h4 className="font-medium mb-1">Alexa Grey</h4>
                        <p className="text-xs text-gray-500">
                          Missed Voice Call
                          <span className="pl-2 text-xs absolute right-5">
                            1 h ago
                          </span>
                        </p>
                      </div>
                    </div>
                  </li>
                  <li className="w-full p-4 bg-white hover:bg-pink-50  rounded-sm mt-2 cursor-pointer">
                    <div className="flex flex-row">
                      <div className="relative">
                        <MessageImage
                          src="/image 57.png"
                          className="rounded-full mr-4"
                          width="40px"
                          height="40px"
                        />
                        <div className="w-2 h-2 bg-green-500 absolute bottom-1 right-0 rounded-full"></div>
                      </div>
                      <div className="flex flex-col text-left pl-3">
                        <h4 className="font-medium mb-1">Alexa Grey</h4>
                        <p className="text-xs text-gray-500">
                          Missed Voice Call
                          <span className="pl-2 text-xs absolute right-5">
                            1 h ago
                          </span>
                        </p>
                      </div>
                    </div>
                  </li>
                
                </ul>
              </div>
            </div>
            <div className="border-r border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-0 flex flex-col leading-normal">
              <div className="mb-8 w-full bg-white shadow-md p-6 pb-2 kaiaoao">
                <div className="flex justify-between items-center w-full font-bold text-sm mb-2">
                  <div className="flex items-center">
                    <div>
                      <MessageImage
                        src="/image 57.png"
                        className="rounded-full mr-4"
                        width="40px"
                        height="40px"
                      />
                    </div>
                    <div className="pl-2">
                      <h3 className="text-sm">Alexa Grey</h3>
                    </div>
                  </div>

                  <div className="flex flex-row">
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="#EE6C4D"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20 22.621l-3.521-6.795c-.008.004-1.974.97-2.064 1.011-2.24 1.086-6.799-7.82-4.609-8.994l2.083-1.026-3.493-6.817-2.106 1.039c-7.202 3.755 4.233 25.982 11.6 22.615.121-.055 2.102-1.029 2.11-1.033z" />
                      </svg>
                    </div>
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="#EE6C4D"
                        width="20"
                        height="20"
                        className="ml-3"
                        viewBox="0 0 24 24"
                      >
                        <path d="M16 18c0 1.104-.896 2-2 2h-12c-1.105 0-2-.896-2-2v-12c0-1.104.895-2 2-2h12c1.104 0 2 .896 2 2v12zm8-14l-6 6.223v3.554l6 6.223v-16z" />
                      </svg>
                    </div>
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="#3D5A80"
                        width="20"
                        height="20"
                        className="ml-3"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 18c1.657 0 3 1.343 3 3s-1.343 3-3 3-3-1.343-3-3 1.343-3 3-3zm0-9c1.657 0 3 1.343 3 3s-1.343 3-3 3-3-1.343-3-3 1.343-3 3-3zm0-9c1.657 0 3 1.343 3 3s-1.343 3-3 3-3-1.343-3-3 1.343-3 3-3z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              <div className="message_content">
                <div>
                  <div className="flex items-center pl-6">
                    <div>
                      <MessageImage
                        src="/image 59.png"
                        className="rounded-full ml-4"
                        width="30px"
                        height="30px"
                      />
                    </div>
                    <div>
                      <div className="w-auto bg-gray-100 border-b-l-0 rounded-lg p-3 px-6 ml-3">
                        <span className="text-xs">
                          Hi Vel, how are you? I saw on Jungle that we have
                          Dragonfly <br /> in common. 😄
                        </span>
                      </div>
                      <small className="text-xs pl-5 text-gray-400">
                        2:55 PM
                      </small>
                    </div>
                  </div>
                </div>
                <div className="flex justify-end pr-4">
                  <div>
                    <div className="w-auto ajaooaoao border-b-l-0 rounded-lg p-3 px-6 ml-3">
                      <span className="text-xs text-white">
                        Haha truly! Nice to meet you Grace! What about a cup of
                        coffee <br /> today evening? ☕️
                      </span>
                    </div>
                    <div className="flex justify-end pt-2">
                      <small className="text-xs pl-5 text-gray-400 flex items-center">
                        2:55 PM{" "}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="#2D9CDB"
                          width="24"
                          height="24"
                        >
                          <path d="m2.394 13.742 4.743 3.62 7.616-8.704-1.506-1.316-6.384 7.296-3.257-2.486zm19.359-5.084-1.506-1.316-6.369 7.279-.753-.602-1.25 1.562 2.247 1.798z"></path>
                        </svg>
                      </small>
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-20 pl-4">
                    <span className="text-gray-500 text-xs">Alexa is typing ...</span>
                </div>
              </div>
              <div className="fotter bg-white p-3 shadow-0">
                <div className="flex">
                  <form>
                    <input
                      className="shadow-0 appearance-none border text-sm rounded-0 akakak py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="username"
                      type="text"
                      placeholder="Type here"
                    />
                  </form>
                  <div>
                    <div className="flex">
                      <div className="w-8 flex justify-center items-center mr-2 ml-2 cursor-pointer h-8 bg-orange-600 rounded-full">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="15"
                          height="15"
                          fill="#fff"
                          viewBox="0 0 24 24"
                        >
                          <path d="M0 12l11 3.1 7-8.1-8.156 5.672-4.312-1.202 15.362-7.68-3.974 14.57-3.75-3.339-2.17 2.925v-.769l-2-.56v7.383l4.473-6.031 4.527 4.031 6-22z" />
                        </svg>
                      </div>
                      <div className="w-8 flex justify-center items-center mr-2 ml-2 cursor-pointer h-8 border-solid border border-orange-600 rounded-full">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="#EE6C4D"
                          width="24"
                          height="24"
                        >
                          <path d="M16 12V6c0-2.217-1.785-4.021-3.979-4.021a.933.933 0 0 0-.209.025A4.006 4.006 0 0 0 8 6v6c0 2.206 1.794 4 4 4s4-1.794 4-4zm-6 0V6c0-1.103.897-2 2-2a.89.89 0 0 0 .163-.015C13.188 4.06 14 4.935 14 6v6c0 1.103-.897 2-2 2s-2-.897-2-2z"></path>
                          <path d="M6 12H4c0 4.072 3.061 7.436 7 7.931V22h2v-2.069c3.939-.495 7-3.858 7-7.931h-2c0 3.309-2.691 6-6 6s-6-2.691-6-6z"></path>
                        </svg>
                      </div>
                      <div className="w-8 flex justify-center items-center mr-1 ml-2 h-8 cursor-pointer border-solid border border-orange-600 rounded-full">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="#EE6C4D"
                          width="24"
                          height="24"
                        >
                          <path d="M20 2H8c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2zM8 16V4h12l.002 12H8z"></path>
                          <path d="M4 8H2v12c0 1.103.897 2 2 2h12v-2H4V8z"></path>
                          <path d="m12 12-1-1-2 3h10l-4-6z"></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
