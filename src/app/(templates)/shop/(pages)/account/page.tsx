"use client";
import React, { useState } from "react";
import ShopBreadcrumbs from "../../components/Breadcrumbs/ShopBreadcrumbs";
import { shopAccountRegistrationList } from "@/data/shopDate";

const ShopAccount = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    setEmail("");
    setPassword("");
  };
  return (
    <section className="shop-container">
      <ShopBreadcrumbs />
      <div>
        <div className="min-h-[500px] mb-10 lg:mb-0">
          <div className="shop-subContainer px-[15px] md:px-0 w-100% md:w-[750px] lg:w-[970px] xl:w-[1170px]">
            <h1 className="flex justify-between items-baseline mt-[15px] pb-2.5 text-[50px] text-center uppercase font-bold tracking-wider text-[var(--shopBGSecondary)]">
              Account
            </h1>
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="mx-0 lg:mx-[15px] overflow-hidden mt-[30px] p-[30px] border-2 border-[var(--shopBorderPrimary)] border-t-[var(--shopBGPrimary)]">
                <h4 className=" text-3xl lg:text-[45px] text-[var(--shopBGSecondary)]">
                  New here?{" "}
                </h4>
                <p className="pt-7 text-base">Registration is free and easy!</p>
                <ul className="pt-2.5">
                  {shopAccountRegistrationList.map((item) => {
                    return (
                      <li
                        key={item.id}
                        className="pt-[5px] flex items-center text-[var(--shopTextPrimary)]"
                      >
                        <i className="fa fa-check-circle mr-2 text-black"></i>
                        <span>{item.title}</span>
                      </li>
                    );
                  })}
                </ul>
                <button className="mt-5 text-white px-3 py-1.5 text-sm bg-[var(--shopTextSecondary)] uppercase font-bold inline-block cursor-pointer">
                  Create an account
                </button>
              </div>
              <div className="mx-0 lg:mx-[15px] overflow-hidden mt-[30px] p-[30px] border-2 border-[var(--shopBorderPrimary)] border-t-[var(--shopBGPrimary)]">
                <form action="" onSubmit={handleSubmit}>
                  <h4 className=" text-3xl lg:text-[45px] text-[var(--shopBGSecondary)] m-0">
                    Already registered?
                  </h4>
                  <div className="pt-7">
                    <label
                      htmlFor="shop_custom_email"
                      className="text-sm text-[#555] inline-block max-w-full"
                    >
                      Email address
                    </label>
                    <input
                      type="email"
                      id="shop_custom_email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className=" text-black text-sm border border-[var(--shopBorderPrimary)] w-full h-[34px] block align-top px-2.5 py-1.5 leading-[1.43]"
                    />
                  </div>
                  <div className="pt-4">
                    <label
                      htmlFor="shop_custom_password"
                      className="text-sm text-[#555] inline-block max-w-full"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      required
                      id="shop_custom_password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="text-sm text-black border border-[var(--shopBorderPrimary)] w-full h-[34px] block align-top px-2.5 py-1.5 leading-[1.43]"
                    />
                  </div>
                  <div className="pt-5">
                    <button
                      type="submit"
                      className="mr-2.5 bg-[var(--shopTextSecondary)] border border-[var(--shopTextSecondary)] leading-[1.43] text-center text-white uppercase py-1.5 px-3 text-sm font-bold inline-block align-middle m-0 cursor-pointer "
                    >
                      Sign In
                    </button>
                    <button className="text-[var(--shopBGHeader)]">
                      Forgot your password?
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShopAccount;
