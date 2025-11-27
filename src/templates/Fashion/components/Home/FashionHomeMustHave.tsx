import { fashionHomeMustHave } from "@/data/fashionData";
import Image from "next/image";
import React from "react";

const FashionHomeMustHave = () => {
  return (
    <section className="py-8 md:py-12">
      <div className="fashion-container flex flex-col items-center">
        <h3 className="text-3xl md:text-[42px] text-[var(--fashionTextHeading)] fashionHeadingFamily font-semibold mb-2">
          Must Have
        </h3>
        <p className="uppercase text-xs tracking-[1.2px] leading-[2.2em] font-medium mb-10">
          a touch of coverage never felt so sexy
        </p>
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6">
          {fashionHomeMustHave.map((item) => {
            return (
              <li key={item.id} className="flex flex-col items-center">
                <div className="w-full relative group overflow-hidden mb-4 cursor-pointer">
                  <Image
                    src={item.src}
                    alt="no-mustHave-img"
                    width={300}
                    height={410}
                    className="w-full block transition-all duration-300 group-hover:opacity-0"
                  />
                  <Image
                    src={item.src2}
                    alt="no-mustHave-img"
                    width={300}
                    height={410}
                    className="w-full block absolute inset-0 opacity-0 transition-all duration-300 group-hover:opacity-100"
                  />

                  <div
                    className="
      absolute left-0 bottom-0 w-full text-center text-xs 
      translate-y-full group-hover:translate-y-0
      transition-all duration-300 ease-in-out
    "
                  >
                    <div className="flex w-full font-semibold">
                      <button className="cursor-pointer w-1/2 text-xs text-white bg-[var(--fashionTextSecondary)] py-1 hover:bg-[var(--fashionTextHeading)] transition-all duration-300 ease-in-out">
                        buy now
                      </button>
                      <button className="cursor-pointer w-1/2 text-white bg-[var(--fashionTextHeading)] py-1 text-xs">
                        details
                      </button>
                    </div>
                  </div>
                </div>
                <h6 className="px-2 text-center text-sm hover:text-[var(--fashionTextSecondary)] transition-all duration-300 ease-in-out cursor-pointer">
                  {item.title}
                </h6>
                <div className="mt-auto flex flex-col items-center">
                  <ul className="flex py-2">
                    {[...Array(5)].map((_, i) => (
                      <li key={i} className="text-[10px] mr-0.5">
                        <i
                          className={
                            i < item.stars
                              ? "fa-solid fa-star text-black-700"
                              : "fa-solid fa-star text-gray-300"
                          }
                        ></i>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto text-sm lg:text-base text-[var(--fashionTextSecondary)]">
                    {item.minPrice.toFixed(2) +
                      "$ - " +
                      item.maxPrice.toFixed(2) +
                      "$"}
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default FashionHomeMustHave;
