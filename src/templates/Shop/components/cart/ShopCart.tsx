"use client";

import React from "react";

import { useShopContext } from "@/templates/Shop/context/useShopContext";

import ShopBreadcrumbs from "../breadcrumbs/ShopBreadcrumbs";
import ShopCartContent from "./ShopCartContent";

const ShopCart = () => {
  const { cartProducts, selectedCurrency, setCartProducts } = useShopContext();

  return (
    <div className="shop-container">
      <ShopBreadcrumbs />
      <ShopCartContent
        cartProducts={cartProducts}
        setCartProducts={setCartProducts}
        selectedCurrency={selectedCurrency}
      />
    </div>
  );
};

export default ShopCart;
