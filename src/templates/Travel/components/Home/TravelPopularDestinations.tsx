import React from "react";
import TravelHeadTitle from "../HeadTitle/TravelHeadTitle";
import { travelPopularDestinations } from "@/data/travel";
import Image from "next/image";

const TravelPopularDestinations = () => {
  return (
    <section className="py-[120px]">
      <div className="travel-container">
        <TravelHeadTitle
          title="Popular Destinations"
          desc="We all live in an age that belongs to the young at heart. Life
                that is becoming extremely fast, day."
        />
        <ul className="grid grid-cols-1 lg:grid-cols-3">
          {travelPopularDestinations.map((el) => {
            return (
              <li key={el.id} className="mb-10 md:px-[15px]">
                <div className="group relative">
                  <div className="relative">
                    <div className="absolute inset-0 bg-transparent group-hover:bg-[#04091E66] transition-all duration-300 ease-in-out z-0"></div>
                    <Image
                      className="w-full h-auto"
                      src={el.src}
                      alt="Travel Image"
                      width={360}
                      height={211}
                    />
                  </div>
                  <div className="absolute inset-0 flex flex-col items-center justify-center z-2 ">
                    <button className="bg-[var(--travelTextSecondary)] text-center text-[var(--travelTextHeading)] opacity-0 invisible group-hover:opacity-100 group-hover:visible py-1.5 px-[30px] text-sm font-bold m-2.5 transition-all duration-300 ease-in-out">
                      {el.price}
                    </button>
                    <h4 className="text-white text-lg font-bold">{el.title}</h4>
                    <p className="text-white font-normal text-sm">
                      {el.location}
                    </p>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default TravelPopularDestinations;
