"use client";
import React, { useEffect, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

let debounceTimer: NodeJS.Timeout;

const ShopSearchForm = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [query, setQuery] = useState("");

  useEffect(() => {
    setQuery(searchParams.get("q") ?? "");
  }, [searchParams]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const q = query.trim();

    const params = new URLSearchParams(searchParams.toString());
    if (q) params.set("q", q);
    else params.delete("q");

    router.replace(`/shop/myProducts?${params.toString()}`);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const v = e.target.value;
    setQuery(v);

    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => {
      const params = new URLSearchParams(searchParams.toString());
      if (v.trim()) params.set("q", v.trim());
      else params.delete("q");

      router.replace(`${pathname}?${params.toString()}`);
    }, 400); // delay in ms
  };

  return (
    <div className="mb-2.5 lg:mb-0 order-3 lg:order-2 w-full lg:w-auto">
      <div className="overflow-hidden shop__header_searchBar">
        <form
          onSubmit={handleSubmit}
          className="inline-block relative w-full pr-10 rounded overflow-hidden bg-white shadow-[inset_0_0_39px_1px_#00000059]"
        >
          <input
            type="text"
            value={query}
            onChange={handleChange}
            className="border-0 h-[42px] w-full py-[11px] bg-transparent pl-3.5 text-[var(--shopTextPrimary)] text-sm"
          />
          <button
            type="submit"
            className="absolute right-0 top-0 bottom-0 text-2xl w-11 pt-0 text-[var(--shopTextSecondary)] transition-all duration-500 ease-in-out m-0 overflow-visible font-sans leading-[1.15] "
          >
            <i className="fa fa-search"></i>
          </button>
        </form>
      </div>
    </div>
  );
};

export default ShopSearchForm;
