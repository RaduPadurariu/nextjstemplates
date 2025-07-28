import { shopBlogData } from "@/data/shopData";
import { notFound } from "next/navigation";
import React from "react";
import ShopBreadcrumbs from "../../../components/Breadcrumbs/ShopBreadcrumbs";
import ShopRecentArticles from "../ShopRecentArticles";
import Link from "next/link";
import ShopSingleBlogForm from "../../../components/Blog/ShopSingleBlogForm";

const BlogSinglePage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;
  const singleBlog = shopBlogData.find((blog) => blog.slug == slug);
  const singleBlogIndex = shopBlogData.findIndex((blog) => blog.slug == slug);
  if (!singleBlog) {
    notFound();
  }

  return (
    <div className="shop-container">
      <ShopBreadcrumbs />
      <div className="shop-subContainer px-[15px] md:px-0 w-100% md:w-[750px] lg:w-[970px] xl:w-[1170px]">
        <div className="flex flex-col md:flex-row mb-10">
          <div className="w-full md:w-3/4 md:order-2 px-[15px] relative">
            <div>
              <div>
                <div
                  className="bg-cover aspect-[16/9]"
                  style={{
                    backgroundImage: `url(${singleBlog.imgSrc})`,
                  }}
                ></div>
                <h1 className="m-0 py-5 border-b border-[var(--shopBorderPrimary)] text-5xl text-[var(--shopBGHeader)]">
                  {singleBlog.heading}
                </h1>
              </div>
              <p className="py-2.5 border-b border-[var(--shopBorderPrimary)]"></p>
              <div className="mt-[15px] whitespace-pre-line">
                {singleBlog.blogContent}
              </div>
              <ul className="m-0 flex flex-wrap mt-5">
                {singleBlog.tags.map((tag) => {
                  return (
                    <li key={tag.id} className="flex items-center mr-4 mb-3">
                      <i className="fas fa-tag mr-1 text-[var(--shopBGHeader)]"></i>
                      <Link
                        href={"/shop/blog"}
                        className="text-[var(--shopBGHeader)] cursor-pointer hover:text-[var(--shopBGOrange)] transition-all duration-300 ease-in-out"
                      >
                        {tag.name}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="flex justify-between items-center w-full">
              {singleBlogIndex == 3 ? (
                <div></div>
              ) : (
                <Link
                  href={`/shop/blog/${shopBlogData[singleBlogIndex + 1].slug}`}
                  className="mt-[30px] whitespace-nowrap mr-[15px] bg-[var(--shopTextSecondary)] border border-[var(--shopTextSecondary)] text-white py-1.5 px-3 text-sm inline-block align-middle font-bold leading-[1.43] text-center cursors-pointer uppercase hover:bg-[var(--shopBGHeader)] transition-all duration-300 ease-in-out"
                >
                  Previous Post
                </Link>
              )}
              {singleBlogIndex == 0 ? (
                <div></div>
              ) : (
                <Link
                  href={`/shop/blog/${shopBlogData[singleBlogIndex - 1].slug}`}
                  className="mt-[30px] whitespace-nowrap mr-[15px] bg-[var(--shopTextSecondary)] border border-[var(--shopTextSecondary)] text-white py-1.5 px-3 text-sm inline-block align-middle font-bold leading-[1.43] text-center cursors-pointer uppercase hover:bg-[var(--shopBGHeader)] transition-all duration-300 ease-in-out"
                >
                  Next Post
                </Link>
              )}
            </div>
            <div className="mt-[30px]">
              <h3 className="text-5xl m-0 text-[var(--shopBGHeader)]">
                {singleBlog.comments?.length} comments
              </h3>
              <ul>
                {singleBlog.comments?.map((comment) => {
                  return (
                    <li
                      key={comment.id}
                      className="mt-[15px] p-[15px] bg-[#0000000a]"
                    >
                      <p className="overflow-hidden text-sm m-0 w-full flex flex-col sm:flex-row justify-between items-start sm:items-center">
                        <span className="font-bold">{comment.author}</span>
                        <span className=" text-sm">{comment.date}</span>
                      </p>
                      <p className="pt-2.5 text-sm">{comment.comment}</p>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="mt-[30px]">
              <ShopSingleBlogForm />
            </div>
          </div>

          <ShopRecentArticles />
        </div>
      </div>
    </div>
  );
};

export default BlogSinglePage;
