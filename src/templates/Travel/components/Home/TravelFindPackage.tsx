import Image from "next/image";
import React from "react";

const TravelFindPackage = () => {
  return (
    <section className="">
      <div className="w-full mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 ">
          <div className="flex justify-center items-center lg:items-start flex-col lg:pl-[5%] xl:pl-[40%] px-[15px] py-[100px] text-center lg:text-left">
            <h1 className="text-[var(--travelTextHeading)] leading-[1.2em] font-semibold text-xl lg:text-4xl">
              Did not find your Package? <br />
              Feel free to ask us. <br />
              We‘ll make it for you
            </h1>
            <p className="py-5 font-normal mb-[1rem] max-w-[500px]">
              inappropriate behavior is often laughed off as “boys will be
              boys,” women face higher conduct standards especially in the
              workplace. That’s why it’s crucial that, as women, our behavior on
              the job is beyond reproach. inappropriate behavior is often
              laughed.
            </p>
            <button className="mt-2.5 text-sm uppercase bg-[var(--travelTextHeading)] hover:bg-[var(--travelTextSecondary)] text-white transition-all duration-300 ease-in-out font-semibold px-[30px] cursor-pointer leading-[42px]">
              request custom price
            </button>
          </div>
          <div className="">
            <Image
              width={945}
              height={600}
              className="w-full h-full"
              priority
              src="/images/travel/home/about-img.jpg"
              alt="no-find-img"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TravelFindPackage;
