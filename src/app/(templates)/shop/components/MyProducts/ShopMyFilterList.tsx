"use client";
import { shopCategoryList } from "@/data/shopData";
import React, { useEffect } from "react";
import { useShopContext } from "../../context/useShopContext";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const ShopMyFilterList = ({
  setCurrentPage,
}: {
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}) => {
  const { selectedCategory, setSelectedCategory } = useShopContext();

  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const encodedCategoryName = searchParams.get("category");
    const selectedIds = searchParams.get("selected");

    if (!encodedCategoryName) return;

    const categoryName = decodeURIComponent(encodedCategoryName);
    const category = shopCategoryList.find((cat) => cat.title === categoryName);

    if (!category || !category.subItem) return;

    const selectedIdsArray = selectedIds
      ? selectedIds.split(",").map(Number)
      : [];

    setSelectedCategory({
      ...category,
      subItem: category.subItem.map((el) => ({
        ...el,
        selected: selectedIdsArray.includes(el.id),
      })),
    });
  }, [searchParams]);

  const handleSelectChange = (id: number, isSelected: boolean) => {
    if (!selectedCategory) return;
    const updatedSubItems = selectedCategory?.subItem.map((el) => {
      if (id === el.id) {
        return { ...el, selected: isSelected };
      }
      return el;
    });

    const selectedSubCategories = updatedSubItems
      ?.filter((item) => item.selected)
      .map((item) => item.id)
      .join(",");

    const encodedCategoryName = encodeURIComponent(selectedCategory?.title);

    const newQuery = `?category=${encodedCategoryName}&selected=${selectedSubCategories}`;
    router.push(`${pathname}${newQuery}`);
    setCurrentPage(1);
  };

  return (
    <div className="w-full md:w-1/4 md:order-1  relative">
      <div className="flex flex-col">
        <div className="p-[15px] lg:p-7 mb-[30px]">
          <h3 className="uppercase text-[var)--shopTextPrimary] m-0 text-sm font-bold tracking-widest">
            {selectedCategory?.title}
          </h3>
          <ul className="mt-[15px]">
            {selectedCategory?.subItem.map((category) => {
              return (
                <li
                  onClick={() =>
                    handleSelectChange(category.id, !category.selected)
                  }
                  key={category.id}
                  className={`${
                    category.selected
                      ? "text-[var(--shopBGOrange)]"
                      : "text-[var(--shopBGHeader)]"
                  } py-[7px] mt-[1px] text-[var(--shopBGHeader)] cursor-pointer `}
                >
                  {category.subCategory}
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
