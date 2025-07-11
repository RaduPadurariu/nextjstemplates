"use client";

import React, { useState } from "react";

const ShopNewsletter = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    setSubmitted(true);
    setEmail("");
    setTimeout(() => setSubmitted(false), 3000);
  };
  return (
    <div className="mt-14">
      <div className="bg-[var(--shopTextSecondary)] text-center bg-cover py-6 md:py-0">
        <div className=" shop-subContainer flex flex-wrap items-center justify-between px-6 md:px-0 w-100% md:w-[750px] lg:w-[970px] xl:w-[1170px]">
          <div className="flex items-center flex-wrap">
            <h3 className="text-xl font-normal uppercase text-white my-[15px] mr-[13px] ml-0">
              Newsletter
            </h3>
            <form action="" onSubmit={handleSubmit}>
              <div className="relative flex">
                <input
                  placeholder="Enter your email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="h-[42px] w-[180px] py-[11px] px-[5px] border-0 rounded placeholder:text-[var(--shopTextPrimary)] text-[var(--shopTextPrimary] bg-white leading-[18px] mr-[3px] text-sm font-[Arial]"
                />
                <button
                  type="submit"
                  className="text-3xl p-0 align-middle w-[52px] uppercase cursor-pointer font-normal bg-[var(--shopTextSecondary)] border-0 text-white rounded flex justify-center items-center"
                >
                  <i className="fa fa-angle-double-right text-xl"></i>
                </button>
              </div>
            </form>
            {submitted && (
              <p className="text-xs mt-1 text-white">
                Your email was received!
              </p>
            )}
          </div>
          <div>
            <ul className="flex flex-wrap mt-[15px] sm:mt-0">
              <li className="p-1 group-hover">
                <span className="w-[60px] h-[60px] block rounded-full relative text-center bg-white">
                  <i className="fab fa-twitter text-[28px] pt-4 text-[#dcdbdb] hover:text-black"></i>
                </span>
              </li>
              <li className="p-1">
                <span className="w-[60px] h-[60px] block rounded-full relative text-center bg-white">
                  {" "}
                  <i className="fab fa-facebook text-[28px] pt-4 text-[#dcdbdb] hover:text-black"></i>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopNewsletter;
