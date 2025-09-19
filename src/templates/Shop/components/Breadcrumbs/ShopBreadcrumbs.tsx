"use client";
import React from "react";
import { useShopBreadcrumbs } from "../../hooks/useShopBreadcrumbs";
import Link from "next/link";

const ShopBreadcrumbs = () => {
  const breadcrumbs = useShopBreadcrumbs();

  return (
    <div className="pb-[26px] ">
      <div className="shop-subContainer px-[15px] md:px-0 w-100% md:w-[750px] lg:w-[970px] xl:w-[1170px]">
        <ul className="m-0 p-0">
          {breadcrumbs.map((crumb, i) => {
            const isLast = i === breadcrumbs.length - 1;
            return (
              <li key={crumb.href} className="inline-block pt-[27px] pr-2.5 ">
                {!isLast ? (
                  <>
                    <Link
                      href={crumb.href}
                      className="text-[13px] leading-[1em] text-[var(--shopBGHeader)]"
                    >
                      {crumb.label}
                    </Link>
                    <span>&nbsp; &gt;</span>
                  </>
                ) : (
                  <span className="">{crumb.label}</span>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default ShopBreadcrumbs;
