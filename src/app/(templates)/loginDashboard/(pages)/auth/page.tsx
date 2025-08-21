import Link from "next/link";
import React from "react";
import LoginDashboardAuthSideSection from "../../components/AuthSideSection/LoginDashboardAuthSideSection";

const page = () => {
  return (
    <div className="relative flex items-center min-h-screen p-0 overflow-hidden bg-center bg-cover">
      <div className="w-full mx-auto px-6 max-w-[1024px] xl:max-w-[1280px] z-1">
        <div className="flex flex-wrap -mx-3">
          <div className="flex flex-col w-full max-w-full px-3 mx-auto lg:mx-0 shrink-0 md:w-7/12 lg:w-5/12 xl:w-4/12">
            <div className="relative flex flex-col min-w-0 break-words bg-transparent border-0 shadow-none lg:py4 dark:bg-gray-950 rounded-2xl bg-clip-border">
              <div className="p-6 pb-0 mb-0">
                <h4 className="font-bold text-[var(--dashboardTextTitles)] text-2xl">
                  Sign In
                </h4>
                <p className="mb-0 py-2">
                  Enter your email and password to sign in.
                </p>
              </div>
              <div className="flex-auto p-6">
                <form role="form">
                  <div className="mb-4">
                    <input
                      type="email"
                      placeholder="Email"
                      className="focus:shadow-primary-outline dark:bg-gray-950 dark:placeholder:text-white/80 dark:text-white/80 text-sm leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding p-3 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-fuchsia-300 focus:outline-none"
                    />
                  </div>
                  <div className="mb-4">
                    <input
                      type="password"
                      placeholder="Password"
                      className="focus:shadow-primary-outline dark:bg-gray-950 dark:placeholder:text-white/80 dark:text-white/80 text-sm leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding p-3 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-fuchsia-300 focus:outline-none"
                    />
                  </div>
                  <div className="flex items-center pl-12 mb-0.5 text-left min-h-6">
                    <input
                      id="rememberMe"
                      className="mt-0.5 rounded-10 duration-250 ease-in-out after:rounded-circle after:shadow-2xl after:duration-250 checked:after:translate-x-5.3 h-5 relative float-left -ml-12 w-10 cursor-pointer appearance-none border border-solid border-gray-200 bg-zinc-700/10 bg-none bg-contain bg-left bg-no-repeat align-top transition-all after:absolute after:top-px after:h-4 after:w-4 after:translate-x-px after:bg-white after:content-[''] checked:border-[var(--dashboardBGSecondary)] checked:bg-[var(--dashboardBGSecondary)] checked:bg-none checked:bg-right"
                      type="checkbox"
                    />
                    <label
                      className="ml-2 font-normal cursor-pointer select-none text-sm text-slate-700"
                      htmlFor="rememberMe"
                    >
                      Remember me
                    </label>
                  </div>
                  <div className="text-center">
                    <button
                      type="button"
                      className="inline-block w-full px-16 py-3.5 mt-6 mb-0 font-bold leading-normal text-center text-white align-middle transition-all bg-[var(--dashboardBGSecondary)] border-0 rounded-lg cursor-pointer hover:-translate-y-px active:opacity-85 hover:shadow-xs text-sm ease-in tracking-tight-rem shadow-md bg-150 bg-x-25"
                    >
                      Sign in
                    </button>
                  </div>
                </form>
              </div>
              <div className="border-black/12.5 rounded-b-2xl border-t-0 border-solid p-6 text-center pt-0 px-1 sm:px-6">
                <p className="mx-auto mb-6 leading-normal text-sm">
                  Don&apos;t have an account?
                  <Link
                    href="/loginDashboard/auth/signUp"
                    className="font-semibold text-transparent bg-clip-text bg-gradient-to-tl from-blue-500 to-violet-500"
                  >
                    Sign up
                  </Link>
                </p>
              </div>
            </div>
          </div>
          <LoginDashboardAuthSideSection />
        </div>
      </div>
    </div>
  );
};

export default page;
