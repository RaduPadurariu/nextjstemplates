import React from "react";
import LoginDashboardAuthNavbar from "../../components/AuthNavbar/LoginDashboardAuthNavbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <LoginDashboardAuthNavbar />
      {children}
    </div>
  );
}
