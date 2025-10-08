import React from "react";
import TravelHeroBooking from "./TravelHeroBooking";

const TravelHero = () => {
  return (
    <section className="bg-[url('/images/travel/home/hero-bg.jpg')] bg-cover bg-center relative">
      <div className="absolute inset-0 bg-[#04091E66]"></div>
      <div className="travel-container">
        <div className="min-h-[100vh] flex flex-col md:flex-row md:justify-between items-center pt-[120px]">
          <div className="relative w-full md:w-1/2 pr-[15px] mb-[60px] md:mb-0">
            <h6 className="text-white uppercase text-sm tracking-[2px] font-bold">
              Away from monotonous life
            </h6>
            <h1 className="text-white uppercase my-7 text-[40px] xl:text-6xl font-bold">
              Magical Travel
            </h1>
            <p className="text-white my-5 font-medium">
              If you are looking at blank cassettes on the web, you may be very
              confused at the difference in price. You may see some for as low
              as $.17 each.
            </p>
            <button className="uppercase text-white bg-[var(--travelTextSecondary)] text-sm font-semibold px-[30px] leading-[42px] hover:bg-[var(--travelTextHeading)] transition-all duration-300 ease-in-out cursor-pointer">
              Get Started
            </button>
          </div>
          <TravelHeroBooking />
        </div>
      </div>
    </section>
  );
};

export default TravelHero;
