import { FashionNavLinkType } from "@/templates/Fashion/types/types";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const FashionActiveLink = ({
  link,
  setNavOpen,
}: {
  link: FashionNavLinkType;
  setNavOpen: (value: boolean) => void;
}) => {
  const pathname = usePathname();
  const isActive = pathname === link.href;
  return (
    <li className="p-2">
      <Link
        onClick={() => setNavOpen(false)}
        href={link.href}
        className={` ${
          isActive
            ? "text-[var(--fashionTextSecondary)]"
            : "text-white md:text-[var(--fashionTextHeading)]"
        } font-normal md:font-semibold uppercase tracking-[1px] mr-2 text-xl md:text-xs`}
      >
        {link.title}
      </Link>
    </li>
  );
};

export default FashionActiveLink;
