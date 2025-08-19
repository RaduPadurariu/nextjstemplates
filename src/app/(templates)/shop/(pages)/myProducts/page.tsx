import React, { Suspense } from "react";
import ShopMyProductsWrapper from "../../components/MyProducts/ShopMyProductsWrapper";

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ShopMyProductsWrapper />
    </Suspense>
  );
}
