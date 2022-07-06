import ImageS from "next/image";
import Footer from "../../Footer/footer";

export default function SectionThree() {
  return (
    <div>
      <div className="pt-16">
        <div className="flex justify-center items-center">
          <h2 className="text-3xl font-medium ready_to_go_text">
            Choose from our Ready-to-go Packages
          </h2>
        </div>
        <div className="flex justify-center items-center pt-3">
          <p className="text-center font-medium text-gray-600 ready_to_go_p">
            Getting worked up over a get-together? over it! Celebration are
            supposed to be fun. <br /> Otherwise, we'd stay in our sweats and
            we're over that,too.
          </p>
        </div>
        <div className="flex justify-center items-center pt-3">
          <p className="ready_to_go_p text-center font-medium text-gray-600">
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
              <div className="max-w-sm rounded overflow-hidden shadow-lg pb-10 mr-10">
                <div className="px-6 py-4">
                  <div className="font-medium text-red-500 _opaoao text-4xl mb-2 text-center">
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
                <div className="px-6 pt-4 pb-2 flex justify-center">
                  <span className="inline-block kisoso cursor-pointer rounded text-sm font-semibold text-white mr-2 mb-2 pl-28 p-3 pr-28">
                    SELECT
                  </span>
                </div>
              </div>
            </div>
            <div>
              <div className="max-w-sm rounded overflow-hidden shadow-lg pb-10">
                <div className="px-6 py-4">
                  <div className="font-medium text-red-500 _opaoao text-4xl mb-2 text-center">
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
                <div className="px-6 pt-4 pb-2 flex justify-center">
                  <span className="inline-block kisoso cursor-pointer rounded text-sm font-semibold text-white mr-2 mb-2 pl-28 p-3 pr-28">
                    SELECT
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center pt-20">
        <div>
          <ImageS src="/image 28.png" width="600px" height="400px" />
        </div>
        <div className="pr-32">
          <h2 className="text-5xl _opaoao">Why Table Pop?</h2>
          <p className="get_access_p font-normal mt-3 pl-0 text-gray-500">
            Get access to persoalized event experience at your <br />{" "}
            fingertips?
            <br />
            <br />
            Determine the level of support & services then <br /> choose the
            vendor & professionals required to <br /> excute your event and
            we'll create a proposal the <br /> suits your events specifications.
          </p>
          <div className="px-0 pt-4 pb-2 flex justify-start">
            <span className="inline-block kisoso cursor-pointer rounded text-sm font-semibold text-white mr-2 mb-2 pl-16 p-3 pr-16">
              GET STARTED
            </span>
          </div>
        </div>
      </div>

      <div className="bg-pink-50 p-10 mt-10">
        <Footer/>
      </div>
    </div>
  );
}
