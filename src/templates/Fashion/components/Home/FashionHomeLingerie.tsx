import {
  fashionHomeLingerieLinks1,
  fashionHomeLingerieLinks2,
  fashionHomeLingerieLinks3,
} from "@/data/fashionData";
import React from "react";

const FashionHomeLingerie = () => {
  return (
    <section className="py-8 md:py-12">
      <div className="fashion-container flex">
        <div className="w-full flex flex-col md:flex-row justify-between gap-5">
          <div className="">
            <h3 className="text-[var(--fashionTextHeading)] text-4xl md:text-3xl lg:text-4xl leading-[1em] fashionHeadingFamily">
              browse
            </h3>
            <h2 className="text-[var(--fashionTextHeading)] font-bold fashionHeadingFamily text-6xl md:text-4xl lg:text-6xl">
              Lingerie
            </h2>
            <p className="uppercase tracking-[1px] text-xs mt-3.5">
              select a category
            </p>
          </div>
          <ul className="tracking-[1px] leading-[25px] pl-6 md:pl-0">
            {fashionHomeLingerieLinks1.map((item) => {
              return (
                <li key={item.id}>
                  <button className="text-xs text-[var(--fashionTextHeading)] hover:text-[var(--fashionTextSecondary)] transition-all duration-300 ease-in-out cursor-pointer">
                    {item.text}
                  </button>
                </li>
              );
            })}
          </ul>
          <ul className="tracking-[1px] leading-[25px] pl-6 md:pl-0">
            {fashionHomeLingerieLinks2.map((item) => {
              return (
                <li key={item.id}>
                  <button className="text-xs text-[var(--fashionTextHeading)] hover:text-[var(--fashionTextSecondary)] transition-all duration-300 ease-in-out cursor-pointer">
                    {item.text}
                  </button>
                </li>
              );
            })}
          </ul>
          <ul className="tracking-[1px] leading-[25px] pl-6 md:pl-0">
            {fashionHomeLingerieLinks3.map((item) => {
              return (
                <li key={item.id}>
                  <button className="text-xs text-[var(--fashionTextHeading)] hover:text-[var(--fashionTextSecondary)] transition-all duration-300 ease-in-out cursor-pointer">
                    {item.text}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default FashionHomeLingerie;
