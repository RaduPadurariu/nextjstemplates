import PortalDownload from "@/components/Download/PortalDownload";
import PortalFooter from "@/components/Footer/PortalFooter";
import PortalHero from "@/components/Hero/PortalHero";
import PortalNavbar from "@/components/Navbar/PortalNavbar";
import PortalTeams from "@/components/Teams/PortalTeams";
import PortalTechnologies from "@/components/Technologies/PortalTechnologies";
import PortalTemplates from "@/components/Templates/PortalTemplates";

export default function Home() {
  return (
    <>
      <PortalNavbar />
      <PortalHero />
      <PortalTemplates />
      <PortalTechnologies />
      <PortalDownload />
      <PortalTeams />
      <PortalFooter />
    </>
  );
}
