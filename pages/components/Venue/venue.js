import Head from "next/head";
import VendorHeader from "../Vendor_List/Header/venderheader";
import VenueHeader from "./Header/header";
import VenueSectionOne from "./SectionOne/sectionOne";
export default function DashboardVenue() {
  return (
    <>
      <Head>
        <title>Venue Listing Page</title>
      </Head>

      <div className="venue_header">
        <VenueHeader />
        <div className="flex justify-center items-center pt-16">
          <h1 className="text-white text-6xl _opaoao uppercase">
            Venue Listing
          </h1>
        </div>
        <div className="flex justify-center">
          <p className="text-sm text-white mt-3">
            Get your party started with our event care takers
          </p>
        </div>
      </div>

      <VenueSectionOne />
    </>
  );
}
