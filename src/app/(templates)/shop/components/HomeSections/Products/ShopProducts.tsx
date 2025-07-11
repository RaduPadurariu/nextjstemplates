"use client";
import ShopHomeCarousel from "./ShopHomeCarousel";
import {
  shopHomeProductCarouselBottom,
  shopHomeProductCarouselTop,
} from "@/data/shopDate";
import { Swiper as SwiperType } from "swiper";
import { useRef } from "react";

const ShopProducts = () => {
  const topSwiperRef = useRef<SwiperType | null>(null);
  const bottomSwiperRef = useRef<SwiperType | null>(null);

  return (
    <div className="my-[30px] ">
      <div className="relative pb-[30px] mt-[38px] pt-[34px] border-t-2 border-black shop-subContainer px-[15px] md:px-0 w-100% md:w-[750px] lg:w-[970px] xl:w-[1170px]">
        <h2 className="text-left text-xl p-0 my-[15px] mx-0 tracking-normal uppercase text-[#333] font-bold">
          Featured products
        </h2>

        <ShopHomeCarousel
          data={shopHomeProductCarouselTop}
          swiperRef={topSwiperRef}
        />

        <div className="my-[30px] relative">
          <div className="flex justify-between mb-4">
            <button
              onClick={() => {
                topSwiperRef.current?.slidePrev();
                bottomSwiperRef.current?.slidePrev();
              }}
              className="prev px-4 py-2 bg-[var(--shopTextPrimary)] w-[30px] h-[30px] overflow-hidden text-center rounded-full flex justify-center items-center cursor-pointer hover:bg-[var(--shopBGOrange)] transition-all duration-300 ease-in-out"
            >
              <i className="fa-solid fa-chevron-left text-white"></i>
            </button>
            <button
              onClick={() => {
                topSwiperRef.current?.slideNext();
                bottomSwiperRef.current?.slideNext();
              }}
              className="next px-4 py-2 w-[30px] bg-[var(--shopTextPrimary)] h-[30px] overflow-hidden text-center rounded-full flex justify-center items-center cursor-pointer hover:bg-[var(--shopBGOrange)] transition-all duration-300 ease-in-out"
            >
              <i className="fa-solid fa-chevron-right text-white font-bold"></i>
            </button>
          </div>
        </div>

        <ShopHomeCarousel
          data={shopHomeProductCarouselBottom}
          swiperRef={bottomSwiperRef}
        />
      </div>
    </div>
  );
};

export default ShopProducts;
