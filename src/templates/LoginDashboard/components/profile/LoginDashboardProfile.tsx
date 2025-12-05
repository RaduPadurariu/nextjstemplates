import LoginDashboardProfileData from "@/templates/LoginDashboard/components/profile/LoginDashboardProfileData";
import LoginDashboardProfileTitle from "@/templates/LoginDashboard/components/profile/LoginDashboardProfileTitle";
import Image from "next/image";
import React from "react";

const LoginDashboardProfile = () => {
  return (
    <section>
      <div className="relative w-full mx-auto mt-44">
        <div className="relative flex flex-col flex-auto min-w-0 p-4 mx-6 overflow-hidden break-words bg-white border-0  shadow-2xl rounded-2xl bg-clip-border">
          <LoginDashboardProfileTitle />
        </div>
      </div>
      <div className="w-full p-6 mx-auto">
        <div className="flex flex-wrap -mx-3">
          <div className="w-full max-w-full px-3 shrink-0 md:w-8/12">
            <LoginDashboardProfileData />
          </div>
          <div className="w-full max-w-full px-3 mt-6 md:mt-0 shrink-0 md:w-4/12">
            <div className="relative flex flex-col min-w-0 break-words bg-white border-0 shadow-xl  rounded-2xl bg-clip-border">
              <Image
                width={2000}
                height={1000}
                className="w-full rounded-t-2xl"
                src="/images/loginDashboard/bg-profile.jpg"
                alt="profile cover image"
              />
              <div className="flex flex-wrap justify-center -mx-3">
                <div className="w-4/12 max-w-full px-3 ">
                  <div className="mb-6 -mt-6 lg:mb-0 lg:-mt-16">
                    {" "}
                    <Image
                      width={800}
                      height={800}
                      className="h-auto max-w-full border-2 border-white border-solid rounded-full"
                      src="/images/loginDashboard/team-2.jpg"
                      alt="profile image"
                    />
                  </div>
                </div>
              </div>
              <div className="border-black/12.5 rounded-t-2xl p-6 text-center pt-0 pb-6 lg:pt-2 lg:pb-4">
                <div className="flex justify-between">
                  <button
                    type="button"
                    className="hidden px-8 py-2 font-bold leading-normal text-center text-white align-middle transition-all ease-in border-0 rounded-lg shadow-md cursor-pointer text-xs bg-cyan-500 lg:block tracking-tight-rem hover:shadow-xs hover:-translate-y-px active:opacity-85"
                  >
                    Connect
                  </button>
                  <button
                    type="button"
                    className="block px-8 py-2 font-bold leading-normal text-center text-white align-middle transition-all ease-in border-0 rounded-lg shadow-md cursor-pointer text-xs bg-cyan-500 lg:hidden tracking-tight-rem hover:shadow-xs hover:-translate-y-px active:opacity-85"
                  >
                    <i className="fa-solid fa-layer-group text-2.8"></i>
                  </button>
                  <button
                    type="button"
                    className="hidden px-8 py-2 font-bold leading-normal text-center text-white align-middle transition-all ease-in border-0 rounded-lg shadow-md cursor-pointer text-xs bg-slate-700 lg:block tracking-tight-rem hover:shadow-xs hover:-translate-y-px active:opacity-85"
                  >
                    Message
                  </button>
                  <button
                    type="button"
                    className="block px-8 py-2 font-bold leading-normal text-center text-white align-middle transition-all ease-in border-0 rounded-lg shadow-md cursor-pointer text-xs bg-slate-700 lg:hidden tracking-tight-rem hover:shadow-xs hover:-translate-y-px active:opacity-85"
                  >
                    <i className="fa-solid fa-envelope text-2.8"></i>
                  </button>
                </div>
              </div>

              <div className="flex-auto p-6 pt-0">
                <div className="flex flex-wrap -mx-3">
                  <div className="w-full max-w-full px-3 flex-1-0">
                    <div className="flex justify-center">
                      <div className="grid text-center">
                        <span className="font-bold  text-lg">22</span>
                        <span className="leading-normal text-sm opacity-80">
                          Friends
                        </span>
                      </div>
                      <div className="grid mx-6 text-center">
                        <span className="font-bold  text-lg">10</span>
                        <span className="leading-normal  text-sm opacity-80">
                          Photos
                        </span>
                      </div>
                      <div className="grid text-center">
                        <span className="font-bold  text-lg">89</span>
                        <span className="leading-normal text-sm opacity-80">
                          Comments
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-6 text-center">
                  <h5 className="font-semibold text-[var(--dashboardTextTitles)] text-xl mb-2">
                    Mark Davis
                    <span className="font-light">, 35</span>
                  </h5>
                  <div className="mb-2 font-semibold leading-relaxed text-base  text-slate-700">
                    <i className="mr-2  fa-solid fa-map-marker-alt"></i>
                    Bucharest, Romania
                  </div>
                  <div className="mt-6 mb-2 font-semibold leading-relaxed text-base  text-slate-700">
                    <i className="mr-2  fa-solid fa-briefcase"></i>
                    Solution Manager - Creative Tim Officer
                  </div>
                  <div className="">
                    <i className="mr-2  fa-solid fa-graduation-cap"></i>
                    University of Computer Science
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginDashboardProfile;
