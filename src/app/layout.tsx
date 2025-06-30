import type { Metadata } from "next";
import "../styles/globals.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

export const metadata: Metadata = {
  title: "Next JS Templates",
  description:
    "A Collection of Next JS Templates using Next JS, Typescript, Jest and Tailwind CSS",
  keywords: [
    "nextjs",
    "react",
    "typescript",
    "tailwind css",
    "jest",
    "radu padurariu",
    "ortfolio",
  ],
  authors: [
    { name: "Radu Padurariu", url: "https://radupadurariu.netlify.app" },
  ],
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="">{children}</body>
    </html>
  );
}
