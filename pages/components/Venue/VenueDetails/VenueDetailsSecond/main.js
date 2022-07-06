import Head from "next/head";
import DashboardHeader from "../../../Dashboard/Header/header";
import VenueDetailsSec from "./venuedetailssec";
export default function VenueDetailsMain() {
  return (
    <div>
      <Head>
        <title>Venue Details 2</title>
      </Head>

      <DashboardHeader />

      <VenueDetailsSec />
    </div>
  );
}
