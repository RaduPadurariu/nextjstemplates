import React from "react";

const FashionHomeShipping = () => {
  return (
    <section className="py-8 md:py-12">
      <div className="fashion-container">
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-[56%] bg-[url('/images/fashion/home/shipping1.png')] bg-cover bg-center  min-h-[350px] md:min-h-[400px] bg-no-repeat">
            <div className="py-14 px-11">
              <h3 className="tracking-[0.2px] text-3xl leading-[1.2em] text-[var(--fashionTextHeading)] fashionHeadingFamily font-semibold">
                Sexy Thongs
              </h3>
              <div className="uppercase text-xs leading-[1.3em] tracking-[1.1px] mt-4 flex flex-col">
                <span className="mb-1">fun and flirty pieces </span>
                <span> seamless look</span>
              </div>
              <button className="uppercase text-[var(--fashionTextSecondary)] hover:text-[var(--fashionTextHeading)] transition-all ease-in-out duration-300 text-xs font-semibold cursor-pointer mt-8 ">
                browse
              </button>
            </div>
          </div>
          <div className="w-full md:w-[44%] bg-[url('/images/fashion/home/shipping2.png')] bg-cover bg-center min-h-[250px] md:min-h-[400px] flex items-center justify-center">
            <div className="bg-white text-[var(--fashionTextHeading)] text-center fashionHeadingFamily p-6 mx-2 group cursor-pointer">
              <h2 className="text-[var(--fashionTextSecondary)] fashionHeadingFamily align-center text-3xl font-semibold">
                Free Shipping
              </h2>
              <div className="text-2xl group-hover:text-[var(--fashionTextSecondary)] transition-all duration-300 ease-in-out">
                on all orders
              </div>
              <div className="text-2xl group-hover:text-[var(--fashionTextSecondary)] transition-all duration-300 ease-in-out">
                over $75!
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FashionHomeShipping;
