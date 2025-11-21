"use client";

import { FashionNavLinkType } from "@/templates/Fashion/types/types";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const FashionActiveLink = ({
  link,
  setNavOpen,
  variant,
}: {
  link: FashionNavLinkType;
  setNavOpen?: (value: boolean) => void;
  variant: "header" | "footer";
}) => {
  const pathname = usePathname();
  const isActive = pathname === link.href;
  return (
    <li className="p-2">
      <Link
        onClick={() => setNavOpen?.(false)}
        href={link.href}
        className={` ${
          isActive
            ? "text-[var(--fashionTextSecondary)]"
            : `${
                variant === "header"
                  ? "text-white md:text-[var(--fashionTextHeading)]"
                  : "text-[var(--fashionTextHeading)]"
              }`
        } ${
          variant === "header"
            ? "font-normal md:font-semibold text-xl md:text-xs"
            : "font-semibold text-xs"
        } uppercase tracking-[1px] mr-2`}
      >
        {link.title}
      </Link>
    </li>
  );
};

export default FashionActiveLink;
