import React from "react";
import ShopBreadcrumbs from "../../components/Breadcrumbs/ShopBreadcrumbs";
import { shopBlogData } from "@/data/shopDate";
import Link from "next/link";
import Image from "next/image";
import ShopRecentArticles from "./ShopRecentArticles";

const page = () => {
  return (
    <div className="shop-container">
      <ShopBreadcrumbs />
      <div className="shop-subContainer px-[15px] md:px-0 w-100% md:w-[750px] lg:w-[970px] xl:w-[1170px]">
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-3/4 md:order-2 px-[15px] relative">
            <ul>
              {shopBlogData.map((blog) => {
                return (
                  <li
                    key={blog.slug}
                    className="flex mb-11 lg:mb-8 p-0 flex-col lg:flex-row"
                  >
                    <div className="flex-shrink-0 mr-8">
                      <Image
                        alt="no-blog-img"
                        src={`${blog.blogSrc}`}
                        width={290}
                        height={290}
                        className="object-cover h-full"
                      />
                    </div>
                    <div>
                      <h3 className="mt-0 pt-[15px] text-lg font-bold leading-[1.6em] text-[var(--shopBGHeader)]">
                        {blog.heading}
                      </h3>
                      <p className="text-[var(--shopBGPrimary)] leading-[1.6em] text-sm py-2">
                        {blog.desc}
                      </p>
                      <div className="flex items-center">
                        <p className="text-sm mr-3 font-bold tracking-wider mt-2.5 inline-block leading-[1.5em]">
                          {blog.longDate}
                        </p>
                        <div className="text-[var(--shopTextSecondary)] font-bold text-sm inline-block leading-[1.5em] mt-2.5 tracking-wider">
                          {blog.comments?.length} COMMENTS
                        </div>
                      </div>
                      <Link
                        href={`/shop/blog/${blog.slug}`}
                        className="inline-block mb-[15px] font-bold uppercase mt-[15px] text-lg py-2 px-[25px] mt-20px bg-[var(--shopTextSecondary)] text-white cursor-pointer hover:bg-[var(--shopBGHeader)] transition-all rounded duration-300 ease-in-out"
                      >
                        Read more
                      </Link>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
          <ShopRecentArticles />
        </div>
      </div>
    </div>
  );
};

export default page;
