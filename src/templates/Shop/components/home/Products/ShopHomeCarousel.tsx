"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import React from "react";
import { Navigation, Controller } from "swiper/modules";
import Link from "next/link";
import Image from "next/image";
import { useShopContext } from "../../../context/useShopContext";
import { ShopHomeCarouselProps } from "../../../types/shopTypes";

const ShopHomeCarousel: React.FC<ShopHomeCarouselProps> = ({
  data,
  swiperRef,
}) => {
  const { selectedCurrency, handleAddToCart } = useShopContext();

  return (
    <Swiper
      modules={[Navigation, Controller]}
      loop
      onSwiper={(swiper) => {
        if (swiperRef) swiperRef.current = swiper;
      }}
      navigation={{
        nextEl: ".next" as string,
        prevEl: ".prev" as string,
      }}
      slidesPerView={1}
      slidesPerGroup={1}
      breakpoints={{
        475: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
      }}
      className="w-full shop__homeProduct_carousel h-full relative z-[1]"
    >
      {data.map((item, index) => (
        <SwiperSlide key={index}>
          <div className="w-[220px] mr-[30px] border-l border-l-[#dcdbdb] relative shrink-0 h-full">
            <div className="m-0">
              <div className="relative">
                <Link
                  href="/shop/catalog"
                  className="block relative cursor-pointer"
                >
                  <Image
                    src={item.src}
                    alt={`Slide ${index + 1}`}
                    width={270}
                    height={270}
                    className="w-full h-auto object-cover px-[30px] align-middle"
                  />
                  <span className="capitalize block absolute left-2.5 text-sm top-[3px] z-50 rounded bg-[var(--shopBGOrange)] font-semibold pt-[2px] px-[6px] pb-[3px] text-center text-white">
                    new!
                  </span>
                </Link>
              </div>
              <div className="relative">
                <div className="flex pl-5 font-bold text-2xl xl:text-4xl text-[var(--shopTextSecondary)]">
                  <div>{selectedCurrency?.sign}</div>
                  <div>
                    {(
                      item.price * (selectedCurrency?.coefficient ?? 1)
                    ).toFixed(2)}
                  </div>
                </div>
                <p className="text-base text-[#333] m-0 pt-4 pr-0 pb-1 pl-5">
                  {item.title}
                </p>
                <p className="pl-5 text-[var(--shopTextPrimary)]">
                  {item.desc}
                </p>
                <button
                  className="pt-4 pl-5 flex group items-center"
                  onClick={(e) => handleAddToCart(e, item)}
                >
                  <div className="relative text-white p-0  rounded flex justify-around cursor-pointer bg-[var(--shopTextSecondary)] group-hover:bg-[var(--shopBGOrange)] transition-all duration-300 ease-in-out">
                    <i className="fa fa-shopping-cart z-[1] text-2xl cursor-pointer rounded text-white bg-[var(--shopBGPrimary)] group-hover:bg-[var(--shopBGOrange)] p-2 transition-all duration-300 ease-in-out"></i>
                    <span className="uppercase block font-normal text-white text-sm cursor-pointer py-[10px] px-[7px] lg:px-[17px]">
                      Add to cart
                    </span>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ShopHomeCarousel;
