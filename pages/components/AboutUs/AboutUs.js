import React from "react";
import Head from "next/head";
import MainHeader from "../MainHeader/mainheader";
export default function AboutUs() {
  return (
    <div>
      <Head>
        <title>About Us Page</title>
      </Head>
      <div className="about_us_bg">
        <MainHeader />

        <div className="about_us_content pl-20">
          <h1 className="text-6xl text-white pt-48">
            What if <br /> Throwing an amazing Party <br /> Was Actually Fun and
            Easy?
          </h1>
          <p className="text-white mt-3">
            Would you celebrate bigger? Would you host more? These are the <br/>
            questions we asked ourselves years ago.
          </p>
        </div>
      </div>
    </div>
  );
}
