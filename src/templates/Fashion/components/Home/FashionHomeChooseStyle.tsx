"use client";

import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

const FashionHomeChooseStyle = () => {
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
      <div ref={ref} className="fashion-container">
        <Image
          src="/images/fashion/home/chooseStyle.png"
          alt="fashion-home-choose"
          width={1170}
          height={514}
          className={`w-full block transition-all duration-700 ease-out ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-100"
          }`}
        />
      </div>
    </section>
  );
};

export default FashionHomeChooseStyle;
