"use client";
import React, { useState } from "react";

import { shopContactList, shopContactSocial } from "@/data/shopData";
import ShopBreadcrumbs from "../breadcrumbs/ShopBreadcrumbs";

const ShopContact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    setName("");
    setEmail("");
    setMessage("");
  };
  return (
    <section className="shop-container">
      <ShopBreadcrumbs />
      <div>
        <div className="min-h-[500px]">
          <div className="shop-subContainer px-[15px] md:px-0 w-100% md:w-[750px] lg:w-[970px] xl:w-[1170px]">
            <div className="mt-[30px] grid grid-cols-1 md:grid-cols-3">
              <div className="relative px-0 md:px-[15px] mb-6 md:mb-0">
                <div className="bg-white pt-[30px] px-[15px] pb-2.5">
                  <h3 className="mb-[9px] text-lg font-bold uppercase tracking-wider px-4 text-[var(--shopBGSecondary)] m-0">
                    Contacts
                  </h3>
                  <ul>
                    {shopContactList.map((contact) => {
                      return (
                        <li
                          key={contact.id}
                          className="flex items-center py-3.5 pl-4 border-b border-[rgba(220,219,219,0.5)] relative"
                        >
                          <i
                            className={`${contact.icon} block text-[var(--shopTextSecondary)] text-4xl ml-2 mr-5`}
                          ></i>
                          <div className="">
                            <h4 className="text-sm font-bold uppercase mb-1.5 text-[var(--shopBGSecondary)]">
                              {contact.title}
                            </h4>
                            <p className="m-0 text-[var(--shopBGPrimary)]">
                              {contact.desc}
                            </p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
              <div className="relative px-0 md:px-[15px] mb-6 md:mb-0">
                <div className="bg-white pt-[30px] px-[15px] pb-2.5">
                  <h3 className="mb-[9px] text-lg font-bold uppercase tracking-wider px-4 text-[var(--shopBGSecondary)] m-0">
                    Get in touch with us
                  </h3>
                  <form
                    action=""
                    className="mt-[37px] px-4 pb-[5px]"
                    onSubmit={handleSubmit}
                  >
                    <div className="mt-3">
                      <input
                        type="text"
                        placeholder="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        className="h-[47px] placeholder:text-[var(--shopBGSecondary)] bg-white border border-[var(--shopBorderPrimary)] text-sm text-[var(--shopBGSecondary)] w-full block align-top py-1.5 px-5 leading-[1.43]"
                      />
                    </div>
                    <div className="mt-3">
                      <input
                        type="email"
                        required
                        value={email}
                        placeholder="Email"
                        onChange={(e) => setEmail(e.target.value)}
                        className="h-[47px] placeholder:text-[var(--shopBGSecondary)] bg-white border border-[var(--shopBorderPrimary)] text-sm text-[var(--shopBGSecondary)] w-full block align-top py-1.5 px-5 leading-[1.43]"
                      />
                    </div>
                    <div className="mt-3">
                      <textarea
                        name=""
                        id=""
                        value={message}
                        placeholder="Message"
                        onChange={(e) => setMessage(e.target.value)}
                        className="placeholder:text-[var(--shopBGSecondary)] min-w-full max-w-full min-h-[100px] bg-white border border-[var(--shopBorderPrimary)] text-sm text-[var(--shopBGSecondary)] w-full block align-top py-[15px] px-5 h-[122px] leading-[1.43]"
                      ></textarea>
                    </div>
                    <div className="mt-3">
                      <button
                        type="submit"
                        className="py-2.5 px-[17px] tracking-[-0.06em] text-lg mb-[31px] mt-[18px] bg-[var(--shopTextSecondary)] border border-[var(--shopTextSecondary)] text-white uppercase inline-block align-middle font-bold m-0 leading-[1.43] cursor-pointer hover:bg-[var(--shopBGHeader)] transition-all rounded duration-300 ease-in-out"
                      >
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
              </div>
              <div className="relative px-0 md:px-[15px] mb-6 md:mb-0">
                <div className="bg-white pt-[30px] px-[15px] pb-2.5">
                  <h3 className="mb-[9px] text-lg font-bold uppercase tracking-wider px-4 text-[var(--shopBGSecondary)] m-0">
                    Follow us
                  </h3>
                  <ul className="m-0 p-0">
                    {shopContactSocial.map((contact) => {
                      return (
                        <li
                          key={contact.id}
                          className="flex items-center py-[22px] pl-4 border-b border-[rgba(220,219,219,0.5)] relative"
                        >
                          <div className="flex items-center justify-center mr-5 w-[50px]">
                            <i
                              className={`${contact.icon} block text-[var(--shopTextSecondary)] text-4xl ml-2 `}
                            ></i>
                          </div>

                          <div className="">
                            <h4 className="text-sm font-bold uppercase mb-1.5 text-[var(--shopBGSecondary)]">
                              {contact.desc}
                            </h4>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShopContact;
