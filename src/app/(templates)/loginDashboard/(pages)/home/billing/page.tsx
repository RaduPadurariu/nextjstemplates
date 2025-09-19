import {
  loginDashboardBillingCardsInfo,
  loginDashboardBillingInfo,
  loginDashboardBillingInformation,
  loginDashboardBillingInvoiceList,
  loginDashboardBillingTransactionsLatest,
  loginDashboardBillingTransactionsNewest,
} from "@/data/loginDashboard";
import Image from "next/image";
import React from "react";

const LoginDashboardBillingPage = () => {
  return (
    <div className="w-full px-6 pb-6 pt-10 mx-auto">
      <div className="flex flex-wrap -mx-3">
        <div className="max-w-full px-3 lg:w-2/3 lg:flex-none">
          <div className="flex flex-wrap -mx-3">
            <div className="w-full max-w-full px-3 mb-6 xl:mb-0 xl:w-1/2 xl:flex-none">
              <div className="relative flex flex-col min-w-0 break-words bg-transparent border-0 border-transparent border-solid shadow-xl rounded-2xl bg-clip-border">
                <div
                  className="relative overflow-hidden rounded-2xl"
                  style={{
                    backgroundImage:
                      "url('/images/loginDashboard/card-visa-bg.jpg')",
                  }}
                >
                  <span className="absolute top-0 left-0 w-full h-full bg-center bg-cover bg-gradient-to-tl from-zinc-900 to-zinc-800 "></span>
                  <div className="relative z-10 flex-auto p-4">
                    <i className="p-2 text-white fas fa-wifi"></i>
                    <h5 className="pb-2 mt-6 mb-12 text-white font-semibold text-2xl">
                      4562&nbsp;&nbsp;&nbsp;1122&nbsp;&nbsp;&nbsp;4594&nbsp;&nbsp;&nbsp;7852
                    </h5>
                    <div className="flex">
                      <div className="flex">
                        <div className="mr-6">
                          <p className="mb-0 text-sm leading-normal text-white opacity-90">
                            Card Holder
                          </p>
                          <h6 className="mb-0 text-white font-semibold">
                            Jack Peterson
                          </h6>
                        </div>
                        <div>
                          <p className="mb-0 text-sm leading-normal text-white opacity-90">
                            Expires
                          </p>
                          <h6 className="mb-0 text-white font-semibold">
                            11/22
                          </h6>
                        </div>
                      </div>
                      <div className="flex items-end justify-end w-1/5 ml-auto">
                        <Image
                          className="w-3/5 mt-2"
                          src="/images/loginDashboard/logos/mastercard.png"
                          alt="logo"
                          width={400}
                          height={400}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full max-w-full px-3 xl:w-1/2 xl:flex-none">
              <ul className="flex flex-col md:flex-row -mx-3 -mb-5 md:mb-0">
                {loginDashboardBillingInfo.map((info) => {
                  return (
                    <li
                      key={info.id}
                      className="w-full max-w-full px-3 md:w-1/2 md:flex-none mb-5 md:mb-0"
                    >
                      <div className="relative flex flex-col min-w-0 break-words bg-white border-0 border-transparent border-solid shadow-xl rounded-2xl bg-clip-border">
                        <div className="p-4 mb-0 text-center border-b-0 border-b-solid rounded-t-2xl border-b-transparent mx-auto">
                          <div className="w-16 h-16 text-center shadow-sm icon bg-gradient-to-tl from-blue-500 to-violet-500 rounded-xl">
                            <i
                              className={`relative text-xl leading-none text-white opacity-100 ${info.icon} top-31/100`}
                            ></i>
                          </div>
                        </div>
                        <div className="flex-auto p-4 pt-0 text-center">
                          <h6 className="mb-0 text-center  font-semibold text-[var(--dashboardTextTitles)]">
                            {info.title}
                          </h6>
                          <span className="text-xs leading-tight ">
                            {info.desc}
                          </span>
                          <hr className="h-px my-4 border-0 opacity-25 bg-transparent bg-gradient-to-r from-transparent via-black/40 to-transparent " />
                          <h5 className="mb-0  text-[var(--dashboardTextTitles)] font-semibold text-xl">
                            {info.price}
                          </h5>
                        </div>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="max-w-full px-3 mb-6 lg:mb-0 lg:w-full lg:flex-none">
              <div className="relative flex flex-col min-w-0 mt-6 break-words bg-white border-0 border-transparent border-solid shadow-xl  rounded-2xl bg-clip-border">
                <div className="p-4 pb-0 mb-0 border-b-0 border-b-solid rounded-t-2xl border-b-transparent">
                  <div className="flex flex-wrap -mx-3">
                    <div className="flex items-center flex-none w-1/2 max-w-full px-3">
                      <h6 className="mb-0 font-semibold text-[var(--dashboardTextTitles)]">
                        Payment Method
                      </h6>
                    </div>
                    <div className="flex-none w-1/2 max-w-full px-3 text-right">
                      <button className="inline-block px-5 py-2.5 font-bold leading-normal text-center text-white align-middle transition-all bg-transparent rounded-lg cursor-pointer text-sm ease-in shadow-md bg-150 bg-gradient-to-tl from-zinc-900 to-zinc-800  hover:shadow-xs active:opacity-85 hover:-translate-y-px tracking-tight-rem bg-x-25">
                        {" "}
                        <i className="fas fa-plus"> </i>&nbsp;&nbsp;Add New Card
                      </button>
                    </div>
                  </div>
                </div>
                <div className="flex-auto p-4">
                  <ul className="flex flex-wrap -mx-3">
                    {loginDashboardBillingCardsInfo.map((card) => {
                      return (
                        <li
                          key={card.id}
                          className="max-w-full px-3 mb-6 md:mb-0 md:w-1/2 md:flex-none"
                        >
                          <div className="relative flex flex-row items-center flex-auto min-w-0 p-6 break-words bg-transparent border border-solid shadow-none md-max:overflow-auto rounded-xl border-slate-200  bg-clip-border">
                            <Image
                              className="mb-0 mr-4 w-[30px]"
                              src={card.img}
                              alt="logo"
                              width={30}
                              height={30}
                            />
                            <h6 className="mb-0 font-semibold text-[var(--dashboardTextTitles)] text-xs sm:text-base">
                              ****&nbsp;&nbsp;&nbsp;****&nbsp;&nbsp;&nbsp;****&nbsp;&nbsp;&nbsp;
                              {card.number}
                            </h6>
                            {/* <i
                          className="ml-auto cursor-pointer fas fa-pencil-alt text-slate-700"
                          data-target="tooltip_trigger"
                          data-placement="top"
                        ></i> */}
                            {/* <div
                          data-target="tooltip"
                          className="hidden px-2 py-1 text-sm text-white bg-black rounded-lg"
                        >
                          Edit Card
                          <div
                            className="invisible absolute h-2 w-2 bg-inherit before:visible before:absolute before:h-2 before:w-2 before:rotate-45 before:bg-inherit before:content-['']"
                            data-popper-arrow
                          ></div>
                        </div> */}
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
        <div className="w-full max-w-full px-3 lg:w-1/3 lg:flex-none">
          <div className="relative flex flex-col h-full min-w-0 break-words bg-white border-0 border-transparent border-solid shadow-xl  rounded-2xl bg-clip-border">
            <div className="p-4 pb-0 mb-0 border-b-0 border-b-solid rounded-t-2xl border-b-transparent">
              <div className="flex flex-wrap -mx-3">
                <div className="flex items-center flex-none w-1/2 max-w-full px-3">
                  <h6 className="mb-0  font-semibold text-[var(--dashboardTextTitles)]">
                    Invoices
                  </h6>
                </div>
                <div className="flex-none w-1/2 max-w-full px-3 text-right">
                  <button className="inline-block px-8 py-2 mb-0 text-xs font-bold leading-normal text-center text-[#5E72E4] align-middle transition-all ease-in bg-transparent border border-[#5E72E4] border-solid rounded-lg shadow-none cursor-pointer bg-150 active:opacity-85 hover:-translate-y-px tracking-tight-rem bg-x-25 hover:opacity-75">
                    View All
                  </button>
                </div>
              </div>
            </div>
            <div className="flex-auto p-4 pb-0">
              <ul className="flex flex-col pl-0 mb-0 rounded-lg">
                {loginDashboardBillingInvoiceList.map((invoice) => {
                  return (
                    <li
                      key={invoice.id}
                      className="relative flex justify-between px-4 py-2 pl-0 mb-2 border-0 rounded-t-inherit text-inherit rounded-xl"
                    >
                      <div className="flex flex-col">
                        <h6 className="mb-1 text-sm font-semibold leading-normal  text-slate-700">
                          {invoice.date}
                        </h6>
                        <span className="text-xs leading-tight ">
                          {invoice.invoice}
                        </span>
                      </div>
                      <div className="flex items-center text-sm leading-normal ">
                        {invoice.price}
                        <button className="inline-block px-0 py-2.5 mb-0 ml-6 font-bold leading-normal text-center uppercase align-middle transition-all bg-transparent border-0 rounded-lg shadow-none cursor-pointer ease-in bg-150 text-sm active:opacity-85 hover:-translate-y-px tracking-tight-rem bg-x-25 text-slate-700">
                          <i className="mr-1 text-lg leading-none fas fa-file-pdf"></i>{" "}
                          PDF
                        </button>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap -mx-3">
        <div className="w-full max-w-full px-3 mt-6 md:w-7/12 md:flex-none">
          <div className="relative flex flex-col min-w-0 break-words bg-white border-0 shadow-xl  rounded-2xl bg-clip-border">
            <div className="p-6 px-4 pb-0 mb-0 border-b-0 rounded-t-2xl">
              <h6 className="mb-0  font-semibold text-[var(--dashboardTextTitles)] ">
                Billing Information
              </h6>
            </div>
            <div className="flex-auto p-4 pt-6">
              <ul className="flex flex-col pl-0 mb-0 rounded-lg">
                {loginDashboardBillingInformation.map((info) => {
                  return (
                    <li
                      key={info.id}
                      className="relative flex p-6 mb-2 border-0 rounded-t-inherit rounded-xl bg-gray-50 "
                    >
                      <div className="flex flex-col">
                        <h6 className="mb-4 text-sm leading-normal  font-semibold text-[var(--dashboardTextTitles)]">
                          {info.name}
                        </h6>
                        <span className="mb-2 text-xs leading-tight ">
                          Company Name:{" "}
                          <span className="font-semibold text-slate-700  sm:ml-2">
                            {info.company}
                          </span>
                        </span>
                        <span className="mb-2 text-xs leading-tight ">
                          Email Address:{" "}
                          <span className="font-semibold text-slate-700  sm:ml-2">
                            {info.email}
                          </span>
                        </span>
                        <span className="text-xs leading-tight ">
                          VAT Number:{" "}
                          <span className="font-semibold text-slate-700  sm:ml-2">
                            {info.vatNr}
                          </span>
                        </span>
                      </div>
                      <div className="ml-auto text-right">
                        <button className="relative z-10 inline-block px-4 py-2.5 mb-0 font-bold text-center text-transparent align-middle transition-all border-0 rounded-lg shadow-none cursor-pointer leading-normal text-sm ease-in bg-150 bg-gradient-to-tl from-red-600 to-orange-600 hover:-translate-y-px active:opacity-85 bg-x-25 bg-clip-text">
                          <i className="mr-2 far fa-trash-alt bg-150 bg-gradient-to-tl from-red-600 to-orange-600 bg-x-25 bg-clip-text"></i>
                          Delete
                        </button>
                        <button className="inline-block  px-4 py-2.5 mb-0 font-bold text-center align-middle transition-all bg-transparent border-0 rounded-lg shadow-none cursor-pointer leading-normal text-sm ease-in bg-150 hover:-translate-y-px active:opacity-85 bg-x-25 text-slate-700">
                          <i
                            className="mr-2 fas fa-pencil-alt text-slate-700"
                            aria-hidden="true"
                          ></i>
                          Edit
                        </button>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
        <div className="w-full max-w-full px-3 mt-6 md:w-5/12 md:flex-none">
          <div className="relative flex flex-col h-full min-w-0 mb-6 break-words bg-white border-0 shadow-xl  rounded-2xl bg-clip-border">
            <div className="p-6 px-4 pb-0 mb-0 border-b-0 rounded-t-2xl">
              <div className="flex flex-wrap -mx-3">
                <div className="max-w-full px-3 md:w-1/2 md:flex-none">
                  <h6 className="mb-0  font-semibold text-[var(--dashboardTextTitles)]">
                    Your Transactions
                  </h6>
                </div>
                <div className="flex items-center justify-end max-w-full px-3  md:w-1/2 md:flex-none">
                  <i className="mr-2 far fa-calendar-alt"></i>
                  <small>23 - 30 March 2020</small>
                </div>
              </div>
            </div>
            <div className="flex-auto p-4 pt-6">
              <h6 className="mb-4 text-xs font-bold leading-tight uppercase  text-slate-500">
                Newest
              </h6>
              <ul className="flex flex-col pl-0 mb-0 rounded-lg">
                {loginDashboardBillingTransactionsNewest.map((transaction) => {
                  return (
                    <li
                      key={transaction.id}
                      className="relative flex justify-between px-4 py-2 pl-0 mb-2 border-0 rounded-t-inherit text-inherit rounded-xl"
                    >
                      <div className="flex items-center">
                        <button
                          className={`leading-pro ease-in text-xs bg-150 w-6.5 h-6.5 p-1.2 rounded-3.5xl tracking-tight-rem bg-x-25 mr-4 mb-0 flex cursor-pointer items-center justify-center border border-solid ${transaction.color} border-transparent bg-transparent text-center align-middle font-bold uppercase transition-all hover:opacity-75`}
                        >
                          <i
                            className={`${transaction.icon}
                             text-3xs`}
                          ></i>
                        </button>
                        <div className="flex flex-col">
                          <h6 className="mb-1 text-sm leading-normal  text-slate-700 font-semibold">
                            {transaction.title}
                          </h6>
                          <span className="text-xs leading-tight  mr-2">
                            {transaction.date}
                          </span>
                        </div>
                      </div>
                      <div className="flex flex-col items-center justify-center">
                        <p
                          className={`relative z-10 inline-block m-0 text-sm font-semibold leading-normal text-transparent bg-gradient-to-tl ${transaction.gradient} bg-clip-text`}
                        >
                          {transaction.data}
                        </p>
                      </div>
                    </li>
                  );
                })}
              </ul>
              <h6 className="my-4 text-xs font-bold leading-tight uppercase  text-slate-500">
                Yesterday
              </h6>
              <ul className="flex flex-col pl-0 mb-0 rounded-lg">
                {loginDashboardBillingTransactionsLatest.map((transaction) => {
                  return (
                    <li
                      key={transaction.id}
                      className="relative flex justify-between px-4 py-2 pl-0 mb-2 border-0 rounded-t-inherit text-inherit rounded-xl"
                    >
                      <div className="flex items-center">
                        <button
                          className={`leading-pro ease-in text-xs bg-150 w-6.5 h-6.5 p-1.2 rounded-3.5xl tracking-tight-rem bg-x-25 mr-4 mb-0 flex cursor-pointer items-center justify-center border border-solid ${transaction.color} border-transparent bg-transparent text-center align-middle font-bold uppercase transition-all hover:opacity-75`}
                        >
                          <i
                            className={`${transaction.icon} 
                             text-3xs`}
                          ></i>
                        </button>
                        <div className="flex flex-col">
                          <h6 className="mb-1 text-sm leading-normal  text-slate-700 font-semibold">
                            {transaction.title}
                          </h6>
                          <span className="text-xs leading-tight  mr-2">
                            {transaction.date}
                          </span>
                        </div>
                      </div>
                      <div className="flex flex-col items-center justify-center">
                        <p
                          className={`relative z-10 inline-block m-0 text-sm font-semibold leading-normal text-transparent bg-gradient-to-tl ${transaction.gradient} bg-clip-text`}
                        >
                          {transaction.data}
                        </p>
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
  );
};

export default LoginDashboardBillingPage;
