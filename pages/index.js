import Head from "next/head";
import MainFile from "./components/Dashboard/mainfile";
import Header from "./components/Header/header";
import SectionFour from "./components/Section_Four/section_four";
import SectionOne from "./components/Section_one/section_one";
import SectionThree from "./components/Section_Three/sectionThree";
import SectionTwo from "./components/Section_two/section_two";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Home Page</title>
      </Head>
      <Header />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />

      <MainFile />
    </div>
  );
}
