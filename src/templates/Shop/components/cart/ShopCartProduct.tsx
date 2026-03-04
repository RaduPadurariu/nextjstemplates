"use client";

import Image from "next/image";
import React, { useState } from "react";
import { ShopCurrencyType, ShopMyCartProduct } from "../../types/shopTypes";

const ShopCartProduct = ({
  cartProducts,
  setCartProducts,
  selectedCurrency,
  item,
}: {
  cartProducts: ShopMyCartProduct[];
  setCartProducts: (value: ShopMyCartProduct[]) => void;
  selectedCurrency: ShopCurrencyType | null;
  item: ShopMyCartProduct;
}) => {
  const [localQty, setLocalQty] = useState(item.quantity);

  const updateQuantity = () => {
    const updatedCart = cartProducts.map((entry) =>
      entry.product.id === item.product.id
        ? { ...entry, quantity: localQty }
        : entry,
    );
    setCartProducts(updatedCart);
  };

  const handleRemoveProduct = () => {
    const updatedCart = cartProducts.filter(
      (entry) => entry.product.id !== item.product.id,
    );
    setCartProducts(updatedCart);
  };
  return (
    <li className="grid grid-cols-2 lg:grid-cols-[6fr_1fr_1fr_1fr] border-b border-[var(--shopBorderPrimary)] items-center">
      <div className="py-[15px] text-[var(--shopBGHeader)] leading-[1.43] font-bold flex flex-col sm:flex-row">
        <div className="sm:min-w-[150px] lg:min-w-auto">
          <Image
            src={`${item.product.src}`}
            alt="no-img"
            width={150}
            height={150}
            className=""
          />
        </div>
        <div className="sm:ml-[30px]">
          <p className="text-sm text-[var(--shopBGHeader)] pb-2.5">
            {item.product.title}
          </p>
          <div className="pb-[15px]">
            <div className="flex items-center text-[var(--shopBGCart)]">
              <span className="font-extrabold">Category:</span>
              <span className="ml-1">{item.product.category}</span>
            </div>
            <div className="flex items-center text-[var(--shopBGCart)]">
              <span className="font-extrabold">Sub Category:</span>
              <span className="ml-1">{item.product.subCategory}</span>
            </div>
            <div className="flex items-center text-[var(--shopBGCart)]">
              <span className="font-extrabold">Weight:</span>
              <span className="ml-1">0.0 kg</span>
            </div>
          </div>
          <button
            onClick={handleRemoveProduct}
            className="uppercase cursor-pointer text-xs py-1.5 px-2 sm:text-sm sm:py-2 sm:px-3 bg-[var(--shopTextSecondary)] font-bold text-white hover:bg-[var(--shopBGHeader)] transition-all duration-300 ease-in-out"
          >
            Remove
          </button>
        </div>
      </div>
      <div className="py-[15px] text-[var(--shopBGHeader)] leading-[1.43] font-bold flex justify-end lg:justify-center">
        <div className="text-sm text-[var(--shopTextSecondary)] ">
          {selectedCurrency?.sign}
        </div>
        <div className="text-sm text-[var(--shopTextSecondary)] ">
          {(item.product.price * (selectedCurrency?.coefficient ?? 1)).toFixed(
            2,
          )}
        </div>
      </div>
      <div className="py-[15px] mt-4 lg:mt-0  text-[var(--shopBGCart)] leading-[1.43] flex flex-col sm:ml-[180px] lg:ml-0 border-t lg:border-t-0 border-[var(--shopBorderPrimary)]">
        <div className="w-[100px] h-auto my-0 lg:mx-auto pt-8 relative flex ">
          <div
            onClick={() => setLocalQty((prev) => Math.max(1, prev - 1))}
            className="w-[30px] h-[30px] leading-[30px] cursor-pointer text-center text-2xl border border-[var(--shopBorderPrimary)] font-bold"
          >
            -
          </div>
          <input
            type="text"
            value={localQty}
            onChange={(e) => {
              const value = parseInt(e.target.value);
              if (!isNaN(value) && value > 0) {
                setLocalQty(value);
              }
            }}
            className="w-[30px] h-[30px] leading-[30px] text-center text-base border border-[var(--shopBorderPrimary)] mx-[5px] font-bold"
          />
          <div
            onClick={() => setLocalQty((prev) => prev + 1)}
            className="w-[30px] h-[30px] leading-[30px] cursor-pointer text-center text-2xl border border-[var(--shopBorderPrimary)] font-bold"
          >
            +
          </div>
        </div>
        <button
          onClick={updateQuantity}
          className="uppercase w-[100px] h-[30px] lg:mx-auto p-0 text-xs sm:text-sm leading-[1em] mt-[5px] cursor-pointer py-1.5 px-2 sm:py-2 sm:px-3 bg-[var(--shopTextSecondary)] font-bold text-white hover:bg-[var(--shopBGHeader)] transition-all duration-300 ease-in-out"
        >
          Update
        </button>
      </div>
      <div className="py-[15px] mt-4 lg:mt-0 text-[var(--shopBGHeader)] flex justify-end leading-[1.43] font-bold  border-t lg:border-t-0 border-[var(--shopBorderPrimary)] self-start lg:self-center">
        <div className="text-sm text-[var(--shopTextSecondary)] ">
          {selectedCurrency?.sign}
        </div>
        <div className="text-sm text-[var(--shopTextSecondary)] ">
          {(
            item.product.price *
            item.quantity *
            (selectedCurrency?.coefficient ?? 1)
          ).toFixed(2)}
        </div>
      </div>
    </li>
  );
};

export default ShopCartProduct;
