import { fashionHomeArticles } from "@/data/fashionData";
import React from "react";

const FashionHomeArticles = () => {
  return (
    <section className="py-8 md:py-12">
      <div className="duration-700 transition-all ease-out fashion-container flex flex-col items-center">
        <h3 className="text-[var(--fashionTextHeading)] text-3xl md:text-4xl lg:text-5xl fashionHeadingFamily font-bold mb-15">
          Articles
        </h3>
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {fashionHomeArticles.map((item) => {
            return (
              <li key={item.id} className="flex flex-col items-start h-full">
                <h3 className="text-[var(--fashionTextHeading)] font-semibold sm:text-xl mb-5">
                  {item.title}
                </h3>
                <p className="text-[15px] mt-auto text-xs font-light">
                  Quuntur magni dolores eos qui ratione voluptatem sequi
                  nesciunt. Neque porro.
                </p>
                <button className="mt-auto pt-4 uppercase text-[var(--fashionTextSecondary)] hover:text-[var(--fashionTextHeading)] border-b border-b-[var(--fashionTextSecondary)] text-xs font-semibold leading-[16px] tracking-[1px] cursor-pointer transition-all duration-300 ease-in-out">
                  read more
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default FashionHomeArticles;
