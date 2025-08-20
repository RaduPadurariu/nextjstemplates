"use client";

import React, { useState } from "react";

import { loginDashboardProfileButtons } from "@/data/loginDashboard";

const LoginDashboardProfileBtns = () => {
  const [active, setActive] = useState(1);
  return (
    <ul
      className="relative flex flex-col sm:flex-row p-1 list-none bg-gray-100 rounded-xl"
      role="tablist"
    >
      {loginDashboardProfileButtons.map((button) => {
        return (
          <li key={button.id} className="z-30 flex-auto text-center">
            <button
              onClick={() => setActive(button.id)}
              className={`relative cursor-pointer z-40 flex items-center justify-center w-full px-3 py-2 mb-0 border-0 rounded-lg transition-colors duration-300 ease-in-out
    ${
      active === button.id ? "bg-white shadow-sm" : "bg-gray-100 text-slate-700"
    }`}
              role="tab"
              aria-selected="true"
            >
              <i className={`text-lg ${button.icon}`}></i>
              <span className="ml-2 text-base text-[var(--dashboardTextTitles)]">
                {button.title}
              </span>
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default LoginDashboardProfileBtns;
