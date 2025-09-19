import ShopFeatures from "@/templates/Shop/components/HomeSections/Features/ShopFeatures";
import ShopHero from "@/templates/Shop/components/HomeSections/Hero/ShopHero";
import ShopHomeBlog from "@/templates/Shop/components/HomeSections/HomeBlog/ShopHomeBlog";
import ShopNewsletter from "@/templates/Shop/components/HomeSections/Newsletter/ShopNewsletter";
import ShopProducts from "@/templates/Shop/components/HomeSections/Products/ShopProducts";
import ShopWelcome from "@/templates/Shop/components/HomeSections/Wellcome/ShopWelcome";

const page = () => {
  return (
    <div className="shop-container">
      <ShopHero />
      <ShopWelcome />
      <ShopProducts />
      <ShopFeatures />
      <ShopHomeBlog />
      <ShopNewsletter />
    </div>
  );
};

export default page;
