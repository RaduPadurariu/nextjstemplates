"use client";
import { FaAngleDown } from "react-icons/fa";

import { shopCurrency } from "@/data/shopData";
import React, { useState } from "react";

const ShopCurrency = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [currency, setCurrency] = useState<string>(shopCurrency[1].currency);

  return (
    <div className="inline-block">
      <div className="inline-block text-center relative z-[130] cursor-pointer">
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="w-[60px] h-[35px]inline-block py-0 px-1.5 leading-9 relative z-10 font-normal text-[var(--shopTextSecondary)] text-sm tracking-[0.1em] shop__currency_active flex items-center"
        >
          {currency}{" "}
          <FaAngleDown
            className={`text-sm text-white transition-transform duration-200 ease-in-out ${
              isOpen ? "rotate-180" : "rotate-0"
            }`}
          />
        </div>

        <ul
          className={`absolute right-0 left-0 ${
            isOpen ? "max-h-96" : "max-h-0"
          } z-[1] top-full bg-[var(--shopTextSecondary)] font-normal text-sm overflow-hidden duration-200 ease-in-out cursor-pointer`}
        >
          {" "}
          {shopCurrency.map((currency) => {
            return (
              <li
                onClick={() => {
                  setIsOpen(() => !isOpen);
                  setCurrency(currency.currency);
                }}
                key={currency.id}
                className="font-normal text-white py-[5px] px-0 bg-[var(--shopTextSecondary)] hover:bg-black cursor-pointer"
              >
                {currency.currency}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default ShopCurrency;
