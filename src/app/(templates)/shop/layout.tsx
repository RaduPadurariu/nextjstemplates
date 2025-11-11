import type { Metadata } from "next";
import "../../../styles/shop.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { ShopContextProvider } from "@/templates/Shop/context/ShopContextProvider";
import ShopHeader from "@/templates/Shop/components/Header/ShopHeader";
import ShopNavbar from "@/templates/Shop/components/Header/Navbar/ShopNavbar";
import ShopFooter from "@/templates/Shop/components/Footer/ShopFooter";

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
    { name: "Radu Padurariu", url: "https://radupadurariu.netlify.app" },
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
