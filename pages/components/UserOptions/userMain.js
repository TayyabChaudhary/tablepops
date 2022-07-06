import Head from "next/head";
import UserOptionsHeader from "./Header/header";
import UserOptionsSectionOne from "./SectionOne/sectionone";
export default function UserMainOption() {
  return (
    <>
      <Head>
        <title>Dashboard Home Page</title>
      </Head>
      <UserOptionsHeader />
      <UserOptionsSectionOne />
    </>
  );
}
