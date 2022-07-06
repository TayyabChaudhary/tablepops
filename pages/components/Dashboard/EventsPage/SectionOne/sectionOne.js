import DashboardHeader from "../../Header/header";
import Head from "next/head";
import EventsFirstSection from "../firstSection/firstSection";
export default function SectionOneEvents() {
  return (
    <>
      <Head>
        <title>Dashboard Home Page</title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"
          integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g=="
        />
        
      </Head>
      <DashboardHeader />
      <EventsFirstSection />
    </>
  );
}
