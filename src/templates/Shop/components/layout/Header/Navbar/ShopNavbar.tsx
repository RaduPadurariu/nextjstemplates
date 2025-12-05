"use client";

import { shopCategoryList, shopNavLinks } from "@/data/shopData";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaAngleDown } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { ShopMyProductsCategory } from "@/templates/Shop/types/shopTypes";

const ShopNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [categoryOpen, setCategoryOpen] = useState(false);
  const router = useRouter();

  const handleCategoryClick = (category: ShopMyProductsCategory) => {
    const encodedCategory = encodeURIComponent(
      category.title.toLowerCase().split(" ").join("-")
    );
    const params = new URLSearchParams();
    params.set("category", encodedCategory);
    setIsOpen(!isOpen);
    router.push(`/shop/myProducts?${params.toString()}`);
  };

  useEffect(() => {
    // dispatch(getCartTotal);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  return (
    <section
      className={`text-white bg-[var(--shopBGPrimary)] py-2.5 md:py-0 shop-container ${
        isSticky ? "fixed top-0 right-0 left-0 w-full z-[101] mx-auto" : ""
      }`}
    >
      <div className="shop-subContainer px-3.5 md:px-0 w-100% md:w-[750px] lg:w-[970px] xl:w-[1170px]">
        <nav className="block">
          <h2
            onClick={() => setIsOpen(!isOpen)}
            className="text-white cursor-pointer m-0 overflow-hidden inline-block md:hidden text-2xl"
          >
            <i className="fa fa-bars mr-[5px]"></i>Menu
          </h2>

          <div
            className={`${
              isOpen ? "translate-x-0" : "translate-x-full"
            } md:hidden fixed top-0 bottom-0 right-0 z-[150] bg-black/70 w-[15%] sm:w-[30%] transition-transform duration-300 ease-in-out transform`}
          >
            {" "}
            <div
              onClick={() => setIsOpen(!isOpen)}
              className="absolute top-1/2 left-1/2 w-10 h-10 -mt-5 -ml-5 shop__nav_closeBtn"
            ></div>
          </div>

          <div
            className={`${
              isOpen ? "translate-x-0 " : "-translate-x-full"
            } transition-transform duration-300 ease-in-out md:translate-x-0 md:transition-none md:duration-0 justify-start md:flex flex-col md:flex-row w-[85%] sm:w-[70%] md:w-full transform fixed md:relative left-0 bottom-0 top-0 z-[1000] px-[15px] md:px-0 bg-white md:bg-[var(--shopBGPrimary)]`}
          >
            <div
              onClick={() => setCategoryOpen(!categoryOpen)}
              className="relative cursor-pointer flex items-center w-auto md:uppercase border-r-0 md:border-r border-r-[var(--shopBGSecondary)] md:border-l border-l-[var(--shopBGSecondary)] align-middle h-auto md:h-[69px] leading-[1em] md:leading-[69px] py-[15px] sm:py-3 md:py-0 pr-[35px] md:pr-[30px] pl-0 md:pl-[30px]"
            >
              <div className="flex flex-col text-[var(--shopTextSecondary)] md:text-white text-base sm:text-lg  md:text-xl lg:text-3xl md:font-semibold ">
                <div className="flex items-center">
                  <h2 className="mr-2">Personal</h2>
                  <FaAngleDown
                    className={` transition-transform duration-200 ease-in-out`}
                  />
                </div>

                <div
                  className={`${
                    categoryOpen ? "flex" : "hidden"
                  } bg-white md:bg-[var(--shopBGPrimary)] relative md:absolute w-full top-[100%] left-0 p-0`}
                >
                  <ul className=" text-base font-normal bg-white md:bg-[var(--shopBGPrimary)]  text-[var(--shopTextSecondary)] md:text-white z-[102] flex flex-col pt-3 pb-3 w-full">
                    {shopCategoryList.map((item) => {
                      return (
                        <li className="w-full" key={item.id}>
                          <button
                            className="cursor-pointer py-3 px-0 md:px-[30px] w-full text-left hover:bg-[#333]"
                            onClick={() => handleCategoryClick(item)}
                          >
                            {item.title}
                          </button>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
            <ul className="flex flex-col md:flex-row">
              {shopNavLinks.map((link) => {
                return (
                  <li
                    key={link.id}
                    className="border-t-2 border-t-[lightgray] md:border-t-0"
                  >
                    <Link
                      href={link.link}
                      onClick={() => setIsOpen(!isOpen)}
                      className="text-[var(--shopTextSecondary)] md:text-white text-base sm:text-lg  md:text-xs lg:text-xl  relative md:uppercase align-middle block h-auto md:h-[69px] leading-[1em] md:leading-[69px] py-[15px] sm:py-3 md:py-0 pr-[35px] md:pr-6 pl-0 md:pl-6 border-r-0 md:border-r border-r-[var(--shopBGSecondary)]"
                    >
                      {link.title}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </nav>
      </div>
    </section>
  );
};

export default ShopNavbar;
