"use client";

import React, { useEffect } from "react";

import { useProfileUpdate } from "../../hooks/useProfileUpdate";
import LoginDashboardProfileBtns from "./LoginDashboardProfileBtns";
import Image from "next/image";
import useAuthStore from "@/templates/LoginDashboard/store/useAuthStore";

const LoginDashboardProfileTitle = () => {
  const { state, dispatch } = useProfileUpdate();
  const { user, isAuthenticated, isInitialized } = useAuthStore();

  useEffect(() => {
    if (user) {
      dispatch({ type: "SET_FULL_NAME", payload: user.fullName || "" });
    }
  }, [user, dispatch]);

  return (
    <div className="flex flex-wrap -mx-3">
      <div className="flex-none w-auto max-w-full px-3">
        <div className="relative inline-flex items-center justify-center text-white transition-all duration-200 ease-in-out text-base h-19 w-19 rounded-xl">
          {!isInitialized ? (
            <div></div>
          ) : (
            <Image
              src={`/images/loginDashboard/${
                isAuthenticated ? "default-portrait.avif" : "team-1.jpg"
              }`}
              alt="profile_image"
              className="w-full shadow-2xl rounded-xl"
              width={50}
              height={50}
            />
          )}
        </div>
      </div>
      <div className="flex-none w-auto max-w-full px-3 my-auto">
        <div className="h-full">
          <h5 className="mb-1  font-semibold text-[var(--dashboardTextTitles)] text-xl">
            {state.fullName}
          </h5>
          <p className="mb-0 font-semibold leading-normal  text-sm">
            Public Relations
          </p>
        </div>
      </div>
      <div className="w-full max-w-full px-3 mx-auto mt-4 sm:my-auto sm:mr-0 md:w-1/2 md:flex-none lg:w-4/12">
        <div className="relative right-0">
          <LoginDashboardProfileBtns />
        </div>
      </div>
    </div>
  );
};

export default LoginDashboardProfileTitle;
