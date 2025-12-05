import { shopBlogData } from "@/data/shopData";
import React from "react";

const ShopHomeBlog = () => {
  return (
    <div className="py-[30px]">
      <div className="shop-subContainer px-[15px] md:px-0 w-100% md:w-[750px] lg:w-[970px] xl:w-[1170px]">
        <div className="py-2 m-0 text-4xl sm:text-5xl uppercase font-bold text-left ">
          <p className="tracking-normal font-light">
            <strong className="font-bold text-[var(--shopTextSecondary)]">
              FROM
            </strong>{" "}
            THE BLOG
          </p>
        </div>
        <div className="overflow-hidden my-[-15px]">
          {shopBlogData.slice(0, 2).map((blog) => {
            return (
              <div key={blog.slug} className="m-h-[1px] relative w-full">
                <div className="mt-[27px] flex gap-10 items-center justify-between flex-col sm:flex-row">
                  <div
                    className={`w-full sm:w-1/2 ${
                      blog.slug ===
                      "non-moderno-harum-class-est-virtute-quo-augue-sint-ipsa-pede"
                        ? "sm:order-1"
                        : "sm:order-2"
                    }`}
                  >
                    <div
                      className=" bg-cover aspect-[16/9]"
                      style={{
                        backgroundImage: `url(${blog.imgSrc})`,
                      }}
                    >
                      {" "}
                    </div>
                  </div>
                  <div
                    className={` mb-10 w-full sm:w-1/2 mt-5 sm:mt-0 ${
                      blog.slug ==
                      "non-moderno-harum-class-est-virtute-quo-augue-sint-ipsa-pede"
                        ? "sm:order-2"
                        : "sm:order-1"
                    }`}
                  >
                    <p>
                      <span
                        style={{ letterSpacing: "1.2px" }}
                        className="leading-[1.5em] text-[15px] uppercase text-[var(--shopTextSecondary)] font-semibold"
                      >
                        {blog.date}
                      </span>
                    </p>
                    <p className="text-[21px] uppercase font-bold py-[15px] text-black">
                      {blog.heading}
                    </p>
                    <p className="hidden md:block">
                      {blog.slug ===
                      "non-moderno-harum-class-est-virtute-quo-augue-sint-ipsa-pede"
                        ? blog.desc.slice(0, 271)
                        : blog.desc.slice(0, 258)}
                      ...
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ShopHomeBlog;
