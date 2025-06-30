"use client";
import { portalNavbar } from "@/data/portalData";
import Link from "next/link";
import React, { useState } from "react";

const PortalNavbar = () => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <section className="fixed bg-gray-500 w-full">
      <header>
        <div className="portal-container">
          <div className="flex justify-between items-center transition-all duration-500">
            <div>
              <a href="#portalHero">
                <img
                  className="w-auto"
                  src="/images/portal/logo.png"
                  alt="no-logo"
                />
              </a>
            </div>

            <nav className="flex items-center">
              <ul
                className={`${
                  open ? "flex" : "hidden"
                } md:flex flex-col md:flex-row absolute md:relative left-0 md:left-auto top-[70px] md:top-auto w-full bg-white md:bg-gray-500 text-black md:text-white overflow-hidden z-50 rounded-3xl text-base md:text-lg`}
                id="menuitem"
              >
                {portalNavbar.map((link) => {
                  return (
                    <li
                      key={link.id}
                      className="inline-block mt-2.5 md:mt-0 mb-2.5 md:mb-0 m-12 md:m-0 md:mr-10 tracking-wide"
                    >
                      <a href={link.link}>{link.title}</a>
                    </li>
                  );
                })}
              </ul>
              <button className="hidden md:inline-block outline-none text-sm text-white py-3 px-[30px] rounded-[5px] border-2 border-white cursor-pointer whitespace-nowrap">
                Get Started
              </button>
            </nav>
            <span
              className=" text-white block cursor-pointer text-2xl ml-5 text-center md:hidden"
              onClick={() => setOpen(!open)}
            >
              {open ? (
                <i className="fa fa-times"></i>
              ) : (
                <i className="fa fa-bars"></i>
              )}
            </span>
          </div>
        </div>
      </header>
    </section>
  );
};

export default PortalNavbar;
