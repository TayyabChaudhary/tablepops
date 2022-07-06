import ImageS from "next/image";
import Footer from "../Footer/footer";
import SecImage from '../../../public/sec.png';
import Sec3Image from '../../../public/sec3.png'
export default function SectionFour() {
  return (
    <section>
      <div className="flex justify-between items-center pt-20">
        <div className="pl-20">
          <h2 className="text-5xl text-center pl-8 _opaoao">
            Become a Planner
          </h2>
          <p className="text-sm font-medium mt-3 pl-8">
            TablePop provides Planners a platform for <br /> building their
            portfolio, showcasing their <br /> skills and setting their
            schedules
          </p>
          <div class="px-6 pt-4 pb-2 flex justify-center">
            <span class="inline-block kisoso cursor-pointer rounded text-sm font-semibold text-white mr-2 mb-2 pl-28 p-3 pr-28">
              GET STARTED
            </span>
          </div>
        </div>
        <div>
          <ImageS src={SecImage} width="656px" height="400px" />
        </div>
      </div>
      <div className="flex justify-between items-center pt-20">
        <div>
          <ImageS src={Sec3Image} width="656px" height="400px" />
        </div>

        <div className="pr-20">
          <h2 className="text-5xl text-center pl-8 _opaoao">
            Become a Vendor/Pro
          </h2>
          <p className="text-sm font-medium mt-3 pl-8">
            TablePop provides Planners a platform for <br /> building their
            portfolio, showcasing their <br /> skills and setting their
            schedules
          </p>
          <div class="px-6 pt-4 pb-2">
            <span class="inline-block kisoso cursor-pointer rounded text-sm font-semibold text-white mr-2 mb-2 pl-28 p-3 pr-28">
              GET STARTED
            </span>
          </div>
        </div>
      </div>

      {/* LAst Section */}

      <section className="bg-pink-50 mt-20 p-8">
        <div>
          <h2 className="text-5xl _opaoao font-bold">Blogs</h2>
        </div>

        <div className="flex flex-row mt-10 justify-between">
          <div>
            <div class="max-w-sm w-sm lg:max-w-full lg:flex shadow-sm mt-8 h-auto oaia9aia">
              <div className="flex flex-row">
                <div>
                  <ImageS src="/secd.png" width="140px" height="130px" />
                </div>
                <div class="border-r border-b border-l pl-10 border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                  <div class="mb-8">
                    <div class="text-gray-900 font-bold text-xl">
                      Summer Indigo Tablescapes for your next Event
                    </div>
                    <p class="text-gray-700 text-sm mt-3">
                      In publishing and graphic design, Lorem ipsum is a
                      placeholder <br /> text commonly used to demonstrate the
                      visual form of a doc...
                    </p>
                    <a
                      href="/"
                      className="text-sm text-orange-500 font-medium _p_a_s_S"
                    >
                      READ MORE{" "}
                      <i class="fa fa-arrow-right" aria-hidden="true"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="max-w-sm w-sm lg:max-w-full lg:flex shadow-sm mt-8 h-auto oaia9aia">
              <div className="flex flex-row">
                <div>
                  <ImageS src="/image 17.png" width="140px" height="130px" />
                </div>
                <div class="border-r border-b border-l pl-10 border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                  <div class="mb-8">
                    <div class="text-gray-900 font-bold text-xl">
                      Summer Indigo Tablescapes for your next Event
                    </div>
                    <p class="text-gray-700 text-sm mt-3">
                      In publishing and graphic design, Lorem ipsum is a
                      placeholder <br /> text commonly used to demonstrate the
                      visual form of a doc...
                    </p>
                    <a
                      href="/"
                      className="text-sm text-orange-500 font-medium _p_a_s_S"
                    >
                      READ MORE{" "}
                      <i class="fa fa-arrow-right" aria-hidden="true"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="max-w-sm w-sm lg:max-w-full lg:flex shadow-sm mt-8 h-auto oaia9aia">
              <div className="flex flex-row">
                <div>
                  <ImageS src="/image 18.png" width="140px" height="130px" />
                </div>
                <div class="border-r border-b border-l pl-10 border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                  <div class="mb-8">
                    <div class="text-gray-900 font-bold text-xl">
                      Summer Indigo Tablescapes for your next Event
                    </div>
                    <p class="text-gray-700 text-sm mt-3">
                      In publishing and graphic design, Lorem ipsum is a
                      placeholder <br /> text commonly used to demonstrate the
                      visual form of a doc...
                    </p>
                    <a
                      href="/"
                      className="text-sm text-orange-500 font-medium _p_a_s_S"
                    >
                      READ MORE{" "}
                      <i class="fa fa-arrow-right" aria-hidden="true"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        
          <div className="pr-48 relative">
          <div className="categories bg-white absolute -right-8 top-0 flex justify-center items-center">
          <div className="text">
          CATEGORIES
          </div>
      </div>
            <ul className="_l_a_d_sui">
              <li className="text-2xl _opaoao">Styling</li>
              <li className="text-2xl _opaoao">Cuisine</li>
              <li className="text-2xl _opaoao">Interior</li>
              <li className="text-2xl _opaoao">Guests</li>
              <li className="text-2xl _opaoao">Styling</li>
              <li className="text-2xl _opaoao">Cuisine</li>
              <li className="text-2xl _opaoao">Interior</li>
              <li className="text-2xl _opaoao">Guests</li>
            </ul>
          </div>
        </div>
        <div className="flex justify-center pt-16 pb-10">
          <div className="divivider"></div>
        </div>
        <Footer />
      </section>
    </section>
  );
}
