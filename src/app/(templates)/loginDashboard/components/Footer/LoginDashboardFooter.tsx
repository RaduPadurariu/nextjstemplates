import React from "react";

const LoginDashboardFooter = () => {
  return (
    <footer className="pt-4 pb-2">
      <div className="w-full px-6 mx-auto">
        <div className="flex flex-wrap items-center -mx-3 lg:justify-between">
          <div className="w-full max-w-full px-3 mt-0 mb-6 shrink-0 lg:mb-0 lg:w-1/2 lg:flex-none">
            <div className="text-sm leading-normal text-center text-slate-500 lg:text-left">
              Made with <i className="fa fa-heart"></i> by Radu Padurariu
              inspired by{" "}
              <a
                href="https://www.creative-tim.com"
                className="font-semibold text-slate-700 dark:text-white"
                target="_blank"
              >
                Creative Tim
              </a>
            </div>
          </div>
          <div className="w-full max-w-full px-3 mt-0 lg:w-1/2 lg:flex-none">
            <ul className="flex flex-wrap justify-center pl-0 mb-0 list-none lg:justify-end">
              <li className="nav-item">
                <button className="block px-4 pt-0 pb-1 text-sm font-normal transition-colors ease-in-out cursor-pointer text-slate-500">
                  Creative Tim
                </button>
              </li>
              <li className="nav-item">
                <button className=" cursor-pointer block px-4 pt-0 pb-1 text-sm font-normal transition-colors ease-in-out text-slate-500">
                  About Us
                </button>
              </li>
              <li className="nav-item">
                <button className="cursor-pointer block px-4 pt-0 pb-1 text-sm font-normal transition-colors ease-in-out text-slate-500">
                  Blog
                </button>
              </li>
              <li className="nav-item">
                <button className="cursor-pointer block px-4 pt-0 pb-1 pr-0 text-sm font-normal transition-colors ease-in-out text-slate-500">
                  License
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default LoginDashboardFooter;
