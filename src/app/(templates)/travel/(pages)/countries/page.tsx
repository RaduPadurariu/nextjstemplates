import TravelBreadcrumbs from "@/templates/Travel/components/common/Breadcrumbs/TravelBreadcrumbs";
import TravelCountriesStats from "@/templates/Travel/components/Countries/TravelCountriesStats";
import React from "react";

const page = async () => {
  const res = await fetch("https://www.apicountries.com/countries");
  const countries = await res.json();
  console.log(countries);
  return (
    <div>
      <TravelBreadcrumbs />
      <TravelCountriesStats countries={countries} />
    </div>
  );
};

export default page;
