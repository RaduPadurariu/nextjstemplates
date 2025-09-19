"use client";
import React, { useMemo } from "react";
import { useSignUp } from "../../hooks/useSignUp";
import {
  checkEmailSignUp,
  checkNameSignUp,
  checkPasswordSignUp,
  checkTermsSignUp,
} from "./ErrorsValidators";
import { useRouter } from "next/navigation";
import useAuthStore from "@/templates/LoginDashboard/store/useAuthStore";

const LoginDashboardSignUpForm = () => {
  const router = useRouter();
  const { state, dispatch } = useSignUp();
  const { login } = useAuthStore();

  const nameErrors = useMemo(() => {
    return state.isAfterSubmit ? checkNameSignUp(state.name) : [];
  }, [state.isAfterSubmit, state.name]);

  const emailErrors = useMemo(() => {
    return state.isAfterSubmit ? checkEmailSignUp(state.email) : [];
  }, [state.isAfterSubmit, state.email]);

  const passwordErrors = useMemo(() => {
    return state.isAfterSubmit ? checkPasswordSignUp(state.password) : [];
  }, [state.isAfterSubmit, state.password]);

  const termsErrors = useMemo(() => {
    return state.isAfterSubmit ? checkTermsSignUp(state.terms) : [];
  }, [state.isAfterSubmit, state.terms]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch({ type: "IS_AFTER_SUBMIT", payload: true });

    const nameErrors = checkNameSignUp(state.name);
    const emailErrors = checkEmailSignUp(state.email);
    const passwordErrors = checkPasswordSignUp(state.password);
    const termsErrors = checkTermsSignUp(state.terms);

    if (
      nameErrors.length > 0 ||
      emailErrors.length > 0 ||
      passwordErrors.length > 0 ||
      termsErrors.length > 0
    ) {
      return;
    }

    const newUser = {
      fullName: state.name,
      email: state.email,
      password: state.password,
      userName: "",
      firstName: "",
      lastName: "",
      address: "",
      city: "",
      country: "",
      postalCode: "",
      aboutMe: "",
    };

    const existingUsers = JSON.parse(
      localStorage.getItem("loginDashboardUsers") || "[]"
    );

    const userExists = existingUsers.some(
      (user: { email: string }) => user.email === newUser.email
    );

    if (userExists) {
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

    router.push("/loginDashboard/home");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Name"
          required
          value={state.name}
          onChange={(e) =>
            dispatch({ type: "SET_NAME", payload: e.target.value })
          }
          className="focus:shadow-primary-outline  text-sm leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding p-3 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-fuchsia-300 focus:outline-none"
        />

        <div className="text-xs text-red-400 mt-1 ml-1 h-1">
          {nameErrors.length > 0 &&
            nameErrors.map((err, i) => <span key={i}>{err}</span>)}
        </div>
      </div>
      <div className="mb-4">
        <input
          type="email"
          placeholder="Email"
          value={state.email}
          onChange={(e) =>
            dispatch({ type: "SET_EMAIL", payload: e.target.value })
          }
          required
          className="focus:shadow-primary-outline  text-sm leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding p-3 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-fuchsia-300 focus:outline-none"
        />
        <div className="text-xs text-red-400 mt-1 ml-1 h-1">
          {emailErrors.length > 0 &&
            emailErrors.map((err, i) => <span key={i}>{err}</span>)}
        </div>
      </div>
      <div className="mb-10">
        <input
          type="password"
          placeholder="Password"
          value={state.password}
          onChange={(e) =>
            dispatch({ type: "SET_PASSWORD", payload: e.target.value })
          }
          required
          className="focus:shadow-primary-outline  text-sm leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding p-3 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-fuchsia-300 focus:outline-none"
        />
        <div className="text-xs text-red-400 mt-1 ml-1 h-1">
          {passwordErrors.length > 0 &&
            passwordErrors.map((err, i) => <span key={i}>{err}</span>)}
        </div>
      </div>
      <div className="flex flex-col mb-0.5 text-left min-h-6">
        <div className="flex ">
          <input
            id="loginDashboard_checkTerms"
            type="checkbox"
            checked={state.terms}
            onChange={(e) =>
              dispatch({ type: "SET_TERMS", payload: e.target.checked })
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
          {state.formError && state.formError}
        </div>
      </div>
    </form>
  );
};

export default LoginDashboardSignUpForm;
