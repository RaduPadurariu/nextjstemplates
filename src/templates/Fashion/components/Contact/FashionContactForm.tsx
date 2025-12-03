"use client";

import React from "react";

const FashionContactForm = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  return (
    <form action="" className="flex flex-col" onSubmit={handleSubmit}>
      <h2 className="text-[var(--fashionTextHeading)] text-[28px] md:text-[45px] fashionHeadingFamily font-bold leading-[1.2em] pb-5">
        Contact Us
      </h2>
      <div className="flex flex-col sm:flex-row gap-6 pb-4">
        <input
          type="text"
          className="w-full sm:w-1/2 border-b-2 border-b-[#eee] py-2.5 px-5.5 font-base leading-[1.2em] placeholder:text-[var(--fashionTextSecondary)] focus:outline-none"
          placeholder="Name*"
        />
        <input
          type="email"
          className="w-full sm:w-1/2 border-b-2 border-b-[#eee] py-2.5 px-5.5 font-base leading-[1.2em] placeholder:text-[var(--fashionTextSecondary)] focus:outline-none"
          placeholder="E-mail*"
        />
      </div>
      <input
        type="text"
        placeholder="Subject*"
        className="block mb-1 pb-4 w-full border-b-2 border-b-[#eee] pt-2.5 px-5.5 font-base leading-[1.2em] placeholder:text-[var(--fashionTextSecondary)] focus:outline-none"
      />
      <textarea
        name=""
        id=""
        placeholder="Message*"
        className="h-[86px] w-full mb-4 border-b-2 border-b-[#eee] pb-4 pt-4 px-5.5 font-base leading-[1.2em] placeholder:text-[var(--fashionTextSecondary)] focus:outline-none"
      ></textarea>
      <div className="flex">
        <input type="checkbox" />
        <p className="pl-4 leading-[1.5em] text-[13px]">
          By using this form you agree with the storage and handling of your
          data by this website.
        </p>
      </div>
      <button
        type="submit"
        className=" cursor-pointer mx-auto mt-6 md:mt-8 bg-[#d8d8d8] font-semibold leading-[1.5em] py-2 px-[18px] text-xs sm:text-sm lg:text-lg"
      >
        submit
      </button>
    </form>
  );
};

export default FashionContactForm;
