import { render, screen } from "@testing-library/react";
import LoginDashboardProfileDataForm from "./LoginDashboardProfileDataForm";
import userEvent from "@testing-library/user-event";

const defaultProps = {
  isAuthenticated: true,
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
  email: "radu@example.com",
  isSaved: false,
  onSubmit: jest.fn(),
  onDelete: jest.fn(),
};

describe("LoginDashboardProfileDataForm - render", () => {
  it("renders all profile fields correctly", () => {
    render(<LoginDashboardProfileDataForm {...defaultProps} />);

    // User info
    expect(screen.getByLabelText(/username/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/email address/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/first name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/last name/i)).toBeInTheDocument();

    // Contact
    expect(screen.getByLabelText(/^address$/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/^city$/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/country/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/postal code/i)).toBeInTheDocument();

    // About
    expect(screen.getByLabelText(/about me/i)).toBeInTheDocument();

    // Buttons
    expect(
      screen.getByRole("button", { name: /save data/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /delete account/i }),
    ).toBeInTheDocument();
  });

  it("calls onSubmit when form is submitted", async () => {
    const mockSubmit = jest.fn();

    render(
      <LoginDashboardProfileDataForm {...defaultProps} onSubmit={mockSubmit} />,
    );

    await userEvent.type(screen.getByLabelText(/first name/i), "Radu");
    await userEvent.type(screen.getByLabelText(/last name/i), "Popescu");
    await userEvent.type(screen.getByLabelText(/^address$/i), "Street 1");
    await userEvent.type(screen.getByLabelText(/^city$/i), "Bucharest");
    await userEvent.type(screen.getByLabelText(/country/i), "Romania");
    await userEvent.type(screen.getByLabelText(/postal code/i), "123456");
    await userEvent.type(screen.getByLabelText(/about me/i), "Frontend dev");

    await userEvent.click(screen.getByRole("button", { name: /save data/i }));

    expect(mockSubmit).toHaveBeenCalled();
  });

  it("shows success message when isSaved is true", () => {
    render(<LoginDashboardProfileDataForm {...defaultProps} isSaved={true} />);

    expect(screen.getByText(/your data has been saved./i)).toBeInTheDocument();
  });

  it("calls onDelete when delete button is clicked", async () => {
    const mockDelete = jest.fn();

    render(
      <LoginDashboardProfileDataForm {...defaultProps} onDelete={mockDelete} />,
    );

    await userEvent.click(
      screen.getByRole("button", { name: /delete account/i }),
    );

    expect(mockDelete).toHaveBeenCalled();
  });
});
