import React from 'react'
import Logo from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import the icons you need
import {
    faSearch,
    faBell,
  } from "@fortawesome/free-solid-svg-icons";
export default function VendorOnBoardHeader() {
  return (
    <div>
       <header className="w-full fixed p-3 bg-white shadow-sm z-100 Op_aoaoa">
        <div className="flex justify-between items-center pl-8 pr-8">
          <div className="logo">
            <Logo src="/logo.png" alt="me" width="80px" height="40px" />
          </div>
          <div>
            <ul className="flex space-x-8 text-sm text-gray-600 items-center">
              <li>
                <Link href="">
                  <a>Dashboard</a>
                </Link>
              </li>
              <li>
                <a href="/components/Dashboard/EventsPage/SectionOne/sectionOne">
                  Events
                </a>
              </li>
              <li>
                <a>
                Inventory
                </a>
              </li>
              <li>
                <a>
                My Packages
                </a>
              </li>
              <li>
                <a href="">Transactions</a>
              </li>
              <li>
                <a href="/components/Dashboard/MyEvents/myevents">
                  <FontAwesomeIcon
                    icon={faBell}
                    style={{ fontSize: 13, color: "#333" }}
                  />
                </a>
              </li>
              <li>
                <div className="w-10 h-10 bg-blue-400 rounded-full flex justify-center items-center">
                  <h2 className="text-white font-medium cursor-pointer">AB</h2>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </div>
  )
}
