import Link from "next/link";
import React from "react";

const LoginDashboardNavbar = () => {
  return (
    <div>
      <ul>
        <li>
          <Link href={"/loginDashboard/home"}> Dashboard</Link>
        </li>
        <li>
          <Link href={"/loginDashboard/home/tables"}> Tables</Link>
        </li>
        <li>
          <Link href={"/loginDashboard/home/billing"}> Billing</Link>
        </li>
        <li>
          <Link href={"/loginDashboard/home/profile"}> Profile</Link>
        </li>
        <li>
          <Link href={"/loginDashboard/auth"}> Sign In</Link>
        </li>
        <li>
          <Link href={"/loginDashboard/auth/signUp"}> Sign Up</Link>
        </li>
      </ul>
    </div>
  );
};

export default LoginDashboardNavbar;
