import TravelBreadcrumbs from "@/templates/Travel/components/common/Breadcrumbs/TravelBreadcrumbs";
import TravelContactAbout from "@/templates/Travel/components/Contact/TravelContactAbout";
import TravelContactForm from "@/templates/Travel/components/Contact/TravelContactForm";
import React from "react";

const TravelContact = () => {
  return (
    <div>
      <TravelBreadcrumbs />
      <TravelContactAbout />
      <TravelContactForm />
    </div>
  );
};

export default TravelContact;
