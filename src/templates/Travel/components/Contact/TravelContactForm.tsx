"use client";
import React from "react";
import { useContact } from "../../hooks/useContact";
import {
  checkEmail,
  checkMessage,
  checkName,
  checkSubject,
} from "./ValidationErrors";

const TravelContactForm = () => {
  const { state, dispatch } = useContact();

  const nameErrors = state.isAfterSubmit ? checkName(state.name) : [];

  const emailErrors = state.isAfterSubmit ? checkEmail(state.email) : [];

  const subjectErrors = state.isAfterSubmit ? checkSubject(state.subject) : [];

  const messageErrors = state.isAfterSubmit ? checkMessage(state.message) : [];

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch({ type: "IS_AFTER_SUBMIT", payload: true });
    const nameErrors = checkName(state.name);
    const emailErrors = checkEmail(state.email);
    const subjectErrors = checkSubject(state.subject);
    const messageErrors = checkMessage(state.message);

    if (
      nameErrors.length > 0 ||
      emailErrors.length > 0 ||
      subjectErrors.length > 0 ||
      messageErrors.length > 0
    ) {
      return;
    }
    dispatch({ type: "SET_NAME", payload: "" });
    dispatch({ type: "SET_EMAIL", payload: "" });
    dispatch({ type: "SET_SUBJECT", payload: "" });
    dispatch({ type: "SET_MESSAGE", payload: "" });
    dispatch({ type: "IS_AFTER_SUBMIT", payload: false });
    dispatch({ type: "SUBMIT_STATUS", payload: true });

    setTimeout(() => {
      dispatch({ type: "SUBMIT_STATUS", payload: false });
    }, 3000);
  };
  return (
    <form className="" id="myForm" onSubmit={handleSubmit}>
      <div className="row">
        <div className="flex flex-col lg:flex-row">
          <div className="flex flex-col w-full lg:w-1/2 px-0 lg:px-[15px] mb-4">
            <div className="w-full">
              <label htmlFor="travelContactName" className="sr-only">
                Name
              </label>
              <input
                name="name"
                id="travelContactName"
                placeholder="Enter your name"
                className="w-full leading-[1.5] border border-[#ced4da] text-black bg-white p-[15px] text-[13px] mb-2 block"
                type="text"
                value={state.name}
                onChange={(e) =>
                  dispatch({ type: "SET_NAME", payload: e.target.value })
                }
              />
              <div className="text-xs text-red-400 mb-3 ml-1 min-h-[1rem]">
                {nameErrors.length > 0 &&
                  nameErrors.map((err, i) => <span key={i}>{err}</span>)}
              </div>
            </div>
            <div className="w-full">
              <label htmlFor="travelContactEmail" className="sr-only">
                Email
              </label>
              <input
                id="travelContactEmail"
                placeholder="Enter email address"
                className="w-full leading-[1.5] border border-[#ced4da] text-black bg-white p-[15px] text-[13px] mb-2 block"
                type="email"
                value={state.email}
                onChange={(e) =>
                  dispatch({ type: "SET_EMAIL", payload: e.target.value })
                }
              />
              <div className="text-xs text-red-400 mb-3 ml-1 min-h-[1rem]">
                {emailErrors.length > 0 &&
                  emailErrors.map((err, i) => <span key={i}>{err}</span>)}
              </div>
            </div>

            <div className="w-full">
              <label htmlFor="travelContactSubject" className="sr-only">
                Subject
              </label>
              <input
                name="subject"
                id="travelContactSubject"
                placeholder="Enter subject"
                className="w-full leading-[1.5] border border-[#ced4da] text-black bg-white p-[15px] text-[13px] mb-2 block"
                type="text"
                value={state.subject}
                onChange={(e) =>
                  dispatch({ type: "SET_SUBJECT", payload: e.target.value })
                }
              />
              <div className="text-xs text-red-400 mb-3 ml-1 min-h-[1rem]">
                {subjectErrors.length > 0 &&
                  subjectErrors.map((err, i) => <span key={i}>{err}</span>)}
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2 px-0 lg:px-[15px] mb-9">
            <div className="w-full h-full">
              <label htmlFor="travelContactMessage" className="sr-only">
                Message
              </label>
              <textarea
                id="travelContactMessage"
                className="w-full  leading-[1.5] border border-[#ced4da] text-black bg-white p-[15px] text-[13px] mb-2 block min-h-[200px] lg:min-h-auto h-full"
                name="message"
                placeholder="Enter Message"
                value={state.message}
                onChange={(e) =>
                  dispatch({ type: "SET_MESSAGE", payload: e.target.value })
                }
              ></textarea>
              <div className="text-xs text-red-400 mb-1 ml-1 min-h-[1rem]">
                {messageErrors.length > 0 &&
                  messageErrors.map((err, i) => <span key={i}>{err}</span>)}
              </div>
            </div>
          </div>
        </div>

        <div className="w-full flex flex-col justify-end items-end px-0 lg:px-[15px]">
          {/* <div className="alert-msg"></div> */}
          <button
            type="submit"
            className="uppercase text-sm leading-[40px] mb-2 px-[30px] font-medium text-white bg-[var(--travelTextSecondary)] border border-[bg-[var(--travelTextSecondary)]] cursor-pointer hover:text-[var(--travelTextSecondary)] hover:bg-white transition-all duration-300 ease-in-out"
          >
            Send Message
          </button>
          <div className="text-xs text-green-800 mt-1 ml-1 min-h-[1rem]">
            {state.submitStatus && "Message sent successfully."}
          </div>
        </div>
      </div>
    </form>
  );
};

export default TravelContactForm;
