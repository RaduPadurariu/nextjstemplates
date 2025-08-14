import React, { Suspense } from "react";
import ShopMyProducts from "../../components/MyProducts/ShopMyProducts";

const page = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ShopMyProducts />
    </Suspense>
  );
};

export default page;
