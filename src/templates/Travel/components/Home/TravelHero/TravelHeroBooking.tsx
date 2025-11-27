"use client";

import { travelHeroBookingTabs } from "@/data/travelData";
import React, { useState } from "react";

const TravelHeroBooking = () => {
  const [activeTab, setActiveTab] = useState("flights");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  return (
    <div className="relative w-full md:w-1/2 lg:w-1/3 my-[40px]">
      <ul className="flex" id="myTab" role="tablist">
        {travelHeroBookingTabs.map((tab) => {
          return (
            <li
              key={tab.id}
              className={` text-[13px] mr-[1px] py-2 px-4 cursor-pointer transition-all duration-300 ease-in-out ${
                activeTab === tab.id
                  ? "bg-white text-[var(--travelTextHeading)]"
                  : "bg-[#FFFFFF40] text-white"
              }`}
            >
              <button
                className={`font-bold uppercase cursor-pointer `}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.title}
              </button>
            </li>
          );
        })}
      </ul>
      <div className="bg-white" id="">
        <div
          className=""
          id="flight"
          role="tabpanel"
          aria-labelledby="flight-tab"
        >
          <form
            className="py-[40px] px-[30px] text-center"
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              className="border border-[#eee] text-[13px] font-normal mb-2.5 rounded-none py-[0.675rem] px-[0.75rem] w-full placeholder-[#333] text-[#333]"
              name="name"
              placeholder="From "
            />
            <input
              type="text"
              className="border border-[#eee] text-[13px] font-normal mb-2.5 rounded-none py-[0.675rem] px-[0.75rem] w-full placeholder-[#333] text-[#333]"
              name="to"
              placeholder="To "
            />
            <input
              type="text"
              className="border border-[#eee] text-[13px] font-normal mb-2.5 rounded-none py-[0.675rem] px-[0.75rem] w-full placeholder-[#333] text-[#333]"
              name="start"
              placeholder="Start "
            />
            <input
              type="text"
              className="border border-[#eee] text-[13px] font-normal mb-2.5 rounded-none py-[0.675rem] px-[0.75rem] w-full placeholder-[#333] text-[#333]"
              name="return"
              placeholder="Return "
            />
            <input
              type="number"
              min="1"
              max="20"
              className="border border-[#eee] text-[13px] font-normal mb-2.5 rounded-none py-[0.675rem] px-[0.75rem] w-full placeholder-[#333] text-[#333]"
              name="adults"
              placeholder="Adults "
            />
            <input
              type="number"
              min="1"
              max="20"
              className="border border-[#eee] text-[13px] font-normal mb-2.5 rounded-none py-[0.675rem] px-[0.75rem] w-full placeholder-[#333] text-[#333]"
              name="child"
              placeholder="Child "
            />
            <button
              type="submit"
              className="uppercase text-white bg-[var(--travelTextSecondary)] text-sm font-semibold px-[30px] leading-[42px] hover:bg-[var(--travelTextHeading)] transition-all duration-300 ease-in-out cursor-pointer"
            >
              Search {activeTab}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default TravelHeroBooking;
