import Head from "next/head";
import SectionOnePhotographer from "./SectionOne/sectionone";
import VenueHeader from "../Header/header";
import Footer from '../../Footer/footer'
export default function PhotographerMain() {
  return (
    <div>
      <Head>
        <title>Photographer Page</title>
        <header className="_photographyHeader">
          <VenueHeader />
          <div className="flex justify-center items-center pt-16">
            <div className="flex flex-col items-center">
              <h1 className="text-white uppercase text-5xl mb-3 _opaoao">
                Photographers
              </h1>
              <p className="text-white">
                Get your party started with our event care takers
              </p>
            </div>
          </div>
        </header>
      </Head>
      <div className="pt-16">
        <SectionOnePhotographer />
      </div>

      <div className="flex justify-center pt-16 items-center">
        <div className="mr-3">
          <a href="" className="text-2xl text-blue-900 hover:underline">
            1
          </a>
        </div>
        <div className="mr-3">
          <a href="" className="text-2xl text-blue-900 hover:underline">
            2
          </a>
        </div>
        <div className="mr-3">
          <a href="" className="text-2xl text-blue-900 hover:underline">
            3
          </a>
        </div>
        <div className="mr-3">
          <a href="" className="text-2xl text-blue-900 hover:underline">
            4
          </a>
        </div>
        <div className="mr-3">
          <a href="" className="text-2xl text-blue-900 hover:underline">
            5
          </a>
        </div>
        <div className="mr-3">
          <a href="" className="text-2xl text-blue-900 hover:underline">
            6
          </a>
        </div>
        <div className="mr-3">
          <a href="" className="text-2xl text-blue-900 hover:underline">
            7
          </a>
        </div>
        <div className="mr-3">
          <a href="" className="text-sm text-blue-900 underline">
            Next
          </a>
        </div>
      </div>

      <div className="p-10 _p_a_w_3_d_x_c_v_v mt-20">
          <Footer />
      </div>
    </div>
  );
}
