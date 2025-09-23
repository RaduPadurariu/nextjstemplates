"use client";
import { travelNavLinks } from "@/data/travel";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const TravelNavbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [isActive, setIsActive] = useState(1);
  return (
    <div className="w-full relative">
      <div className="travel-container bg-[#ffffff26] flex justify-between items-center px-[15px] py-5">
        <div>
          <Link href="/travel">
            <Image
              width={145}
              height={30}
              alt="no-logo"
              src="/images/Travel/logo.png"
              priority
            />
          </Link>
        </div>
        <nav>
          <ul
            className={`flex pt-5 lg:pt-0 flex-col lg:flex-row bg-[#00000050] lg:bg-transparent z-[998] top-0 left-0 fixed lg:static bottom-0 w-[260px] lg:w-full overflow-y-auto duration-300 ease-in-out transform ${
              navOpen ? "translate-x-0" : "-translate-x-full"
            } lg:translate-x-0`}
          >
            {travelNavLinks.map((link) => {
              return (
                <li key={link.id}>
                  <Link
                    onClick={() => {
                      setNavOpen(false);
                      setIsActive(link.id);
                    }}
                    href={link.link}
                    className={`text-[13px] uppercase overflow-hidden relative w-full py-2.5 lg:py-0 pr-[22px] lg:pr-2 pl-[15px] lg:pl-2 font-semibold leading-10 lg:hover:text-[var(--travelTextSecondary)] lg:duration-300 lg:transition-all lg:ease-in-out ${
                      isActive === link.id
                        ? "text-[var(--travelTextSecondary)]"
                        : "text-white"
                    }`}
                  >
                    {link.title}
                  </Link>
                </li>
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
