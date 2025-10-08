import TravelFindPackage from "@/templates/Travel/components/Home/TravelFindPackage";
import TravelHero from "@/templates/Travel/components/Home/TravelHero/TravelHero";
import TravelLatestBlog from "@/templates/Travel/components/Home/TravelLatestBlog";
import TravelOtherIssues from "@/templates/Travel/components/Home/TravelOtherIssues";
import TravelPopularDestinations from "@/templates/Travel/components/Home/TravelPopularDestinations";
import TravelPrices from "@/templates/Travel/components/Home/TravelPrices";
import TravelTestimonials from "@/templates/Travel/components/Home/TravelTestimonials";

const page = () => {
  return (
    <div>
      <TravelHero />
      <TravelPopularDestinations />
      <TravelPrices />
      <TravelOtherIssues />
      <TravelTestimonials />
      <TravelFindPackage />
      <TravelLatestBlog />
    </div>
  );
};

export default page;
