import { render, screen } from "@testing-library/react";
import PortalNavbar from "@/components/Navbar/PortalNavbar";
import userEvent from "@testing-library/user-event";

describe("PortalNavbar", () => {
  it("renders the Get Started button", () => {
    render(<PortalNavbar />);
    expect(screen.getByText("Get Started")).toBeInTheDocument();
  });

  it("toggles menu visibility on burger icon click", async () => {
    render(<PortalNavbar />);
    const burger = screen.getByTestId("burger");

    const user = userEvent.setup();

    await user.click(burger);
    const menu = screen.getByRole("navigation").querySelector("ul");
    expect(menu).toHaveClass("flex");

    await user.click(burger);
    expect(menu).toHaveClass("hidden");
  });
});
