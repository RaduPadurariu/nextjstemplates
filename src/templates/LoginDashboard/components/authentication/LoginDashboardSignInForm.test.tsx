import { fireEvent, render, screen } from "@testing-library/react";
import LoginDashboardSignInForm from "./LoginDashboardSignInForm";
import userEvent from "@testing-library/user-event";

const mockReplace = jest.fn();
const mockLogin = jest.fn();

jest.mock("next/navigation", () => ({
  useRouter: () => ({
    replace: mockReplace,
  }),
}));

jest.mock("@/templates/LoginDashboard/store/useAuthStore", () => ({
  __esModule: true,
  default: () => ({
    login: mockLogin,
  }),
}));

describe("testing Login form", () => {
  beforeEach(() => {
    localStorage.clear();
    jest.clearAllMocks();
  });

  it("render all form components", () => {
    render(<LoginDashboardSignInForm />);

    expect(screen.getByLabelText(/Email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Password/i)).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /sign in/i }),
    ).toBeInTheDocument();
  });

  it("shows validation errors when submit with empty fields", () => {
    render(<LoginDashboardSignInForm />);
    fireEvent.click(screen.getByRole("button", { name: /Sign in/i }));
    expect(screen.getByText(/Email is required/i)).toBeInTheDocument();
    expect(screen.getByText(/Password is required/i)).toBeInTheDocument();
  });

  it("shows validation error when email is invalid", async () => {
    localStorage.setItem(
      "loginDashboardUsers",
      JSON.stringify([{ email: "radu@example.com", password: "Password1" }]),
    );

    render(<LoginDashboardSignInForm />);

    await userEvent.type(screen.getByLabelText(/email/i), "ionut@example.com");
    await userEvent.type(screen.getByLabelText(/password/i), "Password1");
    await userEvent.click(screen.getByRole("button", { name: /sign in/i }));

    expect(screen.getByText(/Invalid email or password/i)).toBeInTheDocument();
  });

  it("shows validation error when password is invalid", async () => {
    localStorage.setItem(
      "loginDashboardUsers",
      JSON.stringify([{ email: "radu@example.com", password: "Password1" }]),
    );

    render(<LoginDashboardSignInForm />);

    await userEvent.type(screen.getByLabelText(/email/i), "radu@example.com");
    await userEvent.type(screen.getByLabelText(/password/i), "Password2");
    await userEvent.click(screen.getByRole("button", { name: /sign in/i }));

    expect(screen.getByText(/Invalid email or password/i)).toBeInTheDocument();
  });

  it("submits successfully and calls login + redirect", async () => {
    localStorage.setItem(
      "loginDashboardUsers",
      JSON.stringify([{ email: "radu@example.com", password: "Password1" }]),
    );

    render(<LoginDashboardSignInForm />);

    await userEvent.type(screen.getByLabelText(/email/i), "radu@example.com");
    await userEvent.type(screen.getByLabelText(/^password$/i), "Password1");
    await userEvent.click(screen.getByRole("button", { name: /sign in/i }));

    expect(mockLogin).toHaveBeenCalledWith("radu@example.com");
    expect(mockReplace).toHaveBeenCalledWith("/loginDashboard/home");
  });
});
