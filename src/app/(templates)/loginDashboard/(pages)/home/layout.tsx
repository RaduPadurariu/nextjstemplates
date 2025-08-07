import React from "react";
import LoginDashboardHeader from "../../components/DashboardHeader/LoginDashboardHeader";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="relative h-full max-h-screen transition-all duration-200 ease-in-out xl:ml-68 rounded-xl">
      <LoginDashboardHeader />
      {children}
    </div>
  );
}
