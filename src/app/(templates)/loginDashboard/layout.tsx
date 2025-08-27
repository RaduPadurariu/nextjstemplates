import type { Metadata } from "next";
import "../../../styles/loginDashboard.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import LoginDashboardAuthInitializer from "./components/Auth/LoginDashboardAuthInitializer";

export const metadata: Metadata = {
  title: "Login Dashboard",
  description:
    "A Login with Dashboard created with Next.js, typescript, jest and tailwind css. ",
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
    icon: "/images/loginDashboard/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-[100vh] loginDashboardFamilyFont text-base antialiased font-normal leading-default text-[var(--dashboardTextPrimary)] bg-[var(--dashboardBGPrimary)] dark:bg-[var(--dashboardBGDarkMode)] ">
      <LoginDashboardAuthInitializer />
      {children}
    </div>
  );
}
