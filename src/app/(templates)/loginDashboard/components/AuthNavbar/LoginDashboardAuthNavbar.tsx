"use client";

import { loginDashboardAuthUserLinks } from "@/data/loginDashboard";
import Link from "next/link";
import React, { useState } from "react";

const LoginDashboardAuthNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="px-6 sticky top-0 z-sticky mx-6 z-100">
      <div className="flex flex-wrap -mx-3">
        <div className="w-full max-w-full px-3">
          <nav
            className={`w-full md: max-w-[640px] lg:max-w-[1024px] xl:max-w-[1280px] ${
              isOpen ? "min-h-44 lg:min-h-0" : "min-h-0"
            } overflow-hidden transition-all duration-300 ease-in-out mx-auto absolute top-0 right-0 flex left-0 z-30 px-4 py-2 my-6 mb-0 shadow-sm rounded-xl bg-white/80 backdrop-blur-2xl backdrop-saturate-200 lg:flex-nowrap lg:justify-start`}
          >
            <div className={`w-full flex p-0 px-6 items-start lg:items-center`}>
              <Link
                href="/loginDashboard/home"
                className="py-1.75 text-sm mr-4 ml-4 whitespace-nowrap font-bold text-slate-700 lg:ml-0"
              >
                {" "}
                Argon Dashboard 2{" "}
              </Link>

              <div className="items-center flex-grow transition-all duration-500 lg-max:overflow-hidden ease lg-max:max-h-0 basis-full lg:flex lg:basis-auto">
                <ul
                  className={`flex-col ${
                    isOpen ? "flex" : "hidden"
                  } transition-all duration-300 ease-in-out absolute lg:relative top-15 lg:top-0 left-12 lg:left-0 lg:flex pl-0 mx-auto mb-0 list-none lg:flex-row xl:ml-auto`}
                >
                  {loginDashboardAuthUserLinks.map((link) => {
                    return (
                      <li key={link.id} onClick={() => setIsOpen(false)}>
                        <Link
                          className="flex items-center px-4 py-2 mr-2 font-normal transition-all ease-in-out lg-max:opacity-0 duration-250 text-sm text-slate-700 lg:px-2"
                          aria-current="page"
                          href={link.link}
                        >
                          <i
                            className={`mr-2 lg:mr-1 ${link.icon} opacity-60`}
                          ></i>
                          {link.title}
                        </Link>
                      </li>
                    );
                  })}
                </ul>

                <ul className="hidden pl-0 mb-0 list-none lg:block lg:flex-row">
                  <li>
                    <Link
                      href="/"
                      className="inline-block px-8 py-2 mb-0 mr-1 font-bold leading-normal text-center text-white align-middle transition-all ease-in bg-blue-500 border-0 rounded-lg shadow-md cursor-pointer hover:-translate-y-px hover:shadow-xs active:opacity-85 text-xs tracking-tight-rem"
                    >
                      Templates
                    </Link>
                  </li>
                </ul>
              </div>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="ml-auto px-3 py-1 leading-none transition-all ease-in-out bg-transparent border border-transparent border-solid rounded-lg shadow-none cursor-pointer text-lg lg:hidden"
                type="button"
              >
                <span className="inline-block mt-2 align-middle bg-center bg-no-repeat bg-cover w-6 h-6 bg-none">
                  <span
                    className={`w-5.5 ${
                      isOpen ? "rotate-45 top-2" : "top-0"
                    } rounded-xs relative my-0 mx-auto block h-px bg-gray-600 transition-all duration-300`}
                  ></span>
                  <span
                    className={`w-5.5 ${
                      isOpen ? "opacity-0" : ""
                    } rounded-xs mt-1.75 relative my-0 mx-auto block h-px bg-gray-600 transition-all duration-300`}
                  ></span>
                  <span
                    className={`w-5.5 ${
                      isOpen ? "-rotate-45 -top-2" : "top-0"
                    } rounded-xs mt-1.75 relative my-0 mx-auto block h-px bg-gray-600 transition-all duration-300`}
                  ></span>
                </span>
              </button>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default LoginDashboardAuthNavbar;
