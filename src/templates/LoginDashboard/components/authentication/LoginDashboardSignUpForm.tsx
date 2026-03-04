"use client";
import React, { useMemo } from "react";
import { useSignUp } from "../../hooks/useSignUp";
import { useRouter } from "next/navigation";
import useAuthStore from "@/templates/LoginDashboard/store/useAuthStore";
import {
  checkConfirmPasswordSignUp,
  checkEmailSignUp,
  checkPasswordSignUp,
  checkTermsSignUp,
  checkUsernameSignUp,
} from "./ValidationErrors";

const LoginDashboardSignUpForm = () => {
  const router = useRouter();
  const { state, dispatch } = useSignUp();
  const { login } = useAuthStore();

  // useMemo is just to learn, not necessarily
  const usernameErrors = useMemo(() => {
    return state.isAfterSubmit ? checkUsernameSignUp(state.username) : [];
  }, [state.isAfterSubmit, state.username]);

  const emailErrors = useMemo(() => {
    return state.isAfterSubmit ? checkEmailSignUp(state.email) : [];
  }, [state.isAfterSubmit, state.email]);

  const passwordErrors = useMemo(() => {
    return state.isAfterSubmit ? checkPasswordSignUp(state.password) : [];
  }, [state.isAfterSubmit, state.password]);

  const confirmPasswordErrors = useMemo(() => {
    return state.isAfterSubmit
      ? checkConfirmPasswordSignUp(state.password, state.confirmPassword)
      : [];
  }, [state.isAfterSubmit, state.password, state.confirmPassword]);

  const termsErrors = useMemo(() => {
    return state.isAfterSubmit ? checkTermsSignUp(state.hasAcceptedTerms) : [];
  }, [state.isAfterSubmit, state.hasAcceptedTerms]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch({ type: "IS_AFTER_SUBMIT", payload: true });

    const usernameErrors = checkUsernameSignUp(state.username);
    const emailErrors = checkEmailSignUp(state.email);
    const passwordErrors = checkPasswordSignUp(state.password);
    const confirmPasswordErrors = checkConfirmPasswordSignUp(
      state.password,
      state.confirmPassword,
    );
    const termsErrors = checkTermsSignUp(state.hasAcceptedTerms);

    if (
      usernameErrors.length > 0 ||
      emailErrors.length > 0 ||
      passwordErrors.length > 0 ||
      confirmPasswordErrors.length > 0 ||
      termsErrors.length > 0
    ) {
      return;
    }

    const newUser = {
      username: state.username,
      email: state.email,
      password: state.password,
      firstName: "",
      lastName: "",
      address: "",
      city: "",
      country: "",
      postalCode: "",
      aboutMe: "",
    };

    const existingUsers = JSON.parse(
      localStorage.getItem("loginDashboardUsers") || "[]",
    );

    const userExists = existingUsers.some(
      (user: { username: string }) => user.username === newUser.username,
    );

    const emailExists = existingUsers.some(
      (user: { email: string }) => user.email === newUser.email,
    );

    if (userExists) {
      dispatch({
        type: "SET_FORM_ERROR",
        payload: "This username is already taken",
      });
      return;
    }

    if (emailExists) {
      dispatch({
        type: "SET_FORM_ERROR",
        payload: "This email is already registered",
      });
      return;
    }

    // Save user in local storage
    existingUsers.push(newUser);
    localStorage.setItem("loginDashboardUsers", JSON.stringify(existingUsers));

    login(newUser.email);
    // Set cookie

    router.replace("/loginDashboard/home");
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Name */}
      <div className="mb-4">
        <label htmlFor="loginDashboardRegisterUsername" className="sr-only">
          Username
        </label>
        <input
          id="loginDashboardRegisterUsername"
          type="text"
          placeholder="Username"
          value={state.username}
          onChange={(e) =>
            dispatch({ type: "SET_USERNAME", payload: e.target.value })
          }
          className="focus:shadow-primary-outline  text-sm leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding p-3 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-fuchsia-300 focus:outline-none"
        />

        <div className="text-xs text-red-400 mt-1 ml-1 h-1">
          {usernameErrors.length > 0 &&
            usernameErrors.map((err, i) => <span key={i}>{err}</span>)}
        </div>
      </div>

      {/* Email */}
      <div className="mb-4">
        <label htmlFor="loginDashboardRegisterEmail" className="sr-only">
          Email
        </label>
        <input
          id="loginDashboardRegisterEmail"
          type="email"
          placeholder="Email"
          value={state.email}
          onChange={(e) =>
            dispatch({ type: "SET_EMAIL", payload: e.target.value })
          }
          className="focus:shadow-primary-outline  text-sm leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding p-3 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-fuchsia-300 focus:outline-none"
        />
        <div className="text-xs text-red-400 mt-1 ml-1 h-1">
          {emailErrors.length > 0 &&
            emailErrors.map((err, i) => <span key={i}>{err}</span>)}
        </div>
      </div>

      {/* Password */}
      <div className="mb-4">
        <label htmlFor="loginDashboardRegisterPassword" className="sr-only">
          Password
        </label>
        <input
          id="loginDashboardRegisterPassword"
          type="password"
          placeholder="Password"
          value={state.password}
          autoComplete="off"
          onChange={(e) =>
            dispatch({ type: "SET_PASSWORD", payload: e.target.value })
          }
          className="focus:shadow-primary-outline  text-sm leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding p-3 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-fuchsia-300 focus:outline-none"
        />
        <div className="text-xs text-red-400 mt-1 ml-1 min-h-1 max-h-4">
          {passwordErrors.length > 0 &&
            passwordErrors.map((err, i) => <span key={i}>{err}</span>)}
        </div>
      </div>

      {/* Confirm Password */}
      <div className="mb-10">
        <label
          htmlFor="loginDashboardRegisterConfirmPassword"
          className="sr-only"
        >
          Confirm Password
        </label>
        <input
          id="loginDashboardRegisterConfirmPassword"
          type="password"
          placeholder="Confirm password"
          value={state.confirmPassword}
          autoComplete="off"
          onChange={(e) =>
            dispatch({ type: "SET_CONFIRM_PASSWORD", payload: e.target.value })
          }
          className="focus:shadow-primary-outline  text-sm leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding p-3 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-fuchsia-300 focus:outline-none"
        />
        <div className="text-xs text-red-400 mt-1 ml-1 h-1">
          {confirmPasswordErrors.length > 0 &&
            confirmPasswordErrors.map((err, i) => <span key={i}>{err}</span>)}
        </div>
      </div>

      {/* Terms and Submit */}
      <div className="flex flex-col mb-0.5 text-left min-h-6">
        <div className="flex ">
          <input
            id="loginDashboard_checkTerms"
            type="checkbox"
            checked={state.hasAcceptedTerms}
            onChange={(e) =>
              dispatch({
                type: "HAS_ACCEPTED_TERMS",
                payload: e.target.checked,
              })
            }
            className="w-5 h-5 mr-2 cursor-pointer appearance-none border border-slate-300 rounded-md checked:bg-[var(--dashboardBGSecondary)] checked:border-transparent transition-all"
          />
          <label
            htmlFor="loginDashboard_checkTerms"
            className="ml-1 text-sm text-slate-700 cursor-pointer"
          >
            I agree the{" "}
            <span className="font-bold text-slate-700">
              Terms and Conditions
            </span>
          </label>
        </div>

        <div className="text-xs text-red-400 mt-1 ml-1 h-1">
          {termsErrors.length > 0 &&
            termsErrors.map((err, i) => <span key={i}>{err}</span>)}
        </div>
      </div>
      <div className="text-center flex flex-col">
        <button
          type="submit"
          className="inline-block w-full px-16 py-3.5 mt-6 mb-0 font-bold leading-normal text-center text-white align-middle transition-all bg-[var(--dashboardBGSecondary)] border-0 rounded-lg cursor-pointer hover:-translate-y-px active:opacity-85 hover:shadow-xs text-sm ease-in tracking-tight-rem shadow-md bg-150 bg-x-25"
        >
          Sign Up
        </button>
        <div className="text-xs text-red-400 mt-1 ml-1 h-1">
          {state.formError}
        </div>
      </div>
    </form>
  );
};

export default LoginDashboardSignUpForm;
