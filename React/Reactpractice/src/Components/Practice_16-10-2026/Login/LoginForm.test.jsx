import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import LoginForm from "./LoginForm";

test("tests form inputs, validation, and user interactions", async () => {
  const user = userEvent.setup();

  render(<LoginForm />);

  // 1. Test whether input fields and button exist
  const emailInput = screen.getByLabelText(/email/i);
  const passwordInput = screen.getByLabelText(/password/i);
  const loginButton = screen.getByRole("button", {
    name: /login/i,
  });

  expect(emailInput).toBeInTheDocument();
  expect(passwordInput).toBeInTheDocument();
  expect(loginButton).toBeInTheDocument();

  // 2. Test user input
  await user.type(emailInput, "invalid-email");
  await user.type(passwordInput, "123456");

  expect(emailInput).toHaveValue("invalid-email");
  expect(passwordInput).toHaveValue("123456");

  // 3. Test email validation
  await user.click(loginButton);

  expect(
    await screen.findByRole("alert")
  ).toHaveTextContent("Enter a valid email");

  // 4. Correct email and test successful submission
  await user.clear(emailInput);
  await user.type(emailInput, "test@example.com");
  await user.click(loginButton);

  // Password has 6 characters, so login succeeds
  expect(
    await screen.findByRole("status")
  ).toHaveTextContent("Login successful!");
});