import {
  loginDashboardAuthLinks,
  loginDashboardPagesLinks,
} from "@/data/loginDashboard";
import React from "react";
import LoginDashboardNavbarActiveLink from "./LoginDashboardNavbarActiveLink";
import { LoginDashboardLinkType } from "../../../types/loginDashboardTypes";
import Image from "next/image";

const LoginDashboardNavbar = ({
  isNavOpen,
  setIsNavOpen,
  setActiveTitle,
}: {
  isNavOpen: boolean;
  setIsNavOpen: (value: boolean) => void;
  setActiveTitle: (value: string) => void;
}) => {
  return (
    <aside
      className={`fixed inset-y-0 block w-full p-0 my-4 overflow-y-auto antialiased transition-transform duration-200 ${
        isNavOpen ? `translate-x-0` : `-translate-x-[100%] -mx-6`
      } bg-white border-0 shadow-xl max-w-64 z-990 xl:ml-6 rounded-2xl xl:left-0 xl:translate-x-0  dark:shadow-none dark:bg-[#111c44]`}
    >
      <div className="h-19">
        <button className="absolute top-0 right-0 p-4 opacity-50 cursor-pointer xl:hidden">
          <i
            onClick={() => setIsNavOpen(false)}
            className=" fas fa-times dark:text-white text-[var(--dashboardTextPrimary)]"
          ></i>
        </button>

        <div className="block px-8 py-6 m-0 text-sm whitespace-nowrap dark:text-white text-slate-700">
          <Image
            src="/images/loginDashboard/logo-ct-dark.png"
            className="inline h-full transition-all duration-200 dark:hidden ease-nav-brand max-h-8 max-w-[30px]"
            alt="main_logo"
            width={200}
            height={200}
          />
          <Image
            src="/images/loginDashboard/logo-ct.png"
            className="hidden h-full max-w-[30px] transition-all duration-200 dark:inline ease-nav-brand max-h-8"
            alt="main_logo"
            width={200}
            height={200}
          />
          <span className="ml-2 font-semibold transition-all duration-200 ease-nav-brand">
            Argon Dashboard
          </span>
        </div>
      </div>

      <hr className="h-[1px] my-4 border-0 opacity-25 mt-0 bg-transparent bg-gradient-to-r from-transparent via-black/40 to-transparent dark:bg-gradient-to-r dark:from-transparent dark:via-white dark:to-transparent" />

      <div className="block w-auto max-h-screen overflow-auto">
        <ul className="flex flex-col pl-0 mb-0">
          {loginDashboardPagesLinks.map((link: LoginDashboardLinkType) => {
            return (
              <LoginDashboardNavbarActiveLink
                key={link.id}
                link={link}
                setActiveTitle={setActiveTitle}
              />
            );
          })}

          <li className="w-full mt-4">
            <h6 className="pl-6 ml-2 py-2.5 text-xs font-bold leading-tight uppercase dark:text-white opacity-60">
              Account pages
            </h6>
          </li>

          {loginDashboardAuthLinks.map((link) => {
            return (
              <LoginDashboardNavbarActiveLink
                key={link.id}
                link={link}
                setActiveTitle={setActiveTitle}
              />
            );
          })}
        </ul>
      </div>
    </aside>
  );
};

export default LoginDashboardNavbar;
