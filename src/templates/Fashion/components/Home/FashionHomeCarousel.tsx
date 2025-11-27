"use client";

import React from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";
import { fashionHomeCarousel } from "@/data/fashionData";

const FashionHomeCarousel = () => {
  return (
    <section>
      <div className="fashion-container">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          loop
          autoplay={{ delay: 10000 }}
          spaceBetween={30}
          pagination={{ clickable: true }}
          slidesPerView={1}
          slidesPerGroup={1}
          centeredSlides={false}
          className="w-full"
          id="fashion__home_carousel"
        >
          {fashionHomeCarousel.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="cursor-pointer ">
                <div className="relative">
                  <Image
                    className="w-full"
                    src={item.src}
                    alt="FashionCarousel Image Location"
                    width={944}
                    height={400}
                  />
                </div>
                <div
                  className={`text-center absolute inset-0 flex justify-between items-center flex-col bg-[var(--fashionTextSecondary)] max-w-[27px] sm:max-w-[54px] md:max-w-[64px] lg:max-w-[87px] ${
                    index == 0
                      ? "left-[18%] my-[5%]"
                      : index == 1
                      ? "left-[23%] my-[10%]"
                      : "left-[70%] my-[5%]"
                  } `}
                >
                  <div></div>
                  <h1 className="mt-2 md:mt-8 text-[var(--fashionTextHeading)] font-medium text-5xl sm:text-[90px] md:text-[120px] lg:text-[160px] fashionArkanaFamily whitespace-pre-line flex flex-col leading-[0.7]">
                    {item.text.split(" ").map((el, i) => {
                      return <span key={i}>{el}</span>;
                    })}
                  </h1>
                  <button className="uppercase text-[var(--fashionTextHeading)] font-semibold tracking-[1px] text-[10px] sm:text-[10px] md:text-xs lg:text-sm mb-2">
                    browse
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default FashionHomeCarousel;
