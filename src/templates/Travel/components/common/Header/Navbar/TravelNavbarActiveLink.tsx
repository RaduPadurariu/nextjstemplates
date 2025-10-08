"use client";
import { travelLinkType } from "@/templates/Travel/types/types";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const TravelNavbarActiveLink = ({
  link,
  setNavOpen,
}: {
  link: travelLinkType;
  setNavOpen: (value: boolean) => void;
}) => {
  const pathname = usePathname();
  const isActive = pathname === link.link;
  return (
    <li>
      <Link
        onClick={() => {
          setNavOpen(false);
        }}
        href={link.link}
        className={`text-[13px] uppercase overflow-hidden relative w-full py-2.5 lg:py-0 pr-[22px] lg:pr-2 pl-[15px] lg:pl-2 font-semibold leading-10 lg:hover:text-[var(--travelTextSecondary)] lg:duration-300 lg:transition-all lg:ease-in-out ${
          isActive ? "text-[var(--travelTextSecondary)]" : "text-white"
        }`}
      >
        {link.title}
      </Link>
    </li>
  );
};

export default TravelNavbarActiveLink;
