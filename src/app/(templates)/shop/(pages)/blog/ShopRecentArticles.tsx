import { shopBlogRecentArticles, shopBlogTags } from "@/data/shopData";
import Link from "next/link";
import React from "react";

const ShopRecentArticles = () => {
  return (
    <div className="w-full md:w-1/4 md:order-1 px-[15px] relative">
      <div className="bg-white text-[var(--shopTextPrimary)] px-0 py-[30px]">
        <h3 className="m-0 text-sm font-bold uppercase tracking-wide">
          Recent articles
        </h3>
        <ul className="mt-5">
          {shopBlogRecentArticles.map((blog) => {
            return (
              <li
                key={blog.id}
                className="pb-5 border-b border-[var(--shopBorderPrimary)]"
              >
                <h4 className="mt-2.5 text-sm font-bold leading-[1.8em] ">
                  <Link
                    href={`/shop/blog/${blog.slug}`}
                    className="text-[var(--shopBGHeader)] cursor-pointer hover:text-[var(--shopBGOrange)] transition-all duration-300 ease-in-out"
                  >
                    {blog.title}
                  </Link>
                </h4>
                <p className="text-[var(--shopTextSecondary)]">{blog.author}</p>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="mt-[30px] bg-white px-0 py-[30px]">
        <h3 className="m-0 mb-15px text-sm font-bold tracking-wide uppercase text-[var(--shopTextPrimary)]">
          {" "}
          Blog comments
        </h3>
      </div>
      <div className="mt-[30px] bg-white px-0 py-[30px]">
        <h3 className="m-0 mb-15px text-sm font-bold tracking-wide uppercase text-[var(--shopTextPrimary)]">
          Blog Tags
        </h3>
        <ul className="mt-[15px] flex flex-wrap">
          {shopBlogTags.map((tag) => {
            return (
              <li key={tag.id} className="flex items-center mr-4 mb-3">
                <i className="fas fa-tag mr-2 text-[var(--shopBGHeader)]"></i>
                <Link
                  href={"/shop/blog"}
                  className="text-[var(--shopBGHeader)] cursor-pointer hover:text-[var(--shopBGOrange)] transition-all duration-300 ease-in-out"
                >
                  {tag.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default ShopRecentArticles;
