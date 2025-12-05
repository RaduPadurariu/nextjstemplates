"use client";

import {
  loginDashboardCardsData,
  loginDashboardCategoriesData,
  loginDashboardHomeCarousel,
  loginDashboardSalesData,
} from "@/data/loginDashboardData";
import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { LoginDashboardLineChart } from "@/templates/LoginDashboard/components/dashboard/LoginDashboardLineChart";

const LoginDashboardHome = () => {
  return (
    <section className="w-full px-6 py-6 mx-auto">
      {/* Dashboard row 1 */}
      <ul className="flex flex-wrap -mx-3">
        {loginDashboardCardsData.map((card) => {
          return (
            <li
              key={card.id}
              className="w-full max-w-full px-3 mb-6 sm:w-1/2 sm:flex-none xl:mb-0 xl:w-1/4"
            >
              <div className="relative flex flex-col min-w-0 break-words bg-white shadow-xl rounded-2xl bg-clip-border ">
                <div className="flex-auto p-4">
                  <div className="flex flex-row -mx-3">
                    <div className="flex-none w-2/3 max-w-full px-3">
                      <div>
                        <p className="mb-0 text-sm font-semibold leading-normal uppercase ">
                          {card.title}
                        </p>
                        <h5 className="mb-2 font-bold text-[var(--dashboardTextTitles)] text-xl ">
                          {card.data}
                        </h5>
                        <p className="mb-0">
                          <span
                            className={`text-sm font-bold leading-normal  mr-2 ${
                              eval(card?.percentage) >= 0
                                ? "text-[var(--dashboardAccentSuccess)]"
                                : "text-[var(--dashboardAccentDanger)]"
                            }`}
                          >
                            {card.percentage}%
                          </span>
                          {card.from}
                        </p>
                      </div>
                    </div>
                    <div className="px-3 text-right basis-1/3">
                      <div
                        className={`inline-block w-12 h-12 text-center rounded-full bg-gradient-to-tl ${card.gradient}`}
                      >
                        <i
                          className={`leading-none ${card.icon} text-lg relative top-3.5 text-white`}
                        ></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          );
        })}
      </ul>

      {/* Dashboard row 2 */}
      <div className="flex flex-wrap mt-6 -mx-3">
        {/* Chart */}
        <div className="w-full max-w-full px-3 mt-0 lg:w-7/12 lg:flex-none mb-8 lg:mb-0">
          <div className="border-black/12.5  shadow-xl relative z-20 flex min-w-0 flex-col break-words rounded-2xl border-0 border-solid bg-white bg-clip-border">
            <div className="border-black/12.5 mb-0 rounded-t-2xl border-b-0 border-solid p-6 pt-4 pb-0">
              <h6 className="capitalize text-[var(--dashboardTextTitles)] font-semibold pb-2 ">
                Sales overview
              </h6>
              <p className="mb-0 text-sm leading-normal ">
                <i className="fa fa-arrow-up text-[var(--dashboardIconGreen)] mr-2"></i>
                <span className="font-semibold">4% more</span> in 2021
              </p>
            </div>
            <div className="flex-auto p-4">
              <div>
                <LoginDashboardLineChart />
              </div>
            </div>
          </div>
        </div>
        {/* Dashboard row 3 */}
        <div className="w-full px-3 lg:w-5/12">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            loop
            pagination={{ clickable: true }}
            navigation
            slidesPerView={1}
            className="relative h-full overflow-hidden rounded-2xl  max-h-[400px] max-w-[600px] mr-auto"
            id="shop__dashboard_carousel"
          >
            {loginDashboardHomeCarousel.map((item, index) => (
              <SwiperSlide
                key={index}
                className="relative w-full h-full transition-all duration-500"
              >
                <Image
                  src={item.img}
                  alt={`Slide ${index + 1}`}
                  width={800}
                  height={450}
                  className="object-cover h-full w-auto "
                />
                <div className="block text-start ml-12 left-0 bottom-0 absolute right-[15%] pt-5 pb-5 text-white">
                  <div className="inline-block w-8 h-8 mb-4 text-center text-black bg-white bg-center rounded-lg fill-current stroke-none">
                    <i
                      className={`top-0.75 text-xxs relative text-[#314158] ${item.icon}`}
                    ></i>
                  </div>
                  <h5 className="mb-1 text-white font-semibold text-xl">
                    {item.title}
                  </h5>
                  <p className=" text-xs sm:text-base">{item.desc}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <div className="flex flex-wrap mt-6 -mx-3">
        <div className="w-full max-w-full px-3 mt-0 mb-6 lg:mb-0 lg:w-7/12 lg:flex-none">
          <div className="relative flex flex-col min-w-0 break-words bg-white border-0 border-solid shadow-xl border-black-125 rounded-2xl bg-clip-border">
            <div className="p-4 pb-0 mb-0 rounded-t-4">
              <div className="flex justify-between">
                <h6 className="mb-2 text-[var(--dashboardTextTitles)] font-semibold">
                  Sales by Country
                </h6>
              </div>
            </div>

            <div className="overflow-x-auto">
              <div className="flex flex-col w-full mb-4 border-collapse  ">
                <ul className="min-w-[600px]">
                  {loginDashboardSalesData.map((data) => {
                    return (
                      <li
                        key={data.id}
                        className="flex w-full justify-between border-b border-b-gray-200"
                      >
                        <div className="p-2 align-middle bg-transparent w-[30%] whitespace-nowrap">
                          <div className="flex items-center px-2 py-1">
                            <div>
                              <Image
                                src={data.flag}
                                alt="Country flag"
                                width={23}
                                height={17}
                              />
                            </div>
                            <div className="ml-1 sm:ml-6">
                              <p className="mb-0 text-xs font-semibold leading-tight ">
                                Country:
                              </p>
                              <h6 className="mb-0 text-sm leading-normal font-semibold text-[var(--dashboardTextTitles)]">
                                {data.country}
                              </h6>
                            </div>
                          </div>
                        </div>

                        <div className="p-2 align-middle bg-transparent whitespace-nowrap ">
                          <div className="text-center">
                            <p className="mb-0 text-xs font-semibold leading-tight ">
                              Sales:
                            </p>
                            <h6 className="mb-0 text-sm leading-normal font-semibold text-[var(--dashboardTextTitles)]">
                              {data.sales}
                            </h6>
                          </div>
                        </div>
                        <div className="p-2 align-middle bg-transparent whitespace-nowrap ">
                          <div className="text-center">
                            <p className="mb-0 text-xs font-semibold leading-tight ">
                              Value:
                            </p>
                            <h6 className="mb-0 text-sm leading-normal font-semibold text-[var(--dashboardTextTitles)]">
                              {data.value}
                            </h6>
                          </div>
                        </div>
                        <div className="p-2 mr-10 text-sm leading-normal align-middle bg-transparent whitespace-nowrap ">
                          <div className="flex-1 text-center">
                            <p className="mb-0 text-xs font-semibold leading-tight">
                              Bounce:
                            </p>
                            <h6 className="mb-0 text-sm leading-normal font-semibold text-[var(--dashboardTextTitles)]">
                              {data.bounce}
                            </h6>
                          </div>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full max-w-full px-3 mt-0 lg:w-5/12 lg:flex-none">
          <div className="border-black/12.5 shadow-xl  relative flex min-w-0 flex-col break-words rounded-2xl border-0 border-solid bg-white bg-clip-border ">
            <div className="p-4 pb-0 rounded-t-4">
              <h6 className="mb-0 font-semibold text-[var(--dashboardTextTitles)]">
                Categories
              </h6>
            </div>

            <div className="flex-auto p-4">
              <ul className="flex flex-col pl-0 mb-0 rounded-lg">
                {loginDashboardCategoriesData.map((category) => {
                  return (
                    <li
                      key={category.id}
                      className="relative flex justify-between py-2 pr-4 mb-2 border-0 rounded-t-lg rounded-xl text-inherit"
                    >
                      <div className="flex items-center">
                        <div className="inline-block w-8 h-8 mr-4 text-center text-black bg-center shadow-sm fill-current stroke-none bg-gradient-to-tl from-zinc-800 to-zinc-700  rounded-xl">
                          <i
                            className={`text-white ${category.icon} relative top-0.75 text-xs`}
                          ></i>
                        </div>
                        <div className="flex flex-col">
                          <h6 className="mb-1 font-semibold text-[var(--dashboardTextTitles)] text-sm leading-normal ">
                            {category.title}
                          </h6>
                          <span className="text-xs leading-tight ">
                            {category.data}
                            <span className="font-semibold">
                              {category.value}
                            </span>
                          </span>
                        </div>
                      </div>
                      <div className="flex">
                        <button className="group ease-in leading-pro text-xs rounded-3.5xl p-1.2 h-6.5 w-6.5 mx-0 my-auto inline-block cursor-pointer border-0 bg-transparent text-center align-middle font-bold text-slate-700 shadow-none transition-all ">
                          <i
                            className="ease-bounce text-2xs group-hover:translate-x-1.25 fa-solid fa-arrow-right transition-all duration-200"
                            aria-hidden="true"
                          ></i>
                        </button>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginDashboardHome;
