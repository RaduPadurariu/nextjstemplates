import Link from "next/link";
import React from "react";
import LoginDashboardSignInForm from "./LoginDashboardSignInForm";
import LoginDashboardAuthSideSection from "./LoginDashboardAuthSideSection";

const LoginDashboardSignIn = () => {
  return (
    <section className="relative flex items-center min-h-screen p-0 overflow-hidden bg-center bg-cover">
      <div className="w-full mx-auto px-6 max-w-[1024px] xl:max-w-[1280px] z-1">
        <div className="flex flex-wrap -mx-3">
          <div className="flex flex-col w-full max-w-full px-3 mx-auto lg:mx-0 shrink-0 md:w-7/12 lg:w-5/12 xl:w-4/12">
            <div className="relative flex flex-col min-w-0 break-words bg-transparent border-0 shadow-none lg:py4  rounded-2xl bg-clip-border">
              <div className="p-6 pb-0 mb-0">
                <h4 className="font-bold text-[var(--dashboardTextTitles)] text-2xl">
                  Sign In
                </h4>
                <p className="mb-0 py-2">
                  Enter your email and password to sign in.
                </p>
              </div>
              <div className="flex-auto p-6">
                <LoginDashboardSignInForm />
              </div>
              <div className="border-black/12.5 rounded-b-2xl border-t-0 border-solid p-6 text-center pt-0 px-1 sm:px-6">
                <p className="mx-auto mb-6 leading-normal text-sm">
                  Don&apos;t have an account?{" "}
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
    </section>
  );
};

export default LoginDashboardSignIn;
