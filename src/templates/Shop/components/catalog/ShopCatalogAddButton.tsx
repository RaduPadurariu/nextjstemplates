import React from "react";
import { ShopMyProduct } from "../../types/shopTypes";

const ShopCatalogAddButton = ({
  product,
  handleAddToCart,
}: {
  product: ShopMyProduct;
  handleAddToCart: (product: ShopMyProduct) => void;
}) => {
  return (
    <button
      type="button"
      className="pt-4 flex group mt-auto"
      onClick={() => {
        handleAddToCart(product);
      }}
    >
      <div className="relative text-white p-0  rounded flex justify-around cursor-pointer bg-[var(--shopTextSecondary)] group-hover:bg-[var(--shopBGOrange)] transition-all duration-300 ease-in-out">
        <i className="fa fa-shopping-cart z-[1] text-2xl cursor-pointer rounded text-white bg-[var(--shopBGPrimary)] group-hover:bg-[var(--shopBGOrange)] p-2 transition-all duration-300 ease-in-out"></i>
        <span className="uppercase block font-normal text-white text-sm cursor-pointer py-[10px] px-[7px] lg:px-[17px]">
          Add to cart
        </span>
      </div>
    </button>
  );
};

export default ShopCatalogAddButton;
