"use client";
import { useTravelBreadcrumbs } from "@/templates/Travel/hooks/useTravelBreadcrumbs";
import Link from "next/link";
import React from "react";

const TravelBreadcrumbs = () => {
  const breadcrumbs = useTravelBreadcrumbs();
  return (
    <section className="bg-[url('/images/travel/top-banner.jpg')] bg-cover bg-center relative">
      <div className="absolute inset-0 bg-[#04091E66]"></div>
      <div className="travel-container">
        <div className="flex items-center justify-center">
          <div className="mt-[70px] py-[90px] relative">
            <h1 className="text-5xl text-white font-bold z-0">
              {breadcrumbs[1].label}
            </h1>
            <ul className="mt-2.5 flex justify-center items-center">
              {breadcrumbs.map((crumb, i) => {
                const isLast = i === breadcrumbs.length - 1;
                return (
                  <li
                    key={crumb.href}
                    className="mt-2.5 text-white flex items-center"
                  >
                    {!isLast ? (
                      <>
                        <Link href={crumb.href} className="text-sm">
                          {crumb.label}
                        </Link>
                        <span>
                          &nbsp; <i className="fa fa-arrow-right"> &nbsp;</i>
                        </span>
                      </>
                    ) : (
                      <span className="text-sm">{crumb.label}</span>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TravelBreadcrumbs;
