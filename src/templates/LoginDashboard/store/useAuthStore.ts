import { create } from "zustand";

const guestUser = {
  email: "",
  password: "",
  username: "jesse.lucky",
  firstName: "Jesse",
  lastName: "Lucky",
  address: "Bld Mihail Kogalniceanu, nr. 8 Bl 1, Sc 1, Ap 09",
  city: "New York",
  country: "United States",
  postalCode: "437300",
  aboutMe: "Browsing in guest mode. Sign in to edit your profile data.",
};

export interface DashboardUser {
  email: string;
  password: string;
  username: string;
  firstName: string;
  lastName: string;
  address: string;
  city: string;
  country: string;
  postalCode: string;
  aboutMe: string;
}

interface AuthState {
  email: string | null;
  isAuthenticated: boolean;
  login: (email: string) => void;
  logout: () => void;
  isInitialized: boolean;
  user: DashboardUser;
}

const useAuthStore = create<AuthState>((set) => ({
  email: null,
  isAuthenticated: false,
  isInitialized: false,
  user: guestUser,

  login: (value) => {
    const users = JSON.parse(
      localStorage.getItem("loginDashboardUsers") || "[]",
    );
    const foundUser = users.find((u: DashboardUser) => u.email === value);
    if (!foundUser) return;

    document.cookie = `loginDashboardEmail=${value}; path=/; max-age=${
      60 * 60 * 24 * 30
    }`;
    set({
      email: value,
      isAuthenticated: true,
      isInitialized: true,
      user: foundUser,
    });
  },

  logout: () => {
    document.cookie =
      "loginDashboardEmail=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;";

    set({
      email: null,
      isAuthenticated: false,
      isInitialized: true,
      user: guestUser,
    });
  },
}));

export default useAuthStore;
