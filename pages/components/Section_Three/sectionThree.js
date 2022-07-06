import Image from "next/image";
export default function SectionThree() {
  return (
    <div>
      <main className="flex justify-center items-center pt-20">
        <h3 className="text-ornage-800 text-4xl kajkajka">Our Work Gallery</h3>
      </main>

      <div className="flex justify-start mt-20">
        <div className="_first relative">
          <div className="flex flex-row">
            <div className="f_image bg-no-repeat">
              <div className="flex justify-center items-center min-h-full">
                <h2 className="text-white text-xl">Sean’s Thanksgiving</h2>
              </div>
            </div>
            <div className="s_image bg-no-repeat ml-5">
              <div className="flex justify-center items-center min-h-full">
                <h2 className="text-white text-xl">Moscow Festival</h2>
              </div>{" "}
            </div>
            <div className="t_image bg-no-repeat ml-5">
              <div className="flex justify-center items-center min-h-full">
                <h2 className="text-white text-xl text-center">
                  Angela’s
                  <br />
                  Gratitude Gathering
                </h2>
              </div>{" "}
            </div>
            <div className="fou_image bg-no-repeat ml-5">
              <div className="flex justify-center items-center min-h-full">
                <h2 className="text-white text-xl text-center">
                  Joe - Della <br />
                  Bahamas Wedding
                </h2>
              </div>{" "}
            </div>
            <div className="fi_image bg-no-repeat ml-5">
              <div className="flex justify-center items-center min-h-full">
                <h2 className="text-white text-xl text-center">
                  Heidi’s
                  <br />
                  Babyshower
                </h2>
              </div>{" "}
            </div>
          </div>
        </div>
      </div>

      <div className="pt-16">
        <div className="flex justify-center items-center">
          <h2 className="text-3xl font-medium _p_a_s_s_x_c_c">
            Choose from our Ready-to-go Packages
          </h2>
        </div>
        <div className="flex justify-center items-center pt-10">
          <p className="text-xs text-center font-medium I_0_0_0a_S text-gray-600">
            Getting worked up over a get-together? over it! Celebration are
            supposed to be fun. <br /> Otherwise, we'd stay in our sweats and
            we're over that,too.
          </p>
        </div>
        <div className="flex justify-center items-center pt-3">
          <p className="text-xs text-center font-medium I_0_0_0a_S text-gray-600">
            At TablePop, we're on a mission to make events of all sizes
            enjoyable for you AND your <br /> guests. Because no one needs that
            energy.
          </p>
        </div>
      </div>

      <div className="flex justify-center">
        <div className="pt-16">
          <div className="flex flex-row">
            <div>
              <div class="max-w-sm rounded overflow-hidden shadow-lg pb-10 mr-10">
                <div class="px-6 py-4">
                  <div class="font-medium text-red-500 _opaoao text-4xl mb-5 text-center">
                    TP Petite
                  </div>
                  <h2 className="text-center text-5xl font-bold">$ 29</h2>

                  <ul className="text-xs text-gray-500 pt-5 list-disc pl-10 _l_a_d_s font-medium">
                    <li>
                      Intimate gatherings that require simplified setup,
                      uncomplicated logistics or a manageable number of vendors.
                    </li>
                    <li>
                      Collaborate 1:1 with a event planner via via online
                      messaging or text
                    </li>
                    <li>
                      Step-by-step mood board, planning guide, & budget
                      delivered within 3 days
                    </li>
                    <li>Book curated product picks and vendor picks</li>
                    <li>Event financing available</li>
                  </ul>
                </div>
                <div class="px-6 pt-4 pb-2 flex justify-center">
                  <span class="inline-block kisoso cursor-pointer rounded text-sm font-semibold text-white mr-2 mb-2 pl-28 p-3 pr-28">
                    SELECT
                  </span>
                </div>
              </div>
            </div>
            <div>
              <div class="max-w-sm rounded overflow-hidden shadow-lg pb-10">
                <div class="px-6 py-4">
                  <div class="font-medium text-red-500 _opaoao text-4xl mb-5 text-center">
                    TP Pro
                  </div>
                  <h2 className="text-center text-5xl font-bold">$ 119</h2>
                  <ul className="text-xs text-gray-500 pt-5 list-disc pl-10 _l_a_d_s font-medium">
                    <li>
                      {" "}
                      Micro-events that require coordination, detailed
                      visualization and support to manage and source various
                      vendors
                    </li>
                    <li>
                      Collaborate 1:1 with a event planner via via online
                      messaging or text
                    </li>
                    <li>
                      SFull Design and Concept Development With final concept
                      mock-up delivered within 5 days
                    </li>
                    <li>
                      Book and manage curated product and vendor picks,
                      Selection and procurement of vendor suggestions
                    </li>
                    <li>
                      Digital styling visualizations so you don’t have to
                      imagine the design take the guesswork out of layouts
                    </li>
                    <li>Customized venue search</li>
                    <li>Event insurance for limited incidentals</li>
                    <li>Event financing available</li>
                  </ul>
                </div>
                <div class="px-6 pt-4 pb-2 flex justify-center">
                  <span class="inline-block kisoso cursor-pointer rounded text-sm font-semibold text-white mr-2 mb-2 pl-28 p-3 pr-28">
                    SELECT
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
