import React from "react";
import TravelHeadTitle from "../HeadTitle/TravelHeadTitle";
import { travelPricesList, travelPricesListLocations } from "@/data/travelData";

const TravelPrices = () => {
  return (
    <section className="py-[120px] h-auto w-full bg-[url('/images/travel/home/price-bg.png')] bg-cover bg-center')]">
      <div className="travel-container">
        <div className="flex justify-center">
          <TravelHeadTitle
            title="We Provide Affordable Prices"
            desc=" Well educated, intellectual people, especially scientists at all
                times demonstrate considerably."
          />
        </div>
        <ul className="grid grid-cols-1 lg:grid-cols-3">
          {travelPricesList.map((el) => {
            return (
              <li key={el.id} className="px-[15px]">
                <div className="p-[30px] bg-white">
                  <h4 className="pb-5 text-center border-b border-b-[var(--travelTextSecondary)] text-[var(--travelTextHeading)] font-bold text-xl">
                    {el.title}
                  </h4>
                  <ul className="mt-[30px]">
                    {travelPricesListLocations.map((el) => {
                      return (
                        <li
                          key={el.id}
                          className="flex justify-between items-center mb-2.5"
                        >
                          <span>{el.location}</span>
                          <button className="w-[80px] bg-[#f9f9ff] border border-[#eee] text-[var(--travelTextHeading)] text-sm font-bold py-[5px] px-5">
                            {el.price}
                          </button>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default TravelPrices;
