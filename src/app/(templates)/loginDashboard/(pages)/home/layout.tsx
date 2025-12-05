import LoginDashboardFooter from "@/templates/LoginDashboard/components/layout/Footer/LoginDashboardFooter";
import LoginDashboardLayoutWrapper from "@/templates/LoginDashboard/components/layout/LayoutWrapper/LoginDashboardLayoutWrapper";
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
