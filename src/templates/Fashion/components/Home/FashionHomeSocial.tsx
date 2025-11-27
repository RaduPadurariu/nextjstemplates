import { fashionHomeSocial } from "@/data/fashionData";
import Image from "next/image";
import React from "react";

const FashionHomeSocial = () => {
  return (
    <section className="py-8 md:py-12 w-full">
      <div className="fashion-container">
        <div className="flex flex-col items-center">
          <h4 className="uppercase tracking-[0.5px] text-[var(--fashionTextHeading)] font-semibold pb-10">
            follow us on{" "}
            <span className="text-[var(--fashionTextSecondary)]">
              @instagram
            </span>
          </h4>
          <ul className="grid grid-cols-2 sm:grid-cols-4 gap-6 w-full">
            {fashionHomeSocial.map((item) => {
              return (
                <li key={item.id}>
                  <Image
                    alt="fashion-social-img"
                    src={item.src}
                    width={350}
                    height={350}
                    className="block w-full"
                  />
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default FashionHomeSocial;
