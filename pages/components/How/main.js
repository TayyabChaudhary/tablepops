import Header from "../Header/header";
import SectionOne from "./SectionOne/section_one";
import SectionTwo from "./SectionTwo/section_two";
import Head from "next/head";

function Main() {
  return (
    <div>
      <Head>
        <title>How It's Works</title>
      </Head>
      <SectionOne />
      <SectionTwo />
    </div>
  );
}
export default Main;
