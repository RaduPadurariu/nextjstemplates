"use client";

import React, { useEffect, useState } from "react";

import { useProfileUpdate } from "../../hooks/useProfileUpdate";
import { useRouter } from "next/navigation";
import useAuthStore from "@/templates/LoginDashboard/store/useAuthStore";
import LoginDashboardProfileDataForm from "./LoginDashboardProfileDataForm";

const LoginDashboardProfileData = () => {
  const { isAuthenticated, user, logout, email } = useAuthStore();
  const { state, dispatch } = useProfileUpdate();
  const [isSaved, setIsSaved] = useState(false);

  const router = useRouter();

  useEffect(() => {
    if (user) {
      dispatch({ type: "SET_FIRST_NAME", payload: user.firstName || "" });
      dispatch({ type: "SET_LAST_NAME", payload: user.lastName || "" });
      dispatch({ type: "SET_ADDRESS", payload: user.address || "" });
      dispatch({ type: "SET_CITY", payload: user.city || "" });
      dispatch({ type: "SET_COUNTRY", payload: user.country || "" });
      dispatch({ type: "SET_POSTAL_CODE", payload: user.postalCode || "" });
      dispatch({ type: "SET_ABOUT_ME", payload: user.aboutMe || "" });

      const existingUsers = JSON.parse(
        localStorage.getItem("loginDashboardUsers") || "[]",
      );
      const updatedUsers = existingUsers.map((u: { email: string }) =>
        u.email === email ? { ...u, ...user } : u,
      );
      localStorage.setItem("loginDashboardUsers", JSON.stringify(updatedUsers));
    }
  }, [user, email, dispatch]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const currentUser = useAuthStore.getState().user;

    const updatedUser = {
      ...currentUser,
      firstName: state.firstName,
      lastName: state.lastName,
      address: state.address,
      city: state.city,
      country: state.country,
      postalCode: state.postalCode,
      aboutMe: state.aboutMe,
    };

    useAuthStore.setState({
      ...useAuthStore.getState(),
      user: updatedUser,
    });

    setIsSaved(true);

    setTimeout(() => setIsSaved(false), 3000);
  };

  const handleDelete = () => {
    const existingUsers = JSON.parse(
      localStorage.getItem("loginDashboardUsers") || "[]",
    );

    const updatedUsers = existingUsers.filter(
      (u: { email: string }) => u.email !== email,
    );

    localStorage.setItem("loginDashboardUsers", JSON.stringify(updatedUsers));

    logout(); // scoate din cookie + store
    router.push("/loginDashboard/auth");
  };
  return (
    <LoginDashboardProfileDataForm
      isAuthenticated={isAuthenticated}
      state={state}
      dispatch={dispatch}
      user={user}
      email={email}
      isSaved={isSaved}
      onSubmit={handleSubmit}
      onDelete={handleDelete}
    />
  );
};

export default LoginDashboardProfileData;
