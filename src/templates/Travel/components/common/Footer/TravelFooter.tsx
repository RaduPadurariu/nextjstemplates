import {
  travelFooterImages,
  travelFooterLinksCol1,
  travelFooterLinksCol2,
  travelSocialIcons,
} from "@/data/travelData";
import React from "react";
import { TravelFooterForm } from "./TravelFooterForm";
import Image from "next/image";

const TravelFooter = () => {
  return (
    <footer className="bg-[var(--travelBGFooter)] py-[100px] selection:text-[var(--travelTextSecondary)]">
      <div className="travel-container text-white">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
          <div className="relative w-full pr-[30px] mb-[70px] lg:mb-0">
            <h6 className="text-white uppercase mb-[25px] text-base font-bold">
              About Agency
            </h6>
            <p className="text-[var(--travelTextPrimary)] font-normal selection:text-[var(--travelTextSecondary)]">
              The world has become so fast paced that people don’t want to stand
              by reading a page of information, they would much rather look at a
              presentation and understand the message. It has come to a point.
            </p>
          </div>
          <div className="relative w-full pr-[30px] mb-[70px] lg:mb-0">
            <h6 className="text-white uppercase mb-[25px] text-base font-bold">
              Navigation Links
            </h6>
            <div className="flex w-full justify-between ">
              <ul>
                {travelFooterLinksCol1.map((el) => {
                  return (
                    <li key={el.id} className="mb-3 font-normal">
                      <button className="cursor-pointer hover:text-[var(--travelTextSecondary)] transition-all duration-300 ease-in-out">
                        {el.title}
                      </button>
                    </li>
                  );
                })}
              </ul>
              <ul>
                {travelFooterLinksCol2.map((el) => {
                  return (
                    <li key={el.id} className="mb-3 font-normal">
                      <button className="cursor-pointer hover:text-[var(--travelTextSecondary)] transition-all duration-300 ease-in-out">
                        {el.title}
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          <div className="relative w-full pr-[30px] mb-[70px] lg:mb-0">
            <h6 className="text-white uppercase mb-[25px] text-base font-bold">
              Newsletter
            </h6>
            <p className="text-[var(--travelTextPrimary)] font-normal mb-4">
              For business professionals caught between high OEM price and
              mediocre print and graphic output.
            </p>
            <div>
              <TravelFooterForm />
            </div>
          </div>
          <div className="relative w-full pr-[30px] mb-[70px] lg:mb-0">
            <h6 className="text-white uppercase mb-[25px] text-base font-bold">
              Instafeed
            </h6>
            <ul className="grid grid-cols-4 gap-2">
              {travelFooterImages.map((el) => {
                return (
                  <li key={el.id}>
                    <Image
                      src={el.src}
                      alt="no-footer-img"
                      width={58}
                      height={58}
                    />
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <hr className="text-[#333] mt-8 mb-10 mx-[-15px]" />
        <div className=" w-full flex flex-col  lg:flex-row justify-between lg:items-center text-[var(--travelTextPrimary)]">
          <p className="mb-6 lg:mb-0">
            Copyright &copy; All rights reserved | This template is made with{" "}
            <i
              className="fa-regular fa-heart text-[var(--travelTextSecondary)]"
              aria-hidden="true"
            ></i>{" "}
            by Radu Padurariu inspired by{" "}
            <a
              href="https://themewagon.github.io/travelista/index.html"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--travelTextSecondary)]"
            >
              Colorlib
            </a>
          </p>
          <ul className="flex">
            {travelSocialIcons.map((icon) => {
              return (
                <li key={icon.id} className="ml-[15px] ">
                  <i
                    className={`${icon.iconClass} text-white hover:text-[var(--travelTextSecondary)] duration-300 transition-all ease-in-out mr-3`}
                  ></i>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default TravelFooter;
