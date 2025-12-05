import type { Metadata } from "next";

import "../styles/globals.css";
import "../styles/portal.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

export const metadata: Metadata = {
  title: "Next.js Templates",
  description:
    "A Collection of Next JS Templates using Next JS, Typescript, Zustand, Jest and Tailwind CSS",
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
      <body>{children}</body>
    </html>
  );
}
