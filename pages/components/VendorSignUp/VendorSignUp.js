import React from "react";
import MainHeader from "../MainHeader/mainheader";
import Head from 'next/head';
import Section2 from "./Sections/Section2";
export default function VendorSignUp() {
  return (
    <div>

        <Head>
            <title>Vendor Sign Up Page</title>
        </Head>

      <section className="vendor_signup">
        <MainHeader />

        <div className="flex justify-center items-center pt-52">
            <div className="flex flex-col items-center">
          <h1 className="text-white items-center text-center mb-4">
            Showcase your brand in <br /> front of customers
          </h1>
          <p className="text-white">
            Tablepop offers a beautiful, customized way to build your brand, <br/>
            stand out from competitors, and enhance your marketing strategy.
          </p>
          </div>
        </div>
      </section>

      <Section2 />
    </div>
  );
}
