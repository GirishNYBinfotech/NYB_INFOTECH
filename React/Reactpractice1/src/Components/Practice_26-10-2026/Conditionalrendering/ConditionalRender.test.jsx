import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect } from "vitest";
import ConditionalRender from "./ConditionaRender";

describe("Conditional Rendering", () => {
  it("shows login message initially", () => {
    render(<ConditionalRender/>);

    expect(
      screen.getByText("Please log in")
    ).toBeInTheDocument();
  });

  it("shows welcome message after clicking Login", async () => {
    const user = userEvent.setup();

    render(<ConditionalRender />);

    await user.click(
      screen.getByRole("button", { name: "Login" })
    );

    expect(
      screen.getByText("Welcome, User!")
    ).toBeInTheDocument();
  });

  it("hides login message after logging in", async () => {
    const user = userEvent.setup();
    render(<ConditionalRender />);

    await user.click(
      screen.getByRole("button", { name: "Login" })
    );

    expect(
      screen.queryByText("Please log in")
    ).not.toBeInTheDocument();
  });

  it("logs out when the Logout button is clicked", async () => {
    const user = userEvent.setup();
    render(<ConditionalRender />);

    await user.click(
      screen.getByRole("button", { name: "Login" })
    );

    await user.click(
      screen.getByRole("button", { name: "Logout" })
    );

    expect(
      screen.getByText("Please log in")
    ).toBeInTheDocument();
  });
});