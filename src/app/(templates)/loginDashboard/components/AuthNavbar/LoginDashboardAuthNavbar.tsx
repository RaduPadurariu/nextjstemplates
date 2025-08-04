import Link from "next/link";
import React from "react";

const LoginDashboardAuthNavbar = () => {
  return (
    <div>
      <ul>
        <li>
          <Link href={"/loginDashboard/home"}>Guest</Link>
        </li>
        <li>
          <Link href={"/loginDashboard/auth"}>Sign In</Link>
        </li>
        <li>
          <Link href={"/loginDashboard/auth/signUp"}>Sign Up</Link>
        </li>
      </ul>
    </div>
  );
};

export default LoginDashboardAuthNavbar;
