import { fireEvent, render, screen } from "@testing-library/react";
import FashionContactForm from "./FashionContactForm";
import userEvent from "@testing-library/user-event";

describe("Testing contact form", () => {
  it("renders all form components", () => {
    render(<FashionContactForm />);
    expect(screen.getByLabelText(/Name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Subject/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Message/i)).toBeInTheDocument();
    expect(
      screen.getByRole("checkbox", { name: /using this form you agree/i }),
    ).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /Submit/i })).toBeInTheDocument();
  });

  it("shows validation errors when submit with empty fields", () => {
    render(<FashionContactForm />);
    fireEvent.click(screen.getByRole("button", { name: /submit/i }));
    expect(screen.getByText(/name required./i)).toBeInTheDocument();
    expect(screen.getByText(/email required./i)).toBeInTheDocument();
    expect(screen.getByText(/subject required./i)).toBeInTheDocument();
    expect(screen.getByText(/message required./i)).toBeInTheDocument();
    expect(
      screen.getByText(/you must agree to the terms and conditions./i),
    ).toBeInTheDocument();
  });

  it("shows validation error on email invalid", async () => {
    render(<FashionContactForm />);

    await userEvent.type(screen.getByLabelText(/email/i), "invalid@email");
    await userEvent.click(screen.getByRole("button", { name: /submit/i }));

    expect(
      await screen.findByText(/please enter a valid email address./i),
    ).toBeInTheDocument();
  });

  it("submits the form successfully", async () => {
    render(<FashionContactForm />);

    await userEvent.type(screen.getByLabelText(/name/i), "Radu");
    await userEvent.type(screen.getByLabelText(/email/i), "email@example.com");
    await userEvent.type(screen.getByLabelText(/subject/i), "Test subject");
    await userEvent.type(screen.getByLabelText(/message/i), "Test message");
    await userEvent.click(screen.getByRole("checkbox"));

    await userEvent.click(screen.getByRole("button", { name: /submit/i }));

    expect(screen.getByText(/message sent successfully/i)).toBeInTheDocument();
  });

  it("resets all the form element after success", async () => {
    render(<FashionContactForm />);

    await userEvent.type(screen.getByLabelText(/name/i), "Radu");
    await userEvent.type(screen.getByLabelText(/email/i), "email@example.com");
    await userEvent.type(screen.getByLabelText(/subject/i), "Test subject");
    await userEvent.type(screen.getByLabelText(/message/i), "Test message");
    await userEvent.click(screen.getByRole("checkbox"));
    await userEvent.click(screen.getByRole("button", { name: /submit/i }));

    expect(screen.getByLabelText(/name/i)).toHaveValue("");
    expect(screen.getByLabelText(/email/i)).toHaveValue("");
    expect(screen.getByLabelText(/subject/i)).toHaveValue("");
    expect(screen.getByLabelText(/message/i)).toHaveValue("");
    expect(screen.getByRole("checkbox")).not.toBeChecked();
  });
});
