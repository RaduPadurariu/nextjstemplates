import { travelOtherIssues } from "@/data/travelData";
import Image from "next/image";
import React from "react";
import TravelHeadTitle from "../HeadTitle/TravelHeadTitle";

const TravelOtherIssues = () => {
  return (
    <section className="py-[120px]">
      <div className="travel-container">
        <TravelHeadTitle
          title="Other issues we can help you with"
          desc="We all live in an age that belongs to the young at heart. Life that is."
        />
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {travelOtherIssues.map((el) => {
            return (
              <li key={el.id} className="mb-10 md:px-[15px] group">
                <div className="overflow-hidden">
                  <Image
                    className="w-full group-hover:scale-110 group-hover:-rotate-2 transition-transform duration-300 ease-in-out"
                    src={el.src}
                    alt="Travel Image"
                    width={263}
                    height={160}
                  />
                </div>
                <h4 className="my-5 text-lg text-[var(--travelTextHeading)] font-semibold group-hover:text-[var(--travelTextSecondary)] transition-all duration-300 ease-in-out">
                  {el.title}
                </h4>
                <p className="mb-4">{el.desc}</p>
              </li>
            );
          })}
        </ul>
      </div>{" "}
    </section>
  );
};

export default TravelOtherIssues;
