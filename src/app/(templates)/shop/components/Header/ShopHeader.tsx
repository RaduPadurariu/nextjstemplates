import Link from "next/link";
import React from "react";
import ShopCurrency from "./Currency/ShopCurrency";
import Image from "next/image";

const ShopHeader = () => {
  return (
    <section className="shop-container">
      <header className="relative z-99 shadow-[0_0_5px_#0000000d] bg-[var(--shopBGSecondary)]">
        <div className="my-0 mx-auto ">
          {/* Account */}
          <div className=" text-white order-1">
            <div className="flex justify-end shop-subContainer px-6 md:px-0 w-100% md:w-[750px] lg:w-[970px] xl:w-[1170px]">
              <div className="flex items-center h-14 w-full md:w-auto">
                <div className="inline-block mr-6 align-middle">
                  <Link
                    href="/shop/account"
                    className="text-white font-normal text-sm"
                  >
                    <i className="fa fa-user text-[var(--shopTextSecondary)] mr-1.5 text-lg"></i>
                    <span>My Account</span>
                  </Link>
                </div>

                <ShopCurrency />
              </div>
            </div>
          </div>

          <div className="bg-[var(--shopBGHeader)] text-white py-2.5 sm:py-0">
            <div className="flex justify-between items-center flex-wrap lg:flex-nowrap shop-subContainer w-100% md:w-[750px] lg:w-[970px] xl:w-[1170px] px-4 md:px-0">
              {/* Logo */}
              <div className="shop__logo_container flex items-center justify-center">
                <Link href={"/shop"} className="inline-block text-lg uppercase">
                  <Image
                    width={270}
                    height={161}
                    src="/images/shop/logo.png"
                    alt="no-logo-img"
                    className="align-middle"
                  />
                </Link>
              </div>

              {/* Search bar */}
              <div className="mb-2.5 lg:mb-0 order-3 lg:order-2 w-full lg:w-auto">
                <div className="overflow-hidden shop__header_searchBar">
                  <form
                    action=""
                    className="inline-block relative w-full pr-10 rounded overflow-hidden bg-white shadow-[inset_0_0_39px_1px_#00000059]"
                  >
                    <input
                      type="text"
                      className="border-0 h-[42px] w-full py-[11px] bg-transparent pl-3.5 text-[var(--shopTextPrimary)] text-sm"
                    />
                    <button className="absolute right-0 top-0 bottom-0 text-2xl w-11 pt-0 text-[var(--shopTextSecondary)] transition-all duration-500 ease-in-out m-0 overflow-visible font-sans leading-[1.15] ">
                      <i className="fa fa-search"></i>
                    </button>
                  </form>
                </div>
              </div>

              {/* Cart */}
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
                        {8}
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
            </div>
          </div>
        </div>
      </header>
    </section>
  );
};

export default ShopHeader;
