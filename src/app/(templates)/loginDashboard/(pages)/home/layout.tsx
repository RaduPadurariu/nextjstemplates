import React from "react";
import LoginDashboardLayoutWrapper from "../../components/LayoutWrapper/LoginDashboardLayoutWrapper";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <LoginDashboardLayoutWrapper>{children}</LoginDashboardLayoutWrapper>;
}
