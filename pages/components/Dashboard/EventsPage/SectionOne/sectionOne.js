import DashboardHeader from "../../Header/header";
import Head from "next/head";
import EventsFirstSection from "../firstSection/firstSection";
export default function SectionOneEvents() {
  return (
    <>
      <Head>
        <title>Dashboard Home Page</title>        
      </Head>
      <DashboardHeader />
      <EventsFirstSection />
    </>
  );
}
