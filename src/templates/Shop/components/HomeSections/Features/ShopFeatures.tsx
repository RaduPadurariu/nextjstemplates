import { shopFeatures } from "@/data/shopData";
import React from "react";

const ShopFeatures = () => {
  return (
    <div className="my-0 mx-auto shop-container">
      <div
        className="w-full bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/shop/Home/Feature-BG.png')",
        }}
      >
        <div className="p-[15px] text-center flex">
          <div className="shop-subContainer w-100% md:w-[750px] lg:w-[970px] xl:w-[1170px]">
            <ul className="flex flex-col items-center lg:flex-row lg:flex-wrap my-35 lg:my-15 mx-5">
              {shopFeatures.map((feature) => {
                return (
                  <li
                    key={feature.id}
                    className="flex items-center w-full lg:w-1/2 justify-start pr-5 py-5 "
                  >
                    <div className="cursor-pointer w-20 lg:w-35 h-20 lg:h-35 shrink-0 rounded-full flex items-center justify-center bg-[var(--shopTextSecondary)] mr-5 hover:bg-[var(--shopBGOrange)] transition-all duration-200 ease-in-out">
                      {" "}
                      <i
                        className={`${feature.icon} text-white text-4xl lg:text-6xl leading-none`}
                      ></i>
                    </div>

                    <div className="flex flex-col items-start">
                      <h3 className="text-lg m-0 leading-[30px] text-white font-semibold">
                        {feature.heading}
                      </h3>
                      <p className="hidden sm:block text-sm mt-2.5 leading-5 text-white text-left font-semibold">
                        {feature.desc}
                      </p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopFeatures;
