import React from "react";
import TravelNavbar from "./Navbar/TravelNavbar";
import { travelHeaderLinks, travelSocialIcons } from "@/data/travel";

const TravelHeader = () => {
  return (
    <header className="w-full fixed">
      <div className="w-full">
        <div className="travel-container flex justify-between">
          <ul className="flex items-center py-1.5">
            {travelHeaderLinks.map((link) => {
              return (
                <button
                  key={link.id}
                  className="mr-2 sm:mr-[15px] text-xs text-white hover:text-[var(--travelTextSecondary)] cursor-pointer duration-300 ease-in-out transition-all"
                >
                  {link.title}
                </button>
              );
            })}
          </ul>
          <ul className="flex">
            {travelSocialIcons.map((icon) => {
              return (
                <li key={icon.id} className="ml-[15px]">
                  <i
                    className={`${icon.iconClass} text-white hover:text-[var(--travelTextSecondary)] duration-300 transition-all ease-in-out text-xs`}
                  ></i>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <TravelNavbar />
    </header>
  );
};

export default TravelHeader;
