"use client";

import React, { useEffect, useState } from "react";
import useAuthStore from "../../store/useAuthStore";
import { useProfileUpdate } from "../../hooks/useProfileUpdate";
import { useRouter } from "next/navigation";

const LoginDashboardProfileData = () => {
  const { isAuthenticated, user, logout, email } = useAuthStore();
  const { state, dispatch } = useProfileUpdate();
  const [isSaved, setIsSaved] = useState(false);

  const router = useRouter();

  const handleSavedData = () => {
    setIsSaved(true);

    setTimeout(() => setIsSaved(false), 3000);
  };

  useEffect(() => {
    if (user) {
      dispatch({ type: "SET_USER_NAME", payload: user.userName || "" });
      dispatch({ type: "SET_FULL_NAME", payload: user.fullName || "" });
      dispatch({ type: "SET_FIRST_NAME", payload: user.firstName || "" });
      dispatch({ type: "SET_LAST_NAME", payload: user.lastName || "" });
      dispatch({ type: "SET_ADDRESS", payload: user.address || "" });
      dispatch({ type: "SET_CITY", payload: user.city || "" });
      dispatch({ type: "SET_COUNTRY", payload: user.country || "" });
      dispatch({ type: "SET_POSTAL_CODE", payload: user.postalCode || "" });
      dispatch({ type: "SET_ABOUT_ME", payload: user.aboutMe || "" });

      const existingUsers = JSON.parse(
        localStorage.getItem("loginDashboardUsers") || "[]"
      );
      const updatedUsers = existingUsers.map((u: { email: string }) =>
        u.email === email ? { ...u, ...user } : u
      );
      localStorage.setItem("loginDashboardUsers", JSON.stringify(updatedUsers));
    }
  }, [user, email, dispatch]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const updatedUser = {
      userName: state.userName,
      fullName: state.fullName,
      firstName: state.firstName,
      lastName: state.lastName,
      address: state.address,
      city: state.city,
      country: state.country,
      postalCode: state.postalCode,
      aboutMe: state.aboutMe,
    };

    useAuthStore.setState({
      ...useAuthStore.getState(),
      user: updatedUser,
    });
  };

  const handleDelete = () => {
    const existingUsers = JSON.parse(
      localStorage.getItem("loginDashboardUsers") || "[]"
    );

    const updatedUsers = existingUsers.filter(
      (u: { email: string }) => u.email !== email
    );

    localStorage.setItem("loginDashboardUsers", JSON.stringify(updatedUsers));

    logout(); // scoate din cookie + store
    router.push("/loginDashboard/auth");
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="relative flex flex-col min-w-0 break-words bg-white border-0 shadow-xl dark:bg-slate-850 dark:shadow-dark-xl rounded-2xl bg-clip-border"
    >
      <div className="border-black/12.5 rounded-t-2xl border-b-0 border-solid p-6 pb-0">
        <div className="flex flex-col sm:flex-row sm:justify-between">
          <p className="mb-5 sm:mb-0 dark:text-white/80 ">Edit Profile</p>
          <div className="">
            {isAuthenticated ? (
              <div className="flex flex-col ">
                <div>
                  <button
                    type="submit"
                    onClick={handleSavedData}
                    className="mr-3 inline-block px-6 py-2 mb-4 ml-auto font-bold leading-normal text-center text-white align-middle transition-all ease-in bg-[var(--dashboardBGSecondary)] border-0 rounded-lg shadow-md cursor-pointer text-xs tracking-tight-rem hover:shadow-xs hover:-translate-y-px active:opacity-85"
                  >
                    Save data
                  </button>
                  <button
                    type="button"
                    onClick={handleDelete}
                    className="inline-block px-6 py-2 mb-4 ml-auto font-bold leading-normal text-center text-white align-middle transition-all ease-in bg-[var(--dashboardIconRed)] border-0 rounded-lg shadow-md cursor-pointer text-xs tracking-tight-rem hover:shadow-xs hover:-translate-y-px active:opacity-85"
                  >
                    Delete account
                  </button>
                </div>
                {isSaved && (
                  <span className="sm:mr-3 text-xs text-[var(--dashboardAccentSuccess)] sm:text-center">
                    Your data has been saved.
                  </span>
                )}
              </div>
            ) : (
              <button
                type="button"
                className="inline-block px-6 py-2 mb-4 ml-auto font-bold leading-normal text-center text-white align-middle transition-all ease-in bg-[var(--dashboardBGSecondary)] border-0 rounded-lg shadow-md cursor-pointer text-xs tracking-tight-rem hover:shadow-xs hover:-translate-y-px active:opacity-85"
              >
                Settings
              </button>
            )}
          </div>
        </div>
      </div>
      <div className="flex-auto p-6">
        <p className="leading-normal uppercase dark:text-white dark:opacity-60 text-sm mb-4">
          User Information
        </p>
        <div className="flex flex-wrap -mx-3">
          <div className="w-full max-w-full px-3 shrink-0 md:w-6/12">
            <div className="mb-4">
              <label
                htmlFor="loginDashboard_username"
                className="inline-block mb-2 ml-1 font-bold text-xs text-slate-700 dark:text-white/80"
              >
                Username
              </label>
              <input
                type="text"
                name="username"
                id="loginDashboard_username"
                value={state.userName}
                onChange={(e) =>
                  dispatch({ type: "SET_USER_NAME", payload: e.target.value })
                }
                className="focus:shadow-primary-outline dark:bg-slate-850 dark:text-white text-sm leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-blue-500 focus:outline-none"
              />
            </div>
          </div>
          <div className="w-full max-w-full px-3 shrink-0 md:w-6/12 ">
            <div className="mb-4">
              <label
                htmlFor="loginDashboard_email"
                className="inline-block mb-2 ml-1 font-bold text-xs text-slate-700 dark:text-white/80"
              >
                Email address
              </label>
              <input
                type="email"
                name="email"
                value={email || ""}
                readOnly
                id="loginDashboard_email"
                className="focus:shadow-primary-outline dark:bg-slate-850 dark:text-white text-sm leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-blue-500 focus:outline-none"
              />
            </div>
          </div>
          <div className="w-full max-w-full px-3 shrink-0 md:w-6/12 ">
            <div className="mb-4">
              <label
                htmlFor="loginDashboard_firstName"
                className="inline-block mb-2 ml-1 font-bold text-xs text-slate-700 dark:text-white/80"
              >
                First name
              </label>
              <input
                type="text"
                name="first name"
                value={state.firstName}
                onChange={(e) =>
                  dispatch({ type: "SET_FIRST_NAME", payload: e.target.value })
                }
                id="loginDashboard_firstName"
                className="focus:shadow-primary-outline dark:bg-slate-850 dark:text-white text-sm leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-blue-500 focus:outline-none"
              />
            </div>
          </div>
          <div className="w-full max-w-full px-3 shrink-0 md:w-6/12">
            <div className="mb-4">
              <label
                htmlFor="loginDashboard_lastName"
                className="inline-block mb-2 ml-1 font-bold text-xs text-slate-700 dark:text-white/80"
              >
                Last name
              </label>
              <input
                type="text"
                name="last name"
                value={state.lastName}
                onChange={(e) =>
                  dispatch({ type: "SET_LAST_NAME", payload: e.target.value })
                }
                id="loginDashboard_lastName"
                className="focus:shadow-primary-outline dark:bg-slate-850 dark:text-white text-sm leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-blue-500 focus:outline-none"
              />
            </div>
          </div>
        </div>
        <hr className="h-px mx-0 my-4 bg-transparent border-0 opacity-25 bg-gradient-to-r from-transparent via-black/40 to-transparent dark:bg-gradient-to-r dark:from-transparent dark:via-white dark:to-transparent " />

        <p className="leading-normal uppercase dark:text-white dark:opacity-60 text-sm mb-4">
          Contact Information
        </p>
        <div className="flex flex-wrap -mx-3">
          <div className="w-full max-w-full px-3 shrink-0 md:w-full ">
            <div className="mb-4">
              <label
                htmlFor="loginDashboard_address"
                className="inline-block mb-2 ml-1 font-bold text-xs text-slate-700 dark:text-white/80"
              >
                Address
              </label>
              <input
                type="text"
                name="address"
                id="loginDashboard_address"
                value={state.address}
                onChange={(e) =>
                  dispatch({ type: "SET_ADDRESS", payload: e.target.value })
                }
                className="focus:shadow-primary-outline dark:bg-slate-850 dark:text-white text-sm leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-blue-500 focus:outline-none"
              />
            </div>
          </div>
          <div className="w-full max-w-full px-3 shrink-0 md:w-4/12">
            <div className="mb-4">
              <label
                htmlFor="loginDashboard_city"
                className="inline-block mb-2 ml-1 font-bold text-xs text-slate-700 dark:text-white/80"
              >
                City
              </label>
              <input
                type="text"
                name="city"
                id="loginDashboard_city"
                value={state.city}
                onChange={(e) =>
                  dispatch({ type: "SET_CITY", payload: e.target.value })
                }
                className="focus:shadow-primary-outline dark:bg-slate-850 dark:text-white text-sm leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-blue-500 focus:outline-none"
              />
            </div>
          </div>
          <div className="w-full max-w-full px-3 shrink-0 md:w-4/12 ">
            <div className="mb-4">
              <label
                htmlFor="loginDashboard_country"
                className="inline-block mb-2 ml-1 font-bold text-xs text-slate-700 dark:text-white/80"
              >
                Country
              </label>
              <input
                type="text"
                name="country"
                id="loginDashboard_country"
                value={state.country}
                onChange={(e) =>
                  dispatch({ type: "SET_COUNTRY", payload: e.target.value })
                }
                className="focus:shadow-primary-outline dark:bg-slate-850 dark:text-white text-sm leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-blue-500 focus:outline-none"
              />
            </div>
          </div>
          <div className="w-full max-w-full px-3 shrink-0 md:w-4/12 ">
            <div className="mb-4">
              <label
                htmlFor="loginDashboard_postalCode"
                className="inline-block mb-2 ml-1 font-bold text-xs text-slate-700 dark:text-white/80"
              >
                Postal code
              </label>
              <input
                type="text"
                name="postal code"
                value={state.postalCode}
                onChange={(e) =>
                  dispatch({ type: "SET_POSTAL_CODE", payload: e.target.value })
                }
                id="loginDashboard_postalCode"
                className="focus:shadow-primary-outline dark:bg-slate-850 dark:text-white text-sm leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-blue-500 focus:outline-none"
              />
            </div>
          </div>
        </div>
        <hr className="h-px mx-0 my-4 bg-transparent border-0 opacity-25 bg-gradient-to-r from-transparent via-black/40 to-transparent dark:bg-gradient-to-r dark:from-transparent dark:via-white dark:to-transparent " />

        <p className="leading-normal uppercase dark:text-white dark:opacity-60 text-sm mb-4">
          About me
        </p>
        <div className="flex flex-wrap -mx-3">
          <div className="w-full max-w-full px-3 shrink-0 md:w-full">
            <div className="mb-4">
              <label
                htmlFor="loginDashboard_aboutMe"
                className="inline-block mb-2 ml-1 font-bold text-xs text-slate-700 dark:text-white/80"
              >
                About me
              </label>
              <input
                type="text"
                name="about me"
                id="loginDashboard_aboutMe"
                value={state.aboutMe}
                onChange={(e) =>
                  dispatch({ type: "SET_ABOUT_ME", payload: e.target.value })
                }
                className="focus:shadow-primary-outline dark:bg-slate-850 dark:text-white text-sm leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-blue-500 focus:outline-none"
              />
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default LoginDashboardProfileData;
