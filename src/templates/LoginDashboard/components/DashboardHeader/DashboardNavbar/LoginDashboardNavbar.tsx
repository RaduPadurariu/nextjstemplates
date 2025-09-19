import {
  loginDashboardAuthLinks,
  loginDashboardPagesLinks,
} from "@/data/loginDashboard";
import React from "react";
import LoginDashboardNavbarActiveLink from "./LoginDashboardNavbarActiveLink";
import { LoginDashboardLinkType } from "../../../types/loginDashboardTypes";
import Image from "next/image";
import Link from "next/link";
import useAuthStore from "@/templates/LoginDashboard/store/useAuthStore";

const LoginDashboardNavbar = ({
  isNavOpen,
  setIsNavOpen,
  setActiveTitle,
}: {
  isNavOpen: boolean;
  setIsNavOpen: (value: boolean) => void;
  setActiveTitle: (value: string) => void;
}) => {
  const { isAuthenticated, logout, isInitialized } = useAuthStore();
  return (
    <aside
      className={`fixed inset-y-0 block w-full p-0 my-4 overflow-y-auto antialiased transition-transform duration-200 ${
        isNavOpen ? `translate-x-0` : `-translate-x-[100%] -mx-6`
      } bg-white border-0 shadow-xl max-w-64 z-990 xl:ml-6 rounded-2xl xl:left-0 xl:translate-x-0 `}
    >
      <div className="h-19">
        <button className="absolute top-0 right-0 p-4 opacity-50 cursor-pointer xl:hidden">
          <i
            onClick={() => setIsNavOpen(false)}
            className=" fas fa-times text-[var(--dashboardTextPrimary)]"
          ></i>
        </button>

        <div className="block px-8 py-6 m-0 text-sm whitespace-nowrap  text-slate-700">
          <Image
            src="/images/loginDashboard/logo-ct-dark.png"
            className="inline h-full transition-all duration-200  ease-nav-brand max-h-8 max-w-[30px]"
            alt="main_logo"
            width={200}
            height={200}
          />
          <Image
            src="/images/loginDashboard/logo-ct.png"
            className="hidden h-full max-w-[30px] transition-all duration-200 d ease-nav-brand max-h-8"
            alt="main_logo"
            width={200}
            height={200}
          />
          <span className="ml-2 font-semibold transition-all duration-200 ease-nav-brand">
            Radu&apos;s Dashboard
          </span>
        </div>
      </div>

      <hr className="h-[1px] my-4 border-0 opacity-25 mt-0 bg-transparent bg-gradient-to-r from-transparent via-black/40 to-transparent " />

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
            <h6 className="pl-6 ml-2 py-2.5 text-xs font-bold leading-tight uppercase ">
              Account pages
            </h6>
          </li>

          {!isInitialized ? (
            <li className="mt-0.5 w-full flex justify-center items-center">
              {/* <Image
                src="/images/loginDashboard/loginDashboard_loader.svg"
                alt="Loading..."
                width={20}
                height={20}
              /> */}
            </li>
          ) : isAuthenticated ? (
            <>
              {loginDashboardAuthLinks.slice(0, 1).map((link) => (
                <LoginDashboardNavbarActiveLink
                  key={link.id}
                  link={link}
                  setActiveTitle={setActiveTitle}
                />
              ))}

              <li className="mt-0.5 w-full">
                <Link
                  onClick={logout}
                  className="py-2.5 text-sm my-0 mx-2 flex items-center whitespace-nowrap rounded-lg px-4 font-semibold text-[var(--dashboardTextPrimary)] transition-colors "
                  href="/loginDashboard/auth"
                >
                  <div className="mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-center text-center xl:p-2.5">
                    <i className="fa-solid fa-arrow-right-from-bracket text-[#fb6340]" />
                  </div>
                  <span className="ml-1">Log Out</span>
                </Link>
              </li>
            </>
          ) : (
            <>
              {loginDashboardAuthLinks.map((link) => (
                <LoginDashboardNavbarActiveLink
                  key={link.id}
                  link={link}
                  setActiveTitle={setActiveTitle}
                />
              ))}
            </>
          )}

          <li className="w-full mt-4">
            <hr className="h-[1px] my-1 border-0 opacity-25 mt-0 bg-transparent bg-gradient-to-r from-transparent via-black/40 to-transparent " />
          </li>
          <li className="mt-0.5 w-full">
            <Link
              className={`py-2.5 text-sm my-0 mx-2 flex items-center whitespace-nowrap rounded-lg px-4 font-semibold text-[var(--dashboardTextPrimary)] transition-colors `}
              href={"/"}
            >
              <div className="mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-center stroke-0 text-center xl:p-2.5">
                <i
                  className={`relative top-0 text-sm leading-normal text-[#5e72e4] fa-solid fa-puzzle-piece`}
                ></i>
              </div>
              <span className="ml-1 duration-300 opacity-100 pointer-events-none ease">
                Templates
              </span>
            </Link>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default LoginDashboardNavbar;
