"use client";
import { loginDashboardNotificationList } from "@/data/loginDashboardData";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

import useAuthStore from "@/templates/LoginDashboard/store/useAuthStore";
import LoginDashboardNavbar from "./DashboardNavbar/LoginDashboardNavbar";

const LoginDashboardHeader = () => {
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const [isOptionsOpen, setIsOptionsOpen] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [activeTitle, setActiveTitle] = useState("Dashboard");
  const { isAuthenticated, logout, isInitialized } = useAuthStore();
  return (
    <nav
      className="relative flex items-center justify-between px-0 py-2 mx-6 transition-all ease-in shadow-none duration-250 rounded-2xl lg:flex-nowrap lg:justify-start"
      // navbar-main
      // navbar-scroll="false"
    >
      <div className="flex flex-col sm:flex-row sm:items-center justify-between w-full px-0 sm:px-4 py-1 mx-auto flex-wrap-inherit">
        <h6 className="mb-0 font-bold text-white capitalize">{activeTitle}</h6>
        <div className="flex items-center justify-between mt-2 sm:mt-0 md:mr-0 ">
          {/* Search Input */}
          <div className="flex items-center md:ml-auto md:pr-4">
            <div className="relative flex flex-wrap items-stretch w-full transition-all rounded-lg ease">
              <span className="text-sm ease leading-5.6 absolute z-50 -ml-px flex h-full items-center whitespace-nowrap rounded-lg rounded-tr-none rounded-br-none border border-r-0 border-transparent bg-transparent py-2 px-2.5 text-center font-normal text-slate-500 transition-all">
                <i className="fas fa-search"></i>
              </span>
              <input
                type="text"
                className="pl-9 text-sm focus:shadow-primary-outline ease w-1/100 leading-5.6 relative -ml-px block min-w-0 flex-auto rounded-lg border border-solid border-gray-300  bg-white bg-clip-padding py-2 pr-3 text-gray-700 transition-all placeholder:text-gray-500 focus:border-blue-500 focus:outline-none focus:transition-shadow"
                placeholder="Type here..."
              />
            </div>
          </div>
          {/* Navbar */}
          <ul className="flex flex-row justify-end pl-2 mb-0 list-none md-max:w-full">
            {/* Sign In */}
            {!isInitialized ? (
              // loader (până verificăm auth)
              <li className="flex items-center sm:w-[62px] justify-center">
                {/* <Image
                  src="/images/loginDashboard/loginDashboard_loader.svg"
                  alt="Loading..."
                  width={20}
                  height={20}
                /> */}
              </li>
            ) : isAuthenticated ? (
              // log out
              <li className="flex items-center">
                <Link
                  href="/loginDashboard/auth"
                  onClick={logout}
                  className="block px-0 py-2 text-sm font-semibold text-white transition-all ease-nav-brand"
                >
                  <i className="fa fa-sign-out-alt sm:mr-1"></i>
                  <span className="hidden sm:inline">Log out</span>
                </Link>
              </li>
            ) : (
              // sign in
              <li className="flex items-center">
                <Link
                  href="/loginDashboard/auth"
                  className="block px-0 py-2 text-sm font-semibold text-white transition-all ease-nav-brand"
                >
                  <i className="fa fa-user sm:mr-1"></i>
                  <span className="hidden sm:inline">Sign In</span>
                </Link>
              </li>
            )}

            {/* Burger button */}
            <li className="flex items-center pl-4 xl:hidden">
              <button
                className="block p-0 text-sm text-white transition-all ease-nav-brand"
                onClick={() => setIsNavOpen(!isNavOpen)}
              >
                <div className="w-4.5 overflow-hidden">
                  <i className="ease mb-0.75 relative block h-0.5 rounded-sm bg-white transition-all"></i>
                  <i className="ease mb-0.75 relative block h-0.5 rounded-sm bg-white transition-all"></i>
                  <i className="ease relative block h-0.5 rounded-sm bg-white transition-all"></i>
                </div>
              </button>
            </li>

            {/* Options  */}
            <li className="flex items-center px-4">
              <button
                onClick={() => setIsOptionsOpen(!isOptionsOpen)}
                className="p-0 text-sm text-white transition-all ease-nav-brand"
              >
                <i
                  // fixed-plugin-button-nav
                  className="cursor-pointer fa fa-cog"
                ></i>
              </button>
            </li>

            {/* Notification */}
            <li className="relative flex items-center pr-2">
              <p className="hidden transform-dropdown-show"></p>
              <button
                onClick={() => setIsNotificationOpen(!isNotificationOpen)}
                className="block p-0 text-sm text-white transition-all ease-nav-brand"
                //  dropdown-trigger aria-expanded="false"
              >
                <i className="cursor-pointer fa fa-bell"></i>
              </button>

              {isNotificationOpen && (
                <ul
                  dropdown-menu
                  className="text-sm transform-dropdown lg:shadow-3xl min-w-44 absolute right-0 top-9 z-50  list-none rounded-lg border-0 border-solid border-transparent  bg-white bg-clip-padding px-2 py-4 text-left text-[var(--dashboardTextPrimary)] transition-all sm:-mr-6 lg:absolute lg:right-0 lg:left-auto lg:mt-2 lg:block lg:cursor-pointer"
                >
                  {loginDashboardNotificationList.map((notification) => {
                    return (
                      <li key={notification.id} className="relative mb-2">
                        <div className=" ease py-1.5 clear-both block w-full whitespace-nowrap rounded-lg bg-transparent px-4 duration-300 hover:bg-[var(--dashboardBGHover)] lg:transition-colors">
                          <div className="flex py-1">
                            <div className="my-auto">
                              <Image
                                src={notification?.img}
                                alt="no-notification-img"
                                width={800}
                                height={800}
                                className="inline-flex items-center justify-center mr-4 text-sm text-white h-9 w-9 max-w-none rounded-xl"
                              />
                            </div>
                            <div className="flex flex-col justify-center">
                              <h6 className="mb-1 text-sm font-normal leading-normal ">
                                <span className="font-bold">
                                  {notification?.title}
                                </span>{" "}
                                {notification?.from}
                              </h6>
                              <p className="mb-0 text-xs leading-tight text-[var(--dashboardTextMuted)] ">
                                <i className="mr-1 fa fa-clock"></i>
                                {notification?.time}
                              </p>
                            </div>
                          </div>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              )}
            </li>
          </ul>
        </div>
      </div>
      <LoginDashboardNavbar
        isNavOpen={isNavOpen}
        setIsNavOpen={setIsNavOpen}
        setActiveTitle={setActiveTitle}
      />
    </nav>
  );
};

export default LoginDashboardHeader;
