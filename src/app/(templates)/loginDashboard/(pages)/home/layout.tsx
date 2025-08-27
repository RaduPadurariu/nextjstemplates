import React from "react";
import LoginDashboardLayoutWrapper from "../../components/LayoutWrapper/LoginDashboardLayoutWrapper";
import LoginDashboardFooter from "../../components/Footer/LoginDashboardFooter";
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
