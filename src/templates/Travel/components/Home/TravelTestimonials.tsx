"use client";
import React from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import TravelHeadTitle from "../HeadTitle/TravelHeadTitle";

import { travelTestimonialCarousel } from "@/data/travelData";
import Image from "next/image";

const TravelTestimonials = () => {
  return (
    <section className="py-[120px] bg-[#f9f9ff]">
      <div className="travel-container">
        <TravelHeadTitle
          title="Testimonial from our Clients"
          desc="The French Revolution constituted for the conscience of the dominant aristocratic class a fall from"
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
          breakpoints={{
            1024: {
              slidesPerView: 2,
              slidesPerGroup: 2,
            },
          }}
          className="w-full"
          id="travel__home_carousel"
        >
          {travelTestimonialCarousel.map((item, index) => (
            <SwiperSlide key={index} className="bg-white">
              <div className="flex pt-[25px] px-[30px] pb-3 w-full">
                <div className="mr-[30px]">
                  <Image
                    className="block w-full"
                    src={item.src}
                    alt="no-testimonial-img"
                    width={80}
                    height={80}
                  />
                </div>
                <div className="">
                  <p className="mb-4">{item.desc}</p>
                  <h4 className="text-lg mb-[5px] font-bold text-[var(--travelTextHeading)]">
                    {item.title}
                  </h4>
                  <div className="star">
                    <span className="fa fa-star checked text-[var(--travelTextSecondary)]"></span>
                    <span className="fa fa-star checked text-[var(--travelTextSecondary)]"></span>
                    <span className="fa fa-star checked text-[var(--travelTextSecondary)]"></span>
                    <span className="fa fa-star checked text-[var(--travelTextSecondary)]"></span>
                    <span className="fa fa-star checked text-[var(--travelTextSecondary)]"></span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default TravelTestimonials;
