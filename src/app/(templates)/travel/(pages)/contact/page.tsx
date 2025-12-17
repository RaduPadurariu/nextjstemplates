import TravelBreadcrumbs from "@/templates/Travel/components/common/Breadcrumbs/TravelBreadcrumbs";
import TravelContact from "@/templates/Travel/components/Contact/TravelContact";
import TravelContactAbout from "@/templates/Travel/components/Contact/TravelContactAbout";
import React from "react";

const TravelContactPage = () => {
  return (
    <div>
      <TravelBreadcrumbs />
      <TravelContactAbout />
      <TravelContact />
    </div>
  );
};

export default TravelContactPage;
