import DashboardHeader from "../../Header/header";
import Imagesd from "next/image";
import Footer from "../../../Footer/footer";
import MyServicesTab from "../MyServicesTab/myservicestab";
import { useState } from "react";
import EventInvitationTab from "../InvitationTab/invitationTab";
import MessgaesTab from "../MessagesTab/messagetab";
import PaymentTabEvnt from "../PaymentTab/paymentTab";
import RoleTab from "../RoleTab/role";
export default function EventAboutFirstSection() {
  const [servicesTab, showServicesTab] = useState(false);
  const [AboutUs, showHideAboutUs] = useState(true);
  const [invitationTab, showinvitationTab] = useState(false);
  const [messageTab, showmessageTab] = useState(false);
  function myServicesTab() {
    showServicesTab(!servicesTab);
    showHideAboutUs(!AboutUs);
  }

  function invitationTabClick() {
    showinvitationTab(!invitationTab);
    
  }

  function MessagesTabClick() {
        showmessageTab(!messageTab);
  }

  return (
    <>
      <DashboardHeader />

      <main>
        <header className="bg-white shadow-0 p-8 border-t border-b-2 border-gray-300 border-solid">
          <div className="flex justify-center">
            <ul className="flex space-x-8 text-sm font-medium">
              <li>
                <a
                  href=""
                  className="hover:text-orange-500 text-orange-500 font-medium"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  
                  className="hover:text-orange-500 font-medium cursor-pointer text-gray-700"
                >
                  My Services
                </a>
              </li>
              <li>
                <a
                  className="hover:text-orange-500 font-medium cursor-pointer text-gray-700"
                >
                  Invitations
                </a>
              </li>
              <li>
                <a
                
                  className="hover:text-orange-500 cursor-pointer font-medium text-gray-700"
                >
                  Messages
                </a>
              </li>
              <li>
                <a
                  
                  className="hover:text-orange-500 cursor-pointer font-medium text-gray-700"
                >
                  Payment
                </a>
              </li>
              <li>
                <a
                 onClick={MessagesTabClick}
                  className="hover:text-orange-500 cursor-pointer font-medium text-gray-700"
                >
                  Role
                </a>
              </li>
            </ul>
          </div>
        </header>

        <div className="p-0">
          {/* <div
            style={{
              display: AboutUs ? "block" : "none",
            }}
          >
            <div className="flex flex-row">
              <div>
                <Imagesd
                  src="/image 56.png"
                  width="300px"
                  height="250px"
                  className="object-cover"
                />
              </div>
              <div className="pl-16">
                <h3 className="text-2xl _opaoao">Kelly Weds Rayn</h3>
                <p className="text-sm text-gray-500 mt-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor <br /> incididunt ut labore et dolore magna
                  aliqua. Ut enim ad minim veniam, quis <br /> nostrud
                  exercitation ullamco laboris nisi ut aliquip ex ea commodo
                  consequat.
                </p>
                <ul className="pt-5">
                  <li className="flex items-center text-sm font-medium">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="15"
                      height="15"
                      viewBox="0 0 24 24"
                      className="mr-3"
                    >
                      <path d="M12 0c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z" />
                    </svg>
                    Bliss on the Ocean, 7th Street, LA, California 237446
                  </li>
                  <li className="pt-5 text-sm text-gray-500">
                    <i class="fa fa-calendar-o mr-3" aria-hidden="true"></i>
                    20th Feb, 2022
                    <span>
                      <i class="fa fa-clock-o mr-2 ml-3" aria-hidden="true"></i>
                      10:00 AM onwards
                    </span>
                  </li>
                  <li className="pt-5 text-sm text-gray-500">
                    <i class="fa fa-users mr-3" aria-hidden="true"></i>
                    120 Guests
                    <span>
                      <i
                        class="fa fa-envelope-o mr-2 ml-3"
                        aria-hidden="true"
                      ></i>
                      80 Invitation Accepted
                    </span>
                    <span className="pl-2 text-sm text-gray-500">
                      40 Invitation Pending
                    </span>
                  </li>
                </ul>
                <div className="pt-8">
                  <div className="flex flex-row">
                    <button class="bg-transparent hover:bg-blue-800 text-blue-800 font-semibold hover:text-white py-2 px-8 text-sm border border-blue-800 hover:border-transparent rounded">
                      <i class="fa fa-pencil mr-2" aria-hidden="true"></i>
                      Edit
                    </button>
                    <button class="bg-transparent ml-3 hover:bg-blue-800 text-blue-800 font-semibold hover:text-white py-2 px-8 text-sm border border-blue-800 hover:border-transparent rounded">
                      <i class="fa fa-users mr-2" aria-hidden="true"></i>
                      Invite People
                    </button>
                    <button class="bg-transparent ml-3 hover:bg-blue-800 text-blue-800 font-semibold hover:text-white py-2 px-8 text-sm border border-blue-800 hover:border-transparent rounded">
                      <i class="fa fa-share-alt mr-2" aria-hidden="true"></i>
                      Share
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div> */}

          <div className="p-10">
            <div style={{ display: servicesTab ? "block" : "none" }}>
              <MyServicesTab />
            </div>

            <div style={{ display: invitationTab ? "block" : "none" }}>
              <EventInvitationTab />
            </div>
          </div>
          {/* <div>
                <MessgaesTab />
            </div> */}
            {/* <div>
                <PaymentTabEvnt />
            </div> */}

            <div style={{display: messageTab ? "block": "none"}}>
                <RoleTab />
            </div>
        </div>

        <div className="pt-20">
          <div className="bg-pink-50 p-10">
            <Footer />
          </div>
        </div>
      </main>
    </>
  );
}
