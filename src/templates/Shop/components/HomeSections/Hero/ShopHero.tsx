"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import React from "react";
import { shopHeroCarousel, shopHeroProducts } from "@/data/shopData";
import Link from "next/link";
import Image from "next/image";

const ShopHero = () => {
  return (
    <>
      <div className="my-0 mx-auto shop-container shop__hero_carousel relative">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          loop
          // autoplay={{ delay: 3000 }}
          pagination={{ clickable: true }}
          navigation
          slidesPerView={1}
          className="w-full shop__hero_carousel"
          id="shop__hero_carousel"
        >
          {shopHeroCarousel.map((item, index) => (
            <SwiperSlide key={index}>
              <Image
                src={item.src}
                alt={`Slide ${index + 1}`}
                width={1920}
                height={580}
                className="w-full h-auto object-cover"
              />
              <div className="absolute top-0 left-0 h-full z-50 w-full p-[30px] sm:py-[30px] sm:px-[40px]  flex text-right justify-end items-start">
                <div className="shop-subContainer px-[15px] md:px-0 w-100% md:w-[750px] lg:w-[970px] xl:w-[1170px] flex justify-end">
                  <div className="max-w-[550px] flex flex-col items-end">
                    <h2 className="text-xs sm:text-lg lg:text-5xl p-0 uppercase m-0 font-bold text-[var(--shopBGOrange)]">
                      {item.title}
                    </h2>
                    <p className="uppercase m-0 text-xs sm:text-2xl text-[var(--shopTextPrimary)] font-semibold leading-[1] md:leading-[43px]">
                      {item.desc}
                    </p>
                    <div
                      style={{ letterSpacing: "-2px" }}
                      className="w-[75px] h-[75px] lg:w-[150px] lg:h-[150px] sm:flex mt-0 rounded-full bg-[#fcb614] text-center shrink-0 flex flex-col items-center justify-center"
                    >
                      <h3 className="text-white text-xl lg:text-[42px]">
                        $360
                      </h3>
                      <h5 className="text-[var(--shopBGSecondary)] text-base lg:text-3xl m-0 font-light leading-[1]">
                        20% OFF
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="bg-[var(--shopBGPrimary)] w-full my-0 mx-auto shop-container relative">
        <ul className="flex flex-wrap p-1">
          {shopHeroProducts.map((product) => {
            return (
              <li
                style={{
                  backgroundImage: `url(${product.src})`,
                }}
                key={product.id}
                className="lg:bg-contain 2xl:bg-auto bg-top-right w-full sm:w-1/2 lg:w-1/4 bg-no-repeat"
              >
                <div className="pl-7 py-20 lg:py-12 my-8 sm:my-0">
                  <div className="text-white">
                    <strong className="m-0 text-left leading-[1] text-white tracking-wide uppercase text-3xl font-bold">
                      {product.title}
                    </strong>{" "}
                    <p className="font-light m-0 text-left leading-[1] text-white tracking-wide uppercase text-3xl">
                      tools
                    </p>
                  </div>
                  <p className="hidden 2xl:block text-white my-[15px] leading-[1.5em] text-sm pl-[5px] max-w-[250px] font-semibold">
                    {product.desc}
                  </p>

                  <Link
                    href="/shop/catalog"
                    className="text-sm mt-5 cursor-pointer inline-block rounded font-semibold py-1.5 sm:py-2 lg:py-[13px] px-2 sm:px-3 lg:px-5 bg-[var(--shopTextSecondary)] text-white hover:bg-[var(--shopBGOrange)] transition-all duration-300 ease-in-out"
                  >
                    SHOP NOW!
                  </Link>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default ShopHero;
