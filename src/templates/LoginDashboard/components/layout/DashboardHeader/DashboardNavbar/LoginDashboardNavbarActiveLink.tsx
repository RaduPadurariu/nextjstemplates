"use client";

import { LoginDashboardLinkType } from "@/templates/LoginDashboard/types/loginDashboardTypes";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const LoginDashboardNavbarActiveLink = ({
  link,
  setActiveTitle,
}: {
  link: LoginDashboardLinkType;
  setActiveTitle: (value: string) => void;
}) => {
  const pathname = usePathname();
  const isActive = pathname === link.link;

  return (
    <li
      key={link.id}
      className="mt-0.5 w-full"
      onClick={() => setActiveTitle(link.title)}
    >
      <Link
        className={`py-2.5 ${
          isActive && "bg-[#5e72e4]/13 text-[var(--dashboardTextSecondary)]"
        } text-sm my-0 mx-2 flex items-center whitespace-nowrap rounded-lg px-4 font-semibold text-[var(--dashboardTextPrimary)] transition-colors `}
        href={link.link}
      >
        <div className="mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-center stroke-0 text-center xl:p-2.5">
          <i
            className={`relative top-0 text-sm leading-normal ${link.color} ${link.icon}`}
          ></i>
        </div>
        <span className="ml-1 duration-300 opacity-100 pointer-events-none ease">
          {link.title}
        </span>
      </Link>
    </li>
  );
};

export default LoginDashboardNavbarActiveLink;
