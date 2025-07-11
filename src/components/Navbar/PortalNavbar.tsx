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
              <button
                onClick={() => {
                  document
                    .getElementById("portalNavbar")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                <Image
                  src="/images/portal/logo.png"
                  alt="no-logo"
                  width={83}
                  height={83}
                />
              </button>
            </div>

            <nav className="flex items-center">
              <ul
                className={`${
                  open ? "flex" : "hidden"
                } md:flex flex-col md:flex-row absolute md:relative left-0 md:left-auto top-[80px] md:top-auto w-full text-black md:text-white overflow-hidden bg-white md:bg-transparent z-50 text-base font-medium py-3 md:py-3`}
                id="menuitem"
              >
                {portalNavbar.map((link) => {
                  return (
                    <li
                      key={link.id}
                      className="block pt-2.5 md:pt-0 pb-2.5 md:pb-0 p-12 md:p-0 md:pr-10 h-full cursor-pointer"
                    >
                      <button
                        className="h-full flex py-0.5 md:py-4 cursor-pointer"
                        onClick={() => {
                          document
                            .getElementById(`${link.link}`)
                            ?.scrollIntoView({ behavior: "smooth" });
                        }}
                      >
                        {link.title}
                      </button>
                    </li>
                  );
                })}
              </ul>
              <button className="shop__navbar_starterBtn hidden md:inline-block outline-none text-xs text-white py-3 px-[30px] rounded-[5px] border-2 border-white cursor-pointer whitespace-nowrap">
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
