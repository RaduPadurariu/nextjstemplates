import TravelBreadcrumbs from "@/templates/Travel/components/common/Breadcrumbs/TravelBreadcrumbs";
import TravelFindPackage from "@/templates/Travel/components/Home/TravelFindPackage";
import TravelHotDeals from "@/templates/Travel/components/Packages/TravelHotDeals";
import TravelOurPackages from "@/templates/Travel/components/Packages/TravelOurPackages";
import React from "react";

const TravelPackages = () => {
  return (
    <div>
      <TravelBreadcrumbs />
      <TravelHotDeals />
      <TravelOurPackages />
      <TravelFindPackage />
    </div>
  );
};

export default TravelPackages;
