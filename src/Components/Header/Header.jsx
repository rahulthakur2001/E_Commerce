import React from 'react'
import { Link } from 'react-router-dom';
import { TbHome } from "react-icons/tb";
import './Header.css'
import { HiShoppingBag } from "react-icons/hi2";
import { PiHeartBold } from "react-icons/pi";
import { TiThMenu } from "react-icons/ti";
import { GrAppsRounded } from "react-icons/gr";
import { CgProfile } from "react-icons/cg";

export const Header = () => {
  const isBottomNavRequired = true;
  return (
    <div>
      <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="max-w-screen-xl flex md:flex-row flex-col items-center justify-between mx-auto p-4 ">
          {/* Logo and Brand */}
          <a href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
          </a>

          {/* Centered Search Bar */}
          <div className="flex-grow flex justify-center md:m-0 m-5 relative w-full max-w-md md:w-full">
            <input type="text" id="search-navbar" className="block w-full p-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Your Product here..." />
              <div className="absolute inset-y-0 end-5 flex items-center pointer-events-none">
                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" fill="none" viewBox="0 0 20 20">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                </svg>
            </div>
          </div>

          {/* Right Side (Login/Profile Button) */}
          <div className="md:block hidden">
            <button type="button" className="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5">
              <span className="sr-only">Profile</span>
             <CgProfile />
            </button>
            <button type="button" className="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 ml-2">
              <span className="sr-only">Login</span>
              <svg className="w-5 h-5" aria-hidden="true" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 7l5 5-5 5M3 12h13" />
              </svg>
            </button>
          </div>
        </div>
      </nav>
      
      {isBottomNavRequired && (
        <div
          className="main-bottom-nav fixed bottom-0 left-0 right-0 bg-white"
          style={{ boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px" }}
        >
          <div className="flex justify-around py-4">
            <Link to="/" className="flex flex-col items-center">
              <TiThMenu />
              <span className="text-sm">Home</span>
            </Link>
            <Link to="/course" className="flex flex-col items-center">
              <HiShoppingBag/>
              <span className="text-sm">Cart</span>
            </Link>
            <Link to="/institution" className="flex flex-col items-center">
              <PiHeartBold />
              <span className="text-sm">Favourite</span>
            </Link>
            <Link to="/private-job" className="flex flex-col items-center">
              <GrAppsRounded />
              <span className="text-sm">More</span>
            </Link>
          </div>
        </div>
      )}
    </div>
  )
}
