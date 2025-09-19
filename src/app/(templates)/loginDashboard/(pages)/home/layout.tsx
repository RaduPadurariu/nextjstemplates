import LoginDashboardFooter from "@/templates/LoginDashboard/components/Footer/LoginDashboardFooter";
import LoginDashboardLayoutWrapper from "@/templates/LoginDashboard/components/LayoutWrapper/LoginDashboardLayoutWrapper";
import React from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <LoginDashboardLayoutWrapper>
      {children}
      <LoginDashboardFooter />
    </LoginDashboardLayoutWrapper>
  );
}
