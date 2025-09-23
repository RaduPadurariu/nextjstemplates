import type { Metadata } from "next";
import "../../../styles/travel.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import TravelHeader from "@/templates/Travel/components/common/Header/TravelHeader";
import TravelFooter from "@/templates/Travel/components/common/Footer/TravelFooter";

export const metadata: Metadata = {
  title: "Travel",
  description:
    "A traveling website created with Next.js, typescript, jest and tailwind css. ",
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
    icon: "/images/travel/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="travelFamily">
      <TravelHeader />
      {children}
      <TravelFooter />
    </div>
  );
}
