import React, { useEffect } from "react";
import VendorOnBoardHeader from "../VendorOnBoard/Header/VendorOnBoardHeader";
import Image from "next/image";
import Footer from "../Footer/footer";
import NoPAckImage from '../../../public/no_pack.png'
export default function MyPackages() {
  useEffect(() => {
    document.title = "My Packges Page";
  }, []);
  return (
    <div>
      <VendorOnBoardHeader />

      <section>
        <div className="flex justify-center pt-28">
          <h1 className="text-4xl">No Packages</h1>
        </div>
        <div className="flex justify-center pt-5">
          <p className="text-sm text-gray-600">
            To get satrted you can create packages for specific events like
            wedding or birthday
          </p>
        </div>
        <div className="flex justify-center pt-5">
          <Image
            src={NoPAckImage}
            width="500"
            height="400"
            alt="no Pack Image"
          />
        </div>
        <div className="flex justify-center pt-14 mb-32">
          <a href="/components/MyPackages/MyPackageTwo/MyPackageTwo">
            <button className="Addnewpackage text-white">
              Add New Package
            </button>
          </a>
        </div>
      </section>

      <div className="p-10 _p_a_w_3_d_x_c_v_v ">
        <Footer />
      </div>
    </div>
  );
}
