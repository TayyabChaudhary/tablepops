import DashboardHeader from "./Header/header";
import Head from "next/head";
import FirstSection from "./FirstSection/firstSection";

export default function dashboardFile() {
  return (
    <>
      <Head>
        <title>Dashboard Page</title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"
          integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g=="
        />
    
      </Head>

      <DashboardHeader />
      <FirstSection />
    </>
  );
}