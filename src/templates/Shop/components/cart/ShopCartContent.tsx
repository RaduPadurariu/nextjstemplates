import Link from "next/link";
import React from "react";
import { ShopCurrencyType, ShopMyCartProduct } from "../../types/shopTypes";
import ShopCartProduct from "./ShopCartProduct";

const ShopCartContent = ({
  cartProducts,
  setCartProducts,
  selectedCurrency,
}: {
  cartProducts: ShopMyCartProduct[];
  setCartProducts: (value: ShopMyCartProduct[]) => void;
  selectedCurrency: ShopCurrencyType | null;
}) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  const handleRemoveAllProducts = () => {
    if (confirm("Are you sure you want to clear your cart?")) {
      setCartProducts([]);
    }
  };
  return (
    <div className="min-h-[400px]">
      <div className="shop-subContainer px-[15px] md:px-0 w-100% md:w-[750px] lg:w-[970px] xl:w-[1170px]">
        <h1 className="mt-[25px] pb-2.5 text-xl sm:text-[50px] text-center uppercase font-bold tracking-widest text-[var(--shopBGHeader)]">
          Your Shopping Cart
        </h1>
        {!cartProducts || cartProducts.length === 0 ? (
          <div className="">
            <p className="text-[#85741f] bg-[#fff5c3] border border-[#edd870] py-2.5 px-[15px] mt-7">
              It appears that your cart is currently empty.{" "}
              <Link
                href="/shop/myProducts"
                className="inline-block text-inherit underline"
              >
                Browse collections to find the products you are interested.
              </Link>
            </p>
          </div>
        ) : (
          <form action="" onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 lg:grid-cols-[6fr_1fr_1fr_1fr] border-b-2 border-[var(--shopBorderPrimary)]">
              <div className="py-2.5  text-[var(--shopBGHeader)] leading-[1.43] font-bold">
                Product
              </div>
              <div className="py-2.5 text-[var(--shopBGHeader)] leading-[1.43] font-bold text-right ml-auto lg:ml-0 lg:text-center max-w-[200px]">
                Price
              </div>
              <div className="hidden lg:block py-2.5  text-[var(--shopBGHeader)] leading-[1.43] font-bold text-center">
                Quantity
              </div>
              <div className="hidden lg:block py-2.5 text-[var(--shopBGHeader)] leading-[1.43] font-bold text-right">
                Total
              </div>
            </div>
            <ul>
              {cartProducts.map((item) => {
                return (
                  <ShopCartProduct
                    key={item.product.id}
                    item={item}
                    cartProducts={cartProducts}
                    setCartProducts={setCartProducts}
                    selectedCurrency={selectedCurrency}
                  />
                );
              })}
            </ul>

            <div className="py-[15px] flex justify-between font-bold border-b border-[var(--shopBorderPrimary)]">
              <div className="text-base sm:text-lg">Total weight</div>
              <div className="text-lg">0.0 lb</div>
            </div>
            <div className="py-[15px] flex justify-between font-bold border-b border-[var(--shopBorderPrimary)]">
              <div className="text-base sm:text-lg">Total price</div>
              <div className="text-lg text-[var(--shopTextSecondary)] flex justify-end">
                <div className="">{selectedCurrency?.sign}</div>
                <div className="">
                  {(
                    cartProducts.reduce(
                      (x, y) => x + y.product.price * y.quantity,
                      0,
                    ) * (selectedCurrency?.coefficient ?? 1)
                  ).toFixed(2)}
                </div>
              </div>
            </div>
            <div className="py-[15px] font-bold border-b border-[var(--shopBorderPrimary)]">
              <label htmlFor="" className="text-[var(--shopBGCart)] text-sm">
                Add a note to your order
              </label>
              <textarea
                name=""
                id=""
                className="text-sm text-[var(--shopTextPrimary)] min-h-[100px] h-auto min-w-full align-top block border border-[var(--shopBorderPrimary)] leading-[1.43] py-1.5 px-2.5"
              ></textarea>
              <p className="text-[#85741f] bg-[#fff5c3] border border-[#edd870] py-2.5 px-[15px] mt-7">
                Tools process all orders in USD. Shipping & taxes calculated at
                checkout.{" "}
              </p>
            </div>
            <div className="py-[15px] flex flex-wrap gap-[15px] justify-between font-bold border-b border-[var(--shopBorderPrimary)] mb-12">
              <div className="flex items-center">
                <Link
                  href={"/shop/myProducts"}
                  className="uppercase cursor-pointer text-xs py-1.5 px-2 sm:text-base sm:py-2 sm:px-3 bg-[var(--shopTextSecondary)] font-bold text-white hover:bg-[var(--shopBGHeader)] transition-all duration-300 ease-in-out"
                >
                  Continue Shopping
                </Link>
                <button
                  onClick={handleRemoveAllProducts}
                  className="ml-5 uppercase cursor-pointer text-xs py-1.5 px-2 sm:text-base sm:py-2 sm:px-3 bg-[var(--shopTextSecondary)] font-bold text-white hover:bg-[var(--shopBGHeader)] transition-all duration-300 ease-in-out"
                >
                  Clear Cart
                </button>
              </div>

              <button
                type="submit"
                className="uppercase cursor-pointer text-xs py-1.5 px-2 sm:text-base sm:py-2 sm:px-3 bg-[var(--shopBGHeader)]  font-bold text-white hover:bg-[var(--shopTextSecondary)] transition-all duration-300 ease-in-out"
              >
                Proceed to checktout
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default ShopCartContent;
