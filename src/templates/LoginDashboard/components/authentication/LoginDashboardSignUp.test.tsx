import { render, screen } from "@testing-library/react";
import LoginDashboardSignUp from "./LoginDashboardSignUp";

const mockReplace = jest.fn();
const mockUseAuthStore = jest.fn();

jest.mock("next/navigation", () => ({
  useRouter: () => ({
    replace: mockReplace,
  }),
}));

jest.mock("@/templates/LoginDashboard/store/useAuthStore", () => ({
  __esModule: true,
  default: () => mockUseAuthStore(),
}));

describe("LoginDashboardSignUp - guest only access", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("redirects authenticated users to home", () => {
    mockUseAuthStore.mockReturnValue({
      isAuthenticated: true,
    });

    render(<LoginDashboardSignUp />);

    expect(
      screen.queryByRole("button", { name: /sign up/i }),
    ).not.toBeInTheDocument();
    expect(mockReplace).toHaveBeenCalledWith("/loginDashboard/home");
  });

  it("displays register page if user is not authenticated", () => {
    mockUseAuthStore.mockReturnValue({
      isAuthenticated: false,
    });

    render(<LoginDashboardSignUp />);

    expect(mockReplace).not.toHaveBeenCalled();
    expect(
      screen.getByRole("button", { name: /sign up/i }),
    ).toBeInTheDocument();
  });
});
