"use client";

import React from "react";
import { useContact } from "../../hooks/useContact";
import {
  checkEmail,
  checkMessage,
  checkName,
  checkSubject,
  checkTerms,
} from "./ValidationErrors";

const FashionContactForm = () => {
  const { state, dispatch } = useContact();

  const nameErrors = state.isAfterSubmit ? checkName(state.name) : [];

  const emailErrors = state.isAfterSubmit ? checkEmail(state.email) : [];

  const subjectErrors = state.isAfterSubmit ? checkSubject(state.subject) : [];

  const messageErrors = state.isAfterSubmit ? checkMessage(state.message) : [];

  const termsErrors = state.isAfterSubmit
    ? checkTerms(state.hasAcceptedTerms)
    : [];

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    dispatch({ type: "IS_AFTER_SUBMIT", payload: true });

    const nameErrors = checkName(state.name);
    const emailErrors = checkEmail(state.email);
    const subjectErrors = checkSubject(state.subject);
    const messageErrors = checkMessage(state.message);
    const termsErrors = checkTerms(state.hasAcceptedTerms);

    if (
      nameErrors.length > 0 ||
      emailErrors.length > 0 ||
      subjectErrors.length > 0 ||
      messageErrors.length > 0 ||
      termsErrors.length > 0
    ) {
      return;
    }
    dispatch({ type: "SET_NAME", payload: "" });
    dispatch({ type: "SET_EMAIL", payload: "" });
    dispatch({ type: "SET_SUBJECT", payload: "" });
    dispatch({ type: "SET_MESSAGE", payload: "" });
    dispatch({ type: "HAS_ACCEPTED_TERMS", payload: false });
    dispatch({ type: "IS_AFTER_SUBMIT", payload: false });
    dispatch({ type: "SUBMIT_STATUS", payload: true });
    setTimeout(() => {
      dispatch({ type: "SUBMIT_STATUS", payload: false });
    }, 3000);
  };
  return (
    <form action="" className="flex flex-col" onSubmit={handleSubmit}>
      <h2 className="text-[var(--fashionTextHeading)] text-[28px] md:text-[45px] fashionHeadingFamily font-bold leading-[1.2em] pb-5">
        Contact Us
      </h2>
      <div className="flex flex-col sm:flex-row gap-6 pb-4">
        <div className="w-full sm:w-1/2">
          <label className="sr-only" htmlFor="fashionContactName">
            Name
          </label>
          <input
            type="text"
            id="fashionContactName"
            className="w-full border-b-2 border-b-[#eee] py-2.5 px-5.5 font-base leading-[1.2em] placeholder:text-[var(--fashionTextSecondary)] focus:outline-none"
            placeholder="Name*"
            value={state.name}
            onChange={(e) =>
              dispatch({ type: "SET_NAME", payload: e.target.value })
            }
          />
        </div>

        <div className="w-full sm:w-1/2">
          <label htmlFor="fashionContactEmail" className="sr-only">
            Email
          </label>
          <input
            id="fashionContactEmail"
            type="email"
            className="w-full border-b-2 border-b-[#eee] py-2.5 px-5.5 font-base leading-[1.2em] placeholder:text-[var(--fashionTextSecondary)] focus:outline-none"
            placeholder="E-mail*"
            value={state.email}
            onChange={(e) =>
              dispatch({ type: "SET_EMAIL", payload: e.target.value })
            }
          />
        </div>
      </div>
      <div className="w-full">
        <label htmlFor="fashionContactSubject" className="sr-only">
          Subject
        </label>
        <input
          id="fashionContactSubject"
          type="text"
          placeholder="Subject*"
          className="block mb-1 pb-4 w-full border-b-2 border-b-[#eee] pt-2.5 px-5.5 font-base leading-[1.2em] placeholder:text-[var(--fashionTextSecondary)] focus:outline-none"
          value={state.subject}
          onChange={(e) =>
            dispatch({ type: "SET_SUBJECT", payload: e.target.value })
          }
        />
      </div>

      <div className="w-full">
        <label htmlFor="fashionContactMessage" className="sr-only">
          Message
        </label>
        <textarea
          id="fashionContactMessage"
          placeholder="Message*"
          className="h-[86px] w-full mb-4 border-b-2 border-b-[#eee] pb-4 pt-4 px-5.5 font-base leading-[1.2em] placeholder:text-[var(--fashionTextSecondary)] focus:outline-none"
          value={state.message}
          onChange={(e) =>
            dispatch({ type: "SET_MESSAGE", payload: e.target.value })
          }
        ></textarea>
      </div>

      <div className="flex">
        <label className="flex items-center">
          <input
            type="checkbox"
            checked={state.hasAcceptedTerms}
            onChange={(e) =>
              dispatch({
                type: "HAS_ACCEPTED_TERMS",
                payload: e.target.checked,
              })
            }
          />
          <span className="pl-4 leading-[1.5em] text-[13px]">
            By using this form you agree with the storage and handling of your
            data by this website.
          </span>
        </label>
      </div>
      <button
        type="submit"
        className=" cursor-pointer mx-auto mt-6 md:mt-8 mb-4 bg-[#d8d8d8] font-semibold leading-[1.5em] py-2 px-[18px] text-xs sm:text-sm lg:text-lg"
      >
        submit
      </button>
      <div className="text-xs text-red-400 mb-1 ml-1 min-h-[1rem] flex flex-col">
        <span className="mr-1">
          {nameErrors.length > 0 &&
            nameErrors.map((err, i) => <span key={i}>{err}</span>)}
        </span>
        <span className="mr-1">
          {emailErrors.length > 0 &&
            emailErrors.map((err, i) => <span key={i}>{err}</span>)}
        </span>
        <span className="mr-1">
          {subjectErrors.length > 0 &&
            subjectErrors.map((err, i) => <span key={i}>{err}</span>)}
        </span>
        <span className="mr-1">
          {messageErrors.length > 0 &&
            messageErrors.map((err, i) => <span key={i}>{err}</span>)}
        </span>
        <span className="mr-1">
          {termsErrors.length > 0 &&
            termsErrors.map((err, i) => <span key={i}>{err}</span>)}
        </span>

        <span className="mr-1 text-green-700 text-center w-full">
          {state.submitStatus && "Message sent successfully"}
        </span>
      </div>
    </form>
  );
};

export default FashionContactForm;
