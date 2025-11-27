"use client";
import React from "react";
import TravelHeadTitle from "../HeadTitle/TravelHeadTitle";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { travelPackagesCarousel } from "@/data/travelData";
import Image from "next/image";

const TravelHotDeals = () => {
  return (
    <section className="py-[120px]">
      <div className="travel-container">
        <div className="">
          <TravelHeadTitle
            title="Today’s Hot Deals"
            desc="We all live in an age that belongs to the young at heart. Life
                that is becoming extremely fast, day to."
          />
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            loop
            autoplay={{ delay: 3000 }}
            spaceBetween={30}
            pagination={{ clickable: true }}
            slidesPerView={1}
            slidesPerGroup={1}
            centeredSlides={false}
            className="w-full"
            id="travel__packages_carousel"
          >
            {travelPackagesCarousel.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="">
                  <div className="relative">
                    <div className="absolute inset-0 bg-[#04091E66]"></div>
                    <Image
                      className="w-full"
                      src={item.src}
                      alt="Package Image Location"
                      width={944}
                      height={400}
                    />
                  </div>
                  <div className="text-center absolute w-full top-[20%] md:top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <button className="text-[var(--travelTextHeading)] bg-[var(--travelTextSecondary)] text-sm font-light py-2.5 px-[30px] cursor-pointer">
                      Starting From{" "}
                      <span className="font-bold">{item.price}</span>
                    </button>
                  </div>
                  <div className="text-center absolute w-full top-[75%] md:top-[85%] left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <h4 className="text-white text-lg font-bold">
                      {item.title}
                    </h4>
                    <p className="text-white mb-[1px] font-medium">
                      {item.location}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default TravelHotDeals;
