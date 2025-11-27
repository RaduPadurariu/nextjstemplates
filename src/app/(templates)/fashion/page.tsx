import FashionHomeArticles from "@/templates/Fashion/components/Home/FashionHomeArticles";
import FashionHomeCarousel from "@/templates/Fashion/components/Home/FashionHomeCarousel";
import FashionHomeChooseStyle from "@/templates/Fashion/components/Home/FashionHomeChooseStyle";
import FashionHomeLingerie from "@/templates/Fashion/components/Home/FashionHomeLingerie";
import FashionHomeMustHave from "@/templates/Fashion/components/Home/FashionHomeMustHave";
import FashionHomeRetro from "@/templates/Fashion/components/Home/FashionHomeRetro";
import FashionHomeShipping from "@/templates/Fashion/components/Home/FashionHomeShipping";
import FashionHomeSocial from "@/templates/Fashion/components/Home/FashionHomeSocial";

const page = () => {
  return (
    <main>
      <FashionHomeCarousel />
      <FashionHomeShipping />
      <FashionHomeMustHave />
      <FashionHomeRetro />
      <FashionHomeArticles />
      <FashionHomeChooseStyle />
      <FashionHomeLingerie />
      <FashionHomeSocial />
    </main>
  );
};

export default page;
