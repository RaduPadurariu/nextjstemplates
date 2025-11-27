"use client";
import React from "react";
import TravelHeadTitle from "../HeadTitle/TravelHeadTitle";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { travelLatestBlogCarousel } from "@/data/travelData";
import Image from "next/image";

const TravelLatestBlog = () => {
  return (
    <section className="py-[120px]">
      <div className="travel-container">
        <TravelHeadTitle
          title="Latest from Our Blog"
          desc="With the exception of Nietzsche, no other madman has contributed
                so much to human sanity as has."
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
            768: {
              slidesPerView: 2,
              slidesPerGroup: 2,
            },
            1024: {
              slidesPerView: 3,
              slidesPerGroup: 3,
            },
          }}
          className="w-full"
          id="travel__home_carousel2"
        >
          {travelLatestBlogCarousel.map((item, index) => (
            <SwiperSlide key={index} className="bg-white">
              <div className="">
                <div className="overflow-hidden">
                  <Image
                    className="block w-full"
                    src={item.src}
                    alt="Home Latest Blog Image"
                    width={360}
                    height={260}
                  />
                </div>
                <div className="">
                  <div className="my-5">
                    <ul>
                      <li className="inline-block border border-[#eeeeee] py-1 px-3 mr-1">
                        <button className="text-xs text-black">Travel</button>
                      </li>
                      <li className="inline-block border border-[#eeeeee] py-1 px-3">
                        <button className="text-xs text-black">
                          Life Style
                        </button>
                      </li>
                    </ul>
                  </div>
                  <h4 className="text-[var(--travelTextHeading)] text-lg my-5 font-semibold">
                    {item.title}
                  </h4>
                  <p className="mb-4">{item.desc}</p>
                  <h6 className="text-black text-sm font-light">{item.date}</h6>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default TravelLatestBlog;
