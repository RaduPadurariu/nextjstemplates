import { shopFooterTabs } from "@/data/shopData";
import React from "react";

const ShopFooter = () => {
  return (
    <div>
      <footer className="bg-[var(--shopBGHeader)] pt-0 shop-container">
        <div className="pb-2.5">
          <div className="shop-subContainer px-6 md:px-0 w-100% md:w-[750px] lg:w-[970px] xl:w-[1170px]">
            <div className="grid ml-[-15px] mr-[-15px] overflow-hidden grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
              {shopFooterTabs.map((tab) => {
                return (
                  <div
                    key={tab.id}
                    className="relative pr-[15px] pl-[15px] m-h-[1px]"
                  >
                    <div className="mt-[49px] w-full">
                      <h3 className="tracking-normal lg:tracking-wider text-white m-0 text-xl font-medium">
                        {tab.heading}
                      </h3>
                      {tab?.desc ? (
                        <div className="text-xs lg:text-sm pt-5">
                          <p className="text-[var(--shopTextPrimary)] m-0">
                            {tab?.desc}
                          </p>
                        </div>
                      ) : (
                        <ul className="pt-[5px] lg:pt-[13px]">
                          {tab?.links.map((link, i) => {
                            return (
                              <li
                                key={i}
                                className="text-[13px] pt-[7px] cursor-pointer hover:text-[var(--shopBGOrange)] transition-all duration-300 ease-in-out"
                              >
                                {link}
                              </li>
                            );
                          })}
                        </ul>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="overflow-hidden bg-[var(--shopBGSecondary)] mt-[25px]">
          <div className="shop-subContainer px-6 md:px-0 w-100% md:w-[750px] lg:w-[970px] xl:w-[1170px]">
            <div className="flex justify-between items-center text-[var(--shopBGHeader)]">
              <div className="w-full text-left py-[15px] text-[var(--shopTextPrimary)]">
                &copy; All rights reserved - Radu Padurariu inspired by{" "}
                <a
                  href="https://theme157-tools.myshopify.com/"
                  target="_blank"
                  className="hover:text-[var(--shopBGOrange)] transition-all duration-300 ease-in-out"
                >
                  Shopify
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ShopFooter;
