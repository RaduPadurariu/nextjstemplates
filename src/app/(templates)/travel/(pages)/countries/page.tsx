import TravelBreadcrumbs from "@/templates/Travel/components/common/Breadcrumbs/TravelBreadcrumbs";
import TravelCountriesStats from "@/templates/Travel/components/Countries/TravelCountriesStats";

const Page = async () => {
  const res = await fetch("https://www.apicountries.com/countries");
  const countries = await res.json();

  return (
    <div>
      <TravelBreadcrumbs />
      <TravelCountriesStats countries={countries} />
    </div>
  );
};

export default Page;
