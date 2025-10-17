"use client";

import {
  travelBlogPostCategoryList,
  travelBlogTagCloudsList,
  travelPopularPostsList,
  travelSocialIcons,
} from "@/data/travel";
import Image from "next/image";
import React from "react";

const TravelBlogSideBar = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  return (
    <div className="pb-[120px]">
      <div className="py-5 bg-[#fafaff] border border-[#eee]">
        <div className="border-b border-b-[#eee] pb-[30px] m-[30px]">
          <form className="" onSubmit={handleSubmit}>
            <input
              placeholder="Search Posts"
              name="search"
              type="text"
              className="text-white px-[22px] py-[10px] text-sm border-none w-[80%] rounded-l-[20px] bg-[var(--travelTextSecondary)] placeholder:text-white"
            />
            <button
              type="submit"
              className="w-[20%] p-2.5 bg-[var(--travelTextSecondary)] text-sm text-white border-none cursor-pointer rounded-r-[20px]"
            >
              <i className="fa fa-search text-sm"></i>
            </button>
          </form>
        </div>
        <div className="border-b border-b-[#eee] pb-[30px] m-[30px] text-center">
          <Image
            src="/images/travel/blog/user-info.png"
            alt="Author Travel Image"
            width={120}
            height={120}
            className="align-middle mx-auto"
          />

          <h4 className="text-[var(--travelTextHeading)] text-lg mt-[40px] mb-[5px] font-semibold">
            Charlie Barber
          </h4>

          <p className="mb-4">Senior blog writer</p>
          <ul className="">
            {travelSocialIcons.map((icon) => {
              return (
                <li className="inline-block mb-2.5" key={icon.id}>
                  <i
                    className={`${icon.iconClass} text-[var(--travelTextHeading)] text-sm p-2.5 hover:text-[var(--travelTextSecondary)] transition-all duration-300 ease-in-out`}
                  ></i>
                </li>
              );
            })}
          </ul>
          <p className="mb-4">
            Boot camps have its supporters andit sdetractors. Some people do not
            understand why you should have to spend money on boot camp when you
            can get. Boot camps have itssuppor ters andits detractors.
          </p>
        </div>
        <div className="border-b border-b-[#eee] pb-[30px] m-[30px]">
          <h4 className="text-center py-3 text-white bg-[var(--travelTextSecondary)] text-lg font-semibold">
            Popular Posts
          </h4>
          <ul className="mt-[30px]">
            {travelPopularPostsList.map((post) => {
              return (
                <li key={post.id} className="flex flex-row items-center mb-5">
                  <div className="w-[100px] h-[60px] overflow-hidden">
                    <Image
                      className="w-full h-auto"
                      src={post.src}
                      alt="Sidebar blog image"
                      width={100}
                      height={60}
                    />
                  </div>
                  <div className="ml-3 flex flex-col justify-center">
                    <button className="cursor-pointer">
                      <h6 className="mb-2.5 text-sm font-semibold text-left text-[var(--travelTextHeading)] hover:text-[var(--travelTextSecondary)] transition-all duration-300 ease-in-out">
                        {post.title}
                      </h6>
                    </button>
                    <p className="mb-0">{post.date}</p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="border-b border-b-[#eee] pb-[30px] m-[30px]">
          <button className="block w-full cursor-pointer">
            <Image
              className="w-full h-auto"
              src="/images/travel/blog/ads-banner.jpg"
              alt="Travel Add Image"
              width={300}
              height={250}
            />
          </button>
        </div>
        <div className="border-b border-b-[#eee] pb-[30px] m-[30px]">
          <h4 className="text-center py-3 text-white bg-[var(--travelTextSecondary)] text-lg font-semibold">
            Post Catgories
          </h4>
          <ul className="">
            {travelBlogPostCategoryList.map((item) => {
              return (
                <li
                  key={item.id}
                  className="cursor-pointer pt-[15px] pb-2 border-b-2 border-dotted border-b-[#eee] hover:text-[var(--travelTextSecondary)] hover:border-b-[var(--travelTextSecondary)] transition-all duration-300 ease-in-out"
                >
                  <button className="flex justify-between w-full cursor-pointer">
                    <p>{item.title}</p>
                    <p>{item.value}</p>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="border-b border-b-[#eee] pb-[30px] m-[30px]">
          <h4 className="text-center py-3 text-white bg-[var(--travelTextSecondary)] text-lg font-semibold">
            Newsletter
          </h4>
          <p className="text-center my-5">
            Here, I focus on a range of items and features that we use in life
            without giving them a second thought.
          </p>
          <div className="mb-4 flex flex-row">
            <form className="w-full" onSubmit={handleSubmit}>
              <div className="flex relative w-full items-center border border-[#ced4da]">
                <i className="px-2.5 fa fa-envelope text-base text-[#ccc] font-normal leading-[1.5]"></i>

                <input
                  type="text"
                  className="py-1.5 px-1.5 w-full"
                  placeholder="Enter email"
                />
              </div>
            </form>
            <button
              type="submit"
              className="text-center py-1.5 px-3 border-none text-white bg-[var(--travelTextSecondary)] text-xs font-semibold cursor-pointer"
            >
              Subscribe
            </button>
          </div>
          <p className="mt-5 text-center">You can unsubscribe at any time</p>
        </div>
        <div className="border-b border-b-[#eee] pb-[30px] m-[30px]">
          <h4 className="text-center py-3 mb-[30px] text-white bg-[var(--travelTextSecondary)] text-lg font-semibold">
            Tag Clouds
          </h4>
          <ul>
            {travelBlogTagCloudsList.map((tag) => {
              return (
                <li
                  key={tag.id}
                  className="cursor-pointer inline-block text-[var(--travelTextHeading)] border border-[#eee] bg-white py-1 px-3.5 mb-2.5 mr-1 hover:bg-[var(--travelTextSecondary)] hover:text-white transition-all duration-300 ease-in-out"
                >
                  <button className="cursor-pointer text-xs">
                    {tag.title}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TravelBlogSideBar;
