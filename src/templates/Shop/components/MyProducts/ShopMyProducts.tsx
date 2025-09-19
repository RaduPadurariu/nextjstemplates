"use client";
import React, { Suspense, useState } from "react";
import {
  shopCategoryList,
  shopItemsPerPageOptions,
  shopMyProductList,
  shopMyProductsSortOptions,
} from "@/data/shopData";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import ShopMyFilterList from "./ShopMyFilterList";
import ShopBreadcrumbs from "../Breadcrumbs/ShopBreadcrumbs";
import { useShopContext } from "../../context/useShopContext";
import { ShopMyProductsCategory } from "../../types/shopTypes";
import ShopPagination from "../Pagination/ShopPagination";

const ShopMyProducts = () => {
  const [viewType, setViewType] = useState<"grid" | "list">("grid");
  const { selectedCurrency, handleAddToCart } = useShopContext();

  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const category = searchParams.get("category");
  const subCategory = searchParams.get("subCategory");
  const currentSort = searchParams.get("sort") ?? "ID";
  const itemsPerPage = parseInt(searchParams.get("limit") ?? "9", 10);
  const currentPage = searchParams.get("page") ?? "1";

  let selectedCategory: ShopMyProductsCategory | null =
    shopCategoryList.find((c) => c.slug === category) ?? null;

  let filteredProducts = shopMyProductList.slice(10);

  const q = (searchParams.get("q") ?? "").trim().toLowerCase();
  if (q.length > 0) {
    filteredProducts = filteredProducts.filter((p) =>
      p.title.toLowerCase().includes(q)
    );
  }

  if (category) {
    filteredProducts = filteredProducts.filter(
      (c) => c.category === selectedCategory?.title
    );

    if (subCategory) {
      filteredProducts = filteredProducts.filter((s) =>
        selectedCategory?.subItem
          .filter((o) => subCategory?.includes(o.slug))
          .map((el) => el.subCategory)
          .includes(s.subCategory)
      );
    }
  }

  const sortFunction = shopMyProductsSortOptions.find(
    (el) => el.value === currentSort
  )?.sortFunction;

  filteredProducts = sortFunction
    ? [...filteredProducts].sort(sortFunction)
    : filteredProducts;

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

  const startIndex = (Number(currentPage) - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const displayProducts = filteredProducts.slice(startIndex, endIndex);

  const clearCategory = () => {
    const params = new URLSearchParams(searchParams.toString());
    params.delete("category");
    params.delete("subCategory");
    params.set("page", "1");
    selectedCategory = null;
    router.replace(`${pathname}?${params.toString()}`);
  };

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("sort", e.target.value);
    params.set("page", "1");
    router.replace(`${pathname}?${params.toString()}`);
  };

  const handleItemsPerPage = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("limit", e.target.value);
    params.set("page", "1");
    router.replace(`${pathname}?${params.toString()}`);
  };

  const handlePageChange = (page: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", String(page));
    router.replace(`${pathname}?${params.toString()}`);
  };

  return (
    <div className="shop-container">
      <ShopBreadcrumbs />
      <div className="shop-subContainer px-[15px] md:px-0 w-100% md:w-[750px] lg:w-[970px] xl:w-[1170px]">
        <div className="flex flex-col md:flex-row">
          <Suspense fallback={<div>Loading filter...</div>}>
            <ShopMyFilterList selectedCategory={selectedCategory} />
          </Suspense>
          <div className="w-full md:w-3/4 px-[15px] relative">
            <div className="flex items-center">
              <h1 className="text-3xl font-bold m-0 text-[var(--shopBGHeader)]">
                {selectedCategory?.title}
              </h1>
              {selectedCategory && (
                <div className="ml-2">
                  <button
                    onClick={clearCategory}
                    className="text-[var(--shopBGHeader)] hover:text-red-500 cursor-pointer duration-300 ease-in-out transition-all"
                    title="Remove category"
                  >
                    ✕
                  </button>
                </div>
              )}
            </div>
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

              {/* Sort */}
              <div className="mt-2.5 ml-0 md:ml-2.5  flex">
                <label
                  htmlFor="shop-sortCatalog"
                  className="leading-[34px] text-sm text-[var(--shopBGCart)] inline-block max-w-full whitespace-nowrap"
                >
                  Sort by:
                </label>
                <select
                  id="shop-sortCatalog"
                  value={currentSort}
                  onChange={handleSortChange}
                  className="inline-block w-auto align-top text-[var(--shopBGHeader)] border border-[var(--shopBorderPrimary)] text-sm bg-white leading-[1.43] py-1.5 px-2.5 h-[34px]"
                >
                  {shopMyProductsSortOptions.map((option) => (
                    <option key={option.id} value={option.value}>
                      {option.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Items per page */}
              <div className="mt-2.5 order-3 md:order-4">
                <label
                  htmlFor="shop-showCatalog"
                  className="leading-[34px] text-sm text-[var(--shopBGCart)] inline-block max-w-full"
                >
                  Show:
                </label>
                <select
                  value={itemsPerPage}
                  onChange={handleItemsPerPage}
                  id="shop-showCatalog"
                  className="inline-block w-auto align-top text-[var(--shopBGHeader)] border border-[var(--shopBorderPrimary)] text-sm bg-white leading-[1.43] py-1.5 px-2.5 h-[34px]"
                >
                  {shopItemsPerPageOptions.map((option) => (
                    <option key={option.id} value={option.value}>
                      {option.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Count */}
              <div className="mt-[15px] mr-2.5 ml-auto text-[var(--shopBGHeader)] leading-[25px] order-4 md:order-3">
                {filteredProducts.length} items
              </div>
            </div>
            <ul
              className={`flex flex-col w-full ${
                viewType == "grid" ? "lg:flex-row flex-wrap" : "lg:flex-col"
              }`}
            >
              {displayProducts.map((product, index) => (
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
                        viewType == "grid" ? "lg:pt-4 line-clamp-2" : "lg:pt-1"
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
              ))}
            </ul>
            <Suspense key={searchParams.toString()}>
              <ShopPagination
                currentPage={Number(currentPage)}
                itemsPerPage={itemsPerPage}
                filteredProducts={filteredProducts}
                handlePageChange={handlePageChange}
                totalPages={totalPages}
              />
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopMyProducts;
