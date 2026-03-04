import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import LoginDashboardProfileData from "./LoginDashboardProfileData";

const mockLogout = jest.fn();
const mockPush = jest.fn();

jest.mock("next/navigation", () => ({
  useRouter: () => ({
    push: mockPush,
  }),
}));

jest.mock("@/templates/LoginDashboard/store/useAuthStore", () => ({
  __esModule: true,
  default: () => ({
    isAuthenticated: true,
    email: "radu@example.com",
    user: {
      username: "Radu",
      email: "radu@example.com",
      password: "",
      firstName: "",
      lastName: "",
      address: "",
      city: "",
      country: "",
      postalCode: "",
      aboutMe: "",
    },
    logout: mockLogout,
  }),
}));

jest.mock("../../hooks/useProfileUpdate", () => ({
  useProfileUpdate: () => ({
    state: {
      firstName: "",
      lastName: "",
      address: "",
      city: "",
      country: "",
      postalCode: "",
      aboutMe: "",
    },
    dispatch: jest.fn(),
  }),
}));

describe("LoginDashboard - logout on user delete", () => {
  it("deletes user, logs out and redirects", async () => {
    localStorage.setItem(
      "loginDashboardUsers",
      JSON.stringify([
        { email: "radu@example.com" },
        { email: "test@example.com" },
      ]),
    );
    render(<LoginDashboardProfileData />);

    await userEvent.click(
      screen.getByRole("button", { name: /delete account/i }),
    );

    const storedUsers = JSON.parse(
      localStorage.getItem("loginDashboardUsers") || "[]",
    );
    expect(storedUsers).toEqual([{ email: "test@example.com" }]);
    expect(mockLogout).toHaveBeenCalled();
    expect(mockPush).toHaveBeenCalledWith("/loginDashboard/auth");
  });
});
