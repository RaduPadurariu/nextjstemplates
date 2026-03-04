import { fireEvent, render, screen } from "@testing-library/react";
import TravelContactForm from "./TravelContactForm";
import userEvent from "@testing-library/user-event";

describe("Testing contact form", () => {
  it("render all for components", () => {
    render(<TravelContactForm />);
    expect(screen.getByLabelText(/Name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Subject/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Message/i)).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /send message/i }),
    ).toBeInTheDocument();
  });

  it("shows validation errors when submit with empty fields", () => {
    render(<TravelContactForm />);
    fireEvent.click(screen.getByRole("button", { name: /send message/i }));
    expect(screen.getByText(/name is required/i)).toBeInTheDocument();
    expect(screen.getByText(/email is required/i)).toBeInTheDocument();
    expect(screen.getByText(/subject is required/i)).toBeInTheDocument();
    expect(screen.getByText(/message is required/i)).toBeInTheDocument();
  });

  it("shows validation error on email invalid", async () => {
    render(<TravelContactForm />);

    await userEvent.type(screen.getByLabelText(/Email/i), "invalid@email");
    await userEvent.click(
      screen.getByRole("button", { name: /send message/i }),
    );

    expect(
      await screen.findByText(/please enter a valid email address/i),
    ).toBeInTheDocument();
  });

  it("submits the form successfully", async () => {
    render(<TravelContactForm />);

    await userEvent.type(screen.getByLabelText(/name/i), "Radu");
    await userEvent.type(screen.getByLabelText(/email/i), "email@example.com");
    await userEvent.type(screen.getByLabelText(/subject/i), "Test subject");
    await userEvent.type(screen.getByLabelText(/message/i), "Test message");
    await userEvent.click(
      screen.getByRole("button", { name: /send message/i }),
    );

    expect(screen.getByText(/message sent successfully/i)).toBeInTheDocument();
  });

  it("resets all the form element after success", async () => {
    render(<TravelContactForm />);

    await userEvent.type(screen.getByLabelText(/name/i), "Radu");
    await userEvent.type(screen.getByLabelText(/email/i), "email@example.com");
    await userEvent.type(screen.getByLabelText(/subject/i), "Test subject");
    await userEvent.type(screen.getByLabelText(/message/i), "Test message");
    await userEvent.click(
      screen.getByRole("button", { name: /send message/i }),
    );

    expect(screen.getByLabelText(/name/i)).toHaveValue("");
    expect(screen.getByLabelText(/email/i)).toHaveValue("");
    expect(screen.getByLabelText(/subject/i)).toHaveValue("");
    expect(screen.getByLabelText(/message/i)).toHaveValue("");
  });
});
