import {
  loginDashboardTablesAuthors,
  loginDashboardTablesProjects,
} from "@/data/loginDashboard";
import Image from "next/image";
import React from "react";

const LoginDashboardTablesPage = () => {
  return (
    <div className="w-full px-6 py-6 mx-auto">
      <div className="flex flex-wrap -mx-3">
        <div className="flex-none w-full max-w-full px-3">
          <div className="relative flex flex-col min-w-0 mb-6 break-words bg-white border-0 border-transparent border-solid shadow-xl  rounded-2xl bg-clip-border">
            <div className="p-6 pb-0 mb-0 border-b-0 border-b-solid rounded-t-2xl border-b-transparent">
              <h6 className=" font-semibold text-[var(--dashboardTextTitles)] ">
                Authors table
              </h6>
            </div>
            <div className="flex-auto px-0 pt-0 pb-2">
              <div className="p-0 overflow-x-auto">
                <div className="w-full mb-0 align-top border-collapse  text-slate-500">
                  <div className="align-bottom flex w-full justify-between border-b border-b-gray-200 text-[10px]">
                    <div className="min-w-[250px] flex-5 px-6 py-3 font-bold text-left uppercase align-middle bg-transparent  shadow-none  tracking-none whitespace-nowrap text-slate-400 opacity-70">
                      Author
                    </div>
                    <div className="min-w-[100px] flex-2 px-6 py-3 font-bold text-left uppercase align-middle bg-transparent  shadow-none tracking-none whitespace-nowrap text-slate-400 opacity-70">
                      Function
                    </div>
                    <div className="min-w-[100px] flex-2 px-6 py-3 font-bold text-center uppercase align-middle bg-transparent  shadow-none  tracking-none whitespace-nowrap text-slate-400 opacity-70">
                      Status
                    </div>
                    <div className="min-w-[100px] flex-2 px-6 py-3 font-bold text-center uppercase align-middle bg-transparent  shadow-none   tracking-none whitespace-nowrap text-slate-400 opacity-70">
                      Employed
                    </div>
                    <div className="flex-1 px-6 py-3 font-semibold capitalize align-middle bg-transparent border-solid shadow-none tracking-none whitespace-nowrap text-slate-400 opacity-70"></div>
                  </div>
                  <ul className="w-full">
                    {loginDashboardTablesAuthors.map((author) => {
                      return (
                        <li
                          key={author.id}
                          className="flex w-full justify-between border-b border-b-gray-200 items-center"
                        >
                          <div className="min-w-[250px] flex-5 px-6 py-3 align-middle bg-transparent   whitespace-nowrap shadow-transparent">
                            <div className="flex  py-1">
                              <div>
                                <Image
                                  src={author.img}
                                  className="inline-flex items-center justify-center mr-4 text-sm text-white transition-all duration-200 ease-in-out h-9 w-9 rounded-xl"
                                  alt="user1"
                                  width={40}
                                  height={40}
                                />
                              </div>
                              <div className="flex flex-col justify-center">
                                <h6 className="mb-0 text-sm leading-normal  font-semibold text-[var(--dashboardTextTitles)]">
                                  {author.author}
                                </h6>
                                <p className="mb-0 text-xs leading-tight  text-slate-400">
                                  {author.email}
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="min-w-[100px] flex-2 px-6 py-3 align-middle bg-transparent  whitespace-nowrap shadow-transparent">
                            <p className="mb-0 text-xs font-semibold leading-tight ">
                              {author.position}
                            </p>
                            <p className="mb-0 text-xs leading-tight  text-slate-400">
                              {author.department}
                            </p>
                          </div>
                          <div className="min-w-[100px] flex-2 px-6 py-3 text-sm leading-normal text-center align-middle bg-transparent   whitespace-nowrap shadow-transparent">
                            <span
                              className={`bg-gradient-to-tl ${
                                author.status == "Online"
                                  ? "from-emerald-500 to-teal-400"
                                  : "from-slate-600 to-slate-300"
                              } px-2.5 text-xs rounded-md py-1.5 inline-block whitespace-nowrap text-center align-baseline font-bold uppercase leading-none text-white`}
                            >
                              {author.status}
                            </span>
                          </div>
                          <div className="min-w-[100px] flex-2 px-6 py-3 text-center align-middle bg-transparent   whitespace-nowrap shadow-transparent">
                            <span className="text-xs font-semibold leading-tight  text-slate-400">
                              {author.joinDate}
                            </span>
                          </div>
                          <div className="flex-1 px-6 py-3 align-middle bg-transparent   whitespace-nowrap shadow-transparent">
                            <a
                              href="javascript:;"
                              className="text-xs font-semibold leading-tight  text-slate-400"
                            >
                              {" "}
                              Edit{" "}
                            </a>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap -mx-3">
        <div className="flex-none w-full max-w-full px-3">
          <div className="relative flex flex-col min-w-0 mb-6 break-words bg-white border-0 border-transparent border-solid shadow-xl  rounded-2xl bg-clip-border">
            <div className="p-6 pb-0 mb-0 border-b-0 border-b-solid rounded-t-2xl border-b-transparent">
              <h6 className=" font-semibold text-[var(--dashboardTextTitles)]">
                Projects table
              </h6>
            </div>
            <div className="flex-auto px-0 pt-0 pb-2">
              <div className="p-0 overflow-x-auto">
                <div className="items-center justify-center w-full mb-0 align-top border-collapse  text-slate-500">
                  <div className="align-bottom flex w-full justify-between border-b border-b-gray-200 text-[10px]">
                    <div className="min-w-[150px] flex-2 px-6 py-3 font-bold text-left uppercase align-middle bg-transparent  shadow-none   tracking-none whitespace-nowrap text-slate-400 opacity-70">
                      Project
                    </div>
                    <div className="min-w-[100px] flex-1 px-6 py-3 font-bold text-left uppercase align-middle bg-transparent  shadow-none  tracking-none whitespace-nowrap text-slate-400 opacity-70">
                      Budget
                    </div>
                    <div className="min-w-[100px] flex-1 px-6 py-3 font-bold text-center uppercase align-middle bg-transparent  shadow-none tracking-none whitespace-nowrap text-slate-400 opacity-70">
                      Status
                    </div>
                    <div className="min-w-[200px] flex-4 px-6 py-3 font-bold text-center uppercase align-middle bg-transparent  shadow-none   tracking-none whitespace-nowrap text-slate-400 opacity-70">
                      Completion
                    </div>
                  </div>
                  <ul>
                    {loginDashboardTablesProjects.map((project) => {
                      return (
                        <li
                          key={project.id}
                          className="flex w-full justify-between border-b border-b-gray-200 items-center"
                        >
                          <div className="min-w-[150px] flex-2 px-6 py-2 align-middle bg-transparent   whitespace-nowrap shadow-transparent">
                            <div className="flex ">
                              <div>
                                <Image
                                  src={project.img}
                                  className="inline-flex items-center justify-center mr-2 text-sm text-white transition-all duration-200 ease-in-out rounded-full h-9 w-9"
                                  alt="user1"
                                  width={40}
                                  height={40}
                                />
                              </div>
                              <div className="my-auto">
                                <h6 className="mb-0 text-sm leading-normal text-[var(--dashboardTextTitles)] font-semibold ">
                                  {project.project}
                                </h6>
                              </div>
                            </div>
                          </div>
                          <div className="min-w-[100px] flex-1 px-6 py-2 align-middle bg-transparent   whitespace-nowrap shadow-transparent">
                            <p className="mb-0 text-sm font-semibold leading-tight ">
                              {project.budget}
                            </p>
                          </div>
                          <div className="min-w-[100px] text-center flex-1 px-6 py-2 align-middle bg-transparent   whitespace-nowrap shadow-transparent">
                            <span className="mb-0 text-xs font-semibold leading-tight ">
                              {project.status}
                            </span>
                          </div>
                          <div className="min-w-[200px] flex-4 px-6 py-2 align-middle bg-transparent   whitespace-nowrap shadow-transparent">
                            <div className="flex items-center justify-center">
                              <span className="mr-2 text-xs font-semibold leading-tight ">
                                {project.completion.toString()}%
                              </span>
                              <div>
                                <div className="text-xs h-0.75 w-30 m-0 flex overflow-visible rounded-lg bg-gray-200">
                                  <div
                                    style={{ width: `${project.completion}%` }}
                                    className={`flex flex-col justify-center h-auto overflow-hidden text-center text-white transition-all bg-blue-500 rounded duration-700 ease-in bg-gradient-to-tl ${project.gradient} whitespace-nowrap`}
                                    role="progressbar"
                                    aria-valuenow={project.completion}
                                    aria-valuemin={0}
                                    aria-valuemax={100}
                                  ></div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginDashboardTablesPage;
