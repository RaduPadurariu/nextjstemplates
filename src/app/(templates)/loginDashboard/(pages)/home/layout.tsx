import React from "react";
import LoginDashboardHeader from "../../components/DashboardHeader/LoginDashboardHeader";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <LoginDashboardHeader />
      {children}
    </div>
  );
}
