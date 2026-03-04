"use client";

import { useRouter } from "next/navigation";
import React, { useMemo } from "react";
import { useSignIn } from "../../hooks/useSignIn";

import useAuthStore from "@/templates/LoginDashboard/store/useAuthStore";
import { checkEmailSignIn, checkPasswordSignIn } from "./ValidationErrors";

const LoginDashboardSignInForm = () => {
  const router = useRouter();
  const { state, dispatch } = useSignIn();
  const { login } = useAuthStore();

  // useMemo is just to learn, not necessarily
  const emailErrors = useMemo(() => {
    return state.isAfterSubmit ? checkEmailSignIn(state.email) : [];
  }, [state.isAfterSubmit, state.email]);

  const passwordErrors = useMemo(() => {
    return state.isAfterSubmit ? checkPasswordSignIn(state.password) : [];
  }, [state.isAfterSubmit, state.password]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch({ type: "IS_AFTER_SUBMIT", payload: true });

    const emailErrors = checkEmailSignIn(state.email);
    const passwordErrors = checkPasswordSignIn(state.password);

    if (emailErrors.length > 0 || passwordErrors.length > 0) {
      return;
    }

    const newUser = {
      email: state.email,
      password: state.password,
    };

    const existingUsers = JSON.parse(
      localStorage.getItem("loginDashboardUsers") || "[]",
    );

    const userExists = existingUsers.some(
      (user: { email: string; password: string }) =>
        user.email === newUser.email && user.password == newUser.password,
    );

    if (!userExists) {
      dispatch({
        type: "SET_FORM_ERROR",
        payload: "Invalid email or password",
      });
      return;
    }
    login(newUser.email);

    router.replace("/loginDashboard/home");
  };

  return (
    <form role="form" onSubmit={handleSubmit}>
      <div className="mb-4">
        <label htmlFor="loginDashboardLoginEmail">Email</label>
        <input
          id="loginDashboardLoginEmail"
          type="email"
          value={state.email}
          placeholder="Email"
          onChange={(e) =>
            dispatch({ type: "SET_EMAIL", payload: e.target.value })
          }
          className="focus:shadow-primary-outline  text-sm leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding p-3 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-fuchsia-300 focus:outline-none"
        />
        <div className="text-xs text-red-400 mt-1 ml-1 min-h-[1rem]">
          {emailErrors.length > 0 &&
            emailErrors.map((err, i) => <span key={i}>{err}</span>)}
        </div>
      </div>
      <div className="mb-4">
        <label htmlFor="loginDashboardLoginPassword">Password</label>
        <input
          id="loginDashboardLoginPassword"
          type="password"
          value={state.password}
          onChange={(e) =>
            dispatch({ type: "SET_PASSWORD", payload: e.target.value })
          }
          autoComplete="off"
          placeholder="Password"
          className="focus:shadow-primary-outline  text-sm leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding p-3 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-fuchsia-300 focus:outline-none"
        />
        <div className="text-xs text-red-400 mt-1 ml-1 min-h-[1rem]">
          {passwordErrors.length > 0 &&
            passwordErrors.map((err, i) => <span key={i}>{err}</span>)}
        </div>
      </div>
      <div className="flex items-center pl-12 mb-0.5 text-left min-h-6">
        <input
          id="rememberMe"
          className="mt-0.5 rounded-10 duration-250 ease-in-out after:rounded-circle after:shadow-2xl after:duration-250 checked:after:translate-x-5.3 h-5 relative float-left -ml-12 w-10 cursor-pointer appearance-none border border-solid border-gray-200 bg-zinc-700/10 bg-none bg-contain bg-left bg-no-repeat align-top transition-all after:absolute after:top-px after:h-4 after:w-4 after:translate-x-px after:bg-white after:content-[''] checked:border-[var(--dashboardBGSecondary)] checked:bg-[var(--dashboardBGSecondary)] checked:bg-none checked:bg-right"
          type="checkbox"
        />
        <label
          className="ml-2 font-normal cursor-pointer select-none text-sm text-slate-700"
          htmlFor="rememberMe"
        >
          Remember me
        </label>
      </div>
      <div className="text-center flex flex-col">
        <button
          type="submit"
          className="inline-block w-full px-16 py-3.5 mt-6 mb-0 font-bold leading-normal text-center text-white align-middle transition-all bg-[var(--dashboardBGSecondary)] border-0 rounded-lg cursor-pointer hover:-translate-y-px active:opacity-85 hover:shadow-xs text-sm ease-in tracking-tight-rem shadow-md bg-150 bg-x-25"
        >
          Sign in
        </button>
        <div className="text-xs text-red-400 mt-1 ml-1 h-1">
          {state.formError && state.formError}
        </div>
      </div>
    </form>
  );
};

export default LoginDashboardSignInForm;
