"use client";

import React from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import {
  ShopMyProductsCategory,
  ShopMyProductsSubCategory,
} from "../../types/shopTypes";

const ShopMyFilterList = ({
  selectedCategory,
}: {
  selectedCategory: ShopMyProductsCategory | null;
}) => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const selectedSubs = (searchParams.get("subCategory") ?? "")
    .split(",")
    .filter(Boolean);

  const handleSelectChange = (subcategory: ShopMyProductsSubCategory) => {
    const params = new URLSearchParams(searchParams.toString());
    const selected = (searchParams.get("subCategory") ?? "")
      .split(",")
      .filter(Boolean);
    const newSlug = subcategory.slug;

    if (selected.includes(newSlug)) {
      const updated = selected.filter((s) => s !== newSlug);
      if (updated.length > 0) {
        params.set("subCategory", updated.join(","));
      } else {
        params.delete("subCategory");
      }
    } else {
      selected.push(newSlug);
      params.set("subCategory", selected.join(","));
    }
    params.set("page", "1");
    router.replace(`${pathname}?${params.toString()}`);
  };

  return (
    <div className="w-full md:w-1/4 relative">
      <div className="flex flex-col">
        <div className="p-[15px] lg:p-7 mb-[30px]">
          <h3 className="uppercase text-[var(--shopTextPrimary] m-0 text-sm font-bold tracking-widest">
            {selectedCategory?.title}
          </h3>
          <ul className="mt-[15px]">
            {selectedCategory &&
              selectedCategory?.subItem.map((subcategory) => {
                return (
                  <li
                    onClick={() => handleSelectChange(subcategory)}
                    key={subcategory.id}
                    className={`${
                      selectedSubs.includes(subcategory.slug)
                        ? "text-[var(--shopBGOrange)]"
                        : "text-[var(--shopBGHeader)]"
                    } py-[7px] mt-[1px] text-[var(--shopBGHeader)] cursor-pointer `}
                  >
                    {subcategory.subCategory}
                  </li>
                );
              })}
          </ul>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="relative w-full">
          <div
            className="relative bg-no-repeat overflow-hidden w-full h-auto bg-cover bg-center aspect-[4/3]"
            style={{
              backgroundImage:
                "url('/images/shop/Catalog/sidebar_catalog.png')",
            }}
          ></div>
          <div className="absolute top-0 left-0 right-0 bottom-0 p-[15px] flex flex-wrap items-center justify-center">
            <h3 className="text-white text-[22px] m-0">NEW COLLECTION</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopMyFilterList;
