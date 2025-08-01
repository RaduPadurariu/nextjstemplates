"use client";
import React, { Suspense, useEffect, useState } from "react";
import ShopBreadcrumbs from "../../components/Breadcrumbs/ShopBreadcrumbs";
import {
  shopItemsPerPageOptions,
  shopMyProductList,
  shopMyProductsSortOptions,
} from "@/data/shopData";
import Image from "next/image";
import Link from "next/link";
import { ShopMyProduct } from "../../types/shopTypes";
import ShopMyFilterList from "../../components/MyProducts/ShopMyFilterList";
import { useShopContext } from "../../context/useShopContext";

const ShopMyProductPage = () => {
  const [viewType, setViewType] = useState<"grid" | "list">("grid");
  const { selectedCategory, selectedCurrency, handleAddToCart } =
    useShopContext();
  const [filteredProducts, setFilteredProducts] = useState<ShopMyProduct[]>([]);
  const [shopCatalogOption, setShopCatalogOption] = useState("ID");
  const [displayProducts, setDisplayProducts] = useState<ShopMyProduct[]>([]);
  const [itemsPerPage, setItemsPerPage] = useState(9);
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

  useEffect(() => {
    if (!selectedCategory) return;

    const noneSelected = selectedCategory.subItem.every((el) => !el.selected);

    const filtered = noneSelected
      ? shopMyProductList
          .slice(10)
          .filter((el) => el.category === selectedCategory.title)
      : shopMyProductList
          .slice(10)
          .filter((el) => el.category === selectedCategory.title)
          .filter((e) =>
            selectedCategory.subItem
              .filter((el) => el.selected)
              .map((e) => e.subCategory)
              .includes(e.subCategory)
          );

    const sortFunction = shopMyProductsSortOptions.find(
      (el) => el.value === shopCatalogOption
    )?.sortFunction;

    const sorted = sortFunction ? [...filtered].sort(sortFunction) : filtered;

    setFilteredProducts(sorted);
  }, [selectedCategory, shopCatalogOption]);

  useEffect(() => {
    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    setDisplayProducts(filteredProducts.slice(start, end));
    window.scrollTo(0, 0);
  }, [filteredProducts, currentPage, itemsPerPage]);

  useEffect(() => {
    setCurrentPage(1);
  }, [itemsPerPage]);

  return (
    <div className="shop-container">
      <ShopBreadcrumbs />
      <div className="shop-subContainer px-[15px] md:px-0 w-100% md:w-[750px] lg:w-[970px] xl:w-[1170px]">
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-3/4 md:order-2 px-[15px] relative">
            <h1 className="text-3xl font-bold m-0 text-[var(--shopBGHeader)]">
              {selectedCategory?.title}
            </h1>
            <div className="mt-[30px] text-[var(--shopTextPrimary)]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse potenti. Curabitur euismod augue vel velit malesuada,
              et sodales purus malesuada. Vivamus feugiat sem nec malesuada
              viverra. Duis luctus, ipsum et luctus tincidunt, sapien nunc
              tincidunt nisi, ac rhoncus eros felis non metus. Ut sit amet nunc
              vel justo ultricies porta. Curabitur tristique gravida felis, nec
              posuere eros. Sed dapibus tincidunt quam, nec posuere purus
              porttitor sed.
            </div>
            <div className="mt-[30px] py-2.5 pl-2.5 border border-[var(--shopBorderPrimary)] flex w-full flex-wrap">
              <div className="pt-2.5 hidden lg:flex">
                <button
                  onClick={() => setViewType("grid")}
                  className={`flex items-center justify-center w-8  h-8 ${
                    viewType == "grid" &&
                    "bg-[var(--shopTextPrimary)] text-white"
                  }`}
                >
                  <i className="fa fa-th inline-block text-xl"></i>
                </button>
                <button
                  onClick={() => setViewType("list")}
                  className={`flex items-center justify-center w-8 h-8 ${
                    viewType == "list" &&
                    "bg-[var(--shopTextPrimary)] text-white"
                  }`}
                >
                  <i className="fa fa-th-list inline-block text-xl"></i>
                </button>
              </div>
              <div className="mt-2.5 ml-0 md:ml-2.5  flex">
                <label
                  htmlFor="shop-sortCatalog"
                  className="leading-[34px] text-sm text-[var(--shopBGCart)] inline-block max-w-full whitespace-nowrap"
                >
                  Sort by:
                </label>
                <select
                  name=""
                  id="shop-sortCatalog"
                  value={shopCatalogOption}
                  onChange={(e) => setShopCatalogOption(e.target.value)}
                  className="inline-block w-auto align-top text-[var(--shopBGHeader)] border border-[var(--shopBorderPrimary)] text-sm bg-white leading-[1.43] py-1.5 px-2.5 h-[34px]"
                >
                  {shopMyProductsSortOptions.map((option) => {
                    return (
                      <option key={option.id} value={option.value} className="">
                        {option.name}
                      </option>
                    );
                  })}
                </select>
              </div>
              <div className="mt-2.5 order-3 md:order-4">
                <label
                  htmlFor="shop-showCatalog"
                  className="leading-[34px] text-sm text-[var(--shopBGCart)] inline-block max-w-full"
                >
                  Show:
                </label>
                <select
                  name=""
                  value={itemsPerPage}
                  onChange={(e) => setItemsPerPage(Number(e.target.value))}
                  id="shop-showCatalog"
                  className="inline-block w-auto align-top text-[var(--shopBGHeader)] border border-[var(--shopBorderPrimary)] text-sm bg-white leading-[1.43] py-1.5 px-2.5 h-[34px]"
                >
                  {shopItemsPerPageOptions.map((option) => {
                    return (
                      <option key={option.id} value={option.value}>
                        {option.name}
                      </option>
                    );
                  })}
                </select>
              </div>
              <div className="mt-[15px] mr-2.5 ml-auto text-[var(--shopBGHeader)] leading-[25px] order-4 md:order-3">
                {filteredProducts.length} items
              </div>
            </div>
            <ul
              className={`flex flex-col w-full ${
                viewType == "grid" ? "lg:flex-row flex-wrap" : "lg:flex-col"
              }`}
            >
              {displayProducts.map((product, index) => {
                return (
                  <li
                    key={product.id}
                    className={`px-[15px] h-full mt-[30px] mb-10 flex flex-col sm:flex-row ${
                      viewType == "grid"
                        ? "lg:flex-col lg:w-1/3"
                        : "lg:w-full lg:flex-row"
                    }`}
                  >
                    <div
                      className={`w-full sm:w-1/4 px-[15px] flex items-start justify-center relative ${
                        viewType == "grid" ? "lg:w-full" : "lg:w-1/4"
                      }`}
                    >
                      <Link
                        href="/shop/catalog"
                        className="block relative cursor-pointer"
                      ></Link>
                      <Image
                        src={product.src}
                        alt={`Slide ${index + 1}`}
                        width={270}
                        height={270}
                        className=" align-middle"
                      />
                      <span className="capitalize block absolute left-2.5 text-sm top-[3px] z-50 rounded bg-[var(--shopBGOrange)] font-semibold pt-[2px] px-[6px] pb-[3px] text-center text-white">
                        new!
                      </span>
                    </div>
                    <div
                      className={`w-full sm:w-3/4 px-[15px] ${
                        viewType == "grid" ? "lg:w-full" : "lg:w-3/4"
                      }`}
                    >
                      <div className="flex items-center leading-[40px] border-b border-[var(--shopBorderPrimary)]">
                        <p className="text-2xl lg:text-[40px] text-[var(--shopTextSecondary)] font-bold tracking-tighter pb-[5px]">
                          {selectedCurrency?.sign}
                        </p>
                        <p className="text-2xl lg:text-[40px] text-[var(--shopTextSecondary)] font-bold tracking-tighter pb-[5px]">
                          {(
                            product.price * (selectedCurrency?.coefficient ?? 1)
                          ).toFixed(2)}
                        </p>
                      </div>
                      <div
                        className={`text-base  pb-1 text-[var(--shopBGHeader)] ${
                          viewType == "grid"
                            ? "lg:pt-4 line-clamp-2"
                            : "lg:pt-1"
                        }`}
                      >
                        {product.title}
                      </div>
                      <div
                        className={`hidden sm:block ${
                          viewType == "grid" ? "lg:hidden" : "lg:block"
                        }`}
                      >
                        {product.longDesc}
                      </div>
                      <div
                        className="pt-4 flex group mt-auto"
                        onClick={(e) => handleAddToCart(e, product)}
                      >
                        <div className="relative text-white p-0  rounded flex justify-around cursor-pointer bg-[var(--shopTextSecondary)] group-hover:bg-[var(--shopBGOrange)] transition-all duration-300 ease-in-out">
                          <i className="fa fa-shopping-cart z-[1] text-2xl cursor-pointer rounded text-white bg-[var(--shopBGPrimary)] group-hover:bg-[var(--shopBGOrange)] p-2 transition-all duration-300 ease-in-out"></i>
                          <span className="uppercase block font-normal text-white text-sm cursor-pointer py-[10px] px-[7px] lg:px-[17px]">
                            Add to cart
                          </span>
                        </div>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
            <div className="border border-[var(--shopBorderPrimary)] overflow-hidden mt-[30px] px-2.5 flex flex-col sm:flex-row justify-between ">
              <p className="h-10 leading-10">
                {(currentPage - 1) * itemsPerPage + 1} -
                {(currentPage - 1) * itemsPerPage + itemsPerPage <
                filteredProducts.length
                  ? (currentPage - 1) * itemsPerPage + itemsPerPage
                  : filteredProducts.length}{" "}
                product(s) of {filteredProducts.length}
              </p>
              <ul className="flex items-center">
                <li>
                  <button
                    onClick={() =>
                      setCurrentPage((prev) => Math.max(prev - 1, 1))
                    }
                    disabled={currentPage === 1}
                    className="px-2 cursor-pointer text-[var(--shopBGHeader)] py-1 text-sm leading-10 disabled:opacity-50 disabled:cursor-default"
                  >
                    &lt; Previous
                  </button>
                </li>
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                  (page) => (
                    <li key={page}>
                      <button
                        disabled={currentPage === page}
                        onClick={() => setCurrentPage(page)}
                        className={`px-3  py-1  text-[var(--shopBGHeader)] ${
                          currentPage === page
                            ? "opacity-50 "
                            : "cursor-pointer"
                        }`}
                      >
                        {page}
                      </button>
                    </li>
                  )
                )}
                <li>
                  <button
                    onClick={() =>
                      setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                    }
                    disabled={currentPage === totalPages}
                    className="px-2 py-1 cursor-pointer text-[var(--shopBGHeader)] disabled:opacity-50 disabled:cursor-default"
                  >
                    Next &gt;
                  </button>
                </li>
              </ul>
            </div>
          </div>
          <Suspense fallback={<div>Loading filter...</div>}>
            <ShopMyFilterList setCurrentPage={setCurrentPage} />
          </Suspense>
        </div>
      </div>
    </div>
  );
};

export default ShopMyProductPage;
