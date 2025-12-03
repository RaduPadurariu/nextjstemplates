"use client";

import Link from "next/link";
import React, { useState } from "react";

import Image from "next/image";
import FashionNavList from "./FashionNavList";

const FashionNavbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  return (
    <nav className="py-5 z-1000">
      <div
        onClick={() => setNavOpen(!navOpen)}
        className={` text-black text-center block md:hidden cursor-pointer text-lg hover:text-[var(--fashionTextSecondary)] transition-all
         duration-300 ease-in-out`}
      >
        <i className="fa fa-bars"></i>
      </div>

      <div
        className={`flex flex-col items-center justify-between bg-[var(--fashionTextHeading)] md:bg-white w-full top-0 bottom-0 left-0 fixed md:static transform transition-transform duration-300 ease-in-out ${
          navOpen ? "translate-y-0" : "-translate-y-full md:translate-y-0"
        }`}
      >
        <div
          className={`${
            navOpen ? " w-full flex py-4 justify-between" : "hidden"
          } md:hidden`}
        >
          <div></div>
          <Link href="/fashion" className="">
            <Image
              alt="logo-img"
              src="/images/fashion/logo_responsive.png"
              width={234}
              height={101}
              className="w-[150px]"
              priority
            />
          </Link>
          <div
            onClick={() => setNavOpen(!navOpen)}
            className={` text-white text-center md:hidden cursor-pointer text-xl mr-5`}
          >
            <i className="fa fa-times"></i>
          </div>
        </div>
        <FashionNavList setNavOpen={setNavOpen} variant="header" />
        <div></div>
      </div>
    </nav>
  );
};

export default FashionNavbar;
