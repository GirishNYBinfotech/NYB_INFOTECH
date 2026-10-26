import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect } from "vitest";
import Counter from "./Counter";

describe("Counter Component", () => {
  it("renders the initial count", () => {
    render(<Counter />);

    expect(
      screen.getByRole("heading", { name: "Count: 0" })
    ).toBeInTheDocument();
  });

  it("increments the count on button click", async () => {
    const user = userEvent.setup();

    render(<Counter />);

    await user.click(
      screen.getByRole("button", { name: "Increment" })
    );

    expect(
      screen.getByRole("heading", { name: "Count: 1" })
    ).toBeInTheDocument();
  });
});