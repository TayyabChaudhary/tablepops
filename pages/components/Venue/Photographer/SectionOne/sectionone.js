import J from "next/image";
export default function SectionOnePhotographer() {
  return (
    <div>
      <section>
        <div className="grid grid-cols-3 gap-4 pl-20 pr-20">
          <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white pl-5 pr-5">
            <div className="px-6 py-4">
              <div className="flex justify-center mb-2">
                <J
                  src="/image 200.png"
                  width="100px"
                  className="rounded-full"
                  height="100px"
                />
              </div>
              <div>
                <h2 className="text-bold text-center text-xl">
                  Jim Gyllenhaal
                </h2>
              </div>
              <p className="text-gray-700 text-sm mt-2 text-center">
                Jim is lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua.
              </p>
            </div>
            <div className="flex justify-around items">
              <div className="flex flex-col">
                <small className="text-sm pb-2">Experience</small>
                <small className="text-sm pb-8">Type of Events</small>
                <small className="text-sm pb-2">Charges</small>
                <small className="text-sm pb-2">Reviews</small>
              </div>

              <div className="flex flex-col">
                <h2 className="font-bold text-sm pb-2">4 years</h2>
                <h2 className="font-bold text-sm pb-3">
                  Corporate Events <br /> Private Events
                </h2>
                <h2 className="font-bold text-sm pb-2">25$ / hr</h2>
                <div className="flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="#FBBF4C"
                  >
                    <path d="M21.947 9.179a1.001 1.001 0 0 0-.868-.676l-5.701-.453-2.467-5.461a.998.998 0 0 0-1.822-.001L8.622 8.05l-5.701.453a1 1 0 0 0-.619 1.713l4.213 4.107-1.49 6.452a1 1 0 0 0 1.53 1.057L12 18.202l5.445 3.63a1.001 1.001 0 0 0 1.517-1.106l-1.829-6.4 4.536-4.082c.297-.268.406-.686.278-1.065z"></path>
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="#FBBF4C"
                  >
                    <path d="M21.947 9.179a1.001 1.001 0 0 0-.868-.676l-5.701-.453-2.467-5.461a.998.998 0 0 0-1.822-.001L8.622 8.05l-5.701.453a1 1 0 0 0-.619 1.713l4.213 4.107-1.49 6.452a1 1 0 0 0 1.53 1.057L12 18.202l5.445 3.63a1.001 1.001 0 0 0 1.517-1.106l-1.829-6.4 4.536-4.082c.297-.268.406-.686.278-1.065z"></path>
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="#FBBF4C"
                  >
                    <path d="M21.947 9.179a1.001 1.001 0 0 0-.868-.676l-5.701-.453-2.467-5.461a.998.998 0 0 0-1.822-.001L8.622 8.05l-5.701.453a1 1 0 0 0-.619 1.713l4.213 4.107-1.49 6.452a1 1 0 0 0 1.53 1.057L12 18.202l5.445 3.63a1.001 1.001 0 0 0 1.517-1.106l-1.829-6.4 4.536-4.082c.297-.268.406-.686.278-1.065z"></path>
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="#FBBF4C"
                  >
                    <path d="M21.947 9.179a1.001 1.001 0 0 0-.868-.676l-5.701-.453-2.467-5.461a.998.998 0 0 0-1.822-.001L8.622 8.05l-5.701.453a1 1 0 0 0-.619 1.713l4.213 4.107-1.49 6.452a1 1 0 0 0 1.53 1.057L12 18.202l5.445 3.63a1.001 1.001 0 0 0 1.517-1.106l-1.829-6.4 4.536-4.082c.297-.268.406-.686.278-1.065z"></path>
                  </svg>
                  
                </div>
              </div>
            </div>
            <div className="flex justify-center pb-6 pt-3">
              <button className="bg-blue-900 hover:bg-blue-900 text-sm text-white font-bold py-2 px-10 rounded">
                Book Now
              </button>
              <button className="bg-transparent hover:bg-blue-900 hover:text-white text-blue-900 ml-4 text-sm border border-solid border-blue-900 font-bold py-2 px-10 rounded">
                View more
              </button>
            </div>
          </div>
          <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white pl-5 pr-5">
            <div className="px-6 py-4">
              <div className="flex justify-center mb-2">
                <J
                  src="/zer.png"
                  width="100px"
                  className="rounded-full"
                  height="100px"
                />
              </div>
              <div>
                <h2 className="text-bold text-center text-xl">
                Hank Pim
                </h2>
              </div>
              <p className="text-gray-700 text-sm mt-2 text-center">
                Jim is lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua.
              </p>
            </div>
            <div className="flex justify-around items">
              <div className="flex flex-col">
                <small className="text-sm pb-2">Experience</small>
                <small className="text-sm pb-8">Type of Events</small>
                <small className="text-sm pb-2">Charges</small>
                <small className="text-sm pb-2">Reviews</small>
              </div>

              <div className="flex flex-col">
                <h2 className="font-bold text-sm pb-2">4 years</h2>
                <h2 className="font-bold text-sm pb-3">
                  Corporate Events <br /> Private Events
                </h2>
                <h2 className="font-bold text-sm pb-2">25$ / hr</h2>
                <div className="flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="#FBBF4C"
                  >
                    <path d="M21.947 9.179a1.001 1.001 0 0 0-.868-.676l-5.701-.453-2.467-5.461a.998.998 0 0 0-1.822-.001L8.622 8.05l-5.701.453a1 1 0 0 0-.619 1.713l4.213 4.107-1.49 6.452a1 1 0 0 0 1.53 1.057L12 18.202l5.445 3.63a1.001 1.001 0 0 0 1.517-1.106l-1.829-6.4 4.536-4.082c.297-.268.406-.686.278-1.065z"></path>
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="#FBBF4C"
                  >
                    <path d="M21.947 9.179a1.001 1.001 0 0 0-.868-.676l-5.701-.453-2.467-5.461a.998.998 0 0 0-1.822-.001L8.622 8.05l-5.701.453a1 1 0 0 0-.619 1.713l4.213 4.107-1.49 6.452a1 1 0 0 0 1.53 1.057L12 18.202l5.445 3.63a1.001 1.001 0 0 0 1.517-1.106l-1.829-6.4 4.536-4.082c.297-.268.406-.686.278-1.065z"></path>
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="#FBBF4C"
                  >
                    <path d="M21.947 9.179a1.001 1.001 0 0 0-.868-.676l-5.701-.453-2.467-5.461a.998.998 0 0 0-1.822-.001L8.622 8.05l-5.701.453a1 1 0 0 0-.619 1.713l4.213 4.107-1.49 6.452a1 1 0 0 0 1.53 1.057L12 18.202l5.445 3.63a1.001 1.001 0 0 0 1.517-1.106l-1.829-6.4 4.536-4.082c.297-.268.406-.686.278-1.065z"></path>
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="#FBBF4C"
                  >
                    <path d="M21.947 9.179a1.001 1.001 0 0 0-.868-.676l-5.701-.453-2.467-5.461a.998.998 0 0 0-1.822-.001L8.622 8.05l-5.701.453a1 1 0 0 0-.619 1.713l4.213 4.107-1.49 6.452a1 1 0 0 0 1.53 1.057L12 18.202l5.445 3.63a1.001 1.001 0 0 0 1.517-1.106l-1.829-6.4 4.536-4.082c.297-.268.406-.686.278-1.065z"></path>
                  </svg>
                  
                </div>
              </div>
            </div>
            <div className="flex justify-center pb-6 pt-3">
              <button className="bg-blue-900 hover:bg-blue-900 text-sm text-white font-bold py-2 px-10 rounded">
                Book Now
              </button>
              <button className="bg-transparent hover:bg-blue-900 hover:text-white text-blue-900 ml-4 text-sm border border-solid border-blue-900 font-bold py-2 px-10 rounded">
                View more
              </button>
            </div>
          </div>
          <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white pl-5 pr-5">
            <div className="px-6 py-4">
              <div className="flex justify-center mb-2">
                <J
                  src="/on.png"
                  width="100px"
                  className="rounded-full"
                  height="100px"
                />
              </div>
              <div>
                <h2 className="text-bold text-center text-xl">
                Greg Bishop
                </h2>
              </div>
              <p className="text-gray-700 text-sm mt-2 text-center">
                Jim is lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua.
              </p>
            </div>
            <div className="flex justify-around items">
              <div className="flex flex-col">
                <small className="text-sm pb-2">Experience</small>
                <small className="text-sm pb-8">Type of Events</small>
                <small className="text-sm pb-2">Charges</small>
                <small className="text-sm pb-2">Reviews</small>
              </div>

              <div className="flex flex-col">
                <h2 className="font-bold text-sm pb-2">4 years</h2>
                <h2 className="font-bold text-sm pb-3">
                  Corporate Events <br /> Private Events
                </h2>
                <h2 className="font-bold text-sm pb-2">25$ / hr</h2>
                <div className="flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="#FBBF4C"
                  >
                    <path d="M21.947 9.179a1.001 1.001 0 0 0-.868-.676l-5.701-.453-2.467-5.461a.998.998 0 0 0-1.822-.001L8.622 8.05l-5.701.453a1 1 0 0 0-.619 1.713l4.213 4.107-1.49 6.452a1 1 0 0 0 1.53 1.057L12 18.202l5.445 3.63a1.001 1.001 0 0 0 1.517-1.106l-1.829-6.4 4.536-4.082c.297-.268.406-.686.278-1.065z"></path>
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="#FBBF4C"
                  >
                    <path d="M21.947 9.179a1.001 1.001 0 0 0-.868-.676l-5.701-.453-2.467-5.461a.998.998 0 0 0-1.822-.001L8.622 8.05l-5.701.453a1 1 0 0 0-.619 1.713l4.213 4.107-1.49 6.452a1 1 0 0 0 1.53 1.057L12 18.202l5.445 3.63a1.001 1.001 0 0 0 1.517-1.106l-1.829-6.4 4.536-4.082c.297-.268.406-.686.278-1.065z"></path>
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="#FBBF4C"
                  >
                    <path d="M21.947 9.179a1.001 1.001 0 0 0-.868-.676l-5.701-.453-2.467-5.461a.998.998 0 0 0-1.822-.001L8.622 8.05l-5.701.453a1 1 0 0 0-.619 1.713l4.213 4.107-1.49 6.452a1 1 0 0 0 1.53 1.057L12 18.202l5.445 3.63a1.001 1.001 0 0 0 1.517-1.106l-1.829-6.4 4.536-4.082c.297-.268.406-.686.278-1.065z"></path>
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="#FBBF4C"
                  >
                    <path d="M21.947 9.179a1.001 1.001 0 0 0-.868-.676l-5.701-.453-2.467-5.461a.998.998 0 0 0-1.822-.001L8.622 8.05l-5.701.453a1 1 0 0 0-.619 1.713l4.213 4.107-1.49 6.452a1 1 0 0 0 1.53 1.057L12 18.202l5.445 3.63a1.001 1.001 0 0 0 1.517-1.106l-1.829-6.4 4.536-4.082c.297-.268.406-.686.278-1.065z"></path>
                  </svg>
                  
                </div>
              </div>
            </div>
            <div className="flex justify-center pb-6 pt-3">
              <button className="bg-blue-900 hover:bg-blue-900 text-sm text-white font-bold py-2 px-10 rounded">
                Book Now
              </button>
              <button className="bg-transparent hover:text-white hover:bg-blue-900 text-blue-900 ml-4 text-sm border border-solid border-blue-900 font-bold py-2 px-10 rounded">
                View more
              </button>
            </div>
          </div>
          <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white pl-5 pr-5">
            <div className="px-6 py-4">
              <div className="flex justify-center mb-2">
                <J
                  src="/tw.png"
                  width="100px"
                  className="rounded-full"
                  height="100px"
                />
              </div>
              <div>
                <h2 className="text-bold text-center text-xl">
                Michael Scott
                </h2>
              </div>
              <p className="text-gray-700 text-sm mt-2 text-center">
                Jim is lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua.
              </p>
            </div>
            <div className="flex justify-around items">
              <div className="flex flex-col">
                <small className="text-sm pb-2">Experience</small>
                <small className="text-sm pb-8">Type of Events</small>
                <small className="text-sm pb-2">Charges</small>
                <small className="text-sm pb-2">Reviews</small>
              </div>

              <div className="flex flex-col">
                <h2 className="font-bold text-sm pb-2">4 years</h2>
                <h2 className="font-bold text-sm pb-3">
                  Corporate Events <br /> Private Events
                </h2>
                <h2 className="font-bold text-sm pb-2">25$ / hr</h2>
                <div className="flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="#FBBF4C"
                  >
                    <path d="M21.947 9.179a1.001 1.001 0 0 0-.868-.676l-5.701-.453-2.467-5.461a.998.998 0 0 0-1.822-.001L8.622 8.05l-5.701.453a1 1 0 0 0-.619 1.713l4.213 4.107-1.49 6.452a1 1 0 0 0 1.53 1.057L12 18.202l5.445 3.63a1.001 1.001 0 0 0 1.517-1.106l-1.829-6.4 4.536-4.082c.297-.268.406-.686.278-1.065z"></path>
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="#FBBF4C"
                  >
                    <path d="M21.947 9.179a1.001 1.001 0 0 0-.868-.676l-5.701-.453-2.467-5.461a.998.998 0 0 0-1.822-.001L8.622 8.05l-5.701.453a1 1 0 0 0-.619 1.713l4.213 4.107-1.49 6.452a1 1 0 0 0 1.53 1.057L12 18.202l5.445 3.63a1.001 1.001 0 0 0 1.517-1.106l-1.829-6.4 4.536-4.082c.297-.268.406-.686.278-1.065z"></path>
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="#FBBF4C"
                  >
                    <path d="M21.947 9.179a1.001 1.001 0 0 0-.868-.676l-5.701-.453-2.467-5.461a.998.998 0 0 0-1.822-.001L8.622 8.05l-5.701.453a1 1 0 0 0-.619 1.713l4.213 4.107-1.49 6.452a1 1 0 0 0 1.53 1.057L12 18.202l5.445 3.63a1.001 1.001 0 0 0 1.517-1.106l-1.829-6.4 4.536-4.082c.297-.268.406-.686.278-1.065z"></path>
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="#FBBF4C"
                  >
                    <path d="M21.947 9.179a1.001 1.001 0 0 0-.868-.676l-5.701-.453-2.467-5.461a.998.998 0 0 0-1.822-.001L8.622 8.05l-5.701.453a1 1 0 0 0-.619 1.713l4.213 4.107-1.49 6.452a1 1 0 0 0 1.53 1.057L12 18.202l5.445 3.63a1.001 1.001 0 0 0 1.517-1.106l-1.829-6.4 4.536-4.082c.297-.268.406-.686.278-1.065z"></path>
                  </svg>
                  
                </div>
              </div>
            </div>
            <div className="flex justify-center pb-6 pt-3">
              <button className="bg-blue-900 hover:bg-blue-900 text-sm text-white font-bold py-2 px-10 rounded">
                Book Now
              </button>
              <button className="bg-transparent hover:text-white hover:bg-blue-900 text-blue-900 ml-4 text-sm border border-solid border-blue-900 font-bold py-2 px-10 rounded">
                View more
              </button>
            </div>
          </div>
          <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white pl-5 pr-5">
            <div className="px-6 py-4">
              <div className="flex justify-center mb-2">
                <J
                  src="/thr.png"
                  width="100px"
                  className="rounded-full"
                  height="100px"
                />
              </div>
              <div>
                <h2 className="text-bold text-center text-xl">
                Ross Geller
                </h2>
              </div>
              <p className="text-gray-700 text-sm mt-2 text-center">
                Jim is lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua.
              </p>
            </div>
            <div className="flex justify-around items">
              <div className="flex flex-col">
                <small className="text-sm pb-2">Experience</small>
                <small className="text-sm pb-8">Type of Events</small>
                <small className="text-sm pb-2">Charges</small>
                <small className="text-sm pb-2">Reviews</small>
              </div>

              <div className="flex flex-col">
                <h2 className="font-bold text-sm pb-2">4 years</h2>
                <h2 className="font-bold text-sm pb-3">
                  Corporate Events <br /> Private Events
                </h2>
                <h2 className="font-bold text-sm pb-2">25$ / hr</h2>
                <div className="flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="#FBBF4C"
                  >
                    <path d="M21.947 9.179a1.001 1.001 0 0 0-.868-.676l-5.701-.453-2.467-5.461a.998.998 0 0 0-1.822-.001L8.622 8.05l-5.701.453a1 1 0 0 0-.619 1.713l4.213 4.107-1.49 6.452a1 1 0 0 0 1.53 1.057L12 18.202l5.445 3.63a1.001 1.001 0 0 0 1.517-1.106l-1.829-6.4 4.536-4.082c.297-.268.406-.686.278-1.065z"></path>
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="#FBBF4C"
                  >
                    <path d="M21.947 9.179a1.001 1.001 0 0 0-.868-.676l-5.701-.453-2.467-5.461a.998.998 0 0 0-1.822-.001L8.622 8.05l-5.701.453a1 1 0 0 0-.619 1.713l4.213 4.107-1.49 6.452a1 1 0 0 0 1.53 1.057L12 18.202l5.445 3.63a1.001 1.001 0 0 0 1.517-1.106l-1.829-6.4 4.536-4.082c.297-.268.406-.686.278-1.065z"></path>
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="#FBBF4C"
                  >
                    <path d="M21.947 9.179a1.001 1.001 0 0 0-.868-.676l-5.701-.453-2.467-5.461a.998.998 0 0 0-1.822-.001L8.622 8.05l-5.701.453a1 1 0 0 0-.619 1.713l4.213 4.107-1.49 6.452a1 1 0 0 0 1.53 1.057L12 18.202l5.445 3.63a1.001 1.001 0 0 0 1.517-1.106l-1.829-6.4 4.536-4.082c.297-.268.406-.686.278-1.065z"></path>
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="#FBBF4C"
                  >
                    <path d="M21.947 9.179a1.001 1.001 0 0 0-.868-.676l-5.701-.453-2.467-5.461a.998.998 0 0 0-1.822-.001L8.622 8.05l-5.701.453a1 1 0 0 0-.619 1.713l4.213 4.107-1.49 6.452a1 1 0 0 0 1.53 1.057L12 18.202l5.445 3.63a1.001 1.001 0 0 0 1.517-1.106l-1.829-6.4 4.536-4.082c.297-.268.406-.686.278-1.065z"></path>
                  </svg>
                  
                </div>
              </div>
            </div>
            <div className="flex justify-center pb-6 pt-3">
              <button className="bg-blue-900 hover:bg-blue-900 text-sm text-white font-bold py-2 px-10 rounded">
                Book Now
              </button>
              <button className="bg-transparent hover:text-white hover:bg-blue-900 text-blue-900 ml-4 text-sm border border-solid border-blue-900 font-bold py-2 px-10 rounded">
                View more
              </button>
            </div>
          </div>
          <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white pl-5 pr-5">
            <div className="px-6 py-4">
              <div className="flex justify-center mb-2">
                <J
                  src="/fur.png"
                  width="100px"
                  className="rounded-full"
                  height="100px"
                />
              </div>
              <div>
                <h2 className="text-bold text-center text-xl">
                Sheldon Cooper
                </h2>
              </div>
              <p className="text-gray-700 text-sm mt-2 text-center">
                Jim is lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua.
              </p>
            </div>
            <div className="flex justify-around items">
              <div className="flex flex-col">
                <small className="text-sm pb-2">Experience</small>
                <small className="text-sm pb-8">Type of Events</small>
                <small className="text-sm pb-2">Charges</small>
                <small className="text-sm pb-2">Reviews</small>
              </div>

              <div className="flex flex-col">
                <h2 className="font-bold text-sm pb-2">4 years</h2>
                <h2 className="font-bold text-sm pb-3">
                  Corporate Events <br /> Private Events
                </h2>
                <h2 className="font-bold text-sm pb-2">25$ / hr</h2>
                <div className="flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="#FBBF4C"
                  >
                    <path d="M21.947 9.179a1.001 1.001 0 0 0-.868-.676l-5.701-.453-2.467-5.461a.998.998 0 0 0-1.822-.001L8.622 8.05l-5.701.453a1 1 0 0 0-.619 1.713l4.213 4.107-1.49 6.452a1 1 0 0 0 1.53 1.057L12 18.202l5.445 3.63a1.001 1.001 0 0 0 1.517-1.106l-1.829-6.4 4.536-4.082c.297-.268.406-.686.278-1.065z"></path>
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="#FBBF4C"
                  >
                    <path d="M21.947 9.179a1.001 1.001 0 0 0-.868-.676l-5.701-.453-2.467-5.461a.998.998 0 0 0-1.822-.001L8.622 8.05l-5.701.453a1 1 0 0 0-.619 1.713l4.213 4.107-1.49 6.452a1 1 0 0 0 1.53 1.057L12 18.202l5.445 3.63a1.001 1.001 0 0 0 1.517-1.106l-1.829-6.4 4.536-4.082c.297-.268.406-.686.278-1.065z"></path>
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="#FBBF4C"
                  >
                    <path d="M21.947 9.179a1.001 1.001 0 0 0-.868-.676l-5.701-.453-2.467-5.461a.998.998 0 0 0-1.822-.001L8.622 8.05l-5.701.453a1 1 0 0 0-.619 1.713l4.213 4.107-1.49 6.452a1 1 0 0 0 1.53 1.057L12 18.202l5.445 3.63a1.001 1.001 0 0 0 1.517-1.106l-1.829-6.4 4.536-4.082c.297-.268.406-.686.278-1.065z"></path>
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="#FBBF4C"
                  >
                    <path d="M21.947 9.179a1.001 1.001 0 0 0-.868-.676l-5.701-.453-2.467-5.461a.998.998 0 0 0-1.822-.001L8.622 8.05l-5.701.453a1 1 0 0 0-.619 1.713l4.213 4.107-1.49 6.452a1 1 0 0 0 1.53 1.057L12 18.202l5.445 3.63a1.001 1.001 0 0 0 1.517-1.106l-1.829-6.4 4.536-4.082c.297-.268.406-.686.278-1.065z"></path>
                  </svg>
                  
                </div>
              </div>
            </div>
            <div className="flex justify-center pb-6 pt-3">
              <button className="bg-blue-900 hover:bg-blue-900 text-sm text-white font-bold py-2 px-10 rounded">
                Book Now
              </button>
              <button className="bg-transparent hover:text-white hover:bg-blue-900 text-blue-900 ml-4 text-sm border border-solid border-blue-900 font-bold py-2 px-10 rounded">
                View more
              </button>
            </div>
          </div>
          <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white pl-5 pr-5">
            <div className="px-6 py-4">
              <div className="flex justify-center mb-2">
                <J
                  src="/fv.png"
                  width="100px"
                  className="rounded-full"
                  height="100px"
                />
              </div>
              <div>
                <h2 className="text-bold text-center text-xl">
                Luke Linkletter
                </h2>
              </div>
              <p className="text-gray-700 text-sm mt-2 text-center">
                Jim is lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua.
              </p>
            </div>
            <div className="flex justify-around items">
              <div className="flex flex-col">
                <small className="text-sm pb-2">Experience</small>
                <small className="text-sm pb-8">Type of Events</small>
                <small className="text-sm pb-2">Charges</small>
                <small className="text-sm pb-2">Reviews</small>
              </div>

              <div className="flex flex-col">
                <h2 className="font-bold text-sm pb-2">4 years</h2>
                <h2 className="font-bold text-sm pb-3">
                  Corporate Events <br /> Private Events
                </h2>
                <h2 className="font-bold text-sm pb-2">25$ / hr</h2>
                <div className="flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="#FBBF4C"
                  >
                    <path d="M21.947 9.179a1.001 1.001 0 0 0-.868-.676l-5.701-.453-2.467-5.461a.998.998 0 0 0-1.822-.001L8.622 8.05l-5.701.453a1 1 0 0 0-.619 1.713l4.213 4.107-1.49 6.452a1 1 0 0 0 1.53 1.057L12 18.202l5.445 3.63a1.001 1.001 0 0 0 1.517-1.106l-1.829-6.4 4.536-4.082c.297-.268.406-.686.278-1.065z"></path>
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="#FBBF4C"
                  >
                    <path d="M21.947 9.179a1.001 1.001 0 0 0-.868-.676l-5.701-.453-2.467-5.461a.998.998 0 0 0-1.822-.001L8.622 8.05l-5.701.453a1 1 0 0 0-.619 1.713l4.213 4.107-1.49 6.452a1 1 0 0 0 1.53 1.057L12 18.202l5.445 3.63a1.001 1.001 0 0 0 1.517-1.106l-1.829-6.4 4.536-4.082c.297-.268.406-.686.278-1.065z"></path>
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="#FBBF4C"
                  >
                    <path d="M21.947 9.179a1.001 1.001 0 0 0-.868-.676l-5.701-.453-2.467-5.461a.998.998 0 0 0-1.822-.001L8.622 8.05l-5.701.453a1 1 0 0 0-.619 1.713l4.213 4.107-1.49 6.452a1 1 0 0 0 1.53 1.057L12 18.202l5.445 3.63a1.001 1.001 0 0 0 1.517-1.106l-1.829-6.4 4.536-4.082c.297-.268.406-.686.278-1.065z"></path>
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="#FBBF4C"
                  >
                    <path d="M21.947 9.179a1.001 1.001 0 0 0-.868-.676l-5.701-.453-2.467-5.461a.998.998 0 0 0-1.822-.001L8.622 8.05l-5.701.453a1 1 0 0 0-.619 1.713l4.213 4.107-1.49 6.452a1 1 0 0 0 1.53 1.057L12 18.202l5.445 3.63a1.001 1.001 0 0 0 1.517-1.106l-1.829-6.4 4.536-4.082c.297-.268.406-.686.278-1.065z"></path>
                  </svg>
                  
                </div>
              </div>
            </div>
            <div className="flex justify-center pb-6 pt-3">
              <button className="bg-blue-900 hover:bg-blue-900 text-sm text-white font-bold py-2 px-10 rounded">
                Book Now
              </button>
              <button className="bg-transparent hover:text-white hover:bg-blue-900 text-blue-900 ml-4 text-sm border border-solid border-blue-900 font-bold py-2 px-10 rounded">
                View more
              </button>
            </div>
          </div>
          <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white pl-5 pr-5">
            <div className="px-6 py-4">
              <div className="flex justify-center mb-2">
                <J
                  src="/sx.png"
                  width="100px"
                  className="rounded-full"
                  height="100px"
                />
              </div>
              <div>
                <h2 className="text-bold text-center text-xl">
                Hailey Sen
                </h2>
              </div>
              <p className="text-gray-700 text-sm mt-2 text-center">
                Jim is lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua.
              </p>
            </div>
            <div className="flex justify-around items">
              <div className="flex flex-col">
                <small className="text-sm pb-2">Experience</small>
                <small className="text-sm pb-8">Type of Events</small>
                <small className="text-sm pb-2">Charges</small>
                <small className="text-sm pb-2">Reviews</small>
              </div>

              <div className="flex flex-col">
                <h2 className="font-bold text-sm pb-2">4 years</h2>
                <h2 className="font-bold text-sm pb-3">
                  Corporate Events <br /> Private Events
                </h2>
                <h2 className="font-bold text-sm pb-2">25$ / hr</h2>
                <div className="flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="#FBBF4C"
                  >
                    <path d="M21.947 9.179a1.001 1.001 0 0 0-.868-.676l-5.701-.453-2.467-5.461a.998.998 0 0 0-1.822-.001L8.622 8.05l-5.701.453a1 1 0 0 0-.619 1.713l4.213 4.107-1.49 6.452a1 1 0 0 0 1.53 1.057L12 18.202l5.445 3.63a1.001 1.001 0 0 0 1.517-1.106l-1.829-6.4 4.536-4.082c.297-.268.406-.686.278-1.065z"></path>
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="#FBBF4C"
                  >
                    <path d="M21.947 9.179a1.001 1.001 0 0 0-.868-.676l-5.701-.453-2.467-5.461a.998.998 0 0 0-1.822-.001L8.622 8.05l-5.701.453a1 1 0 0 0-.619 1.713l4.213 4.107-1.49 6.452a1 1 0 0 0 1.53 1.057L12 18.202l5.445 3.63a1.001 1.001 0 0 0 1.517-1.106l-1.829-6.4 4.536-4.082c.297-.268.406-.686.278-1.065z"></path>
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="#FBBF4C"
                  >
                    <path d="M21.947 9.179a1.001 1.001 0 0 0-.868-.676l-5.701-.453-2.467-5.461a.998.998 0 0 0-1.822-.001L8.622 8.05l-5.701.453a1 1 0 0 0-.619 1.713l4.213 4.107-1.49 6.452a1 1 0 0 0 1.53 1.057L12 18.202l5.445 3.63a1.001 1.001 0 0 0 1.517-1.106l-1.829-6.4 4.536-4.082c.297-.268.406-.686.278-1.065z"></path>
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="#FBBF4C"
                  >
                    <path d="M21.947 9.179a1.001 1.001 0 0 0-.868-.676l-5.701-.453-2.467-5.461a.998.998 0 0 0-1.822-.001L8.622 8.05l-5.701.453a1 1 0 0 0-.619 1.713l4.213 4.107-1.49 6.452a1 1 0 0 0 1.53 1.057L12 18.202l5.445 3.63a1.001 1.001 0 0 0 1.517-1.106l-1.829-6.4 4.536-4.082c.297-.268.406-.686.278-1.065z"></path>
                  </svg>
                  
                </div>
              </div>
            </div>
            <div className="flex justify-center pb-6 pt-3">
              <button className="bg-blue-900 hover:bg-blue-900 text-sm text-white font-bold py-2 px-10 rounded">
                Book Now
              </button>
              <button className="bg-transparent hover:text-white hover:bg-blue-900 text-blue-900 ml-4 text-sm border border-solid border-blue-900 font-bold py-2 px-10 rounded">
                View more
              </button>
            </div>
          </div>
          <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white pl-5 pr-5">
            <div className="px-6 py-4">
              <div className="flex justify-center mb-2">
                <J
                  src="/sven.png"
                  width="100px"
                  className="rounded-full"
                  height="100px"
                />
              </div>
              <div>
                <h2 className="text-bold text-center text-xl">
                Pam Short
                </h2>
              </div>
              <p className="text-gray-700 text-sm mt-2 text-center">
                Jim is lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua.
              </p>
            </div>
            <div className="flex justify-around items">
              <div className="flex flex-col">
                <small className="text-sm pb-2">Experience</small>
                <small className="text-sm pb-8">Type of Events</small>
                <small className="text-sm pb-2">Charges</small>
                <small className="text-sm pb-2">Reviews</small>
              </div>

              <div className="flex flex-col">
                <h2 className="font-bold text-sm pb-2">4 years</h2>
                <h2 className="font-bold text-sm pb-3">
                  Corporate Events <br /> Private Events
                </h2>
                <h2 className="font-bold text-sm pb-2">25$ / hr</h2>
                <div className="flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="#FBBF4C"
                  >
                    <path d="M21.947 9.179a1.001 1.001 0 0 0-.868-.676l-5.701-.453-2.467-5.461a.998.998 0 0 0-1.822-.001L8.622 8.05l-5.701.453a1 1 0 0 0-.619 1.713l4.213 4.107-1.49 6.452a1 1 0 0 0 1.53 1.057L12 18.202l5.445 3.63a1.001 1.001 0 0 0 1.517-1.106l-1.829-6.4 4.536-4.082c.297-.268.406-.686.278-1.065z"></path>
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="#FBBF4C"
                  >
                    <path d="M21.947 9.179a1.001 1.001 0 0 0-.868-.676l-5.701-.453-2.467-5.461a.998.998 0 0 0-1.822-.001L8.622 8.05l-5.701.453a1 1 0 0 0-.619 1.713l4.213 4.107-1.49 6.452a1 1 0 0 0 1.53 1.057L12 18.202l5.445 3.63a1.001 1.001 0 0 0 1.517-1.106l-1.829-6.4 4.536-4.082c.297-.268.406-.686.278-1.065z"></path>
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="#FBBF4C"
                  >
                    <path d="M21.947 9.179a1.001 1.001 0 0 0-.868-.676l-5.701-.453-2.467-5.461a.998.998 0 0 0-1.822-.001L8.622 8.05l-5.701.453a1 1 0 0 0-.619 1.713l4.213 4.107-1.49 6.452a1 1 0 0 0 1.53 1.057L12 18.202l5.445 3.63a1.001 1.001 0 0 0 1.517-1.106l-1.829-6.4 4.536-4.082c.297-.268.406-.686.278-1.065z"></path>
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="#FBBF4C"
                  >
                    <path d="M21.947 9.179a1.001 1.001 0 0 0-.868-.676l-5.701-.453-2.467-5.461a.998.998 0 0 0-1.822-.001L8.622 8.05l-5.701.453a1 1 0 0 0-.619 1.713l4.213 4.107-1.49 6.452a1 1 0 0 0 1.53 1.057L12 18.202l5.445 3.63a1.001 1.001 0 0 0 1.517-1.106l-1.829-6.4 4.536-4.082c.297-.268.406-.686.278-1.065z"></path>
                  </svg>
                  
                </div>
              </div>
            </div>
            <div className="flex justify-center pb-6 pt-3">
              <button className="bg-blue-900 hover:bg-blue-900 text-sm text-white font-bold py-2 px-10 rounded">
                Book Now
              </button>
              <button className="bg-transparent hover:text-white hover:bg-blue-900 text-blue-900 ml-4 text-sm border border-solid border-blue-900 font-bold py-2 px-10 rounded">
                View more
              </button>
            </div>
          </div>
        </div>
      </section>
      
    </div>
  );
}
