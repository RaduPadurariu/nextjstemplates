"use client";

import { useEffect, useState } from "react";
import {
  ShopContextProviderType,
  ShopCurrencyType,
  ShopMyCartProduct,
  ShopMyProduct,
  ShopMyProductLocalCart,
} from "../types/shopTypes";
import { ShopContext } from "./ShopContext";
import { shopCurrency, shopMyProductList } from "@/data/shopData";

export const ShopContextProvider = ({ children }: ShopContextProviderType) => {
  const [selectedCurrency, setSelectedCurrency] =
    useState<ShopCurrencyType | null>(shopCurrency[1]);

  const [cartProducts, setCartProducts] = useState<ShopMyCartProduct[]>([]);
  const [isCartInitialized, setIsCartInitialized] = useState(false);

  // Set initial currency and cart products from local storage
  useEffect(() => {
    try {
      const storedCurrency = localStorage.getItem("shopCurrency");
      if (storedCurrency) {
        const found = shopCurrency.find(
          (c) => c.currency === JSON.parse(storedCurrency),
        );
        setSelectedCurrency(found || shopCurrency[1]);
      } else {
        setSelectedCurrency(shopCurrency[1]);
      }
    } catch (e) {
      console.error("Error parsing stored currency", e);
      setSelectedCurrency(shopCurrency[1]);
    }

    try {
      const raw = localStorage.getItem("shopCart");
      const parsed: ShopMyProductLocalCart[] = raw ? JSON.parse(raw) : [];

      const restored = parsed
        .map(({ id, quantity }) => {
          const product = shopMyProductList.find((p) => p.id === id);
          if (!product) return null;
          return { product, quantity };
        })
        .filter((p): p is ShopMyCartProduct => p !== null);

      setCartProducts(restored);
      setIsCartInitialized(true);
    } catch (e) {
      console.error("Failed to parse localStorage cart", e);
      setCartProducts([]);
    }
  }, []);

  // Save in local storage every time we update quantity
  useEffect(() => {
    if (!isCartInitialized) return;

    const forStorage = cartProducts.map((item) => ({
      id: item.product.id,
      quantity: item.quantity,
    }));

    localStorage.setItem("shopCart", JSON.stringify(forStorage));
  }, [cartProducts, isCartInitialized]);

  // Add a product to shopping cart
  const handleAddToCart = (item: ShopMyProduct) => {
    const existingItem = cartProducts?.find(
      (entry) => entry.product.id === item.id,
    );

    if (existingItem) {
      const updatedCart = cartProducts?.map((entry) =>
        entry.product.id === item.id
          ? { ...entry, quantity: entry.quantity + 1 }
          : entry,
      );
      setCartProducts(updatedCart);
    } else {
      const newEntry = {
        product: item,
        quantity: 1,
      };
      setCartProducts([...(cartProducts || []), newEntry]);
    }
  };

  return (
    <ShopContext.Provider
      value={{
        selectedCurrency,
        setSelectedCurrency,
        cartProducts,
        setCartProducts,
        handleAddToCart,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};
