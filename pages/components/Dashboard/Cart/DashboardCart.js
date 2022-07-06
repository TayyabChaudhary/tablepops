import Head from "next/head"
import DashboardHeader from "../Header/header"
import CartDashboardSection from "./Section/cartsection"



export default function DashboardCart() {
  return (
    <div>
        <Head>
            <title>
                Dashboard Cart
            </title>
        </Head>

        <DashboardHeader />

        <CartDashboardSection />
    </div>
  )
}
