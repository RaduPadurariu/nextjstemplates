import { render, screen } from "@testing-library/react";
import LoginDashboardSignIn from "./LoginDashboardSignIn";

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

describe("LoginDashboardSignIn - guest only access", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("redirects authenticated users to home", () => {
    mockUseAuthStore.mockReturnValue({
      isAuthenticated: true,
    });

    render(<LoginDashboardSignIn />);
    expect(
      screen.queryByRole("button", { name: /sign in/i }),
    ).not.toBeInTheDocument();
    expect(mockReplace).toHaveBeenCalledWith("/loginDashboard/home");
  });

  it("displays login page if user is not authenticated", () => {
    mockUseAuthStore.mockReturnValue({
      isAuthenticated: false,
    });

    render(<LoginDashboardSignIn />);

    expect(mockReplace).not.toHaveBeenCalled();
    expect(
      screen.getByRole("button", { name: /sign in/i }),
    ).toBeInTheDocument();
  });
});
