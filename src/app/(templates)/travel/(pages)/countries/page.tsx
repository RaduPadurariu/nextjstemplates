import TravelBreadcrumbs from "@/templates/Travel/components/common/Breadcrumbs/TravelBreadcrumbs";
import TravelCountriesStats from "@/templates/Travel/components/Countries/TravelCountriesStats";
import React from "react";

const page = async () => {
  const res = await fetch(
    "https://restcountries.com/v3.1/all?fields=name,flags,region,population,area"
  );
  const countries = await res.json();
  return (
    <div>
      <TravelBreadcrumbs />
      <TravelCountriesStats countries={countries} />
    </div>
  );
};

export default page;
