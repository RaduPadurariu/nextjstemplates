"use client";
import { travelNavLinks } from "@/data/travelData";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import TravelNavbarActiveLink from "./TravelNavbarActiveLink";

const TravelNavbar = ({ isSticky }: { isSticky: boolean }) => {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <div className={`w-full ${isSticky ? "travel__navSticky" : ""}`}>
      <div
        className={`travel-container ${
          isSticky ? "" : "bg-[#ffffff26]"
        }  flex justify-between items-center px-[15px] py-5`}
      >
        <div>
          <Link href="/travel">
            <Image
              width={145}
              height={30}
              alt="no-logo"
              src="/images/travel/logo.png"
              priority
            />
          </Link>
        </div>
        <nav>
          <ul
            className={`flex pt-5 lg:pt-0 flex-col lg:flex-row bg-[#000000E0] lg:bg-transparent z-[998] top-0 left-0 fixed lg:static bottom-0 w-[260px] lg:w-full overflow-y-auto transform ${
              navOpen
                ? "translate-x-0 duration-300 ease-in-out"
                : "-translate-x-full"
            } lg:translate-x-0`}
          >
            {travelNavLinks.map((link) => {
              return (
                <TravelNavbarActiveLink
                  key={link.id}
                  link={link}
                  setNavOpen={setNavOpen}
                />
              );
            })}
          </ul>
          <div className="block lg:hidden z-[997]">
            <span
              className=" text-white block cursor-pointer text-2xl ml-5 text-center lg:hidden"
              onClick={() => setNavOpen(!navOpen)}
            >
              {navOpen ? (
                <i className="fa fa-times"></i>
              ) : (
                <i className="fa fa-bars"></i>
              )}
            </span>
          </div>
          <div
            onClick={() => setNavOpen(!navOpen)}
            className={`${
              navOpen ? "block" : "hidden"
            } fixed lg:hidden z-[996] w-full h-full top-0 left-0 bg-[#000000B3]`}
          ></div>
        </nav>
      </div>
    </div>
  );
};

export default TravelNavbar;
