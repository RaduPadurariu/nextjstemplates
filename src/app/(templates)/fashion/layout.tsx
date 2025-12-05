import type { Metadata } from "next";
import "../../../styles/fashion.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import FashionHeader from "@/templates/Fashion/components/common/Header/FashionHeader";
import FashionFooter from "@/templates/Fashion/components/common/Footer/FashionFooter";

export const metadata: Metadata = {
  title: "Fashion",
  description:
    "A fashion website created with Next.js, typescript, jest and tailwind css. ",
  authors: [
    { name: "Radu Padurariu", url: "https://radupadurariu.netlify.app" },
  ],
  icons: {
    icon: "/images/fashion/lingerie.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="fashionFamily">
      <FashionHeader />
      {children}
      <FashionFooter />
    </div>
  );
}
