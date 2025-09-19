"use client";

import { usePathname } from "next/navigation";
import React from "react";
import LoginDashboardHeader from "../DashboardHeader/LoginDashboardHeader";

const LoginDashboardLayoutWrapper = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const pathname = usePathname();
  const isProfilePage = pathname === "/loginDashboard/home/profile";
  return (
    <div className="min-h-[100vh] loginDashboardFamilyFont text-base antialiased font-normal leading-default text-[var(--dashboardTextPrimary)] bg-[var(--dashboardBGPrimary)] ">
      <div
        className={`absolute w-full min-h-75  ${
          isProfilePage
            ? "bg-[url('/images/loginDashboard/profile-layout-header.jpg')] bg-left"
            : "bg-[var(--dashboardBGSecondary)]"
        }`}
      ></div>
      {isProfilePage && (
        <span className="absolute top-0 left-0 w-full h-full bg-[var(--dashboardBGSecondary)] opacity-60 max-h-75"></span>
      )}
      <div className="relative h-full transition-all duration-200 ease-in-out xl:ml-68 rounded-xl">
        <LoginDashboardHeader />
        {children}
      </div>
    </div>
  );
};

export default LoginDashboardLayoutWrapper;
