import { fireEvent, render, screen } from "@testing-library/react";
import ShopContactForm from "./ShopContactForm";
import userEvent from "@testing-library/user-event";

describe("Testing contact form", () => {
  it("renders all form components", () => {
    render(<ShopContactForm />);
    expect(screen.getByLabelText(/Name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Message/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /Submit/i })).toBeInTheDocument();
  });

  it("shows validation errors when submit with empty fields", () => {
    render(<ShopContactForm />);
    fireEvent.click(screen.getByRole("button", { name: /submit/i }));
    expect(screen.getByText(/name is required/i)).toBeInTheDocument();
    expect(screen.getByText(/email is required/i)).toBeInTheDocument();
    expect(screen.getByText(/message is required/i)).toBeInTheDocument();
  });

  it("shows validation error on email invalid", async () => {
    render(<ShopContactForm />);

    await userEvent.type(screen.getByLabelText(/email/i), "invalid@email");
    await userEvent.click(screen.getByRole("button", { name: /submit/i }));

    expect(
      await screen.findByText(/please enter a valid email address/i),
    ).toBeInTheDocument();
  });

  it("submits the form successfully", async () => {
    render(<ShopContactForm />);

    await userEvent.type(screen.getByLabelText(/name/i), "Radu");
    await userEvent.type(screen.getByLabelText(/email/i), "email@example.com");
    await userEvent.type(screen.getByLabelText(/message/i), "Test message");

    await userEvent.click(screen.getByRole("button", { name: /submit/i }));

    expect(screen.getByText(/message sent successfully/i)).toBeInTheDocument();
  });

  it("resets all the form element after success", async () => {
    render(<ShopContactForm />);

    await userEvent.type(screen.getByLabelText(/name/i), "Radu");
    await userEvent.type(screen.getByLabelText(/email/i), "email@example.com");
    await userEvent.type(screen.getByLabelText(/message/i), "Test message");
    await userEvent.click(screen.getByRole("button", { name: /submit/i }));

    expect(screen.getByLabelText(/name/i)).toHaveValue("");
    expect(screen.getByLabelText(/email/i)).toHaveValue("");
    expect(screen.getByLabelText(/message/i)).toHaveValue("");
  });
});
