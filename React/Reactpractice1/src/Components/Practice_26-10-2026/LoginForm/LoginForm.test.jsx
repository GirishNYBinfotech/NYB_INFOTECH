import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect } from "vitest";
import LoginForm from "./LoginForm";

describe("LoginForm", () => {
  it("renders the email input and submit button", () => {
    render(<LoginForm />);

    expect(
      screen.getByRole("textbox", { name: /email/i })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("button", { name: /submit/i })
    ).toBeInTheDocument();
  });

  it("allows users to type into the email field", async () => {
    const user = userEvent.setup();

    render(<LoginForm />);

    const emailInput = screen.getByRole("textbox", {
      name: /email/i,
    });

    await user.type(emailInput, "test@example.com");

    expect(emailInput).toHaveValue("test@example.com");
  });

  it("shows an error for an invalid email", async () => {
    const user = userEvent.setup();

    render(<LoginForm />);

    await user.type(
      screen.getByLabelText(/email/i),
      "invalid-email"
    );

    await user.click(
      screen.getByRole("button", { name: /submit/i })
    );

    expect(screen.getByRole("alert"))
      .toHaveTextContent("Enter a valid email");
  });

  it("submits successfully with a valid email", async () => {
    const user = userEvent.setup();

    render(<LoginForm />);

    await user.type(
      screen.getByLabelText(/email/i),
      "test@example.com"
    );

    await user.click(
      screen.getByRole("button", { name: /submit/i })
    );

    expect(screen.getByText(
      "Form submitted successfully!"
    )).toBeInTheDocument();
  });
});