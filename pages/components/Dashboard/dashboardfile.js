import DashboardHeader from "./Header/header";
import Head from "next/head";
import FirstSection from "./FirstSection/firstSection";

export default function dashboardFile() {
  return (
    <>
      <Head>
        <title>Dashboard Page</title>
    
      </Head>

      <DashboardHeader />
      <FirstSection />
    </>
  );
}