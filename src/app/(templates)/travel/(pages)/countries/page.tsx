import TravelBreadcrumbs from "@/templates/Travel/components/common/Breadcrumbs/TravelBreadcrumbs";
import { getCountries } from "@/templates/Travel/components/Countries/getCountries";
import TravelCountriesStats from "@/templates/Travel/components/Countries/TravelCountriesStats";

const Page = async () => {
  const countries = await getCountries();

  return (
    <div>
      <TravelBreadcrumbs />
      <TravelCountriesStats countries={countries} />
    </div>
  );
};

export default Page;
