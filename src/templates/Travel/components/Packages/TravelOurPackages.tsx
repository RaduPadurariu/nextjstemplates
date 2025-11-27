import React from "react";
import TravelHeadTitle from "../HeadTitle/TravelHeadTitle";
import { travelOurPackagesList } from "@/data/travelData";
import Image from "next/image";

const TravelOurPackages = () => {
  return (
    <section className="py-[120px] bg-[#f9f9ff]">
      <div className="travel-container">
        <TravelHeadTitle
          title="Our Packages"
          desc="We all live in an age that belongs to the young at heart. Life
                that is becoming extremely fast, day to."
        />

        <ul className="grid grid-cols-1 lg:grid-cols-3">
          {travelOurPackagesList.map((item) => {
            return (
              <li key={item.id} className="px-[15px]">
                <div className="mt-[30px] shadow-[0_10px_30px_0_rgba(60,64,143,0.2)] transition-all duration-300 hover:shadow-[0_10px_30px_0_rgba(60,64,143,0.35)] mb-10 lg:mb-0">
                  <div className="overflow-hidden">
                    <Image
                      src={item.src}
                      alt="Package Image"
                      width={360}
                      height={211}
                      className="w-full"
                    />
                  </div>
                  <div className="p-5 bg-white">
                    <h4 className="text-lg font-semibold text-[var(--travelTextHeading)] mb-2.5">
                      {item.title}
                    </h4>
                    <p className="mb-4">{item.location}</p>
                    <ul className="mt-[30px]">
                      {item?.subList?.map((el) => {
                        return (
                          <li
                            key={el.id}
                            className="flex justify-between items-center border-b border-b-[#eee] mb-[15px] pb-[15px]"
                          >
                            <span>{el.name}</span>
                            <span>{el.value}</span>
                          </li>
                        );
                      })}
                      <li className="flex justify-between items-center border-b border-b-[#eee] mb-[15px] pb-[15px]">
                        <span>Price per person</span>
                        <button className="bg-[var(--travelTextSecondary)] text-[var(--travelTextHeading)] font-bold py-[5px] px-4 cursor-pointer">
                          {item.price}
                        </button>
                      </li>
                    </ul>
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

export default TravelOurPackages;
