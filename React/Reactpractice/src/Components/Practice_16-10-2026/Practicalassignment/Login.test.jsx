import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Login from "./Login";
import { MemoryRouter } from "react-router-dom";

describe("Login component", () => {
  it("shows the login form", () => {
    render(
      <MemoryRouter>
        <Login />
      </MemoryRouter>
    );

    expect(
      screen.getByRole("heading", {
        name: /employee management login/i,
      })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("button", { name: /login/i })
    ).toBeInTheDocument();
  });

  it("accepts username and password", async () => {
    const user = userEvent.setup();

    render(
      <MemoryRouter>
        <Login />
      </MemoryRouter>
    );

    await user.type(
      screen.getByPlaceholderText("Username"),
      "admin"
    );

    await user.type(
      screen.getByPlaceholderText("Password"),
      "1234"
    );

    expect(screen.getByPlaceholderText("Username"))
      .toHaveValue("admin");

    expect(screen.getByPlaceholderText("Password"))
      .toHaveValue("1234");
  });
});