import Head from "next/head";
import DashboardHeader from "../Header/header";
import Imaeges from "next/image";
import Footer from "../../Footer/footer";
export default function DashboardMyEvent() {
  return (
    <>
      <Head>
        <title>My Events</title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"
          integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g=="
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
          integrity="sha256-eZrrJcwDc/3uDhsdt61sL2oOBY362qM3lon1gyExkL0="
        />
      </Head>
      <DashboardHeader />

      <section className="pl-12 pt-10">
        <div>
          <h2 className="text-3xl _opaoao pl-12">My Events</h2>
        </div>

        <div className="flex flex-row justify-center">
          <div>
            <div className="_p_a_x_x_x p-4 mt-6 bg-white shadow-lg">
              <div>
                <h3 className="text-xl font-medium">Upcoming Events</h3>
                <hr />
              </div>

              <div className="flex">
                <div>
                  <div className="flex flex-col">
                    <Imaeges src="/image 56.png" width="250px" height="200px" />
                    <button className="bg-transparent text-sm mt-4 _save text-white font-semibold hover:text-white py-2 px-8 mr-3 border hover:border-transparent rounded">
                      VIEW DETAILS
                    </button>
                  </div>
                </div>
                <div className="pl-8">
                  <h2 className="text-xl font-medium">Kelly Weds Rayn</h2>
                  <p className="text-sm text-gray-600 mt-3">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
                    <br />
                    Auctor gravida mauris quisque vitae facilisi et.
                  </p>
                  <div className="flex items-center mt-14">
                    <i className="fa fa-calendar-o" aria-hidden="true"></i>
                    <span className="text-xs text-gray-600 ml-2">
                      20th Feb, 2022
                    </span>
                    <i className="fa fa-clock-o ml-5" aria-hidden="true"></i>
                    <span className="text-xs text-gray-600 ml-2">
                      10:00 AM onwards
                    </span>
                  </div>
                  <div className="flex items-center mt-6">
                    <i className="fa fa-users" aria-hidden="true"></i>
                    <span className="text-xs text-gray-600 ml-2">
                      120 Guests
                    </span>
                    <i className="fa fa-envelop-o ml-5" aria-hidden="true"></i>
                    <span className="text-xs text-gray-600 ml-2 underline">
                      80 Invitation Accepted
                    </span>
                    <span className="text-xs text-gray-600 ml-2 underline">
                      40 Invitation Pending
                    </span>
                  </div>
                  <div className="flex items-center mt-6">
                    <button className="bg-transparent text-sm hover:bg-blue-900 text-blue-900 font-semibold hover:text-white py-2 px-8 mr-3 border border-blue-900 hover:border-transparent rounded">
                      <i className="fa fa-users mr-2" aria-hidden="true"></i>
                      Invite People
                    </button>
                    <button className="bg-transparent px-8 hover:bg-blue-900 text-blue-900 font-semibold hover:text-white py-2  border border-blue-900 hover:border-transparent rounded">
                      <i className="fa fa-share-alt mr-2"></i>
                      Share
                    </button>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-medium mt-10">Past Events</h3>
                <hr />
              </div>

              <div className="flex">
                <div>
                  <div className="flex flex-col">
                    <Imaeges src="/image 56.png" width="250px" height="200px" />
                    <button className="bg-transparent text-sm mt-4 _save text-white font-semibold hover:text-white py-2 px-8 mr-3 border hover:border-transparent rounded">
                      VIEW DETAILS
                    </button>
                  </div>
                </div>
                <div className="pl-8">
                  <h2 className="text-xl font-medium">Kelly Weds Rayn</h2>
                  <p className="text-sm text-gray-600 mt-3">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
                    <br />
                    Auctor gravida mauris quisque vitae facilisi et.
                  </p>
                  <div className="flex items-center mt-14">
                    <i className="fa fa-calendar-o" aria-hidden="true"></i>
                    <span className="text-xs text-gray-600 ml-2">
                      20th Feb, 2022
                    </span>
                    <i className="fa fa-clock-o ml-5" aria-hidden="true"></i>
                    <span className="text-xs text-gray-600 ml-2">
                      10:00 AM onwards
                    </span>
                  </div>
                  <div className="flex items-center mt-6">
                    <i className="fa fa-users" aria-hidden="true"></i>
                    <span className="text-xs text-gray-600 ml-2">
                      120 Guests
                    </span>
                    <i class="fa fa-envelop-o ml-5" aria-hidden="true"></i>
                    <span className="text-xs text-gray-600 ml-2 underline">
                      80 Invitation Accepted
                    </span>
                    <span className="text-xs text-gray-600 ml-2 underline">
                      40 Invitation Pending
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="max-w-sm rounded overflow-hidden shadow-lg mt-5 ml-8">
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">Activities</div>
                <div className="border-solid border-t border-gray-300"></div>
                <ul>
                  <li className="text-sm text-blue-800 pt-3 border-b border-solid pb-3 border-gray-300">
                    Adam confirmed your custom request for flower bouquet
                    decoration
                    <div className="flex justify-end">
                      <small className="text-end text-gray-500 text-xs">
                        10:27
                      </small>
                    </div>
                  </li>

                  <li className="text-sm text-blue-800 pt-3 border-b border-solid pb-3 border-gray-300">
                    Cecilia made a contribution to your event. Paid photographer
                    250$
                    <div className="flex justify-end">
                      <small className="text-end text-gray-500 text-xs">
                        Wed
                      </small>
                    </div>
                  </li>
                  <li className="text-sm text-blue-800 pt-3 border-b border-solid pb-3 border-gray-300">
                    50% of invitees have accepted your invitation. Send reminder
                    to remaining 50%
                    <div className="flex justify-end">
                      <small className="text-end text-gray-500 text-xs">
                        Tue
                      </small>
                    </div>
                  </li>
                  <li className="text-sm text-blue-800 pt-3 border-b border-solid pb-3 border-gray-300">
                    You’ve added Nicole, Stuart and 2 others in management role
                    <div className="flex justify-end">
                      <small className="text-end text-gray-500 text-xs">
                        Tue
                      </small>
                    </div>
                  </li>
                  <li className="text-sm text-blue-800 pt-3">
                    You’ve added Alexa as your Event Planner
                    <div className="flex justify-end">
                      <small className="text-end text-gray-500 text-xs">
                        10 Jan
                      </small>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div className="flex justify-end pt-10">
              <div className="w-14 h-14 relative cursor-pointer rounded-full flex justify-center items-center _savespso">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="#fff"
                >
                  <path d="M2.001 9.352c0 1.873.849 2.943 1.683 3.943.031 1 .085 1.668-.333 3.183 1.748-.558 2.038-.778 3.008-1.374 1 .244 1.474.381 2.611.491-.094.708-.081 1.275.055 2.023-.752-.06-1.528-.178-2.33-.374-1.397.857-4.481 1.725-6.649 2.115.811-1.595 1.708-3.785 1.661-5.312-1.09-1.305-1.705-2.984-1.705-4.695-.001-4.826 4.718-8.352 9.999-8.352 5.237 0 9.977 3.484 9.998 8.318-.644-.175-1.322-.277-2.021-.314-.229-3.34-3.713-6.004-7.977-6.004-4.411 0-8 2.85-8 6.352zm20.883 10.169c-.029 1.001.558 2.435 1.088 3.479-1.419-.258-3.438-.824-4.352-1.385-.772.188-1.514.274-2.213.274-3.865 0-6.498-2.643-6.498-5.442 0-3.174 3.11-5.467 6.546-5.467 3.457 0 6.546 2.309 6.546 5.467 0 1.12-.403 2.221-1.117 3.074zm-7.424-2.429c0-.206-.061-.378-.184-.517-.125-.139-.318-.255-.584-.349-.242-.085-.393-.155-.455-.208-.129-.108-.133-.292.018-.394.075-.051.18-.077.312-.077.217 0 .428.046.627.14l.15-.524c-.221-.1-.475-.149-.768-.149-.336 0-.605.082-.807.244s-.303.37-.303.622c0 .39.273.675.822.858.184.061.311.121.385.179.156.123.146.338-.012.446-.082.056-.195.083-.342.083-.255 0-.504-.062-.752-.188l-.137.542c.244.123.527.184.846.184.371 0 .662-.083.869-.248.211-.164.315-.379.315-.644zm3.656.846l-.154-2.875h-.906l-.613 1.983-.508-1.983h-.895l-.184 2.875h.615l.102-2.321h.008s.352 1.439.59 2.273h.516c.396-1.209.631-1.968.699-2.273h.014c0 .406.021 1.18.067 2.321h.649zm2.451-.846c0-.209-.064-.386-.189-.527-.124-.14-.322-.259-.59-.353-.237-.084-.389-.154-.449-.205-.123-.103-.125-.273.016-.369.072-.049.176-.074.305-.074.232 0 .435.052.637.147l.158-.556-.012-.006c-.221-.1-.48-.15-.774-.15-.338 0-.612.083-.815.248-.205.165-.311.379-.311.634 0 .396.281.688.836.872.179.061.306.12.379.177.146.115.14.318-.012.42-.078.054-.19.081-.333.081-.274 0-.521-.072-.761-.195l-.145.574c.273.136.559.19.863.19.374 0 .67-.084.879-.251.211-.167.318-.388.318-.657z" />
                </svg>
              </div>
              <div className="w-6 h-6 bg-red-500 rounded-full absolute flex justify-center items-center">
                <h6 className="text-white">4</h6>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="mt-24 bg-pink-50 p-10">
        <Footer />
      </div>
    </>
  );
}
