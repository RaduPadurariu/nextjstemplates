"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

const FashionHomeRetro = () => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
      }
    });

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);
  return (
    <section className="py-8 md:py-12">
      <div
        ref={ref}
        className={`transition-all duration-700 ease-out ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-100"
        } fashion-container flex flex-col md:flex-row`}
      >
        <div className="w-full md:w-1/2 max-h-[400px] md:max-h-full overflow-hidden">
          <Image
            alt="retro-img"
            src="/images/fashion/home/retro1.png"
            width={585}
            height={800}
          />
        </div>
        <div className="w-full md:w-1/2 opacity-80">
          <div className="flex flex-col items-center bg-[var(--fashionTextSecondary)] h-full py-[15%] px-[15%] text-white">
            <Image
              alt="retro-img"
              src="/images/fashion/home/retro2.png"
              width={122}
              height={73}
              className="mb-10"
            />
            <h2 className="text-6xl lg:text-[86px] font-bold tracking-[1px leading-[1em] text-center fashionHeadingFamily">
              Retro Briefs
            </h2>
            <h5 className="uppercase font-semibold text-sm tracking-[1px] leading-[24px] my-4 text-center max-w-[200px]">
              embrace your inner modern pin-up
            </h5>

            <button className="text-white text-base uppercase mt-8 lg:mt-16 border-b font-semibold cursor-pointer border-b-white hover:border-b-[var(--fashionTextHeading)] hover:text-[var(--fashionTextHeading)] transition-colors duration-300 ease-in-out">
              shop now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FashionHomeRetro;
