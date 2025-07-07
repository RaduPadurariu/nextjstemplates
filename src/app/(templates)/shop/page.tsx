import ShopFeatures from "./components/Features/ShopFeatures";
import ShopFooter from "./components/Footer/ShopFooter";
import ShopHeader from "./components/Header/ShopHeader";
import ShopHero from "./components/Hero/ShopHero";
import ShopHomeBlog from "./components/HomeBlog/ShopHomeBlog";
import ShopNavbar from "./components/Navbar/ShopNavbar";
import ShopNewsletter from "./components/Newsletter/ShopNewsletter";
import ShopProducts from "./components/Products/ShopProducts";
import ShopWelcome from "./components/Welcome/ShopWelcome";

const page = () => {
  return (
    <div>
      <p>
        template to use:{" "}
        <a
          href="https://theme157-tools.myshopify.com/"
          target="_blank"
          className="text-blue-600 underline"
        >
          Tools Shop
        </a>
      </p>

      <ShopHeader />
      <ShopNavbar />
      <ShopHero />
      <ShopWelcome />
      <ShopProducts />
      <ShopFeatures />
      <ShopHomeBlog />
      <ShopNewsletter />
      <ShopFooter />
    </div>
  );
};

export default page;
