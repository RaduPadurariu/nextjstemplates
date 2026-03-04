import { render, screen } from "@testing-library/react";
import PortalTemplates from "./PortalTemplates";
import { portalTemplatesList } from "@/data/portalData";
import "@testing-library/jest-dom";

describe("PortalTemplates", () => {
  it("renders all template links with correct href", () => {
    render(<PortalTemplates />);

    portalTemplatesList.forEach((template) => {
      const titleLink = screen.getByRole("link", { name: template.title });

      expect(titleLink).toHaveAttribute("href", template.link);
    });
  });
});
