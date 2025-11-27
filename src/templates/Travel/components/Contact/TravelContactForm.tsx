"use client";
import { travelContactAddressesList } from "@/data/travelData";
import React from "react";

const TravelContactForm = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  return (
    <section className="pb-[120px]">
      <div className="travel-container">
        <div className="flex flex-col lg:flex-row">
          <ul className="flex flex-col w-full lg:w-1/3 mb-[30px] lg:mb-0 mr-0 lg:mr-[30px]">
            {travelContactAddressesList.map((item) => {
              return (
                <li key={item.id} className="flex mb-4 items-center">
                  <div className="icon">
                    <i
                      className={`text-[30px] text-[var(--travelTextSecondary)] mr-[30px] font-semibold ${item.icon}`}
                    ></i>
                  </div>
                  <div className="">
                    <h5 className="text-[var(--travelTextHeading)] text-base mb-[5px] font-light">
                      {item.title}
                    </h5>
                    <p className="">{item.desc}</p>
                  </div>
                </li>
              );
            })}
          </ul>
          <div className="w-full lg:w-2/3">
            <form className="" id="myForm" onSubmit={handleSubmit}>
              <div className="row">
                <div className="flex flex-col lg:flex-row">
                  <div className="flex flex-col w-full lg:w-1/2 px-0 lg:px-[15px] mb-4">
                    <input
                      name="name"
                      placeholder="Enter your name"
                      className="w-full leading-[1.5] border border-[#ced4da] text-black bg-white p-[15px] text-[13px] mb-5 block"
                      type="text"
                      required
                    />

                    <input
                      name="email"
                      placeholder="Enter email address"
                      pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$"
                      className="w-full leading-[1.5] border border-[#ced4da] text-black bg-white p-[15px] text-[13px] mb-5 block"
                      type="email"
                      required
                    />

                    <input
                      name="subject"
                      placeholder="Enter subject"
                      className="w-full leading-[1.5] border border-[#ced4da] text-black bg-white p-[15px] text-[13px] mb-5 block"
                      type="text"
                      required
                    />
                  </div>
                  <div className="w-full lg:w-1/2 px-0 lg:px-[15px] mb-9">
                    <textarea
                      className="w-full leading-[1.5] border border-[#ced4da] text-black bg-white p-[15px] text-[13px] mb-5 block min-h-[200px] lg:min-h-auto h-full"
                      name="message"
                      placeholder="Enter Messege"
                      required
                    ></textarea>
                  </div>
                </div>

                <div className="w-full flex justify-end px-0 lg:px-[15px]">
                  {/* <div className="alert-msg"></div> */}
                  <button
                    type="submit"
                    className="uppercase text-sm leading-[40px] px-[30px] font-medium text-white bg-[var(--travelTextSecondary)] border border-[bg-[var(--travelTextSecondary)]] cursor-pointer hover:text-[var(--travelTextSecondary)] hover:bg-white transition-all duration-300 ease-in-out"
                  >
                    Send Message
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TravelContactForm;
