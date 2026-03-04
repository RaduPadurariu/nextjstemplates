import React from "react";
import FashionNavList from "../Header/FashionNavList";

const FashionFooter = () => {
  return (
    <footer className="py-6">
      <div className="fashion-container mx-auto py-6">
        <div className="p-8 lg:py-11 lg:px-14 border-3 border-[var(--fashionTextSecondary)] flex flex-col sm:flex-row sm:justify-between">
          <div className="flex flex-col md:flex-row w-full sm:w-4/5 md:items-center">
            <h2 className=" mr-0 md:mr-8 text-[var(--fashionTextHeading)] whitespace-nowrap leading-4 m-0 tracking-[0.3px]] text-2xl md:text-xl lg:text-3xl fashionHeadingFamily font-bold">
              Let’s Stay Connected!
            </h2>
            <p className="pt-[15px] text-[13px] font-medium leading-5  py-3 md:py-0">
              Sign up today for our newsletter and receive{" "}
              <span className="text-xs md:text-lg font-semibold text-[var(--fashionTextSecondary)]">
                15% OFF
              </span>{" "}
              your first purchase, and also get our sneak peeks, tips, and
              exclusive offers.
            </p>
          </div>
          <div className="w-full sm:w-1/5 flex items-center sm:justify-end">
            <button className="text-[15px] lg:text-lg py-2.5 lg:py-[13px] px-[15px] lg:px-[27px] bg-[var(--fashionTextSecondary)] leading-[1.2em] hover:bg-[var(--fashionTextHeading)] transition-all duration-300 ease-in-out cursor-pointer text-white font-semibold tracking-[0.2px]">
              sign up
            </button>
          </div>
        </div>
      </div>
      <div className="fashion-container flex justify-center mb-9">
        <FashionNavList variant="footer" />
      </div>

      <div className="fashion-container text-sm my-6 text-center">
        © 2025 Radu Padurariu. Inspired by&nbsp;
        <a
          href="https://preview.themeforest.net/item/alices-lingerie-store-and-fashion-boutique/full_screen_preview/19274651"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[var(--fashionTextSecondary)] hover:text-[var(--fashionTextHeading)] transition-all duration-300 ease-in-out"
        >
          ThemeREX{" "}
        </a>
      </div>
    </footer>
  );
};

export default FashionFooter;
