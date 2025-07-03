import { render, screen } from "@testing-library/react";
import PortalHero from "./PortalHero";

describe("PortalHero", () => {
  it("renders headline text", () => {
    render(<PortalHero />);
    expect(
      screen.getByRole("heading", {
        name: /Next\.js Templates with Tailwind CSS/i,
      })
    ).toBeInTheDocument();
  });

  it("renders 'Explore Templates' link", () => {
    render(<PortalHero />);
    expect(
      screen.getByRole("link", { name: /Explore Templates/i })
    ).toHaveAttribute("href", "#portalTemplates");
  });

  it("renders 'Visit Portfolio' link", () => {
    render(<PortalHero />);
    expect(
      screen.getByRole("link", { name: /Visit Portfolio/i })
    ).toHaveAttribute("href", "https://radupadurariu.netlify.app");
  });
});
