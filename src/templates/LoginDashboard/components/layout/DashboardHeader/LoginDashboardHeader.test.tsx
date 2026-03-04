import { render, screen } from "@testing-library/react";
import LoginDashboardHeader from "./LoginDashboardHeader";
import userEvent from "@testing-library/user-event";

const mockUseAuthStore = jest.fn();
const mockLogout = jest.fn();

// make sure link Sign In from Navbar is not included in test.
jest.mock("./DashboardNavbar/LoginDashboardNavbar", () => {
  function MockNavbar() {
    return <div data-testid="mock-navbar" />;
  }
  return MockNavbar;
});

jest.mock("@/templates/LoginDashboard/store/useAuthStore", () => ({
  __esModule: true,
  default: () => mockUseAuthStore(),
}));

describe("LoginDashboardHeader - authentication state rendering", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("hides auth buttons when not initialized", () => {
    mockUseAuthStore.mockReturnValue({
      isInitialized: false,
      isAuthenticated: false,
      logout: mockLogout,
    });
    render(<LoginDashboardHeader />);

    expect(
      screen.queryByRole("link", { name: /sign in/i }),
    ).not.toBeInTheDocument();
    expect(
      screen.queryByRole("link", { name: /log out/i }),
    ).not.toBeInTheDocument();
  });

  it("shows Sign In when user is not authenticated", () => {
    mockUseAuthStore.mockReturnValue({
      isInitialized: true,
      isAuthenticated: false,
      logout: mockLogout,
    });
    render(<LoginDashboardHeader />);

    expect(screen.getByRole("link", { name: /Sign In/i })).toBeInTheDocument();
    expect(
      screen.queryByRole("link", { name: /log out/i }),
    ).not.toBeInTheDocument();
  });

  it("shows Log out when user is authenticated", () => {
    mockUseAuthStore.mockReturnValue({
      isInitialized: true,
      isAuthenticated: true,
      logout: mockLogout,
    });
    render(<LoginDashboardHeader />);

    expect(
      screen.queryByRole("link", { name: /sign in/i }),
    ).not.toBeInTheDocument();
    expect(screen.getByRole("link", { name: /Log out/i })).toBeInTheDocument();
  });

  it("calls logout when Log out link is clicked", async () => {
    mockUseAuthStore.mockReturnValue({
      isInitialized: true,
      isAuthenticated: true,
      logout: mockLogout,
    });
    render(<LoginDashboardHeader />);
    const logoutLink = screen.getByRole("link", { name: /log out/i });

    await userEvent.click(logoutLink);

    expect(logoutLink).toHaveAttribute("href", "/loginDashboard/auth");
    expect(mockLogout).toHaveBeenCalled();
  });
});
