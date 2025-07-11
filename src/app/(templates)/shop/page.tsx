import ShopFeatures from "./components/HomeSections/Features/ShopFeatures";

import ShopHero from "./components/HomeSections/Hero/ShopHero";
import ShopHomeBlog from "./components/HomeSections/HomeBlog/ShopHomeBlog";

import ShopNewsletter from "./components/HomeSections/Newsletter/ShopNewsletter";
import ShopProducts from "./components/HomeSections/Products/ShopProducts";
import ShopWelcome from "./components/HomeSections/Wellcome/ShopWelcome";

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
