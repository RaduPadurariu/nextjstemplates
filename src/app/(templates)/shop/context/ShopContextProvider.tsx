"use client";

import { useState } from "react";
import {
  ShopContextProviderType,
  ShopMyProductsCategory,
} from "../types/shopTypes";
import { ShopContext } from "./ShopContext";

export const ShopContextProvider = ({ children }: ShopContextProviderType) => {
  const [categoryChanged, setCategoryChanged] = useState("Scule");
  const [selectedCategory, setSelectedCategory] =
    useState<ShopMyProductsCategory | null>(null);
  return (
    <ShopContext.Provider
      value={{
        categoryChanged,
        setCategoryChanged,
        selectedCategory,
        setSelectedCategory,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};
