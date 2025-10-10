import Image from "next/image";
import React from "react";

const TravelContactAbout = () => {
  return (
    <section className="pt-[120px] pb-[100px]">
      <div className="travel-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center justify-between">
          <div className="mb-[30px] lg:mb-0">
            <Image
              className="w-full px-0"
              src="/images/travel/info-img.jpg"
              alt="About Us Image"
              width={603}
              height={428}
            />
          </div>
          <div className="w-full px-0 lg:px-[15px]">
            <h6 className="uppercase text-sm font-medium text-[var(--travelTextHeading)] tracking-[2px]">
              About Us
            </h6>
            <h1 className="text-4xl font-bold text-[var(--travelTextHeading)] uppercase my-5">
              Who We Are?
            </h1>
            <p className="mb-4 max-w-[450px]">
              Here, I focus on a range of items and features that we use in life
              without giving them a second thought. such as Coca Cola. Dolor sit
              amet, consectetur adipisicing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TravelContactAbout;
