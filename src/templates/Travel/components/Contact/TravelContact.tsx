import { travelContactAddressesList } from "@/data/travelData";
import React from "react";
import TravelContactForm from "./TravelContactForm";

const TravelContact = () => {
  return (
    <section className="pb-[120px]">
      <div className="travel-container">
        <div className="flex flex-col lg:flex-row">
          <ul className="flex flex-col w-full lg:w-1/3 mb-[30px] lg:mb-0 mr-0 lg:mr-[30px]">
            {travelContactAddressesList.map((item) => {
              return (
                <li key={item.id} className="flex mb-4 items-center">
                  <div className="icon">
                    <i
                      className={`text-[30px] text-[var(--travelTextSecondary)] mr-[30px] font-semibold ${item.icon}`}
                    ></i>
                  </div>
                  <div className="">
                    <h5 className="text-[var(--travelTextHeading)] text-base mb-[5px] font-light">
                      {item.title}
                    </h5>
                    <p className="">{item.desc}</p>
                  </div>
                </li>
              );
            })}
          </ul>
          <div className="w-full lg:w-2/3">
            <TravelContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TravelContact;
