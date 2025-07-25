"use client";
import React, { useState } from "react";

const ShopSingleBlogForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setName("");
    setEmail("");
    setMessage("");
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };
  return (
    <form action="" onSubmit={handleSubmit}>
      <h3 className="text-5xl m-0 text-[var(--shopBGHeader)] mb-5">
        Leave a comment
      </h3>
      <div className="pb-0.5 flex flex-col md:flex-row items-center">
        <div className="mt-[15px] w-full md:w-1/3 pr-[15px]">
          <label
            htmlFor="shop_comment_name"
            className="text-sm text-[var(--shopBGHeader)] inline-block max-w-full"
          >
            Name
          </label>
          <input
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            id="shop_comment_name"
            className="border border-[var(--shopBorderPrimary)] text-sm text-[var(--shopBGHeader)] w-full block align-top py-1.5 px-2.5 leading-[1.43]"
          />
        </div>
        <div className="mt-[15px] w-full md:w-1/3 pr-[15px]">
          <label
            htmlFor="shop_comment_email"
            className="text-sm text-[var(--shopBGHeader)] inline-block max-w-full"
          >
            Email
          </label>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border border-[var(--shopBorderPrimary)] text-sm text-[var(--shopBGHeader)] w-full block align-top py-1.5 px-2.5 leading-[1.43]"
            id="shop_comment_email"
          />
        </div>
      </div>
      <div className="mt-[15px] ">
        <label
          htmlFor="shop_comment_area"
          className="text-sm text-[var(--shopBGHeader)] inline-block max-w-full"
        >
          Message
        </label>
        <textarea
          required
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          name=""
          id="shop_comment_area"
          className="border border-[var(--shopBorderPrimary)] text-sm text-[var(--shopBGHeader)] w-full h-[100px] block align-top py-1.5 px-2.5 leading-[1.43]"
        ></textarea>
      </div>
      <div className="mt-[15px]">
        <button
          type="submit"
          className="bg-[var(--shopTextSecondary)] text-white py-1.5 px-3 text-sm inline-block align-middle m-0 font-bold leading-[1.43] text-center whitespace-nowrap cursor-pointer uppercase hover:bg-[var(--shopBGHeader)] transition-all duration-300 ease-in-out"
        >
          Post comment
        </button>
      </div>
      {submitted && (
        <p className="text-sm mt-2 text-[var(--shopTextSecondary)]">
          Your comment was posted!
        </p>
      )}
    </form>
  );
};

export default ShopSingleBlogForm;
