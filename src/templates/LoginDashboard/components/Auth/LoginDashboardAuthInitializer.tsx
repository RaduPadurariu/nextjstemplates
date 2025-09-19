"use client";
import useAuthStore from "@/templates/LoginDashboard/store/useAuthStore";
import { useEffect } from "react";

interface DashboardUser {
  fullName: string;
  email: string;
  password: string;
  userName: string;
  firstName: string;
  lastName: string;
  address: string;
  city: string;
  country: string;
  postalCode: string;
  aboutMe: string;
}

const LoginDashboardAuthInitializer = () => {
  useEffect(() => {
    const cookies = document.cookie.split("; ");
    const loggedInEmail = cookies
      .find((row) => row.startsWith("loginDashboardEmail="))
      ?.split("=")[1];

    if (loggedInEmail) {
      const users = JSON.parse(
        localStorage.getItem("loginDashboardUsers") || "[]"
      );
      const foundUser = users.find(
        (u: DashboardUser) => u.email === loggedInEmail
      );

      if (foundUser) {
        useAuthStore.setState({
          email: loggedInEmail,
          isAuthenticated: true,
          isInitialized: true,
          user: foundUser,
        });
        return;
      }
    }
    useAuthStore.setState({
      isInitialized: true,
    });
  }, []);

  return null;
};

export default LoginDashboardAuthInitializer;
