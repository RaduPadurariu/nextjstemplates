"use client";
import React from "react";
import { useContact } from "../../hooks/useContact";
import { checkEmail, checkMessage, checkName } from "./ValidationErrors";

const ShopContactForm = () => {
  const { state, dispatch } = useContact();

  const nameErrors = state.isAfterSubmit ? checkName(state.name) : [];

  const emailErrors = state.isAfterSubmit ? checkEmail(state.email) : [];

  const messageErrors = state.isAfterSubmit ? checkMessage(state.message) : [];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    dispatch({ type: "IS_AFTER_SUBMIT", payload: true });

    const nameErrors = checkName(state.name);
    const emailErrors = checkEmail(state.email);
    const messageErrors = checkMessage(state.message);

    if (
      nameErrors.length > 0 ||
      emailErrors.length > 0 ||
      messageErrors.length > 0
    ) {
      return;
    } else {
      dispatch({ type: "SET_NAME", payload: "" });
      dispatch({ type: "SET_EMAIL", payload: "" });
      dispatch({ type: "SET_MESSAGE", payload: "" });
      dispatch({ type: "IS_AFTER_SUBMIT", payload: false });
      dispatch({ type: "SUBMIT_STATUS", payload: true });

      setTimeout(() => {
        dispatch({ type: "SUBMIT_STATUS", payload: false });
      }, 3000);
    }
  };

  return (
    <form action="" className="mt-[37px] px-4 pb-[5px]" onSubmit={handleSubmit}>
      <div className="mt-1">
        <input
          type="text"
          placeholder="Name"
          value={state.name}
          onChange={(e) =>
            dispatch({ type: "SET_NAME", payload: e.target.value })
          }
          required
          className="h-[47px] placeholder:text-[var(--shopBGSecondary)] bg-white border border-[var(--shopBorderPrimary)] text-sm text-[var(--shopBGSecondary)] w-full block align-top py-1.5 px-5 leading-[1.43]"
        />
        <div className="text-xs text-red-400 mt-1 ml-1 min-h-[1rem]">
          {nameErrors.length > 0 &&
            nameErrors.map((err, i) => <span key={i}>{err}</span>)}
        </div>
      </div>
      <div className="mt-1">
        <input
          type="email"
          required
          value={state.email}
          placeholder="Email"
          onChange={(e) =>
            dispatch({ type: "SET_EMAIL", payload: e.target.value })
          }
          className="h-[47px] placeholder:text-[var(--shopBGSecondary)] bg-white border border-[var(--shopBorderPrimary)] text-sm text-[var(--shopBGSecondary)] w-full block align-top py-1.5 px-5 leading-[1.43]"
        />
        <div className="text-xs text-red-400 mt-1 ml-1 min-h-[1rem]">
          {emailErrors.length > 0 &&
            emailErrors.map((err, i) => <span key={i}>{err}</span>)}
        </div>
      </div>
      <div className="mt-1">
        <textarea
          name=""
          id=""
          value={state.message}
          placeholder="Message"
          required
          onChange={(e) =>
            dispatch({ type: "SET_MESSAGE", payload: e.target.value })
          }
          className="placeholder:text-[var(--shopBGSecondary)] min-w-full max-w-full min-h-[100px] bg-white border border-[var(--shopBorderPrimary)] text-sm text-[var(--shopBGSecondary)] w-full block align-top py-[15px] px-5 h-[122px] leading-[1.43]"
        ></textarea>
        <div className="text-xs text-red-400 mt-1 ml-1 min-h-[1rem]">
          {messageErrors.length > 0 &&
            messageErrors.map((err, i) => <span key={i}>{err}</span>)}
        </div>
      </div>
      <div className="">
        <button
          type="submit"
          className="py-2.5 px-[17px] tracking-[-0.06em] text-lg mb-[11px] mt-[18px] bg-[var(--shopTextSecondary)] border border-[var(--shopTextSecondary)] text-white uppercase inline-block align-middle font-bold m-0 leading-[1.43] cursor-pointer hover:bg-[var(--shopBGHeader)] transition-all rounded duration-300 ease-in-out"
        >
          Submit
        </button>
        <div className="text-xs text-green-800 mt-1 ml-1 min-h-[1rem]">
          {state.submitStatus && "Message sent successfully."}
        </div>
      </div>
    </form>
  );
};

export default ShopContactForm;
