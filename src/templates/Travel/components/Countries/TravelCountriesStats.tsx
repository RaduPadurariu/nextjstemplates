"use client";

import React, { useState } from "react";
import TravelHeadTitle from "../HeadTitle/TravelHeadTitle";
import Image from "next/image";
import { TravelCountriesType } from "../../types/types";

const TravelCountriesStats = ({
  countries,
}: {
  countries: TravelCountriesType[];
}) => {
  const [search, setSearch] = useState("");
  const [region, setRegion] = useState("All");
  const [sort, setSort] = useState("");

  const filteredCountries = countries
    .filter((country) =>
      country.name.toLowerCase().includes(search.toLowerCase())
    )
    .filter((country) => region === "All" || country.region === region)
    .sort((a, b) => {
      switch (sort) {
        case "name-asc":
          return a.name.localeCompare(b.name);
        case "name-desc":
          return b.name.localeCompare(a.name);
        case "population-asc":
          return a.population - b.population;
        case "population-desc":
          return b.population - a.population;
        case "area-asc":
          return a.area - b.area;
        case "area-desc":
          return b.area - a.area;
        default:
          return 0;
      }
    });
  return (
    <section className="py-[120px] bg-[#f9f9ff]">
      <div className="travel-container">
        <TravelHeadTitle
          title="Countries Stats API"
          desc="Explore countries by population, region, and more."
        />
        <div className="flex flex-col md:flex-row gap-4 justify-between md:items-center bg-white shadow p-4 rounded-lg mb-8">
          <input
            type="text"
            placeholder="Search by name..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[var(--travelMainColor)] w-full"
          />
          <div className="flex gap-4">
            <select
              value={region}
              onChange={(e) => setRegion(e.target.value)}
              className="border border-gray-300 rounded-md px-3 py-2 w-full sm:w-[180px]"
            >
              <option value="All">All Regions</option>
              <option value="Africa">Africa</option>
              <option value="Americas">Americas</option>
              <option value="Asia">Asia</option>
              <option value="Europe">Europe</option>
              <option value="Oceania">Oceania</option>
            </select>

            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="border border-gray-300 rounded-md px-3 py-2 w-full sm:w-[180px]"
            >
              <option value="">Sort By</option>
              <option value="name-asc">Name ↑</option>
              <option value="name-desc">Name ↓</option>
              <option value="population-asc">Population ↑</option>
              <option value="population-desc">Population ↓</option>
              <option value="area-asc">Area ↑</option>
              <option value="area-desc">Area ↓</option>
            </select>
          </div>
        </div>
        <ul className="grid grid-cols-1 lg:grid-cols-3">
          {filteredCountries.map((item, index) => {
            return (
              <li key={index} className="px-[15px]">
                <div className="mt-[30px] shadow-[0_10px_30px_0_rgba(60,64,143,0.2)] transition-all duration-300 hover:shadow-[0_10px_30px_0_rgba(60,64,143,0.35)] mb-10 lg:mb-0">
                  <div className="overflow-hidden w-[300px] h-[200px] flex justify-center items-center mx-auto p-2">
                    <Image
                      src={item.flags.svg}
                      alt="Package Image"
                      width={340}
                      height={170}
                      className=""
                    />
                  </div>
                  <div className="p-5 bg-white">
                    <h4 className="text-lg font-semibold text-[var(--travelTextHeading)] mb-2.5">
                      {item.name}
                    </h4>
                    <p className="mb-4">{item.region}</p>
                    <ul className="mt-[30px]">
                      <li className="flex justify-between items-center border-b border-b-[#eee] mb-[15px] pb-[15px]">
                        <span className="text-sm">Area:</span>
                        <span className="text-base font-medium text-[var(--travelTextHeading)]">
                          {item.area}
                        </span>
                      </li>
                      <li className="flex justify-between items-center border-b border-b-[#eee] mb-[15px] pb-[15px]">
                        <span className="text-sm">Population:</span>
                        <span className="text-base font-medium text-[var(--travelTextHeading)]">
                          {item.population}
                        </span>
                      </li>
                      <li className="flex justify-between items-center border-b border-b-[#eee] mb-[15px] pb-[15px]">
                        <span className="text-sm">Capital:</span>
                        <span className="text-base font-medium text-[var(--travelTextHeading)]">
                          {item.capital}
                        </span>
                      </li>
                      <li className="flex justify-between items-center border-b border-b-[#eee] mb-[15px] pb-[15px]">
                        <span className="text-sm">Currency:</span>
                        <span className="text-base font-medium text-[var(--travelTextHeading)]">
                          {item.currencies?.[0]?.name ?? "N/A"}
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default TravelCountriesStats;
