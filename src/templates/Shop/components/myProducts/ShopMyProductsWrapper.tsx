"use client";
import React from "react";
import { useSearchParams } from "next/navigation";
import ShopMyProducts from "./ShopMyProducts";

export default function ShopMyProductsWrapper() {
  const searchParams = useSearchParams();
  return <ShopMyProducts key={searchParams.toString()} />;
}
