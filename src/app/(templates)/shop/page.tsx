import ShopFeatures from "@/templates/Shop/components/home/Features/ShopFeatures";
import ShopHero from "@/templates/Shop/components/home/Hero/ShopHero";
import ShopHomeBlog from "@/templates/Shop/components/home/HomeBlog/ShopHomeBlog";
import ShopNewsletter from "@/templates/Shop/components/home/Newsletter/ShopNewsletter";
import ShopProducts from "@/templates/Shop/components/home/Products/ShopProducts";
import ShopWelcome from "@/templates/Shop/components/home/Wellcome/ShopWelcome";

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
