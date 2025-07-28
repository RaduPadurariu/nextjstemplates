import type { Metadata } from "next";
import "../../../styles/shop.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import ShopHeader from "./components/Header/ShopHeader";
import ShopNavbar from "./components/Header/Navbar/ShopNavbar";
import ShopFooter from "./components/Footer/ShopFooter";
import { ShopContextProvider } from "./context/ShopContextProvider";

export const metadata: Metadata = {
  title: "Tools Shop",
  description:
    "A Tools Shop created with Next.js, typescript, jest and tailwind css. ",
  keywords: [
    "nextjs",
    "react",
    "typescript",
    "tailwind css",
    "jest",
    "radu padurariu",
    "portfolio",
  ],
  authors: [
    { name: "Radu Padurariu", url: "https://radupadurariu2025.netlify.app" },
  ],
  icons: {
    icon: "/images/shop/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ShopContextProvider>
      <div className="shopFamily">
        <ShopHeader />
        <ShopNavbar />
        {children}
        <ShopFooter />
      </div>
    </ShopContextProvider>
  );
}
