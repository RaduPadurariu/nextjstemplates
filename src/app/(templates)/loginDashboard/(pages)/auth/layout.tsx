import LoginDashboardAuthNavbar from "@/templates/LoginDashboard/components/AuthNavbar/LoginDashboardAuthNavbar";
import React from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="m-0 antialiased font-normal bg-white text-start text-base leading-default text-slate-500">
      <main className="mt-0 transition-all duration-200 ease-in-out">
        <section>
          <LoginDashboardAuthNavbar />
          {children}
        </section>
      </main>
    </div>
  );
}
