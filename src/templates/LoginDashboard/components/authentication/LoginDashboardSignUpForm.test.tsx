import { fireEvent, render, screen } from "@testing-library/react";
import LoginDashboardSignUpForm from "./LoginDashboardSignUpForm";
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

describe("testing Sign up form", () => {
  beforeEach(() => {
    localStorage.clear();
    jest.clearAllMocks();
  });

  it("renders all form components", () => {
    render(<LoginDashboardSignUpForm />);

    expect(screen.getByLabelText(/Username/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/^Password$/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Confirm Password/i)).toBeInTheDocument();
    expect(screen.getByRole("checkbox")).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /sign up/i }),
    ).toBeInTheDocument();
  });

  it("shows validation errors when submit with empty fields", () => {
    render(<LoginDashboardSignUpForm />);

    fireEvent.click(screen.getByRole("button", { name: /sign up/i }));

    expect(screen.getByText(/Username is required/i)).toBeInTheDocument();
    expect(screen.getByText(/Email is required/i)).toBeInTheDocument();
    expect(
      screen.getByText(
        /At least 8 characters, with uppercase, lowercase and a number/i,
      ),
    ).toBeInTheDocument();
    expect(
      screen.getByText(/You must agree to the terms and conditions/i),
    ).toBeInTheDocument();
  });

  it("shows validation error on email invalid", async () => {
    render(<LoginDashboardSignUpForm />);

    await userEvent.type(screen.getByLabelText(/email/i), "invalid@email");
    await userEvent.click(screen.getByRole("button", { name: /sign up/i }));

    expect(
      screen.getByText(/please enter a valid email address/i),
    ).toBeInTheDocument();
  });

  it("shows validation error when passwords do not match", async () => {
    render(<LoginDashboardSignUpForm />);

    await userEvent.type(screen.getByLabelText(/^password$/i), "Password1");
    await userEvent.type(
      screen.getByLabelText(/Confirm Password/i),
      "Password2",
    );
    await userEvent.click(screen.getByRole("button", { name: /sign up/i }));

    expect(screen.getByText(/passwords do not match/i)).toBeInTheDocument();

    // Clear confirmed password
    await userEvent.clear(screen.getByLabelText(/Confirm Password/i));

    await userEvent.type(
      screen.getByLabelText(/Confirm Password/i),
      "Password1",
    );

    expect(
      screen.queryByText(/passwords do not match/i),
    ).not.toBeInTheDocument();
  });

  it("shows validation error when user username exists", async () => {
    localStorage.setItem(
      "loginDashboardUsers",
      JSON.stringify([
        {
          username: "Radu",
          email: "radu@example.com",
          password: "Password1",
        },
      ]),
    );
    render(<LoginDashboardSignUpForm />);
    await userEvent.type(screen.getByLabelText(/username/i), "Radu");
    await userEvent.type(screen.getByLabelText(/email/i), "radu@example.com");
    await userEvent.type(screen.getByLabelText(/^password$/i), "Password1");
    await userEvent.type(
      screen.getByLabelText(/confirm password/i),
      "Password1",
    );
    await userEvent.click(screen.getByRole("checkbox"));
    await userEvent.click(screen.getByRole("button", { name: /sign up/i }));

    expect(
      screen.getByText(/this username is already taken/i),
    ).toBeInTheDocument();
  });

  it("shows validation error when user already exists", async () => {
    localStorage.setItem(
      "loginDashboardUsers",
      JSON.stringify([
        {
          fullName: "Ionut",
          email: "radu@example.com",
          password: "Password1",
        },
      ]),
    );
    render(<LoginDashboardSignUpForm />);
    await userEvent.type(screen.getByLabelText(/username/i), "Radu");
    await userEvent.type(screen.getByLabelText(/email/i), "radu@example.com");
    await userEvent.type(screen.getByLabelText(/^password$/i), "Password1");
    await userEvent.type(
      screen.getByLabelText(/confirm password/i),
      "Password1",
    );
    await userEvent.click(screen.getByRole("checkbox"));
    await userEvent.click(screen.getByRole("button", { name: /sign up/i }));

    expect(
      screen.getByText(/This email is already registered/i),
    ).toBeInTheDocument();
  });

  it("submits successfully and calls login + redirect", async () => {
    render(<LoginDashboardSignUpForm />);

    await userEvent.type(screen.getByLabelText(/username/i), "Radu");
    await userEvent.type(screen.getByLabelText(/email/i), "radu@example.com");
    await userEvent.type(screen.getByLabelText(/^password$/i), "Password1");
    await userEvent.type(
      screen.getByLabelText(/confirm password/i),
      "Password1",
    );
    await userEvent.click(screen.getByRole("checkbox"));
    await userEvent.click(screen.getByRole("button", { name: /sign up/i }));

    expect(mockLogin).toHaveBeenCalled();
    expect(mockReplace).toHaveBeenCalled();
  });

  it("saves new user in localStorage on successful sign up", async () => {
    render(<LoginDashboardSignUpForm />);

    await userEvent.type(screen.getByLabelText(/username/i), "Radu");
    await userEvent.type(screen.getByLabelText(/email/i), "radu@example.com");
    await userEvent.type(screen.getByLabelText(/^password$/i), "Password1");
    await userEvent.type(
      screen.getByLabelText(/confirm password/i),
      "Password1",
    );
    await userEvent.click(screen.getByRole("checkbox"));
    await userEvent.click(screen.getByRole("button", { name: /sign up/i }));

    const storedUsers = JSON.parse(
      localStorage.getItem("loginDashboardUsers") || "[]",
    );

    expect(storedUsers[0].email).toBe("radu@example.com");
  });
});
