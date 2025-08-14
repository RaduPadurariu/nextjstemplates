import Link from "next/link";
import React, { Suspense } from "react";
import ShopCurrency from "./Currency/ShopCurrency";
import Image from "next/image";
import ShopHeaderCart from "./HeaderCart/ShopHeaderCart";
import ShopSearchForm from "./SearchForm/ShopSearchForm";

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
                    priority
                  />
                </Link>
              </div>

              {/* Search bar */}
              <Suspense fallback={<div>Loading filter...</div>}>
                <ShopSearchForm />
              </Suspense>

              {/* Cart */}
              <ShopHeaderCart />
            </div>
          </div>
        </div>
      </header>
    </section>
  );
};

export default ShopHeader;
