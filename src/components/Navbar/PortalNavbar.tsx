"use client";
import { portalNavbar } from "@/data/portalData";
import Image from "next/image";
import { useEffect, useState } from "react";

const PortalNavbar = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  return (
    <section id="portalNavbar" className="w-full portalHeader">
      <header className={`${isSticky ? "navSticky" : ""} h-20`}>
        <div className="portal-container">
          <div className="flex justify-between items-center transition-all duration-500">
            <div>
              <a href="#portalNavbar">
                <Image
                  src="/images/portal/logo.png"
                  alt="no-logo"
                  width={83}
                  height={83}
                />
              </a>
            </div>

            <nav className="flex items-center">
              <ul
                className={`${
                  open ? "flex" : "hidden"
                } md:flex flex-col md:flex-row absolute md:relative left-0 md:left-auto top-[80px] md:top-auto w-full text-black md:text-white overflow-hidden bg-white md:bg-transparent z-50 text-base font-medium py-3 md:py-0`}
                id="menuitem"
              >
                {portalNavbar.map((link) => {
                  return (
                    <li
                      key={link.id}
                      className="inline-block mt-2.5 md:mt-0 mb-2.5 md:mb-0 m-12 md:m-0 md:mr-10"
                    >
                      <a href={link.link}>{link.title}</a>
                    </li>
                  );
                })}
              </ul>
              <button className="hidden md:inline-block outline-none text-xs text-white py-3 px-[30px] rounded-[5px] border-2 border-white cursor-pointer whitespace-nowrap">
                Get Started
              </button>
            </nav>
            <span
              className=" text-white block cursor-pointer text-2xl ml-5 text-center md:hidden"
              onClick={() => setOpen(!open)}
              data-testid="burger"
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
