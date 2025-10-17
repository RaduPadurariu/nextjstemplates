import {
  travelBlogHomeBlogList,
  travelBlogHomeCategoryList,
} from "@/data/travel";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import TravelBlogSideBar from "./TravelBlogSideBar";

const TravelBlogHome = () => {
  return (
    <>
      {/* Banner */}
      <section
        className="py-[130px] bg-cover bg-center bg-[url('/images/travel/blog/blog-home-banner.jpg')] relative"
        id=""
      >
        <div className="absolute inset-0 bg-[#04091E66]"></div>
        <div className="travel-container">
          <div className="flex items-center justify-center">
            <div className="mt-[70px] py-[90px] text-center w-full z-10">
              <h1 className="text-white font-bold max-w-[500px] text-5xl text-center mx-auto">
                Dude You’re Getting a Telescope
              </h1>
              <p className="text-white my-5">
                There is a moment in the life of any aspiring astronomer that it
                is time to buy that first
              </p>
              <button className="bg-white font-semibold text-[var(--travelTextHeading)] leading-[42px] px-[30px] text-sm relative cursor-pointer border border-transparent hover:text-white hover:bg-transparent hover:border-white transition-all duration-300 ease-in-out">
                View More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Category list */}
      <section className="bg-[#f9f9ff] py-[90px]">
        <div className="travel-container">
          <ul className="grid grid-cols-1 lg:grid-cols-3">
            {travelBlogHomeCategoryList.map((category) => {
              return (
                <li
                  key={category.id}
                  className="w-full relative px-0 lg:px-[15px] group"
                >
                  <div className="text-center relative pb-[50px] lg:pb-0">
                    <div className="relative">
                      <div className="absolute inset-0 bg-[#000000D9] m-[7%] group-hover:bg-[#f8b600d4] transition-all duration-300 ease-in-out"></div>
                      <div className="z=10">
                        <div className="">
                          <Image
                            className="w-full"
                            src={category.src}
                            alt="Blog Home Category Image"
                            width={360}
                            height={220}
                          />
                        </div>
                        <div className="absolute top-[32%] bottom-0 left-0 right-0 text-white mx-auto">
                          <h4 className="uppercase mx-auto text-white font-semibold text-lg">
                            {category.title}
                          </h4>
                          <span className="h-[1%] w-[60%] bg-white inline-block"></span>
                          <p className="mb-4">{category.desc}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      {/* Post content area */}
      <section className="bg-[#f9f9ff]">
        <div className="travel-container">
          <div className="flex flex-col lg:flex-row">
            <ul className="w-full lg:w-2/3 px-0 lg:px-[15px]">
              {travelBlogHomeBlogList.map((blog) => {
                return (
                  <li
                    key={blog.id}
                    className="mb-[50px] flex flex-col md:flex-row"
                  >
                    <div className="w-full md:w-1/4 text-left md:text-right mt-0 lg:mt-[35px] px-0 md:px-[15px]">
                      <ul className="mb-[30px] flex flex-wrap md:justify-end ">
                        {blog.tags.map((tag, i) => {
                          return (
                            <li
                              key={i}
                              className="cursor-pointer text-[var(--travelTextHeading)] text-sm hover:text-[var(--travelTextSecondary)] transition-all duration-300 ease-in-out"
                            >
                              <button className="cursor-pointer">
                                {tag}
                                {i + 1 < blog.tags.length ? "," + "\u00A0" : ""}
                              </button>
                            </li>
                          );
                        })}
                      </ul>
                      <ul className="grid grid-cols-2 md:grid-cols-1">
                        <li className="mb-4">
                          <button className="mr-2.5 cursor-pointer hover:text-[var(--travelTextSecondary)] transition-all ease-in-out duration-300">
                            {blog.author}
                          </button>
                          <i className="fa fa-user"></i>
                        </li>
                        <li className="mb-4">
                          <button className="mr-2.5 cursor-pointer hover:text-[var(--travelTextSecondary)] transition-all ease-in-out duration-300">
                            {blog.date}
                          </button>
                          <i className="fa fa-calendar"></i>
                        </li>
                        <li className="mb-4">
                          <button className="mr-2.5 cursor-pointer hover:text-[var(--travelTextSecondary)] transition-all ease-in-out duration-300">
                            {blog.views} Views
                          </button>
                          <i className="fa fa-eye"></i>
                        </li>
                        <li className="mb-4">
                          <button className="mr-2.5 cursor-pointer hover:text-[var(--travelTextSecondary)] transition-all ease-in-out duration-300">
                            {blog.comments} Comments
                          </button>
                          <i className="fa fa-comment"></i>
                        </li>
                      </ul>
                    </div>
                    <div className="w-full md:w-3/4 px-0 md:px-[15px]">
                      <div className="feature-img">
                        <Image
                          className=""
                          src={blog.src}
                          alt="Single Blog Travel Image"
                          width={750}
                          height={350}
                        />
                      </div>
                      <Link className="" href={`/travel/blog/${blog.slug}`}>
                        <h3 className="text-[var(--travelTextHeading)] font-semibold my-5 text-2xl hover:text-[var(--travelTextSecondary)] transition-all duration-300 ease-in-out">
                          {blog.title}
                        </h3>
                      </Link>
                      <p className="mb-4">{blog.desc}</p>
                      <Link
                        href={`/travel/blog/${blog.slug}`}
                        className="inline-block py-3 text-sm text-[var(--travelTextHeading)] px-[30px] cursor-pointer bg-white hover:bg-[var(--travelTextSecondary)] hover:text-white transition-all duration-300 ease-in-out"
                      >
                        View More
                      </Link>
                    </div>
                  </li>
                );
              })}
            </ul>
            <div className="w-full lg:w-1/3 px-0 lg:px-[15px]">
              <TravelBlogSideBar />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TravelBlogHome;
