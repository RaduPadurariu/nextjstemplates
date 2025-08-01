"use client";
import Link from "next/link";
import React from "react";
import { useShopContext } from "../../../context/useShopContext";

const ShopHeaderCart = () => {
  const { cartProducts } = useShopContext();
  return (
    <div className="w-full md:w-1/2 lg:w-auto mb-2.5 lg:m-0 text-center order-2 lg:order-3">
      <div className="shop__header_cart_container flex justify-center sm:justify-end items-center group">
        <Link
          href={"/shop/cart"}
          className=" flex items-center shop__header_cart_link"
        >
          {" "}
          <i className="fa fa-shopping-cart text-2xl pt-2 pr-4 pb-2 pl-[11px]"></i>{" "}
          <span className="inline-block text-base">
            <span className="text-[var(--shopTextSecondary)] pr-1 duration-300 ease-in-out group-hover:text-white">
              {cartProducts?.reduce((x, y) => x + y.quantity, 0)}
            </span>
          </span>{" "}
          <span className="inline-block mr-2 text-base">item(s)</span>
        </Link>
        <div>
          <Link
            href={"/shop/cart"}
            className="relative  min-h-10 w-[130px] uppercase flex justify-center items-center text-[15px] z-[1] text-white bg-[var(--shopBGOrange)] duration-300 ease-in-out rounded-tr-sm rounded-br-sm rounded-tl-none rounded-bl-none"
          >
            Check Out
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ShopHeaderCart;
