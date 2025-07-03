import { render, screen } from "@testing-library/react";
import PortalTemplates from "./PortalTemplates";
import { portalTemplatesList } from "@/data/portalData";
import "@testing-library/jest-dom";

describe("PortalTemplates", () => {
  it("renders all template links with correct href", () => {
    render(<PortalTemplates />);

    portalTemplatesList.forEach((template) => {
      const links = screen.getAllByRole("link");
      const hasMatchingHref = links.some(
        (link) => link.getAttribute("href") === template.link
      );
      expect(hasMatchingHref).toBe(true);
    });
  });
});
