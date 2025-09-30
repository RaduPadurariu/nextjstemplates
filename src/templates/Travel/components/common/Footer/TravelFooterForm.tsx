"use client";

import React, { useEffect, useState } from "react";

export const TravelFooterForm = () => {
  const [email, setEmail] = useState("");
  const [emailSubmit, setEmailSubmit] = useState(false);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setEmail("");
    setEmailSubmit(true);
  };

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (emailSubmit) {
      timer = setTimeout(() => setEmailSubmit(false), 3000);
    }
    return () => clearTimeout(timer);
  }, [emailSubmit]);
  return (
    <form className="relative" onSubmit={handleSubmit}>
      <div className="flex flex-row">
        <input
          name="EMAIL"
          placeholder="Email Address"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          className="border border-[#333] text-[var(--travelTextPrimary)] pl-5 w-[80%] leading-[38px]"
        />
        <button
          type="submit"
          className="cursor-pointer bg-[var(--travelTextSecondary)] text-white border border-transparent w-[40px] h-[40px] flex items-center justify-center"
        >
          <i className="fas fa-paper-plane text-white text-lg"></i>
        </button>
      </div>
      <div className="mt-2 h-2">
        {emailSubmit && <span className="text-xs">Submitted!</span>}
      </div>
    </form>
  );
};
